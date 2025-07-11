import React, { useEffect, useState } from 'react';
import BugList from '../components/BugList';
import BugForm from '../components/BugForm';

function Home() {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    fetch('/api/bugs')
      .then(res => res.json())
      .then(data => setBugs(data));
  }, []);

  const addBug = (bug) => {
    fetch('/api/bugs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bug)
    })
      .then(res => res.json())
      .then(newBug => setBugs(prev => [...prev, newBug]));
  };

  return (
    <div>
      <BugForm onAddBug={addBug} />
      <BugList bugs={bugs} />
    </div>
  );
}

export default Home;