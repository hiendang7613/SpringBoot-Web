import React from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CProgress
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useState,useEffect} from 'react'
import DashboardService from '../api/service/DashboardService.js'
const TheHeaderDropdownNotif = () => {
  const [systemCpu, setSystemCpu] = useState();
  const [systemHealth, setSystemHealth] = useState();
  const [processUptime, setProcessUptime] = useState();
  let timeStamp;
  const itemsCount = 5
  useEffect(() => {
    getCpuUsage();
    getSystemHealth();
    getProcessUptime(true);
  },[])

  function getCpuUsage(){
    DashboardService.getSystemCpu().then((response) => {

     setSystemCpu(response.data);

    })
    .catch((err)=>{
      alert("Get CPU usage error");
    });
  }
  function getSystemHealth(){
    DashboardService.getSystemHealth().then((response) => {
      setSystemHealth(response.data);
    })
    .catch((err)=>{
      alert("Get system health error");
    });
  }


  function getProcessUptime(autoruntime){
    DashboardService.getProcessUptime().then((response) => {

      timeStamp=response.data.measurements[0].value;
      setProcessUptime(formateUptime(timeStamp));
      if(autoruntime){
        updateTime()
      }
    })
    .catch((err)=>{
      alert("Get process uptime error");
    });
  }
  function updateTime() {
    setInterval(() => {
      setProcessUptime(formateUptime(timeStamp+1));
      timeStamp++;
    }, 1000);
  }

  function formateUptime(timestamp) {
    const hours = Math.floor(timestamp / 60 / 60);
    const minutes = Math.floor(timestamp / 60) - (hours * 60);
    const seconds = Math.floor(timestamp % 60);
    return hours.toString().padStart(2, '0') + 'h' +
    minutes.toString().padStart(2, '0') + 'm' + seconds.toString().padStart(2, '0') + 's';
  }
  function formatBytes(bytes){
    if (bytes === 0) {
       return '0 Bytes';
      }
    const k = 1024;
    const dm = 2 < 0 ? 0 : 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
  return (
    <CDropdown
      inNav
      className="c-header-nav-item mx-2"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <CIcon name="cil-bell"/>
        <CBadge shape="pill" color="danger">{itemsCount}</CBadge>
      </CDropdownToggle>
      <CDropdownMenu  placement="bottom-end" className="pt-0">
        <CDropdownItem
          header
          tag="div"
          className="text-center"
          color="light"
        >
          <strong>You have {itemsCount} notifications</strong>
        </CDropdownItem>
        {/* <CDropdownItem><CIcon name="cil-user-follow" className="mr-2 text-success" /> New user registered</CDropdownItem>
        <CDropdownItem><CIcon name="cil-user-unfollow" className="mr-2 text-danger" /> User deleted</CDropdownItem>
        <CDropdownItem><CIcon name="cil-chart-pie" className="mr-2 text-info" /> Sales report is ready</CDropdownItem>
        <CDropdownItem><CIcon name="cil-basket" className="mr-2 text-primary" /> New client</CDropdownItem>
        <CDropdownItem><CIcon name="cil-speedometer" className="mr-2 text-warning" /> Server overloaded</CDropdownItem>
        <CDropdownItem
          header
          tag="div"
          color="light"
        >
          <strong>Server</strong>
        </CDropdownItem> */}
        <CDropdownItem className="d-block">
          <div className="text-uppercase mb-1">
            <small><b>CPU Usage</b></small>
          </div>
          <CProgress size="xs" color="info" value={100} />
           <small className="text-muted">{systemCpu&&systemCpu.measurements[0].value} Processes.</small>
        </CDropdownItem>
        {/* <CDropdownItem className="d-block">
          <div className="text-uppercase mb-1">
            <small><b>Memory Usage</b></small>
          </div>
          <CProgress size="xs" color="warning" value={systemHealth&&100-(systemHealth.components.diskSpace.details.free*100/systemHealth.components.diskSpace.details.total)} />
          <small className="text-muted">{systemHealth&&formatBytes(systemHealth.components.diskSpace.details.free)}/{systemHealth&&formatBytes(systemHealth.components.diskSpace.details.total)}</small>
        </CDropdownItem> */}
        <CDropdownItem className="d-block">
          <div className="text-uppercase mb-1">
            <small><b>SSD 1 Usage</b></small>
          </div>
          <CProgress size="xs" color="danger" value={systemHealth&&100-(systemHealth.components.diskSpace.details.free*100/systemHealth.components.diskSpace.details.total)} />
          <small className="text-muted">{systemHealth&&formatBytes(systemHealth.components.diskSpace.details.free)}/{systemHealth&&formatBytes(systemHealth.components.diskSpace.details.total)}</small>
        </CDropdownItem>
        <CDropdownItem className="d-block">
          <div className="text-uppercase mb-1">
            <small><b>DB</b></small>
          </div>

  <small className="text-muted">{systemHealth&&`${(systemHealth.components.db.details.database)}-${(systemHealth.components.db.status)}`}</small>
        </CDropdownItem>
        <CDropdownItem className="d-block">
          <div className="text-uppercase mb-1">
            <small><b>Uptime</b></small>
          </div>

  <small className="text-muted">{processUptime}</small>
        </CDropdownItem>

      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdownNotif
