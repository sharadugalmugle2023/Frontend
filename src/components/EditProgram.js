// import React, { useState, useEffect } from 'react';
// import Select from 'react-select';
// import './EditProgram.css';

// function EditProgram({ onClose, program, onEditProgram }) {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [selectedRules, setSelectedRules] = useState([]);
//   const [rules, setRules] = useState([]);

//   useEffect(() => {
//     if (program) {
//       setTitle(program[0]);
//       setDescription(program[1]);
//       fetchMappedRules(program[2]); // Assuming program[2] is the program ID
//     }
//   }, [program]);

//   useEffect(() => {
//     fetchRules();
//   }, []);

//   const fetchRules = async () => {
//     try {
//       const response = await fetch(`/list_rules`);
//       const data = await response.json();
//       if (data.status === 'SUCCESS') {
//         setRules(data.data.map(rule => ({ value: rule[1], label: rule[1] })));
//       } else {
//         console.error('Failed to fetch rules:', data.data);
//       }
//     } catch (error) {
//       console.error('Error fetching rules:', error);
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
//         setSelectedRules(data.data.map(rule => ({ value: rule[1], label: rule[1] })));
//       } else {
//         console.error('Failed to fetch mapped rules:', data.data);
//       }
//     } catch (error) {
//       console.error('Error fetching mapped rules:', error);
//     }
//   };

//   const handleRuleChange = (selectedOptions) => {
//     setSelectedRules(selectedOptions);
//   };

//   const handleEdit = async () => {
//     if (title && description) {
//       try {
//         const response = await fetch(`/edit_program`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             program_id: program[2],
//             name: title,
//             description,
//             rules: selectedRules.map(rule => rule.value)
//           })
//         });
//         const data = await response.json();
//         if (data.status === 'SUCCESS') {
//           alert('Program edited successfully!');
//           onEditProgram([title, description, program[2]]);
//           // fetchMappedRules();
//           fetchRules();
//           onClose();
//         } else {
//           alert('Failed to edit program: ' + data.data);
//         }
//       } catch (error) {
//         console.error('Error editing program:', error);
//         alert('Error editing program');
//       }
//     } else {
//       alert('Please enter both title and description');
//     }
//   };

//   return (
//     <div className="edit-program-overlay">
//       <div className="edit-program">
//         <div className="edit-program-header">
//           <div>Edit Product</div>
//           <button className="edit-program-close" onClick={onClose}>×</button>
//         </div>
//         <hr />
//         <form className='edit-program-form'>
//           <div className="edit-program-form-row">
//             <div className="floating-label-input">
//               <input
//                 type="text"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 required
//                 placeholder=" "
//               />
//               <label>Product Title*</label>
//             </div>
//           </div>
//           <div className="edit-program-form-row">
//             <div className="floating-label-input">
//               <input
//                 type="text"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 required
//                 placeholder=" "
//               />
//               <label>Description*</label>
//             </div>
//           </div>
//           <div className="select-container">
//             <Select
//               isMulti
//               closeMenuOnSelect={false}
//               name="rules"
//               options={rules}
//               value={selectedRules}
//               className="basic-multi-select"
//               classNamePrefix="select"
//               onChange={handleRuleChange}
//               placeholder="Select Rules"
//               required
//             />
//             <label>Select Rules*</label>
//           </div>
//         </form>
//         <div className="edit-program-footer">
//           <button className="edit-program-save" onClick={handleEdit}>Save</button>
//           <button className="edit-program-cancel" onClick={onClose}>Cancel</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EditProgram;


















// import React, { useState, useEffect } from 'react';
// import Select from 'react-select';
// import './EditProgram.css';

// function EditProgram({ onClose, program, onEditProgram, fetchPrograms }) { // Add fetchPrograms as a prop
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [selectedRules, setSelectedRules] = useState([]);
//   const [rules, setRules] = useState([]);

//   useEffect(() => {
//     if (program) {
//       setTitle(program[0]);
//       setDescription(program[1]);
//       fetchMappedRules(program[2]); // Assuming program[2] is the program ID
//     }
//   }, [program]);

//   useEffect(() => {
//     fetchRules();
//   }, []);

//   const fetchRules = async () => {
//     try {
//       const response = await fetch(`/list_rules`);
//       const data = await response.json();
//       if (data.status === 'SUCCESS') {
//         setRules(data.data.map(rule => ({ value: rule[1], label: rule[1] })));
//       } else {
//         console.error('Failed to fetch rules:', data.data);
//       }
//     } catch (error) {
//       console.error('Error fetching rules:', error);
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
//         setSelectedRules(data.data.map(rule => ({ value: rule[1], label: rule[1] })));
//       } else {
//         console.error('Failed to fetch mapped rules:', data.data);
//       }
//     } catch (error) {
//       console.error('Error fetching mapped rules:', error);
//     }
//   };

//   const handleRuleChange = (selectedOptions) => {
//     setSelectedRules(selectedOptions);
//   };

//   const handleEdit = async () => {
//     if (title && description) {
//       try {
//         const response = await fetch(`/edit_program`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             program_id: program[2],
//             name: title,
//             description,
//             rules: selectedRules.map(rule => rule.value)
//           })
//         });
//         const data = await response.json();
//         if (data.status === 'SUCCESS') {
//           alert('Program edited successfully!');
//           onEditProgram([title, description, program[2]]);
//           // Fetch the updated list of programs
//           fetchPrograms();
//           onClose();
//         } else {
//           alert('Failed to edit program: ' + data.data);
//         }
//       } catch (error) {
//         console.error('Error editing program:', error);
//         alert('Error editing program');
//       }
//     } else {
//       alert('Please enter both title and description');
//     }
//   };

//   return (
//     <div className="edit-program-overlay">
//       <div className="edit-program">
//         <div className="edit-program-header">
//           <div>Edit Product</div>
//           <button className="edit-program-close" onClick={onClose}>×</button>
//         </div>
//         <hr />
//         <form className='edit-program-form'>
//           <div className="edit-program-form-row">
//             <div className="floating-label-input">
//               <input
//                 type="text"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 required
//                 placeholder=" "
//               />
//               <label>Product Title*</label>
//             </div>
//           </div>
//           <div className="edit-program-form-row">
//             <div className="floating-label-input">
//               <input
//                 type="text"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 required
//                 placeholder=" "
//               />
//               <label>Description*</label>
//             </div>
//           </div>
//           <div className="select-container">
//             <Select
//               isMulti
//               closeMenuOnSelect={false}
//               name="rules"
//               options={rules}
//               value={selectedRules}
//               className="basic-multi-select"
//               classNamePrefix="select"
//               onChange={handleRuleChange}
//               placeholder="Select Rules"
//               required
//             />
//             <label>Select Rules*</label>
//           </div>
//         </form>
//         <div className="edit-program-footer">
//           <button className="edit-program-save" onClick={handleEdit}>Save</button>
//           <button className="edit-program-cancel" onClick={onClose}>Cancel</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EditProgram;

















import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import './EditProgram.css';

function EditProgram({ onClose, program, onEditProgram, fetchPrograms }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedRules, setSelectedRules] = useState([]);
  const [rules, setRules] = useState([]);

  useEffect(() => {
    if (program) {
      setTitle(program.programName);
      setDescription(program.description);
      fetchMappedRules(program.programID); // Assuming program[2] is the program ID
    }
  }, [program]);

  useEffect(() => {
    fetchRules();
  }, []);

  const fetchRules = async () => {
    try {
      const response = await fetch(`/list_rules`);
      const data = await response.json();
      if (data.status === 'SUCCESS') {
        console.log("Rule in Edit COMP: ", data.data);
        setRules(data.data.map(rule => ({ value: rule.rulename, label: rule.rulename })));
      } else {
        console.error('Failed to fetch rules:', data.data);
      }
    } catch (error) {
      console.error('Error fetching rules:', error);
    }
  };

  const fetchMappedRules = async (programId) => {
    try {
      const response = await fetch(`/get_mapped_rules`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ program_id: programId })
      });
      const data = await response.json();
      if (data.status === 'SUCCESS') {
        setSelectedRules(data.data.map(rule => ({ value: rule.rulename, label: rule.rulename })));
      } else {
        console.error('Failed to fetch mapped rules:', data.data);
      }
    } catch (error) {
      console.error('Error fetching mapped rules:', error);
    }
  };

  const handleRuleChange = (selectedOptions) => {
    setSelectedRules(selectedOptions);
  };

  const handleEdit = async () => {
    if (title && description && description) {
      try {
        const response = await fetch(`/edit_program`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            program_id: program.programID,
            name: title,
            description,
            rules: selectedRules.map(rule => rule.value)
          })
        });
        const data = await response.json();
        if (data.status === 'SUCCESS') {
          alert('Program edited successfully!');
          onEditProgram([title, description, program[2]]);
          fetchPrograms(); // Fetch the updated list of programs
          onClose();
        } else {
          alert('Failed to edit program: ' + data.data);
        }
      } catch (error) {
        console.error('Error editing program:', error);
        alert('Error editing program');
      }
    } else {
      alert('Please enter both title and description');
    }
  };

  return (
    <div className="edit-program-overlay">
      <div className="edit-program">
        <div className="edit-program-header">
          <div>Edit Product</div>
          <button className="edit-program-close" onClick={onClose}>×</button>
        </div>
        <hr />
        <form className='edit-program-form'>
          <div className="edit-program-form-row">
            <div className="floating-label-input">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder=" "
              />
              <label>Product Title*</label>
            </div>
          </div>
          <div className="edit-program-form-row">
            <div className="floating-label-input">
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                placeholder=" "
              />
              <label>Description*</label>
            </div>
          </div>
          <div className="select-container">
            <Select
              isMulti
              closeMenuOnSelect={false}
              name="rules"
              options={rules}
              value={selectedRules}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={handleRuleChange}
              placeholder="Select Rules"
              required
            />
            <label>Select Rules*</label>
          </div>
        </form>
        <div className="edit-program-footer">
          <button className="edit-program-save" onClick={handleEdit}>Save</button>
          <button className="edit-program-cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default EditProgram;
