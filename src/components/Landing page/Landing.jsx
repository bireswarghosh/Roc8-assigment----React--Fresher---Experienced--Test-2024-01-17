import "./Landing.css";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from 'react-router-dom';



function Landing() {

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/result');
  };

  return (
    <>

{/* <div className="container5" onClick={handleRedirect}> */}

      <div className="container5">
        {/* JSX content in your React component */}
        <div className="border-box8">
          <span className="homepage-label">Homepage</span>
          <div className="auth-links">
            <span className="login8">Login</span>
            <span className="create-account8">Create Account</span>
          </div>
        </div>

        <div className="text8">
          Discover over 2,000,000
          <div>free Stock Images</div>
        </div>

        <div className="search8">
          <span>
            <SearchIcon />
          </span>
          <input
           onClick={handleRedirect}
          type="text" className="input" placeholder="Search..." />
        </div>

        <div className="Trending8">
          <strong>Trending:</strong> flowers, love, forest, river
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Landing;
