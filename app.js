
const oNotes = require('./notes.js');
const oYargs = require('yargs');

const oArgv = oYargs.argv;

var sCommand = oArgv._[0];

if (sCommand === 'add') {
    oNotes.addNote(oArgv.title, oArgv.content);
} else if (sCommand === 'remove') {
    oNotes.removeNote(oArgv.title);
} else if (sCommand === 'read') {
    oNotes.readNote(oArgv.title);
} else {
    console.log('Command not supported');
};





