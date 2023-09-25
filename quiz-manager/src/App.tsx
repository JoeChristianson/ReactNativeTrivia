import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import CreateQuiz from './pages/CreateQuiz';
import QuizBuilder from './pages/QuizBuilder';

function App() {
  return (<>
  <BrowserRouter>
<Routes>
        <Route path="/create-quiz" element={<CreateQuiz />} />
        <Route path="/quiz-builder" element={<QuizBuilder />} />
        <Route path="/" element={<h2>Welcome to our app</h2>} />
      </Routes>
  </BrowserRouter>
  </>
    );
}

export default App;
