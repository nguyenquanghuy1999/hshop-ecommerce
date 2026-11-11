import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "HShop",
    short_name: "HShop",
    start_url: "/",
    display: "standalone",
    icons: [
      {
        src: "/icons/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
