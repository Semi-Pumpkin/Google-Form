import React, {useState, useEffect, useDebugValue} from "react"
import InputBox from '../../src/components/InputBox';
import { useSelector, useDispatch } from "react-redux";
import {setUser} from '../../src/reducers/user';
import {useRouter} from 'next/router';
import { Form, Button, Card } from "react-bootstrap";

const Login = () => {
    const router = useRouter()
    const dispatch = useDispatch();
    const [id, setID] = useState("id");
    const [pw, setPw] = useState("password");
    const userState = useSelector(state => state.user);
    const validatedUser = useSelector(state => state.userlist);

    function search(id, pw, myArray){
        for (var i=0; i < myArray.length; i++) {
            if ((myArray[i].id === id) && (myArray[i].pw === pw)) {
                return 1
            }
        }
        return 0
    }

    const login = (e) => {  
        
        if (search(id, pw, validatedUser.userlist)) {

        var _user = {
            id: id,
            password: pw
        }  

        dispatch(setUser(_user));
        router.push('../user/googleForm');
        
        }
        else {
            alert("Wrong ID or Password");
        }
    }

    //props
    return <div>
    
       
        <InputBox text={"id"} placeholder={"id"} value={id} onTextChange={e => setID(e.target.value)}/>
        <InputBox text={"password"} placeholder={"password"} value={pw} onTextChange={e => setPw(e.target.value)}/>
       
        <div onClick={e => login(e)}>
            login
        </div>
        
    </div>
}

export default Login