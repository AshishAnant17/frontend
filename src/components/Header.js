// src/components/Header.js
import React, { useState } from "react";
import "./Header.css";

const Header = ({ onGroupingChange, onOrderingChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleGroupingChange = (e) => {
    onGroupingChange(e.target.value);
  };

  const handleOrderingChange = (e) => {
    onOrderingChange(e.target.value);
  };

  return (
    <header className="app-header">
      <div className="display-controls">
        <button
          className="display-button"
          onClick={() => setIsDropdownOpen((prev) => !prev)}
        >
          Display
        </button>
        {isDropdownOpen && (
          <div className="dropdown">
            <label>
              Grouping:
              <select onChange={handleGroupingChange} defaultValue="Status">
                <option value="Status">Status</option>
                <option value="Priority">Priority</option>
                <option value="User">User</option>
              </select>
            </label>
            <label>
              Ordering:
              <select onChange={handleOrderingChange} defaultValue="Priority">
                <option value="Priority">Priority</option>
                <option value="Title">Title</option>
              </select>
            </label>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
