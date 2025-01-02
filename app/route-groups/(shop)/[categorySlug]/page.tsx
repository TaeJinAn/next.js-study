import { getCategory } from "@/data/category";
import { SkeletonCart } from "@/ui/skeleton-card";

export default async function Page({
  params,
}: {
  params: { categorySlug: string };
}) {
  const category = await getCategory(params.categorySlug);

  return (
    <>
      <div className="space-y-4">
        <h1 className="text-xl font-medium text-gray-800/80">
          모든 {category.name}
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