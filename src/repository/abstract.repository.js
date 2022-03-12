const { getRepository } = require("typeorm");

const create = async (repository, data) => {
  try {
    const data_saved = await getRepository(repository).save(data);
    
    return data_saved;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  create,
}