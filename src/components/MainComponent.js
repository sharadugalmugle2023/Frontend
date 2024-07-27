// import React from 'react';
// import Header from './Header';
// import HomeScreen from './HomeScreen';
// import './MainComponent.css';

// function MainComponent() {
//   return (
//     <div className="main-container">
//       <Header />
//       <div className="content"> {/* Add this div for scrollable content */}
//         <HomeScreen />
//       </div>
//     </div>
//   );
// }

// export default MainComponent;




//NNNNNNNNNNNNNNNNNNNNNNNNEEEEEEEEEEEEEEEEEWWWWWWWWWWWWWWWWWWWWWWWWWWWW
import React, { useState } from 'react';
import Header from './Header';
import HomeScreen from './HomeScreen';
import './MainComponent.css';

function MainComponent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="main-container">
      <Header toggleSidebar={toggleSidebar} />
      <div className={`content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <HomeScreen isSidebarOpen={isSidebarOpen} />
      </div>
    </div>
  );
}

export default MainComponent;
