const LeftNavItem = ({ children, onClick }) => (
  <div className='left-nav-item' onClick={onClick}>
    {children}
  </div>
);

export default LeftNavItem;
