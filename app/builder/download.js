'use strict';
var fs = require('fs');
var request = require('request');

var download = module.exports = (function (WinObject) {

    this.Windows = WinObject;

    this.get = function (System, IE) {

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
        }

        console.log('Begin to download the ' + LogIe + ' for ' + LogSystem);

        for (var i = 0; i < IeFiles.length; i++) {
            request(IeFiles[i].url + '' + IeFiles[i].file).pipe(fs.createWriteStream(IeFiles[i].file));
        }

    };
});