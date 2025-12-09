import { useEffect, useState } from "react";
import { ContentContext } from "./ContentContext";

export default function ContentProvider({ children }) {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  // Always fetch from your backend proxy
  const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000/api/content";

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
