const { Schema, model } = require('mongoose');
// const assignmentSchema = require('./Assignment');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      max_length: 50,
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      //must be valid email address here via Mongooses built in validator
        match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    thoughts: {
      // Array of `_id` values referencing the `Thought` model
        type: Schema.Types.ObjectId,
        ref: 'Thought',
  },
    friends: {
      // Array of `_id` values referencing the `User` model (self-reference)
        type: Schema.Types.ObjectId,
        ref: 'User',
  },
},
);

const User = model('user', userSchema);

module.exports = User;