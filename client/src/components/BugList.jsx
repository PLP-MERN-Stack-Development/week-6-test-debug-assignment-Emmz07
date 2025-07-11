import React from 'react';
import BugCard from './BugCard';

function BugList({ bugs }) {
  return (
    <div>
      <h2>Bug List</h2>
      {bugs.length === 0 ? (
        <p>No bugs found.</p>
      ) : (
        bugs.map(bug => <BugCard key={bug.id} bug={bug} />)
      )}
    </div>
  );
}

export default BugList;