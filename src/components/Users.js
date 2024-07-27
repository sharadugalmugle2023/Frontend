
// import React, { useState, useEffect, useCallback } from 'react';
// import './Users.css';
// import { FaEdit, FaTrash, FaSearch } from 'react-icons/fa';
// import AddNewUser from './AddNewUser';
// import EditUser from './EditUser';
// import DeleteUser from './DeleteUser';
// import Spinner from './Spinner'; // Import Spinner

// const roles = {
//   SUPER_ADMIN: 'SuperAdmin',
//   ADMIN: 'Admin',
//   WRITE: 'Write',
//   READ: 'Read',
// };

// function Users() {
//   const [users, setUsers] = useState([]);
//   const [allUsers, setAllUsers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showAddNewUser, setShowAddNewUser] = useState(false);
//   const [showEditUser, setShowEditUser] = useState(false);
//   const [showDeleteUser, setShowDeleteUser] = useState(false);
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(false); // State for loading
//   const [userRole, setUserRole] = useState(null);

//   useEffect(() => {
//     fetchAllUsers();
//     const userData = JSON.parse(localStorage.getItem('userData'));
//     if (userData) {
//       setUserRole(userData.role);
//     }
//   }, []);

//   const fetchAllUsers = async () => {
//     setLoading(true); // Start loading
//     try {
//       const response = await fetch(`/list_users`);
//       const data = await response.json();
//       if (data.status === 'SUCCESS') {
//         setAllUsers(data.data);
//         setUsers(data.data);
//       } else {
//         console.error('Failed to fetch users:', data.data);
//       }
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   const fetchFilteredUsers = async (term) => {
//     setLoading(true); // Start loading
//     try {
//       const response = await fetch(`/filter_user?search=${term}`);
//       const data = await response.json();
//       if (data.status === 'SUCCESS') {
//         setUsers(data.data);
//       } else {
//         console.error('Failed to fetch users:', data.data);
//       }
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   const debouncedFetchFilteredUsers = useCallback(debounce(fetchFilteredUsers, 300), []);

//   const handleSearchChange = (e) => {
//     const { value } = e.target;
//     setSearchTerm(value);
//     debouncedFetchFilteredUsers(value);
//   };

//   const handleEditUser = (user) => {
//     const userObject = {
//       user_id: user[0],
//       firstName: user[1],
//       lastName: user[2],
//       email: user[3],
//       phoneNumber: user[4],
//       role: user[5],
//       status: user[6],
//     };
//     setCurrentUser(userObject);
//     setShowEditUser(true);
//   };

//   const handleDeleteUser = (user) => {
//     const userObject = {
//       user_id: user[0],
//       firstName: user[1],
//       lastName: user[2],
//       email: user[3],
//       phoneNumber: user[4],
//       role: user[5],
//       status: user[6],
//     };
//     setCurrentUser(userObject);
//     setShowDeleteUser(true);
//   };

//   const handleAddUser = (newUser) => {
//     setUsers([...users, newUser]);
//     setAllUsers([...allUsers, newUser]);
//   };

//   const handleUpdateUser = (updatedUser) => {
//     const updatedUsers = users.map((user) =>
//       user[0] === updatedUser.user_id ? [updatedUser.user_id, updatedUser.firstName, updatedUser.lastName, updatedUser.email, updatedUser.phoneNumber, updatedUser.role, updatedUser.status] : user
//     );
//     const updatedAllUsers = allUsers.map((user) =>
//       user[0] === updatedUser.user_id ? [updatedUser.user_id, updatedUser.firstName, updatedUser.lastName, updatedUser.email, updatedUser.phoneNumber, updatedUser.role, updatedUser.status] : user
//     );
//     setUsers(updatedUsers);
//     setAllUsers(updatedAllUsers);
//   };

//   const handleConfirmDelete = (deletedUser) => {
//     const filteredUsers = users.filter(user => user[0] !== deletedUser.user_id);
//     const filteredAllUsers = allUsers.filter(user => user[0] !== deletedUser.user_id);
//     setUsers(filteredUsers);
//     setAllUsers(filteredAllUsers);
//   };

//   return (
//     <div className="users">
//       <div className="users-heading">
//         <div className='users-page-header'>Users</div>
//         <div className="users-search-add">
//           <div className="users-search-wrapper">
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={handleSearchChange}
//               placeholder="Search By Username / Email / Role"
//               className="users-search-input"
//             />
//             <FaSearch className="users-search-icon" />
//           </div>
//           {(userRole === roles.SUPER_ADMIN || userRole === roles.ADMIN) && (
//             <button className="users__add-new-button" onClick={() => setShowAddNewUser(true)}>+ Add New</button>
//           )}
//         </div>
//       </div>
//       <table className="users__content-table">
//         <thead>
//           <tr>
//             <th>Username</th>
//             <th>Email</th>
//             <th>Role</th>
//             <th>Status</th>
//             {userRole !== roles.READ && <th>Action</th>}
//           </tr>
//         </thead>
//         {loading ? (
//           <div className="loader">
//             <Spinner /> 
//           </div>
//         ) : (
//           <tbody>
//             {users.length > 0 ? (
//               users.map((user, index) => (
//                 <tr key={index}>
//                   <td>{user[1]} {user[2]}</td>
//                   <td className="email-cell">
//                     <div className="email-tooltip">
//                       {user[3].length > 30 ? `${user[3].substring(0, 30)}...` : user[3]}
//                       <span className="email-tooltip-text">{user[3]}</span>
//                     </div>
//                     <input type="text" value={user[3]} readOnly className="full-email-input" />
//                   </td>
//                   <td>{user[5]}</td>
//                   <td className={user[6] === 'Active' ? 'active-status' : ''}>{user[6]}</td>
//                   {userRole !== roles.READ && (
//                     <td>
//                       {(userRole === roles.SUPER_ADMIN || userRole === roles.ADMIN) && (
//                         <button className="users__edit-button" onClick={() => handleEditUser(user)}><FaEdit /> Edit</button>
//                       )}
//                       {userRole === roles.SUPER_ADMIN && (
//                         <button className="users__delete-button" onClick={() => handleDeleteUser(user)}><FaTrash /> Delete</button>
//                       )}
//                     </td>
//                   )}
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={userRole !== roles.READ ? 5 : 4}>No users found</td>
//               </tr>
//             )}
//           </tbody>
//         )}
//       </table>
//       {showAddNewUser && (
//         <AddNewUser
//           onClose={() => setShowAddNewUser(false)}
//           onAddUser={handleAddUser}
//         />
//       )}
//       {showEditUser && (
//         <EditUser
//           onClose={() => setShowEditUser(false)}
//           user={currentUser}
//           onEditUser={handleUpdateUser}
//         />
//       )}
//       {showDeleteUser && (
//         <DeleteUser
//           onClose={() => setShowDeleteUser(false)}
//           user={currentUser}
//           onDelete={handleConfirmDelete}
//         />
//       )}
//     </div>
//   );
// }

// function debounce(func, wait) {
//   let timeout;
//   return function (...args) {
//     const later = () => {
//       clearTimeout(timeout);
//       func(...args);
//     };
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//   };
// }

// export default Users;




















// //FINEEEEEEEEEEEEEEEEEEE

// import React, { useState, useEffect, useCallback } from 'react';
// import './Users.css';
// import { FaEdit, FaTrash, FaSearch } from 'react-icons/fa';
// import AddNewUser from './AddNewUser';
// import EditUser from './EditUser';
// import DeleteUser from './DeleteUser';
// import Spinner from './Spinner'; // Import Spinner

// const roles = {
//   SUPER_ADMIN: 'SuperAdmin',
//   ADMIN: 'Admin',
//   WRITE: 'Write',
//   READ: 'Read',
// };

// function Users() {
//   const [users, setUsers] = useState([]);
//   const [allUsers, setAllUsers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showAddNewUser, setShowAddNewUser] = useState(false);
//   const [showEditUser, setShowEditUser] = useState(false);
//   const [showDeleteUser, setShowDeleteUser] = useState(false);
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(false); // State for loading
//   const [userRole, setUserRole] = useState(null);

//   useEffect(() => {
//     fetchAllUsers();
//     const userData = JSON.parse(localStorage.getItem('userData'));
//     if (userData) {
//       setUserRole(userData[6]);
//     }
//   }, []);

//   const fetchAllUsers = async () => {
//     setLoading(true); // Start loading
//     try {
//       const response = await fetch(`/list_users`);
//       const data = await response.json();
//       if (data.status === 'SUCCESS') {
//         setAllUsers(data.data);
//         setUsers(data.data);
//       } else {
//         console.error('Failed to fetch users:', data.data);
//       }
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   const fetchFilteredUsers = async (term) => {
//     setLoading(true); // Start loading
//     try {
//       const response = await fetch(`/filter_user?search=${term}`);
//       const data = await response.json();
//       if (data.status === 'SUCCESS') {
//         setUsers(data.data);
//       } else {
//         console.error('Failed to fetch users:', data.data);
//       }
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };



//   const debouncedFetchFilteredUsers = useCallback(debounce(fetchFilteredUsers, 300), []);

//   const handleSearchChange = (e) => {
//     const { value } = e.target;
//     setSearchTerm(value);
//     debouncedFetchFilteredUsers(value);
//   };

  // const handleEditUser = (user) => {
  //   const userObject = {
  //     user_id: user[0],
  //     firstName: user[1],
  //     lastName: user[2],
  //     email: user[3],
  //     phoneNumber: user[4],
  //     role: user[5],
  //     status: user[6],
  //   };
  //   setCurrentUser(userObject);
  //   setShowEditUser(true);
  // };

//   const handleDeleteUser = (user) => {
//     const userObject = {
//       user_id: user[0],
//       firstName: user[1],
//       lastName: user[2],
//       email: user[3],
//       phoneNumber: user[4],
//       role: user[5],
//       status: user[6],
//     };
//     setCurrentUser(userObject);
//     setShowDeleteUser(true);
//   };

//   const handleAddUser = (newUser) => {
//     setUsers([...users, newUser]);
//     setAllUsers([...allUsers, newUser]);
//   };

//   const handleUpdateUser = (updatedUser) => {
//     const updatedUsers = users.map((user) =>
//       user[0] === updatedUser.user_id ? [updatedUser.user_id, updatedUser.firstName, updatedUser.lastName, updatedUser.email, updatedUser.phoneNumber, updatedUser.role, updatedUser.status] : user
//     );
//     const updatedAllUsers = allUsers.map((user) =>
//       user[0] === updatedUser.user_id ? [updatedUser.user_id, updatedUser.firstName, updatedUser.lastName, updatedUser.email, updatedUser.phoneNumber, updatedUser.role, updatedUser.status] : user
//     );
//     setUsers(updatedUsers);
//     setAllUsers(updatedAllUsers);
//   };

//   const handleConfirmDelete = (deletedUser) => {
//     const filteredUsers = users.filter(user => user[0] !== deletedUser.user_id);
//     const filteredAllUsers = allUsers.filter(user => user[0] !== deletedUser.user_id);
//     setUsers(filteredUsers);
//     setAllUsers(filteredAllUsers);
//   };

//   return (
//     <div className="users">
//       <div className="users-heading">
//         <div className='users-page-header'>Users</div>
//         <div className="users-search-add">
//           <div className="users-search-wrapper">
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={handleSearchChange}
//               placeholder="Search By Username / Email / Role"
//               className="users-search-input"
//             />
//             <FaSearch className="users-search-icon" />
//           </div>
//           {(userRole === roles.SUPER_ADMIN || userRole === roles.ADMIN) && (
//             <button className="users__add-new-button" onClick={() => setShowAddNewUser(true)}>+ Add New</button>
//           )}
//         </div>
//       </div>
//       <table className="users__content-table">
//         <thead>
//           <tr>
//             <th>Username</th>
//             <th>Email</th>
//             <th>Role</th>
//             <th>Status</th>
//             {(userRole === roles.SUPER_ADMIN || userRole === roles.ADMIN) && <th>Action</th>}
//           </tr>
//         </thead>
//         {loading ? (
//           <div className="loader">
//             <Spinner />
//           </div>
//         ) : (
//           <tbody>
//             {users.length > 0 ? (
//               users.map((user, index) => (
//                 <tr key={index}>
//                   <td>{user[1]} {user[2]}</td>
//                   <td className="email-cell">
//                     <div className="email-tooltip">
//                       {user[3].length > 30 ? `${user[3].substring(0, 30)}...` : user[3]}
//                       <span className="email-tooltip-text">{user[3]}</span>
//                     </div>
//                     <input type="text" value={user[3]} readOnly className="full-email-input" />
//                   </td>
//                   <td>{user[5]}</td>
//                   <td className={user[6] === 'Active' ? 'active-status' : ''}>{user[6]}</td>
//                   {(userRole === roles.SUPER_ADMIN || userRole === roles.ADMIN) && (
//                     <td>
//                       <button className="users__edit-button" onClick={() => handleEditUser(user)}><FaEdit /> Edit</button>
//                       {userRole === roles.SUPER_ADMIN && (
//                         <button className="users__delete-button" onClick={() => handleDeleteUser(user)}><FaTrash /> Delete</button>
//                       )}
//                     </td>
//                   )}
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={(userRole === roles.SUPER_ADMIN || userRole === roles.ADMIN) ? "5" : "4"}>No users found</td>
//               </tr>
//             )}
//           </tbody>
//         )}
//       </table>
//       {showAddNewUser && (
//         <AddNewUser
//           onClose={() => setShowAddNewUser(false)}
//           onAddUser={handleAddUser}
//         />
//       )}
//       {showEditUser && (
//         <EditUser
//           onClose={() => setShowEditUser(false)}
//           user={currentUser}
//           onEditUser={handleUpdateUser}
//         />
//       )}
//       {showDeleteUser && (
//         <DeleteUser
//           onClose={() => setShowDeleteUser(false)}
//           user={currentUser}
//           onDelete={handleConfirmDelete}
//         />
//       )}
//     </div>
//   );
// }

// function debounce(func, wait) {
//   let timeout;
//   return function (...args) {
//     const later = () => {
//       clearTimeout(timeout);
//       func(...args);
//     };
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//   };
// }

// export default Users;


















// import React, { useState, useEffect, useCallback } from 'react';
// import './Users.css';
// import { FaEdit, FaTrash, FaSearch } from 'react-icons/fa';
// import AddNewUser from './AddNewUser';
// import EditUser from './EditUser';
// import DeleteUser from './DeleteUser';
// import Spinner from './Spinner'; // Import Spinner

// const roles = {
//   SUPER_ADMIN: 'SuperAdmin',
//   ADMIN: 'Admin',
//   WRITE: 'Write',
//   READ: 'Read',
// };

// function Users() {
//   const [users, setUsers] = useState([]);
//   const [allUsers, setAllUsers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showAddNewUser, setShowAddNewUser] = useState(false);
//   const [showEditUser, setShowEditUser] = useState(false);
//   const [showDeleteUser, setShowDeleteUser] = useState(false);
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(false); // State for loading
//   const [userRole, setUserRole] = useState(null);

//   useEffect(() => {
//     fetchAllUsers();
//     const userData = JSON.parse(localStorage.getItem('userData'));
//     if (userData) {
//       setUserRole(userData[6]);
//     }
//   }, []);

//   const fetchAllUsers = async () => {
//     setLoading(true); // Start loading
//     try {
//       const response = await fetch(`/list_users`);
//       const data = await response.json();
//       if (data.body.status === 'SUCCESS') {
//         setAllUsers(data.body.data);
//         setUsers(data.body.data);
//       } else {
//         console.error('Failed to fetch users:', data.body.data);
//       }
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   const fetchFilteredUsers = async (term) => {
//     setLoading(true); // Start loading
//     try {
//       const response = await fetch(`/filter_user?search=${term}`);
//       const data = await response.json();
//       if (data.body.status === 'SUCCESS') {
//         setUsers(data.body.data);
//       } else {
//         console.error('Failed to fetch users:', data.body.data);
//       }
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   const debouncedFetchFilteredUsers = useCallback(debounce(fetchFilteredUsers, 300), []);

//   const handleSearchChange = (e) => {
//     const { value } = e.target;
//     setSearchTerm(value);
//     debouncedFetchFilteredUsers(value);
//   };

//   const handleEditUser = (user) => {
//     setCurrentUser(user);
//     setShowEditUser(true);
//   };

//   const handleDeleteUser = (user) => {
//     setCurrentUser(user);
//     setShowDeleteUser(true);
//   };

//   const handleAddUser = (newUser) => {
//     setUsers([...users, newUser]);
//     setAllUsers([...allUsers, newUser]);
//   };

//   const handleUpdateUser = (updatedUser) => {
//     const updatedUsers = users.map((user) =>
//       user.userID === updatedUser.userID ? updatedUser : user
//     );
//     const updatedAllUsers = allUsers.map((user) =>
//       user.userID === updatedUser.userID ? updatedUser : user
//     );
//     setUsers(updatedUsers);
//     setAllUsers(updatedAllUsers);
//   };

//   const handleConfirmDelete = (deletedUser) => {
//     const filteredUsers = users.filter(user => user.userID !== deletedUser.userID);
//     const filteredAllUsers = allUsers.filter(user => user.userID !== deletedUser.userID);
//     setUsers(filteredUsers);
//     setAllUsers(filteredAllUsers);
//   };

//   return (
//     <div className="users">
//       <div className="users-heading">
//         <div className='users-page-header'>Users</div>
//         <div className="users-search-add">
//           <div className="users-search-wrapper">
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={handleSearchChange}
//               placeholder="Search By Username / Email / Role"
//               className="users-search-input"
//             />
//             <FaSearch className="users-search-icon" />
//           </div>
//           {(userRole === roles.SUPER_ADMIN || userRole === roles.ADMIN) && (
//             <button className="users__add-new-button" onClick={() => setShowAddNewUser(true)}>+ Add New</button>
//           )}
//         </div>
//       </div>
//       <table className="users__content-table">
//         <thead>
//           <tr>
//             <th>Username</th>
//             <th>Email</th>
//             <th>Role</th>
//             <th>Status</th>
//             {(userRole === roles.SUPER_ADMIN || userRole === roles.ADMIN) && <th>Action</th>}
//           </tr>
//         </thead>
//         {loading ? (
//           <div className="loader">
//             <Spinner />
//           </div>
//         ) : (
//           <tbody>
//             {users.length > 0 ? (
//               users.map((user, index) => (
//                 <tr key={index}>
//                   <td>{user.firstName} {user.lastName}</td>
//                   <td className="email-cell">
//                     <div className="email-tooltip">
//                       {user.email.length > 30 ? `${user.email.substring(0, 30)}...` : user.email}
//                       <span className="email-tooltip-text">{user.email}</span>
//                     </div>
//                     <input type="text" value={user.email} readOnly className="full-email-input" />
//                   </td>
//                   <td>{user.role}</td>
//                   <td className={user.status === 'Active' ? 'active-status' : ''}>{user.status}</td>
//                   {(userRole === roles.SUPER_ADMIN || userRole === roles.ADMIN) && (
//                     <td>
//                       <button className="users__edit-button" onClick={() => handleEditUser(user)}><FaEdit /> Edit</button>
//                       {userRole === roles.SUPER_ADMIN && (
//                         <button className="users__delete-button" onClick={() => handleDeleteUser(user)}><FaTrash /> Delete</button>
//                       )}
//                     </td>
//                   )}
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={(userRole === roles.SUPER_ADMIN || userRole === roles.ADMIN) ? "5" : "4"}>No users found</td>
//               </tr>
//             )}
//           </tbody>
//         )}
//       </table>
//       {showAddNewUser && (
//         <AddNewUser
//           onClose={() => setShowAddNewUser(false)}
//           onAddUser={handleAddUser}
//         />
//       )}
//       {showEditUser && (
//         <EditUser
//           onClose={() => setShowEditUser(false)}
//           user={currentUser}
//           onEditUser={handleUpdateUser}
//         />
//       )}
//       {showDeleteUser && (
//         <DeleteUser
//           onClose={() => setShowDeleteUser(false)}
//           user={currentUser}
//           onDelete={handleConfirmDelete}
//         />
//       )}
//     </div>
//   );
// }

// function debounce(func, wait) {
//   let timeout;
//   return function (...args) {
//     const later = () => {
//       clearTimeout(timeout);
//       func(...args);
//     };
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//   };
// }

// export default Users;



















// import React, { useState, useEffect, useCallback } from 'react';
// import './Users.css';
// import { FaEdit, FaTrash, FaSearch } from 'react-icons/fa';
// import AddNewUser from './AddNewUser';
// import EditUser from './EditUser';
// import DeleteUser from './DeleteUser';
// import Spinner from './Spinner'; // Import Spinner

// const roles = {
//   SUPER_ADMIN: 'SuperAdmin',
//   ADMIN: 'Admin',
//   WRITE: 'Write',
//   READ: 'Read',
// };

// function Users() {
//   const [users, setUsers] = useState([]);
//   const [allUsers, setAllUsers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showAddNewUser, setShowAddNewUser] = useState(false);
//   const [showEditUser, setShowEditUser] = useState(false);
//   const [showDeleteUser, setShowDeleteUser] = useState(false);
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(false); // State for loading
//   const [userRole, setUserRole] = useState(null);

//   useEffect(() => {
//     fetchAllUsers();
//     const userData = JSON.parse(localStorage.getItem('userData'));
//     if (userData) {
//       setUserRole(userData[6]);
//     }
//   }, []);

//   const fetchAllUsers = async () => {
//     setLoading(true); // Start loading
//     try {
//       const response = await fetch(`/list_users`);
//       const data = await response.json();
//       if (data.body.status === 'SUCCESS') {
//         setAllUsers(data.body.data);
//         setUsers(data.body.data);
//       } else {
//         console.error('Failed to fetch users:', data.body.data);
//       }
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   const fetchFilteredUsers = async (term) => {
//     setLoading(true); // Start loading
//     try {
//       const response = await fetch(`/filter_user?search=${term}`);
//       const data = await response.json();
//       if (data.body.status === 'SUCCESS') {
//         setUsers(data.body.data);
//       } else {
//         console.error('Failed to fetch users:', data.body.data);
//       }
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   const debouncedFetchFilteredUsers = useCallback(debounce(fetchFilteredUsers, 300), []);

//   const handleSearchChange = (e) => {
//     const { value } = e.target;
//     setSearchTerm(value);
//     debouncedFetchFilteredUsers(value);
//   };

//   const handleEditUser = (user) => {
//     setCurrentUser(user);
//     setShowEditUser(true);
//   };

//   const handleDeleteUser = (user) => {
//     setCurrentUser(user);
//     setShowDeleteUser(true);
//   };

//   const handleAddUser = (newUser) => {
//     fetchAllUsers(); // Re-fetch user list after adding a new user
//   };

//   const handleUpdateUser = (updatedUser) => {
//     const updatedUsers = users.map((user) =>
//       user.userID === updatedUser.userID ? updatedUser : user
//     );
//     const updatedAllUsers = allUsers.map((user) =>
//       user.userID === updatedUser.userID ? updatedUser : user
//     );
//     setUsers(updatedUsers);
//     setAllUsers(updatedAllUsers);
//   };

//   const handleConfirmDelete = (deletedUser) => {
//     const filteredUsers = users.filter(user => user.userID !== deletedUser.userID);
//     const filteredAllUsers = allUsers.filter(user => user.userID !== deletedUser.userID);
//     setUsers(filteredUsers);
//     setAllUsers(filteredAllUsers);
//   };

//   return (
//     <div className="users">
//       <div className="users-heading">
//         <div className='users-page-header'>Users</div>
//         <div className="users-search-add">
//           <div className="users-search-wrapper">
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={handleSearchChange}
//               placeholder="Search By Username / Email / Role"
//               className="users-search-input"
//             />
//             <FaSearch className="users-search-icon" />
//           </div>
//           {(userRole === roles.SUPER_ADMIN || userRole === roles.ADMIN) && (
//             <button className="users__add-new-button" onClick={() => setShowAddNewUser(true)}>+ Add New</button>
//           )}
//         </div>
//       </div>
//       <table className="users__content-table">
//         <thead>
//           <tr>
//             <th>Username</th>
//             <th>Email</th>
//             <th>Role</th>
//             <th>Status</th>
//             {(userRole === roles.SUPER_ADMIN || userRole === roles.ADMIN) && <th>Action</th>}
//           </tr>
//         </thead>
//         {loading ? (
//           <div className="loader">
//             <Spinner />
//           </div>
//         ) : (
//           <tbody>
//             {users.length > 0 ? (
//               users.map((user, index) => (
//                 <tr key={index}>
//                   <td>{user.firstName} {user.lastName}</td>
//                   <td className="email-cell">
//                     <div className="email-tooltip">
//                       {user.email.length > 30 ? `${user.email.substring(0, 30)}...` : user.email}
//                       <span className="email-tooltip-text">{user.email}</span>
//                     </div>
//                     <input type="text" value={user.email} readOnly className="full-email-input" />
//                   </td>
//                   <td>{user.role}</td>
//                   <td className={user.status === 'Active' ? 'active-status' : ''}>{user.status}</td>
//                   {(userRole === roles.SUPER_ADMIN || userRole === roles.ADMIN) && (
//                     <td>
//                       <button className="users__edit-button" onClick={() => handleEditUser(user)}><FaEdit /> Edit</button>
//                       {userRole === roles.SUPER_ADMIN && (
//                         <button className="users__delete-button" onClick={() => handleDeleteUser(user)}><FaTrash /> Delete</button>
//                       )}
//                     </td>
//                   )}
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={(userRole === roles.SUPER_ADMIN || userRole === roles.ADMIN) ? "5" : "4"}>No users found</td>
//               </tr>
//             )}
//           </tbody>
//         )}
//       </table>
//       {showAddNewUser && (
//         <AddNewUser
//           onClose={() => setShowAddNewUser(false)}
//           onAddUser={handleAddUser}
//         />
//       )}
//       {showEditUser && (
//         <EditUser
//           onClose={() => setShowEditUser(false)}
//           user={currentUser}
//           onEditUser={handleUpdateUser}
//         />
//       )}
//       {showDeleteUser && (
//         <DeleteUser
//           onClose={() => setShowDeleteUser(false)}
//           user={currentUser}
//           onDelete={handleConfirmDelete}
//         />
//       )}
//     </div>
//   );
// }

// function debounce(func, wait) {
//   let timeout;
//   return function (...args) {
//     const later = () => {
//       clearTimeout(timeout);
//       func(...args);
//     };
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//   };
// }

// export default Users;

















import React, { useState, useEffect, useCallback } from 'react';
import './Users.css';
import { FaEdit, FaTrash, FaSearch } from 'react-icons/fa';
import AddNewUser from './AddNewUser';
import EditUser from './EditUser';
import DeleteUser from './DeleteUser';
import Spinner from './Spinner'; // Import Spinner

const roles = {
  SUPER_ADMIN: 'SuperAdmin',
  ADMIN: 'Admin',
  WRITE: 'Write',
  READ: 'Read',
};

function Users() {
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddNewUser, setShowAddNewUser] = useState(false);
  const [showEditUser, setShowEditUser] = useState(false);
  const [showDeleteUser, setShowDeleteUser] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false); // State for loading
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    fetchAllUsers();
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
      setUserRole(userData[6]);
    }
  }, []);

  const fetchAllUsers = async () => {
    setLoading(true); // Start loading
    try {
      const response = await fetch(`/list_users`);
      const data = await response.json();
      if (data.body.status === 'SUCCESS') {
        setAllUsers(data.body.data);
        setUsers(data.body.data);
      } else {
        console.error('Failed to fetch users:', data.body.data);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const fetchFilteredUsers = async (term) => {
    setLoading(true); // Start loading
    try {
      const response = await fetch(`/filter_user?search=${term}`);
      const data = await response.json();
      if (data.body.status === 'SUCCESS') {
        setUsers(data.body.data);
      } else {
        console.error('Failed to fetch users:', data.body.data);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const debouncedFetchFilteredUsers = useCallback(debounce(fetchFilteredUsers, 300), []);

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    debouncedFetchFilteredUsers(value);
  };

  const handleEditUser = (user) => {
    setCurrentUser(user);
    setShowEditUser(true);
  };

  const handleDeleteUser = (user) => {
    setCurrentUser(user);
    setShowDeleteUser(true);
  };

  const handleAddUser = (newUser) => {
    fetchAllUsers(); // Re-fetch user list after adding a new user
  };

  const handleUpdateUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.userID === updatedUser.userID ? updatedUser : user
    );
    const updatedAllUsers = allUsers.map((user) =>
      user.userID === updatedUser.userID ? updatedUser : user
    );
    setUsers(updatedUsers);
    setAllUsers(updatedAllUsers);
  };

  const handleConfirmDelete = (deletedUser) => {
    const filteredUsers = users.filter(user => user.userID !== deletedUser.userID);
    const filteredAllUsers = allUsers.filter(user => user.userID !== deletedUser.userID);
    setUsers(filteredUsers);
    setAllUsers(filteredAllUsers);
  };

  return (
    <div className="users">
      <div className="users-heading">
        <div className='users-page-header'>Users</div>
        <div className="users-search-add">
          <div className="users-search-wrapper">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search By Username / Email / Role"
              className="users-search-input"
            />
            <FaSearch className="users-search-icon" />
          </div>
          {(userRole === roles.SUPER_ADMIN || userRole === roles.ADMIN) && (
            <button className="users__add-new-button" onClick={() => setShowAddNewUser(true)}>+ Add New</button>
          )}
        </div>
      </div>
      <table className="users__content-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            {(userRole === roles.SUPER_ADMIN || userRole === roles.ADMIN) && <th>Action</th>}
          </tr>
        </thead>
        {loading ? (
          <div className="loader">
            <Spinner />
          </div>
        ) : (
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr key={index}>
                  <td>{user.firstName} {user.lastName}</td>
                  <td className="email-cell">
                    <div className="email-tooltip">
                      {user.email.length > 30 ? `${user.email.substring(0, 30)}...` : user.email}
                      <span className="email-tooltip-text">{user.email}</span>
                    </div>
                    <input type="text" value={user.email} readOnly className="full-email-input" />
                  </td>
                  <td>{user.role}</td>
                  <td className={user.status === 'Active' ? 'active-status' : ''}>{user.status}</td>
                  {(userRole === roles.SUPER_ADMIN || userRole === roles.ADMIN) && (
                    <td>
                      <button className="users__edit-button" onClick={() => handleEditUser(user)}><FaEdit /> Edit</button>
                      {userRole === roles.SUPER_ADMIN && (
                        <button className="users__delete-button" onClick={() => handleDeleteUser(user)}><FaTrash /> Delete</button>
                      )}
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={(userRole === roles.SUPER_ADMIN || userRole === roles.ADMIN) ? "5" : "4"}>No users found</td>
              </tr>
            )}
          </tbody>
        )}
      </table>
      {showAddNewUser && (
        <AddNewUser
          onClose={() => setShowAddNewUser(false)}
          onAddUser={handleAddUser}
        />
      )}
      {showEditUser && (
        <EditUser
          onClose={() => setShowEditUser(false)}
          user={currentUser}
          onEditUser={handleUpdateUser}
          fetching = {fetchAllUsers}
        />
      )}
      {showDeleteUser && (
        <DeleteUser
          onClose={() => setShowDeleteUser(false)}
          user={currentUser}
          onDelete={handleConfirmDelete}
        />
      )}
    </div>
  );
}

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export default Users;
