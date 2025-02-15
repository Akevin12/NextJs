'use client'
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const { user } = useAuthContext();
  const router = useRouter();

  React.useEffect(() => {
    if (user == null) {
      router.push("/");
    }
  }, [user]);

  if (user == null) {
    return null; // Return nothing or a loading spinner while checking auth state
  }

  return <h1>Welcome to the Admin Page!</h1>;
}