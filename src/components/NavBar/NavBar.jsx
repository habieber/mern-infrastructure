import { Link } from "react-router-dom"
import * as userService from '../../utilities/users-services'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // delegate to the users-service
    userService.logOut();
    // update state will also cause a re-render
    setUser(null);
  }
  return (
      <nav>
      <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link>
      &nbsp; | &nbsp;
      <span>Hello, {user}</span>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  )
}