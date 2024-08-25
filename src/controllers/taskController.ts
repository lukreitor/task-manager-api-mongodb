import { Request, Response } from 'express';
import { createTask, deleteTask, getAllTasks } from '../services/taskService';

export const createTaskController = async (req: Request, res: Response) => {
  const { name, description } = req.body;
  try {
    const task = await createTask(name, description);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar tarefa' });
  }
};

export const deleteTaskController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await deleteTask(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar tarefa' });
  }
};

export const getAllTasksController = async (req: Request, res: Response) => {
  try {
    const tasks = await getAllTasks();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar tarefas' });
  }
};
