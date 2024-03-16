"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ProfilePage = () => {

  const [user, setUser] = useState({});

  const router = useRouter();
  const onLogOut = async () => {
    try {
      const response = await axios.get("/api/users/logout");

      console.log(response);
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("api/users/userdata");

        console.log(response);
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, []);
  return (
    <div>
      This is profile page
      <div>
        {user && <h1>{user.username}</h1>}
      </div>
      <div>
        <button onClick={onLogOut}>Logout</button>
      </div>
    </div>
  );
};

export default ProfilePage;
