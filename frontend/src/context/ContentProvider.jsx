import { useEffect, useState } from "react";
import { ContentContext } from "./ContentContext";

export default function ContentProvider({ children }) {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiUrl = import.meta.env.VITE_API_URL;
  // const apiUrl = "http://localhost:5000/api/content";

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await fetch(apiUrl);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setContent(data);
      } catch (err) {
        console.error("Error loading content:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [apiUrl]);

  return (
    <ContentContext.Provider value={{ content, loading }}>
      {children}
    </ContentContext.Provider>
  );
}
