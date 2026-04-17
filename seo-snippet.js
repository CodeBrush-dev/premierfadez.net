// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.premierfadez.net",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.premierfadez.net/","title_tag":"Barber Shop Arlington & Modern Cuts | Premier Fadez","meta_description":"Premier Fadez Arlington barbershop offers modern cuts, precision fades, beard treatments and grooming services in North Arlington near I-30. Book your next look."},{"page_url":"https://www.premierfadez.net/services-6","title_tag":"Haircut Services Arlington & Precision Fades | Premier Fadez","meta_description":"Explore haircut services Arlington including precision fades, hot towel shave, clean up & edge, color and beard treatments. Modern grooming services at Premier Fadez."},{"page_url":"https://www.premierfadez.net/book-online","title_tag":"Book Haircut Services Arlington Online | Premier Fadez","meta_description":"Book Premier Fadez Arlington barber shop online for modern cuts, precision fades, beard treatments and grooming services. Reserve your next appointment in minutes."},{"page_url":"https://www.premierfadez.net/contact-7","title_tag":"Premier Fadez Arlington Barber Shop Contact","meta_description":"Contact Premier Fadez Arlington for barber shop appointments, haircut services, beard treatments and grooming services. Call or email our North Arlington location."},{"page_url":"https://www.premierfadez.net/service-page","title_tag":"Grooming Services & Precision Fades | Premier Fadez","meta_description":"Discover grooming services Arlington with precision fades, modern cuts, beard treatments and more at Premier Fadez. View service details and upcoming sessions."}],"keywords":["Premier Fadez Arlington","Barber Shop Arlington","Haircut Services Arlington","Modern Cuts Arlington","Beard Treatments Arlington","Precision Fades Arlington","Hot Towel Shave Arlington","Clean Up & Edge Arlington","Hair Color Services Arlington","Grooming Services Arlington"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "Barbershop",
  "@id": "https://www.premierfadez.net/#barbershop",
  "url": "https://www.premierfadez.net/",
  "name": "Premier Fadez Barbershop",
  "description": "Premier Fadez @ Phenix Salon Suites specializes in modern cuts and beard treatments. A modern barbershop approach that blends traditional skills with contemporary trends, serving clients in the North Arlington / Fort Worth, TX area.",
  "image": [
    "https://static.wixstatic.com/media/4bcafd_59c6c5366cf548959b679d583424291a~mv2.png/v1/fill/w_102,h_79,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Transparent%20Logo%20for%20Black%20Background_pn.png",
    "https://static.wixstatic.com/media/4bcafd_83b1a52e18f14aeaa94e323c660950e8~mv2.jpg/v1/fill/w_110,h_73,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/4bcafd_83b1a52e18f14aeaa94e323c660950e8~mv2.jpg",
    "https://static.wixstatic.com/media/4bcafd_1cd88a0530e7410bb94e53aabbaae986~mv2.jpg/v1/crop/x_1503,y_0,w_5249,h_5504/fill/w_453,h_475,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/barberpole.jpg",
    "https://static.wixstatic.com/media/4bcafd_6f5fc86cbf81464ea232d762140e65ec~mv2.jpg/v1/crop/x_0,y_547,w_3000,h_2905/fill/w_285,h_276,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/barbercut2.jpg",
    "https://static.wixstatic.com/media/26645e_3cabef7e421c45dc90f187bf48d4f6dd~mv2.jpg/v1/crop/x_499,y_0,w_2203,h_2133/fill/w_285,h_276,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/handsome-man-cutting-beard-barber-salon.jpg",
    "https://static.wixstatic.com/media/4bcafd_900948e97ec242068bfde345700b3248~mv2.jpg/v1/crop/x_0,y_454,w_2513,h_2434/fill/w_285,h_276,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/fadecut.jpg",
    "https://static.wixstatic.com/media/4bcafd_5e85c96616da44e484391e17cbdf8c4b~mv2.png/v1/crop/x_274,y_0,w_500,h_500/fill/w_228,h_228,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/premierheader2.png"
  ],
  "telephone": "817-851-1531",
  "email": "tamekasweett@premierfadez.net",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1100 Bridgewood Dr Suite 119",
    "addressLocality": "Fort Worth",
    "addressRegion": "TX",
    "postalCode": "76112",
    "addressCountry": "US"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Fort Worth"
    },
    {
      "@type": "City",
      "name": "Arlington"
    }
  ],
  "sameAs": [],
  "priceRange": "$$",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Barber Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "The Premier Fade",
        "itemOffered": {
          "@type": "Service",
          "name": "The Premier Fade",
          "description": "Smooth, clean-cut style with a nice fade."
        }
      },
      {
        "@type": "Offer",
        "name": "Clean up & edge",
        "itemOffered": {
          "@type": "Service",
          "name": "Clean up & edge",
          "description": "Quick cut to freshen up your look."
        }
      },
      {
        "@type": "Offer",
        "name": "Shave",
        "itemOffered": {
          "@type": "Service",
          "name": "Shave",
          "description": "Hot towel treatment with a fresh, smooth shave."
        }
      },
      {
        "@type": "Offer",
        "name": "Color",
        "itemOffered": {
          "@type": "Service",
          "name": "Color",
          "description": "Hair color service to brighten up your look."
        }
      },
      {
        "@type": "Offer",
        "name": "Cut & Shave",
        "itemOffered": {
          "@type": "Service",
          "name": "Cut & Shave",
          "description": "Classic smooth shave with a haircut."
        }
      },
      {
        "@type": "Offer",
        "name": "Wash & Beard Treatment",
        "itemOffered": {
          "@type": "Service",
          "name": "Wash & Beard Treatment",
          "description": "Simple shampoo, condition and blow out style with beard treatment."
        }
      },
      {
        "@type": "Offer",
        "name": "Haircut & Beard Trim",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "35-45",
          "priceCurrency": "USD"
        },
        "itemOffered": {
          "@type": "Service",
          "name": "Haircut & Beard Trim",
          "description": "Haircut and beard trim service; booking duration approximately 45 minutes."
        }
      }
    ]
  },
  "review": {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "Robb Walters"
    },
    "reviewBody": "This is a great location! It's been a long time since I've had a haircut like this In terms of customer service, haircutting, and attention to detail, she is the best. My hairdresser was kind, attentive, and gave me just the haircut I requested. If I lived nearby, this would be my one and only stop for all of my grooming requirements."
  },
  "potentialAction": [
    {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.premierfadez.net/book-online",
        "inLanguage": "en-US",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "result": {
        "@type": "Reservation",
        "name": "Book a barber service"
      }
    },
    {
      "@type": "ContactAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.premierfadez.net/contact-7",
        "inLanguage": "en-US",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      }
    }
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
