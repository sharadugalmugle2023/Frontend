import React from 'react';
import './DeleteRule.css';

function DeleteRule({ onClose, onDelete, rule }) {

  const handleDelete = () => {
    onDelete(rule.rule_id);
    onClose();
  };

  return (
    <div className="delete-rule-overlay">
      <div className="delete-rule">
        <div className="delete-rule-header">
          <div>Delete Rule</div>
          <button className="delete-rule-close" onClick={onClose}>×</button>
        </div>
        <hr />
        <div className="delete-rule-body">
          Are you sure you want to delete rule '<strong>{rule.rulename}</strong>'?
        </div>
        <div className="delete-rule-footer">
          <button className="delete-rule-confirm" onClick={handleDelete}>Yes, Delete</button>
          <button className="delete-rule-cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteRule;
