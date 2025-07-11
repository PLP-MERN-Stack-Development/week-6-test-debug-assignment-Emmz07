const { bugs, Bug } = require('../models/Bug');

// Bug controller

exports.getBugs = (req, res) => {
  res.json(bugs);
};

exports.createBug = (req, res) => {
  const { title, description, status } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description required' });
  }
  const bug = new Bug({ title, description, status });
  bugs.push(bug);
  res.status(201).json(bug);
};