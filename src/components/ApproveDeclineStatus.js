// import React from 'react';
// import './ApproveDeclineStatus.css';

// function ApproveDeclineStatus({ onClose, rule, fetchRules }) {
//   const handleApprove = async () => {
//     await changeRuleStatus('approved');
//   };

//   const handleDecline = async () => {
//     await changeRuleStatus('declined');
//   };

//   const changeRuleStatus = async (newStatus) => {
//     try {
//       const response = await fetch('/change_rule_status', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ rule_id: rule.rule_id, status: newStatus })
//       });
//       const data = await response.json();
//       if (data.status === 'SUCCESS') {
//         alert('Rule status updated successfully!');
//         fetchRules(); // Refresh the rules list
//         onClose();
//       } else {
//         alert('Failed to update rule status: ' + data.data);
//       }
//     } catch (error) {
//       console.error('Error updating rule status:', error);
//       alert('Error updating rule status');
//     }
//   };

//   return (
//     <div className="approve-decline-overlay">
//       <div className="approve-decline">
//         <div className="approve-decline-header">
//           <h3>Change Rule Status</h3>
//           <button className="approve-decline-close" onClick={onClose}>×</button>
//         </div>
//         <div className="approve-decline-body">
//           <p>Are you sure you want to change the status of the rule <strong>{rule.rulename}</strong>?</p>
//         </div>
//         <div className="approve-decline-footer">
//           <button className="approve-button" onClick={handleApprove}>Approve</button>
//           <button className="decline-button" onClick={handleDecline}>Decline</button>
//           <button className="cancel-button" onClick={onClose}>Cancel</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ApproveDeclineStatus;














import React from 'react';
import './ApproveDeclineStatus.css';

function ApproveDeclineStatus({ onClose, rule, fetchRules }) {
  console.log("Rule in ApproveDeclineStatus comp:  ", rule)
  const handleApprove = async () => {
    await changeRuleStatus('approved');
  };

  const handleDecline = async () => {
    await changeRuleStatus('declined');
  };

  const changeRuleStatus = async (newStatus) => {
    try {
      const response = await fetch('/change_rule_status', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ rule_id: rule.rule_id, status: newStatus })
      });
      const data = await response.json();
      if (data.status === 'SUCCESS') {
        alert('Rule status updated successfully!');
        fetchRules(); // Refresh the rules list
        onClose();
      } else {
        alert('Failed to update rule status: ' + data.data);
      }
    } catch (error) {
      console.error('Error updating rule status:', error);
      alert('Error updating rule status');
    }
  };

  return (
    <div className="approve-decline-overlay">
      <div className="approve-decline">
        <div className="approve-decline-header">
          <div>Change Rule Status</div>
          <button className="approve-decline-close" onClick={onClose}>×</button>
        </div>
        <hr />
        <div className="approve-decline-body">
          <p>Are you sure you want to change the status of the rule <strong>{rule.rulename}</strong>?</p>
        </div>
        <div className="approve-decline-footer">
          <button className="approve-button" onClick={handleApprove}>Approve</button>
          <button className="decline-button" onClick={handleDecline}>Decline</button>
          {/* <button className="cancel-button" onClick={onClose}>Cancel</button> */}
        </div>
      </div>
    </div>
  );
}

export default ApproveDeclineStatus;
