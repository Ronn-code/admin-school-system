import './exam.css';
import {Link} from 'react-router-dom';

function Exam() {
  return (
    <fieldset className='exam-page'>
        <div className='top-exam-page'>
            <h2>Start Of Term II Exams 21<sup>st</sup>May 2025</h2>
            <Link to='/'>
            <button id='back-btn'>Home</button></Link>
        </div>
        <h3>Form 1 Exam Timetable</h3>
        <table>
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Date</th>
                    <th>8:30 am-11:00am</th>
                    <th>1:30pm-4:00pm</th>
                    <th>Supervisors</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Monday</td>
                    <td>21/05/2025</td>
                    <td>Maths</td>
                    <td>Technical</td>
                    <td>Tr. John,Mr Mbuya,Miss. Nekesa</td>
                </tr>
                <tr>
                    <td>Tuesday</td>
                    <td>22/05/2025</td>
                    <td>English</td>
                    <td>Chemistry</td>
                    <td>Tr. Lucy,Mr Mike,Mrs. Wafula</td>
                </tr>
                <tr>
                    <td>Wednesday</td>
                    <td>23/05/2025</td>
                    <td>Biology</td>
                    <td>Kiswahili</td>
                    <td>Tr. Nancy,Mr Ken,Tr.Wambui</td>
                </tr>
                <tr>
                    <td>Thursday</td>
                    <td>24/05/2025</td>
                    <td>Physics</td>
                    <td>CRE</td>
                    <td>Mr. Okoth,Mr Mbuya,Mrs. Kamau</td>
                </tr>
                <tr>
                    <td>Friday</td>
                    <td>25/05/2025</td>
                    <td>Humanities</td>
                    <td>---</td>
                    <td>Mr.Okoth,Mr Mbuya,Miss. Nekesa</td>
                </tr>
            </tbody>
        </table>
        <h4>Download or Share</h4>
        <div className="shares">
           <span className="material-icons-sharp">download</span>
           <span className="material-icons-sharp">share</span>
        </div>
                <h3>Form 2 Exam Timetable</h3>
        <table>
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Date</th>
                    <th>8:30 am-11:00am</th>
                    <th>1:30pm-4:00pm</th>
                    <th>Supervisors</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Monday</td>
                    <td>21/05/2025</td>
                    <td>Physics</td>
                    <td>English</td>
                    <td>Tr. Michael,Mr. William,Miss. Nafula</td>
                </tr>
                <tr>
                    <td>Tuesday</td>
                    <td>22/05/2025</td>
                    <td>Technicals</td>
                    <td>CRE</td>
                    <td>Tr. Kimani,Mrs.Kioko,Mrs. Mwendwa</td>
                </tr>
                <tr>
                    <td>Wednesday</td>
                    <td>23/05/2025</td>
                    <td>Maths</td>
                    <td>Kiswahili</td>
                    <td>Tr. Nancy,Mr Ken,Tr.Wambui</td>
                </tr>
                <tr>
                    <td>Thursday</td>
                    <td>24/05/2025</td>
                    <td>Biology</td>
                    <td>Humanities</td>
                    <td>Mr. Okello,Mr Munywa,Mrs. Karanja</td>
                </tr>
                <tr>
                    <td>Friday</td>
                    <td>25/05/2025</td>
                    <td>Chemistry</td>
                    <td>---</td>
                    <td>Mr.Wambua,Mrs.Johnson,Miss.Jacob</td>
                </tr>
            </tbody>
        </table>
        <h4>Download or Share</h4>
        <div className="shares">
           <span className="material-icons-sharp">download</span>
           <span className="material-icons-sharp">share</span>
        </div>
        <h3>Form 3 Exam Timetable</h3>
        <table>
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Date</th>
                    <th>8:30 am-11:00am</th>
                    <th>1:30pm-4:00pm</th>
                    <th>Supervisors</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Monday</td>
                    <td>21/05/2025</td>
                    <td>Maths</td>
                    <td>Technical</td>
                    <td>Tr. John,Mr Mbuya,Miss. Nekesa</td>
                </tr>
                <tr>
                    <td>Tuesday</td>
                    <td>22/05/2025</td>
                    <td>English</td>
                    <td>Chemistry</td>
                    <td>Tr. Lucy,Mr Mike,Mrs. Wafula</td>
                </tr>
                <tr>
                    <td>Wednesday</td>
                    <td>23/05/2025</td>
                    <td>Biology</td>
                    <td>Kiswahili</td>
                    <td>Tr. Nancy,Mr Ken,Tr.Wambui</td>
                </tr>
                <tr>
                    <td>Thursday</td>
                    <td>24/05/2025</td>
                    <td>Physics</td>
                    <td>CRE</td>
                    <td>Mr. Okoth,Mr Mbuya,Mrs. Kamau</td>
                </tr>
                <tr>
                    <td>Friday</td>
                    <td>25/05/2025</td>
                    <td>Humanities</td>
                    <td>---</td>
                    <td>Mr.Okoth,Mr Mbuya,Miss. Nekesa</td>
                </tr>
            </tbody>
        </table>
        <h4>Download or Share</h4>
        <div className="shares">
           <span className="material-icons-sharp">download</span>
           <span className="material-icons-sharp">share</span>
        </div>
                <h3>Form 4 Exam Timetable</h3>
        <table>
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Date</th>
                    <th>8:30 am-11:00am</th>
                    <th>1:30pm-4:00pm</th>
                    <th>Supervisors</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Monday</td>
                    <td>21/05/2025</td>
                    <td>Physics</td>
                    <td>English</td>
                    <td>Tr. Michael,Mr. William,Miss. Nafula</td>
                </tr>
                <tr>
                    <td>Tuesday</td>
                    <td>22/05/2025</td>
                    <td>Technicals</td>
                    <td>CRE</td>
                    <td>Tr. Kimani,Mrs.Kioko,Mrs. Mwendwa</td>
                </tr>
                <tr>
                    <td>Wednesday</td>
                    <td>23/05/2025</td>
                    <td>Maths</td>
                    <td>Kiswahili</td>
                    <td>Tr. Nancy,Mr Ken,Tr.Wambui</td>
                </tr>
                <tr>
                    <td>Thursday</td>
                    <td>24/05/2025</td>
                    <td>Biology</td>
                    <td>Humanities</td>
                    <td>Mr. Okello,Mr Munywa,Mrs. Karanja</td>
                </tr>
                <tr>
                    <td>Friday</td>
                    <td>25/05/2025</td>
                    <td>Chemistry</td>
                    <td>---</td>
                    <td>Mr.Wambua,Mrs.Johnson,Miss.Jacob</td>
                </tr>
            </tbody>
        </table>
        <h4>Download or Share</h4>
        <div className="shares">
           <span className="material-icons-sharp">download</span>
           <span className="material-icons-sharp">share</span>
        </div>
    </fieldset>
  )
}

export default Exam