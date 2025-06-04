import React from 'react'
import './student.css';
import {Link} from 'react-router-dom';

function Student() {
  return (
    <fieldset className='students-page'>
        <h2>2025 Students List View</h2>
        <div className='sfbars'>
        <input type='text' className='search' placeholder='Search by Adm. no'></input>
        <select className='filter'>
          <option value="ADM NO.">Admission no</option>
          <option value="Form stream">Form stream</option>
        </select>
        <Link to="/">
        <button id='back-btn'>Home</button>
        </Link>
        </div>
        <h3>FORM 1</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Adm no.</th>
              <th>Stream</th>
              <th>Parent name</th>
              <th>Contacts</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ann Mwikali</td>
              <td>6177</td>
              <td>1B</td>
              <td>Julius Mutisya</td>
              <td>0724768432</td>
              <td className='tbtns'>
                <button id='view-btn'>View</button>
              </td>
            </tr>
            <tr>
              <td>Ann Mwikali</td>
              <td>6177</td>
              <td>1B</td>
              <td>Julius Mutisya</td>
              <td>0724768432</td>
              <td className='tbtns'>
                <button id='view-btn'>View</button>
              </td>
            </tr>
            <tr>
              <td>Ann Mwikali</td>
              <td>6177</td>
              <td>1B</td>
              <td>Julius Mutisya</td>
              <td>0724768432</td>
              <td className='tbtns'>
                <button id='view-btn'>View</button>
              </td>
            </tr>
            <tr>
              <td>Ann Mwikali</td>
              <td>6177</td>
              <td>1B</td>
              <td>Julius Mutisya</td>
              <td>0724768432</td>
              <td className='tbtns'>
                <button id='view-btn'>View</button>
              </td>
            </tr>
            <tr>
              <td>Ann Mwikali</td>
              <td>6177</td>
              <td>1B</td>
              <td>Julius Mutisya</td>
              <td>0724768432</td>
              <td className='tbtns'>
                <button id='view-btn'>View</button>
              </td>
            </tr>
            <tr>
              <td>Ann Mwikali</td>
              <td>6177</td>
              <td>1B</td>
              <td>Julius Mutisya</td>
              <td>0724768432</td>
              <td className='tbtns'>
                <button id='view-btn'>View</button>
              </td>
            </tr>
            <tr>
              <td>Ann Mwikali</td>
              <td>6177</td>
              <td>1B</td>
              <td>Julius Mutisya</td>
              <td>0724768432</td>
              <td className='tbtns'>
                <button id='view-btn'>View</button>
              </td>
            </tr>
            <tr>
              <td>Ann Mwikali</td>
              <td>6177</td>
              <td>1B</td>
              <td>Julius Mutisya</td>
              <td>0724768432</td>
              <td className='tbtns'>
                <button id='view-btn'>View</button>
              </td>
            </tr>
          </tbody>
        </table>
        <h3>FORM 2</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Adm no.</th>
              <th>Stream</th>
              <th>Parent name</th>
              <th>Contacts</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ann Mwikali</td>
              <td>6177</td>
              <td>1B</td>
              <td>Julius Mutisya</td>
              <td>0724768432</td>
              <td className='tbtns'>
                <button id='view-btn'>View</button>
              </td>
            </tr>
            <tr>
              <td>Ann Mwikali</td>
              <td>6177</td>
              <td>1B</td>
              <td>Julius Mutisya</td>
              <td>0724768432</td>
              <td className='tbtns'>
                <button id='view-btn'>View</button>
              </td>
            </tr>
            <tr>
              <td>Ann Mwikali</td>
              <td>6177</td>
              <td>1B</td>
              <td>Julius Mutisya</td>
              <td>0724768432</td>
              <td className='tbtns'>
                <button id='view-btn'>View</button>
              </td>
            </tr>
            <tr>
              <td>Ann Mwikali</td>
              <td>6177</td>
              <td>1B</td>
              <td>Julius Mutisya</td>
              <td>0724768432</td>
              <td className='tbtns'>
                <button id='view-btn'>View</button>
              </td>
            </tr>
            <tr>
              <td>Ann Mwikali</td>
              <td>6177</td>
              <td>1B</td>
              <td>Julius Mutisya</td>
              <td>0724768432</td>
              <td className='tbtns'>
                <button id='view-btn'>View</button>
              </td>
            </tr>
            <tr>
              <td>Ann Mwikali</td>
              <td>6177</td>
              <td>1B</td>
              <td>Julius Mutisya</td>
              <td>0724768432</td>
              <td className='tbtns'>
                <button id='view-btn'>View</button>
              </td>
            </tr>
            <tr>
              <td>Ann Mwikali</td>
              <td>6177</td>
              <td>1B</td>
              <td>Julius Mutisya</td>
              <td>0724768432</td>
              <td className='tbtns'>
                <button id='view-btn'>View</button>
              </td>
            </tr>
            <tr>
              <td>Ann Mwikali</td>
              <td>6177</td>
              <td>1B</td>
              <td>Julius Mutisya</td>
              <td>0724768432</td>
              <td className='tbtns'>
                <button id='view-btn'>View</button>
              </td>
            </tr>
          </tbody>
        </table>
        <h3>FORM 3</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Adm no.</th>
              <th>Stream</th>
              <th>Parent name</th>
              <th>Contacts</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ann Mwikali</td>
              <td>6177</td>
              <td>1B</td>
              <td>Julius Mutisya</td>
              <td>0724768432</td>
              <td className='tbtns'>
                <button id='view-btn'>View</button>
              </td>
            </tr>
            <tr>
              <td>Ann Mwikali</td>
              <td>6177</td>
              <td>1B</td>
              <td>Julius Mutisya</td>
              <td>0724768432</td>
              <td className='tbtns'>
                <button id='view-btn'>View</button>
              </td>
            </tr>
            <tr>
              <td>Ann Mwikali</td>
              <td>6177</td>
              <td>1B</td>
              <td>Julius Mutisya</td>
              <td>0724768432</td>
              <td className='tbtns'>
                <button id='view-btn'>View</button>
              </td>
            </tr>
            <tr>
              <td>Ann Mwikali</td>
              <td>6177</td>
              <td>1B</td>
              <td>Julius Mutisya</td>
              <td>0724768432</td>
              <td className='tbtns'>
                <button id='view-btn'>View</button>
              </td>
            </tr>
            <tr>
              <td>Ann Mwikali</td>
              <td>6177</td>
              <td>1B</td>
              <td>Julius Mutisya</td>
              <td>0724768432</td>
              <td className='tbtns'>
                <button id='view-btn'>View</button>
              </td>
            </tr>
            <tr>
              <td>Ann Mwikali</td>
              <td>6177</td>
              <td>1B</td>
              <td>Julius Mutisya</td>
              <td>0724768432</td>
              <td className='tbtns'>
                <button id='view-btn'>View</button>
              </td>
            </tr>
            <tr>
              <td>Ann Mwikali</td>
              <td>6177</td>
              <td>1B</td>
              <td>Julius Mutisya</td>
              <td>0724768432</td>
              <td className='tbtns'>
                <button id='view-btn'>View</button>
              </td>
            </tr>
            <tr>
              <td>Ann Mwikali</td>
              <td>6177</td>
              <td>1B</td>
              <td>Julius Mutisya</td>
              <td>0724768432</td>
              <td className='tbtns'>
                <button id='view-btn'>View</button>
              </td>
            </tr>
          </tbody>
        </table>
        <h3>FORM 4</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Adm no.</th>
              <th>Stream</th>
              <th>Parent name</th>
              <th>Contacts</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ann Mwikali</td>
              <td>6177</td>
              <td>1B</td>
              <td>Julius Mutisya</td>
              <td>0724768432</td>
              <td className='tbtns'>
                <button id='view-btn'>View</button>
              </td>
            </tr>
            <tr>
              <td>Ann Mwikali</td>
              <td>6177</td>
              <td>1B</td>
              <td>Julius Mutisya</td>
              <td>0724768432</td>
              <td className='tbtns'>
                <button id='view-btn'>View</button>
              </td>
            </tr>
            <tr>
              <td>Ann Mwikali</td>
              <td>6177</td>
              <td>1B</td>
              <td>Julius Mutisya</td>
              <td>0724768432</td>
              <td className='tbtns'>
                <button id='view-btn'>View</button>
              </td>
            </tr>
            <tr>
              <td>Ann Mwikali</td>
              <td>6177</td>
              <td>1B</td>
              <td>Julius Mutisya</td>
              <td>0724768432</td>
              <td className='tbtns'>
                <button id='view-btn'>View</button>
              </td>
            </tr>
            <tr>
              <td>Ann Mwikali</td>
              <td>6177</td>
              <td>1B</td>
              <td>Julius Mutisya</td>
              <td>0724768432</td>
              <td className='tbtns'>
                <button id='view-btn'>View</button>
              </td>
            </tr>
            <tr>
              <td>Ann Mwikali</td>
              <td>6177</td>
              <td>1B</td>
              <td>Julius Mutisya</td>
              <td>0724768432</td>
              <td className='tbtns'>
                <button id='view-btn'>View</button>
              </td>
            </tr>
            <tr>
              <td>Ann Mwikali</td>
              <td>6177</td>
              <td>1B</td>
              <td>Julius Mutisya</td>
              <td>0724768432</td>
              <td className='tbtns'>
                <button id='view-btn'>View</button>
              </td>
            </tr>
            <tr>
              <td>Ann Mwikali</td>
              <td>6177</td>
              <td>1B</td>
              <td>Julius Mutisya</td>
              <td>0724768432</td>
              <td className='tbtns'>
                <button id='view-btn'>View</button>
              </td>
            </tr>
          </tbody>
        </table>
    </fieldset>
  );
}

export default Student;