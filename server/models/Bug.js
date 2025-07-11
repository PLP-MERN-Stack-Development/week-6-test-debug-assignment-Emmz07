// Simple in-memory Bug model
let bugs = [];
let nextId = 1;

class Bug {
  constructor({ title, description, status }) {
    this.id = nextId++;
    this.title = title;
    this.description = description;
    this.status = status || 'open';
  }
}

module.exports = { bugs, Bug };