import { useEffect, useState } from "react";
import { ContentContext } from "./ContentContext"
import axios from "axios";

export default function ContentProvider({ children }) {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

    const apiUrl = import.meta.env.VITE_API_URL;
  // const apiUrl = "http://localhost:5000/api/content";

  const loadContent = async () => {
    try {
      const res = await axios.get(apiUrl);
      setContent(res.data);
    } catch (err) {
      console.error("Error loading JSON:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadContent();
  }, []);

  return (
    <ContentContext.Provider value={{ content, loading }}>
      {children}
    </ContentContext.Provider>
  );
}
