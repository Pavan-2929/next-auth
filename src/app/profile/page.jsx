"use client"

import axios from "axios";
import React from "react";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
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
  return (
    <div>
      This is profile page
      <div>
        <button onClick={onLogOut}>Logout</button>
      </div>
    </div>
  );
};

export default ProfilePage;
