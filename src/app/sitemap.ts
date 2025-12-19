import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://fluxiadesign.com/",
      lastModified: new Date(),
    },
    {
      url: "https://fluxiadesign.com/shop/",
      lastModified: new Date(),
    },
  ];
}
