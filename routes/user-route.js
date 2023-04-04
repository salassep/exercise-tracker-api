import express from 'express';
import * as userController from '../controllers/user-controller.js';

const router = express.Router();

router.post('/users', userController.createUser);
router.post('/users/:_id/exercises', userController.createUserExercise);
router.get('/users/:_id/logs', userController.getUserExerciseLogs);

export default router;