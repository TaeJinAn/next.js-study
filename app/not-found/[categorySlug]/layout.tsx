import { getCategories, getCategory } from "@/data/category";
import { ClickCounter } from "@/ui/click-counter";
import { TabGroup } from "@/ui/tab-group";
import { notFound } from "next/navigation";

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { categorySlug: string };
}) {
  const category = getCategory(params.categorySlug);
  const items = getCategories(params.categorySlug);
  if (params.categorySlug === "does-not-exist") {
    notFound();
  }

  return (
    <>
      <div className="space-y-9">
        <div className="flex justify-between">
          <TabGroup
            path={`/not-found/${category.slug}`}
            items={[
              { text: "전체" },
              ...items.map((x) => ({ text: x.name, slug: x.slug })),
              { text: "미존재 하위 항목",
                slug: "dose-not-exist"
              }
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
