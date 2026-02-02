import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../lib/api';

export function TaskForm() {
  const [title, setTitle] = useState('');
  const queryClient = useQueryClient();

  // 1. Define the Mutation
  const createPost = useMutation({
    mutationFn: async (newTitle: string) => {
      // Call the Elysia API
      const { data, error } = await api.tasks.create.post({
        title: newTitle,
        isCompleted: false,
        priority: "medium"
      });
      if (error) throw error;
      return data;
    },
    // 2. On Success: Refresh the list automatically
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      setTitle(''); // Clear the input
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    createPost.mutate(title); // Trigger the mutation
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          padding: '10px',
          flexGrow: 1,
          borderRadius: '6px',
          border: '1px solid #ccc',
          fontSize: '16px'
        }}
        disabled={createPost.isPending}
      />
      <button 
        type="submit" 
        disabled={createPost.isPending}
        style={{
          padding: '10px 20px',
          backgroundColor: createPost.isPending ? '#94a3b8' : '#2563eb',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: createPost.isPending ? 'not-allowed' : 'pointer'
        }}
      >
        {createPost.isPending ? 'Adding...' : 'Add Task'}
      </button>
    </form>
  );
}