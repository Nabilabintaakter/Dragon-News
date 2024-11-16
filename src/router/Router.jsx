import {
    createBrowserRouter,
    Navigate,
} from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import News from "../layout/NewsDetails";
import About from "../layout/About";
import Career from "../layout/Career";
import Login from "../layout/Login";
import MainSection from "../components/layoutComponents/mainSection";
import AuthLayout from "../layout/AuthLayout";
import Register from "../layout/Register";
import NewsDetails from "../layout/NewsDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '',
                element: <Navigate to={'/category/01'}></Navigate>,
            },
            {
                path: '/category/:id',
                element: <MainSection></MainSection>,
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            },

        ]
    },
    {
        path: "/news/:id",
        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
        loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
        path: "/about",
        element: <About></About>,
    },
    {
        path: "/career",
        element: <Career></Career>,
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children:[
            {
                path: "/auth/login",
                element: <Login></Login>,   
            },
            {
                path: "/auth/register",
                element: <Register></Register>,   
            }
        ]
    },
    {
        path: "*",
        element: <p>Error</p>,
    },
    {
        future: {
            v7_startTransition: true,
            v7_skipActionErrorRevalidation: true,
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true,
            v7_partialHydration: true,
            v7_relativeSplatPath: true,
        },
    }
  ]);
export default router;