/* eslint-disable no-nested-ternary */
/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import axios from "axios";
import { UserCard } from "./components/UserCard";
import "./styles.css";
import { User } from "./types/api/user";
import { UserProfile } from "./types/userProfile";

export default function App() {



  const onClickFetchUser = () => {
    
  };
  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>  
  );
};