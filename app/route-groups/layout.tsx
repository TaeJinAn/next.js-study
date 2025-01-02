import { getTopCategories } from "@/data/category";
import { ClickCounter } from "@/ui/click-counter";
import { TabGroup } from "@/ui/tab-group";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "레벨업 Next.js: 동적 라우팅",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const topCategories = getTopCategories();

  return (
    <>
      <div className="space-y-9">
        <div className="flex justify-between">
          <TabGroup
            path="/route-groups"
            items={[
              { text: "홈" },
              ...topCategories.map((x) => ({ text: x.name, slug: x.slug })),
              { text: '장바구니', slug: 'cart'},
              { text: '후기', slug: 'review'}
            ]}
          />
          <div className="self-start">
            <ClickCounter />
          </div>
        </div>

        <div>{children}</div>
      </div>
    </>
  );
}
