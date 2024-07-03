import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
// import Home_v1 from "./pages/Home_v1";


const AppWrapper = () => {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, []);
  
    return (
      <>
        {!loading ? (
          <Router>
            <Routes>
          
          {/* Add other routes as needed */}
        </Routes>
  
            <ScrollToTop />
            <App />
          </Router>
        ) : (
          <Preloader />
        )}
      </>
    );
  };
  
  export default AppWrapper;