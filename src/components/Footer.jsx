import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [current,setCurrent] = useState(new Date());
  useEffect(()=>{
    const intervalId = setInterval(() => {
      setCurrent(new Date());
  }, 1000); // Update every second

  return () => clearInterval(intervalId); 
}, []);
  return (
    <footer className="h5 text-center px-2 py-1 text-bg-dark">
       <p className="h3 text-danger">{current.toLocaleTimeString()}</p>
      <p>© {new Date().getFullYear()} Your Blog Name. All rights reserved.</p>
      <p>
        <Link to="https://www.privacypolicyonline.com/"className="text-decoration-none">Privacy Policy</Link>&nbsp;&nbsp;
       <Link to="https://mailchimp.com/resources/website-terms-of-use"className="text-decoration-none">Term and Condition</Link>
      </p>
    </footer>
  );
};

export default Footer;
