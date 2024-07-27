


// //FFFFFFFFFFFFFFFFFFFFFFIIIIIIIIIIIIIIIIIIIIIIIINNNNNNNNNNNNNNNNNNNNNEEEEEEEEEEEEE




// import React, { useState, useEffect, useCallback } from 'react';
// import './Rules.css';
// import { FaEdit, FaTrash, FaSearch, FaTimesCircle } from 'react-icons/fa';
// import { IoMdCheckmarkCircleOutline, IoIosHourglass } from 'react-icons/io';
// import AddNewRule from './AddNewRule';
// import EditRule from './EditRule';
// import DeleteRule from './DeleteRule';
// import Spinner from './Spinner'; // Import Spinner

// const roles = {
//   SUPERADMIN: 'SuperAdmin',
//   ADMIN: 'Admin',
//   WRITE: 'Write',
//   READ: 'Read',
// };

// function Rules() {
//   const [rules, setRules] = useState([]);
//   const [allRules, setAllRules] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showAddNewRule, setShowAddNewRule] = useState(false);
//   const [showEditRule, setShowEditRule] = useState(false);
//   const [showDeleteRule, setShowDeleteRule] = useState(false);
//   const [currentRule, setCurrentRule] = useState(null);
//   const [loading, setLoading] = useState(false); // State for loading
//   const [expandedRow, setExpandedRow] = useState(null); // State for expanded row
//   const [statusFilter, setStatusFilter] = useState(''); // State for dropdown
//   const [userRole, setUserRole] = useState(null);

//   useEffect(() => {
//     fetchRules();
//     // Assume user data is stored in localStorage
//     const userData = JSON.parse(localStorage.getItem('userData'));
//     if (userData) {
//       setUserRole(userData[6]);
//     }
//   }, []);

//   const fetchRules = async (status = '') => {
//     setLoading(true); // Start loading
//     try {
//       const response = await fetch(`/list_rules?status=${status}`);
//       const data = await response.json();
//       if (data.status === 'SUCCESS') {
//         setAllRules(data.data);
//         setRules(data.data);
//       } else {
//         console.error('Failed to fetch rules:', data.data);
//       }
//     } catch (error) {
//       console.error('Error fetching rules:', error);
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   const fetchFilteredRules = async (term) => {
//     setLoading(true); // Start loading
//     try {
//       const response = await fetch(`/filter_rules?search=${term}`);
//       const data = await response.json();
//       if (data.status === 'SUCCESS') {
//         setRules(data.data);
//       } else {
//         console.error('Failed to fetch rules:', data.data);
//       }
//     } catch (error) {
//       console.error('Error fetching rules:', error);
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   const debouncedFetchFilteredRules = useCallback(debounce(fetchFilteredRules, 300), []);

//   const handleSearchChange = (e) => {
//     const { value } = e.target;
//     setSearchTerm(value);
//     debouncedFetchFilteredRules(value);
//   };

//   const handleAddRule = async (newRule) => {
//     setLoading(true); // Start loading
//     try {
//       const response = await fetch(`/add_rule`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newRule)
//       });
//       const data = await response.json();
//       if (data.status === 'SUCCESS') {
//         alert('Rule added successfully!');
//         fetchRules(); // Refresh rules list
//       } else {
//         alert('Failed to add rule: ' + data.data);
//       }
//     } catch (error) {
//       console.error('Error adding rule:', error);
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   const handleEditRule = (rule) => {
//     setCurrentRule(rule);
//     setShowEditRule(true);
//   };

//   const handleDeleteRule = (rule) => {
//     setCurrentRule(rule);
//     setShowDeleteRule(true);
//   };

//   const confirmDeleteRule = async (rule) => {
//     setLoading(true); // Start loading
//     try {
//       const response = await fetch(`/delete_rule`, {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ rule_id: rule[0] })
//       });
//       const data = await response.json();
//       if (data.status === 'SUCCESS') {
//         alert('Rule deleted successfully!');
//         fetchRules(); // Refresh rules list
//       } else {
//         alert('Failed to delete rule: ' + data.data);
//       }
//     } catch (error) {
//       console.error('Error deleting rule:', error);
//       alert('Error deleting rule');
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   const handleRowClick = (rule) => {
//     if (expandedRow === rule[0]) {
//       setExpandedRow(null);
//     } else {
//       setExpandedRow(rule[0]);
//     }
//   };

//   const handleStatusFilterChange = (e) => {
//     const { value } = e.target;
//     setStatusFilter(value);
//     fetchRules(value);
//   };

//   const renderStatusIcon = (status) => {
//     switch (status) {
//       case 'approved':
//         return <IoMdCheckmarkCircleOutline className="status-icon approved" />;
//       case 'pending':
//         return <IoIosHourglass className="status-icon pending" />;
//       case 'declined':
//         return <FaTimesCircle className="status-icon declined" />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="rules">
//       <div className="rules-heading">
//         <div className="rules-header">
//           <div className='rule-page-header'>Rules</div>
//           <select
//             className="rules-status-dropdown"
//             value={statusFilter}
//             onChange={handleStatusFilterChange}
//           >
//             <option value="">All Rules</option>
//             <option value="approved">Approved Rules</option>
//             <option value="pending">Pending Rules</option>
//             <option value="declined">Declined Rules</option>
//           </select>
//         </div>
//         <div className="rules-search-add">
//           <div className="rules-search-wrapper">
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={handleSearchChange}
//               placeholder="Search By Rule Name / Media Type"
//               className="rules-search-input"
//             />
//             <FaSearch className="rules-search-icon" />
//           </div>
//           {(userRole === roles.SUPERADMIN || userRole === roles.ADMIN || userRole === roles.WRITE) && (
//             <button className="rules__add-new-button" onClick={() => setShowAddNewRule(true)}>+ Add New</button>
//           )}
//         </div>
//       </div>
//       <table className="rules__content-table">
//         <thead>
//           <tr>
//             <th>Rule Name</th>
//             <th>Media Type</th>
//             <th>Description</th>
//             <th>Created By</th>
//             <th>Rule Status</th>
//             {(userRole === roles.SUPERADMIN || userRole === roles.ADMIN || userRole === roles.WRITE) && <th>Action</th>}
//           </tr>
//         </thead>
//         {loading ? (
//           <div className="loader">
//             <Spinner />
//           </div>
//         ) : (
//           <tbody>
//             {rules.length > 0 ? (
//               rules.map((rule, index) => (
//                 <React.Fragment key={index}>
//                   <tr onClick={() => handleRowClick(rule)} className="rules__rule-row">
//                     <td>{rule[1]}</td>
//                     <td>{rule[2]}</td>
//                     <td>{rule[3]}</td>
//                     <td>{rule[6]}</td>
//                     <td>{renderStatusIcon(rule[7])} {rule[7]}</td>
//                     {(userRole === roles.SUPERADMIN || userRole === roles.ADMIN || userRole === roles.WRITE) && (
//                       <td className='edit-delete-status'>
//                         {(userRole === roles.SUPERADMIN || userRole === roles.ADMIN || userRole === roles.WRITE) && (
//                           <button className="rules__edit-button" onClick={(e) => { e.stopPropagation(); handleEditRule(rule); }}><FaEdit /></button>
//                         )}
//                         {(userRole === roles.SUPERADMIN) && (
//                           <button className="rules__delete-button" onClick={(e) => { e.stopPropagation(); handleDeleteRule(rule); }}><FaTrash /></button>
//                         )}
//                           {/* <button classNam  e='rule-status-button'><IoMdCheckmarkCircleOutline className='vali'/></button> */}
//                       </td>
//                     )}
//                   </tr>
//                 </React.Fragment>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={userRole === roles.SUPERADMIN || userRole === roles.ADMIN || userRole === roles.WRITE ? 6 : 5}>No rules found</td>
//               </tr>
//             )}
//           </tbody>
//         )}
//       </table>
//       {showAddNewRule && (
//         <AddNewRule 
//           onClose={() => setShowAddNewRule(false)}
//           onAddRule={handleAddRule} 
//         />
//       )}
//       {showEditRule && (
//         <EditRule
//           onClose={() => {
//             setShowEditRule(false);
//             fetchRules(); // Refresh the rules after edit
//           }}
//           rule={currentRule}
//         />
//       )}
//       {showDeleteRule && (
//         <DeleteRule
//           onClose={() => setShowDeleteRule(false)}
//           onDelete={() => confirmDeleteRule(currentRule)}
//           rule={currentRule}
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

// export default Rules;






























// import React, { useState, useEffect, useCallback } from 'react';
// import './Rules.css';
// import { FaEdit, FaTrash, FaSearch, FaTimesCircle } from 'react-icons/fa';
// import { IoMdCheckmarkCircleOutline, IoIosHourglass } from 'react-icons/io';
// import AddNewRule from './AddNewRule';
// import EditRule from './EditRule';
// import DeleteRule from './DeleteRule';
// import Spinner from './Spinner'; // Import Spinner

// const roles = {
//   SUPERADMIN: 'SuperAdmin',
//   ADMIN: 'Admin',
//   WRITE: 'Write',
//   READ: 'Read',
// };

// function Rules() {
//   const [rules, setRules] = useState([]);
//   const [allRules, setAllRules] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showAddNewRule, setShowAddNewRule] = useState(false);
//   const [showEditRule, setShowEditRule] = useState(false);
//   const [showDeleteRule, setShowDeleteRule] = useState(false);
//   const [currentRule, setCurrentRule] = useState(null);
//   const [loading, setLoading] = useState(false); // State for loading
//   const [expandedRow, setExpandedRow] = useState(null); // State for expanded row
//   const [statusFilter, setStatusFilter] = useState(''); // State for dropdown
//   const [userRole, setUserRole] = useState(null);

//   useEffect(() => {
//     fetchRules();
//     // Assume user data is stored in localStorage
//     const userData = JSON.parse(localStorage.getItem('userData'));
//     if (userData) {
//       setUserRole(userData[6]);
//     }
//   }, []);

//   const fetchRules = async (status = '') => {
//     setLoading(true); // Start loading
//     try {
//       const response = await fetch(`/list_rules?status=${status}`);
//       const data = await response.json();
//       if (data.status === 'SUCCESS') {
//         setAllRules(data.data);
//         setRules(data.data);
//       } else {
//         console.error('Failed to fetch rules:', data.data);
//       }
//     } catch (error) {
//       console.error('Error fetching rules:', error);
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   const fetchFilteredRules = async (term, status = '') => {
//     setLoading(true); // Start loading
//     try {
//       const response = await fetch(`/filter_rules?search=${term}&status=${status}`);
//       const data = await response.json();
//       if (data.status === 'SUCCESS') {
//         setRules(data.data);
//       } else {
//         console.error('Failed to fetch rules:', data.data);
//       }
//     } catch (error) {
//       console.error('Error fetching rules:', error);
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   const debouncedFetchFilteredRules = useCallback(debounce((term, status) => fetchFilteredRules(term, status), 300), []);

//   const handleSearchChange = (e) => {
//     const { value } = e.target;
//     setSearchTerm(value);
//     debouncedFetchFilteredRules(value, statusFilter);
//   };

//   const handleAddRule = async (newRule) => {
//     setLoading(true); // Start loading
//     try {
//       const response = await fetch(`/add_rule`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newRule)
//       });
//       const data = await response.json();
//       if (data.status === 'SUCCESS') {
//         alert('Rule added successfully!');
//         fetchRules(); // Refresh rules list
//       } else {
//         alert('Failed to add rule: ' + data.data);
//       }
//     } catch (error) {
//       console.error('Error adding rule:', error);
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   const handleEditRule = (rule) => {
//     setCurrentRule(rule);
//     setShowEditRule(true);
//   };

//   const handleDeleteRule = (rule) => {
//     setCurrentRule(rule);
//     setShowDeleteRule(true);
//   };

//   const confirmDeleteRule = async (rule) => {
//     setLoading(true); // Start loading
//     try {
//       const response = await fetch(`/delete_rule`, {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ rule_id: rule[0] })
//       });
//       const data = await response.json();
//       if (data.status === 'SUCCESS') {
//         alert('Rule deleted successfully!');
//         fetchRules(); // Refresh rules list
//       } else {
//         alert('Failed to delete rule: ' + data.data);
//       }
//     } catch (error) {
//       console.error('Error deleting rule:', error);
//       alert('Error deleting rule');
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   const handleRowClick = (rule) => {
//     if (expandedRow === rule[0]) {
//       setExpandedRow(null);
//     } else {
//       setExpandedRow(rule[0]);
//     }
//   };

//   const handleStatusFilterChange = (e) => {
//     const { value } = e.target;
//     setStatusFilter(value);
//     fetchRules(value);
//   };

//   const renderStatusIcon = (status) => {
//     switch (status) {
//       case 'approved':
//         return <IoMdCheckmarkCircleOutline className="status-icon approved" />;
//       case 'pending':
//         return <IoIosHourglass className="status-icon pending" />;
//       case 'declined':
//         return <FaTimesCircle className="status-icon declined" />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="rules">
//       <div className="rules-heading">
//         <div className="rules-header">
//           <div className='rule-page-header'>Rules</div>
//           <select
//             className="rules-status-dropdown"
//             value={statusFilter}
//             onChange={handleStatusFilterChange}
//           >
//             <option value="">All Rules</option>
//             <option value="approved">Approved Rules</option>
//             <option value="pending">Pending Rules</option>
//             <option value="declined">Declined Rules</option>
//           </select>
//         </div>
//         <div className="rules-search-add">
//           <div className="rules-search-wrapper">
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={handleSearchChange}
//               placeholder="Search By Rule Name / Media Type"
//               className="rules-search-input"
//             />
//             <FaSearch className="rules-search-icon" />
//           </div>
//           {(userRole === roles.SUPERADMIN || userRole === roles.ADMIN || userRole === roles.WRITE) && (
//             <button className="rules__add-new-button" onClick={() => setShowAddNewRule(true)}>+ Add New</button>
//           )}
//         </div>
//       </div>
//       <table className="rules__content-table">
//         <thead>
//           <tr>
//             <th>Rule Name</th>
//             <th>Media Type</th>
//             <th>Description</th>
//             <th>Created By</th>
//             <th>Rule Status</th>
//             {(userRole === roles.SUPERADMIN || userRole === roles.ADMIN || userRole === roles.WRITE) && <th>Action</th>}
//           </tr>
//         </thead>
//         {loading ? (
//           <div className="loader">
//             <Spinner />
//           </div>
//         ) : (
//           <tbody>
//             {rules.length > 0 ? (
//               rules.map((rule, index) => (
//                 <React.Fragment key={index}>
//                   <tr onClick={() => handleRowClick(rule)} className="rules__rule-row">
//                     <td>{rule[1]}</td>
//                     <td>{rule[2]}</td>
//                     <td>{rule[3]}</td>
//                     <td>{rule[6]}</td>
//                     <td>{renderStatusIcon(rule[7])} {rule[7]}</td>
//                     {(userRole === roles.SUPERADMIN || userRole === roles.ADMIN || userRole === roles.WRITE) && (
//                       <td className='edit-delete-status'>
//                         {(userRole === roles.SUPERADMIN || userRole === roles.ADMIN || userRole === roles.WRITE) && (
//                           <button className="rules__edit-button" onClick={(e) => { e.stopPropagation(); handleEditRule(rule); }}><FaEdit /></button>
//                         )}
//                         {(userRole === roles.SUPERADMIN) && (
//                           <button className="rules__delete-button" onClick={(e) => { e.stopPropagation(); handleDeleteRule(rule); }}><FaTrash /></button>
//                         )}
//                       </td>
//                     )}
//                   </tr>
//                 </React.Fragment>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={userRole === roles.SUPERADMIN || userRole === roles.ADMIN || userRole === roles.WRITE ? 6 : 5}>No rules found</td>
//               </tr>
//             )}
//           </tbody>
//         )}
//       </table>
//       {showAddNewRule && (
//         <AddNewRule 
//           onClose={() => setShowAddNewRule(false)}
//           onAddRule={handleAddRule} 
//         />
//       )}
//       {showEditRule && (
//         <EditRule
//           onClose={() => {
//             setShowEditRule(false);
//             fetchRules(); // Refresh the rules after edit
//           }}
//           rule={currentRule}
//         />
//       )}
//       {showDeleteRule && (
//         <DeleteRule
//           onClose={() => setShowDeleteRule(false)}
//           onDelete={() => confirmDeleteRule(currentRule)}
//           rule={currentRule}
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

// export default Rules;

































// import React, { useState, useEffect, useCallback } from 'react';
// import './Rules.css';
// import { FaEdit, FaTrash, FaSearch, FaTimesCircle } from 'react-icons/fa';
// import { IoMdCheckmarkCircleOutline, IoIosHourglass } from 'react-icons/io';
// import AddNewRule from './AddNewRule';
// import EditRule from './EditRule';
// import DeleteRule from './DeleteRule';
// import Spinner from './Spinner'; // Import Spinner

// const roles = {
//   SUPERADMIN: 'SuperAdmin',
//   ADMIN: 'Admin',
//   WRITE: 'Write',
//   READ: 'Read',
// };

// function Rules() {
//   const [rules, setRules] = useState([]);
//   const [allRules, setAllRules] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showAddNewRule, setShowAddNewRule] = useState(false);
//   const [showEditRule, setShowEditRule] = useState(false);
//   const [showDeleteRule, setShowDeleteRule] = useState(false);
//   const [currentRule, setCurrentRule] = useState(null);
//   const [loading, setLoading] = useState(false); // State for loading
//   const [expandedRow, setExpandedRow] = useState(null); // State for expanded row
//   const [statusFilter, setStatusFilter] = useState(''); // State for dropdown
//   const [userRole, setUserRole] = useState(null);

//   useEffect(() => {
//     fetchRules();
//     // Assume user data is stored in localStorage
//     const userData = JSON.parse(localStorage.getItem('userData'));
//     if (userData) {
//       setUserRole(userData[6]);
//     }
//   }, []);

//   const fetchRules = async (status = '') => {
//     setLoading(true); // Start loading
//     try {
//       const response = await fetch(`/list_rules?status=${status}`);
//       const data = await response.json();
//       if (data.status === 'SUCCESS') {
//         setAllRules(data.data);
//         setRules(data.data);
//       } else {
//         console.error('Failed to fetch rules:', data.data);
//       }
//     } catch (error) {
//       console.error('Error fetching rules:', error);
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   const fetchFilteredRules = async (term, status = '') => {
//     setLoading(true); // Start loading
//     try {
//       const response = await fetch(`/filter_rules?search=${term}&status=${status}`);
//       const data = await response.json();
//       if (data.status === 'SUCCESS') {
//         setRules(data.data);
//       } else {
//         console.error('Failed to fetch rules:', data.data);
//       }
//     } catch (error) {
//       console.error('Error fetching rules:', error);
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   const debouncedFetchFilteredRules = useCallback(debounce((term, status) => fetchFilteredRules(term, status), 300), []);

//   const handleSearchChange = (e) => {
//     const { value } = e.target;
//     setSearchTerm(value);
//     debouncedFetchFilteredRules(value, statusFilter);
//   };

//   const handleAddRule = async (newRule) => {
//     setLoading(true); // Start loading
//     try {
//       const response = await fetch(`/add_rule`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newRule)
//       });
//       const data = await response.json();
//       if (data.status === 'SUCCESS') {
//         alert('Rule added successfully!');
//         fetchRules(); // Refresh rules list
//       } else {
//         alert('Failed to add rule: ' + data.data);
//       }
//     } catch (error) {
//       console.error('Error adding rule:', error);
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   const handleEditRule = (rule) => {
//     setCurrentRule(rule);
//     setShowEditRule(true);
//   };

//   const handleDeleteRule = (rule) => {
//     setCurrentRule(rule);
//     setShowDeleteRule(true);
//   };

//   const confirmDeleteRule = async (rule) => {
//     setLoading(true); // Start loading
//     try {
//       const response = await fetch(`/delete_rule`, {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ rule_id: rule[0] })
//       });
//       const data = await response.json();
//       if (data.status === 'SUCCESS') {
//         alert('Rule deleted successfully!');
//         fetchRules(); // Refresh rules list
//       } else {
//         alert('Failed to delete rule: ' + data.data);
//       }
//     } catch (error) {
//       console.error('Error deleting rule:', error);
//       alert('Error deleting rule');
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   const handleRowClick = (rule) => {
//     if (expandedRow === rule[0]) {
//       setExpandedRow(null);
//     } else {
//       setExpandedRow(rule[0]);
//     }
//   };

//   const handleStatusFilterChange = (e) => {
//     const { value } = e.target;
//     setStatusFilter(value);
//     fetchRules(value);
//   };

//   const renderStatusIcon = (status) => {
//     switch (status) {
//       case 'approved':
//         return <IoMdCheckmarkCircleOutline className="status-icon approved" />;
//       case 'pending':
//         return <IoIosHourglass className="status-icon pending" />;
//       case 'declined':
//         return <FaTimesCircle className="status-icon declined" />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="rules">
//       <div className="rules-heading">
//         <div className="rules-header">
//           <div className='rule-page-header'>Rules</div>
//           <select
//             className="rules-status-dropdown"
//             value={statusFilter}
//             onChange={handleStatusFilterChange}
//           >
//             <option value="">All Rules</option>
//             <option value="approved">Approved Rules</option>
//             <option value="pending">Pending Rules</option>
//             <option value="declined">Declined Rules</option>
//           </select>
//         </div>
//         <div className="rules-search-add">
//           <div className="rules-search-wrapper">
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={handleSearchChange}
//               placeholder="Search By Rule Name / Media Type"
//               className="rules-search-input"
//             />
//             <FaSearch className="rules-search-icon" />
//           </div>
//           {(userRole === roles.SUPERADMIN || userRole === roles.ADMIN || userRole === roles.WRITE) && (
//             <button className="rules__add-new-button" onClick={() => setShowAddNewRule(true)}>+ Add New</button>
//           )}
//         </div>
//       </div>
//       <table className="rules__content-table">
//         <thead>
//           <tr>
//             <th>Rule Name</th>
//             <th>Media Type</th>
//             <th>Description</th>
//             <th>Created By</th>
//             <th>Rule Status</th>
//             {(userRole === roles.SUPERADMIN || userRole === roles.ADMIN || userRole === roles.WRITE) && <th>Action</th>}
//           </tr>
//         </thead>
//         {loading ? (
//           <div className="loader">
//             <Spinner />
//           </div>
//         ) : (
//           <tbody>
//             {rules.length > 0 ? (
//               rules.map((rule, index) => (
//                 <React.Fragment key={index}>
//                   <tr onClick={() => handleRowClick(rule)} className="rules__rule-row">
//                     <td>{rule.rulename}</td>
//                     <td>{rule.media_type}</td>
//                     <td>{rule.description}</td>
//                     <td>{rule.created_by}</td>
//                     <td>{renderStatusIcon(rule.rule_status)} {rule.rule_status}</td>
//                     {(userRole === roles.SUPERADMIN || userRole === roles.ADMIN || userRole === roles.WRITE) && (
//                       <td className='edit-delete-status'>
//                         {(userRole === roles.SUPERADMIN || userRole === roles.ADMIN || userRole === roles.WRITE) && (
//                           <button className="rules__edit-button" onClick={(e) => { e.stopPropagation(); handleEditRule(rule); }}><FaEdit /></button>
//                         )}
//                         {(userRole === roles.SUPERADMIN) && (
//                           <button className="rules__delete-button" onClick={(e) => { e.stopPropagation(); handleDeleteRule(rule); }}><FaTrash /></button>
//                         )}
//                       </td>
//                     )}
//                   </tr>
//                 </React.Fragment>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={userRole === roles.SUPERADMIN || userRole === roles.ADMIN || userRole === roles.WRITE ? 6 : 5}>No rules found</td>
//               </tr>
//             )}
//           </tbody>
//         )}
//       </table>
//       {showAddNewRule && (
//         <AddNewRule 
//           onClose={() => setShowAddNewRule(false)}
//           onAddRule={handleAddRule} 
//         />
//       )}
//       {showEditRule && (
//         <EditRule
//           onClose={() => {
//             setShowEditRule(false);
//             fetchRules(); // Refresh the rules after edit
//           }}
//           rule={currentRule}
//         />
//       )}
//       {showDeleteRule && (
//         <DeleteRule
//           onClose={() => setShowDeleteRule(false)}
//           onDelete={() => confirmDeleteRule(currentRule)}
//           rule={currentRule}
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

// export default Rules;






















// import React, { useState, useEffect, useCallback } from 'react';
// import './Rules.css';
// import { FaEdit, FaTrash, FaSearch, FaTimesCircle } from 'react-icons/fa';
// import { IoMdCheckmarkCircleOutline, IoIosHourglass } from 'react-icons/io';
// import AddNewRule from './AddNewRule';
// import EditRule from './EditRule';
// import DeleteRule from './DeleteRule';
// import Spinner from './Spinner'; // Import Spinner

// const roles = {
//   SUPERADMIN: 'SuperAdmin',
//   ADMIN: 'Admin',
//   WRITE: 'Write',
//   READ: 'Read',
// };

// function Rules() {
//   const [rules, setRules] = useState([]);
//   const [allRules, setAllRules] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showAddNewRule, setShowAddNewRule] = useState(false);
//   const [showEditRule, setShowEditRule] = useState(false);
//   const [showDeleteRule, setShowDeleteRule] = useState(false);
//   const [currentRule, setCurrentRule] = useState(null);
//   const [loading, setLoading] = useState(false); // State for loading
//   const [expandedRow, setExpandedRow] = useState(null); // State for expanded row
//   const [statusFilter, setStatusFilter] = useState(''); // State for dropdown
//   const [userRole, setUserRole] = useState(null);

//   useEffect(() => {
//     fetchRules();
//     // Assume user data is stored in localStorage
//     const userData = JSON.parse(localStorage.getItem('userData'));
//     if (userData) {
//       setUserRole(userData[6]);
//     }
//   }, []);

//   const fetchRules = async (status = '') => {
//     setLoading(true); // Start loading
//     try {
//       const response = await fetch(`/list_rules?status=${status}`);
//       const data = await response.json();
//       if (data.status === 'SUCCESS') {
//         setAllRules(data.data);
//         setRules(data.data);
//       } else {
//         console.error('Failed to fetch rules:', data.data);
//       }
//     } catch (error) {
//       console.error('Error fetching rules:', error);
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   const fetchFilteredRules = async (term, status = '') => {
//     setLoading(true); // Start loading
//     try {
//       const response = await fetch(`/filter_rules?search=${term}&status=${status}`);
//       const data = await response.json();
//       if (data.status === 'SUCCESS') {
//         setRules(data.data);
//       } else {
//         console.error('Failed to fetch rules:', data.data);
//       }
//     } catch (error) {
//       console.error('Error fetching rules:', error);
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   const debouncedFetchFilteredRules = useCallback(debounce((term, status) => fetchFilteredRules(term, status), 300), []);

//   const handleSearchChange = (e) => {
//     const { value } = e.target;
//     setSearchTerm(value);
//     debouncedFetchFilteredRules(value, statusFilter);
//   };

//   const handleAddRule = async (newRule) => {
//     setLoading(true); // Start loading
//     try {
//       const response = await fetch(`/add_rule`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newRule)
//       });
//       const data = await response.json();
//       if (data.status === 'SUCCESS') {
//         alert('Rule added successfully!');
//         fetchRules(); // Refresh rules list
//       } else {
//         alert('Failed to add rule: ' + data.data);
//       }
//     } catch (error) {
//       console.error('Error adding rule:', error);
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   const handleEditRule = (rule) => {
//     console.log("Checking Wrong placing: ", rule)
//     setCurrentRule(rule);
//     setShowEditRule(true);
//   };

//   const handleDeleteRule = (rule) => {
//     setCurrentRule(rule);
//     setShowDeleteRule(true);
//   };

//   const confirmDeleteRule = async (rule) => {
//     setLoading(true); // Start loading
//     try {
//       const response = await fetch(`/delete_rule`, {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ rule_id: rule.rule_id })
//       });
//       const data = await response.json();
//       if (data.status === 'SUCCESS') {
//         alert('Rule deleted successfully!');
//         fetchRules(); // Refresh rules list
//       } else {
//         alert('Failed to delete rule: ' + data.data);
//       }
//     } catch (error) {
//       console.error('Error deleting rule:', error);
//       alert('Error deleting rule');
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   const handleRowClick = (rule) => {
//     if (expandedRow === rule.id) {
//       setExpandedRow(null);
//     } else {
//       setExpandedRow(rule.id);
//     }
//   };

//   const handleStatusFilterChange = (e) => {
//     const { value } = e.target;
//     setStatusFilter(value);
//     fetchRules(value);
//   };

//   const renderStatusIcon = (status) => {
//     switch (status) {
//       case 'approved':
//         return <IoMdCheckmarkCircleOutline className="status-icon approved" />;
//       case 'pending':
//         return <IoIosHourglass className="status-icon pending" />;
//       case 'declined':
//         return <FaTimesCircle className="status-icon declined" />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="rules">
//       <div className="rules-heading">
//         <div className="rules-header">
//           <div className='rule-page-header'>Rules</div>
//           <select
//             className="rules-status-dropdown"
//             value={statusFilter}
//             onChange={handleStatusFilterChange}
//           >
//             <option value="">All Rules</option>
//             <option value="approved">Approved Rules</option>
//             <option value="pending">Pending Rules</option>
//             <option value="declined">Declined Rules</option>
//           </select>
//         </div>
//         <div className="rules-search-add">
//           <div className="rules-search-wrapper">
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={handleSearchChange}
//               placeholder="Search By Rule Name / Media Type"
//               className="rules-search-input"
//             />
//             <FaSearch className="rules-search-icon" />
//           </div>
//           {(userRole === roles.SUPERADMIN || userRole === roles.ADMIN || userRole === roles.WRITE) && (
//             <button className="rules__add-new-button" onClick={() => setShowAddNewRule(true)}>+ Add New</button>
//           )}
//         </div>
//       </div>
//       <table className="rules__content-table">
//         <thead>
//           <tr>
//             <th>Rule Name</th>
//             <th>Media Type</th>
//             <th>Description</th>
//             <th>Created By</th>
//             <th>Rule Status</th>
//             {(userRole === roles.SUPERADMIN || userRole === roles.ADMIN || userRole === roles.WRITE) && <th>Action</th>}
//           </tr>
//         </thead>
//         {loading ? (
//           <div className="loader">
//             <Spinner />
//           </div>
//         ) : (
//           <tbody>
//             {rules.length > 0 ? (
//               rules.map((rule, index) => (
//                 <React.Fragment key={index}>
//                   <tr onClick={() => handleRowClick(rule)} className="rules__rule-row">
//                     <td>{rule.rulename}</td>
//                     <td>{rule.media_type}</td>
//                     <td>{rule.description}</td>
//                     <td>{rule.created_by}</td>
//                     <td>{renderStatusIcon(rule.rule_status)} {rule.rule_status}</td>
//                     {(userRole === roles.SUPERADMIN || userRole === roles.ADMIN || userRole === roles.WRITE) && (
//                       <td className='edit-delete-status'>
//                         {(userRole === roles.SUPERADMIN || userRole === roles.ADMIN || userRole === roles.WRITE) && (
//                           <button className="rules__edit-button" onClick={(e) => { e.stopPropagation(); handleEditRule(rule); }}><FaEdit /></button>
//                         )}
//                         {(userRole === roles.SUPERADMIN) && (
//                           <button className="rules__delete-button" onClick={(e) => { e.stopPropagation(); handleDeleteRule(rule); }}><FaTrash /></button>
//                         )}
//                       </td>
//                     )}
//                   </tr>
//                 </React.Fragment>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={userRole === roles.SUPERADMIN || userRole === roles.ADMIN || userRole === roles.WRITE ? 6 : 5}>No rules found</td>
//               </tr>
//             )}
//           </tbody>
//         )}
//       </table>
//       {showAddNewRule && (
//         <AddNewRule 
//           onClose={() => setShowAddNewRule(false)}
//           onAddRule={handleAddRule} 
//         />
//       )}
//       {showEditRule && (
//         <EditRule
//           onClose={() => {
//             setShowEditRule(false);
//             fetchRules(); // Refresh the rules after edit
//           }}
//           rule={currentRule}
//         />
//       )}
//       {showDeleteRule && (
//         <DeleteRule
//           onClose={() => setShowDeleteRule(false)}
//           onDelete={() => confirmDeleteRule(currentRule)}
//           rule={currentRule}
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

// export default Rules;












//CHANGES FOR THE 'PENDING' ACTIONNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN

















import React, { useState, useEffect, useCallback } from 'react';
import './Rules.css';
import { FaEdit, FaTrash, FaSearch, FaTimesCircle } from 'react-icons/fa';
import { IoMdCheckmarkCircleOutline, IoIosHourglass } from 'react-icons/io';
import AddNewRule from './AddNewRule';
import EditRule from './EditRule';
import DeleteRule from './DeleteRule';
import ApproveDeclineStatus from './ApproveDeclineStatus';
import Spinner from './Spinner'; // Import Spinner

const roles = {
  SUPERADMIN: 'SuperAdmin',
  ADMIN: 'Admin',
  WRITE: 'Write',
  READ: 'Read',
};

function Rules() {
  const [rules, setRules] = useState([]);
  const [allRules, setAllRules] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddNewRule, setShowAddNewRule] = useState(false);
  const [showEditRule, setShowEditRule] = useState(false);
  const [showDeleteRule, setShowDeleteRule] = useState(false);
  const [showApproveDecline, setShowApproveDecline] = useState(false);
  const [currentRule, setCurrentRule] = useState(null);
  const [loading, setLoading] = useState(false); // State for loading
  const [expandedRow, setExpandedRow] = useState(null); // State for expanded row
  const [statusFilter, setStatusFilter] = useState(''); // State for dropdown
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    fetchRules();
    // Assume user data is stored in localStorage
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
      setUserRole(userData[6]);
    }
  }, []);

  const fetchRules = async (status = '') => {
    setLoading(true); // Start loading
    try {
      const response = await fetch(`/list_rules?status=${status}`);
      const data = await response.json();
      if (data.status === 'SUCCESS') {
        setAllRules(data.data);
        setRules(data.data);
      } else {
        console.error('Failed to fetch rules:', data.data);
      }
    } catch (error) {
      console.error('Error fetching rules:', error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const fetchFilteredRules = async (term, status = '') => {
    setLoading(true); // Start loading
    try {
      const response = await fetch(`/filter_rules?search=${term}&status=${status}`);
      const data = await response.json();
      if (data.status === 'SUCCESS') {
        setRules(data.data);
      } else {
        console.error('Failed to fetch rules:', data.data);
      }
    } catch (error) {
      console.error('Error fetching rules:', error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const debouncedFetchFilteredRules = useCallback(debounce((term, status) => fetchFilteredRules(term, status), 300), []);

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    debouncedFetchFilteredRules(value, statusFilter);
  };

  const handleAddRule = async (newRule) => {
    setLoading(true); // Start loading
    try {
      const response = await fetch(`/add_rule`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newRule)
      });
      const data = await response.json();
      if (data.status === 'SUCCESS') {
        alert('Rule added successfully!');
        fetchRules(); // Refresh rules list
      } else {
        alert('Failed to add rule: ' + data.data);
      }
    } catch (error) {
      console.error('Error adding rule:', error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleEditRule = (rule) => {
    setCurrentRule(rule);
    setShowEditRule(true);
  };

  const handleDeleteRule = (rule) => {
    setCurrentRule(rule);
    setShowDeleteRule(true);
  };

  const confirmDeleteRule = async (rule) => {
    setLoading(true); // Start loading
    try {
      const response = await fetch(`/delete_rule`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ rule_id: rule.rule_id })
      });
      const data = await response.json();
      if (data.status === 'SUCCESS') {
        alert('Rule deleted successfully!');
        fetchRules(); // Refresh rules list
      } else {
        alert('Failed to delete rule: ' + data.data);
      }
    } catch (error) {
      console.error('Error deleting rule:', error);
      alert('Error deleting rule');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleStatusClick = (rule) => {
    setCurrentRule(rule);
    setShowApproveDecline(true);
  };

  const handleRowClick = (rule) => {
    if (expandedRow === rule.id) {
      setExpandedRow(null);
    } else {
      setExpandedRow(rule.id);
    }
  };

  const handleStatusFilterChange = (e) => {
    const { value } = e.target;
    setStatusFilter(value);
    fetchRules(value);
  };

  const renderStatusIcon = (status) => {
    switch (status) {
      case 'approved':
        return <IoMdCheckmarkCircleOutline className="status-icon approved" />;
      case 'pending':
        return (
          <span className="status-icon pending" onClick={() => handleStatusClick(currentRule)}>
            <IoIosHourglass />
          </span>
        );
      case 'declined':
        return <FaTimesCircle className="status-icon declined" />;
      default:
        return null;
    }
  };

  return (
    <div className="rules">
      <div className="rules-heading">
        <div className="rules-header">
          <div className='rule-page-header'>Rules</div>
          <select
            className="rules-status-dropdown"
            value={statusFilter}
            onChange={handleStatusFilterChange}
          >
            <option value="">All Rules</option>
            <option value="approved">Approved Rules</option>
            <option value="pending">Pending Rules</option>
            <option value="declined">Declined Rules</option>
          </select>
        </div>
        <div className="rules-search-add">
          <div className="rules-search-wrapper">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search By Rule Name / Media Type"
              className="rules-search-input"
            />
            <FaSearch className="rules-search-icon" />
          </div>
          {(userRole === roles.SUPERADMIN || userRole === roles.ADMIN || userRole === roles.WRITE) && (
            <button className="rules__add-new-button" onClick={() => setShowAddNewRule(true)}>+ Add New</button>
          )}
        </div>
      </div>
      <table className="rules__content-table">
        <thead>
          <tr>
            <th>Rule Name</th>
            <th>Media Type</th>
            <th>Description</th>
            <th>Created By</th>
            <th>Rule Status</th>
            {(userRole === roles.SUPERADMIN || userRole === roles.ADMIN || userRole === roles.WRITE) && <th>Action</th>}
          </tr>
        </thead>
        {loading ? (
          <div className="loader">
            <Spinner />
          </div>
        ) : (
          <tbody>
            {rules.length > 0 ? (
              rules.map((rule, index) => (
                <React.Fragment key={index}>
                  <tr onClick={() => handleRowClick(rule)} className="rules__rule-row">
                    <td>{rule.rulename}</td>
                    <td>{rule.media_type}</td>
                    <td>{rule.description}</td>
                    <td>{rule.created_by}</td>
                    <td className='testing' onClick={() => rule.rule_status === 'pending' && handleStatusClick(rule)}>{renderStatusIcon(rule.rule_status)} {rule.rule_status}</td>
                    {(userRole === roles.SUPERADMIN || userRole === roles.ADMIN || userRole === roles.WRITE) && (
                      <td className='edit-delete-status'>
                        {(userRole === roles.SUPERADMIN || userRole === roles.ADMIN || userRole === roles.WRITE) && (
                          <button className="rules__edit-button" onClick={(e) => { e.stopPropagation(); handleEditRule(rule); }}><FaEdit /></button>
                        )}
                        {(userRole === roles.SUPERADMIN) && (
                          <button className="rules__delete-button" onClick={(e) => { e.stopPropagation(); handleDeleteRule(rule); }}><FaTrash /></button>
                        )}
                      </td>
                    )}
                  </tr>
                </React.Fragment>
              ))
            ) : (
              <tr>
                <td colSpan={userRole === roles.SUPERADMIN || userRole === roles.ADMIN || userRole === roles.WRITE ? 6 : 5}>No rules found</td>
              </tr>
            )}
          </tbody>
        )}
      </table>
      {showAddNewRule && (
        <AddNewRule 
          onClose={() => setShowAddNewRule(false)}
          onAddRule={handleAddRule} 
        />
      )}
      {showEditRule && (
        <EditRule
          onClose={() => {
            setShowEditRule(false);
            fetchRules(); // Refresh the rules after edit
          }}
          rule={currentRule}
        />
      )}
      {showDeleteRule && (
        <DeleteRule
          onClose={() => setShowDeleteRule(false)}
          onDelete={() => confirmDeleteRule(currentRule)}
          rule={currentRule}
        />
      )}
      {showApproveDecline && (
        <ApproveDeclineStatus
          onClose={() => setShowApproveDecline(false)}
          rule={currentRule}
          fetchRules={fetchRules}
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

export default Rules;








