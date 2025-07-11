import React from 'react';
import { render, screen } from '@testing-library/react';
import BugList from '../components/BugList';

describe('BugList', () => {
  it('renders no bugs message', () => {
    render(<BugList bugs={[]} />);
    expect(screen.getByText(/No bugs found/i)).toBeInTheDocument();
  });

  it('renders bug cards', () => {
    const bugs = [
      { id: 1, title: 'Bug 1', description: 'Desc 1', status: 'open' },
      { id: 2, title: 'Bug 2', description: 'Desc 2', status: 'closed' }
    ];
    render(<BugList bugs={bugs} />);
    expect(screen.getByText(/Bug 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Bug 2/i)).toBeInTheDocument();
  });
});