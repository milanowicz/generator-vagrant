'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

/**
 * Yeoman Generator to create Vagrant development environments
 * @type {VagrantGenerator}
 */
var VagrantGenerator = module.exports = function Vagrantgenerator(args, options, config) {

    yeoman.generators.Base.apply(this, arguments);
    this.options = options;
    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));

    this.on('end', function () {
        this.spawnCommand('vagrant', ['up'])
            .on('exit', function () {
                console.log('\n\n\t\tA new Vagrant VM Box served by Yeoman\n\n');
            });
    });
};

util.inherits(VagrantGenerator, yeoman.generators.Base);


/**
 * User Prompt for the installation for the new VM Box
 */
VagrantGenerator.prototype.askFor = function askFor () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);
    this.log(chalk.magenta('Welcome to the Yeoman Generator to create Vagrant development environment!'));

    var MainPrompt = [{
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
        name: 'VmImageName',
        message: 'Select the Box Image',
        default: 3,
        choices: [{
            name: 'ubuntu/trusty64 - Official Ubuntu Server 14.04 LTS (Trusty Tahr) builds',
            value: 'ubuntu/trusty64'
        },{
            name: 'puphpet/ubuntu1404-x64 - Ubuntu Trusty 14.04 LTS x64',
            value: 'puphpet/ubuntu1404-x64'
        },{
            name: 'chef/ubuntu-13.10 - A standard Ubuntu 13.10 x64 base install',
            value: 'chef/ubuntu-13.10'
        },{
            name: 'hashicorp/precise64 - A standard Ubuntu 12.04 LTS 64-bit box.',
            value: 'hashicorp/precise64'
        },{
            name: 'hashicorp/precise32 - A standard Ubuntu 12.04 LTS 32-bit box.',
            value: 'hashicorp/precise32'
        },{
            name: 'puphpet/ubuntu1204-x64 - Ubuntu Precise 12.04 LTS x64',
            value: 'puphpet/ubuntu1204-x64'
        },{
            name: 'puphpet/debian75-x64 - Debian Wheezy 7.5 x64',
            value: 'puphpet/debian75-x64'
        },{
            name: 'chef/debian-7.4 - A standard Debian 7.4 x64 base install',
            value: 'chef/debian-7.4'
        },{
            name: 'laravel/homestead - Official Laravel local development box.',
            value: 'laravel/homestead'
        },{
            name: 'chef/centos-6.5 - A standard CentOS 6.5 x64 base install',
            value: 'chef/centos-6.5'
        },{
            name: 'chef/fedora-20 - A standard Fedora 20 x64 base install',
            value: 'chef/fedora-20'
        },{
            name: 'chef/freebsd-9.2 - A standard FreeBSD 9.2 x64 base install',
            value: 'chef/freebsd-9.2'
        }]
    },{
        type: 'list',
        name: 'VmProvision',
        message: 'Select your Provision file',
        default: 1,
        choices: [{
            name: 'Do not provision',
            value: 'none'
        },{
            name: 'Ubuntu',
            value: 'ubuntu'
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
        type: 'input',
        name: 'VmPrivateIp',
        message: 'Enter private network IP address',
        default: '10.0.0.10'
    },{
        type: 'checkbox',
        name: 'VmService',
        message: 'Services',
        choices: [{
            name: 'Apache',
            value: 'apache',
            checked: true
        },{
            name: 'MySQL',
            value: 'mysql',
            checked: false
        },{
            name: 'Tomcat',
            value: 'tomcat',
            checked: false
        }]
    }];

    var ApachePrompt = [{
        type: 'input',
        name: 'ApacheDomain',
        message: 'ApacheDomain',
        default: 'dev'
    }];

    var MysqlPrompt = [{
        type: 'input',
        name: 'MysqlDatabaseFiles',
        message: 'MysqlDatabaseFiles',
        default: 'dev'
    }];

    this.prompt(MainPrompt, function (answers) {

        var VmService           = answers.VmService;

        function hasService (service) {
            return VmService.indexOf(service) !== -1;
        }

        this.VmName             = this._.slugify(answers.VmName);
        this.VmTimeZone         = answers.VmTimeZone;
        this.VmImageName        = answers.VmImageName;
        this.VmPrivateIp        = answers.VmPrivateIp;
        this.VmProvision        = answers.VmProvision;
        this.VmMemory           = answers.VmMemory;
        this.VmCpus             = answers.VmCpus;

        this.ServiceApache      = hasService('apache');
        this.ServiceMysql       = hasService('mysql');
        this.ServiceTomcat      = hasService('tomcat');


        if (this.ServiceApache) {
            this.prompt(ApachePrompt, function (answers) {
                this.ApacheDomain = this._.slugify(answers.ApacheDomain);
                done();
            }.bind(this));
        }

        if (this.ServiceMysql) {
            this.prompt(MysqlPrompt, function (answers) {
                this.MysqlDatabaseFiles = this._.slugify(answers.MysqlDatabaseFiles);
            }.bind(this));
        }


    }.bind(this));
};


/**
 * Generate files
 */
VagrantGenerator.prototype.app = function app () {

    if (this.VmProvision === 'ubuntu') {
        this.template('ubuntu.sh',   'bootstrap.sh');
    }

    this.template('Vagrantfile', 'Vagrantfile');

};