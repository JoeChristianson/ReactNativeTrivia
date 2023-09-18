import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import CreateQuiz from './pages/CreateQuiz';

function App() {
  return (<>
  <BrowserRouter>
  <Link to="/create-quiz"><h1>Create Quiz</h1></Link>
<Routes>
        <Route path="/create-quiz" element={<CreateQuiz />} />
        <Route path="/" element={<h2>Welcome to our app</h2>} />
      </Routes>
  </BrowserRouter>
  </>
    );
}

export default App;
