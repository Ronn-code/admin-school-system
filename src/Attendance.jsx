import './attendance.css'
import {Link} from 'react-router-dom';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 42 },
  { name: 'Group B', value: 14 },
  { name: 'Group C', value: 8 },
];

const COLORS = ['#4caf50', '#ff9800', '#f44336'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function Attendance() {
  return (
    <fieldset className="attendance-page">
        <div className="topper">
            <h2>Attendance Report 2025- All Classes</h2>
            <Link to='/'>
            <button id='back-btn'>Home</button></Link>
        </div>
        <h4>Search for Classes individually</h4>
        <div className="attendance-top">
            <input type='text' className='search-bar'placeholder='search class'></input>
            <select className='filter'>
                <option value='A'>A</option>
                <option value='B'>B</option>
                <option value='C'>C</option>
                <option value='D'>D</option>
            </select>
            <input type='date' className='calender'></input>
            
        </div>
        <h4>Search for students individually</h4>
        <div className='search-student'>
            <input type='text'className='search-s'placeholder='search student with Adm no.'></input>
            <input type='date' className='calender'></input>
        </div>
        <h3>Recents</h3>
        <table>
            <thead>
                <tr>
                    <th>Student name</th>
                    <th>Adm no.</th>
                    <th>Class</th>
                    <th>Stream</th>
                    <th>Status</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Ann Wanjiku</td>
                    <td>6177</td>
                    <td>Form 2</td>
                    <td>B</td>
                    <td>present</td>
                    <td>21/05/2025</td>
                </tr>
                <tr>
                    <td>Bernard Kilonzo</td>
                    <td>5870</td>
                    <td>Form 3</td>
                    <td>D</td>
                    <td>present</td>
                    <td>21/05/2025</td>
                </tr>
                <tr>
                    <td>Purity Sam</td>
                    <td>6432</td>
                    <td>Form 1</td>
                    <td>C</td>
                    <td>Absent</td>
                    <td >21/05/2025</td>
                </tr>
                <tr>
                    <td>Stacy Andeko</td>
                    <td>6245</td>
                    <td>Form 2</td>
                    <td>B</td>
                    <td>present</td>
                    <td>21/05/2025</td>
                </tr>
                <tr>
                    <td>Kamau Kelvin</td>
                    <td>5601</td>
                    <td>Form 4</td>
                    <td>A</td>
                    <td>present</td>
                    <td>21/05/2025</td>
                </tr>
            </tbody>
        </table>
        <div className='bottom-attendance'>
            <h3>Attendance bar-chart Data</h3>
            <h4>Total No. of students = 64</h4>
            <div className="circle-colors">
                <div className="green">
                    <span className="material-icons-sharp" id='green'>circle</span>
                    <h5>Present</h5>
                </div>
                <div className="orange">
                    <span className="material-icons-sharp" id='orange'>circle</span>
                    <h5>Late</h5>
                </div>
                <div className="red">
                    <span className="material-icons-sharp" id='red'>circle</span>
                    <h5>Absent</h5>
                </div>
            </div>
            <div className="chart-info">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart width={300}  height={300}>
                    <Pie 
                      data={data}
                      cx="20%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                       ))}
                    </Pie>
                 </PieChart> 
                </ResponsiveContainer>
                <div className="btns">
                    <div className="save">
                        <span className='material-icons-sharp'>download</span>
                        <h5>Save attendance</h5>
                    </div>
                    <div className="print">
                        <span className='material-icons-sharp'>print</span>
                        <h5>Print report</h5>
                    </div>
                    <div className="export">
                        <span className='material-icons-sharp'>outbox</span>
                        <h5>Export CSV</h5>
                    </div>
                    <div className="reset">
                        <span className='material-icons-sharp'>refresh</span>
                        <h5>Reset</h5>
                    </div>
                </div>
            </div>      
        </div>
    </fieldset>
  )
}

export default Attendance

