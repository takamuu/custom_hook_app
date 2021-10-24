import React from "react";
import { UserCard } from "./components/UserCard";
import "./styles.css";

const user = {
  id: 1,
  name: "たかし",
  email: "123@aaa.com",
  address: "ADDRESS"
};

export default function App() {
  return (
    <div className="App">
      <UserCard user={user} />
    </div>
  )
}