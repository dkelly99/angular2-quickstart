require('./../node_modules/zone.js/dist/zone-node.js');
require('./../node_modules/reflect-metadata/Reflect.js');

const JASMINE_CONFIG_PATH = 'test/config/jasmine.json';

let path = require('path'),
    Command = require('../node_modules/jasmine/lib/command.js'),
    Jasmine = require('../node_modules/jasmine/lib/jasmine.js');

let jasmineInstance = new Jasmine({ projectBaseDir: path.resolve() });
let examplesDir = path.join(__dirname, '..', 'node_modules', 'jasmine-core', 'lib', 'jasmine-core', 'example', 'node_example');
let command = new Command(path.resolve(), examplesDir, console.log);

command.run(jasmineInstance, process.argv.slice(2).concat(['JASMINE_CONFIG_PATH='+JASMINE_CONFIG_PATH]));