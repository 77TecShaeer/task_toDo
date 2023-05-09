import { AuthReducerType } from "./redux/reducers/AuthReducer";

declare module '@env' {
    export const BASE_URL: string;

    // other ones
}

type FormTaskValues = {
    title: string;
    body: string;
};