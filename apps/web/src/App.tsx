import { useQuery } from '@tanstack/react-query';
import { api } from './lib/api';
import { TaskForm } from './components/TaskForm';

function App() {
  // 1. useQuery Hook
  // This automatically handles loading, error, and data state
  const { data, isLoading, error } = useQuery({
    queryKey: ['tasks'], // A unique key for caching
    queryFn: async () => {
      // call the backend
      const { data, error } = await api.tasks.get();
      if (error) throw error;
      return data;
    }
  });

  if (isLoading) return <div>Loading tasks...</div>;
  if (error) return <div>Error loading tasks!</div>;

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>XST Task Board</h1>

      <TaskForm />

      {/* 2. Render the list */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {data?.map((task) => (
          <li 
            key={task.id} 
            style={{ 
              border: '1px solid #ddd', 
              margin: '10px 0', 
              padding: '15px', 
              borderRadius: '8px',
              backgroundColor: task.isCompleted ? 'pink' : 'white'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong>{task.title}</strong>
              <span style={{ fontSize: '0.8em', color: '#666' }}>
                {task.priority}
              </span>
            </div>
            <div style={{ fontSize: '0.8em', color: '#999', marginTop: '5px' }}>
              ID: {task.id}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;