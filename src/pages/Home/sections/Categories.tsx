import { TCategory } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
import {
  //   useParams,
  //   useSearchParams,
  //   useLocation,
  useNavigate,
} from "react-router-dom";

export function Categories() {
  const [categories, setCategories] = useState<TCategory[]>([]);
  //   const searchParams = useSearchParams();
  //   const location = useLocation();
  const navigate = useNavigate();

  async function getCategories() {
    // const categories = await fetch("https://pickbazar-api-kjy8.onrender.com/api/categories", {
    //     method: "GET"
    // }).then((res) => res.json())

    const categories = await axios.get(
      "https://pickbazar-api-kjy8.onrender.com/api/categories"
    );
    setCategories(categories.data);
  }

  useEffect(() => {
    getCategories();
  }, []);

  function filter(id: number) {
    const query = location.search.replace("?", "");
    if (query) {
      if (query.split("=")[0] !== "category") {
        navigate(`?category=${id}&${query}`);
      } else {
        navigate(`?category=${id}&${query.split("&")[1]}`);
      }
    } else {
      navigate(`?category=${id}`);
    }
  }

  return (
    <div className="w-[240px] h-[calc(100vh-80px)] sticky z-40 top-20 left-0 bg-white p-8 flex flex-col gap-y-5">
      {categories.map((category) => (
        <li
          key={category.id}
          className="cursor-pointer flex items-center gap-x-4"
          onClick={() => filter(category.id)}
        >
          <span className="block w-4">{parse(category.icon)}</span>
          <span>{category.name}</span>
        </li>
      ))}
      <li
        className="cursor-pointer flex items-center gap-x-4"
        onClick={() => navigate("?")}
      >
        <span>All</span>
      </li>
    </div>
  );
}
