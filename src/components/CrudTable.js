import React from "react";
import PropTypes from "prop-types";

export default function CrudTable({ text, id, deleteRequest }) {
  return (
    <>
      <div className='crudItem'>
        <button
          className='crudDelete material-icons'
          onClick={() => deleteRequest(id)}
        >
          close
        </button>
        <p>{text}</p>
      </div>
    </>
  );
}

CrudTable.propTypes = {
  text: PropTypes.string,
  id: PropTypes.string,
  deleteRequest: PropTypes.func.isRequired,
};
