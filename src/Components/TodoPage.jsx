import { useState, useCallback } from 'react';
import TodoList from './TodoList';
import TodoListItem from './TodoListItem';
import { connect } from 'react-redux';
import {
  addTodo as addTodoActionCreator,
  removeTodo as removeTodoActionCreator,
} from '../redux/actions';

const TodoPage = ({ todos, addTodo, removeTodo }) => {
  const [text, setText] = useState('');
  const handleChange = useCallback(
    (evt) => setText(evt.target.value),
    [setText]
  );

  const handleClick = useCallback(() => {
    if (!text) return;
    addTodo(text);
    setText('');
  }, [text, setText, addTodo]);

  const handleRemove = useCallback(
    (id) => {
      removeTodo(id);
    },
    [todos, removeTodo]
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

const mapStateToProps = (store) => ({ todos: store.todos });
const mapDispatchToProps = {
  addTodo: addTodoActionCreator,
  removeTodo: removeTodoActionCreator,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
