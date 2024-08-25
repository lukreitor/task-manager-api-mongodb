
import { Router } from 'express';
import {
  createTaskController,
  deleteTaskController,
  getAllTasksController,
} from '../controllers/taskController';

const router = Router();

router.post('/tasks', createTaskController);
router.delete('/tasks/:id', deleteTaskController);
router.get('/tasks', getAllTasksController);

export default router;
