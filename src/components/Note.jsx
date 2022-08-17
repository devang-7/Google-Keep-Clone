import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {

  // Created a function so that it doesnt trigger the function as soon as it is rendered
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">

      {/* Shows the title of the note */}
      <h1>{props.title}</h1>

      {/* Shows the content in the note */}
      <p>{props.content}</p>

      {/* Button to handle the delete function */}
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
