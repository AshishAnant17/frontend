import React from 'react';
import './Card.css';

const Card = ({ ticket, users }) => {
  const user = users.find((u) => u.id === ticket.userId);
  return (
    <div className="card">
      <h3>{ticket.title}</h3>
      <div className="card-details">
        <span className="card-tag">{ticket.tag.join(', ')}</span>
        <div className="card-user">
          {user ? <img src={`https://randomuser.me/api/portraits/men/${user.id}.jpg`} alt={user.name} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Card;
