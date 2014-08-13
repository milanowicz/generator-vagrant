'use strict';

var linux = module.exports = (function () {
    this.MainPrompt = [{
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
            name: 'smallhadroncollider/centos-6.5-lamp - A Vagrant box that recreates the server setup of many shared hosting companies (e.g. UKHost4u)',
            value: 'smallhadroncollider/centos-6.5-lamp'
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

    this.ApachePrompt = [{
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

    this.ApacheConfigPrompt = [{
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

    this.MysqlPrompt = [{
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

    this.MysqlConfigPrompt = [{
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

    this.TomcatPrompt = [{
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

    this.TomcatConfigPrompt = [{
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

    this.SoftwarePrompt = [{
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


    this.SystemSoftwarePrompt = [{
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
});