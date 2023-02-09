/** @jsxImportSource theme-ui */


import {Button, Input} from "theme-ui";
import {useState} from "react";
import Contracts from "../../Services/server_contract";

function Login(){
    const [usernameVal,setUsernameVal]=useState('');
    const [passwordVal,setPasswordVal]=useState('');

    function setusernameFunc(e) {
        setUsernameVal(e.target.value);
    }

    function setPasswordFunc(e) {
        setPasswordVal(e.target.value);
    }

    function login() {
        Contracts.userLogin(usernameVal,passwordVal);
    }

    return (
        <div sx={{
            variant:'containers.page'
        }}>
            <div sx={{variant:'containers.floating'}} >
                <h1 sx={{
                    textAlign:'center',
                    color:'rgb(209, 205, 205)',
                    fontSize: 5,
                    fontWeight: 'bold',
                    display: 'block'
                }}>
                    Login
                </h1>
                <Input color={'primary'} autoComplete="given-name" value={usernameVal} onChange={setusernameFunc} autofillBackgroundColor="highlight" />
                <div sx={{variant:'containers.margin'}}/>
                <Input color={'primary'} autoComplete="given-name"  value={passwordVal} onChange={setPasswordFunc} autofillBackgroundColor="highlight" />
                <div sx={{variant:'containers.margin'}}/>
                <Button onClick={login}>Login</Button>
            </div>
        </div>
    );
}
export default Login;


// useEffect(() => {
//     const interval = setInterval(() => {
//         axios.get('http://localhost:8000/api/refreshToken').then(r => console.log(r.data))
//     }, 10000);
//     return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
// }, [])