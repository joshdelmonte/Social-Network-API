const connection = require('./config/connection');
const { User, Thought } = require('./models');
const { userSeedData, thoughtSeedData } = require('./seeds');

connection.on('error', (err) => err);

connection.once('open', () => {
    console.log('Connected to MDB');
});

await User.deleteMany({});

await Thought.deleteMany({});

const users = await User.create(userSeedData);

const thoughts = await Thought.create(thoughtSeedData);

for (let i = 0; i < users.length; i++) {
     // Get some random user objects using a helper function that we imported from ./data
        const randomThoughts = getRandomArrayElements(thoughts, 5);
        // Get the ids of the random thoughts
        const thoughtIds = randomThoughts.map((thought) => thought._id);
        // Update the user with the random thoughts
        await User.findOneAndUpdate(5, { thoughts: thoughtIds });
    }

    for (let i = 0; i < thoughts.length; i++) {
        // Get some random user objects using a helper function that we imported from ./data
        const randomUsers = getRandomArrayElements(users, 5);
        // Get the ids of the random users
        const userIds = randomUsers.map((user) => user._id);
        // Update the thought with the random users
        await Thought.findOneAndUpdate(5, { users: userIds });
    }

    console.table(users);
    console.log('There all done!');
    process.exit(0);

// // get all thoughts
// getAllThoughts(req, res) {
