# 개발자 인수인계 안내

## 프로젝트 성격

- Astro를 사용해 컴포넌트화한 정적 사이트입니다.
- 반응형 화면이 적용되어 있습니다.
- 원본 소스는 `src/`에 있으며, 빌드 결과인 `dist/`를 웹서버에 올립니다.

## 우선 수정 권장 항목

1. 실제 회사 연락처, 주소, 사업자 정보 반영
2. 실제 납품 사진과 프로젝트 설명 교체
3. 브랜드 로고 사용 권한 확인 후 공식 로고 적용
4. 상담신청 폼의 실제 전송 기능 개발
5. 개인정보처리방침 페이지 및 동의 문구 정비
6. 검색엔진용 제목·설명·대표 이미지 설정
7. 운영 도메인 연결 및 HTTPS 적용

## 디자인 기준

- 주색상: 딥 블랙 `#101718`, 라임 `#b8ef5a`
- 본문: Noto Sans KR
- 영문 및 숫자: Manrope
- 핵심 메시지: “일하는 방식을 설계하고, 공간의 성과를 완성합니다.”
- 주요 고객: 정부기관, 공공기관, 기업 구매·총무·시설 담당자

## 외부 리소스

- Google Fonts에서 글꼴을 불러옵니다.
- Unsplash 이미지 URL을 일부 사용합니다.
- 운영 전 실제 비타스페이스 납품 이미지로 교체하는 것을 권장합니다.

## 상담 폼

현재 JavaScript는 제출 시 완료 메시지만 표시합니다. 실제 운영을 위해서는 다음 중 하나를 연결하세요.

- 회사 이메일 전송 API
- 네이버 폼 또는 외부 폼 서비스
- CRM/고객관리 시스템
- 자체 서버 및 데이터베이스

개인정보를 수집하면 개인정보처리방침, 보관기간, 수집 항목과 목적을 실제 운영방식에 맞게 명시해야 합니다.

## Astro 구조

- `src/layouts/BaseLayout.astro`: 공통 `<head>`, Header, Footer, 페이지 슬롯
- `src/components/Header.astro`: 상단 내비게이션과 현재 페이지 표시
- `src/components/Footer.astro`: 공통 하단 영역
- `src/components/PageHero.astro`: 상세 페이지 상단 히어로
- `src/components/SectionHead.astro`: 섹션 제목/설명 패턴
- `src/components/ContactForm.astro`: 상담 신청 폼과 완료 메시지 스크립트
- `src/components/Card.astro`, `ProjectCard.astro`, `BrandCard.astro`, `ProcessStep.astro`: 반복 콘텐츠 카드
- `src/styles/home.css`: 메인 전용 스타일
- `src/styles/detail.css`: 상세 페이지 공통 스타일

## 경로 구조

페이지 링크는 `/process/`처럼 도메인 루트를 기준으로 작성되어 있습니다. 하위 폴더에 배포하려면 각 HTML 파일의 링크와 에셋 경로를 배포 위치에 맞게 수정해야 합니다.

## 실행 및 빌드

Astro 7을 사용하므로 Node.js 22.12 이상이 필요합니다. nvm 환경에서는 `.nvmrc` 기준으로 맞춘 뒤 실행하세요.

```bash
nvm install
nvm use
npm run dev
npm run build
npm run check
```
