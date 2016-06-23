module.exports = function(grunt) {

    grunt.initConfig({
        //pkg: grunt.file.readJSON('package.json'),
        copy: {
            bootstrap: {
                expand: true,
                cwd: 'bower_components/bootstrap/dist/',
                src: '**',
                dest: 'src/resources/bootstrap/',
                filter: 'isFile'
            },
            jquery: {
                expand: true,
                cwd: 'bower_components/jquery/dist/',
                src: '**',
                dest: 'src/resources/jquery/',
                filter: 'isFile'
            },
            zone: {
                expand: true,
                cwd: 'node_modules/zone.js/dist/',
                src: 'zone.js',
                dest: 'src/resources/zone/dist/',
                filter: 'isFile'
            },
            "core-js": {
                expand: true,
                cwd: 'node_modules/core-js/client/',
                src: 'shim.min.js',
                dest: 'src/resources/core-js/client/',
                filter: 'isFile'
            },
            "reflect-metadata": {
                expand: true,
                cwd: 'node_modules/reflect-metadata/',
                src: 'Reflect.js',
                dest: 'src/resources/reflect-metadata/',
                filter: 'isFile'
            },
            systemjs: {
                expand: true,
                cwd: 'node_modules/systemjs/dist/',
                src: 'system.src.js',
                dest: 'src/resources/systemjs/dist/',
                filter: 'isFile'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');

};