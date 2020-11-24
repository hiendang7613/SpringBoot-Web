import Axios from "axios";
import { API_URL } from "../../Constants.js"
class CategoryService {
   retrieveAllCategories() {

   const data =  Axios.get(`${API_URL}/category`);
    return data;
  }
  retrieveCategory(id) {

    return Axios.get(`${API_URL}/category/${id}`);
  }
  deleteCategory(id) {
    return Axios.delete(`${API_URL}/category/${id}`);
  }
  updateCategory(id,category) {

     return Axios.put(`${API_URL}/category/${id}`,category);
   }
   createCategory(category) {

     return Axios.post(`${API_URL}/category`,category);
   }
}
export default new CategoryService();
