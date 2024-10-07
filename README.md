# League of Legends Dex

리그오브레전드의 챔피언 목록(챔피언 스탯, 스킬, 스킨등 정보 제공)과 아이템 목록(아이템 조합 , 가격 등), 현재 사용할수있는 무료 챔피언들의 목록을 확인 할 수 있습니다

## 🔥배포 링크

([league-of-legends-dex-project-w9xn.vercel.app](https://league-of-legends-dex-project-w9xn.vercel.app/))

<details>
<summary>📦폴더 구조</summary>

```

lol-dex
├─ public
│  └─ images
│     ├─ aphelios.jpg
│     ├─ icon.svg
│     ├─ leagueoflegendsLogo.png
│     ├─ lolLogIcon.png
│     ├─ teemo.png
│     └─ yuumi.jpg
├─ src
│  ├─ app
│  │  ├─ api
│  │  │  └─ rotation
│  │  │     └─ route.ts
│  │  ├─ champions
│  │  │  ├─ [id]
│  │  │  │  └─ page.tsx
│  │  │  └─ page.tsx
│  │  ├─ globals.css
│  │  ├─ items
│  │  │  ├─ [id]
│  │  │  │  └─ page.tsx
│  │  │  └─ page.tsx
│  │  ├─ layout.tsx
│  │  ├─ not-found.tsx
│  │  ├─ page.tsx
│  │  ├─ reset.css
│  │  └─ rotation
│  │     ├─ (components)
│  │     │  └─ RotationChampionPage.tsx
│  │     └─ page.tsx
│  ├─ components
│  │  ├─ Card.tsx
│  │  └─ ClientHeader.tsx
│  ├─ types
│  │  ├─ Champion.ts
│  │  ├─ ChampionRotation.ts
│  │  └─ Item.ts
│  └─ utils
│     ├─ riotApi.ts
│     └─ serverApi.ts
├─ .env.local
├─ .eslintrc.json
├─ .gitignore
├─ .prettierrc
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ README.md
├─ tailwind.config.ts
├─ tsconfig.json
└─ yarn.lock

```

 </details>

## 💻 개발 환경

![](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white)
![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![](https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![](https://img.shields.io/badge/nextdotjs-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![](https://img.shields.io/badge/riotgames-EB0029?style=for-the-badge&logo=riotgames&logoColor=white)
![](https://img.shields.io/badge/vscode-06B6D4?style=for-the-badge&logo=vscode&logoColor=white)

# 주요 기능

### 메인페이지
![메인페이지](https://github.com/user-attachments/assets/702b6969-eb62-4a77-861e-cee79266ae7f)

### 챔피언 목록

#### 전체 챔피언 목록을 확인할 수 있습니다
![챔피언 목록](https://github.com/user-attachments/assets/53f4153f-c8c7-499b-9982-c14e7a33f665)

### 챔피언 상세 정보

#### 챔피언의 스토리와 스탯(기본 체력 , 마나/기력 , 공격력/주문력, 방어력 / 마법방어력) , 스킬구성 , 스킨 종류 를 확인 할 수 있습니다.
![챔피언 상세 정보](https://github.com/user-attachments/assets/af6cf378-e308-42dc-ae90-09d9300b249b)
![챔피언 상세 정보](https://github.com/user-attachments/assets/9518121e-4381-4c55-a157-546b5dbf6dfd)

### 아이템 목록

#### 전체 아이템 목록을 확인할 수 있습니다.

#### 아이템의 이름, 정보, 가격을 확인할 수 있습니다.

![아이템 목록](https://github.com/user-attachments/assets/2a36dfb0-5e87-4d73-93b1-477a37e5aaeb)

### 아이템 상세 정보

#### 아이템의 능력치 , 조합아이템 목록을 확인할 수 있습니다.

![아이템 상세 정보](https://github.com/user-attachments/assets/e7c3a574-f076-4f37-b08c-48de26a51413)

### 챔피언 로테이션 정보

#### 현재 무료로 사용가능한 챔피언 목록 및 신규 소환사가 무료로 사용할 수 있는 챔피언의 목록을 확인할 수 있습니다.

![챔피언 로테이션 정보](https://github.com/user-attachments/assets/1efaef0a-3aba-490b-9ec6-ff25a88aad25)

### 트러블 슈팅
([트러블슈팅보러가기](https://velog.io/@ty_lee/League-of-Legends-Dex-트러블-슈팅)))
