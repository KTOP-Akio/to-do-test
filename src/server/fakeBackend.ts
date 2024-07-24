import { AxiosHeaders, AxiosResponse } from 'axios';
import { Task } from '../utils/types';

let tasks: Task[] = [
    { id: 1, title: 'First Task', description: 'This is the first task', date: '2023-07-20' },
];

export const getTasks = async (): Promise<AxiosResponse<Task[]>> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ data: tasks, status: 200, statusText: 'OK', headers: {}, config: {
            headers: new AxiosHeaders("Hello")
        } }), 500);
    });
};

export const createTask = async (task: Omit<Task, 'id'>) => {
    const newTask = { ...task, id: tasks.length + 1 };
    tasks.push(newTask);
    return new Promise((resolve) => {
        setTimeout(() => resolve({ status: 201, statusText: 'Created', headers: {}, config: {
            headers: new AxiosHeaders("Hello")
        } }), 500);
    });
};

export const updateTask = async (id: number, updatedTask: Omit<Task, 'id'>): Promise<AxiosResponse<Task>> => {
    return new Promise((resolve, reject) => {
        const index = tasks.findIndex(task => task.id === id);
        if (index === -1) {
            reject(new Error('Task not found'));
        } else {
            tasks[index] = { id, ...updatedTask };
            setTimeout(() => resolve({ data: tasks[index], status: 200, statusText: 'OK', headers: {}, config: {
            headers: new AxiosHeaders("Hello")
        } }), 500);
        }
    });
};

export const deleteTask = async (id: number): Promise<AxiosResponse<void>> => {
    return new Promise((resolve, reject) => {
        const index = tasks.findIndex(task => task.id === id);
        if (index === -1) {
            reject(new Error('Task not found'));
        } else {
            tasks.splice(index, 1);
            setTimeout(() => resolve({ data: undefined, status: 204, statusText: 'No Content', headers: {}, config: {
            headers: new AxiosHeaders("Hello")
        } }), 500);
        }
    });
};