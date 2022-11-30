import { useAuthentication } from "../contexts/AuthenticationContext";

import { AppRoutes } from "./AppRoutes";
import { AuthRoutes } from "./AuthRoutes";

export function Routes() {
  const { isAuthenticated } = useAuthentication();

  return isAuthenticated ? <AppRoutes /> : <AuthRoutes />;
}
