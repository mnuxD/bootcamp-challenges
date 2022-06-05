import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "00qjih56d7oj",
    accessToken: "3bWA3hs98cevMAAzyuprRsH-sn5Td9fSk019lkBfTaY",
    host: "preview.contentful.com",
  });

  const getArticles = async () => {
    try {
      const articles = await client.getEntries({
        content_type: "articles",
      });
      const { items } = articles;
      const sanitizedData = items.map((item) => {
        const img = item?.fields?.image?.fields?.file;
        const { name, email } = item?.fields?.author?.fields || {};
        return {
          ...item.fields,
          image: img,
          author: `${name} - ${email}`,
        };
      });
      return sanitizedData;
    } catch (error) {
      console.log(error);
    }
  };

  return { getArticles };
};

export default useContentful;
