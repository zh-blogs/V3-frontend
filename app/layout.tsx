import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: '中文博客列表导航项目',
  description: '尝试链接几乎所有的中文博客',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}
