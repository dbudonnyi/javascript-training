const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

// eslint-disable-next-line no-restricted-syntax
for (const key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}
