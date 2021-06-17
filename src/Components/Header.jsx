import { TodoCountContext } from '../Context';
const Header = () => (
  <TodoCountContext.Consumer>
    {({ todoCount }) => (
      <div className='header'>
        Header Section {todoCount ? <span>({todoCount})</span> : null}
      </div>
    )}
  </TodoCountContext.Consumer>
);

export default Header;
