import { api } from "@/services/api";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    api.get("/me").then((response) => {
      console.log("dashboard", response.data);
    });
  }, []);

  return <h1>DASHBOARD : {user?.email}</h1>;
}
