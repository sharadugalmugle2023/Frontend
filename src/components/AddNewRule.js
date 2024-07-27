// import React, { useState, useEffect } from 'react';
// import './AddNewRule.css';

// function AddNewRule({ onClose, onAddRule }) {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     mediaType: '',
//     disclaimer: '',
//   });

//   const [programs, setPrograms] = useState([]);

//   useEffect(() => {
//     fetchPrograms();
//   }, []);

//   const fetchPrograms = async () => {
//     try {
//       const response = await fetch(`/list_programs`);
//       const data = await response.json();
//       if (data.status === 'SUCCESS') {
//         setPrograms(data.data);
//       } else {
//         console.error('Failed to fetch programs:', data.data);
//       }
//     } catch (error) {
//       console.error('Error fetching programs:', error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleAdd = () => {
//     const { title, description, mediaType, disclaimer } = formData;
//     if (title && description && mediaType && disclaimer) {
//       const newRule = { rulename: title, media_type: mediaType, description, disclaimer, 'ruleStatus':'pending' };
//       onAddRule(newRule);
//       onClose();
//     } else {
//       alert('Please enter all fields');
//     }
//   };

//   return (
//     <div className="add-new-rule-overlay">
//       <div className="add-new-rule">
//         <div className="add-new-rule-header">
//           <div>Add New Rule</div>
//           <button className="add-new-rule-close" onClick={onClose}>×</button>
//         </div>
//         <hr />
//         <div className="add-new-rule-body">
//           <div className="floating-label-input">
//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               required
//               placeholder=" "
//             />
//             <label>Rule Title*</label>
//           </div>

//           <div className="floating-label-input">
//             <input
//               type="text"
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               required
//               placeholder=" "
//             />
//             <label>Description*</label>
//           </div>

//           <div className="floating-label-input">
//             <input
//               type="text"
//               name="disclaimer"
//               value={formData.disclaimer}
//               onChange={handleChange}
//               required
//               placeholder=" "
//             />
//             <label>Rule Defination*</label>
//           </div>

//           <div className="add-new-rule-field-row">
//           <div className="floating-label-input">
//               <select
//                 name="mediaType"
//                 value={formData.mediaType}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="" disabled>Select User</option>
//                 <option value="Sharad">sharad</option>
//                 <option value="Om">Om</option>
//                 <option value="Ram">Ram</option>
//               </select>
//               <label>List Users*</label>
//             </div>
//             <div className="floating-label-input">
//               <select
//                 name="mediaType"
//                 value={formData.mediaType}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="" disabled>Select Media Type</option>
//                 <option value="PDF/Image">PDF/Image</option>
//                 <option value="Video">Video</option>
//                 <option value="GIF">GIF</option>
//               </select>
//               <label>Media Type*</label>
//             </div>
//           </div>
//         </div>
//         <div className="add-new-rule-footer">
//           <button className="add-new-rule-add" onClick={handleAdd}>Add</button>
//           <button className="add-new-rule-cancel" onClick={onClose}>Cancel</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddNewRule;




























import React, { useState, useEffect } from 'react';
import './AddNewRule.css';

function AddNewRule({ onClose, onAddRule }) {
  const userLocalData = JSON.parse(localStorage.getItem('userData'));

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    mediaType: '',
    disclaimer: '',
    assigned_to: '',
    created_by: `${userLocalData[1]} ${userLocalData[2]}`,
  });

  const [users, setUsers] = useState([]); // Added users state

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(`/list_users`);
      const data = await response.json();
      if (data.body.status === 'SUCCESS') {
        setUsers(data.body.data);
      } else {
        console.error('Failed to fetch users:', data.data);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  console.log("USER in add rule: ",users)


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = () => {
    const { title, description, mediaType, disclaimer, assigned_to, created_by } = formData;
    console.log("title is:",title);
    console.log("description is:",description);
    console.log("mediaType is:",mediaType);
    console.log("disclaimer is:",disclaimer);
    console.log("assigned_to is:",assigned_to);
    console.log("created_by is:",created_by);
    if (title && description && mediaType && disclaimer && assigned_to && created_by) {
      const newRule = { rulename: title, media_type: mediaType, description, disclaimer, 'ruleStatus': 'pending', assigned_to, created_by };
      onAddRule(newRule);
      onClose();
    } else {
      alert('Please enter all fields');
    }
  };

  return (
    <div className="add-new-rule-overlay">
      <div className="add-new-rule">
        <div className="add-new-rule-header">
          <div>Add New Rule</div>
          <button className="add-new-rule-close" onClick={onClose}>×</button>
        </div>
        <hr />
        <div className="add-new-rule-body">
          <div className="floating-label-input">
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label>Rule Title*</label>
          </div>

          <div className="floating-label-input">
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label>Description*</label>
          </div>

          <div className="floating-label-input">
            <input
              type="text"
              name="disclaimer"
              value={formData.disclaimer}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label>Rule Definition*</label>
          </div>

          <div className="add-new-rule-field-row">
            <div className="floating-label-input">
              <select
                name="assigned_to"
                value={formData.assigned_to}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select Assignee</option>
                {users.map((user) => (
                  (user.role === "SuperAdmin") && (
                    <option key={user.userID} value={user.email}>{user.email}</option>
                  )
                ))}
              </select>
              <label>Assigned To*</label>
            </div>
            <div className="floating-label-input">
              <select
                name="mediaType"
                value={formData.mediaType}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select Media Type</option>
                <option value="PDF/Image">PDF/Image</option>
                <option value="Video">Video</option>
                <option value="GIF">GIF</option>
              </select>
              <label>Media Type*</label>
            </div>
          </div>
        </div>
        <div className="add-new-rule-footer">
          <button className="add-new-rule-add" onClick={handleAdd}>Add</button>
          <button className="add-new-rule-cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default AddNewRule;







