import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";
import { validateUserPermissions } from '../utils/validateUserPermissions';

type UseCanProps = {
  permissions?: string[];
  roles?: string[];
}

export function useCan({ permissions, roles }: UseCanProps) {

  const { user, isAuthenticated } = useContext(AuthContext)

  if (!isAuthenticated) {
    return false;
  }

  return validateUserPermissions({ user, permissions, roles });

}