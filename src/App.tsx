import React, {useEffect} from 'react';
import './App.css';
import {useDispatch} from "react-redux";
import {useAppSelector} from "./store/hooks/redux";
import {fetchUsers} from "./store/reducers/ActionCreator";

const App = () => {
    // const dispatch = useDispatch();
    // const {users, isLoading, error} = useAppSelector(state => state.userReducer);
    //
    // useEffect(() => {
    //     dispatch(fetchUsers())
    // }, [])

    return (
        <div className="App">
            {/*{isLoading && <h1>Идет загрузка...</h1>}*/}
            {/*{error && <h1>{error}</h1>}*/}
            {/*{JSON.stringify(users, null, 2)}*/}
        </div>
    );
};

export default App;