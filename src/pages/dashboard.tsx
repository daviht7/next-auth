import { Can } from "@/components/Can";
import { useCan } from "@/hooks/useCan";
import { withSSRAuth } from "@/utils/withSSRAuth";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { setupApiClient } from "../services/api";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    /*api
      .get("/me")
      .then((response) => {
        console.log("dashboard", response.data);
      })
      .catch((err) => {
        console.log(err);
      });*/
  }, []);

  return (
    <>
      <h1>DASHBOARD : {user?.email}</h1>

      <Can permissions={["editor"]}>
        <div>metrics</div>
      </Can>
    </>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupApiClient(ctx);

  return {
    props: {},
  };
});
