import Axios from "axios";
import { API_URL } from "../../Constants.js"
class CommentService {
   retrieveAllComment() {

   const data =  Axios.get(`${API_URL}/comment?page=1&limit=200`);
    return data;
  }
  retrieveComment(id) {

    return Axios.get(`${API_URL}/comment/${id}`);
  }
  deleteComment(id) {
    return Axios.delete(`${API_URL}/comment/${id}`);
  }
  updateCommenty(id,comment) {

     return Axios.put(`${API_URL}/comment/${id}`,comment);
   }
   createComment(comment) {

     return Axios.post(`${API_URL}/comment`,comment);
   }
}
export default new CommentService();
