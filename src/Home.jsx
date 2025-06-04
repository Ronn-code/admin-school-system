import React from 'react';
import {Link} from 'react-router-dom';
import { PureComponent } from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';




const data = [
  {
    name: '2016',
    points: 5.60,
    pv: 0,
    stds: 2400,
  },
  {
    name: '2017',
    points: 6.24,
    pv: 0,
    stds: 2210,
  },
  {
    name: '2018',
    points: 6.90,
    pv: 0,
    stds: 2290,
  },
  {
    name: '2019',
   points: 8.55,
    pv: 0,
   stds: 2000,
  },
  {
    name: '2020',
    points: 5.68,
    pv: 0,
    stds: 2181,
  },
  {
    name: '2021',
    points: 8.99,
    pv: 0,
    stds: 2500,
  },
  {
    name: '2022',
    points: 9.10,
    pv: 0,
   stds: 2100,
  },
  {
    name: '2023',
    points: 7.10,
    pv: 0,
   stds: 2100,
  },
  {
    name: '2024',
    points: 8.70,
    pv: 0,
   stds: 2100,
  },
];

const number = [
  { name: 'Boys', value: 6102 },
  { name: 'Girls', value: 9133},
]

const COLORS = ['#085785', '#08855b']

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



function Home(){
    return(
        <fieldset className='hero-home'>
            <aside className='left-aside'>
                <div className="top">
                    
                    <div className="sidebar">
                        <a href='#' className='active'>Admin </a>
                        <a href='#' className='nav1'>Students</a>
                        <a href='#' className='nav1'>Teachers</a>
                    </div>
                </div>
                <div className="middle">
                    <h2>Academic</h2>
                    <div className="middle-sidebar">
                        <Link to='./student'>
                            <span className="material-icons-sharp">school</span>
                            <h4>Students</h4>
                        </Link>
                        <Link to='./teacher'>
                            <span className="material-icons-sharp">group</span>
                            <h4>Teachers</h4>
                        </Link>
                        <Link to='./exam'>
                            <span className="material-icons-sharp">assignment</span>
                            <h4>Exams</h4>
                        </Link>
                        <Link to='./attendance'>
                            <span className="material-icons-sharp">check_circle</span>
                            <h4>Attendance</h4>
                        </Link>
                        <Link to='#'>
                            <span className="material-icons-sharp">payments</span>
                            <h4>Payments</h4>
                        </Link>
                    </div>
                </div>
                <div className="bottom">
                    <h2>Settings</h2>
                    <div className="bottom-sidebar">
                        <Link to='#'>
                            <span className="material-icons-sharp">person</span>
                            <h4>Profile</h4>
                        </Link>
                        <Link to='#'>
                            <span className="material-icons-sharp">settings</span>
                            <h4>Settings</h4>
                        </Link>
                        <Link to='#'>
                            <span className="material-icons-sharp">logout</span>
                            <h4>Logout</h4>
                        </Link>
                    </div>
                </div>
            </aside>
            <main>
                <h3>General Overview</h3>
                <div className="main-top">
                    <div className="students">
                        <div className="student-top">
                            <h4>Students</h4>
                            <span className="material-icons-sharp">school</span>
                        </div>
                        <h2>15,235</h2>
                    </div>
                    <div className="teachers">
                        <div className="teacher-top">
                            <h4>Teachers</h4>
                            <span className="material-icons-sharp">group</span>
                        </div>
                        <h2>1,067</h2>
                    </div>
                    <div className="balance">
                        <div className="balance-top">
                            <h4>Balance</h4>
                            <span className="material-icons-sharp">account_balance</span>
                        </div>
                        <h2>$11,584.58</h2>
                    </div>
                </div>
                <div className="main-middle">
                    <h4>K.C.S.E Annual Performance</h4>
                    <div className="bar-chart">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                              width={400}
                              height={300}
                              data={data}
                              barCategoryGap={"2%"}
                              barGap={2}
                              margin={{
                               top: 2,
                               bottom: 2,
                               }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="points" fill="#085785" barSize={20}/>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="main-bottom">
                    <h4>Top Scorers</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Admision no.</th>
                                <th>Grade</th>
                                <th>Points</th>
                                <th>Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ann waisela</td>
                                <td>5678</td>
                                <td>B+</td>
                                <td>10.02</td>
                                <td>2024</td>
                            </tr>
                            <tr>
                                <td>Robert Mutiso</td>
                                <td>5034</td>
                                <td>A-</td>
                                <td>11.22</td>
                                <td>2023</td>
                            </tr>
                            <tr>
                                <td>Florence Chebet</td>
                                <td>4478</td>
                                <td>B</td>
                                <td>9.62</td>
                                <td>2022</td>
                            </tr>
                            <tr>
                                <td>Emmanuel Mumo</td>
                                <td>4090</td>
                                <td>B</td>
                                <td>9.78</td>
                                <td>2021</td>
                            </tr>
                            <tr>
                                <td>Collins Aketch</td>
                                <td>3654</td>
                                <td>A-</td>
                                <td>11.59</td>
                                <td>2020</td>
                            </tr>
                            <tr>
                                <td>Nancy Wangui</td>
                                <td>3213</td>
                                <td>B+</td>
                                <td>10.12</td>
                                <td>2019</td>
                            </tr>
                            <tr>
                                <td>Peter Mugambe</td>
                                <td>2993</td>
                                <td>B</td>
                                <td>9.92</td>
                                <td>2018</td>
                            </tr>
                            <tr>
                                <td>Faith Ndinda</td>
                                <td>2456</td>
                                <td>B-</td>
                                <td>8.73</td>
                                <td>2017</td>
                            </tr>
                            <tr>
                                <td>Kelvin Karanja</td>
                                <td>2070</td>
                                <td>B-</td>
                                <td>8.12</td>
                                <td>2016</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
            <aside className='right-aside'>
                <div className="right-top">
                    <h4>Upcoming Events</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>Event</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Inter-stream Competition</td>
                                <td>23 July 2025</td>
                            </tr>
                            <tr>
                                <td>Drama Festival (Kalawa)</td>
                                <td>02 June 2025</td>
                            </tr>
                            <tr>
                                <td>Football Games (Kitui sch)</td>
                                <td>17 May 2025</td>
                            </tr>
                            <tr>
                                <td>Best class Trip (Nairobi)</td>
                                <td>05 April 2025</td>
                            </tr>
                            <tr>
                                <td>Teachers Conference (Machakos)</td>
                                <td>10 August 2025</td>
                            </tr>
                            <tr>
                                <td>Mock exams kickstart</td>
                                <td>28 July 2025</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div className="right-bottom" style={{width: '100%', height: 350}}>
                    <h4> Total Number of Students In The School</h4>
                    <h5>Total = 15,235 students</h5>
                    <div className="right-footer">
                        <div className="boys">
                            <span className="material-icons-sharp">circle</span>
                            <h6>Boys (6,102)</h6>
                        </div>
                        <div className="girls">
                            <span className="material-icons-sharp">circle</span>
                            <h6>Girls (9,133)</h6>
                        </div>
                    </div>
                    <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400}>
                    <Pie
                      data={number}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
          >
                    {number.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                    </Pie>
                    </PieChart>
                    </ResponsiveContainer>
                </div>
            </aside>
        </fieldset>
    );
}
export default Home;