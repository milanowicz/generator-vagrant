'use strict';

var windows = module.exports = (function () {

    this.MainPrompt = [{
        type: 'list',
        name: 'VmImageName',
        message: 'Select the Box Image',
        default: 5,
        choices: [{
            name: 'ferventcoder/win7pro-x64-nocm-lite - Windows 7 Professional x64 with Service Pack 1 - Lite (with no configuration management tools)',
            value: 'ferventcoder/win7pro-x64-nocm-lite'
        },{
            name: 'opentable/win-2012r2-standard-amd64-nocm - Windows 2012 R2 Standard Edition x64 (with no configuration management tools)',
            value: 'opentable/win-2012r2-standard-amd64-nocm'
        },{
            name: 'ferventcoder/win2008r2-x64-nocm - Windows 2008 R2 x64 with Service Pack 1 (with no configuration management tools)',
            value: 'ferventcoder/win2008r2-x64-nocm'
        },{
            name: 'ModernIE 8 - Windows XP',
            value: 'ie8'
        },{
            name: 'ModernIE 7 - Windows Vista',
            value: 'ie7'
        },{
            name: 'ModernIE 6 - Windows XP',
            value: 'ie6'
        }]
    },{
        type: 'list',
        name: 'System',
        message: 'Select your OS',
        default: 0,
        choices: [{
            name: 'Mac OS X',
            value: 'mac'
        },{
            name: 'GNU/Linux',
            value: 'linux'
        },{
            name: 'Windows',
            value: 'windows'
        }]
    }];

    this.VirtualBoxes = {
        Mac : {
            WinXpIe8 : {
                files : [{
                    url: 'https://www.modern.ie/vmdownload?platform=mac&virtPlatform=virtualbox&browserOS=IE8-WinXP&parts=2&filename=VMBuild_20131127/VirtualBox/IE8_WinXP/Mac/',
                    file: 'IE8.WinXP.For.MacVirtualBox.part1.sfx'

                },{
                    url: 'https://www.modern.ie/vmdownload?platform=mac&virtPlatform=virtualbox&browserOS=IE8-WinXP&parts=2&filename=VMBuild_20131127/VirtualBox/IE8_WinXP/Mac/',
                    file: 'IE8.WinXP.For.MacVirtualBox.part2.rar'
                }]
            },
            WinVistaIe7 : {
                files : [{
                    url: 'https://www.modern.ie/vmdownload?platform=mac&virtPlatform=virtualbox&browserOS=IE7-Vista&parts=4&filename=VMBuild_20131127/VirtualBox/IE7_Vista/Mac/',
                    file: 'IE7.Vista.For.MacVirtualBox.part1.sfx'
                },{
                    url: 'https://www.modern.ie/vmdownload?platform=mac&virtPlatform=virtualbox&browserOS=IE7-Vista&parts=4&filename=VMBuild_20131127/VirtualBox/IE7_Vista/Mac/',
                    file: 'IE7.Vista.For.MacVirtualBox.part2.rar'
                },{
                    url: 'https://www.modern.ie/vmdownload?platform=mac&virtPlatform=virtualbox&browserOS=IE7-Vista&parts=4&filename=VMBuild_20131127/VirtualBox/IE7_Vista/Mac/',
                    file: 'IE7.Vista.For.MacVirtualBox.part3.rar'
                },{
                    url: 'https://www.modern.ie/vmdownload?platform=mac&virtPlatform=virtualbox&browserOS=IE7-Vista&parts=4&filename=VMBuild_20131127/VirtualBox/IE7_Vista/Mac/',
                    file: 'IE7.Vista.For.MacVirtualBox.part4.rar'
                }]
            },
            WinXpIe6 : {
                files : [{
                    url: 'https://www.modern.ie/vmdownload?platform=mac&virtPlatform=virtualbox&browserOS=IE6-WinXP&parts=0&filename=VMBuild_20131127/VirtualBox/IE6_WinXP/Mac/',
                    file: 'IE6.WinXP.For.MacVirtualBox.sfx'
                }]
            }
        },
        Linux : {
            WinXpIe8 : {
                files : [{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE8_WinXP/Linux/',
                    file: 'IE8.WinXP.For.LinuxVirtualBox.part1.sfx'
                },{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE8_WinXP/Linux/',
                    file: 'IE8.WinXP.For.LinuxVirtualBox.part2.rar'
                }]
            },
            WinVistaIe7 : {
                files : [{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE7_Vista/Linux/',
                    file: 'IE7.Vista.For.LinuxVirtualBox.part1.sfx'
                },{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE7_Vista/Linux/',
                    file: 'IE7.Vista.For.LinuxVirtualBox.part2.rar'
                },{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE7_Vista/Linux/',
                    file: 'IE7.Vista.For.LinuxVirtualBox.part3.rar'
                },{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE7_Vista/Linux/',
                    file: 'IE7.Vista.For.LinuxVirtualBox.part4.rar'
                }]
            },
            WinXpIe6 : {
                files : [{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE6_WinXP/Linux/',
                    file: 'IE6.WinXP.For.LinuxVirtualBox.sfx'
                }]
            }
        },
        Windows : {
            WinXpIe8 : {
                files : [{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE8_WinXP/Windows/',
                    file: 'IE8.WinXP.For.WindowsVirtualBox.part001.exe'
                },{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE8_WinXP/Windows/',
                    file: 'IE8.WinXP.For.WindowsVirtualBox.part002.rar'
                },{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE8_WinXP/Windows/',
                    file: 'IE8.WinXP.For.WindowsVirtualBox.part003.rar'
                }]
            },
            WinVistaIe7 : {
                files : [{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE7_Vista/Windows/',
                    file: 'IE7.Vista.For.WindowsVirtualBox.part001.exe'
                },{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE7_Vista/Windows/',
                    file: 'IE7.Vista.For.WindowsVirtualBox.part002.rar'
                },{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE7_Vista/Windows/',
                    file: 'IE7.Vista.For.WindowsVirtualBox.part003.rar'
                },{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE7_Vista/Windows/',
                    file: 'IE7.Vista.For.WindowsVirtualBox.part004.rar'
                },{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE7_Vista/Windows/',
                    file: 'IE7.Vista.For.WindowsVirtualBox.part005.rar'
                }]
            },
            WinXpIe6 : {
                files : [{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE6_WinXP/Windows/',
                    file: 'IE6.WinXP.For.WindowsVirtualBox.part01.exe'
                },{
                    url: 'https://az412801.vo.msecnd.net/vhd/VMBuild_20131127/VirtualBox/IE6_WinXP/Windows/',
                    file: 'IE6.WinXP.For.WindowsVirtualBox.part02.rar'
                }]
            }
        }
    };
});