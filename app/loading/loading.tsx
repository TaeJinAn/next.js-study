import { SkeletonCart } from "@/ui/skeleton-card";

export default function Loading() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">로딩 중...</h1>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <SkeletonCart isLoading={true} />
        <SkeletonCart isLoading={true} />
        <SkeletonCart isLoading={true} />
        <SkeletonCart isLoading={true} />
        <SkeletonCart isLoading={true} />
        <SkeletonCart isLoading={true} />
      </div>
    </div>
  );
}
