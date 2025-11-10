import axios from "axios";
const axiosInstance=axios.create({
    // baseURL:"http://127.0.0.1:5001/clone-65e67/us-central1/api"
    baseURL:"https://amazon-clone-2poq.onrender.com"
})
export{axiosInstance};