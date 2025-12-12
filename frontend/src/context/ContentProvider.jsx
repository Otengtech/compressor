import React, { useState, useEffect } from "react";
import axios from "axios";
import { ContentContext } from "./ContentContext";

export default function ContentProvider({ children }) {
  // const apiBase = "http://localhost:5000/api/content";
  const apiBase = "https://poutry-farm-n98d.onrender.com/api/content";

  // Store content for all pages in a single object
  const [content, setContent] = useState({
    home: null,
    products: null,
    about: null,
    blog: null,
    contact: null,
    review: null,
    team: null,
    privacy: null,
    faq: null,
  });

  // Store loading state for all pages
  const [loading, setLoading] = useState({
    home: true,
    products: false,
    about: false,
    blog: false,
    contact: false,
    review: false,
    team: false,
    privacy: false,
    faq: false,
  });

  // Load home page immediately
  useEffect(() => {
    loadPageContent("home");
  }, []);

  // Generic page loader
  const loadPageContent = async (page) => {
    if (content[page]) return; // already loaded

    setLoading((prev) => ({ ...prev, [page]: true }));
    try {
      const res = await axios.get(`${apiBase}/${page}`);
      setContent((prev) => ({ ...prev, [page]: res.data }));
    } catch (err) {
      console.error(`Error loading ${page} page:`, err);
    } finally {
      setLoading((prev) => ({ ...prev, [page]: false }));
    }
  };

  return (
    <ContentContext.Provider
      value={{
        // Spread content pages individually to keep old API compatible
        homeContent: content.home,
        productsContent: content.products,
        aboutContent: content.about,
        blogContent: content.blog,
        contactContent: content.contact,
        reviewContent: content.review,
        teamContent: content.team,
        privacyContent: content.privacy,
        faqContent: content.faq,

        // Spread loading flags individually to keep old API compatible
        loadingHome: loading.home,
        loadingProducts: loading.products,
        loadingAbout: loading.about,
        loadingBlog: loading.blog,
        loadingContact: loading.contact,
        loadingReview: loading.review,
        loadingTeam: loading.team,
        loadingPrivacy: loading.privacy,
        loadingFaq: loading.faq,

        loadPageContent, // same API
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}
