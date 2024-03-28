(function(Scratch){
/* eslint-disable no-alert */
/* eslint-disable newline-per-chained-call */
const ArgumentType = Scratch.ArgumentType;//require('../../extension-support/argument-type');
const BlockType = Scratch.BlockType;//require('../../extension-support/block-type');
//const formatMessage = require('format-message');

var DOMPurify;//const DOMPurify = require('dompurify');

const localisation = {
    availableLocales: ['en', 'fr'],
    messages: {
        'get current URL': {
            en: 'current URL',
            fr: 'URL actuelle'
        },
        'check field existence in URL': {
            en: 'field [FIELD] exists in current URL',
            fr: 'le champ [FIELD] existe dans l\'URL courante'
        },
        'get field value from URL': {
            en: 'field [FIELD] in current URL',
            fr: 'champ [FIELD] de l\'URL courante'
        },
        'set field value from URL': {
            en: 'set field [FIELD] in current URL to [VALUE]',
            fr: 'mettre le champ [FIELD] de l\'URL courante à [VALUE]'
        },
        'open URL': {
            en: 'open [URL] URL',
            fr: 'ouvrir l\'URL [URL]'
        },
        'save as file': {
            en: 'save [CONTENT] as file [FILE_NAME]',
            fr: 'enregistrer [CONTENT] dans le fichier [FILE_NAME]'
        },
        'open text file': {
            en: 'ask the user to open a text file',
            fr: 'demander à l\'utilisateur d\'ouvrir un fichier texte'
        },
        'open binary file': {
            en: 'ask the user to open a binary file',
            fr: 'demander à l\'utilisateur d\'ouvrir un fichier binaire'
        },
        'localStorage set item': {
            en: 'set [NAME] to [VALUE] in local storage',
            fr: 'localStorage : mettre [NAME] à [VALUE]'
        },
        'localStorage get item': {
            en: 'item [NAME] in local storage',
            fr: 'localStorage : [NAME]'
        },
        'localStorage remove item': {
            en: 'remove [NAME] from local storage',
            fr: 'localStorage : supprimer [NAME]'
        },
        'localStorage item exists': {
            en: 'item [NAME] exists in local storage?',
            fr: 'localStorage : l\'élément [NAME] existe?'
        },
        'set HTML': {
            en: 'set HTML to [NAME]',
            fr: 'mettre le HTML à [NAME]'
        },
        'take picture and save it to file': {
            en: 'save webcam picture to file [PICTURE_NAME]',
            fr: 'enregistrer la webcam dans le fichier [PICTURE_NAME]'
        },
        'save webcam picture': {
            en: 'save webcam picture',
            fr: 'enregistrer la webcam'
        },
        'window alert': {
            en: 'dialog [MESSAGE]',
            fr: 'dialogue [MESSAGE]'
        },
        'window prompt as reporter': {
            en: 'dialog with question [QUESTION] and default [DEFAULT]',
            fr: 'dialogue avec question [QUESTION] et valeur [DEFAULT]'
        },
        'window prompt without default as reporter': {
            en: 'dialog with question [QUESTION]',
            fr: 'dialogue avec question [QUESTION]'
        },
        'window prompt as command': {
            en: 'dialog with message [MESSAGE] and value [VALUE]',
            fr: 'dialogue avec message [MESSAGE] et valeur [VALUE]'
        },
        'window confirm': {
            en: 'dialog with confirmation [MESSAGE]',
            fr: 'dialogue avec confirmation [MESSAGE]'
        },
        'check color scheme': {
            en: 'current color scheme',
            fr: 'mode couleur actuel'
        },
        'get document title': {
            en: 'page title',
            fr: 'titre de la page'
        },
        'set document title': {
            en: 'set page title to [VALUE]',
            fr: 'définir le titre de la page à [VALUE]'
        },
        'can share URL': {
            en: 'can share URL?',
            fr: 'partage de l\'URL possible ?'
        },
        'share URL': {
            en: 'share [URL] with [TITLE] and [MESSAGE]',
            fr: 'partager [URL] avec [TITLE] et [MESSAGE]'
        },
        'can set favicon': {
            en: 'can set favicon with URL?',
            fr: 'utiliser l\'URL comme favicon possible ?'
        },
        'set favicon': {
            en: 'use [URL] as favicon',
            fr: 'utiliser [URL] comme favicon'
        },
        'copy text to clipboard': {
            en: 'copy [TEXT] to clipboard',
            fr: 'copier [TEXT] dans le presse-papier'
        },
        'can display notification': {
            en: 'can display notification?',
            fr: 'affichage de notification possible ?'
        },
        'display notification': {
            en: 'display notification with title: [TITLE] and message: [MESSAGE] during [DURATION] seconds',
            fr: 'afficher une notification avec titre : [TITLE] et message : [MESSAGE] pendant [DURATION] secondes'
        },
        'display notification with icon': {
            // eslint-disable-next-line max-len
            en: 'display notification with title: [TITLE] and message: [MESSAGE] during [DURATION] seconds and [URL] as icon',
            // eslint-disable-next-line max-len
            fr: 'afficher une notification avec titre : [TITLE] et message : [MESSAGE] pendant [DURATION] secondes et [URL] comme icône'
        }
    }
};

// Source: https://gist.github.com/bgrins/6194623
const isDataUri = function (string) {
    // eslint-disable-next-line max-len, no-useless-escape
    const regex = /^\s*data:([a-z]+\/[a-z+]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i;
    return !!string.match(regex);
};

/**
 * Icon svg to be displayed at the left edge of each extension block, encoded as a data URI.
 * @type {string}
 */
// eslint-disable-next-line max-len
const menuIconURI = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNyAyNSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7fS5jbHMtMntmaWxsOiNjZTU3NGU7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJDYWxxdWVfMiIgZGF0YS1uYW1lPSJDYWxxdWUgMiI+PGcgaWQ9IkxheWVyXzEiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iMjciIGhlaWdodD0iMjUiLz48ZyBpZD0iQnJvd3NlciI+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMjAsMTguMjNIN2EuNzguNzgsMCwwLDEtLjc4LS43OFY3LjlBMS4xMywxLjEzLDAsMCwxLDcuMzMsNi43N0gxOS42N0ExLjEzLDEuMTMsMCwwLDEsMjAuNzksNy45djkuNTVBLjc4Ljc4LDAsMCwxLDIwLDE4LjIzWk03LjMzLDcuMjlhLjYuNiwwLDAsMC0uNi42MXY5LjU1YS4yNi4yNiwwLDAsMCwuMjYuMjZIMjBhLjI2LjI2LDAsMCwwLC4yNi0uMjZWNy45YS42LjYsMCwwLDAtLjYtLjYxWiIvPjxnIGlkPSJ0b3AiPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTcuMzMsN0gxOS42N2EuODYuODYsMCwwLDEsLjg2Ljg2VjkuNjVhMCwwLDAsMCwxLDAsMEg2LjQ3YTAsMCwwLDAsMSwwLDBWNy45QS44Ni44NiwwLDAsMSw3LjMzLDdaIi8+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg==';
// eslint-disable-next-line max-len
const blockIconURI = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNyAyNSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7fS5jbHMtMntmaWxsOiNmZmY7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJDYWxxdWVfMiIgZGF0YS1uYW1lPSJDYWxxdWUgMiI+PGcgaWQ9IkxheWVyXzEiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iMjciIGhlaWdodD0iMjUiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xOS42Niw2LjdINy4zM0ExLjEyLDEuMTIsMCwwLDAsNi4yMSw3LjgydjkuNTVhLjc4Ljc4LDAsMCwwLC43OC43OEgyMGEuNzguNzgsMCwwLDAsLjc3LS43OFY3LjgyQTEuMTIsMS4xMiwwLDAsMCwxOS42Niw2LjdaTTIwLDE3LjYzSDdhLjI1LjI1LDAsMCwxLS4yNi0uMjZWOS41N0gyMC4yN3Y3LjhBLjI2LjI2LDAsMCwxLDIwLDE3LjYzWiIvPjwvZz48L2c+PC9zdmc+';

const isSafariNavigator = !navigator.userAgent.includes('Chrome') && navigator.userAgent.includes('Safari');
class Scratch3AdaBrowserBlocks {
    constructor (runtime) {
        /**
         * The runtime instantiating this block package.
         * @type {Runtime}
         */
        this.runtime = runtime;
    }
    
    /**
     * @returns {object} metadata for this extension and its blocks.
     */
    getInfo () {
        this._locale = this.setLocale();
        return {
            id: 'adabrowser',
            name: 'Browser',
            menuIconURI: menuIconURI,
            blockIconURI: blockIconURI,
            docsURI: 'https://adacraft.notion.site/9c8fb3c7ed6240e181290b2f1c70a651',
            color1: '#386bff',
            blocks: [
                {
                    opcode: 'getUrl',
                    blockType: BlockType.REPORTER,
                    text: this.getMessage('get current URL')
                },
                {
                    opcode: 'checkIfQueryStringFieldExists',
                    blockType: BlockType.BOOLEAN,
                    text: this.getMessage('check field existence in URL'),
                    arguments: {
                        FIELD: {
                            type: ArgumentType.STRING,
                            defaultValue: 'search'
                        }
                    }
                },
                {
                    opcode: 'getQueryStringFieldValue',
                    blockType: BlockType.REPORTER,
                    text: this.getMessage('get field value from URL'),
                    arguments: {
                        FIELD: {
                            type: ArgumentType.STRING,
                            defaultValue: 'search'
                        }
                    }
                },
                {
                    opcode: 'setQueryStringFieldValue',
                    blockType: BlockType.COMMAND,
                    text: this.getMessage('set field value from URL'),
                    arguments: {
                        FIELD: {
                            type: ArgumentType.STRING,
                            defaultValue: 'search'
                        },
                        VALUE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'value'
                        }
                    }
                },
                {
                    opcode: 'openUrl',
                    blockType: BlockType.COMMAND,
                    text: this.getMessage('open URL'),
                    arguments: {
                        URL: {
                            type: ArgumentType.STRING,
                            defaultValue: 'https://adacraft.org'
                        }
                    }
                },
                {
                    opcode: 'saveAsFile',
                    blockType: BlockType.COMMAND,
                    text: this.getMessage('save as file'),
                    arguments: {
                        CONTENT: {
                            type: ArgumentType.STRING,
                            defaultValue: 'content'
                        },
                        FILE_NAME: {
                            type: ArgumentType.STRING,
                            defaultValue: 'file.txt'
                        }
                    }
                },
                {
                    opcode: 'openFileAsText',
                    blockType: BlockType.REPORTER,
                    disableMonitor: true,
                    text: this.getMessage('open text file')
                },
                // We are not sure that this is useful. What can we do from
                // adacraft with a binary content that can only be manipulated
                // as a string? Maybe nothing. Or only to avoid the formating
                // (UTF8...)?
                // So we disable it for now.
                // {
                //     opcode: 'openFileAsBinaryString',
                //     blockType: BlockType.REPORTER,
                //     text: this.getMessage('open binary file')
                // },
                {
                    opcode: 'localStorageSetItem',
                    blockType: BlockType.COMMAND,
                    text: this.getMessage('localStorage set item'),
                    arguments: {
                        NAME: {
                            type: ArgumentType.STRING,
                            defaultValue: 'name'
                        },
                        VALUE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'value'
                        }
                    }
                },
                {
                    opcode: 'localStorageGetItem',
                    blockType: BlockType.REPORTER,
                    text: this.getMessage('localStorage get item'),
                    arguments: {
                        NAME: {
                            type: ArgumentType.STRING,
                            defaultValue: 'name'
                        }
                    }
                },
                {
                    opcode: 'localStorageRemoveItem',
                    blockType: BlockType.COMMAND,
                    text: this.getMessage('localStorage remove item'),
                    arguments: {
                        NAME: {
                            type: ArgumentType.STRING,
                            defaultValue: 'name'
                        }
                    }
                },
                {
                    opcode: 'localStorageItemExists',
                    blockType: BlockType.BOOLEAN,
                    text: this.getMessage('localStorage item exists'),
                    arguments: {
                        NAME: {
                            type: ArgumentType.STRING,
                            defaultValue: 'name'
                        }
                    }
                },
                {
                    hideFromPalette: true,
                    opcode: 'setHtml',
                    blockType: BlockType.COMMAND,
                    text: this.getMessage('set HTML'),
                    arguments: {
                        NAME: {
                            type: ArgumentType.STRING,
                            defaultValue: '<h1 style="color: orange;">Hello</h1>World'
                        }
                    }
                },
                {
                    opcode: 'takePictureAndSaveWithName',
                    blockType: BlockType.COMMAND,
                    text: this.getMessage('take picture and save it to file'),
                    arguments: {
                        PICTURE_NAME: {
                            type: ArgumentType.STRING,
                            defaultValue: 'image.png'
                        }
                    }
                },
                {
                    opcode: 'takePictureAndSave',
                    blockType: BlockType.COMMAND,
                    text: this.getMessage('save webcam picture')
                },
                {
                    opcode: 'windowAlert',
                    blockType: BlockType.COMMAND,
                    text: this.getMessage('window alert'),
                    arguments: {
                        MESSAGE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'Some important information'
                        }
                    }
                },
                {
                    opcode: 'windowPromptReporter',
                    blockType: BlockType.REPORTER,
                    text: this.getMessage('window prompt as reporter'),
                    arguments: {
                        QUESTION: {
                            type: ArgumentType.STRING,
                            defaultValue: 'Please type something'
                        },
                        DEFAULT: {
                            type: ArgumentType.STRING,
                            defaultValue: 'something'
                        }
                    }
                },
                {
                    opcode: 'windowPromptNoDefaultReporter',
                    blockType: BlockType.REPORTER,
                    text: this.getMessage('window prompt without default as reporter'),
                    arguments: {
                        QUESTION: {
                            type: ArgumentType.STRING,
                            defaultValue: 'Please type something'
                        }
                    }
                },
                {
                    opcode: 'windowPromptCommand',
                    blockType: BlockType.COMMAND,
                    text: this.getMessage('window prompt as command'),
                    arguments: {
                        MESSAGE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'Please type something'
                        },
                        VALUE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'something'
                        }
                    }
                },
                {
                    opcode: 'windowConfirm',
                    blockType: BlockType.BOOLEAN,
                    text: this.getMessage('window confirm'),
                    arguments: {
                        MESSAGE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'Do you agree?'
                        }
                    }
                },
                {
                    opcode: 'prefersColorScheme',
                    blockType: BlockType.REPORTER,
                    text: this.getMessage('check color scheme')
                },
                {
                    opcode: 'getDocumentTitle',
                    blockType: BlockType.REPORTER,
                    text: this.getMessage('get document title')
                },
                {
                    opcode: 'setDocumentTitle',
                    blockType: BlockType.COMMAND,
                    text: this.getMessage('set document title'),
                    arguments: {
                        VALUE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'Title'
                        }
                    }
                },
                {
                    opcode: 'canShareURL',
                    blockType: BlockType.BOOLEAN,
                    text: this.getMessage('can share URL')
                },
                {
                    opcode: 'shareURL',
                    blockType: BlockType.COMMAND,
                    text: this.getMessage('share URL'),
                    arguments: {
                        URL: {
                            type: ArgumentType.STRING,
                            defaultValue: 'URL'
                        },
                        TITLE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'Title'
                        },
                        MESSAGE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'Message'
                        }
                    }
                },
                {
                    opcode: 'canSetFavicon',
                    blockType: BlockType.BOOLEAN,
                    text: this.getMessage('can set favicon')
                },
                {
                    opcode: 'setFavicon',
                    blockType: BlockType.COMMAND,
                    text: this.getMessage('set favicon'),
                    arguments: {
                        URL: {
                            type: ArgumentType.STRING,
                            defaultValue: 'URL'
                        }
                    }
                },
                {
                    opcode: 'copyTextToClipboard',
                    blockType: BlockType.COMMAND,
                    text: this.getMessage('copy text to clipboard'),
                    arguments: {
                        TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue: 'text'
                        }
                    }
                },
                {
                    opcode: 'canDisplayNotification',
                    blockType: BlockType.BOOLEAN,
                    text: this.getMessage('can display notification')
                },
                {
                    opcode: 'displayNotification',
                    func: 'createAndDisplayNotification',
                    blockType: BlockType.COMMAND,
                    text: this.getMessage('display notification'),
                    arguments: {
                        TITLE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'title'
                        },
                        MESSAGE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'message'
                        },
                        DURATION: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 3
                        }
                    }
                },
                {
                    opcode: 'displayNotificationWithIcon',
                    func: 'createAndDisplayNotification',
                    blockType: BlockType.COMMAND,
                    text: this.getMessage('display notification with icon'),
                    arguments: {
                        TITLE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'title'
                        },
                        MESSAGE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'message'
                        },
                        DURATION: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 3
                        },
                        URL: {
                            type: ArgumentType.STRING,
                            defaultValue: 'URL'
                        }
                    }
                }
            ]
        };
    }

    getUrl () {
        return window.location.href;
    }

    checkIfQueryStringFieldExists (args) {
        const field = args.FIELD;
        const parameters = (new URL(window.location)).searchParams;
        return parameters.has(field);
    }

    getQueryStringFieldValue (args) {
        const field = args.FIELD;
        const parameters = (new URL(window.location)).searchParams;
        const value = parameters.get(field);
        // Be sure to always return a valid string/ If the field can't be found,
        // we return an empty string.
        // eslint-disable-next-line no-negated-condition
        return value !== null ? value : '';
    }

    setQueryStringFieldValue (args) {
        const url = new URL(window.location.href);
        const parameters = new URLSearchParams(url.search);
        parameters.set(args.FIELD, args.VALUE);
        url.search = parameters.toString();
        const newCurrentUrl = url.search;
        history.pushState(
            history.state,
            document.title,
            newCurrentUrl
        );
    }

    openUrl (args) {
        window.open(args.URL, '_blank');
    }

    openFile (readType) {
        // eslint-disable-next-line no-unused-vars
        const promise = new Promise((resolve, reject) => {
            const fileInput = document.getElementById('adacraft-hidden-input-file-upload');
            fileInput.value = '';
                   
            const closeButton = document.getElementById('adacraft-modal-close-button');
            // eslint-disable-next-line arrow-parens, no-unused-vars
            const readFile = (event) => {
                closeButton.removeEventListener('click', readFile, false);
                window.removeEventListener('click', readFile, false);
                if (fileInput.value.length === 0) {
                    resolve('');
                } else {
                    // resolve(fileInput.files[0].name)
                    const reader = new FileReader();
                    // eslint-disable-next-line no-shadow
                    reader.onload = function (event) {
                        const contents = event.target.result;
                        resolve(contents);
                    };
                    const file = fileInput.files[0];
                    if (readType === 'text') {
                        reader.readAsText(file);
                    } else if (readType === 'binary') {
                        reader.readAsBinaryString(file);
                    } else {
                        resolve(
                            `unexpected error: unknown read type (${readType})`
                        );
                    }
                }
            };
            closeButton.addEventListener('click', readFile, false);
            window.addEventListener('click', readFile, false);

            const modal = document.getElementById('adacraft-modal');
            modal.style.display = 'block';
        });
        return promise;
    }

    openFileAsText () {
        return this.openFile('text');
    }

    openFileAsBinaryString () {
        // We are not sure that this is useful. What can we do from adacraft
        // with a binary content that can only be manipulated as a string? Maybe
        // nothing. Or only to avoid the formating (UTF8...)?
        return this.openFile('binary');
    }

    saveAsFile (args) {
        try {
            const element = document.createElement('a');
            const content = args.CONTENT;
            const dataUri =
                isDataUri(content)
                    // eslint-disable-next-line operator-linebreak
                    ? content
                    // eslint-disable-next-line operator-linebreak
                    : `data:text/plain;charset=utf-8,${encodeURIComponent(content)}`;
            element.setAttribute('href', dataUri);
            element.setAttribute('download', args.FILE_NAME);

            element.style.display = 'none';
            document.body.appendChild(element);

            element.click();

            document.body.removeChild(element);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(`error in saveAsFile block`);
        }
    }

    getLocalStorageKey (name) {
        let id;
        if (window.adacraft && window.adacraft.projectId) {
            id = window.adacraft.projectId;
        } else {
            id = 'default';
        }
        return `adacraft:project:${id}:${name}`;
    }

    localStorageSetItem (args) {
        localStorage.setItem(
            this.getLocalStorageKey(args.NAME),
            args.VALUE
        );
    }

    localStorageGetItem (args) {
        const value = localStorage.getItem(this.getLocalStorageKey(args.NAME));
        return value || '';
    }
    
    localStorageRemoveItem (args) {
        localStorage.removeItem(this.getLocalStorageKey(args.NAME));
    }
    
    localStorageItemExists (args) {
        return localStorage.getItem(this.getLocalStorageKey(args.NAME)) !== null;
    }

    setHtml (args) {
        try {
            const renderRoot = document.getElementById('dom-render-root');
            // eslint-disable-next-line no-warning-comments
            // TODO add a surrounding "div" before (or after?) sanitize. Because
            // if the HTML string contains a style tag and a div tag, the style
            // tag is removed.
            renderRoot.innerHTML = DOMPurify.sanitize(args.NAME);
        } catch (error) {
            return;
        }
    }

    takePictureAndSaveWithName (args) {
        if (navigator.mediaDevices) {
            navigator.mediaDevices.getUserMedia({audio: false, video: {width: 400}})
                // eslint-disable-next-line prefer-arrow-callback
                .then(function (mediaStream) {
                    const video = document.createElement('video');
                    video.srcObject = mediaStream;
                    // eslint-disable-next-line no-unused-vars
                    video.onloadedmetadata = function (e) {
                        video.play();
                        const canvas1 = document.createElement('canvas');
                        const ctx = canvas1.getContext('2d');
                        canvas1.height = video.videoHeight;
                        canvas1.width = video.videoWidth;
                        ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
                        if (navigator.msSaveOrOpenBlob) {
                            const blobObject = canvas1.msToBlob();
                            window.navigator.msSaveOrOpenBlob(blobObject, args.PICTURE_NAME);
                        } else {
                            const elem = document.createElement('a');
                            elem.href = canvas1.toDataURL('image/png');
                            elem.download = args.PICTURE_NAME;
                            elem.click();
                        }
                    };
                
                });
        }
    }

    takePictureAndSave () {
        const now = new Date();
        // Function toISOString gives "2021-12-26T16:30:43.590Z" and we want
        // "20211226T163043Z"
        const isoTimestamp = `${now.toISOString().replaceAll('-', '').replaceAll(':', '').slice(0, 15)}Z`;
        const args = {
            PICTURE_NAME: `image_${isoTimestamp}.png`
        };
        this.takePictureAndSaveWithName(args);
    }

    windowAlert (args) {
        window.alert(args.MESSAGE);
    }

    windowPromptReporter (args) {
        return window.prompt(args.QUESTION, args.DEFAULT);
    }

    windowPromptNoDefaultReporter (args) {
        return window.prompt(args.QUESTION, '');
    }

    windowPromptCommand (args) {
        window.prompt(args.MESSAGE, args.VALUE);
    }

    windowConfirm (args) {
        return window.confirm(args.MESSAGE);
    }

    prefersColorScheme () {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches) {
            return 'dark';
            // eslint-disable-next-line no-else-return
        } else {
            return 'light';
        }
    }

    getDocumentTitle () {
        return document.title;
    }

    setDocumentTitle (args) {
        document.title = args.VALUE;
    }

    canShareURL () {
        // eslint-disable-next-line no-negated-condition
        if (!navigator.canShare) {
            return false;
        // eslint-disable-next-line no-else-return
        // As the share URL method makes the Safari navigator bug, we return false here
        // althougth if navigator.canShare() is supported
        } else if (isSafariNavigator) {
            return false;
        // eslint-disable-next-line no-else-return
        } else {
            return true;
        }
    }

    shareURL (args) {
        // As this block makes the Safari navigator bug, we disable this
        // method when the navigator is Safari by returning false
        if (isSafariNavigator) {
            return;
        // eslint-disable-next-line no-else-return
        } else {
            navigator.share({
                url: args.URL,
                title: args.TITLE,
                text: args.MESSAGE
            });
        }
    }

    canSetFavicon () {
        // As the setFavicon method doesn't work with Safari, we return false
        if (isSafariNavigator) {
            return false;
        // eslint-disable-next-line no-else-return
        } else {
            return true;
        }
    }

    setFavicon (args) {
        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.getElementsByTagName('head')[0].appendChild(link);
        }
        link.href = args.URL;
    }

    async copyTextToClipboard (args) {
        await navigator.clipboard.writeText(args.TEXT);
    }

    canDisplayNotification () {
        if ('Notification' in window && Notification.requestPermission) {
            return true;
        }
        return false;
    }

    createAndDisplayNotification (args) {
        // Create notification
        const doNotify = () => {
            const title = args.TITLE;
            const options = {
                body: args.MESSAGE,
                icon: args.URL
            };
            const duration = args.DURATION * 1000;
            const n = new Notification(title, options);
            setTimeout(n.close.bind(n), duration); // close notification after duration seconds
        };

        // Display notification
        if (this.canDisplayNotification() === true) {
            Notification.requestPermission()
                .then(() => {
                    if (Notification.permission === 'granted') {
                        doNotify();
                    }
                })
                .catch(err => {
                    // eslint-disable-next-line no-console
                    console.log(err);
                });
        } else {
            return false;
        }
    }

    setLocale () {
        return 'en';
    }

    getMessage (id) {
        return localisation.messages[id][this._locale];
    }
}

Scratch.extensions.register(new Scratch3AdaBrowserBlocks(Scratch.vm.runtime));

})(Scratch);
