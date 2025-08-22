import express from 'express';
<<<<<<< HEAD
import { isAuthenticated, login, logout, register, resetPassword, sendRestOtp, sendVerifyOtp, verifyEmail } from '../controllers/authController.js';
=======
import { isAuthenticated, login, logout, register, sendVerifyOtp, verifyEmail } from '../controllers/authController.js';
>>>>>>> 6ced185ca2c73f2676c03c3db3a04f19fe01fb97
import userAuth from '../middleware/userAuth.js';

const authRouter = express.Router();

authRouter.post('/register',register);
authRouter.post('/login',login);
authRouter.post('/logout',logout);
authRouter.post('/send-verify-otp',userAuth, sendVerifyOtp);
authRouter.post('/verify-account',userAuth, verifyEmail);
authRouter.post('/is-auth',userAuth, isAuthenticated);
<<<<<<< HEAD
authRouter.post('/send-reset-otp',sendRestOtp);
authRouter.post('/reset-password',resetPassword);
=======
>>>>>>> 6ced185ca2c73f2676c03c3db3a04f19fe01fb97

export default authRouter;
