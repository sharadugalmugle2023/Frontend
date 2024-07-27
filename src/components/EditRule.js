import React, { useState, useEffect } from 'react';
import './EditRule.css';

function EditRule({ onClose, rule }) {
  const [title, setTitle] = useState('');
  const [mediaType, setMediaType] = useState('');
  const [description, setDescription] = useState('');
  const [disclaimer, setDisclaimer] = useState('');

  console.log("RULE in edit: ",rule)

  useEffect(() => {
    if (rule) {
      setTitle(rule.rulename);
      setMediaType(rule.media_type);
      setDescription(rule.description);
      setDisclaimer(rule.disclaimer);
    }
  }, [rule]);

  const handleEdit = async () => {
    if (title && description && mediaType) {
      try {
        const response = await fetch(`/edit_rule`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ rule_id: rule.rule_id, rulename: title, description, disclaimer })
        });
        const data = await response.json();
        if (data.status === 'SUCCESS') {
          alert('Rule updated successfully!');
          onClose();
        } else {
          alert('Failed to update rule: ' + data.data);
        }
      } catch (error) {
        console.error('Error updating rule:', error);
        alert('Error updating rule');
      }
    } else {
      alert('Please enter all fields');
    }
  };

  return (
    <div className="edit-rule-overlay">
      <div className="edit-rule">
        <div className="edit-rule-header">
          <div>Edit Rule</div>
          <button className="edit-rule-close" onClick={onClose}>×</button>
        </div>
        <hr />
        <div className="edit-rule-body">
          <div className="floating-label-input">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder=" "
            />
            <label>Rule Name</label>
          </div>
          <div className="floating-label-input">
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              placeholder=" "
            />
            <label>Description</label>
          </div>
          <div className="floating-label-input">
            <input
              type="text"
              value={disclaimer}
              onChange={(e) => setDisclaimer(e.target.value)}
              placeholder=" "
            />
            <label>Rule Defination</label>
          </div>
          <div className="edit-rule-field-row">
            <div className="select-container floating-label-input">
              <select
                value={mediaType}
                onChange={(e) => setMediaType(e.target.value)}
                disabled
              >
                <option value="PDF/Image">PDF/Image</option>
                <option value="Video">Video</option>
                <option value="GIF">GIF</option>
              </select>
              <label>Media Type</label>
            </div>
          </div>
        </div>
        <div className="edit-rule-footer">
          <button className="edit-rule-save" onClick={handleEdit}>Save</button>
          <button className="edit-rule-cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default EditRule;









