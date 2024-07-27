import React, { useState, useEffect, useRef } from 'react';
import './ValidateContent.css';
import { saveAs } from 'file-saver';
import { Parser } from 'json2csv';
import { FaDownload } from 'react-icons/fa';
import Spinner from './Spinner';  // Import the custom spinner

function ValidateContent() {
  const [programs, setPrograms] = useState([]);
  const [selectedFilePath, setSelectedFilePath] = useState('');
  const [mediaType, setMediaType] = useState('');
  const [programType, setProgramType] = useState('');
  const [validationResults, setValidationResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showFailedResults, setShowFailedResults] = useState(false);
  const [failedMessage, setFailedMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    fetchPrograms();
  }, []);

  const fetchPrograms = async () => {
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
    }
  };
  // console.log("Programs in Validationss: ",programs)

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFilePath(file.name);
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleMediaTypeChange = (event) => {
    setMediaType(event.target.value);
  };

  const handleProgramTypeChange = (event) => {
    setProgramType(event.target.value);
  };

  const handleAnalyze = async (event) => {
    event.preventDefault();
    const file = fileInputRef.current.files[0];
    if (!file || !mediaType || !programType) {
      alert('Please select a file, media type, and program type.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('program_type', programType);
    formData.append('media_type', mediaType);

    setLoading(true);
    setShowResults(false);
    setShowFailedResults(false);

    try {
      const response = await fetch(`/validation`, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (result.status === 'SUCCESS') {
        console.log('Validation successful:', result.data);
        setValidationResults(result.data);
        setShowResults(true);
      } else {
        console.error('Validation failed:', result.data);
        setFailedMessage(result.data);
        setShowFailedResults(true);
      }
    } catch (error) {
      console.error('Error during validation:', error);
      setShowResults(false);
      setFailedMessage(error.message);
      setShowFailedResults(true);
    } finally {
      setLoading(false);
    }
  };

  const getRowColor = (result) => {
    const value = result[2];
    if (typeof value === 'string') {
      const lowerValue = value.toLowerCase();
      return lowerValue.includes('no') ? 'failed' : 'success';
    }
    return 'failed';
  };

  const downloadExcel = () => {
    const fields = ["Sr. No.", "Rule Name", "Rule", "Validation Result", "Validation Comment"];
    const data = validationResults.map((result, index) => ({
      "Sr. No.": index + 1,
      "Rule Name": result[0],
      "Rule": result[1],
      "Validation Result": result[2],
      "Validation Comment": result[3],
    }));
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(data);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, "Validation_Results.csv");
  };

  return (
    <div>
      <div className="validate-content">
        <div className='validate-content-header'>Validate Content</div>
        <form className="validate-content-form" onSubmit={handleAnalyze}>

          <div className="validate-content-form-group floating-label-input">
            <select value={programType} onChange={handleProgramTypeChange} required>
              <option value="" disabled>Select Product Type</option>
              {programs.map((program) => (
                <option key={program.programID} value={program.programName}>{program.programName}</option>
              ))}
            </select>
            <label>Product Type</label>
          </div>

          <div className="validate-content-form-group floating-label-input">
            <select value={mediaType} onChange={handleMediaTypeChange} required>
              <option value="" disabled>Select Media Type</option>
              <option value="pdf">PDF/Image</option>
              {/* <option value="Video">Video</option> */}
              <option value="GIF">GIF</option>
            </select>
            <label>Media Type</label>
          </div>

          <div className="validate-content-form-group media-type-group floating-label-input">
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
        <div className="loader">
          <Spinner />
        </div>
      )}
      {showResults && mediaType === 'pdf' && (
        <div className="validation-results">
          <h3>Validation Results</h3>
          <button className="download-button" onClick={downloadExcel}>
            <FaDownload className="download-icon" /> Download Excel
          </button>
          <table className="results-table">
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Rule Name</th>
                <th>Rule</th>
                <th>Validation Result</th>
                <th>Validation Comment</th>
              </tr>
            </thead>
            <tbody>
              {validationResults.map((result, index) => (
                <tr key={index} className={getRowColor(result)}>
                  <td>{index + 1}</td>
                  <td>{result[0]}</td>
                  <td>{result[1]}</td>
                  <td>{result[2]}</td>
                  <td>{result[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {showFailedResults && mediaType === 'pdf' && (
        <div className="validation-results">
          <h3>Failed Validation Results</h3>
          <div className="failed-message">
            {failedMessage}
          </div>
        </div>
      )}
      {showResults && mediaType === 'GIF' && (
        <div className="validation-results">
          <h3>Validation Results</h3>
          <button className="download-button" onClick={downloadExcel}>
            <FaDownload className="download-icon" /> Download Excel
          </button>
          <table className="results-table">
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Rule Name</th>
                <th>Rule</th>
                <th>Validation Result</th>
                <th>Validation Comment</th>
              </tr>
            </thead>
            <tbody>
              {validationResults.map((result, index) => (
                <tr key={index} className={getRowColor(result)}>
                  <td>{index + 1}</td>
                  <td>{result[0]}</td>
                  <td>{result[1]}</td>
                  <td>{result[2]}</td>
                  <td>{result[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {showFailedResults && mediaType === 'GIF' && (
        <div className="validation-results">
          <h3>Failed Validation Results</h3>
          <div className="failed-message">
            {failedMessage}
          </div>
        </div>
      )}
      {showResults && mediaType === 'Video' && (
        <div className="validation-results">
          <h3>Validation Results</h3>
          <table className="results-table">
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Title</th>
                <th>Validation Result</th>
              </tr>
            </thead>
            <tbody>
              {validationResults.map((result, index) => (
                <tr key={index} className={getRowColor(result)}>
                  <td>{index + 1}</td>
                  <td>{Object.keys(result)[0]}</td>
                  <td>{Object.values(result)[0]} sec</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ValidateContent;
