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
    createdAt: {
      type: 'timestamp',
      createDate: true,
    },
    updatedAt: {
      type: 'timestamp',
      updateDate: true,
    },
    deletedAt: {
      type: 'timestamp',
      deleteDate: true,
      nullable: true,
    },
  },
});