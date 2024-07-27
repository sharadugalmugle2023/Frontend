import React from 'react';
import './DeleteUser.css';

function DeleteUser({ onClose, onDelete, user }) {


  // console.log("USER ID is:", user.userID)
  const handleDelete = async () => {
    try {
      const response = await fetch(`/delete_user`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_id: user.userID })
      });
      const data = await response.json();
      if (data.status === 'SUCCESS') {
        alert('User deleted successfully!');
        onDelete(user);
        onClose();
      } else {
        alert('Failed to delete user: ' + data.data);
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Error deleting user');
    }
  };

  return (
    <div className="delete-user-overlay">
      <div className="delete-user">
        <div className="delete-user-header">
          <div>Delete User</div>
          <button className="delete-user-close" onClick={onClose}>×</button>
        </div>
        <hr />
        <div className="delete-user-body">
          Are you sure you want to delete '<strong>{user.firstName} {user.lastName}</strong>'?
        </div>
        <div className="delete-user-footer">
          <button className="delete-user-confirm" onClick={handleDelete}>Yes, Delete</button>
          <button className="delete-user-cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteUser;

