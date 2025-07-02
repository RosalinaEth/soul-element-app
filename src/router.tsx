import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <QuizPage />,
  },
  {
    path: "/result",
    element: <ResultPage />,
  },
]);

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
