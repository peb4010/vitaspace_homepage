# VITASPACE 공공기관 사무가구 홈페이지

비타스페이스 공공기관·기업 사무환경 홈페이지의 Astro 기반 정적 사이트 소스입니다.

## 구성

- `src/pages/index.astro` — 메인 화면
- `src/pages/process.astro` — 상담·납품 진행방식
- `src/pages/projects.astro` — 납품사례
- `src/pages/about.astro` — 회사소개
- `src/pages/brands.astro` — 취급브랜드
- `src/pages/contact.astro` — 상담신청
- `src/layouts/BaseLayout.astro` — 공통 HTML 레이아웃
- `src/components/` — Header, Footer, 폼, 카드 등 공통 컴포넌트
- `src/styles/home.css` — 메인 페이지 스타일
- `src/styles/detail.css` — 상세 페이지 공통 스타일
- `DEVELOPER-HANDOFF.md` — 개발자 전달 및 수정 안내

## 로컬 실행

Astro 7 기준으로 Node.js 22.12 이상이 필요합니다. nvm을 사용한다면 먼저 아래처럼 Node 버전을 맞춰주세요.

```bash
nvm install
nvm use
```

루트 경로(`/process/`, `/about/` 등)를 사용하므로 파일을 직접 더블클릭하지 말고 Astro 개발 서버로 실행하세요.

```bash
npm run dev
```

브라우저에서 `http://localhost:8080`으로 접속하면 됩니다.

운영용 정적 파일을 생성하려면 아래 명령을 사용하세요.

```bash
npm run build
```

생성 결과는 `dist/`에 만들어집니다. 로컬에서 빌드 가능 여부를 점검하려면 아래 명령을 사용하세요.

```bash
npm run check
```

## 배포

정적 사이트를 지원하는 일반 웹호스팅, 사내 서버, Netlify, Vercel, Cloudflare Pages 등에 `dist` 폴더의 내용을 배포할 수 있습니다.

## 필수 확인

현재 상담신청 폼은 화면 시연용이며 실제 문의를 전송하거나 저장하지 않습니다. 운영 전 이메일, CRM, 데이터베이스 또는 폼 서비스와 연결해야 합니다.
