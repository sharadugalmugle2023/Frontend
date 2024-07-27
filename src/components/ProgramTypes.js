
// import React, { useState, useEffect } from 'react';
// import './ProgramTypes.css';
// import { FaEdit, FaTrash, FaChevronDown, FaChevronUp } from 'react-icons/fa';
// import AddNewProgram from './AddNewProgram';
// import EditProgram from './EditProgram';
// import DeleteProgram from './DeleteProgram';
// import Spinner from './Spinner'; // Import Spinner

// const roles = {
//   SUPERADMIN: 'SuperAdmin',
//   ADMIN: 'Admin',
//   WRITE: 'Write',
//   READ: 'Read',
// };

// function ProgramTypes() {
//   const [programs, setPrograms] = useState([]);
//   const [expandedRow, setExpandedRow] = useState(null);
//   const [showAddNewProgram, setShowAddNewProgram] = useState(false);
//   const [showEditProgram, setShowEditProgram] = useState(false);
//   const [showDeleteProgram, setShowDeleteProgram] = useState(false);
//   const [currentProgram, setCurrentProgram] = useState(null);
//   const [loading, setLoading] = useState(false); // State for loading
//   const [userRole, setUserRole] = useState(null);

//   useEffect(() => {
//     fetchPrograms();
//     // Assume user data is stored in localStorage
//     const userData = JSON.parse(localStorage.getItem('userData'));
//     console.log("User Data in Program: ", userData);
//     console.log("User Role in Program: ", userData[6]);
//     if (userData) {
//       setUserRole(userData[6]);
//     }
//   }, []);

//   const fetchPrograms = async () => {
//     setLoading(true); // Start loading
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
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   const fetchMappedRules = async (programId) => {
//     try {
//       const response = await fetch(`/get_mapped_rules`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ program_id: programId })
//       });
//       const data = await response.json();
//       if (data.status === 'SUCCESS') {
//         console.log("Fetched Rules for Program ID:", programId, data.data); // Debugging line
//         return data.data.map(rule => ({
//           value: rule[1],
//           label: rule[1],
//           mediaType: rule[2],
//           disclaimer: rule[3]
//         }));
//       } else {
//         console.error('Failed to fetch mapped rules:', data.data);
//         return [];
//       }
//     } catch (error) {
//       console.error('Error fetching mapped rules:', error);
//       return [];
//     }
//   };

//   const handleEditProgram = (program) => {
//     setCurrentProgram(program);
//     setShowEditProgram(true);
//   };

//   const handleDeleteProgram = (program) => {
//     setCurrentProgram(program);
//     setShowDeleteProgram(true);
//   };

//   const handleAddProgram = (newProgram) => {
//     setPrograms([...programs, newProgram]);
//   };

//   const handleUpdateProgram = (updatedProgram) => {
//     setPrograms(programs.map((program) =>
//       program[2] === updatedProgram[2] ? updatedProgram : program
//     ));
//   };

//   const handleConfirmDelete = (deletedProgram) => {
//     setPrograms(programs.filter(program => program[2] !== deletedProgram[2]));
//   };

//   const handleRowClick = async (program) => {
//     const programId = program[2];
//     if (expandedRow === programId) {
//       setExpandedRow(null);
//     } else {
//       const rules = await fetchMappedRules(programId);
//       console.log("Rules to be set for Program ID:", programId, rules); // Debugging line
//       const updatedPrograms = programs.map(p => {
//         if (p[2] === programId) {
//           return { ...p, rules }; // Ensure rules are placed in a separate key
//         }
//         return p;
//       });
//       console.log("Updated Programs State:", updatedPrograms); // Debugging line
//       setPrograms(updatedPrograms);
//       setExpandedRow(programId);
//     }
//   };

//   return (
//     <div className="program-types">
//       <div className="program-types-heading">
//         <div className='program-type-page-header'>Product Types</div>
//         {(userRole === roles.SUPERADMIN || userRole === roles.ADMIN || userRole === roles.WRITE) && (
//           <div><button className="program-types__add-new-button" onClick={() => setShowAddNewProgram(true)}>+ Add New</button></div>
//         )}
//       </div>
//       <table className="program-types__content-table">
//         <thead>
//           <tr>
//             <th>Type of Product</th>
//             <th>Description</th>
//             <th>Created by</th>
//             <th>Created DateTime</th>
//             {(userRole === roles.SUPERADMIN || userRole === roles.ADMIN || userRole === roles.WRITE) && <th>Action</th>}
//             <th></th>
//           </tr>
//         </thead>
//         {loading ? (
//           <div className="loader">
//             <Spinner />
//           </div>
//         ) : (
//           <tbody>
//             {programs.length > 0 ? (
//               programs.map((program, index) => (
//                 <React.Fragment key={index}>
//                   <tr
//                     onClick={() => handleRowClick(program)}
//                     className="program-types__program-row"
//                   >
//                     <td>{program[0]}</td>
//                     <td>{program[1]}</td>
//                     <td>{program[3]}</td>
//                     <td>{program[4]}</td>
//                     {(userRole === roles.SUPERADMIN || userRole === roles.ADMIN || userRole === roles.WRITE) && (
//                       <td>
//                         {(userRole === roles.SUPERADMIN || userRole === roles.ADMIN || userRole === roles.WRITE) && (
//                           <button className="program-types__edit-button" onClick={(e) => { e.stopPropagation(); handleEditProgram(program); }}><FaEdit /> Edit</button>
//                         )}
//                         {(userRole === roles.SUPERADMIN) && (
//                           <button className="program-types__delete-button" onClick={(e) => { e.stopPropagation(); handleDeleteProgram(program); }}><FaTrash /> Delete</button>
//                         )}
//                       </td>
//                     )}
//                     <td>
//                       {expandedRow === program[2] ? (
//                         <FaChevronUp className="expand-icon" />
//                       ) : (
//                         <FaChevronDown className="expand-icon" />
//                       )}
//                     </td>
//                   </tr>
//                   {expandedRow === program[2] && (
//                     <tr className="program-types__rules-row">
//                       <td colSpan={userRole === roles.SUPERADMIN || userRole === roles.ADMIN || userRole === roles.WRITE || userRole === roles.READ ? 6 : 5}>
//                         <table className='program-types_associated_rules'>
//                           <thead>
//                             <tr>
//                               <th>Rule Name</th>
//                               <th>Media Type</th>
//                               <th>Rule Definition</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             {Array.isArray(program.rules) && program.rules.length > 0 ? (
//                               program.rules.map((rule, ruleIndex) => (
//                                 <tr key={ruleIndex}>
//                                   <td>{rule.label}</td>
//                                   <td>{rule.mediaType}</td>
//                                   <td>{rule.disclaimer}</td>
//                                 </tr>
//                               ))
//                             ) : (
//                               <tr>
//                                 <td colSpan="3">No rules found</td>
//                               </tr>
//                             )}
//                           </tbody>
//                         </table>
//                       </td>
//                     </tr>
//                   )}
//                 </React.Fragment>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={userRole === roles.SUPERADMIN || userRole === roles.ADMIN || userRole === roles.WRITE ? 6 : 5}>No programs found</td>
//               </tr>
//             )}
//           </tbody>
//         )}
//       </table>
//       {showAddNewProgram && (
//         <AddNewProgram
//           onClose={() => setShowAddNewProgram(false)}
//           onAddProgram={handleAddProgram}
//           onFetching={fetchPrograms}
//         />
//       )}
//       {showEditProgram && (
//         <EditProgram
//           onClose={() => setShowEditProgram(false)}
//           program={currentProgram}
//           onEditProgram={handleUpdateProgram}
//           fetchPrograms={fetchPrograms} // Pass the fetchPrograms function as a prop
//         />
//       )}
//       {showDeleteProgram && (
//         <DeleteProgram
//           onClose={() => setShowDeleteProgram(false)}
//           program={currentProgram}
//           onDelete={handleConfirmDelete}
//         />
//       )}
//     </div>
//   );
// }

// export default ProgramTypes;




















//KKKKKKKKKKKKKKKKKKKEEEEEEEEEYYYYYYYYYYYYYYYYYYYYVVVVVVVVVAAAAAAAAAAALLLLLLLLLUUUUUUUUUUEEEEEEEEEE







import React, { useState, useEffect } from 'react';
import './ProgramTypes.css';
import { FaEdit, FaTrash, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import AddNewProgram from './AddNewProgram';
import EditProgram from './EditProgram';
import DeleteProgram from './DeleteProgram';
import Spinner from './Spinner'; // Import Spinner

const roles = {
  SUPERADMIN: 'SuperAdmin',
  ADMIN: 'Admin',
  WRITE: 'Write',
  READ: 'Read',
};

function ProgramTypes() {
  const [programs, setPrograms] = useState([]);
  const [expandedRow, setExpandedRow] = useState(null);
  const [showAddNewProgram, setShowAddNewProgram] = useState(false);
  const [showEditProgram, setShowEditProgram] = useState(false);
  const [showDeleteProgram, setShowDeleteProgram] = useState(false);
  const [currentProgram, setCurrentProgram] = useState(null);
  const [loading, setLoading] = useState(false); // State for loading
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    fetchPrograms();
    // Assume user data is stored in localStorage
    const userData = JSON.parse(localStorage.getItem('userData'));
    // console.log("User Data in Program: ", userData);
    // console.log("User Role in Program: ", userData[6]);
    if (userData) {
      setUserRole(userData[6]);
    }
  }, []);

  const fetchPrograms = async () => {
    setLoading(true); // Start loading
    try {
      const response = await fetch(`/list_programs`);
      const data = await response.json();
      if (data.body.status === 'success') {
        setPrograms(data.body.data);
      } else {
        console.error('Failed to fetch programs:', data.body.data);
      }
    } catch (error) {
      console.error('Error fetching programs:', error);
    } finally {
      setLoading(false); // Stop loading
    }
  };
  

  const fetchMappedRules = async (programId) => {
    try {
      console.log("Program id for fetchMappedRules: ",programId)
      const response = await fetch(`/get_mapped_rules`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ program_id: programId })
      });
      const data = await response.json();
      console.log("DATAAAAAAAAAAAAAA: ",data)
      if (data.status === 'SUCCESS') {
        console.log("Fetched Rules for Program IDDDDDDDD:", programId, data.data); // Debugging line
        return data.data.map(rule => ({
          value: rule.rulename,
          label: rule.rulename,
          mediaType: rule.media_type,
          disclaimer: rule.disclaimer
        }));
      } else {
        console.error('Failed to fetch mapped rules:', data.body.data);
        return [];
      }
    } catch (error) {
      console.error('Error fetching mapped rules:', error);
      return [];
    }
  };

  const handleEditProgram = (program) => {
    setCurrentProgram(program);
    setShowEditProgram(true);
  };

  const handleDeleteProgram = (program) => {
    setCurrentProgram(program);
    setShowDeleteProgram(true);
  };

  const handleAddProgram = (newProgram) => {
    setPrograms([...programs, newProgram]);
  };

  const handleUpdateProgram = (updatedProgram) => {
    setPrograms(programs.map((program) =>
      program.programID === updatedProgram.programID ? updatedProgram : program
    ));
  };

  const handleConfirmDelete = (deletedProgram) => {
    setPrograms(programs.filter(program => program.programID !== deletedProgram.programID));
  };

  const handleRowClick = async (program) => {
    const programId = program.programID;
    // console.log("Program id in Handlee CLICK: ",programId)
    if (expandedRow === programId) {
      setExpandedRow(null);
    } else {
      const rules = await fetchMappedRules(programId);
      console.log("Rules to be set for Program ID:", programId, rules); // Debugging line
      const updatedPrograms = programs.map(p => {
        if (p.programID === programId) {
          return { ...p, rules }; // Ensure rules are placed in a separate key
        }
        return p;
      });
      console.log("Updated Programs State:", updatedPrograms); // Debugging line
      setPrograms(updatedPrograms);
      setExpandedRow(programId);
    }
  };

  return (
    <div className="program-types">
      <div className="program-types-heading">
        <div className='program-type-page-header'>Product Types</div>
        {(userRole === roles.SUPERADMIN || userRole === roles.ADMIN || userRole === roles.WRITE) && (
          <div><button className="program-types__add-new-button" onClick={() => setShowAddNewProgram(true)}>+ Add New</button></div>
        )}
      </div>
      <table className="program-types__content-table">
        <thead>
          <tr>
            <th>Type of Product</th>
            <th>Description</th>
            <th>Created by</th>
            <th>Created DateTime</th>
            {(userRole === roles.SUPERADMIN || userRole === roles.ADMIN || userRole === roles.WRITE) && <th>Action</th>}
            <th></th>
          </tr>
        </thead>
        {loading ? (
          <div className="loader">
            <Spinner />
          </div>
        ) : (
          <tbody>
            {programs.length > 0 ? (
              programs.map((program) => (
                <React.Fragment key={program.programID}>
                  <tr
                    onClick={() => handleRowClick(program)}
                    className="program-types__program-row"
                  >
                    <td>{program.programName}</td>
                    <td>{program.description}</td>
                    <td>{program.created_by}</td>
                    <td>{program.created_at}</td>
                    {(userRole === roles.SUPERADMIN || userRole === roles.ADMIN || userRole === roles.WRITE) && (
                      <td>
                        {(userRole === roles.SUPERADMIN || userRole === roles.ADMIN || userRole === roles.WRITE) && (
                          <button className="program-types__edit-button" onClick={(e) => { e.stopPropagation(); handleEditProgram(program); }}><FaEdit /> Edit</button>
                        )}
                        {(userRole === roles.SUPERADMIN) && (
                          <button className="program-types__delete-button" onClick={(e) => { e.stopPropagation(); handleDeleteProgram(program); }}><FaTrash /> Delete</button>
                        )}
                      </td>
                    )}
                    <td>
                      {expandedRow === program.programID ? (
                        <FaChevronUp className="expand-icon" />
                      ) : (
                        <FaChevronDown className="expand-icon" />
                      )}
                    </td>
                  </tr>
                  {expandedRow === program.programID && (
                    <tr className="program-types__rules-row">
                      <td colSpan={userRole === roles.SUPERADMIN || userRole === roles.ADMIN || userRole === roles.WRITE || userRole === roles.READ ? 6 : 5}>
                        <table className='program-types_associated_rules'>
                          <thead>
                            <tr>
                              <th>Rule Name</th>
                              <th>Media Type</th>
                              <th>Rule Definition</th>
                            </tr>
                          </thead>
                          <tbody>
                            {Array.isArray(program.rules) && program.rules.length > 0 ? (
                              program.rules.map((rule, ruleIndex) => (
                                <tr key={ruleIndex}>
                                  <td>{rule.label}</td>
                                  <td>{rule.mediaType}</td>
                                  <td>{rule.disclaimer}</td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td colSpan="3">No rules found</td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))
            ) : (
              <tr>
                <td colSpan={userRole === roles.SUPERADMIN || userRole === roles.ADMIN || userRole === roles.WRITE ? 6 : 5}>No programs found</td>
              </tr>
            )}
          </tbody>
        )}
      </table>
      {showAddNewProgram && (
        <AddNewProgram
          onClose={() => setShowAddNewProgram(false)}
          onAddProgram={handleAddProgram}
          onFetching={fetchPrograms}
        />
      )}
      {showEditProgram && (
        <EditProgram
          onClose={() => setShowEditProgram(false)}
          program={currentProgram}
          onEditProgram={handleUpdateProgram}
          fetchPrograms={fetchPrograms} // Pass the fetchPrograms function as a prop
        />
      )}
      {showDeleteProgram && (
        <DeleteProgram
          onClose={() => setShowDeleteProgram(false)}
          program={currentProgram}
          onDelete={handleConfirmDelete}
        />
      )}
    </div>
  );
}

export default ProgramTypes;
