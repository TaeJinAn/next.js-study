import { ExternalLink } from "@/ui/external-link";

export default function Page() {
  return (
    <div className="prose-sm prose max-w-none">
      <h1 className="text-xl font-bold">라우팅 그룹</h1>
      <ul>
        <li>
          공유된 레이아웃에서 라우트 세그먼트를 제외
        </li>
        <li>
          URL 구조에 영향을 주지 않고 라우트를 조직
        </li>
        <li>
          응용 프로그램의 최상위를 분할하여 여러개의 루트 레이아웃을 생성
        </li>
      </ul>
      <div className="flex gap-2">
        <ExternalLink href="https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes">
          문서
        </ExternalLink>
      </div>
    </div>
  );
}
