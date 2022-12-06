import { useAuthentication } from "../contexts/AuthenticationContext";
import { CartProvider } from "../contexts/CartContext";

import { AppRoutes } from "./AppRoutes";
import { AuthRoutes } from "./AuthRoutes";

export function Routes() {
  const { isAuthenticated } = useAuthentication();

  return isAuthenticated ? <CartProvider><AppRoutes /></CartProvider> : <AuthRoutes />;
}
