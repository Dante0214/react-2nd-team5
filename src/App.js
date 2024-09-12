import { Route, Routes } from "react-router-dom";
import "./App.css";
import RecipePage from "./pages/RecipePage/RecipePage";
import AppLayout from "./common/layout/AppLayout/AppLayout";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import "./common/styles/font.css";
import HomePage from "./pages/HomePage";
import RecipeDetailPage from "./pages/RecipeDetailPage/RecipeDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />

        <Route path="recipes">
          <Route index element={<RecipePage />} />
          <Route path=":recipeName" element={<RecipeDetailPage />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
