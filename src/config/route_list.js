import { ROUTES } from "../config";
import AboutPage from "../view/About/Index";
import SignIn from "../view/Auth/SignIn";
import SignUp from "../view/Auth/SignUp";
import ContactUsPage from "../view/ContactUs";
import HomePage from "../view/Home";

export const ROUTES_LIST = [
    {
        path: ROUTES.AUTH.SIGN_IN,
        element: <SignIn />
    },
    {
        path: ROUTES.AUTH.SIGN_UP,
        element: <SignUp />
    },
    {
        path: ROUTES.AUTH.FORGOT_PASSWORD,
        element: <div>Forgot Password</div>
    },
    {
        path: ROUTES.AUTH.RESET_PASSWORD,
        element: <div>Reset Password</div>
    },
    {
        path: ROUTES.HOME,
        element: <HomePage />,
        isAuth: true,
    },
    {
        path: ROUTES.ABOUT,
        element: <AboutPage />,
        isAuth: true,
    }, {
        path: ROUTES.CONTACT,
        element: <ContactUsPage />,
        isAuth: true,
    }, 
];