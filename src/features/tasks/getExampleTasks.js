import axios from "axios";

export const getExampleTasks = async () => {
    const response = await axios.get("/toDo-List.react/exampleTasks.json");
    return response.data;
};