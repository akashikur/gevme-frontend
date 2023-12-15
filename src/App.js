import { useState } from "react";
import "./style.css";
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [lname, setLname] = useState("");
  const [userDetails, setUserDetails] = useState([]);
  const [count, setCount] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    setCount(count + 1);
    let user = {
      Name: name,
      LastName: lname,
      Email: email,
      UserCount: count,
    };
    if (userDetails) {
      setUserDetails([...userDetails, user]);
    } else {
      setUserDetails([user]);
    }

    console.log(userDetails);
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" onChange={(e) => setName(e.target.value)} />
          <label>LastName:</label>
          <input type="text" onChange={(e) => setLname(e.target.value)} />
          <label>Email:</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
          <button>Submit</button>
        </form>
      </div>

      <table style={{ border: "1px solid black" }}>
        <tr>
          <th>Name</th>
          <th>LastName</th>
          <th>Email</th>
          <th>Count</th>
        </tr>
        {userDetails &&
          userDetails.map((item) => (
            <tr>
              <td>{item.Name}</td>
              <td>{item.LastName}</td>
              <td>{item.Email}</td>
              <td>{item.UserCount}</td>
            </tr>
          ))}
      </table>
    </>
  );
}

export default App;
