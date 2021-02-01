/* eslint-disable import/no-anonymous-default-export */
//eslint-disable-next-line

// Setting up API data for APP
import axios from "axios";

export default{
    getRandomList: function()
    {
        // My unique Api Key to seed random users
        return axios.get("https://randomuser.me/api/?results=100&nat=us,gb,fr&seed=Zo");
    },

    getRandomNational: function(nationCode)
    {
        // Shows the USA, UK, and France
        return axios.get(`https://randomuser.me/api/?results=10&nat=${nationCode}&seed=abc`);
    }
}