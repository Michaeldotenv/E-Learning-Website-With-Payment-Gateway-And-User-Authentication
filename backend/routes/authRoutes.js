import express from 'express';

import {signin , signout, signup, verifyEmail, forgotPassword, resetPassword, checkAuth} from '../controllers/authcontroller.js'
import { verifyToken } from '../middleware/verifytoken.js';
import { verifyAdminToken } from '../middleware/verifyAdminToken.js';

const router = express.Router()


  router.get('check-course-ownership', verifyAdminToken, checkAuth)
  router.get('/check-auth', verifyToken, checkAuth);
  router.post('/signup', signup);
  router.post('/signin', signin);
  router.post('/signout', signout);
  router.post('/verify-email', verifyEmail);
  router.post('/forgot-password', forgotPassword);
  router.post('/reset-password/:token', resetPassword);

  export default router