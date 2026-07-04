import type { MetadataRoute } from "next";

const projects = [
  "bacar", "chestdrop", "clouds-network", "countdown-web",
  "itvt", "klubuntu", "mvlist", "odliczamydo",
  "onemylist", "oneros", "powrot-roxmb", "reqqel-music",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kbdev.run";

  const staticPages = [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/noanim`, lastModified: new Date() },
    { url: `${baseUrl}/archive`, lastModified: new Date() },
    { url: `${baseUrl}/en`, lastModified: new Date() },
    { url: `${baseUrl}/en/noanim`, lastModified: new Date() },
    { url: `${baseUrl}/en/archive`, lastModified: new Date() },
  ];

  const projectPages = projects.flatMap((slug) => [
    { url: `${baseUrl}/project/${slug}`, lastModified: new Date() },
    { url: `${baseUrl}/en/project/${slug}`, lastModified: new Date() },
  ]);

  return [...staticPages, ...projectPages];
}
