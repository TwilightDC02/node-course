const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes...'
}

const addNote = (title, body)=>{
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!');
    }
    else{
        console.log('Note title taken!');
    }
    
}

const removeNote = (title)=>{
    const notes = loadNotes()
    const notesToKeep = notes.filter((note)=>note.title !== title)

    if (notes.length>notesToKeep.length){
        console.log(chalk.green.inverse('Note removed!'));
    }
    else{
        console.log(chalk.red.inverse('No note found!'));
    }
    saveNotes(notesToKeep);
}

const saveNotes = (notes)=>{
    const newNotes = JSON.stringify(notes)
    fs.writeFileSync('notes.json', newNotes)
}

const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e){
        return [];
    }
}

const listNotes = ()=>{
    console.log(chalk.green('Your notes'));
    const notes = loadNotes();

    notes.forEach((note) => {
        console.log(note.title);
        
    });
    
}

const readNote = (title)=>{
    const notes = loadNotes();
    const soughtForNote = notes.find((note)=>note.title===title);
    if (!soughtForNote){
        console.log(chalk.bgRedBright('Error! No note found.'));
    }
    else {
        console.log(chalk.blueBright(soughtForNote.title));
        console.log(soughtForNote.body);
        
        
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};