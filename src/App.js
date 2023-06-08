import { useState } from "react";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { userInputs } from "./formSource";
function App() {
  const [userData, setUserData] = useState([]);

  const addNewUsers = (newData) => {
    // console.log("new user added", newData)
    setUserData((prev) => {
      return [...prev, newData];
    });
  };

  console.log("userList", userData);
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Home userData={userData} />} />
          <Route path="/users" element={<List userData={userData} />} />
          <Route
            path="/users/new"
            element={
              <New
                inputs={userInputs}
                title="Add new user"
                addNewUsers={addNewUsers}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
