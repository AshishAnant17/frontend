// src/components/TicketCard.js
import React from 'react';
import './TicketCard.css';

const TicketCard = ({ ticket, user }) => {
  const priorityLabels = ["No priority", "Low", "Medium", "High", "Urgent"];
  const priorityColors = ["#ccc", "#73C990", "#f5ab35", "#e74c3c", "#e74c3c"];

  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <span className="ticket-id">{ticket.id}</span>
        <span
          className="ticket-priority-dot"
          style={{ backgroundColor: priorityColors[ticket.priority] }}
        ></span>
      </div>
      <h4>{ticket.title}</h4>
      <div className="ticket-info">
        <span className="ticket-tag">{ticket.tag.join(", ")}</span>
        <span className="ticket-priority">Priority: {priorityLabels[ticket.priority]}</span>
        {user && (
          <div className="ticket-owner">
            <img src={user.avatar || "/avatar.jpg"} alt={user.name} className="user-avatar" />
            <span>{user.name}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketCard;
