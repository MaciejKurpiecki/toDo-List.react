/* import { useState, useEffect } from "react";

export const useTasks = () => {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasksArray")) || []);

    useEffect(() => {
        localStorage.setItem("tasksArray", JSON.stringify(tasks));
    }, [tasks]);

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id)
        );
    };

    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => task.id === id ? { ...task, done: !task.done } : task));
    };

    const setAllDone = () => {
        setTasks(tasks => tasks.map(task => ({
            ...task,
            done: true,
        })))
    };

    const addNewTask = (newTaskContent) => {
        setTasks(tasks => [
            ...tasks,
            {
                id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
                content: newTaskContent,
                done: false,
            },
        ]);
    };
    return {
        tasks,
        removeTask,
        toggleTaskDone,
        setAllDone,
        addNewTask
    }
};
 */