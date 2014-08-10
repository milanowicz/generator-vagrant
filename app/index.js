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
        type: 'confirm',
        name: 'VmServiceApache',
        message: 'Active Apache2 Webserver?',
        default: 'Y/n'
    },{
        type: 'confirm',
        name: 'VmServiceMysql',
        message: 'Active MySQL Database Server?',
        default: 'Y/n'
    },{
        type: 'confirm',
        name: 'VmServiceTomcat',
        message: 'Active Tomcat Server?',
        default: 'Y/n'
    }];

    /**
     * Main input prompt
     */
    this.prompt(MainPrompt, function (answers) {

        this.VmName             = this._.slugify(answers.VmName);
        this.VmTimeZone         = answers.VmTimeZone;
        this.VmImageName        = answers.VmImageName;
        this.VmPrivateIp        = answers.VmPrivateIp;
        this.VmProvision        = answers.VmProvision;
        this.VmMemory           = answers.VmMemory;
        this.VmCpus             = answers.VmCpus;

        this.VmServiceApache    = answers.VmServiceApache;
        this.VmServiceMysql     = answers.VmServiceMysql;
        this.VmServiceTomcat    = answers.VmServiceTomcat;

        done();
    }.bind(this));

};


/**
 * Apache2 input prompt
 */
VagrantGenerator.prototype.askForApache = function askForApache () {
    var done = this.async();

    var ApachePrompt = [{
        type: 'input',
        name: 'ApacheDomain',
        message: 'ApacheDomain',
        default: 'dev'
    },{
        type: 'input',
        name: 'ApacheHostPort',
        message: 'ApacheHostPort',
        default: '8000'
    },{
        type: 'input',
        name: 'ApacheHtdocsPath',
        message: 'Vagrant Htdocs mount path',
        default: '/var/www'
    },{
        type: 'input',
        name: 'ApacheXdebugPort',
        message: 'ApacheXdebugPort',
        default: '9001'
    },{
        type: 'input',
        name: 'ApacheXdebugIdeKey',
        message: 'Xdebug IDE Key',
        default: 'PHPSTORM'
    }];

    if (this.VmServiceApache && this.VmProvision !== 'none') {

        this.prompt(ApachePrompt, function (answers) {
            this.ApacheDomain       = this._.slugify(answers.ApacheDomain);
            this.ApacheHostPort     = answers.ApacheHostPort;
            this.ApacheHtdocsPath   = answers.ApacheHtdocsPath;
            this.ApacheXdebugPort   = answers.ApacheXdebugPort;
            this.ApacheXdebugIdeKey = answers.ApacheXdebugIdeKey;
            done();
        }.bind(this));

    } else {
        done();
    }
};


/**
 * MySQL input prompt
 */
VagrantGenerator.prototype.askForMysql = function askForMysql () {
    var done = this.async();

    var MysqlPrompt = [{
        type: 'input',
        name: 'MysqlUsername',
        message: 'Username',
        default: 'root'
    },{
        type: 'input',
        name: 'MysqlPassword',
        message: 'Password',
        default: '123456'
    },{
        type: 'input',
        name: 'MysqlHostPort',
        message: 'MysqlHostPort',
        default: '33060'
    },{
        type: 'input',
        name: 'MysqlDatabaseFiles',
        message: 'Database filename',
        default: ''
    }];

    if (this.VmServiceMysql) {

        this.prompt(MysqlPrompt, function (answers) {
            this.MysqlUsername      = answers.MysqlUsername;
            this.MysqlPassword      = answers.MysqlPassword;
            this.MysqlDatabaseFiles = answers.MysqlDatabaseFiles;
            this.MysqlHostPort      = answers.MysqlHostPort;
            done();
        }.bind(this));

    } else {
        done();
    }
};


/**
 * Tomcat input prompt
 */
VagrantGenerator.prototype.askForTomcat = function askForTomcat () {
    var done = this.async();

    var TomcatPrompt = [{
        type: 'input',
        name: 'TomcatGuestPort',
        message: 'TomcatGuestPort',
        default: '8080'
    },{
        type: 'input',
        name: 'TomcatHostPort',
        message: 'TomcatHostPort',
        default: '8888'
    },{
        type: 'list',
        name: 'TomcatVersion',
        message: 'Tomcat Version',
        default: 1,
        choices: [{
            name: 'Version 8',
            value: '8'
        },{
            name: 'Version 7',
            value: '7'
        },{
            name: 'Version 6',
            value: '6'
        }]
    }];

    if (this.VmServiceTomcat) {

        this.prompt(TomcatPrompt, function (answers) {
            this.TomcatGuestPort    = answers.TomcatGuestPort;
            this.TomcatHostPort     = answers.TomcatHostPort;
            this.TomcatVersion      = answers.TomcatVersion;
            done();
        }.bind(this));

    } else {
        done();
    }
};


/**
 * Software input prompt
 */
VagrantGenerator.prototype.askForSoftware = function askForSoftware () {
    var done = this.async();

    var SoftwarePrompt = [{
        type: 'checkbox',
        name: 'VmSoftware',
        message: 'Select your Software Packages',
        choices: [{
            name: 'Git',
            value: 'git',
            checked: false
        },{
            name: 'Gitolite',
            value: 'gitolite',
            checked: false
        },{
            name: 'NodeJS',
            value: 'node',
            checked: false
        },{
            name: 'Samba',
            value: 'samba',
            checked: false
        }]
    }];

    if (this.VmProvision !== 'none') {

        this.prompt(SoftwarePrompt, function (answers) {

            var VmSoftware          = answers.VmSoftware;

            function hasSoftware (software) {
                return VmSoftware.indexOf(software) !== -1;
            }

            this.SoftwareGit        = hasSoftware('git');
            this.SoftwareGitolite   = hasSoftware('gitolite');
            this.SoftwareNodeJs     = hasSoftware('node');
            this.SoftwareSamba      = hasSoftware('samba');

            done();
        }.bind(this));

    } else {
        done();
    }
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