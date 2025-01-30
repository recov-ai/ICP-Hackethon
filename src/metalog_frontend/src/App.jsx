import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import NotFound from './components/NotFound';
import Psikologis from './pages/Psikologis';
import Consultant from './pages/Consultant';
import Payment from './pages/Payment';
import Transaction from './pages/Transaction';
import EditProfile from './pages/EditProfile';
import Summary from './pages/Summary';
import Report from './pages/Report';
import Consultation from './pages/Consultation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/psychologist" element={<Psikologis />} />
        <Route path="/consultant" element={<Consultant />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/report" element={<Report />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;