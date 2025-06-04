import {Link} from 'react-router-dom';
import './teacher.css';


function Teacher() {
  return (
    <fieldset className="teacher-page">
        <h2>2025 Teachers List View</h2>
        <div className="sfbars">
            <input type='text'className='search-bar' placeholder='Search by email'></input>
            <select className='filter'>
                <option value="email">Email</option>
                <option value="ID">Id number</option>
            </select>
            <Link to='/'>
            <button id='back-btn'>Home</button></Link>
        </div>
        <h3>Language Department</h3>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Augustus j. Kombe</td>
                    <td>2309788</td>
                    <td>augustjkoms@gmail.com</td>
                    <td>English</td>
                    <td className='action-btn'>
                        <button id='view-btn'>View</button>
                    </td>
                </tr>
                <tr>
                    <td>Faith M. Ndung'u</td>
                    <td>3498021</td>
                    <td>faithndung'um@gmail.com</td>
                    <td>French</td>
                    <td className='action-btn'>
                        <button id='view-btn'>View</button>
                    </td>
                </tr>
                <tr>
                    <td>Augustus j. Kombe</td>
                    <td>2309788</td>
                    <td>augustjkoms@gmail.com</td>
                    <td>English</td>
                    <td className='action-btn'>
                        <button id='view-btn'>View</button>
                    </td>
                </tr>
                <tr>
                    <td>Faith M. Ndung'u</td>
                    <td>3498021</td>
                    <td>faithndung'um@gmail.com</td>
                    <td>Kiswahili</td>
                    <td className='action-btn'>
                        <button id='view-btn'>View</button>
                    </td>
                </tr>
                <tr>
                    <td>Augustus j. Kombe</td>
                    <td>2309788</td>
                    <td>augustjkoms@gmail.com</td>
                    <td>French</td>
                    <td className='action-btn'>
                        <button id='view-btn'>View</button>
                    </td>
                </tr>
                <tr>
                    <td>Faith M. Ndung'u</td>
                    <td>3498021</td>
                    <td>faithndung'um@gmail.com</td>
                    <td>Kiswahili</td>
                    <td className='action-btn'>
                        <button id='view-btn'>View</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <h3>Science Department</h3>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Augustus j. Kombe</td>
                    <td>2309788</td>
                    <td>augustjkoms@gmail.com</td>
                    <td>Physics</td>
                    <td className='action-btn'>
                        <button id='view-btn'>View</button>
                    </td>
                </tr>
                <tr>
                    <td>Faith M. Ndung'u</td>
                    <td>3498021</td>
                    <td>faithndung'um@gmail.com</td>
                    <td>Chemistry</td>
                    <td className='action-btn'>
                        <button id='view-btn'>View</button>
                    </td>
                </tr>
                <tr>
                    <td>Augustus j. Kombe</td>
                    <td>2309788</td>
                    <td>augustjkoms@gmail.com</td>
                    <td>Biology</td>
                    <td className='action-btn'>
                        <button id='view-btn'>View</button>
                    </td>
                </tr>
                <tr>
                    <td>Faith M. Ndung'u</td>
                    <td>3498021</td>
                    <td>faithndung'um@gmail.com</td>
                    <td>Biology</td>
                    <td className='action-btn'>
                        <button id='view-btn'>View</button>
                    </td>
                </tr>
                <tr>
                    <td>Augustus j. Kombe</td>
                    <td>2309788</td>
                    <td>augustjkoms@gmail.com</td>
                    <td>Physics</td>
                    <td className='action-btn'>
                        <button id='view-btn'>View</button>
                    </td>
                </tr>
                <tr>
                    <td>Faith M. Ndung'u</td>
                    <td>3498021</td>
                    <td>faithndung'um@gmail.com</td>
                    <td>Chemistry</td>
                    <td className='action-btn'>
                        <button id='view-btn'>View</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <h3>Mathematics Department</h3>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Augustus j. Kombe</td>
                    <td>2309788</td>
                    <td>augustjkoms@gmail.com</td>
                    <td>Mathematics</td>
                    <td className='action-btn'>
                        <button id='view-btn'>View</button>
                    </td>
                </tr>
                <tr>
                    <td>Faith M. Ndung'u</td>
                    <td>3498021</td>
                    <td>faithndung'um@gmail.com</td>
                    <td>Mathematics</td>
                    <td className='action-btn'>
                        <button id='view-btn'>View</button>
                    </td>
                </tr>
                <tr>
                    <td>Augustus j. Kombe</td>
                    <td>2309788</td>
                    <td>augustjkoms@gmail.com</td>
                    <td>Mathematics</td>
                    <td className='action-btn'>
                        <button id='view-btn'>View</button>
                    </td>
                </tr>
                <tr>
                    <td>Faith M. Ndung'u</td>
                    <td>3498021</td>
                    <td>faithndung'um@gmail.com</td>
                    <td>Mathematics</td>
                    <td className='action-btn'>
                        <button id='view-btn'>View</button>
                    </td>
                </tr>
                <tr>
                    <td>Augustus j. Kombe</td>
                    <td>2309788</td>
                    <td>augustjkoms@gmail.com</td>
                    <td>Mathematics</td>
                    <td className='action-btn'>
                        <button id='view-btn'>View</button>
                    </td>
                </tr>
                <tr>
                    <td>Faith M. Ndung'u</td>
                    <td>3498021</td>
                    <td>faithndung'um@gmail.com</td>
                    <td>Mathematics</td>
                    <td className='action-btn'>
                        <button id='view-btn'>View</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <h3>Technical Department</h3>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Augustus j. Kombe</td>
                    <td>2309788</td>
                    <td>augustjkoms@gmail.com</td>
                    <td>Business</td>
                    <td className='action-btn'>
                        <button id='view-btn'>View</button>
                    </td>
                </tr>
                <tr>
                    <td>Faith M. Ndung'u</td>
                    <td>3498021</td>
                    <td>faithndung'um@gmail.com</td>
                    <td>Computer</td>
                    <td className='action-btn'>
                        <button id='view-btn'>View</button>
                    </td>
                </tr>
                <tr>
                    <td>Augustus j. Kombe</td>
                    <td>2309788</td>
                    <td>augustjkoms@gmail.com</td>
                    <td>Home-science</td>
                    <td className='action-btn'>
                        <button id='view-btn'>View</button>
                    </td>
                </tr>
                <tr>
                    <td>Faith M. Ndung'u</td>
                    <td>3498021</td>
                    <td>faithndung'um@gmail.com</td>
                    <td>Agriculture</td>
                    <td className='action-btn'>
                        <button id='view-btn'>View</button>
                    </td>
                </tr>
                <tr>
                    <td>Augustus j. Kombe</td>
                    <td>2309788</td>
                    <td>augustjkoms@gmail.com</td>
                    <td>Computer</td>
                    <td className='action-btn'>
                        <button id='view-btn'>View</button>
                    </td>
                </tr>
                <tr>
                    <td>Faith M. Ndung'u</td>
                    <td>3498021</td>
                    <td>faithndung'um@gmail.com</td>
                    <td>Business</td>
                    <td className='action-btn'>
                        <button id='view-btn'>View</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </fieldset>
  )
}

export default Teacher