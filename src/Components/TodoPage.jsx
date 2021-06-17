import { useState, useCallback, useContext } from 'react';
import TodoList from './TodoList';
import TodoListItem from './TodoListItem';
import { TodoCountContext } from '../Context';

const TodoPage = () => {
  const { setTodoCount } = useContext(TodoCountContext);
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);
  const handleChange = useCallback(
    (evt) => setText(evt.target.value),
    [setText]
  );

  const handleClick = useCallback(() => {
    if (!text) return;
    setTodoCount(todos.length + 1);
    setTodos([...todos, { id: Date.now(), text }]);
    setText('');
  }, [text, setText, todos]);

  const handleRemove = useCallback(
    (id) => {
      setTodoCount(todos.length - 1);
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos, setTodos]
  );

  return (
    <div className='todo-page'>
      <TodoList>
        {todos.map((todo) => (
          <TodoListItem key={todo.id} onClick={() => handleRemove(todo.id)}>
            {todo.text}
          </TodoListItem>
        ))}
      </TodoList>
      <div>
        <input
          type='text'
          placeholder='Enter a todo'
          value={text}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Add</button>
      </div>
    </div>
  );
};

export default TodoPage;
