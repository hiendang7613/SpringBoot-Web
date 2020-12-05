import Axios from "axios";
import { API_URL,JPA_API_URL } from "../../Constants.js"
class DashboardService {
  getHttpTraces() {
   // console.log("executed service");
    return Axios.get(`${API_URL}/actuator/httptrace`,{headers:{Authorization:"Basic dHRwaHU6MTIzNDU2"}});
  }
  getSystemHealth() {
  //  console.log("executed service");
    return Axios.get(`${API_URL}/actuator/health`);
  }
  getSystemCpu() {
    //  console.log("executed service");
      return Axios.get(`${API_URL}/actuator/metrics/system.cpu.count`,{headers:{Authorization:"Basic dHRwaHU6MTIzNDU2"}});
    }
    getProcessUptime() {
      //  console.log("executed service");
        return Axios.get(`${API_URL}/actuator/metrics/process.uptime`);
      }

}
export default new DashboardService();
