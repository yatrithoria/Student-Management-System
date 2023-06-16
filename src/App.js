import './App.css';
import Mainpage from './components/Mainpage';
import Students from './components/Students';
import Groups from './components/Groups';
import AddStudents from './components/AddStudents';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddGroups from './components/AddGroups';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/addgroups/" element={<AddGroups />} />
        <Route path="/addstudents/" element={<AddStudents />} />
        <Route path="/groups/" element={<Groups />} />
        <Route path="/students/" element={<Students />} />
        <Route path="/" element={<Mainpage />} />
      </Routes>
    </Router>
  );
}

export default App;
