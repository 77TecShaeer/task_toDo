import { ActionTasks } from "../actions/tasksAction";
import { taskType } from "../types";

export interface TasksReducerType {
    refresh: boolean
    tasks: taskType[]
}

const initialState = {
    refresh: false,
    tasks: []
};

const TasksReducer = (state: TasksReducerType = initialState, action: ActionTasks) => {
    const { type } = action;
    switch (type) {
        case 'REFRESH_TASKS':
            return {
                ...state,
                refresh: !state.refresh
            };

        case "ADD_TASK":
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case "SET_NEW_TASKS":
            return {
                ...state,
                tasks: action.payload
            }
        case "EDIT_TASK":
            const updatedTask = action.payload;
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === updatedTask.id) {
                        return {
                            ...task,
                            ...updatedTask
                        };
                    } else {
                        return task;
                    }
                })
            };
        case "DELETE_TASK":
            const taskIdToDelete = action.payload;
            const filteredTasks = state.tasks.filter(task => task.id !== taskIdToDelete);
            return {
                ...state,
                tasks: filteredTasks
            }

        default:
            return state;
    }
};

export default TasksReducer;
