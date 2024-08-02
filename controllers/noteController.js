const Note = require('../models/noteModel');
const { successResponse, errorResponse } = require('../views/response');

exports.createNote = (req, res) => {
  const { title, content, tags } = req.body;
  if (!title || !content) {
    return errorResponse(res, 'Title and content are required', 400);
  }
  const note = Note.create(title, content, tags);
  return successResponse(res, note, 201);
};

exports.getAllNotes = (req, res) => {
  const notes = Note.findAll();
  return successResponse(res, notes);
};

exports.getNoteById = (req, res) => {
  const note = Note.findById(req.params.id);
  if (note) {
    return successResponse(res, note);
  }
  return errorResponse(res, 'Note not found', 404);
};

exports.updateNote = (req, res) => {
  const updatedNote = Note.update(req.params.id, req.body);
  if (updatedNote) {
    return successResponse(res, updatedNote);
  }
  return errorResponse(res, 'Note not found', 404);
};

exports.deleteNote = (req, res) => {
  const deletedNote = Note.delete(req.params.id);
  if (deletedNote) {
    return successResponse(res, deletedNote);
  }
  return errorResponse(res, 'Note not found', 404);
};

exports.addTagsToNote = (req, res) => {
  const { tags } = req.body;
  if (!tags || !Array.isArray(tags)) {
    return errorResponse(res, 'Tags must be an array', 400);
  }
  const note = Note.addTags(req.params.id, tags);
  if (note) {
    return successResponse(res, note);
  }
  return errorResponse(res, 'Note not found', 404);
};

exports.removeTagsFromNote = (req, res) => {
  const { tags } = req.body;
  if (!tags || !Array.isArray(tags)) {
    return errorResponse(res, 'Tags must be an array', 400);
  }
  const note = Note.removeTags(req.params.id, tags);
  if (note) {
    return successResponse(res, note);
  }
  return errorResponse(res, 'Note not found', 404);
};

exports.queryNotes = (req, res) => {
  const { tags, operator } = req.query;
  if (!tags || !operator) {
    return errorResponse(res, 'Tags and operator are required', 400);
  }
  const tagsArray = tags.split(',');
  if (!['AND', 'OR', 'NOT'].includes(operator)) {
    return errorResponse(res, 'Invalid operator', 400);
  }

  const notes = Note.query(tagsArray, operator);
  return successResponse(res, notes);
};
