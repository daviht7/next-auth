import { Can } from "@/components/Can";
import { useCan } from "@/hooks/useCan";
import { withSSRAuth } from "@/utils/withSSRAuth";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { setupApiClient } from "../services/api";
import decode from "jwt-decode";

export default function Metrics() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <h1>METRICS : {user?.email}</h1>
      <Can permissions={["administrator"]}>
        <div>metrics</div>
      </Can>
    </>
  );
}

export const getServerSideProps = withSSRAuth(
  async (ctx) => {
    const apiClient = setupApiClient(ctx);

    //const user = decode();

    //encriptado/decodificar
    //descriptografado - a gente nao consegue

    return {
      props: {},
    };
  },
  {
    permissions: ["metrics.list3"],
    roles: ["administrator"],
  }
);
