// require yargs
const yargs = require('yargs')
const notes = require('./notes')

// Customize yargs version
yargs.version('1.1.0')

// Create add command whit yargs
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'The body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

// create remove command
yargs.command({
    command:'remove',
    describe: 'Removing the note',
    builder:{
        title:{
            describe: 'Remove note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'List of notes',
    handler(argv){
        notes.listNotes(argv)
    }
})

// create read command
yargs.command({
    command: 'read',
    describe: 'Read the notes',
    builder: {
        title:{
            describe: 'Remove note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})
yargs.parse()