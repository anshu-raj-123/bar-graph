import {  useState} from 'react';
import { Bar } from "react-chartjs-2";
import {Chart, registerables} from "chart.js";
import './App.css';
Chart.register(...registerables);

function App() {
  const [report, setReport] = useState(true);
  const [action, setAction] = useState(false);
  const [table, setTable] =  useState(false);
  const [admini, setAdmini ] = useState(false);


  const userAction = () => {
    setAction(true);
  }
  const administrator =(e) => {
    if(e.target.value === "reports"){
      setReport(true)
    }
    else if(e.target.value === "administrator"){
      setReport(false);
      setTable(false);
      setAdmini(true);
    }
  }

  const tableItems =[];

  for(let i=0; i<12; i++){
    tableItems.push(<tr key={i}>
      <td><input type="checkbox" name="" id="" /></td>
      <td>Vishwas Tripathi</td>
      <td>vishwas.tripathi2@gmail.com</td>
      <td>New</td>
      <td>01/08/2022 13:22:20</td>
      <td>_vois I</td>
      <td>Ahmedabad</td>
      <td>C:/ProgramData/Adobe/ARM/(DF:2043535)</td>
    </tr>)
  }


  const barClick =() =>{
      setAction(false);
      setTable(true);
  }


  return (


    <>
      {/* <div> */}
      <div className="logo-title">
        <span className="first-title">_VOIS   </span>
        <span className="first-title2"> Shield Alert Management System</span>
      </div>
      <div className="sec-title">
        <p>Jay </p>
      </div>

      <div className="select-1">
        <select onChange={ administrator}>
          <option value="reports">Reports</option>
          <option value="administrator" > Administrator</option>

        </select>
      </div>
      {report ? <>
        <nav className="navbar-bg background">
          <ul className="nav-list">


            <li onClick={userAction}>User Action Logs</li>
            <li><a href="#High Risk-User Action Blocked">High Risk-User Action Blocked</a></li>
            <li><a href="#Portable Application Count">Portable Application Count</a></li>
            <li><a href='#Highlight Repeat Instances'>Highlight Repeat Instances</a></li>
            <li><a href='#Alert Category Notification'>Alert Category Notification</a></li>

            <li><a href='#Action Taken on Alert'>Action Taken on Alert</a></li>
            <li><a href='#Exceptional Users'>Exceptional Users</a></li>
            <li><a href='#Removed Portable Application Count'>Removed Portable Application Count</a></li>
            <li><a href='#_VOIS Location Dashboard'>_VOIS Location Dashboard</a></li>
            <li><a href='#False Positive Alarms Dashboard'>False Positive Alarms Dashboard</a></li>
            {/* <li><a href='#Pending Closure Dashboard'>Pending Closure Dashboard</a></li>
            <li><a href='#Service Status'>Service Status</a></li>
            <li><a href='#Machine Profile Log Report'>Machine Profile Log Report</a></li> */}



          </ul>
          

        </nav>

      </> : ' '}
      {action ? <>
            <div className='bar-graph'>
              <div className='bar-title' >User Action Logs Dashboard</div>
              <section>
                <div className='button-bar'>
                    <span>Operating Center:</span>
                    <select>
                      <option>_VOIS I</option>
                      <option>_VOIS E</option>
                      <option>_VOIS A</option>
                      <option>_VOIS O</option>
                    </select>
                    <span>Location:</span>
                    <select>
                      <option>All</option>
                      <option>pune</option>
                      <option>banglore</option>
                      <option>ahmedabad</option>
                    </select>
                    <button>Filter</button>
                    <button>Clear</button>
                </div>
              </section>
              <div onClick={barClick} style={{ maxWidth: "650px" ,margin:"0 auto"}}>
                <Bar
                  data={{
                    labels: ["1st bar", "2nd bar", "3rd bar", "4th bar"],
                    datasets: [
                      {
                        label: "total count/value",
                        data: [1552, 1319, 613, 1400],
                        backgroundColor: ["aqua", "green", "red", "yellow"],
                        borderColor: ["aqua", "green", "red", "yellow"],
                        borderWidth: 0.5,
                      },
                    ],
                  }}
                  height={400}
                  options={{
                    maintainAspectRatio: false,
                    scales: {
                      yAxes: [
                        {
                          ticks: {
                            beginAtZero: true,
                          },
                        },
                      ],
                    },
                    legend: {
                      labels: {
                        fontSize: 15,
                      },
                    },
                  }}
                />
              </div>
            </div>
          </> :' '}
            {
              table? <div className="table">
              <table>
                <tr>
                  <th><input type="checkbox" name="" id="" /></th>
                  <th>Employee Name <input type="text" placeholder='Search Employee Name' /></th>
                  <th>Employee Email <input type="text"  placeholder='Search Employee Email'/></th>
                  <th>Action status <input type="text" placeholder='New' /></th>
                  <th>Action Taken <input type="text" placeholder='Search Action Taken' /></th>
                  <th>Operating Center</th>
                  <th>Location <input type="text" placeholder='Search Location' /></th>
                  <th>Old Directory <input type="text" placeholder='Search Old Directory' /></th>



                </tr>
                  {tableItems}

              </table>


          </div>:' '
            }
          {admini? <div className='admini'>
              <ul className='admini-list'>
                <li>Manage User</li>
                <li>Exceptional Users Configuration</li>
                <li>Folder Configuration</li>
                <li>High risk software configuration</li>
              </ul>
          </div>: ' '}
    </>
  )
}

export default App;
