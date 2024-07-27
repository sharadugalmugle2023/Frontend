// import React, { useState, useEffect, useRef } from 'react';
// import './Header.css';
// import { useNavigate } from 'react-router-dom';
// import { MdPerson, MdOutlineExitToApp } from 'react-icons/md';
// import { FaUserCircle } from 'react-icons/fa';
// import { MdPersonOutline, MdPersonPin, MdPersonAdd, MdPersonRemove } from 'react-icons/md';
// import { FaUser, FaUserAlt, FaUserCheck, FaUserPlus, FaUserMinus, FaUserTie } from 'react-icons/fa';
// import { BiUser, BiUserCircle, BiUserCheck, BiUserPlus, BiUserMinus, BiUserPin } from 'react-icons/bi';
// import { HiOutlineUser, HiOutlineUserCircle, HiOutlineUserAdd, HiOutlineUserRemove } from 'react-icons/hi';
// import { FiUser, FiUserCheck, FiUserPlus, FiUserMinus } from 'react-icons/fi';
// import { FaSignOutAlt } from 'react-icons/fa';
// import { AiOutlineUser, AiFillUser } from 'react-icons/ai';
// import { RiUser3Line, RiUser3Fill, RiLogoutBoxLine, RiLogoutBoxRLine } from 'react-icons/ri';
// import { IoPersonOutline, IoPerson, IoExitOutline, IoExit } from 'react-icons/io5';
// import { CgProfile } from 'react-icons/cg';
// import { SiProfile } from 'react-icons/si';
// import { FiLogOut } from 'react-icons/fi';
// import { BiLogOut } from 'react-icons/bi';

// import MyProfile from './MyProfile';

// function Header({ toggleSidebar }) {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [showProfile, setShowProfile] = useState(false);
//   const navigate = useNavigate();
//   const headerRef = useRef(null);
//   const userId = localStorage.getItem('userId');

//   const handleUserIconClick = () => {
//     setShowDropdown(!showDropdown);
//   };

//   const handleLogout = () => {
//     fetch('/logout', {
//       method: 'GET',
//       credentials: 'include',
//     })
//       .then((response) => {
//         if (response.ok) {
//           localStorage.removeItem('userId');
//           window.location.href = `/login`;
//         } else {
//           console.error('Logout failed:', response);
//         }
//       })
//       .catch((error) => {
//         console.error('There was an error logging out', error);
//       });
//   };

//   const handleProfile = () => {
//     setShowProfile(true);
//     setShowDropdown(false);
//   };

//   const handleClickOutside = (event) => {
//     if (headerRef.current && !headerRef.current.contains(event.target)) {
//       setShowDropdown(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <header className="header" ref={headerRef}>
//       <div className="header__menu-icon" onClick={toggleSidebar}>
//         ☰
//       </div>
//       <div className="header__title">Marketing Content Validator</div>
//       <div className="header__user-icon" onClick={handleUserIconClick}>
//         Hi Sharad <MdPerson className="user-icon" />
//       </div>
//       {showDropdown && (
//         <div className="header__dropdown">
//           <button className="header__dropdown-button" onClick={handleProfile}>
//             <FaUserCircle className="dropdown-icon" />
//             My Profile
//           </button>
//           <button className="header__dropdown-button" onClick={handleLogout}>
//             <FiLogOut className="dropdown-icon" />
//             Logout
//           </button>
//         </div>
//       )}
//       {showProfile && <MyProfile userId={userId} onClose={() => setShowProfile(false)} />}
//     </header>
//   );
// }

// export default Header;























import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import { MdPerson } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

import MyProfile from './MyProfile';

function Header({ toggleSidebar }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    // Retrieve user details from local storage or API
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData && userData[1]) {
      setUserName(userData[1]);
    }
  }, []);

  const handleUserIconClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    fetch('/logout', {
      method: 'GET',
      credentials: 'include',
    })
      .then((response) => {
        if (response.ok) {
          localStorage.removeItem('userId');
          localStorage.removeItem('userData');
          window.location.href = `/login`;
        } else {
          console.error('Logout failed:', response);
        }
      })
      .catch((error) => {
        console.error('There was an error logging out', error);
      });
  };

  const handleProfile = () => {
    setShowProfile(true);
    setShowDropdown(false);
  };

  const handleClickOutside = (event) => {
    if (headerRef.current && !headerRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <div className="header__menu-icon" onClick={toggleSidebar}>
        ☰
      </div>
      <div className="header__title">Marketing Content Validator</div>
      <div className="header__user-icon" onClick={handleUserIconClick}>
        Hi {userName} <MdPerson className="user-icon" />
      </div>
      {showDropdown && (
        <div className="header__dropdown">
          <button className="header__dropdown-button" onClick={handleProfile}>
            <FaUserCircle className="dropdown-icon" />
            My Profile
          </button>
          <button className="header__dropdown-button" onClick={handleLogout}>
            <FiLogOut className="dropdown-icon" />
            Logout
          </button>
        </div>
      )}
      {showProfile && <MyProfile userId={userId} onClose={() => setShowProfile(false)} />}
    </header>
  );
}

export default Header;
