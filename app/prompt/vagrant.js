'use strict';

/**
 * Vagrant prompt definitions
 * @return {object}
 */
var vagrant = module.exports = (function () {

    this.SelectPrompt = [{
        type: 'list',
        name: 'VmType',
        message: 'Select the Box System Type',
        default: 1,
        choices: [{
            name: 'Download ModernIE Windows VirtualBox Images',
            value: 'modernie'
        },{
            name: 'GNU/Linux',
            value: 'linux'
        },{
            name: 'Microsoft Windows',
            value: 'windows'
        }]
    }];

    this.MainPrompt = [{
        type: 'input',
        name: 'VmName',
        message: 'Name of VM?',
        default: 'dev'
    },{
        type: 'input',
        name: 'VmTimeZone',
        message: 'What Time Zone?',
        default: 'Europe/Berlin'
    },{
        type: 'list',
        name: 'VmCpus',
        message: 'Select CPUs',
        default: 8,
        choices: [{
            name: '16 CPUs',
            value: '16'
        },{
            name: '14 CPUs',
            value: '14'
        },{
            name: '12 CPUs',
            value: '12'
        },{
            name: '10 CPUs',
            value: '10'
        },{
            name: '8 CPUs',
            value: '8'
        },{
            name: '6 CPUs',
            value: '6'
        },{
            name: '4 CPUs',
            value: '4'
        },{
            name: '3 CPUs',
            value: '3'
        },{
            name: '2 CPUs',
            value: '2'
        },{
            name: '1 CPU',
            value: '1'
        }]
    },{
        type: 'list',
        name: 'VmMemory',
        message: 'Select VM Memory Size',
        default: 12,
        choices: [{
            name: '16 GigaByte',
            value: '16384'
        },{
            name: '14 GigaByte',
            value: '14336'
        },{
            name: '12 GigaByte',
            value: '12288'
        },{
            name: '10 GigaByte',
            value: '10240'
        },{
            name: '8 GigaByte',
            value: '8192'
        },{
            name: '6 GigaByte',
            value: '6144'
        },{
            name: '5 GigaByte',
            value: '5120'
        },{
            name: '4 GigaByte',
            value: '4096'
        },{
            name: '3 GigaByte',
            value: '3072'
        },{
            name: '2 GigaByte',
            value: '2048'
        },{
            name: '1 GigaByte',
            value: '1024'
        },{
            name: '768 MegaByte',
            value: '768'
        },{
            name: '512 MegaByte',
            value: '512'
        },{
            name: '256 MegaByte',
            value: '256'
        },{
            name: '128 MegaByte',
            value: '128'
        }]
    },{
        type: 'input',
        name: 'VmPrivateIp',
        message: 'Enter private network IP address',
        default: '10.0.0.10'
    }];
});