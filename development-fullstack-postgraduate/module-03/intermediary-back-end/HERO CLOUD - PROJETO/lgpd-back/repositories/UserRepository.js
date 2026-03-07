import User from "../models/User.js";

//1- save user
const saveUser = async (UserModel) => {
  const save = await User.create(UserModel);
  return save;
}

//2- get all users
const getAllUsers = async () => {
  return await User.findAll({
    order: [
      ['id', 'ASC']
    ]
  });
};

//3- get by id
const getUserById = async (id) => {
  return await User.findByPk(id); //primary key
};

//4- delete by id
const deleteUserById = async (id) => {
  return await User.destroy({ where: { id: id } });
  //first is the database attribute, second is the function parameter
};

//5- update by id
const updateUserById = async (id, UserModel) => {
  try {
    const result = await User.update(UserModel, { where: { id: id } });
    //first is the database attribute, second is the function parameter
    if (result[0] === 1) {
      return { message: "User updated with success" };
    } else {
      return { message: `Can't find User ${id} to update`, status: 404 };
    }
  } catch (error) {
    return error;
  }
};

const factory = {
  saveUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById
};


export default factory;