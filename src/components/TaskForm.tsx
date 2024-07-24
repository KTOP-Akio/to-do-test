import React, { useState, useEffect } from 'react';
import { Task } from '../utils/types';

interface TaskFormProps {
    onAddTask: (task: Omit<Task, 'id'>) => void;
    selectedTask: Task | null;
    onUpdateTask: (id: number, updatedTask: Omit<Task, 'id'>) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask, selectedTask, onUpdateTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    useEffect(() => {
        if (selectedTask) {
            setTitle(selectedTask.title);
            setDescription(selectedTask.description);
            setDate(selectedTask.date);
        } else {
            setTitle('');
            setDescription('');
            setDate('');
        }
    }, [selectedTask]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedTask) {
            onUpdateTask(selectedTask.id, { title, description, date });
        } else {
            onAddTask({ title, description, date });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="task-form mb-4 p-4 bg-rose-200 rounded shadow-md">
            <div className="mb-2">
                <label className="block text-gray-700">Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 border rounded" required />
            </div>
            <div className="mb-2">
                <label className="block text-gray-700">Description</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-2 border rounded" required />
            </div>
            <div className="mb-2">
                <label className="block text-gray-700">Date</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-2 border rounded" required />
            </div>
            <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
                {selectedTask ? 'Update Task' : 'Add Task'}
            </button>
        </form>
    );
};

export default TaskForm;