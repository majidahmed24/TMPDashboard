import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Experiment from './Pages/Experiment';
import Leaderboard from './Pages/Leaderboard';
import LeadManagement from './Pages/LeadManagement';
import Packages from './Pages/Packages';
import Report from './Pages/Report';
import Setting from './Pages/Setting';
import Students from './Pages/Students';
import Subscribers from './Pages/Subscribers';
import Cards from './Pages/Cards';
import EditProfile from './Pages/EditProfile';
import LeadDetails from './Pages/LeadDetails';
import StudentDetails from './Pages/StudentDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />

        {/* Dashboard Layout with Nested Routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="cards" element={<Cards />} />
          <Route path="leadmanagement" element={<LeadManagement />} />
          <Route path="students" element={<Students />} />
          <Route path="subscribers" element={<Subscribers />} />
          <Route path="experiment" element={<Experiment />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="packages" element={<Packages />} />
          <Route path="report" element={<Report />} />
          <Route path="setting" element={<Setting />} />
          <Route path="editprofile" element={<EditProfile/>} />
          <Route path="lead-details" element={<LeadDetails />} />
          <Route path="student-details" element={<StudentDetails />} />
        </Route>

        {/* Handle unknown routes */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
