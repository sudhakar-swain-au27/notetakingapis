const { v4: uuidv4 } = require('uuid');

let notes = [];

class Note {
  constructor(title, content, tags = []) {
    this.id = uuidv4();
    this.title = title;
    this.content = content;
    this.tags = tags;
  }

  static create(title, content, tags) {
    const note = new Note(title, content, tags);
    notes.push(note);
    return note;
  }

  static findAll() {
    return notes;
  }

  static findById(id) {
    return notes.find(note => note.id === id);
  }

  static update(id, updatedData) {
    const note = Note.findById(id);
    if (note) {
      note.title = updatedData.title || note.title;
      note.content = updatedData.content || note.content;
      note.tags = updatedData.tags || note.tags;
      return note;
    }
    return null;
  }

  static delete(id) {
    const index = notes.findIndex(note => note.id === id);
    if (index !== -1) {
      return notes.splice(index, 1)[0];
    }
    return null;
  }

  static addTags(id, tags) {
    const note = Note.findById(id);
    if (note) {
      note.tags = [...new Set([...note.tags, ...tags])];
      return note;
    }
    return null;
  }

  static removeTags(id, tags) {
    const note = Note.findById(id);
    if (note) {
      note.tags = note.tags.filter(tag => !tags.includes(tag));
      return note;
    }
    return null;
  }

  static query(tags, operator) {
    let filteredNotes = Note.findAll();

    if (operator === 'AND') {
      filteredNotes = filteredNotes.filter(note => tags.every(tag => note.tags.includes(tag)));
    } else if (operator === 'OR') {
      filteredNotes = filteredNotes.filter(note => tags.some(tag => note.tags.includes(tag)));
    } else if (operator === 'NOT') {
      filteredNotes = filteredNotes.filter(note => !tags.some(tag => note.tags.includes(tag)));
    }

    return filteredNotes;
  }
}

module.exports = Note;
