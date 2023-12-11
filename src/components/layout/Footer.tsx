import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer animate-fadeInUp">
      <div className="layout flex items-center justify-center">
        <a
          href="/"
          className="text-center text-footer text-sm sm:text-sm lg:text-sm"
        >
          © baihaqism {currentYear}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
