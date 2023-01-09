import { React, useState } from "react";
import shortid from "shortid";
import PropTypes from "prop-types";

export default function CrudForm({ setRequest }) {
  const [content, setForm] = useState("");

  const handleChange = (event) => {
    let { value } = event.target;
    setForm(value);
  };

  const btnChange = (event) => {
    event.preventDefault();
    setRequest({ id: shortid(), content: content });
    setForm("");
  };

  return (
    <form onSubmit={btnChange} className='formNewNote'>
      <label htmlFor='newNote'>New note</label>
      <textarea
        type='textarea'
        value={content}
        onChange={handleChange}
        id='newNote'
        className='noteArea'
      />
      <button className='btnForm material-icons'>chevron_right</button>
    </form>
  );
}

CrudForm.propTypes = {
  setRequest: PropTypes.func.isRequired,
};
