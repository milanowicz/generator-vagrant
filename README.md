# generator-vagrant

> [Yeoman](http://yeoman.io) generator to create a [Vagrant](http://www.vagrantup.com/) development environment.


## VM Boxes

* ubuntu/trusty64 - Official Ubuntu Server 14.04 LTS (Trusty Tahr) builds

* puphpet/ubuntu1404-x64 - Ubuntu Trusty 14.04 LTS x64

* chef/ubuntu-13.10 - A standard Ubuntu 13.10 x64 base install

* hashicorp/precise64 - A standard Ubuntu 12.04 LTS 64-bit box.

* hashicorp/precise32 - A standard Ubuntu 12.04 LTS 32-bit box.

* puphpet/ubuntu1204-x64 - Ubuntu Precise 12.04 LTS x64

* puphpet/debian75-x64 - Debian Wheezy 7.5 x64

* chef/debian-7.4 - A standard Debian 7.4 x64 base install

* laravel/homestead - Official Laravel local development box.

* chef/centos-6.5 - A standard CentOS 6.5 x64 base install

* chef/fedora-20 - A standard Fedora 20 x64 base install

* chef/freebsd-9.2 - A standard FreeBSD 9.2 x64 base install


### Provision Debian Ubuntu

* Apach2

* MySQL

* Tomcat


## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```bash
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-vagrant from npm, run:

```bash
$ npm install -g generator-vagrant
```

Finally, initiate the generator:

```bash
$ yo vagrant
```

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## Getting Developed


Clone the generator-vagrant repository.

```
$ git clone git@github.com:Milanowicz/generator-vagrant.git
```

That'll install your project dependencies and symlink a global module to your local file. After npm is done, you'll be able to call yo name and you should see the console.log defined earlier outputted in the terminal. Congratulation, you just built your first generator!

```
$ cd generator-vagrant/
```

```
$ npm link
```


## License

MIT
