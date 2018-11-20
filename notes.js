module.exports = {
    addNote: fnAddNote,
    removeNote: fnRemoveNote,
    readNote: fnReadNote,
};

function fnAddNote(sTitle, sBody) {
    console.log(`The title of the movie is (${sTitle}) and the content is (${sBody})`);
}

function fnRemoveNote(sTitle) {
    console.log(`Removing note with title ${sTitle}`);
}

function fnReadNote(sTitle) {
    console.log(`Reading note with title ${sTitle}`);
}
