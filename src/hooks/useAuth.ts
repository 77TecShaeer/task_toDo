import { CommonActions, useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';
import uuid from 'react-native-uuid';
import { useDispatch } from 'react-redux';
import { StoreType } from 'src/redux/store';
import { send_request_login, setCurrentUser, success_login } from '../redux/actions/loginActions';
import { FormValues } from '../screens/login/components/LoginForm/FormLogin';
import { useAppSelector } from './useRedux';

const useAuth = () => {

    const { isLoggedIn, isLoading, users } = useAppSelector((state: StoreType) => {
        console.log("Stadsadsds:,", state);

        return {
            isLoggedIn: state.auth.isLoggedin,
            isLoading: state.auth.isLoading,
            users: state.auth.users
        }
    });
    const dispatch = useDispatch()

    const navigation = useNavigation();
    const sendLogin = (data: FormValues) => {
        dispatch(send_request_login());
        setTimeout(() => {
            const filteredUsers = users.filter((user) => user.email === data.email && user.password === data.password)[0];
            if (!filteredUsers) {
                let id = uuid.v4().toString()
                dispatch(success_login({
                    email: data.email,
                    id,
                    image: "",
                    password: data.password
                }));
                dispatch(setCurrentUser(
                    id
                ));
            }
            else {
                dispatch(setCurrentUser(
                    filteredUsers.id
                ));
            }
            navigation.dispatch(
                CommonActions.reset({
                    index: 1,
                    routes: [
                        { name: 'HomeNavigator' },
                    ],
                })
            );
            showMessage({
                message: "Login success",
                type: "success",
            });

        }, 2000);
    }

    return {
        isLoggedIn,
        sendLogin,
        isLoading
    };
};

export default useAuth;
