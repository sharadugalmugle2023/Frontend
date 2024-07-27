

// import React, { useState, useEffect, useRef } from 'react';
// import Select from 'react-select';
// import './ValidateVideoContent.css';
// import { saveAs } from 'file-saver';
// import { Parser } from 'json2csv';
// import { FaDownload, FaChevronDown, FaChevronUp } from 'react-icons/fa';

// function ValidateVideoContent() {
//   const [selectedFilePath, setSelectedFilePath] = useState('');
//   const [programType, setProgramType] = useState('');
//   const [frameValidationResults, setFrameValidationResults] = useState([]);
//   const [audioAnalysisResults, setAudioAnalysisResults] = useState([]);
//   const [showResults, setShowResults] = useState(false);
//   const [showFailedResults, setShowFailedResults] = useState(false);
//   const [failedMessage, setFailedMessage] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [programs, setPrograms] = useState([]);
//   const [selectedOperations, setSelectedOperations] = useState([]);
//   const [expandedRow, setExpandedRow] = useState(null);
//   const fileInputRef = useRef(null);

//   const options = [
//     { value: 'frame_analysis', label: 'Frame Analysis' },
//     { value: 'audio_analysis', label: 'Audio Analysis' },
//   ];

//   useEffect(() => {
//     fetchPrograms();
//     setSelectedOperations(options); // Set default selected options
//   }, []);

//   const fetchPrograms = async () => {
//     try {
//       const response = await fetch(`/list_programs`);
//       const data = await response.json();
//       if (data.body.status === 'success') {
//         setPrograms(data.body.data);
//       } else {
//         console.error('Failed to fetch programs:', data.data);
//       }
//     } catch (error) {
//       console.error('Error fetching programs:', error);
//     }
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setSelectedFilePath(file.name);
//     }
//   };

//   const handleBrowseClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleProgramTypeChange = (event) => {
//     setProgramType(event.target.value);
//   };

//   const handleRuleChange = (selectedOptions) => {
//     setSelectedOperations(selectedOptions);
//   };

//   const handleAnalyze = async (event) => {
//     event.preventDefault();
//     const file = fileInputRef.current.files[0];
//     if (!file || !programType) {
//       alert('Please select a file and program type.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('program_type', programType);
//     formData.append('operation', JSON.stringify(selectedOperations.map(operation => operation.value)));

//     setLoading(true);
//     setShowResults(false);
//     setShowFailedResults(false);

//     try {
//       const response = await fetch(`/video_validation`, {
//         method: 'POST',
//         body: formData,
//       });

//       const result = await response.json();
//       console.log("Validation result: ", result); // Log result for debugging
//       if (result.status === 'SUCCESS') {
//         if (selectedOperations.length === 2 &&
//             selectedOperations.some(op => op.value === 'frame_analysis') &&
//             selectedOperations.some(op => op.value === 'audio_analysis')) {
//           setFrameValidationResults(result.frame.data);
//           setAudioAnalysisResults(result.audio.data[1].Data2);
//           setShowResults(true);
//         } else if (selectedOperations.length === 1 && selectedOperations[0].value === 'frame_analysis') {
//           setFrameValidationResults(result.Data);
//           setAudioAnalysisResults([]);
//           setShowResults(true);
//         } else if (selectedOperations.length === 1 && selectedOperations[0].value === 'audio_analysis') {
//           if (result.Data && result.Data[1] && result.Data[1].Data2) {
//             setAudioAnalysisResults(result.Data[1].Data2); // Set audio analysis results
//             setFrameValidationResults([]);
//             setShowResults(true);
//           }
//         }
//       } else {
//         setFailedMessage(result.data);
//         setShowFailedResults(true);
//       }
//     } catch (error) {
//       setFailedMessage(error.message);
//       setShowFailedResults(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getRowColor = (result) => {
//     const value = result.Validation_result;
//     if (typeof value === 'string') {
//       return value.toLowerCase().includes('no') ? 'failed' : 'success';
//     }
//     return 'failed';
//   };

//   const downloadExcel = () => {
//     const fields = ["Sr. No.", "Frames", "Validation Result"];
//     const data = frameValidationResults.map((result, index) => ({
//       "Sr. No.": index + 1,
//       "Frames": result.frame_name,
//       "Validation Result": result.validation_result,
//     }));
//     const json2csvParser = new Parser({ fields });
//     const csv = json2csvParser.parse(data);
//     const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
//     saveAs(blob, "Video_Validation_Results.csv");
//   };

//   const handleRowClick = (index) => {
//     if (expandedRow === index) {
//       setExpandedRow(null);
//     } else {
//       setExpandedRow(index);
//     }
//   };

//   return (
//     <div>
//       <div className="validate-video-content">
//         <div className='validate-video-content-header'>Validate Video Content</div>
//         <form className="validate-video-content-form" onSubmit={handleAnalyze}>

//           <div className="validate-video-content-form-group floating-label-input">
//             <select value={programType} onChange={handleProgramTypeChange} required>
//               <option value="" disabled>Select Program Type</option>
//               {programs.map((program) => (
//                 <option key={program.programID} value={program.programName}>{program.programName}</option>
//               ))}
//             </select>
//             <label>Program Type</label>
//           </div>

//           <div className="select-container validate-video-content-form-group">
//             <Select
//               isMulti
//               closeMenuOnSelect={false}
//               name="operations"
//               options={options}
//               value={selectedOperations} // Set default selected options
//               className="basic-multi-select"
//               classNamePrefix="select"
//               onChange={handleRuleChange}
//               placeholder="Search"
//               required
//             />
//             <label>Operation Type*</label>
//           </div>

//           <div className="validate-video-content-form-group media-type-group floating-label-input">
//             <div className="input-group">
//               <input type="text" placeholder=" " readOnly value={selectedFilePath} />
//               <label>Browse</label>
//               <button type="button" className="browse-button" onClick={handleBrowseClick}>Browse</button>
//               <input
//                 type="file"
//                 id="fileInput"
//                 style={{ display: 'none' }}
//                 ref={fileInputRef}
//                 onChange={handleFileChange}
//               />
//             </div>
//           </div>
//         </form>
//         <div className="uploaded-and-analyze">
//           <div className='analyze-button-repositioning'>
//             <button onClick={handleAnalyze} className="analyze-button">Analyze</button>
//           </div>
//         </div>
//       </div>
//       {loading && (
//         <div className="loader">Loading...</div>
//       )}
//       {showResults && (
//         <div className="validation-results">
//           <h3>Validation Results</h3>
//           <button className="download-button" onClick={downloadExcel}>
//             <FaDownload className="download-icon" /> Download Excel
//           </button>

//           {frameValidationResults.length > 0 && (
//             <div>
//               <h4>Frame Analysis Results</h4>
//               <table className="frame_analysis_results-table">
//                 <thead>
//                   <tr>
//                     <th>Image</th>
//                     <th></th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {frameValidationResults.map((frame, index) => (
//                     <React.Fragment key={index}>
//                       <tr onClick={() => handleRowClick(index)} className="frame-analysis-row">
//                         <td className='frame-open-close'>{frame.file_name}
//                           {expandedRow === index ? <FaChevronUp /> : <FaChevronDown />}
//                         </td>
//                       </tr>
//                       {expandedRow === index && (
//                         <tr className="details-row">
//                           <td colSpan="2">
//                             <table className="details-table">
//                               <thead>
//                                 <tr>
//                                   <th>Rule Name</th>
//                                   <th>Rule Definition</th>
//                                   <th>Validation Result</th>
//                                   <th>Validation Comment</th>
//                                 </tr>
//                               </thead>
//                               <tbody>
//                                 {frame.results.map((rule, ruleIndex) => (
//                                   <tr key={ruleIndex} className={getRowColor(rule)}>
//                                     <td>{rule.rule_name}</td>
//                                     <td>{rule.rule_defination}</td>
//                                     <td>{rule.Validation_result}</td>
//                                     <td>{rule.Validation_comment}</td>
//                                   </tr>
//                                 ))}
//                               </tbody>
//                             </table>
//                           </td>
//                         </tr>
//                       )}
//                     </React.Fragment>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}

//           {audioAnalysisResults.length > 0 && (
//             <div>
//               <h4>Audio Analysis Results</h4>
//               <table className="audio_analysis_results-table">
//                 <thead>
//                   <tr>
//                     <th>Rule Name</th>
//                     <th>Rule Definition</th>
//                     <th>Validation Result</th>
//                     <th>Validation Comment</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {audioAnalysisResults.map((result, index) => (
//                     <tr key={index} className={getRowColor(result)}>
//                       <td>{result.rule_name}</td>
//                       <td>{result.rule_defination}</td>
//                       <td>{result.Validation_result}</td>
//                       <td>{result.Validation_comment}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       )}
//       {showFailedResults && (
//         <div className="validation-results">
//           <h3>Failed Validation Results</h3>
//           <div className="failed-message">
//             {failedMessage}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ValidateVideoContent;

























import React, { useState, useEffect, useRef } from 'react';
import Select from 'react-select';
import './ValidateVideoContent.css';
import { saveAs } from 'file-saver';
import { Parser } from 'json2csv';
import { FaDownload, FaChevronDown, FaChevronUp } from 'react-icons/fa';

function ValidateVideoContent() {
  const [selectedFilePath, setSelectedFilePath] = useState('');
  const [programType, setProgramType] = useState('');
  const [frameValidationResults, setFrameValidationResults] = useState([]);
  const [audioAnalysisResults, setAudioAnalysisResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showFailedResults, setShowFailedResults] = useState(false);
  const [failedMessage, setFailedMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [programs, setPrograms] = useState([]);
  const [selectedOperations, setSelectedOperations] = useState([]);
  const [expandedRow, setExpandedRow] = useState(null);
  const fileInputRef = useRef(null);

  const options = [
    { value: 'frame_analysis', label: 'Frame Analysis' },
    { value: 'audio_analysis', label: 'Audio Analysis' },
  ];

  useEffect(() => {
    fetchPrograms();
    setSelectedOperations(options); // Set default selected options
  }, []);

  const fetchPrograms = async () => {
    try {
      const response = await fetch(`/list_programs`);
      const data = await response.json();
      if (data.body.status === 'success') {
        setPrograms(data.body.data);
      } else {
        console.error('Failed to fetch programs:', data.data);
      }
    } catch (error) {
      console.error('Error fetching programs:', error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFilePath(file.name);
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleProgramTypeChange = (event) => {
    setProgramType(event.target.value);
  };

  const handleRuleChange = (selectedOptions) => {
    setSelectedOperations(selectedOptions);
  };

  const handleAnalyze = async (event) => {
    event.preventDefault();
    const file = fileInputRef.current.files[0];
    if (!file || !programType) {
      alert('Please select a file and program type.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('program_type', programType);
    formData.append('operation', JSON.stringify(selectedOperations.map(operation => operation.value)));

    setLoading(true);
    setShowResults(false);
    setShowFailedResults(false);

    try {
      const response = await fetch(`/video_validation`, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      // console.log("Validation result: ", result); // Log result for debugging
      if (result.status === 'SUCCESS')
        {
        if (selectedOperations.length === 2 &&
            selectedOperations.some(op => op.value === 'frame_analysis') &&
            selectedOperations.some(op => op.value === 'audio_analysis')) {
          setFrameValidationResults(result.frame.data);
          console.log("Validation frame result: ", result.frame.data);
          setAudioAnalysisResults(result.audio.data[1].Data2);
          console.log("Validation audio result: ", result.audio.data[1].Data2);
          setShowResults(true);
        }
        else if (selectedOperations.length === 1 && selectedOperations[0].value === 'frame_analysis') {
          setFrameValidationResults(result.frame.data);
          setAudioAnalysisResults([]);
          setShowResults(true);
        } 
        else if (selectedOperations.length === 1 && selectedOperations[0].value === 'audio_analysis') {
          if (result.audio && result.audio.data[1] && result.audio.data[1].Data2) {
            setAudioAnalysisResults(result.audio.data[1].Data2);
            setFrameValidationResults([]);
            setShowResults(true);
          }
        }
      } 
      else {
        setFailedMessage(result.data);
        setShowFailedResults(true);
      }
    } catch (error) {
      setFailedMessage(error.message);
      setShowFailedResults(true);
    } finally {
      setLoading(false);
    }
  };

  const getRowColor = (result) => {
    const value = result.Validation_result;
    if (typeof value === 'string') {
      return value.toLowerCase().includes('no') ? 'failed' : 'success';
    }
    return 'failed';
  };

  const downloadExcel = () => {
    const fields = ["Sr. No.", "Frames", "Validation Result"];
    const data = frameValidationResults.map((result, index) => ({
      "Sr. No.": index + 1,
      "Frames": result.frame_name,
      "Validation Result": result.validation_result,
    }));
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(data);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, "Video_Validation_Results.csv");
  };
  const downloadAudioExcel = () => {
    const fields = ["Sr. No.", "Rule Name", "Rule Definition", "Validation Result", "Validation Comment"];
    const data = frameValidationResults.map((result, index) => ({
      "Sr. No.": index + 1,
      "Rule Name": result.frame_name,
      "Rule Definition": result.rule_defination,
      "Validation Result": result.validation_result,
      "Validation Comment": result.Validation_comment,
    }));
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(data);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, "Video_Validation_Results.csv");
  };

  const handleRowClick = (index) => {
    if (expandedRow === index) {
      setExpandedRow(null);
    } else {
      setExpandedRow(index);
    }
  };

  return (
    <div>
      <div className="validate-video-content">
        <div className='validate-video-content-header'>Validate Video Content</div>
        <form className="validate-video-content-form" onSubmit={handleAnalyze}>

          <div className="validate-video-content-form-group floating-label-input">
            <select value={programType} onChange={handleProgramTypeChange} required>
              <option value="" disabled>Select Program Type</option>
              {programs.map((program) => (
                <option key={program.programID} value={program.programName}>{program.programName}</option>
              ))}
            </select>
            <label>Program Type</label>
          </div>

          <div className="select-container validate-video-content-form-group">
            <Select
              isMulti
              closeMenuOnSelect={false}
              name="operations"
              options={options}
              value={selectedOperations} // Set default selected options
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={handleRuleChange}
              placeholder="Search"
              required
            />
            <label>Operation Type*</label>
          </div>

          <div className="validate-video-content-form-group media-type-group floating-label-input">
            <div className="input-group">
              <input type="text" placeholder=" " readOnly value={selectedFilePath} />
              <label>Browse</label>
              <button type="button" className="browse-button" onClick={handleBrowseClick}>Browse</button>
              <input
                type="file"
                id="fileInput"
                style={{ display: 'none' }}
                ref={fileInputRef}
                onChange={handleFileChange}
              />
            </div>
          </div>
        </form>
        <div className="uploaded-and-analyze">
          <div className='analyze-button-repositioning'>
            <button onClick={handleAnalyze} className="analyze-button">Analyze</button>
          </div>
        </div>
      </div>
      {loading && (
        <div className="loader">Loading...</div>
      )}
      {showResults && (
        <div className="validation-results">
          <h3>Validation Results</h3>
          {/* <button className="download-button" onClick={downloadExcel}>
            <FaDownload className="download-icon" /> Download Excel
          </button> */}

          {/* FRAME ANALYSIS */}

          {frameValidationResults.length > 0 && (
            <div>
              <h4>Frame Analysis Results</h4>
              <button className="download-button" onClick={downloadExcel}>
              <FaDownload className="download-icon" /> Download Excel
              </button>
              <table className="frame_analysis_results-table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {frameValidationResults.map((frame, index) => (
                    <React.Fragment key={index}>
                      <tr onClick={() => handleRowClick(index)} className="frame-analysis-row">
                        <td className='frame-open-close'>{frame.file_name}
                          {expandedRow === index ? <FaChevronUp /> : <FaChevronDown />}
                        </td>
                      </tr>
                      {expandedRow === index && (
                        <tr className="details-row">
                          <td colSpan="2">
                            <table className="details-table">
                              <thead>
                                <tr>
                                  <th>Rule Name</th>
                                  <th>Rule Definition</th>
                                  <th>Validation Result</th>
                                  <th>Validation Comment</th>
                                </tr>
                              </thead>
                              <tbody>
                                {frame.results.map((rule, ruleIndex) => (
                                  <tr key={ruleIndex} className={getRowColor(rule)}>
                                    <td>{rule.rule_name}</td>
                                    <td>{rule.rule_defination}</td>
                                    <td>{rule.Validation_result}</td>
                                    <td>{rule.Validation_comment}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* FRAME ANALYSIS */}

          {audioAnalysisResults.length > 0 && (
            <div>
              <h4>Audio Analysis Results</h4>
              <button className="download-button" onClick={downloadAudioExcel}>
              <FaDownload className="download-icon" /> Download Excel
              </button>
              <table className="audio_analysis_results-table">
                <thead>
                  <tr>
                    <th>Rule Name</th>
                    <th>Rule Definition</th>
                    <th>Validation Result</th>
                    <th>Validation Comment</th>
                  </tr>
                </thead>
                <tbody>
                  {audioAnalysisResults.map((result, index) => (
                    <tr key={index} className={getRowColor(result)}>
                      <td>{result.rule_name}</td>
                      <td>{result.rule_defination}</td>
                      <td>{result.Validation_result}</td>
                      <td>{result.Validation_comment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* FAILED RESULT */}
      {showFailedResults && (
        <div className="validation-results">
          <h3>Failed Validation Results</h3>
          <div className="failed-message">
            {failedMessage}
          </div>
        </div>
      )}
    </div>
  );
}

export default ValidateVideoContent;
