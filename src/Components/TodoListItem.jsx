const TodoListItem = ({ children, onClick }) => (
  <li className='todo-list-item' onClick={onClick}>
    {children}
  </li>
);

export default TodoListItem;
