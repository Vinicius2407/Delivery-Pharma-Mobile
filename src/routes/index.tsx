import { useAuthentication } from "../contexts/AuthenticationContext";
import { CartProvider } from "../contexts/CartContext";

import { AppRoutes } from "./AppRoutes";
import { AuthRoutes } from "./AuthRoutes";
//import { IPConfigRoute } from "./IPConfigRoute";
//import { changeBaseURLAPI/*, checkApiResponse*/ } from "../services/api.service";

export function Routes() {
    const { isAuthenticated, apiHosterIP } = useAuthentication();

    //if (apiHosterIP != '') {
        /*const apichanged =*/ 
        //changeBaseURLAPI(apiHosterIP)
        //if(checkApiResponse()) {
        return isAuthenticated ? <CartProvider><AppRoutes /></CartProvider> : <AuthRoutes />
        //} else {
            //return <IPConfigRoute />
        //}
    //} else {
    //    return <IPConfigRoute />
    //}
}
