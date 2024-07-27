// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./LoginPage.css";
// import { FaEye, FaEyeSlash } from 'react-icons/fa';  // Import eye icons
// import google from '../assets/g.svg';
// import azure from "../assets/microsoft.svg";
// import financeMarket from '../assets/finance_market_image.jpg';
// import SignUp from './SignUp'; // Import SignUp component

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [emailId, setEmailId] = useState(''); 
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);  // State for password visibility
//   const [showSignUp, setShowSignUp] = useState(false); // State to control SignUp modal

//   const handleLogin = async (e) => {
//     e.preventDefault(); // Prevent default form submission
//     try {
//       const response = await fetch(`/user-login`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email: emailId, password: password }),
//       });

//       const data = await response.json();
//       console.log('response is', data);
  
//       // Check if the response status is 200 (OK)
//       if (response.status === 200) {
//         console.log('Login successful');
//         localStorage.setItem('userId', data.userId); // Store the user ID in local storage
//         navigate('/'); // Redirect to MainComponent
//       } else {
//         // Handle login failure
//         console.error('Login failed:', data);
//         alert('Login failed. Please check your credentials and try again.');
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       alert('An error occurred during login. Please try again.');
//     }
//   };
  
//   const GooglehandleLogin = () => {
//     window.location.href = `/google-login`;
//   };

//   const AzurehandleLogin = () => {
//     window.location.href = `/azure-login`;
//   };

//   const handleSignUpClick = (e) => {
//     e.preventDefault();
//     setShowSignUp(true);
//   };

//   return (
//     <div className="login-container-signup">
//       <div className="login-left-container">
//         <form onSubmit={handleLogin} className="sign-up-login">
//           <div className="sign-up-text">
//             <h2>Sign in</h2>
//           </div>
//           <div className="login-input-label-signup">Email ID</div>
//           <input
//             className="login-email-input"
//             type="text"
//             value={emailId}
//             onChange={(e) => setEmailId(e.target.value)}
//             placeholder="Enter your email"
//           />
//           <div className="login-input-label-signup">Password</div>
//           <div className="login-password-wrapper">  {/* Wrapper for password input and icon */}
//             <input
//               className="login-password-input"
//               type={showPassword ? 'text' : 'password'}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your Password"
//             />
//             <span
//               className="login-password-toggle"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? <FaEye /> : <FaEyeSlash />}
//             </span>
//           </div>
//           <div className="password-links-login">
//             <a className="signup-link" onClick={handleSignUpClick}>Sign Up</a>
//             <a className="reset-password-link" href="#resetpassword">Reset Password</a>
//           </div>
//           <div className="button-container">
//             <div className="submit-container">
//               <button type="submit" className="submit-button-login">Login</button>
//             </div>
//             <div className="google-azure-button">
//               <div className="google-login">
//                 <img src={google} alt="Google Icon" onClick={GooglehandleLogin} />
//               </div>
//               <div className="azure-login">
//                 <img src={azure} alt="Azure Icon" onClick={AzurehandleLogin} />
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//       <div className="right-container">
//         <div className="app-heading">Market Content Validator</div>
//         <img src={financeMarket} alt="Finance Market" className="background-image" />
//       </div>
//       {showSignUp && <SignUp onClose={() => setShowSignUp(false)} />} {/* Render SignUp modal */}
//     </div>
//   );
// };

// export default LoginPage;























import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import google from '../assets/g.svg';
import azure from "../assets/microsoft.svg";
import financeMarket from '../assets/finance_market_image.jpg';
import SignUp from './SignUp';

const LoginPage = () => {
  const navigate = useNavigate();
  const [emailId, setEmailId] = useState(''); 
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/user-login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailId, password: password }),
      });

      const data = await response.json();
      console.log('response is', data);
  
      if (response.status === 200) {
        console.log('Login successful');
        localStorage.setItem('userData', JSON.stringify(data.data));
        navigate('/');
      } else {
        console.error('Login failed:', data);
        alert('Login failed. Please check your credentials and try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login. Please try again.');
    }
  };
  
  const GooglehandleLogin = () => {
    window.location.href = `/google-login`;
  };

  const AzurehandleLogin = () => {
    window.location.href = `/azure-login`;
  };

  const handleSignUpClick = (e) => {
    e.preventDefault();
    setShowSignUp(true);
  };

  return (
    <div className="login-container-signup">
      <div className="login-left-container">
        <form onSubmit={handleLogin} className="sign-up-login">
          <div className="sign-up-text">
            <h2>Sign in</h2>
          </div>
          <div className="login-input-label-signup">Email ID</div>
          <input
            className="login-email-input"
            type="text"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            placeholder="Enter your email"
          />
          <div className="login-input-label-signup">Password</div>
          <div className="login-password-wrapper">
            <input
              className="login-password-input"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
            />
            <span
              className="login-password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          <div className="password-links-login">
            <a className="signup-link" onClick={handleSignUpClick}>Sign Up</a>
            <a className="reset-password-link" href="#resetpassword">Reset Password</a>
          </div>
          <div className="button-container">
            <div className="submit-container">
              <button type="submit" className="submit-button-login">Login</button>
            </div>
            <div className="google-azure-button">
              <div className="google-login">
                <img src={google} alt="Google Icon" onClick={GooglehandleLogin} />
              </div>
              <div className="azure-login">
                <img src={azure} alt="Azure Icon" onClick={AzurehandleLogin} />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="right-container">
        <div className="app-heading">Market Content Validator</div>
        <img src={financeMarket} alt="Finance Market" className="background-image" />
      </div>
      {showSignUp && <SignUp onClose={() => setShowSignUp(false)} />}
    </div>
  );
};

export default LoginPage;
