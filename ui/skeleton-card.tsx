import clsx from "clsx";

export const SkeletonCart = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <>
      <div
        className={clsx("rounded-2xl bg-gray-100/80 p-4", {
          "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent":
            isLoading,
        })}
      >
        <div className="space-y-3">
          <div className="bg-gray-300 rounded-lg h-14"/>
          <div className="w-11/12 h-3 bg-gray-400 rounded-lg"/>
          <div className="w-8/12 h-3 bg-gray-300 rounded-lg"/>
        </div>
      </div>
    </>
  );
};
