import React from 'react';
import './SideBar.css';

function SideBar({ setActiveComponent }) {
  return (
    <div className="sidebar">
      <div className="sidebar__header">Products</div>
      <button className="sidebar__button" onClick={() => setActiveComponent('ProgramTypes')}>Program Types</button>
      <button className="sidebar__button" onClick={() => setActiveComponent('Rules')}>Rules</button>
      <button className="sidebar__button" onClick={() => setActiveComponent('ValidateContent')}>Validate Content</button>
    </div>
  );
}

export default SideBar;

 

