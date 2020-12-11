import Axios from "axios";
import { API_URL } from "../../Constants.js"
class NewService {
   retrieveAllNews() {
   // console.log("executed service");
   const data =  Axios.get(`${API_URL}/new?page=1&limit=200`);
    return data;
  }
  retrieveAllNewsWithStatus(page,limit,status) {
    // console.log("executed service");
    const data =  Axios.get(`${API_URL}/new?page=${page}&limit=${limit}&status=${status}`);
     return data;
   }
   retrieveAllNewsWithCategory(page,limit,status) {
    // console.log("executed service");
    const data =  Axios.get(`${API_URL}/new/category?page=${page}&limit=${limit}&status=${status}`);
     return data;
   }
  retrieveNew(id) {
  //  console.log("executed service");
    return Axios.get(`${API_URL}/new/${id}`);
  }
  deleteNew(id) {
   // console.log("executed service");
    return Axios.delete(`${API_URL}/new/${id}`);
  }
  updateNew(id,todo) {
    // console.log("executed service");
     return Axios.put(`${API_URL}/new/${id}`,todo);
   }
   createNew(todo) {
    // console.log("executed service");
     return Axios.post(`${API_URL}/new`,todo);
   }
}
export default new NewService();
