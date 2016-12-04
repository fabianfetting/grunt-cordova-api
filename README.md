# grunt-cordova-api

> A grunt task for running cordova commands.

## Getting Started
This plugin requires Grunt `>=0.4.5` and Cordova `>=3.0.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-cordova-api --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-cordova-api');
```

## The "cordova" task

### Overview
In your project's Gruntfile, add a section named `cordova` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  cordova: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.src
Type: `String`
Default value: `process.cwd()`

Location of the cordova app root directory. (See [directory structure](https://cordova.apache.org/docs/en/latest/reference/cordova-cli/index.html#directory-structure))

#### options.cmd
Type: `String`

Cordova command. (See [command list](https://cordova.apache.org/docs/en/latest/reference/cordova-cli/index.html#project-command-list))

#### options.platforms
Type: `Array`

Cordova platforms.

#### options.opts
Type: `Object`

Cordova options. (See [options](https://cordova.apache.org/docs/en/latest/reference/cordova-cli/index.html#common-options))

### Usage Examples

```js
// all path options are relative to options.src
cordova: {
    options: {
        src: 'app/target',
    },
    prepare: {
        options: {
            cmd: 'prepare',
        },
    },
    build: {
        options: {
            cmd: 'build',
            platforms: ['ios', 'android'],
            opts: {
                debug: true,
                release: false,
                device: true,
            },
        },
    },
}
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
[Github releases](https://github.com/fur6y/grunt-cordova-api/releases)
