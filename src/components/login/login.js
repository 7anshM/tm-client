/** @jsxImportSource theme-ui */


import {Input} from "theme-ui";

function Login(){
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
                <Input sx={{margin:'0px 20px 0 20px'}} color={'primary'} autoComplete="given-name" autofillBackgroundColor="highlight" />
                <Input autoComplete="given-name" autofillBackgroundColor="highlight" />
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