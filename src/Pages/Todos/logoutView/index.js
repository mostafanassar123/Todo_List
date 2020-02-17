import React from 'react';
import "./index.css";

const LogoutView = ({ onClick }) => (
  <div className="logout-container" onClick={onClick}>
    logOut
  </div>
)

export default React.memo(LogoutView)