// src/App.js
import React, { useState, useEffect } from 'react';
import KanbanBoard from './components/KanbanBoard';
import Header from './components/Header';
import './App.css';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState({});
  const [grouping, setGrouping] = useState("Status");
  const [ordering, setOrdering] = useState("Priority");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        const data = await response.json();

        const usersDictionary = data.users.reduce((acc, user) => {
          acc[user.id] = user;
          return acc;
        }, {});

        setUsers(usersDictionary);
        setTickets(data.tickets);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleGroupingChange = (value) => {
    setGrouping(value);
  };

  const handleOrderingChange = (value) => {
    setOrdering(value);
  };

  return (
    <div className="app">
      <Header onGroupingChange={handleGroupingChange} onOrderingChange={handleOrderingChange} />
      <div className="content">
        <KanbanBoard tickets={tickets} users={users} grouping={grouping} ordering={ordering} />
      </div>
    </div>
  );
};

export default App;
