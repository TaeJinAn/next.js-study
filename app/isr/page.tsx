import { ExternalLink } from "@/ui/external-link";

export default function Page() {
  return (
    <div className="prose-sm prose max-w-none">
      <h1 className="text-xl font-bold">증분적 정적 재생성</h1>
      <ul>
        <li>3개 포스트는 ISR을 사용하여 데이터를 가져옴</li>
        <li>캐시된 응답은 10초 동안 최신 상태로 유지</li>
        <li>빌드 간에도 가져오기 캐시를 유지할 수 있음</li>
      </ul>
      <div className="flex gap-2">
        <ExternalLink href="https://nextjs.org/docs/app/buliding-your-application/data-fetching/fetching#revalidating-data">
          문서
        </ExternalLink>
      </div>
    </div>
  );
}
