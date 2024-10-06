import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/button";

function InformationItem({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="font-bold text-gray-600 min-w-[10rem] dark:text-gray-200">
        {title}
      </div>
      <div className="text-left">{content}</div>
    </div>
  );
}

export default function MemberPage() {
  return (
    <div className="flex items-center justify-center mx-auto">
      <Card className="p-8 w-auto md:min-w-[34rem] md:max-w-[50rem] sm:max-w-sm">
        <CardHeader>
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">这是一个博客</h1>
            <p className="text-md text-gray-600 dark:text-gray-400">
              https://example.com
            </p>
          </div>
        </CardHeader>
        <CardBody>
          <div className="flex flex-col gap-2 justify-center">
            <InformationItem content="这是一个简介" title="博客简介" />
            <InformationItem content=" 生活, 随笔, 占位符" title="标签" />
            <InformationItem content="2024-10-01" title="加入日期" />
            <InformationItem content="Next.js" title="技术栈" />
            <InformationItem
              content="https://example.com/feed"
              title="订阅地址"
            />
            <InformationItem content="100" title="文章数量" />
            <InformationItem content="是" title="推荐状态" />
            <InformationItem content="是" title="是否可正常访问" />
            <InformationItem content="1" title="ID" />
          </div>
        </CardBody>
        <CardFooter>
          <Button color="danger" variant="bordered">
            删除
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
