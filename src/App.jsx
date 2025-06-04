import Home from './Home';
import Student from './Student';
import Teacher from './Teacher';
import Exam from './Exam';
import Attendance from './Attendance';
import {BrowserRouter, Routes, Route } from 'react-router-dom';


function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Student/>}/>
        <Route path='/teacher' element={<Teacher/>}/>
        <Route path='/exam' element={<Exam/>}/>
        <Route path='/attendance' element={<Attendance/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;