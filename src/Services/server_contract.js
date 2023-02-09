import axios from "axios";

class Contracts{

    static userLogin(user,pass){
        let url='http://localhost:8000/api/auth/authorizeUser';
        let data={
            username:user,
            password:pass
        }
        let token=null;
        axios.post(url,data).then((response) => {
            token = response.data.token;
            console.log(response.data.token);
            // Utils.addToStore(token);
        });
    }
}
export default Contracts