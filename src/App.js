// import React from 'react';
// import { BrowserRouter as Router} from 'react-router-dom';
// import MainComponent from './components/MainComponent';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <MainComponent />
//       </div>
//     </Router>
//   );
// }

// export default App;




import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainComponent from './components/MainComponent';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<MainComponent />} /> Render MainComponent for all other routes
        </Routes>
        {/* <MainComponent /> */}
      </div>
    </Router>
  );
}

export default App;
