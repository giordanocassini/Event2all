import { ChangeEvent, createContext, ReactNode, useState, useCallback, useEffect} from 'react';
import { getTasks } from '../services/auth';


interface ITasks {
    id: number;
    content: string;
    done: boolean;
}
interface ITasksContext {
    task: string;
    tasks: ITasks[];
    handleAddNewTask: (e: ChangeEvent<HTMLInputElement>) => void;
    handleAddTasks: () => void;
    handleUpdateTask: (id: number) => void;
    handleDeleteTask: (id: number) => void;
}

interface ITasksProviderProps {
    children: ReactNode;
}
export const TasksContext = createContext<ITasksContext>({} as ITasksContext);

export function TasksProvider({children}: ITasksProviderProps) {
    const [tasks, setTasks] = useState<ITasks[]>([]);
    const [task, setTask] = useState('');

    
    
    const fetchTasks = useCallback(async () => {
        const response = await getTasks(14).then((res) => {
          return res.data;
        });
    
        setTasks(response);
      }, [setTasks]);
    
      useEffect(() => {
        fetchTasks();
      }, [fetchTasks]);

    function handleAddNewTask(e: ChangeEvent<HTMLInputElement>) {
        setTask(e.target.value)
    }

    function handleAddTasks() {
        if(!task) return;
        
        const newTask = {
            id: Date.now(),
            content: task,
            done: false
        }

        setTasks(oldTask => [...oldTask, newTask]);
        localStorage.setItem('ls_tasks', JSON.stringify([...tasks, newTask]))
        setTask('');
    }

    function handleUpdateTask(id: number) {
        const updatedTask = tasks.map(task => task.id === id ? {
            ...task,
            done: !task.done
        } : task);

        setTasks(updatedTask);
        localStorage.setItem('ls_tasks', JSON.stringify(updatedTask))
    }

    function handleDeleteTask(id: number) {
        const filteredTask = tasks.filter(task => task.id !== id);

        setTasks(filteredTask);
        localStorage.setItem('ls_tasks', JSON.stringify(filteredTask))
    }

    return (
        <TasksContext.Provider value={{
            task,
            tasks,
            handleAddNewTask,
            handleAddTasks,
            handleUpdateTask,
            handleDeleteTask
        }}>
            {children}
        </TasksContext.Provider>
    );
}