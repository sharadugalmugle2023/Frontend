// import React, { useState, useEffect } from 'react';
// import Select from 'react-select';
// import './AddNewProgram.css';

// function AddNewProgram({ onClose, onAddProgram, onFetching }) {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     selectedRules: []
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleRuleChange = (selectedOptions) => {
//     const selectedRules = selectedOptions.map(option => option.value);
//     setFormData({ ...formData, selectedRules });
//   };

//   const [rules, setRules] = useState([]);

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

//   const handleAdd = async () => {
//     const { title, description, selectedRules } = formData;
//     if (title && description && selectedRules) {
//       try {
//         const response = await fetch(`/add_program`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({ name: title, description, rules: selectedRules })
//         });
//         const data = await response.json();
//         if (data.status === 'SUCCESS') {
//           alert('Program added successfully!');
//           onAddProgram([title, description, selectedRules]);
//           onFetching();
//           onClose();
//         } else {
//           alert('Failed to add program: ' + data.data);
//         }
//       } catch (error) {
//         console.error('Error adding program:', error);
//         alert('Error adding program');
//       }
//     } else {
//       alert('Please enter both title and description');
//     }
//   };

//   return (
//     <div className="add-new-program-overlay">
//       <div className="add-new-program">
//         <div className="add-new-program-header">
//           <div>Add New Product</div>
//           <button className="add-new-program-close" onClick={onClose}>×</button>
//         </div>
//         <hr />
//         <div className="add-new-program-body">

//           <div className="floating-label-input ">
//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               required
//               placeholder=" "
//             />
//             <label>Product Title*</label>
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

//           <div className="select-container">
//             <Select
//               isMulti
//               closeMenuOnSelect={false}
//               name="rules"
//               options={rules}
//               className="basic-multi-select"
//               classNamePrefix="select"
//               onChange={handleRuleChange}
//               placeholder="Search "
//               required
//             />
//             <label>Select Rules*</label>
//           </div>

//         </div>
        
//         <div className="add-new-program-footer">
//           <button className="add-new-program-add" onClick={handleAdd}>Add</button>
//           <button className="add-new-program-cancel" onClick={onClose}>Cancel</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddNewProgram;



















import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import './AddNewProgram.css';

function AddNewProgram({ onClose, onAddProgram, onFetching }) {
  const userLocalData = JSON.parse(localStorage.getItem('userData'));

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    selectedRules: [],
    created_by: `${userLocalData[1]} ${userLocalData[2]}`,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRuleChange = (selectedOptions) => {
    const selectedRules = selectedOptions.map(option => option.value);
    setFormData({ ...formData, selectedRules });
  };

  const [rules, setRules] = useState([]);

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

  const handleAdd = async () => {
    const { title, description, selectedRules, created_by } = formData;
    if (title && description && selectedRules.length > 0) {
      try {
        const response = await fetch(`/add_program`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: title,
            description,
            rules: selectedRules,
            created_by
          })
        });
        const data = await response.json();
        if (data.status === 'SUCCESS') {
          alert('Program added successfully!');
          onAddProgram([title, description, selectedRules, created_by]);
          onFetching();
          onClose();
        } else {
          alert('Failed to add program: ' + data.data);
        }
      } catch (error) {
        console.error('Error adding program:', error);
        alert('Error adding program');
      }
    } else {
      alert('Please enter title, description, and select at least one rule');
    }
  };

  return (
    <div className="add-new-program-overlay">
      <div className="add-new-program">
        <div className="add-new-program-header">
          <div>Add New Product</div>
          <button className="add-new-program-close" onClick={onClose}>×</button>
        </div>
        <hr />
        <div className="add-new-program-body">
          <div className="floating-label-input">
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label>Product Title*</label>
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

          <div className="select-container">
            <Select
              isMulti
              closeMenuOnSelect={false}
              name="rules"
              options={rules}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={handleRuleChange}
              placeholder="Search "
              required
            />
            <label>Select Rules*</label>
          </div>
        </div>
        <div className="add-new-program-footer">
          <button className="add-new-program-add" onClick={handleAdd}>Add</button>
          <button className="add-new-program-cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default AddNewProgram;
