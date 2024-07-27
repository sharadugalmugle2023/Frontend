import React from 'react';
import './DeleteProgram.css';

function DeleteProgram({ onClose, onDelete, program }) {
  const handleDelete = async () => {
    try {
      const response = await fetch(`/delete_program`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ program_id: program.programID })
      });
      const data = await response.json();
      if (data.status === 'SUCCESS') {
        alert('Program deleted successfully!');
        onDelete(program);
        onClose();
      } else {
        alert('Failed to delete program: ' + data.data);
      }
    } catch (error) {
      console.error('Error deleting program:', error);
      alert('Error deleting program');
    }
  };

  return (
    <div className="delete-program-overlay">
      <div className="delete-program">
        <div className="delete-program-header">
          <div>Delete Product</div>
          <button className="delete-program-close" onClick={onClose}>×</button>
        </div>
        <hr />
        <div className="delete-program-body">
          Are you sure you want to delete product '<strong>{program.programName}</strong>'?
        </div>
        <div className="delete-program-footer">
          <button className="delete-program-confirm" onClick={handleDelete}>Yes, Delete</button>
          <button className="delete-program-cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteProgram;

