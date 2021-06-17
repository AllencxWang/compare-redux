const Header = ({ todoCount }) => (
  <div className='header'>
    Header Section {todoCount ? <span>({todoCount})</span> : null}
  </div>
);

export default Header;
