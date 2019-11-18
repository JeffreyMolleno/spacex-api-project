import axios from 'axios';

let res = {};

export default function GetAPI(location) {
    return axios.get(`https://api.spacexdata.com/v3/${location}`)
                .then(datas=> datas.data)
                .catch(e=>alert(e));
}
