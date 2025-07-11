import React from 'react';

function BugCard({ bug }) {
  return (
    <div style={{ border: '1px solid #ccc', margin: '8px', padding: '8px' }}>
      <h3>{bug.title}</h3>
      <p>{bug.description}</p>
      <p>Status: {bug.status}</p>
    </div>
  );
}

export default BugCard;