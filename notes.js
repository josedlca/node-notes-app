const fs = require('fs')
const chalk = require('chalk')

addNote = (title, body) =>{
    const notes = loadNotes()
    const duplicateNote = notes.find((note)=> note.title === title)

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added')
    }else{
        console.log('Note title taken!')
    }
}

removeNote = (title)=>{
    const notes = loadNotes()
    const removeWorkIf = notes.filter((note)=>note.title !== title)

    if(notes.length > removeWorkIf.length){
        saveNotes(removeWorkIf)
        console.log(chalk.bgGreenBright('Remove success'))
    }else{
        console.log(chalk.bgRedBright('Dont have a match for remove'))
    }
}

saveNotes = (notes) =>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}

listNotes = ()=>{
    const notes = loadNotes()
    console.log(chalk.bgGreenBright.bold('Your Notes'))

    notes.forEach((item) => console.log(chalk.bgBlueBright.bold(item.title)))
}

readNotes = (title) =>{
    const notes = loadNotes()
    const findNote = notes.find((note)=>note.title === title)

    if(findNote!==undefined){
        console.log(chalk.bgGreenBright.bold(findNote.title),findNote.body)
    }else{
        console.log(chalk.bgRedBright.bold("Dont have a match for show"))
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}