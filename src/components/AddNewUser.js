// import React, { useState } from 'react';
// import './AddNewUser.css';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';  // Import eye icons

// function AddNewUser({ onClose, onAddUser }) {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phoneNumber: '',
//     password: '',
//     confirmPassword: '',
//     role: '',
//     status: '',
//   });

//   const [errors, setErrors] = useState({
//     passwordMatch: false,
//     invalidPhoneNumber: false,
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });

//     // Validate phone number
//     if (name === 'phoneNumber') {
//       const isValidPhoneNumber = /^\d{10}$/.test(value);
//       setErrors({ ...errors, invalidPhoneNumber: !isValidPhoneNumber });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (formData.password !== formData.confirmPassword) {
//       setErrors({ ...errors, passwordMatch: true });
//       return;
//     } else {
//       setErrors({ ...errors, passwordMatch: false });
//     }

//     if (errors.invalidPhoneNumber) {
//       return;
//     }

//     try {
//       const response = await fetch(`/add_user`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           firstName: formData.firstName,
//           lastName: formData.lastName,
//           email: formData.email,
//           phoneNumber: formData.phoneNumber,
//           password: formData.password,
//           role: formData.role,
//           status: formData.status,
//         }),
//       });

//       const data = await response.json();
//       if (response.ok && data.status === 'SUCCESS') {
//         alert('User added successfully!');
//         onAddUser([data.user_name, formData.firstName, formData.lastName, formData.email, formData.phoneNumber, formData.role, formData.status]);
//         onClose(); // Close the modal after successful addition
//       } else {
//         alert('Failed to add user: ' + (data.message || 'Unknown error'));
//       }
//     } catch (error) {
//       console.error('Error adding user:', error);
//       alert('Error adding user');
//     }
//   };

//   return (
//     <div className="add-new-user-modal-overlay">
//       <div className="add-new-user-modal-content">
//         <div className='add-new-user-header'>
//           <div>Add New User</div>
//           <button className="add-new-user-close-button" onClick={onClose}>×</button>
//         </div>
//         <hr />
//         <form className='new-user-form' onSubmit={handleSubmit}>
//           <div className="add-new-user-form-row two-columns">
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

//           <div className="add-new-user-form-row two-columns">
//             <div className="floating-label-input">
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 placeholder=" "
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
//               {errors.invalidPhoneNumber && (
//                 <div className="error-message">Invalid phone number</div>
//               )}
//             </div>
//           </div>

//           <div className="add-new-user-form-row two-columns">
//             <div className="password-wrapper floating-label-input">
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//                 placeholder=" "
//               />
//               <label>Password*</label>
//               <span
//                 className="user-password-toggle"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <FaEye /> : <FaEyeSlash />}
//               </span>
//             </div>
//             <div className="password-wrapper floating-label-input">
//               <input
//                 type={showConfirmPassword ? 'text' : 'password'}
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 required
//                 placeholder=" "
//               />
//               <label>Confirm Password*</label>
//               <span
//                 className="user-password-toggle"
//                 onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//               >
//                 {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
//               </span>
//             </div>
//           </div>

//           {errors.passwordMatch && (
//             <div className="add-new-user-form-row error-message">Passwords do not match</div>
//           )}

//           <div className="add-new-user-form-row two-columns">
//             <div className="select-container floating-label-input">
//               <select
//                 name="role"
//                 value={formData.role}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="" disabled>Select Role</option>
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
//             <button type="submit">Add User</button>
//             <button type="button" onClick={onClose}>Cancel</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AddNewUser;





















// import React, { useState } from 'react';
// import './AddNewUser.css';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';  // Import eye icons

// function AddNewUser({ onClose, onAddUser }) {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phoneNumber: '',
//     password: '',
//     confirmPassword: '',
//     role: '',
//     status: '',
//   });

//   const [errors, setErrors] = useState({
//     passwordMatch: false,
//     invalidPhoneNumber: false,
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });

//     // Validate phone number
//     if (name === 'phoneNumber') {
//       const isValidPhoneNumber = /^\d{10}$/.test(value);
//       setErrors({ ...errors, invalidPhoneNumber: !isValidPhoneNumber });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (formData.password !== formData.confirmPassword) {
//       setErrors({ ...errors, passwordMatch: true });
//       return;
//     } else {
//       setErrors({ ...errors, passwordMatch: false });
//     }

//     if (errors.invalidPhoneNumber) {
//       return;
//     }

//     try {
//       const response = await fetch(`/add_user`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           firstName: formData.firstName,
//           lastName: formData.lastName,
//           email: formData.email,
//           phoneNumber: formData.phoneNumber,
//           password: formData.password,
//           role: formData.role,
//           status: formData.status,
//         }),
//       });

//       const data = await response.json();
//       if (response.ok && data.status === 'SUCCESS') {
//         alert('User added successfully!');
//         onAddUser({
//           user_id: data.user_id,
//           first_name: formData.firstName,
//           last_name: formData.lastName,
//           email: formData.email,
//           phone_number: formData.phoneNumber,
//           role: formData.role,
//           status: formData.status
//         });
//         onClose(); // Close the modal after successful addition
//       } else {
//         alert('Failed to add user: ' + (data.message || 'Unknown error'));
//       }
//     } catch (error) {
//       console.error('Error adding user:', error);
//       alert('Error adding user');
//     }
//   };

//   return (
//     <div className="add-new-user-modal-overlay">
//       <div className="add-new-user-modal-content">
//         <div className='add-new-user-header'>
//           <div>Add New User</div>
//           <button className="add-new-user-close-button" onClick={onClose}>×</button>
//         </div>
//         <hr />
//         <form className='new-user-form' onSubmit={handleSubmit}>
//           <div className="add-new-user-form-row two-columns">
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

//           <div className="add-new-user-form-row two-columns">
//             <div className="floating-label-input">
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 placeholder=" "
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
//               {errors.invalidPhoneNumber && (
//                 <div className="error-message">Invalid phone number</div>
//               )}
//             </div>
//           </div>

//           <div className="add-new-user-form-row two-columns">
//             <div className="password-wrapper floating-label-input">
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//                 placeholder=" "
//               />
//               <label>Password*</label>
//               <span
//                 className="user-password-toggle"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <FaEye /> : <FaEyeSlash />}
//               </span>
//             </div>
//             <div className="password-wrapper floating-label-input">
//               <input
//                 type={showConfirmPassword ? 'text' : 'password'}
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 required
//                 placeholder=" "
//               />
//               <label>Confirm Password*</label>
//               <span
//                 className="user-password-toggle"
//                 onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//               >
//                 {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
//               </span>
//             </div>
//           </div>

//           {errors.passwordMatch && (
//             <div className="add-new-user-form-row error-message">Passwords do not match</div>
//           )}

//           <div className="add-new-user-form-row two-columns">
//             <div className="select-container floating-label-input">
//               <select
//                 name="role"
//                 value={formData.role}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="" disabled>Select Role</option>
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
//             <button type="submit">Add User</button>
//             <button type="button" onClick={onClose}>Cancel</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AddNewUser;
























import React, { useState } from 'react';
import './AddNewUser.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function AddNewUser({ onClose, onAddUser }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    role: '',
    status: '',
  });

  const [errors, setErrors] = useState({
    passwordMatch: false,
    invalidPhoneNumber: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'phoneNumber') {
      const isValidPhoneNumber = /^\d{10}$/.test(value);
      setErrors({ ...errors, invalidPhoneNumber: !isValidPhoneNumber });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrors({ ...errors, passwordMatch: true });
      return;
    } else {
      setErrors({ ...errors, passwordMatch: false });
    }

    if (errors.invalidPhoneNumber) {
      return;
    }

    try {
      const response = await fetch(`/add_user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          password: formData.password,
          role: formData.role,
          status: formData.status,
        }),
      });

      const data = await response.json();
      if (response.ok && data.status === 'SUCCESS') {
        alert('User added successfully!');
        onAddUser(); // Trigger re-fetching of user list
        onClose(); // Close the modal after successful addition
      } else {
        alert('Failed to add user: ' + (data.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error adding user:', error);
      alert('Error adding user');
    }
  };

  return (
    <div className="add-new-user-modal-overlay">
      <div className="add-new-user-modal-content">
        <div className='add-new-user-header'>
          <div>Add New User</div>
          <button className="add-new-user-close-button" onClick={onClose}>×</button>
        </div>
        <hr />
        <form className='new-user-form' onSubmit={handleSubmit}>
          <div className="add-new-user-form-row two-columns">
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

          <div className="add-new-user-form-row two-columns">
            <div className="floating-label-input">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder=" "
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
              {errors.invalidPhoneNumber && (
                <div className="error-message">Invalid phone number</div>
              )}
            </div>
          </div>

          <div className="add-new-user-form-row two-columns">
            <div className="password-wrapper floating-label-input">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label>Password*</label>
              <span
                className="user-password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            <div className="password-wrapper floating-label-input">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label>Confirm Password*</label>
              <span
                className="user-password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </div>

          {errors.passwordMatch && (
            <div className="add-new-user-form-row error-message">Passwords do not match</div>
          )}

          <div className="add-new-user-form-row two-columns">
            <div className="select-container floating-label-input">
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select Role</option>
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
            <button type="submit">Add User</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddNewUser;
