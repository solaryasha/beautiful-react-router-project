import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';

enum TodoStatus {
  All = 'all',
  Completed = 'completed',
  Active = 'active'
}

function App() {
  const navigate = useNavigate();

  const handleClick = (newStatus: TodoStatus) => {
    navigate(newStatus);
  }

  return (
    <div>
      <button
        type='button'
        onClick={() => handleClick(TodoStatus.All)}
      >
        All
      </button>
      <button
        type='button'
        onClick={() => handleClick(TodoStatus.Completed)}
      >
        Completed
      </button>
      <button
        type='button'
        onClick={() => handleClick(TodoStatus.Active)}
      >
        Active
      </button>
      <Routes>
        <Route path={TodoStatus.All} element={<p>All todos</p>} />
        <Route path={TodoStatus.Active} element={<p>Active todos</p>} />
        <Route path={TodoStatus.Completed} element={<p>Completed todos</p>} />
      </Routes>
{/* 
      {status === TodoStatus.All && <p>All todos</p>}
      {status === TodoStatus.Active && <p>Active todos</p>}
      {status === TodoStatus.Completed && <p>Completed todos</p>} */}
    </div>
  );
}

export default App;
