import Axios from "axios";
import { API_URL } from "../../Constants.js"
class UploadService {
   uploadFile(values) {
    let data = new FormData();
    data.append("upload", values);

    return  Axios.post(`${API_URL}/ckfinder/connector?command=FileUpload&type=Files&currentFolder=/`,data,{
      headers: {
          'content-type': 'multipart/form-data'
      }
  });
  }

}
export default new UploadService();
