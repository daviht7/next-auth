import { api } from "@/services/api";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  api.get("/me").then((response) => {
    console.log("response", response.data);
  });

  return <h1>DASHBOARD : {user?.email}</h1>;
}
