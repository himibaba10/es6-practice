const person = { name: "jack William", age: 17, job: "facebooker", gfName: "Emma Watson", address: "Kochu khet", phone: "017171122", friends: ["Tom Hanks", 'Tom Cruise', 'Tom Yarn'] };

const { phone, gfName } = person;
// const phone = person.phone;


// console.log(gfName, phone);

const friends = ['Sakib Khan', 'Arman Khan', 'Amir Khan', 'Salman Khan', 'Shahrukh Khan'];
const [chotoFriend, ...olderF] = friends;
console.log(olderF);