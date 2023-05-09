import { useDispatch } from 'react-redux';
import { addTask } from './../redux/actions/tasksAction';


import { useNavigation } from "@react-navigation/native";
import { StoreType } from 'src/redux/store';
import { FormTaskValues } from 'src/type';
import { useAppSelector } from "./useRedux";

const useAddTask = () => {
    const { userId, lastIndexOfTask } = useAppSelector((state: StoreType) => {
        console.log("state -<>", state);

        return {
            userId: state.auth.currentUderId,
            lastIndexOfTask: state.tasks.tasks.length
        }
    });
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const addDetailsTask = (data: FormTaskValues) => {
        console.log("::userId::", userId);

        addTask({
            title: data.title,
            description: data.body,
            status: "PENDING",
            userId,
            id: userId + "**" + lastIndexOfTask + 1
        }, dispatch)

        navigation.goBack();
    }
    return {
        addDetailsTask,
    };
};

export default useAddTask;
