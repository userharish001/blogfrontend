import React, { useEffect, useState } from "react";

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
        <a href="/privacy">Privacy Policy</a> |{" "}
        <a href="/terms">Terms of Service</a>
      </p>
    </footer>
  );
};

export default Footer;
