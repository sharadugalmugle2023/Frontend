// import React, { useState, useEffect } from 'react';
// import './EditUser.css';
// import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons

// function EditUser({ onClose, user, onEditUser }) {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phoneNumber: '',
//     role: '',
//     status: '',
//   });

//   useEffect(() => {
//     if (user) {
//       setFormData({
//         user_id: user.user_id,
//         firstName: user.firstName,
//         lastName: user.lastName,
//         email: user.email,
//         phoneNumber: user.phoneNumber,
//         role: user.role,
//         status: user.status,
//       });
//     }
//   }, [user]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleEdit = async () => {
//     if (formData.firstName && formData.lastName && formData.email && formData.phoneNumber) {
//       try {
//         const response = await fetch(`/edit_user`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             user_id: formData.user_id,
//             firstName: formData.firstName,
//             lastName: formData.lastName,
//             email: formData.email,
//             phoneNumber: formData.phoneNumber,
//             role: formData.role,
//             status: formData.status,
//           }),
//         });
//         const data = await response.json();
//         if (data.status === 'SUCCESS') {
//           alert('User edited successfully!');
//           onEditUser({
//             user_id: formData.user_id,
//             firstName: formData.firstName,
//             lastName: formData.lastName,
//             email: formData.email,
//             phoneNumber: formData.phoneNumber,
//             role: formData.role,
//             status: formData.status,
//           });
//           onClose();
//         } else {
//           alert('Failed to edit user: ' + data.data);
//         }
//       } catch (error) {
//         console.error('Error editing user:', error);
//         alert('Error editing user');
//       }
//     } else {
//       alert('Please enter all required fields');
//     }
//   };

//   return (
//     <div className="edit-user-overlay">
//       <div className="edit-user-modal-content">
//         <div className='edit-user-header'>
//           <div>Edit User</div>
//           <button className="edit-user-close-button" onClick={onClose}>×</button>
//         </div>
//         <hr />
//         <form className='edit-user-form' onSubmit={handleEdit}>
//           <div className="edit-user-form-row two-columns">
//             <div className="floating-label-input">
//               <input
//                 type="text"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 required
//                 placeholder=" " // Placeholder to trigger the floating label
//               />
//               <label>First Name*</label>
//             </div>
//             <div className="floating-label-input">
//               <input
//                 type="text"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 required
//                 placeholder=" "
//               />
//               <label>Last Name*</label>
//             </div>
//           </div>

//           <div className="edit-user-form-row two-columns">
//             <div className="floating-label-input">
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 placeholder=" "
//                 disabled    //Made little blour
//               />
//               <label>Email*</label>
//             </div>
//             <div className="floating-label-input">
//               <input
//                 type="tel"
//                 name="phoneNumber"
//                 value={formData.phoneNumber}
//                 onChange={handleChange}
//                 required
//                 placeholder=" "
//               />
//               <label>Phone Number*</label>
//             </div>
//           </div>

//           <div className="edit-user-form-row two-columns">
//             <div className="select-container floating-label-input">
//               <select
//                 name="role"
//                 value={formData.role}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="" disabled>Select User Role</option>
//                 <option value="SuperAdmin">SuperAdmin</option>
//                 <option value="Admin">Admin</option>
//                 <option value="Write">Write</option>
//                 <option value="Read">Read</option>
//               </select>
//               <label>Role*</label>
//             </div>
//             <div className="select-container floating-label-input">
//               <select
//                 name="status"
//                 value={formData.status}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="" disabled>Select Status</option>
//                 <option value="Active">Active</option>
//                 <option value="InActive">InActive</option>
//               </select>
//               <label>Active Status*</label>
//             </div>
//           </div>

//           <div className="form-actions">
//             <button type="submit">Save</button>
//             <button type="button" onClick={onClose}>Cancel</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default EditUser;




















// import React, { useState, useEffect } from 'react';
// import './EditUser.css';
// import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons

// function EditUser({ onClose, user, onEditUser }) {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phoneNumber: '',
//     role: '',
//     status: '',
//   });

//   useEffect(() => {
//     if (user) {
//       setFormData({
//         user_id: user.user_id,
//         firstName: user.firstName,
//         lastName: user.lastName,
//         email: user.email,
//         phoneNumber: user.phoneNumber,
//         role: user.role,
//         status: user.status,
//       });
//     }
//   }, [user]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleEdit = async (e) => {
//     e.preventDefault();
//     if (formData.firstName && formData.lastName && formData.email && formData.phoneNumber) {
//       try {
//         const response = await fetch(`/edit_user`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             user_id: formData.user_id,
//             firstName: formData.firstName,
//             lastName: formData.lastName,
//             email: formData.email,
//             phoneNumber: formData.phoneNumber,
//             role: formData.role,
//             status: formData.status,
//           }),
//         });
//         const data = await response.json();
//         if (data.status === 'SUCCESS') {
//           alert('User edited successfully!');
//           onEditUser({
//             user_id: formData.user_id,
//             firstName: formData.firstName,
//             lastName: formData.lastName,
//             email: formData.email,
//             phoneNumber: formData.phoneNumber,
//             role: formData.role,
//             status: formData.status,
//           });
//           onClose();
//         } else {
//           alert('Failed to edit user: ' + data.data);
//         }
//       } catch (error) {
//         console.error('Error editing user:', error);
//         alert('Error editing user');
//       }
//     } else {
//       alert('Please enter all required fields');
//     }
//   };


  

//   return (
//     <div className="edit-user-overlay">
//       <div className="edit-user-modal-content">
//         <div className='edit-user-header'>
//           <div>Edit User</div>
//           <button className="edit-user-close-button" onClick={onClose}>×</button>
//         </div>
//         <hr />
//         <form className='edit-user-form' onSubmit={handleEdit}>
//           <div className="edit-user-form-row two-columns">
//             <div className="floating-label-input">
//               <input
//                 type="text"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 required
//                 placeholder=" " // Placeholder to trigger the floating label
//               />
//               <label>First Name*</label>
//             </div>
//             <div className="floating-label-input">
//               <input
//                 type="text"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 required
//                 placeholder=" "
//               />
//               <label>Last Name*</label>
//             </div>
//           </div>

//           <div className="edit-user-form-row two-columns">
//             <div className="floating-label-input">
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 placeholder=" "
//                 disabled    // Make the email input read-only
//                 className="blurred-input" // Add blurred effect
//               />
//               <label>Email*</label>
//             </div>
//             <div className="floating-label-input">
//               <input
//                 type="tel"
//                 name="phoneNumber"
//                 value={formData.phoneNumber}
//                 onChange={handleChange}
//                 required
//                 placeholder=" "
//               />
//               <label>Phone Number*</label>
//             </div>
//           </div>

//           <div className="edit-user-form-row two-columns">
//             <div className="select-container floating-label-input">
//               <select
//                 name="role"
//                 value={formData.role}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="" disabled>Select User Role</option>
//                 <option value="SuperAdmin">SuperAdmin</option>
//                 <option value="Admin">Admin</option>
//                 <option value="Write">Write</option>
//                 <option value="Read">Read</option>
//               </select>
//               <label>Role*</label>
//             </div>
//             <div className="select-container floating-label-input">
//               <select
//                 name="status"
//                 value={formData.status}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="" disabled>Select Status</option>
//                 <option value="Active">Active</option>
//                 <option value="InActive">InActive</option>
//               </select>
//               <label>Active Status*</label>
//             </div>
//           </div>

//           <div className="form-actions">
//             <button type="submit">Save</button>
//             <button type="button" onClick={onClose}>Cancel</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default EditUser;


















import React, { useState, useEffect } from 'react';
import './EditUser.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons

function EditUser({ onClose, user, onEditUser, fetching }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    role: '',
    status: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({
        user_id: user.userID, // Ensure correct field name
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        role: user.role,
        status: user.status,
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEdit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    if (formData.firstName && formData.lastName && formData.email && formData.phoneNumber) {
      try {
        const response = await fetch(`/edit_user`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_id: formData.user_id,
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            role: formData.role,
            status: formData.status,
          }),
        });
        const data = await response.json();
        if (data.status === 'SUCCESS') {
          alert('User edited successfully!');
          onEditUser({
            user_id: formData.user_id,
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            role: formData.role,
            status: formData.status,
          });
          fetching();
          onClose();
        } else {
          alert('Failed to edit user: ' + data.data);
        }
      } catch (error) {
        console.error('Error editing user:', error);
        alert('Error editing user');
      }
    } else {
      alert('Please enter all required fields');
    }
  };

  return (
    <div className="edit-user-overlay">
      <div className="edit-user-modal-content">
        <div className='edit-user-header'>
          <div>Edit User</div>
          <button className="edit-user-close-button" onClick={onClose}>×</button>
        </div>
        <hr />
        <form className='edit-user-form' onSubmit={handleEdit}>
          <div className="edit-user-form-row two-columns">
            <div className="floating-label-input">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder=" " // Placeholder to trigger the floating label
              />
              <label>First Name*</label>
            </div>
            <div className="floating-label-input">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label>Last Name*</label>
            </div>
          </div>

          <div className="edit-user-form-row two-columns">
            <div className="floating-label-input">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder=" "
                disabled    // Make the email input read-only
                className="blurred-input" // Add blurred effect
              />
              <label>Email*</label>
            </div>
            <div className="floating-label-input">
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label>Phone Number*</label>
            </div>
          </div>

          <div className="edit-user-form-row two-columns">
            <div className="select-container floating-label-input">
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select User Role</option>
                <option value="SuperAdmin">SuperAdmin</option>
                <option value="Admin">Admin</option>
                <option value="Write">Write</option>
                <option value="Read">Read</option>
              </select>
              <label>Role*</label>
            </div>
            <div className="select-container floating-label-input">
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select Status</option>
                <option value="Active">Active</option>
                <option value="InActive">InActive</option>
              </select>
              <label>Active Status*</label>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit">Save</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditUser;
