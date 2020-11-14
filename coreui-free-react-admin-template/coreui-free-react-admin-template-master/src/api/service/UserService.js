import Axios from "axios";
import { API_URL } from "../../Constants.js"
class UserDataService {
  retrieveAllUsers() {
   // console.log("executed service");
    return Axios.get(`${API_URL}/user?page=1&limit=200`);
  }
  retrieveEmployee(id) {
  //  console.log("executed service");
    return Axios.get(`${API_URL}/user/${id}`);
  }
  deleteEmployee(id) {
   // console.log("executed service");
    return Axios.delete(`${API_URL}/user`,id);
  }
  updateEmployee(user) {
    // console.log("executed service");
     return Axios.put(`${API_URL}/user`,user);
   }
   createEmployee(employee) {
    // console.log("executed service");
     return Axios.post(`${API_URL}/user`,user);
   }
}
export default new UserDataService();
