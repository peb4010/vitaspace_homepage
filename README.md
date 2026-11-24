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

GitHub Actions의 `Deploy to Firebase Hosting` 워크플로가 빌드한 `dist/`를 Firebase 프로젝트 `officehive`에 배포합니다.

- `main`에 push하면 운영 사이트 `https://officehive.web.app/`가 갱신됩니다.
- 수동 실행의 `channel`을 `client-review`로 선택하면 운영 화면을 유지하고 30일 유효한 검토용 주소를 생성·갱신합니다. `live`는 운영 배포입니다.
- 의뢰인에게는 배포 결과 주소 뒤에 `/compare/a/`를 붙여 공유합니다. 화면 아래 A·B·C·D 버튼으로 현재 화면과 세 가지 시안을 비교할 수 있습니다.
- 검토용으로만 올릴 때는 커밋 메시지에 `[skip ci]`를 넣어 push 자동 운영 배포를 생략한 후, 수동으로 `client-review`를 실행합니다.
- 배포 인증과 API 주소는 GitHub의 `prod` 환경에 설정돼 있습니다. 이 환경은 `main` 브랜치만 허용합니다.

## 필수 확인

상담신청 폼은 빌드 환경의 `PUBLIC_VITASPACE_API_URL` 아래 `/api/vitaspace`로 전송합니다. 배포 시 GitHub `prod` 환경의 값을 사용하며, 로컬 기본 주소는 `http://localhost:3000`입니다. 검토용 주소에서 실제 접수를 운영하려면 API의 CORS 허용과 수신 결과를 별도로 확인해야 합니다.
