// import React, { useState, Suspense, lazy } from 'react';
// import { Link, Route, Routes, useLocation } from 'react-router-dom';
// import { MdDashboard, MdCheckCircle, MdSettings } from 'react-icons/md';
// import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
// import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
// import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
// import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
// import { FaCheckCircle } from 'react-icons/fa';
// import { AiOutlineCheckCircle } from 'react-icons/ai';
// import { BiCheckCircle } from 'react-icons/bi';
// import { FiCheckCircle } from 'react-icons/fi';
// import { TiTick } from 'react-icons/ti';
// import { RiCheckboxCircleLine } from 'react-icons/ri';
// import { HiCheckCircle } from 'react-icons/hi';
// import { CgCheckO } from 'react-icons/cg';

// import './HomeScreen.css';

// const Dashboard = lazy(() => import('./Dashboard'));
// const Users = lazy(() => import('./Users'));
// const ProgramTypes = lazy(() => import('./ProgramTypes'));
// const Rules = lazy(() => import('./Rules'));
// const ValidateContent = lazy(() => import('./ValidateContent'));
// const ValidateVideoContent = lazy(() => import('./ValidateVideoContent'));

// function HomeScreen({ isSidebarOpen }) {
//   const location = useLocation();
//   const [activeButton, setActiveButton] = useState(location.pathname);
//   const [isValidateOpen, setIsValidateOpen] = useState(false);
//   const [isManageOpen, setIsManageOpen] = useState(false);

//   const handleButtonClick = (path) => {
//     setActiveButton(path);
//   };

//   const toggleValidate = () => {
//     setIsValidateOpen(!isValidateOpen);
//   };

//   const toggleManage = () => {
//     setIsManageOpen(!isManageOpen);
//   };

//   return (
//     <div className="home-screen">
//       {isSidebarOpen && (
//         <div className={`home-screen__sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
//           <Link
//             to="/"
//             className={`header__dropdown-button_sidebar ${activeButton === '/' ? 'active' : ''}`}
//             onClick={() => handleButtonClick('/')}
//           >
//             <MdDashboard className="sidebar-icon" />
//             Dashboard
//           </Link>

//           <hr />
//           <div className="home-screen__section">
//             <button className="home-screen__section-button" onClick={toggleValidate}>
//               <IoMdCheckmarkCircleOutline className="section-icon" />
//               Validation <span className="icon-right">{isValidateOpen ? <BsChevronUp /> : <BsChevronDown />}</span>
//             </button>
//             {isValidateOpen && (
//               <div className="home-screen__section-content">
//                 <Link
//                   to="/validate-content"
//                   className={`home-screen__button ${activeButton === '/validate-content' ? 'active' : ''}`}
//                   onClick={() => handleButtonClick('/validate-content')}
//                 >
//                   Validate Content
//                 </Link>
//                 <Link
//                   to="/validate-video-content"
//                   className={`home-screen__button ${activeButton === '/validate-video-content' ? 'active' : ''}`}
//                   onClick={() => handleButtonClick('/validate-video-content')}
//                 >
//                   Validate Video
//                 </Link>
//               </div>
//             )}
//           </div>

//           <hr />

//           <div className="home-screen__section">
//             <button className="home-screen__section-button" onClick={toggleManage}>
//               <MdSettings className="section-icon" />
//               Management <span className="icon-right">{isManageOpen ? <BsChevronUp /> : <BsChevronDown />}</span>
//             </button>
//             {isManageOpen && (
//               <div className="home-screen__section-content">
//                 <Link
//                   to="/rules"
//                   className={`home-screen__button ${activeButton === '/rules' ? 'active' : ''}`}
//                   onClick={() => handleButtonClick('/rules')}
//                 >
//                   Rules
//                 </Link>
//                 <Link
//                   to="/programtypes"
//                   className={`home-screen__button ${activeButton === '/programtypes' ? 'active' : ''}`}
//                   onClick={() => handleButtonClick('/programtypes')}
//                 >
//                   Product Types
//                 </Link>
//                 <Link
//                   to="/users"
//                   className={`home-screen__button ${activeButton === '/users' ? 'active' : ''}`}
//                   onClick={() => handleButtonClick('/users')}
//                 >
//                   Users
//                 </Link>
//               </div>
//             )}
//             <hr />
//           </div>
//         </div>
//       )}
//       <div className="home-screen__content">
//         <Suspense fallback={<div>Loading...</div>}>
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/programtypes" element={<ProgramTypes />} />
//             <Route path="/rules" element={<Rules />} />
//             <Route path="/validate-content" element={<ValidateContent />} />
//             <Route path="/validate-video-content" element={<ValidateVideoContent />} />
//             <Route path="/users" element={<Users />} />
//           </Routes>
//         </Suspense>
//       </div>
//     </div>
//   );
// }

// export default HomeScreen;













// import React, { useState, useEffect, Suspense, lazy } from 'react';
// import { Link, Route, Routes, useLocation } from 'react-router-dom';
// import { MdDashboard, MdCheckCircle, MdSettings } from 'react-icons/md';
// import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
// import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
// import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
// import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
// import { FaCheckCircle } from 'react-icons/fa';
// import { AiOutlineCheckCircle } from 'react-icons/ai';
// import { BiCheckCircle } from 'react-icons/bi';
// import { FiCheckCircle } from 'react-icons/fi';
// import { TiTick } from 'react-icons/ti';
// import { RiCheckboxCircleLine } from 'react-icons/ri';
// import { HiCheckCircle } from 'react-icons/hi';
// import { CgCheckO } from 'react-icons/cg';

// import './HomeScreen.css';

// const Dashboard = lazy(() => import('./Dashboard'));
// const Users = lazy(() => import('./Users'));
// const ProgramTypes = lazy(() => import('./ProgramTypes'));
// const Rules = lazy(() => import('./Rules'));
// const ValidateContent = lazy(() => import('./ValidateContent'));
// const ValidateVideoContent = lazy(() => import('./ValidateVideoContent'));

// function HomeScreen({ isSidebarOpen }) {
//   const location = useLocation();
//   const [activeButton, setActiveButton] = useState(location.pathname);
//   const [isValidateOpen, setIsValidateOpen] = useState(false);
//   const [isManageOpen, setIsManageOpen] = useState(false);

//   useEffect(() => {
//     // Load initial states from localStorage
//     const savedValidateState = localStorage.getItem('isValidateOpen');
//     const savedManageState = localStorage.getItem('isManageOpen');
//     if (savedValidateState !== null) {
//       setIsValidateOpen(JSON.parse(savedValidateState));
//     }
//     if (savedManageState !== null) {
//       setIsManageOpen(JSON.parse(savedManageState));
//     }
//   }, []);

//   const handleButtonClick = (path) => {
//     setActiveButton(path);
//   };

//   const toggleValidate = () => {
//     const newState = !isValidateOpen;
//     setIsValidateOpen(newState);
//     localStorage.setItem('isValidateOpen', JSON.stringify(newState));
//   };

//   const toggleManage = () => {
//     const newState = !isManageOpen;
//     setIsManageOpen(newState);
//     localStorage.setItem('isManageOpen', JSON.stringify(newState));
//   };

//   return (
//     <div className="home-screen">
//       {isSidebarOpen && (
//         <div className={`home-screen__sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
//           <Link
//             to="/"
//             className={`header__dropdown-button_sidebar ${activeButton === '/' ? 'active' : ''}`}
//             onClick={() => handleButtonClick('/')}
//           >
//             <MdDashboard className="sidebar-icon" />
//             Dashboard
//           </Link>

//           <hr />
//           <div className="home-screen__section">
//             <button className="home-screen__section-button" onClick={toggleValidate}>
//               <IoMdCheckmarkCircleOutline className="section-icon" />
//               Validation <span className="icon-right">{isValidateOpen ? <BsChevronUp /> : <BsChevronDown />}</span>
//             </button>
//             {isValidateOpen && (
//               <div className="home-screen__section-content">
//                 <Link
//                   to="/validate-content"
//                   className={`home-screen__button ${activeButton === '/validate-content' ? 'active' : ''}`}
//                   onClick={() => handleButtonClick('/validate-content')}
//                 >
//                   Validate Content
//                 </Link>
//                 <Link
//                   to="/validate-video-content"
//                   className={`home-screen__button ${activeButton === '/validate-video-content' ? 'active' : ''}`}
//                   onClick={() => handleButtonClick('/validate-video-content')}
//                 >
//                   Validate Video
//                 </Link>
//               </div>
//             )}
//           </div>

//           <hr />

//           <div className="home-screen__section">
//             <button className="home-screen__section-button" onClick={toggleManage}>
//               <MdSettings className="section-icon" />
//               Management <span className="icon-right">{isManageOpen ? <BsChevronUp /> : <BsChevronDown />}</span>
//             </button>
//             {isManageOpen && (
//               <div className="home-screen__section-content">
//                 <Link
//                   to="/rules"
//                   className={`home-screen__button ${activeButton === '/rules' ? 'active' : ''}`}
//                   onClick={() => handleButtonClick('/rules')}
//                 >
//                   Rules
//                 </Link>
//                 <Link
//                   to="/programtypes"
//                   className={`home-screen__button ${activeButton === '/programtypes' ? 'active' : ''}`}
//                   onClick={() => handleButtonClick('/programtypes')}
//                 >
//                   Product Types
//                 </Link>
//                 <Link
//                   to="/users"
//                   className={`home-screen__button ${activeButton === '/users' ? 'active' : ''}`}
//                   onClick={() => handleButtonClick('/users')}
//                 >
//                   Users
//                 </Link>
//               </div>
//             )}
//             <hr />
//           </div>
//         </div>
//       )}
//       <div className="home-screen__content">
//         <Suspense fallback={<div>Loading...</div>}>
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/programtypes" element={<ProgramTypes />} />
//             <Route path="/rules" element={<Rules />} />
//             <Route path="/validate-content" element={<ValidateContent />} />
//             <Route path="/validate-video-content" element={<ValidateVideoContent />} />
//             <Route path="/users" element={<Users />} />
//           </Routes>
//         </Suspense>
//       </div>
//     </div>
//   );
// }

// export default HomeScreen;
























// //  CONDITIONAL RENDERING COMPONENT LOGIC-WORKING FINEEEEEEEEEEE
// import React, { useState, useEffect, Suspense, lazy } from 'react';
// import { Link, Route, Routes, useLocation } from 'react-router-dom';
// import { MdDashboard, MdCheckCircle, MdSettings } from 'react-icons/md';
// import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
// import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
// import './HomeScreen.css';

// const Dashboard = lazy(() => import('./Dashboard'));
// const Users = lazy(() => import('./Users'));
// const ProgramTypes = lazy(() => import('./ProgramTypes'));
// const Rules = lazy(() => import('./Rules'));
// const ValidateContent = lazy(() => import('./ValidateContent'));
// const ValidateVideoContent = lazy(() => import('./ValidateVideoContent'));

// function HomeScreen({ isSidebarOpen }) {
//   const location = useLocation();
//   const [activeButton, setActiveButton] = useState(location.pathname);
//   const [isValidateOpen, setIsValidateOpen] = useState(false);
//   const [isManageOpen, setIsManageOpen] = useState(false);
//   const [userRole, setUserRole] = useState(null);

//   useEffect(() => {
//     const savedValidateState = localStorage.getItem('isValidateOpen');
//     const savedManageState = localStorage.getItem('isManageOpen');
//     const userData = JSON.parse(localStorage.getItem('userData'));

//     if (savedValidateState !== null) {
//       setIsValidateOpen(JSON.parse(savedValidateState));
//     }
//     if (savedManageState !== null) {
//       setIsManageOpen(JSON.parse(savedManageState));
//     }
//     if (userData) {
//       setUserRole(userData[6]);
//     }
//   }, []);

//   const handleButtonClick = (path) => {
//     setActiveButton(path);
//   };

//   const toggleValidate = () => {
//     const newState = !isValidateOpen;
//     setIsValidateOpen(newState);
//     localStorage.setItem('isValidateOpen', JSON.stringify(newState));
//   };

//   const toggleManage = () => {
//     const newState = !isManageOpen;
//     setIsManageOpen(newState);
//     localStorage.setItem('isManageOpen', JSON.stringify(newState));
//   };

//   return (
//     <div className="home-screen">
//       {isSidebarOpen && (
//         <div className={`home-screen__sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
//           <Link
//             to="/"
//             className={`header__dropdown-button_sidebar ${activeButton === '/' ? 'active' : ''}`}
//             onClick={() => handleButtonClick('/')}
//           >
//             <MdDashboard className="sidebar-icon" />
//             Dashboard
//           </Link>

//           <hr />
//           <div className="home-screen__section">
//             <button className="home-screen__section-button" onClick={toggleValidate}>
//               <IoMdCheckmarkCircleOutline className="section-icon" />
//               Validation <span className="icon-right">{isValidateOpen ? <BsChevronUp /> : <BsChevronDown />}</span>
//             </button>
//             {isValidateOpen && (
//               <div className="home-screen__section-content">
//                 <Link
//                   to="/validate-content"
//                   className={`home-screen__button ${activeButton === '/validate-content' ? 'active' : ''}`}
//                   onClick={() => handleButtonClick('/validate-content')}
//                 >
//                   Validate Content
//                 </Link>
//                 <Link
//                   to="/validate-video-content"
//                   className={`home-screen__button ${activeButton === '/validate-video-content' ? 'active' : ''}`}
//                   onClick={() => handleButtonClick('/validate-video-content')}
//                 >
//                   Validate Video
//                 </Link>
//               </div>
//             )}
//           </div>

//           <hr />

//           {userRole === 'Admin' && (
//             <div className="home-screen__section">
//               <button className="home-screen__section-button" onClick={toggleManage}>
//                 <MdSettings className="section-icon" />
//                 Management <span className="icon-right">{isManageOpen ? <BsChevronUp /> : <BsChevronDown />}</span>
//               </button>
//               {isManageOpen && (
//                 <div className="home-screen__section-content">
//                   <Link
//                     to="/rules"
//                     className={`home-screen__button ${activeButton === '/rules' ? 'active' : ''}`}
//                     onClick={() => handleButtonClick('/rules')}
//                   >
//                     Rules
//                   </Link>
//                   <Link
//                     to="/program-types"
//                     className={`home-screen__button ${activeButton === '/program-types' ? 'active' : ''}`}
//                     onClick={() => handleButtonClick('/program-types')}
//                   >
//                     Program Types
//                   </Link>
//                   <Link
//                     to="/users"
//                     className={`home-screen__button ${activeButton === '/users' ? 'active' : ''}`}
//                     onClick={() => handleButtonClick('/users')}
//                   >
//                     Users
//                   </Link>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       )}

//       <div className={`home-screen__content ${isSidebarOpen ? 'with-sidebar' : ''}`}>
//         <Suspense fallback={<div>Loading...</div>}>
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/users" element={<Users />} />
//             <Route path="/program-types" element={<ProgramTypes />} />
//             <Route path="/rules" element={<Rules />} />
//             <Route path="/validate-content" element={<ValidateContent />} />
//             <Route path="/validate-video-content" element={<ValidateVideoContent />} />
//           </Routes>
//         </Suspense>
//       </div>
//     </div>
//   );
// }

// export default HomeScreen;


















import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Link, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { MdDashboard, MdSettings } from 'react-icons/md';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import './HomeScreen.css';

const Dashboard = lazy(() => import('./Dashboard'));
const Users = lazy(() => import('./Users'));
const ProgramTypes = lazy(() => import('./ProgramTypes'));
const Rules = lazy(() => import('./Rules'));
const ValidateContent = lazy(() => import('./ValidateContent'));
const ValidateVideoContent = lazy(() => import('./ValidateVideoContent'));

const roles = {
  SUPERADMIN: 'SuperAdmin',
  ADMIN: 'Admin',
  WRITE: 'Write',
  READ: 'Read',
};

function HomeScreen({ isSidebarOpen }) {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState(location.pathname);
  const [isValidateOpen, setIsValidateOpen] = useState(false);
  const [isManageOpen, setIsManageOpen] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedValidateState = localStorage.getItem('isValidateOpen');
    const savedManageState = localStorage.getItem('isManageOpen');
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (savedValidateState !== null) {
      setIsValidateOpen(JSON.parse(savedValidateState));
    }
    if (savedManageState !== null) {
      setIsManageOpen(JSON.parse(savedManageState));
    }
    if (userData) {
      setUserRole(userData[6]);
    }
    setLoading(false);
  }, []);

  const handleButtonClick = (path) => {
    setActiveButton(path);
  };

  const toggleValidate = () => {
    const newState = !isValidateOpen;
    setIsValidateOpen(newState);
    localStorage.setItem('isValidateOpen', JSON.stringify(newState));
  };

  const toggleManage = () => {
    const newState = !isManageOpen;
    setIsManageOpen(newState);
    localStorage.setItem('isManageOpen', JSON.stringify(newState));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home-screen">
      {isSidebarOpen && (
        <div className={`home-screen__sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
          <Link
            to="/"
            className={`header__dropdown-button_sidebar ${activeButton === '/' ? 'active' : ''}`}
            onClick={() => handleButtonClick('/')}
          >
            <MdDashboard className="sidebar-icon" />
            Dashboard
          </Link>

          <hr />
          <div className="home-screen__section">
            <button className="home-screen__section-button" onClick={toggleValidate}>
              <IoMdCheckmarkCircleOutline className="section-icon" />
              Validate <span className="icon-right">{isValidateOpen ? <BsChevronUp /> : <BsChevronDown />}</span>
            </button>
            {isValidateOpen && (
              <div className="home-screen__section-content">
                <Link
                  to="/validate-content"
                  className={`home-screen__button ${activeButton === '/validate-content' ? 'active' : ''}`}
                  onClick={() => handleButtonClick('/validate-content')}
                >
                  Validate Content
                </Link>
                <Link
                  to="/validate-video-content"
                  className={`home-screen__button ${activeButton === '/validate-video-content' ? 'active' : ''}`}
                  onClick={() => handleButtonClick('/validate-video-content')}
                >
                  Validate Video
                </Link>
              </div>
            )}
          </div>

          <hr />

          {(userRole === roles.ADMIN || userRole === roles.SUPERADMIN || userRole === roles.WRITE || userRole === roles.READ) && (
            <div className="home-screen__section">
              <button className="home-screen__section-button" onClick={toggleManage}>
                <MdSettings className="section-icon" />
                Manage <span className="icon-right">{isManageOpen ? <BsChevronUp /> : <BsChevronDown />}</span>
              </button>
              {isManageOpen && (
                <div className="home-screen__section-content">
                  <Link
                    to="/rules"
                    className={`home-screen__button ${activeButton === '/rules' ? 'active' : ''}`}
                    onClick={() => handleButtonClick('/rules')}
                  >
                    Rules
                  </Link>
                  <Link
                    to="/program-types"
                    className={`home-screen__button ${activeButton === '/program-types' ? 'active' : ''}`}
                    onClick={() => handleButtonClick('/program-types')}
                  >
                    Product Types
                  </Link>
                  <Link
                    to="/users"
                    className={`home-screen__button ${activeButton === '/users' ? 'active' : ''}`}
                    onClick={() => handleButtonClick('/users')}
                  >
                    Users
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      <div className={`home-screen__content ${isSidebarOpen ? 'with-sidebar' : ''}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/validate-content" element={<ValidateContent />} />
            <Route path="/validate-video-content" element={<ValidateVideoContent />} />
            <Route path="/rules" element={(userRole === roles.ADMIN || userRole === roles.SUPERADMIN || userRole === roles.WRITE || userRole === roles.READ) ? <Rules /> : <Navigate to="/" />} />
            <Route path="/program-types" element={(userRole === roles.ADMIN || userRole === roles.SUPERADMIN || userRole === roles.WRITE || userRole === roles.READ) ? <ProgramTypes /> : <Navigate to="/" />} />
            <Route path="/users" element={(userRole === roles.ADMIN || userRole === roles.SUPERADMIN || userRole === roles.WRITE || userRole === roles.READ) ? <Users /> : <Navigate to="/" />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default HomeScreen;


