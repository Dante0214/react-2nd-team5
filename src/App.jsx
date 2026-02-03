import { Route, Routes } from "react-router-dom";
import "./App.css";
import RecipePage from "./features/recipes/RecipePage";
import AppLayout from "./components/layout/AppLayout/AppLayout";
import NotFoundPage from "./features/NotFoundPage/NotFoundPage";
// import "./styles/font.css";
import HomePage from "./features/home/HomePage";
import RecipeDetailPage from "./features/recipe-detail/RecipeDetailPage";
import LoginPage from "./features/auth/LoginPage";
import WishPage from "./features/wish/WishPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="recipes">
          <Route index element={<RecipePage />} />
          <Route path=":recipeName" element={<RecipeDetailPage />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="wish/:type" element={<WishPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
