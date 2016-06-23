require('./../node_modules/zone.js/dist/zone-node.js');
require('./../node_modules/reflect-metadata/Reflect.js');

const JASMINE_CONFIG_PATH = 'test/config/jasmine.json';
const GREEN = '\x1b[32m [TEST] ';

let path = require('path'),
    Command = require('../node_modules/jasmine/lib/command.js'),
    Jasmine = require('../node_modules/jasmine/lib/jasmine.js');

let jasmineInstance = new Jasmine({ projectBaseDir: path.resolve() });
let examplesDir = path.join(__dirname, '..', 'node_modules', 'jasmine-core', 'lib', 'jasmine-core', 'example', 'node_example');



let reporter = {
    jasmineStarted(suiteInfo) {
        console.log('\x1b[32m', '[TEST] Running suite with ' + suiteInfo.totalSpecsDefined);
    },
    suiteStarted(result) {
        console.log(GREEN, result.description);
    },
    specDone(result) {
        console.log(GREEN, result.description);
    }
};

jasmineInstance.env.addReporter(reporter);

let command = new Command(path.resolve(), examplesDir, console.log);

command.run(jasmineInstance, process.argv.slice(2).concat(['JASMINE_CONFIG_PATH='+JASMINE_CONFIG_PATH]));