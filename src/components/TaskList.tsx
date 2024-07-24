import React from 'react';
import { Task } from '../utils/types';

interface TaskListProps {
    tasks: Task[];
    onEditTask: (task: Task) => void;
    onDeleteTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onEditTask, onDeleteTask }) => {
    return (
        <div className="task-list">
            {tasks.map(task => (
                <div key={task.id} className="task p-4 mb-2 bg-lime-200 rounded shadow-md">
                    <h2 className="text-gray-700 text-xl font-semibold">{task.title}</h2>
                    <p className='text-gray-700 mt-3'>{task.description}</p>
                    <p className="text-sm text-gray-500 mt-2">Created on: {task.date}</p>
                    <div className="mt-3">
                        <button className="px-4 py-1 mr-2 bg-blue-500 text-white rounded" onClick={() => onEditTask(task)}>Edit</button>
                        <button className="px-4 py-1 bg-red-500 text-white rounded" onClick={() => onDeleteTask(task.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TaskList;