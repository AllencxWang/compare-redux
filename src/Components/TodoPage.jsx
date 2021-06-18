import { useState, useCallback } from 'react';
import TodoList from './TodoList';
import TodoListItem from './TodoListItem';
import { useSelector, useDispatch } from 'react-redux';
import {
  addTodo as addTodoActionCreator,
  removeTodo as removeTodoActionCreator,
} from '../redux/actions';

const TodoPage = () => {
  const [text, setText] = useState('');
  const handleChange = useCallback(
    (evt) => setText(evt.target.value),
    [setText]
  );

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    if (!text) return;
    dispatch(addTodoActionCreator(text));
    setText('');
  }, [text, setText, dispatch]);

  const handleRemove = useCallback(
    (id) => {
      dispatch(removeTodoActionCreator(id));
    },
    [dispatch]
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
