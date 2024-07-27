// import React, { useEffect, useState } from 'react';
// import './MyProfile.css';

// function MyProfile({ userId, onClose }) {
//   const [userDetails, setUserDetails] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phoneNumber: '',
//     role: '',
//     status: '',
//   });

//   useEffect(() => {
//     // Fetch user details when the component mounts
//     const fetchUserDetails = async () => {
//       try {
//         const response = await fetch(`/user-details`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ user_id: userId }),
//           credentials: 'include', // Ensure cookies are sent with the request
//         });
//         if (response.ok) {
//           const data = await response.json();
//           setUserDetails(data);
//         } else {
//           const errorData = await response.json();
//           console.error('Failed to fetch user details:', errorData.message);
//         }
//       } catch (error) {
//         console.error('Error fetching user details:', error);
//       }
//     };

//     fetchUserDetails();
//   }, [userId]);

//   return (
//     <div className="my-profile-overlay">
//       <div className="my-profile-content">
//         <div className='myprofile-header'>
//           <div>My Profile</div>
//           <button className="my-profile-close-button" onClick={onClose}>×</button>
//         </div>
//         <hr />
//         <div className="my-profile-details">
//           <div className="my-profile-detail-row">
//             <label>First Name:</label>
//             <span>{userDetails.firstName}</span>
//           </div>
//           <div className="my-profile-detail-row">
//             <label>Last Name:</label>
//             <span>{userDetails.lastName}</span>
//           </div>
//           <div className="my-profile-detail-row">
//             <label>Email ID:</label>
//             <span>{userDetails.email}</span>
//           </div>
//           <div className="my-profile-detail-row">
//             <label>Phone Number:</label>
//             <span>{userDetails.phoneNumber}</span>
//           </div>
//           <div className="my-profile-detail-row">
//             <label>Role:</label>
//             <span>{userDetails.role}</span>
//           </div>
//           <div className="my-profile-detail-row">
//             <label>Active status:</label>
//             <span>{userDetails.status}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MyProfile;















import React, { useEffect, useState } from 'react';
import './MyProfile.css';

function MyProfile({ userId, onClose }) {
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    role: '',
    status: '',
  });

  useEffect(() => {
    // Fetch user details when the component mounts
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`/user-details`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user_id: userId }),
          credentials: 'include', // Ensure cookies are sent with the request
        });
        if (response.ok) {
          const data = await response.json();
          setUserDetails(data);
        } else {
          const errorData = await response.json();
          console.error('Failed to fetch user details:', errorData.message);
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    const loadUserDetailsFromLocalStorage = () => {
      const storedUserDetails = JSON.parse(localStorage.getItem('userData'));
      if (storedUserDetails) {
        setUserDetails({
          firstName: storedUserDetails[1] || '',
          lastName: storedUserDetails[2] || '',
          email: storedUserDetails[3] || '',
          phoneNumber: storedUserDetails[4] || '',
          role: storedUserDetails[6] || '',
          status: storedUserDetails[5] || '',
        });
      } else {
        fetchUserDetails();
      }
    };

    loadUserDetailsFromLocalStorage();
  }, [userId]);

  return (
    <div className="my-profile-overlay">
      <div className="my-profile-content">
        <div className='myprofile-header'>
          <div>My Profile</div>
          <button className="my-profile-close-button" onClick={onClose}>×</button>
        </div>
        <hr />
        <div className="my-profile-details">
          <div className="my-profile-detail-row">
            <label>First Name:</label>
            <span>{userDetails.firstName}</span>
          </div>
          <div className="my-profile-detail-row">
            <label>Last Name:</label>
            <span>{userDetails.lastName}</span>
          </div>
          <div className="my-profile-detail-row">
            <label>Email ID:</label>
            <span>{userDetails.email}</span>
          </div>
          <div className="my-profile-detail-row">
            <label>Phone Number:</label>
            <span>{userDetails.phoneNumber}</span>
          </div>
          <div className="my-profile-detail-row">
            <label>Role:</label>
            <span>{userDetails.role}</span>
          </div>
          <div className="my-profile-detail-row">
            <label>Active status:</label>
            <span>{userDetails.status}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
