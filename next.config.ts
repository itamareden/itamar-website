import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Development only: let other devices on the home Wi-Fi (e.g. a phone
  // opening http://10.100.102.9:3000) load the dev server's scripts.
  // Next blocks this by default; it has no effect on the live site.
  allowedDevOrigins: ["10.100.102.*"],
  // While there is only one course, /courses opens it directly. Done here,
  // before any page is drawn, so the click goes straight to the course
  // with no empty page in between. Temporary (307), so search engines keep
  // /courses for the list it will become with a second course; then
  // remove this and build the list at app/[locale]/courses/page.tsx.
  async redirects() {
    return [
      {
        source: "/:locale(en|he)/courses",
        destination: "/:locale/courses/breathing-life",
        permanent: false,
      },
    ];
  },
  images: {
    // 75 is Next's default; 90 is kept for large photos where softness shows
    // (the challenge hero). Next 16 only serves the qualities listed here.
    qualities: [75, 90],
    // Video stills from Mux (e.g. the closing video's card on day 5).
    // No `search` key, so the ?time=… that picks the frame is allowed.
    // Stills of YouTube videos (e.g. a course trailer's cover).
    remotePatterns: [
      { protocol: "https", hostname: "image.mux.com", pathname: "/**" },
      { protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" },
    ],
  },
};

export default nextConfig;
