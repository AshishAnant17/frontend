// src/components/KanbanBoard.js
import React from 'react';
import TicketCard from './TicketCard';
import './KanbanBoard.css';

const KanbanBoard = ({ tickets, users, grouping, ordering }) => {
  // Define priority labels and colors
  const priorityLabels = ["No priority", "Low", "Medium", "High", "Urgent"];
  const priorityColors = ["#ccc", "#73C990", "#f5ab35", "#e74c3c", "#e74c3c"];

  // Group tickets based on the specified key
  const groupBy = (tickets, key) => {
    return tickets.reduce((acc, ticket) => {
      let groupKey;

      // Check if grouping is by priority and get the corresponding label
      if (key === 'priority') {
        groupKey = priorityLabels[ticket.priority] || "No priority"; // Map priority number to label
      } else {
        groupKey = ticket[key] || "Todo"; // Group by other keys (e.g., status)
      }

      if (!acc[groupKey]) acc[groupKey] = [];
      acc[groupKey].push(ticket);
      return acc;
    }, {});
  };

  // Sort tickets based on the specified ordering
  const sortBy = (a, b, ordering) => {
    if (ordering === "Priority") {
      return b.priority - a.priority; // Sort by priority
    }
    if (ordering === "Title") {
      return a.title.localeCompare(b.title); // Sort by title
    }
    return 0;
  };

  // Group tickets based on the grouping parameter
  const groupedTickets = groupBy(tickets, grouping.toLowerCase());

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((group) => {
        // Determine the priority index from the group name
        const priorityIndex = priorityLabels.indexOf(group);
        const priorityColor = priorityIndex !== -1 ? priorityColors[priorityIndex] : "#f5f5f5"; // Default to light gray for non-priority groups

        return (
          <div className="kanban-column" key={group}>
            <h3 style={{ backgroundColor: priorityColor, color: "#111", padding: "5px", borderRadius: "4px" }}>
              {group}
            </h3>
            {groupedTickets[group]
              .sort((a, b) => sortBy(a, b, ordering))
              .map((ticket) => (
                <TicketCard 
                  key={ticket.id} 
                  ticket={ticket} 
                  user={users[ticket.userId]} 
                />
              ))}
          </div>
        );
      })}
    </div>
  );
};

export default KanbanBoard;
