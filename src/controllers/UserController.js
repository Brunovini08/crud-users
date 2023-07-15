import User from "../models/User.js";

async function getUsers(req, res) {
    const users = await User.find()
    res.status(201).json(users)
}

async function createUser(req, res) {
    const user = req.body
    const newUser = await User.create(user)
    res.status(201).send("Usuario criado com sucesso")
}

async function deleteUser(req, res) {
    const id = req.params.id
    await User.findByIdAndDelete({_id: id})
    const users = await User.find()
    res.status(200).json(users)
}

async function getUserById(req, res){
    const id = req.params.id
    const userByID = await User.findById({_id: id})
    res.status(200).json(userByID)
}

async function putUser(req, res) {
    const id = req.params.id
    const users = await User.find()
    await User.findByIdAndUpdate({_id: id}, {$set: req.body})
    res.status(200).send("Usuario modificado com sucesso")
}

export {
    getUsers,
    createUser,
    deleteUser,
    getUserById,
    putUser
}