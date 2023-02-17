import { api } from "@/services/apiClient";
import { withSSRAuth } from "@/utils/withSSRAuth";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { setupApiClient } from "../services/api";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    api
      .get("/me")
      .then((response) => {
        console.log("dashboard", response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <h1>DASHBOARD : {user?.email}</h1>;
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupApiClient(ctx);
  const response = await apiClient.get("/me");
  console.log("response", response.data);

  return {
    props: {},
  };
});
