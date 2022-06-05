import { useEffect, useState } from "react";
import useContentful from "./hooks/useContentful";
import { ArticleList } from "./components/Articles/index";

function App() {
  const { getArticles } = useContentful();
  const [articles, setArticles] = useState();

  const getData = async () => {
    const articles = await getArticles();
    setArticles(articles);
  };

  useEffect(() => {
    getData();
  }, []);
  return <ArticleList list={articles} />;
}

export default App;
