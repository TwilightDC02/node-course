// const validator = require('validator')
// const getNotes = require('./notes.js');

// console.log(getNotes());

// console.log(validator.isEmail('bon@example.com'));
// console.log(validator.isURL('https://google.com'));

const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body);
    }
})

// Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
        handler(argv){
        notes.removeNote(argv.title);
        
    }
})

// List command
yargs.command({
    command: 'list',
    describe: 'Lists notes',
    handler(){
        notes.listNotes();
        
    }
})

// Read command
yargs.command({
    command: 'read',
    describe: 'Reads notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title);
        
    }
})

// console.log(process.argv);
// console.log(yargs.argv);

yargs.parse();