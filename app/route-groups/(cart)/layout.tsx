import { Boundary } from "@/ui/boundary";
import { TabNavItem } from "@/ui/tab-nav-item";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Boundary
        labels={["checkout layout"]}
        color="blue"
        animateRerendering={false}
      >
        <div className="space-y-9">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-4">
              <TabNavItem href="/route-groups">Back</TabNavItem>
            </div>
          </div>

          <div>{children}</div>
        </div>
      </Boundary>
    </>
  );
}
