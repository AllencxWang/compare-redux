import { useState, useCallback } from 'react';
import TodoPage from './TodoPage';
import EmptyPage from './EmptyPage';
import LeftNav from './LeftNav';
import LeftNavItem from './LeftNavItem';

const Body = ({ setTodoCount }) => {
  const [Page, setPage] = useState(() => EmptyPage);
  const switchToEmptyPage = useCallback(
    () => setPage(() => EmptyPage),
    [setPage]
  );
  const switchToTodoPage = useCallback(
    () => setPage(() => TodoPage),
    [setPage]
  );
  return (
    <div className='body'>
      <LeftNav>
        <LeftNavItem onClick={switchToEmptyPage}>Empty Page</LeftNavItem>
        <LeftNavItem onClick={switchToTodoPage}>Todo Page</LeftNavItem>
      </LeftNav>
      <Page setTodoCount={setTodoCount} />
    </div>
  );
};

export default Body;
