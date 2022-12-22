//These are the names and descriptions that we will use to generate random data for our users
const userNames = [
    'Adam',
    'Alex',
    'Alice',
    'Amanda',
    'Albert',
    'Amy',
    'Barbara',
    'Bob',
    'Bill',
    'Ben',
    'Bella',
    'Carol',
    'Charlie',
    'Cindy',
    'Chris',
    'Chloe',
    'David',
    'Diana',
    'Daniel',
    'Doris',
    'John',
    'Jane',
    'Jack',
    'Jeen',
    'Kharan',
    'Kuthi',
    'Kamal',
    'Kamini',
    'Linda',
    'Lily',
    'Lucy',
    'Lala',
    'Muugi',
    'Muthu',
    'Nethra',
    'Nithya',
    'Nirmala',
    'Nirmal',
    'Oscar',
    'Prishanth',
    'Praveen',
    'Prabhu',
    'Prabha',
    'Rajesh',
    'Rajini',
    'Ravi',
    'Ravindran',
    'Saravanan',
    'Sadha',
    'Sathish',
    'Sathya',
    'Tamil',
    'Tuuli',
    'Uma',
    'Umaima',
    'Uvindu',
    'Uvind',
    'Vijay',
    'Vijaya',
    'Vijayalakshmi',
    'Werner',
    'Wendy',
    'Xavier',
    'Yasmin',
    'Yasir',
    'Yasiru',
    'Yasir',
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

module.exports = { getRandomUser, getRandomThoughts };


