import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { title, subtitle } from "@/components/primitives";
import MemberCard from "@/components/memberCard";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-16 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title({ size: "sm" })}>中文博客列表导航</span>
        <div className={subtitle({ class: "mt-4" })}>尝试链接所有中文博客</div>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href="/signup"
        >
          加入
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href="/list"
        >
          查看所有成员
        </Link>
      </div>
      <div className={subtitle({ class: "mt-8 text-center" })}>随机博客</div>
      <div className="flex gap-3 flex-wrap justify-center">
        <MemberCard
          description="博客描述博客描述博客描述博客描述博客描述"
          link="https://www.example.com"
          name="博客名称"
        />
        <MemberCard
          description="博客描述博客描述博客描述博客描述博客描述"
          link="https://www.example.com"
          name="博客名称"
        />
        <MemberCard
          description="博客描述博客描述博客描述博客描述博客描述"
          link="https://www.example.com"
          name="博客名称"
        />
      </div>
    </section>
  );
}
