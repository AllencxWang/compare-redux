import { useState, useCallback } from 'react';
import PageTodo from './PageTodo';
import PageEmpty from './PageEmpty';
import LeftNav from './LeftNav';
import LeftNavItem from './LeftNavItem';

const Body = () => {
  const [Page, setPage] = useState(() => PageEmpty);
  const switchToPageEmpty = useCallback(
    () => setPage(() => PageEmpty),
    [setPage]
  );
  const switchToPageTodo = useCallback(
    () => setPage(() => PageTodo),
    [setPage]
  );
  return (
    <div className='body'>
      <LeftNav>
        <LeftNavItem onClick={switchToPageEmpty}>Page - Empty</LeftNavItem>
        <LeftNavItem onClick={switchToPageTodo}>Page - Todo</LeftNavItem>
      </LeftNav>
      <Page />
    </div>
  );
};

export default Body;
