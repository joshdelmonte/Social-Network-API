//These are the names and descriptions that we will use to generate random data for our users
const userNames = [
   
    'Xavier',
    'Yasmin',
    'Yasir',
    'Yasiru',
    'Zach',
];

thoughts = [
    "This is sad",
    "This is happy",
    "This is funny",
    "This is interesting",
    "This is boring",
    "This is exciting",
    "This is scary",
];

reactions = [
    "Crying",
    "Smiling",
    "Lauging",
    "Interested",
    "Bored",
    "Ecstatic",
    "Cowering",
];

friend = [
    
    'Xavier',
    'Yasmin',
    'Yasir',
    'Yasiru',
    'Zach',
];
//emails for each corresponding user

email = [
    'Xaviermail@gmail.com',
    'Yasminmail@gmail.com',
    'Yasirmail@gmail.com',
    'Yasirumail@gmail.com',
    'Zachmail@gmail.com',

];

const getRandomUserName = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomUser = () => {
    return {
        name: getRandomUserName(userNames),
        age: Math.floor(Math.random() * 100),   
    }
}

const getRandomThought = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomThoughts = () => {
    return {
        thoughts: getRandomThought(thoughts),
    }
}

const getRandomReaction = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomReactions = () => {
    return {
        reactions: getRandomReaction(reactions),
    }
}

const getRandomFriend = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomFriends = () => {
    return {
        friends: getRandomFriend(friend),
    }
}

const getRandomEmail = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomEmails = () => {
    return {
        email: getRandomEmail(email),
    }
}


module.exports = { getRandomUser, getRandomThoughts, getRandomReactions, getRandomFriends, getRandomEmails };


