import { useEffect, useState } from "react";

function ComopentList({ endPoint }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers(endPoint);
  }, [endPoint]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${
          endPoint ? "users" : "comments"
        }`
      );
      const data = await response.json();
      setUsers(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <ul>
        {endPoint
          ? users.map((user) => (
              <li key={user.id}>
                {" "}
                <h1>Users</h1>
                {user.name}
              </li>
            ))
          : users.map((user) => (
              <li key={user.id}>
                <h1>Coments</h1>
                {user.name}
              </li>
            ))}
      </ul>
    </div>
  );
}

export default ComopentList;
