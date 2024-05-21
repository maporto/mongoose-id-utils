'use strict';

var mongoose = require('mongoose');

const ObjectIdRegex = /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i;

function isObjectId(value) {
  if (typeof value === 'string') {
    return ObjectIdRegex.test(value)
  }

  if (value instanceof mongoose.Types.ObjectId) {
    return true
  }

  return false
}

function extractIdString(field) {
  if (!field) {
    return null
  }

  if (isObjectId(field)) {
    if (typeof field === 'string') {
      return field.toString()
    }

    if (field instanceof mongoose.Types.ObjectId) {
      return field.toString()
    }
  } else {
    if (typeof field === 'object' && '_id' in field) {
      return extractIdString(field._id)
    }
  }

  return null
}

function extractIdObjectId(field) {
  if (!field) {
    return null
  }

  if (isObjectId(field)) {
    if (typeof field === 'string') {
      return new mongoose.Types.ObjectId(field.toString())
    }

    if (field instanceof mongoose.Types.ObjectId) {
      return field
    }
  } else {
    if (typeof field === 'object' && '_id' in field) {
      return extractIdObjectId(field._id)
    }
  }

  return null
}

exports.ObjectIdRegex = ObjectIdRegex;
exports.extractIdObjectId = extractIdObjectId;
exports.extractIdString = extractIdString;
exports.isObjectId = isObjectId;
