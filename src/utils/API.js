/* eslint-disable import/no-anonymous-default-export */

// Including program component axios
import axios from "axios";

export default
{
    getRandomList: function()
    {
        // To get a random list of users
        return axios.get("https://randomuser.me/api/?results=25&nat=us,gb,fr&seed=Zo");
    },

    getRandomNational: function(nationCode)
    {   
        // To get national data 
        return axios.get(`https://randomuser.me/api/?results=10&nat=${nationCode}&seed=abc`);
    }
}