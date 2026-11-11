import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "HShop",
    short_name: "HShop",
    start_url: "/",
    display: "standalone",
    background_color: "white",
    theme_color: "white",
    icons: [
      {
        src: "/icons/apple-icon-1.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
