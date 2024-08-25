import mongoose, { Document, Schema } from 'mongoose';

interface ITask extends Document {
  name: string;
  description: string;
}

const taskSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
});

const Task = mongoose.model<ITask>('Task', taskSchema);

export default Task;
