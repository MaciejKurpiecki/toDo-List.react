export const getExampleTasks = async () => {
    const response = fetch("/toDo-List.react/exampleTasks.json");

    if (!response.ok) {
        new Error(response.statusText);
    }
    return (await response).json();
}