import Axios from "axios";
import { API_URL } from "../../Constants.js"
class EmployeeDataService {
  retrieveAllEmployees(name) {
   // console.log("executed service");
    return Axios.get(`${API_URL}/users/`);
  }
  retrieveEmployee(name,id) {
  //  console.log("executed service");
    return Axios.get(`${API_URL}/employee/find/${id}`);
  }
  deleteEmployee(username, id) {
   // console.log("executed service");
    return Axios.delete(`${API_URL}/employee/delete/${id}`);
  }
  updateEmployee(username, id,employee) {
    // console.log("executed service");
     return Axios.put(`${API_URL}/employee/update`,employee);
   }
   createEmployee(username,employee) {
    // console.log("executed service");
     return Axios.post(`${API_URL}/employee/add`,employee);
   }
}
export default new EmployeeDataService();
