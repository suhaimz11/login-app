import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';  // Ensure the import is correct

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />  {/* Set LoginPage as default */}
      <Route path="/home" element={<Home />} />   {/* Optionally, add a Home route */}
      <Route path="/signup" element={<SignupPage />} /> 
    </Routes>
  );
};

export default App;