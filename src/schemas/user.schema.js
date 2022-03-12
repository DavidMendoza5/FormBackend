const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
  name: 'users_test_david',
  columns: {
    id: {
      type: 'uuid',
      primary: true,
      generated: 'uuid',
    },
    name: {
      type: String,
    },
    secondname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    secondlastname: {
      type: String,
    },
    birthdate: {
      type: String,
    },
    email: {
      type: String,
    },
    phonenumber: {
      type: String,
    },
  }
});