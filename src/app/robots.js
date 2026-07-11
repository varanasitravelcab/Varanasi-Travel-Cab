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
    sitemap: "https://varanasitravelcab.com/sitemap.xml",
    host: "https://varanasitravelcab.com",
  };
}