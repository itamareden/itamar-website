import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Development only: let other devices on the home Wi-Fi (e.g. a phone
  // opening http://10.100.102.9:3000) load the dev server's scripts.
  // Next blocks this by default; it has no effect on the live site.
  allowedDevOrigins: ["10.100.102.*"],
  images: {
    // Video stills from Mux (e.g. the closing video's card on day 5).
    // No `search` key, so the ?time=… that picks the frame is allowed.
    remotePatterns: [{ protocol: "https", hostname: "image.mux.com", pathname: "/**" }],
  },
};

export default nextConfig;
