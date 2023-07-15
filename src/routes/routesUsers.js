import { Router } from "express";
import { getUsers, createUser, deleteUser, getUserById, putUser } from "../controllers/UserController.js";

const routesUsers = Router()

routesUsers.get('/users', getUsers)
routesUsers.post('/users', createUser)
routesUsers.get('/users/:id', getUserById)
routesUsers.delete('/users/:id', deleteUser)
routesUsers.put('/users/:id', putUser)

export default routesUsers