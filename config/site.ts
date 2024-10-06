export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "中文博客列表导航",
  description: "尝试链接所有中文博客",
  navItems: [
    {
      label: "首页",
      href: "/",
    },
    {
      label: "成员列表",
      href: "/list",
    },
    {
      label: "博客",
      href: "/blog",
    },
    {
      label: "关于",
      href: "/about",
    },
  ],
  links: {
    github: "https://github.com/zhblogs",
  },
};
