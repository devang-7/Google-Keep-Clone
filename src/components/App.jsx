// App Component

import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { db } from "../firebase.js"
import { addDoc, collection, getDocs, deleteDoc, doc } from "firebase/firestore";

function App() {

  //Creating a useState hook to contain notes
  const [notes, setNotes] = useState([]);

  // A collection reference for querying the documents in the collection
  const notesCollectionRef = collection(db, "notes")

  // This piece of code runs, once the app loads; This note dependency depicts to re-render it once the note array changes
  useEffect(() => {
    const getNotes = async () => {
      // await - handle a promise; getDocs - returns all of the documents in a specific collection
      const data = await getDocs(notesCollectionRef);

      // Looping through the data in collections and setting the array as required
      setNotes(data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })))
    };

    getNotes();
  }, [notes])

  // To add notes and get them saved in the firestore database
  const addNote = async (newNote) => {
    await addDoc(notesCollectionRef, newNote);

    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  const deleteNote = (id) => {
    // const noteDoc = doc(db, "notes", id);
    // deleteDoc(noteDoc);

    // Deleting notes based on the index provided as the key and passing it to the notes prop
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {  //using filter function to filter out the note matching the given id
        return index !== id;
      });
    });
  }

  return (
    <div>

      {/* Header section of the note */}
      <Header />

      {/* Section to create note */}
      <CreateArea onAdd={addNote} />

      {/* Looping through each Note item present in the notes array and passing to `Note Component` */}
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}

      {/* Footer section of the note */}
      <Footer />
    </div>
  );
}

export default App;
