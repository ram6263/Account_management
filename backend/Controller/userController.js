import { asyncHandler } from "../utils/asynchandeler.js";
import { User } from "../Modal/user.modal.js";
import { ApiError } from "../utils/ApiError.js";
const registeruser = asyncHandler(async (req, res) => {
    const { name, username, password } = req.body;
    if (!name || !username || !password) {
        throw new ApiError("please fill all the fields", 400);
    }

    const existuser = await User.findOne({username});
    if (existuser) {
        throw new ApiError("user already exist", 400);
    }

    const user = await User.create({
        name,
        username,
        password

    });
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            username: user.username,
        });
    } else {
        throw new ApiError("user not created", 400);
    }

});

const authuser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        throw new ApiError("please fill all the fields", 400);
    }
    const user = await User.findOne({username});
    if (user && password == user.password) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            username: user.username,
            password: user.password,

        });
        console.log("login successful....")
    }
    else {
        throw new ApiError("INvalid username and password", 400);
    }

});

export {
    registeruser,
    authuser
}