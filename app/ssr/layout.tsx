import { Metadata } from "next";
import { TabGroup } from "@/ui/tab-group";

export const metadata: Metadata = {
  title: "레벨업 Next.js: SSR",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  const ids = [{ id: "1" }, { id: "2" }, { id: "3" }];
  return (
    <>
      <div className="space-y-9">
        <TabGroup
          path="/ssr"
          items={[
            { text: "홈" },
            ...ids.map((x) => ({
              text: `포스트${x.id}`,
              slug: x.id,
            })),
          ]}
        />

        <div>{children}</div>
      </div>
    </>
  );
}
