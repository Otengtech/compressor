import { useEffect, useState } from "react"
import { ContentContext } from "./ContentContext"

export default function ContentProvider({ children }) {
    const [content, setContent] = useState(null)
    const [loading, setLoading] = useState(true)

    // fetching content from backend
    useEffect(() => {
        fetch("http://localhost:5000/api/content")
            .then(res => res.json())
            .then(data => {
                setContent(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error loading content:", err);
                setLoading(false);
            });
    }, []);

    return (
        <ContentContext.Provider value={{content, loading}}>
            {children}
        </ContentContext.Provider>
    );

}