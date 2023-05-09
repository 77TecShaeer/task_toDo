import AsyncStorage from '@react-native-community/async-storage';
import { applyMiddleware, createStore } from 'redux';
import { persistReducer ,persistStore} from 'redux-persist';

import thunk from 'redux-thunk';
import { rootReducer } from '../reducers';
import { AuthReducerType } from '../reducers/AuthReducer';
import { TasksReducerType } from '../reducers/TasksReducer';

const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
    whitelist: ['auth','tasks'],
};

interface RootState {
    auth: AuthReducerType;
    tasks: TasksReducerType;
  }
  
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

// export type StoreType = ReturnType<typeof store.getState>;
export type StoreType =RootState // ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

