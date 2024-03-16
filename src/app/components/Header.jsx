"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const Header = () => {
    const router = useRouter()
  const [user, setUser] = useState("");
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
    <nav className="bg-gray-800 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div>
          <Link href="/">Auth</Link>
        </div>
        <ul className="flex space-x-4">
          {user ? (
            <li onClick={onLogOut}>
              <Link href="/login">logout</Link>
            </li>
          ) : (
            <>
              <li>
                <Link href="/login">Login</Link>
              </li>
              <li>
                <Link href="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
