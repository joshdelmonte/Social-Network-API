const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
// Schema to create a thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      //must be between 1 and 280 characters
        min_length: 1, 
        max_length: 280,
    },
    createdAt: {
      //Date
      //* Set default value to the current timestamp
        // * Use a getter method to format the timestamp on query
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal),
        get: (createdAtVal) => new Date(createdAtVal).toLocaleDateString(),
      
    },
   
    username: {
        type: String,
        required: true,
  },
    reactions: [reactionSchema],
    },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Thought = model('thoughts', thoughtSchema);

module.exports = Thought;
