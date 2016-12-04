/*
 * grunt-cordova-api
 * https://github.com/fur6y/grunt-cordova-api
 *
 * Copyright (c) 2016 Fabian Fetting
 * Licensed under the MIT license.
 */

'use strict';

const cordova = require('cordova').raw;
const DESCRIPTION = 'A grunt task for running cordova commands.';

module.exports = function (grunt) {

    grunt.registerMultiTask('cordova', DESCRIPTION, function () {
        let oldBaseDir;

        const done = this.async();

        const options = this.options({
            src: null,
            cmd: null,
            platforms: null,
            opts: null,
        });

        if (options.src) {
            oldBaseDir = process.env.PWD || process.cwd();
            grunt.file.setBase(options.src);
        }

        grunt.log.writeln(`Run cordova '${options.cmd}'...`);

        cordova[options.cmd]({
                platforms: options.platforms,
                options: options.opts,
            })
            .catch(done)
            .done(() => {
                if (oldBaseDir) { grunt.file.setBase(oldBaseDir); }
                grunt.log.ok();
                done();
            });
    });

};