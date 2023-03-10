const { Schema, Types } = require('mongoose');

// Schema to create a reaction model
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },

        reactionBody: {
            type: String,
            required: true,
            max_length: 280,
        },

        username: {
            type: String,
            required: true,
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => new Date(createdAtVal).toLocaleDateString(),
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);



// const Reaction = model('reaction', reactionSchema);

module.exports = reactionSchema;