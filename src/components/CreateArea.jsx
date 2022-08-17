import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {

  // This is for transitioning of the zoom button inside the create area section of the note 
  const [isExpanded, setExpanded] = useState(false);

  // Using a useState Hook to create a new note, by using title and the content field
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  // Handles change when either of the input field gets triggered
  function handleChange(event) {
    const { name, value } = event.target; //destructuring the event object

    // Sets the value of the given tag while keeping the other value intact
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  // Initiates the note submitting and prevents the page from refreshing; Sends the note to onAdd function
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  // Helps in changing the state of isExpand to true
  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">

        {/* This piece of code runs only when isExpanded is true */}
        {isExpanded && (

          // Title section
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        {/* Content Area of the note */}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        {/* Button to add note to the database */}
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
