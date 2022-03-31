const User = require('../schemas/user.schema');
const { create } = require('../repository/abstract.repository');

const createUser = async (req,res) => {
  try {
    const user = {
      name: req.body.name,
      secondname: req.body.second_name,
      lastname: req.body.lastname,
      secondlastname:req.body.second_lastname,
      birthdate: req.body.birthdate,
      email: req.body.email,
      phonenumber: req.body.phone_number,
    };

    const user_created = await create(User, user);
    res.status(201).send({user: user_created, message: 'User created'});
  } catch(err) {
      res.status(500).send({ message: err.message });
  }
};

module.exports = {
  createUser,
}