import React, { useEffect, useState } from 'react';
import { useAccount, useBalance } from 'wagmi';
import './App.scss';
import { getTasks, createTask, updateTask, deleteTask } from './server/fakeBackend';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { Task } from './utils/types';
import ContractIntegration from './components/ContractIntegration';
import { formatUnits } from 'viem';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const { address, isConnected } = useAccount();
  const { data } = useBalance({
    address,    
  });

  const loadTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.data);
    } catch (error) {
      console.error('Error loading tasks', error);
    }
  };

  const handleAddTask = async (task: Omit<Task, 'id'>) => {
    try {
      setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
      await createTask(task);
    } catch (error) {
      console.error('Error adding task', error);
    }
  };

  const handleUpdateTask = async (id: number, updatedTask: Omit<Task, 'id'>) => {
    try {
      const response = await updateTask(id, updatedTask);
      setTasks(tasks.map(task => (task.id === id ? response.data : task)));
      setSelectedTask(null);
    } catch (error) {
      console.error('Error updating task', error);
    }
  };

  const handleDeleteTask = async (id: number) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      console.error('Error deleting task', error);
    }
  };
  
  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="app container mx-auto p-4">
      <div className='mb-4 flex justify-between items-center'>
        <h1 className="text-2xl font-bold">To-Do List</h1>
        <w3m-button />
      </div>
      {isConnected &&
        <div className='absolute top-[100px] right-[100px] w-[300px] h-[200px] rounded-2xl bg-violet-200 flex flex-col'>
          <div className='w-full h-[40px] bg-violet-500 rounded-t-2xl flex items-center justify-between px-4 text-gray-100'>
            <h1 className="text-lg font-bold">Live</h1>
            <ContractIntegration />
          </div>
          <div className='w-full h-full flex flex-col gap-3 justify-center items-start px-8'>
            <div className='flex items-center gap-4'>
              <h1 className="text-lg font-bold text-gray-700">Balance:</h1>
              <span className='text-gray-900'>{data ? formatUnits(data.value, 9) : '0'}</span>
            </div>
            <div className='flex items-center gap-4'>
              <h1 className="text-lg font-bold text-gray-700">Address:</h1>
              <span className='text-gray-900'>{address?.substring(0, 4) + "..." + address?.substring(address?.length - 6)}</span>
            </div>
          </div>
        </div>
      }
      <TaskForm onAddTask={handleAddTask} selectedTask={selectedTask} onUpdateTask={handleUpdateTask}  />
      <TaskList tasks={tasks} onEditTask={setSelectedTask} onDeleteTask={handleDeleteTask} />
    </div>
  );
};

export default App;