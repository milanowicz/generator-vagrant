'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var main = require('./index.js');

var VagrantGenerator = main.exports = function askForLinux () {
    var done = this.async();

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
        type: 'list',
        name: 'VmProvision',
        message: 'Select bootstap.sh Provision file',
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

    //if (this.VmType === 'linux') {
        this.prompt(MainPrompt, function (answers) {

            this.VmImageName        = answers.VmImageName;
            this.VmProvision        = answers.VmProvision;

            this.VmServiceApache    = answers.VmServiceApache;
            this.VmServiceMysql     = answers.VmServiceMysql;
            this.VmServiceTomcat    = answers.VmServiceTomcat;

            done();
        }.bind(this));
/**
    } else {
        done();
    }*/
};
util.inherits(VagrantGenerator, yeoman.generators.Base);

/**
 * Vagrant Apache2 input prompt
 */
VagrantGenerator.prototype.askForApache = function askForApache () {
    var done = this.async();

    var ApachePrompt = [{
        type: 'input',
        name: 'ApacheGuestPort',
        message: 'Apache Guest Port',
        default: '80'
    },{
        type: 'input',
        name: 'ApacheHostPort',
        message: 'Apache Host Port',
        default: '8000'
    }];

    if (this.VmServiceApache) {

        this.prompt(ApachePrompt, function (answers) {
            this.ApacheGuestPort    = answers.ApacheGuestPort;
            this.ApacheHostPort     = answers.ApacheHostPort;
            done();
        }.bind(this));

    } else {
        done();
    }
};


/**
 * Vagrant MySQL input prompt
 */
VagrantGenerator.prototype.askForMysql = function askForMysql () {
    var done = this.async();

    var MysqlPrompt = [{
        type: 'input',
        name: 'MysqlGuestPort',
        message: 'MySQL Guest Port',
        default: '3306'
    },{
        type: 'input',
        name: 'MysqlHostPort',
        message: 'MySQL Host Port',
        default: '33060'
    }];

    if (this.VmServiceMysql) {

        this.prompt(MysqlPrompt, function (answers) {
            this.MysqlGuestPort     = answers.MysqlGuestPort;
            this.MysqlHostPort      = answers.MysqlHostPort;
            done();
        }.bind(this));

    } else {
        done();
    }
};


/**
 * Vagrant Tomcat input prompt
 */
VagrantGenerator.prototype.askForTomcat = function askForTomcat () {
    var done = this.async();

    var TomcatPrompt = [{
        type: 'input',
        name: 'TomcatGuestPort',
        message: 'Tomcat Guest Port',
        default: '8080'
    },{
        type: 'input',
        name: 'TomcatHostPort',
        message: 'Tomcat Host Port',
        default: '8888'
    }];

    if (this.VmServiceTomcat) {

        this.prompt(TomcatPrompt, function (answers) {
            this.TomcatGuestPort    = answers.TomcatGuestPort;
            this.TomcatHostPort     = answers.TomcatHostPort;
            done();
        }.bind(this));

    } else {
        done();
    }
};



/**
 * Configure Apache2 input prompt
 */
VagrantGenerator.prototype.askForConfigureApache = function askForConfigureApache () {
    var done = this.async();

    var ApachePrompt = [{
        type: 'input',
        name: 'ApacheDomain',
        message: 'Apache Server Domain',
        default: 'dev.localhost'
    },{
        type: 'input',
        name: 'ApacheHtdocsPath',
        message: 'Vagrant Htdocs mount path',
        default: '/var/www'
    },{
        type: 'input',
        name: 'ApacheXdebugPort',
        message: 'Apache Xdebug Port',
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
 * Configure MySQL input prompt
 */
VagrantGenerator.prototype.askForConfigureMysql = function askForConfigureMysql () {
    var done = this.async();

    var MysqlPrompt = [{
        type: 'input',
        name: 'MysqlUsername',
        message: 'MySQL Username',
        default: 'root'
    },{
        type: 'input',
        name: 'MysqlPassword',
        message: 'MySQL Password',
        default: '123456'
    },{
        type: 'input',
        name: 'MysqlDatabaseFiles',
        message: 'MySQL Database filename',
        default: ''
    }];

    if (this.VmServiceMysql && this.VmProvision !== 'none') {

        this.prompt(MysqlPrompt, function (answers) {
            this.MysqlUsername      = answers.MysqlUsername;
            this.MysqlPassword      = answers.MysqlPassword;
            this.MysqlDatabaseFiles = answers.MysqlDatabaseFiles;
            done();
        }.bind(this));

    } else {
        done();
    }
};

/**
 * Configure Tomcat input prompt
 */
VagrantGenerator.prototype.askForConfigureTomcat = function askForConfigureTomcat () {
    var done = this.async();

    var TomcatPrompt = [{
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

    if (this.VmServiceTomcat && this.VmProvision !== 'none') {

        this.prompt(TomcatPrompt, function (answers) {
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
        },{
            name: 'PHP',
            value: 'php',
            checked: true
        },{
            name: 'Python 3',
            value: 'python',
            checked: false
        },{
            name: 'SNMP',
            value: 'snmp',
            checked: false
        }]
    },{
        type: 'confirm',
        name: 'VmSystemSoftware',
        message: 'Would you like to have some more software like autoconf, logrotate, zip?',
        default: 'Y/n'
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
            this.SoftwareSystem     = hasSoftware('system');
            this.SoftwarePhp        = hasSoftware('php');
            this.SoftwarePython     = hasSoftware('python');
            this.SoftwareSnmp       = hasSoftware('snmp');
            this.VmSystemSoftware   = answers.VmSystemSoftware;

            done();
        }.bind(this));

    } else {
        done();
    }
};


/**
 * System Software input prompt
 */
VagrantGenerator.prototype.askForSystemSoftware = function askForSystemSoftware () {
    var done = this.async();

    var SystemSoftwarePrompt = [{
        type: 'checkbox',
        name: 'VmSoftware',
        message: 'Select your Software Packages',
        choices: [{
            name: 'autoconf',
            value: 'autoconf',
            checked: true
        },{
            name: 'bc',
            value: 'bc',
            checked: false
        },{
            name: 'htop',
            value: 'htop',
            checked: false
        },{
            name: 'ncurses-dev',
            value: 'ncurses',
            checked: true
        },{
            name: 'logrotate',
            value: 'logrotate',
            checked: true
        },{
            name: 'logwatch',
            value: 'logwatch',
            checked: false
        },{
            name: 'lzma',
            value: 'lzma',
            checked: true
        },{
            name: 'nmap',
            value: 'nmap',
            checked: false
        },{
            name: 'screen',
            value: 'screen',
            checked: false
        },{
            name: 'tcpdump',
            value: 'tcpdump',
            checked: false
        },{
            name: 'rcconf & sysv-rc-conf',
            value: 'rcconf',
            checked: false
        },{
            name: 'zip & unzip',
            value: 'zip',
            checked: true
        }]
    }];

    if (this.VmProvision !== 'none' && this.VmSystemSoftware) {

        this.prompt(SystemSoftwarePrompt, function (answers) {
            this.SystemAutoconf     = answers.autoconf;
            this.SystemBc           = answers.bc;
            this.SystemHtop         = answers.htop;
            this.SystemNcurses      = answers.ncurses;
            this.SystemLogrotate    = answers.logrotate;
            this.SystemLogwatch     = answers.logwatch;
            this.SystemLzma         = answers.lzma;
            this.SystemNmap         = answers.nmap;
            this.SystemScreen       = answers.screen;
            this.SystemTcodump      = answers.tcpdump;
            this.SystemRcconf       = answers.rcconf;
            this.SystemZip          = answers.zip;
            done();
        }.bind(this));

    } else {
        done();
    }
};