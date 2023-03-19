import { users } from "../db";
import {Link} from "react-router-dom";
const Home = () => {

  return (
    <>
      {/*<h1>Home{users[0].name}</h1> errorElement 보기*/}
      <h1>Home <small>Users</small></h1>
      <ul>
        <li>
          {users.map( user => <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>  ) }
        </li>
      </ul>
    </>
  );
}

export default Home;