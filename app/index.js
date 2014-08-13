'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var builder = require('./builder');
var prompt = require('./prompt');

/**
 * Yeoman Generator to create Vagrant development environments
 * @type {VagrantGenerator}
 */
var VagrantGenerator = module.exports = function Vagrantgenerator(args, options, config) {

    yeoman.generators.Base.apply(this, arguments);
    this.options = options;
    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));

    this.on('end', function () {
        /*this.spawnCommand('vagrant', ['up'])
            .on('exit', function () {
                console.log('\n\n\t\tA new Vagrant VM Box served by Yeoman\n\n');
            });*/
    });
};

util.inherits(VagrantGenerator, yeoman.generators.Base);

// Load prompts
var PromptLinux   = new prompt.linux();
var PromptVagrant = new prompt.vagrant();
var PromptWindows = new prompt.windows();

/**
 * User Prompt for the installation for the new VM Box
 */
VagrantGenerator.prototype.askFor = function askFor () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);
    this.log(chalk.magenta('Welcome to the Yeoman Generator to create Vagrant development environment!'));

    /**
     * Main input prompt
     */
    this.prompt(PromptVagrant.MainPrompt, function (answers) {

        this.VmName             = this._.slugify(answers.VmName);
        this.VmTimeZone         = answers.VmTimeZone;
        this.VmType             = answers.VmType;
        this.VmPrivateIp        = answers.VmPrivateIp;
        this.VmMemory           = answers.VmMemory;
        this.VmCpus             = answers.VmCpus;

        done();
    }.bind(this));

};


/**
 * Windows Main
 */
VagrantGenerator.prototype.askForWindows = function askForWindows () {
    var done = this.async();

    if (this.VmType === 'windows') {
        this.prompt(PromptWindows.MainPrompt, function (answers) {

            this.VmProvision        = 'none';
            this.VmImageName        = answers.VmImageName;
            this.System             = answers.System;

            // Check if ModerIE image is select
            if (this.VmImageName.match(/[ie]{2}[0-9]{1,2}/)) {

                var Downloader    = new builder.download(PromptWindows);

                Downloader.get(this.System, this.VmImageName);

            }

            done();
        }.bind(this));
    } else {
        done();
    }
};


/**
 * GNU/Linux Main
 */
VagrantGenerator.prototype.askForLinux = function askForLinux () {
    var done = this.async();

    if (this.VmType === 'linux') {
        this.prompt(PromptLinux.MainPrompt, function (answers) {

            this.VmImageName        = answers.VmImageName;
            this.VmProvision        = answers.VmProvision;

            this.VmServiceApache    = answers.VmServiceApache;
            this.VmServiceMysql     = answers.VmServiceMysql;
            this.VmServiceTomcat    = answers.VmServiceTomcat;

            done();
        }.bind(this));
    } else {
        done();
    }
};


/**
 * Vagrant Apache2 input prompt
 */
VagrantGenerator.prototype.askForApache = function askForApache () {
    var done = this.async();

    if (this.VmServiceApache) {

        this.prompt(PromptLinux.ApachePrompt, function (answers) {
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

    if (this.VmServiceMysql) {

        this.prompt(PromptLinux.MysqlPrompt, function (answers) {
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

    if (this.VmServiceTomcat) {

        this.prompt(PromptLinux.TomcatPrompt, function (answers) {
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

    if (this.VmServiceApache && this.VmProvision !== 'none') {

        this.prompt(PromptLinux.ApacheConfigPrompt, function (answers) {
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

    if (this.VmServiceMysql && this.VmProvision !== 'none') {

        this.prompt(PromptLinux.MysqlConfigPrompt, function (answers) {
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

    if (this.VmServiceTomcat && this.VmProvision !== 'none') {

        this.prompt(PromptLinux.TomcatPrompt, function (answers) {
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

    if (this.VmProvision !== 'none') {

        this.prompt(PromptLinux.SoftwarePrompt, function (answers) {

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

    if (this.VmProvision !== 'none' && this.VmSystemSoftware) {

        this.prompt(PromptLinux.SystemSoftwarePrompt, function (answers) {
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


/**
 * Generate files
 */
VagrantGenerator.prototype.app = function app () {

    if (this.VmProvision === 'ubuntu') {
        this.template('ubuntu.sh',   'bootstrap.sh');
    }

    this.template('Vagrantfile', 'Vagrantfile');

};