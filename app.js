console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
var command = process.argv[2];
console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  notes.getAll(argv.title);
} else if (command === 'read') {
  notes.getNote();
} else if (command === 'remove') {
  notes.removeNote(argv.title);
  } else {
  console.log('Command not recognized');
}
