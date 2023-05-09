import { taskType } from "../types"
import { AnyAction, Dispatch } from 'redux';

export interface refreshTasks {
    type: 'REFRESH_TASKS'
    refresh: boolean
}

export interface addTasks {
    type: 'ADD_TASK'
    payload: taskType
}

export interface editTasks {
    type: 'EDIT_TASK'
    payload: taskType
}
export interface deleteTasks {
    type: 'DELETE_TASK'
    payload: string
}


export interface setTasks {
    type: 'SET_NEW_TASKS'
    payload: taskType[]
}


export type ActionTasks = refreshTasks | addTasks | editTasks | deleteTasks | setTasks

export const refreshTasks = () => {
    return { type: 'REFRESH_Tasks' }
}


export const deleteTask = (id: string, dispatch: Dispatch<AnyAction>) => {
    dispatch({
        type: 'DELETE_TASK',
        payload: id,
    });
}

// export const addTask = (task: taskType, dispatch: any) => {

// }
export const addTask = (task: taskType, dispatch: Dispatch<AnyAction>): void => {
    dispatch({
        type: 'ADD_TASK',
        payload: task,
    });
};

export const editTask = (task: taskType, dispatch: Dispatch<AnyAction>) => {
    dispatch({
        type: 'EDIT_TASK',
        payload: task,
    });
}


