import NotesApi from "./NotesApi.js";

// NotesApi.saveNotes({
//   title: "I am a new note",
//   body: "Hi jony",
// });

NotesApi.deleteNotes(46680);

console.log(NotesApi.getsAllNotes());
