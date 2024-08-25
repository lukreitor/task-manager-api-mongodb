import Task from '../models/task';

export const createTask = async (name: string, description: string) => {
  const task = new Task({ name, description });
  return task.save();
};

export const deleteTask = async (id: string) => {
  return Task.findByIdAndDelete(id);
};

export const getAllTasks = async () => {
  return Task.find();
};
