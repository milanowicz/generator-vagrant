'use strict';
var fs = require('fs');
var request = require('request');

/**
 * Module to download windows and extract it
 * @type {object} WinObject - Prompt Window Object
 * @return {object}
 */
var download = module.exports = (function (WinObject) {

    /**
     * Windows Prompt Object
     * @type {object}
     */
    this.Windows = WinObject;


    /**
     * Download files
     * @param {string} System - linux, mac, windows
     * @param {string} IE - ie6, ie7, ...
     * @param {string} SaveAs - Path to save
     * @return void
     */
    this.get = function (System, IE, SaveAs) {

        var LogSystem = '';
        var LogIe = '';
        var FilesObject = {};
        var IeFiles = [];

        if (System === 'mac') {
            FilesObject = this.Windows.VirtualBoxes.Mac;
            LogSystem = 'Mac OS X';

        } else if (System === 'linux') {
            FilesObject = this.Windows.VirtualBoxes.Linux;
            LogSystem = 'GNU/Linux';

        } else if (System === 'windows') {
            FilesObject = this.Windows.VirtualBoxes.Windows;
            LogSystem = 'Windows';

        }

        if (IE === 'ie6') {
            IeFiles = FilesObject.WinXpIe6.files;
            LogIe = 'IE 6';

        } else if (IE === 'ie7') {
            IeFiles = FilesObject.WinVistaIe7.files;
            LogIe = 'IE 7';

        } else if (IE === 'ie8') {
            IeFiles = FilesObject.WinXpIe8.files;
            LogIe = 'IE 8';

        } else if (IE === 'ie9') {
            IeFiles = FilesObject.Win7Ie9.files;
            LogIe = 'IE 9';

        } else if (IE === 'ie10') {
            IeFiles = FilesObject.Win7Ie10.files;
            LogIe = 'IE 10';

        }

        console.log('Begin to download the ' + LogIe + ' for ' + LogSystem);

        for (var i = 0; i < IeFiles.length; i++) {
            request(IeFiles[i].url + '' + IeFiles[i].file).pipe(fs.createWriteStream('' + SaveAs + '/' + IeFiles[i].url + IeFiles[i].file));
        }

    };
});