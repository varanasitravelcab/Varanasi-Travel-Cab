export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/dashboard/",
        ],
      },
    ],
    sitemap: "https://www.varanasitravelcab.com/sitemap.xml",
  };
}