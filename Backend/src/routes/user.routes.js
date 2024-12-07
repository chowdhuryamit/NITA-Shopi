import {Router} from "express"
import { loginUser, registerUser,logoutUser, forgotPassword } from "../controllers/user.controller.js"

const router=Router()


router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").post(logoutUser)
router.route("/forgotPassword").put(forgotPassword)

export default router