import { getCategory } from "@/data/category";
import { SkeletonCart } from "@/ui/skeleton-card";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: { subCategorySlug: string };
}) {
  const category = getCategory(params.subCategorySlug);
  if (params.subCategorySlug === "dose-not-exist") notFound();

  return (
    <>
      <div className="space-y-4">
        <h1 className="text-xl font-medium text-gray-800/80">
          {category.name}
        </h1>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <SkeletonCart key={i} />
          ))}
        </div>
      </div>
    </>
  );
}