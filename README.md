## BLOG with Next.js 13

練習專案，來源 : [Let’s build a BLOG with Next.js 13 (Sanity v3, TypeScript, Tailwind CSS, Auth, CMS, Preview Mode)](https://www.youtube.com/live/x3fCEPFgUSM?feature=share)。

## 功能

- 瀏覽文章
- ISR 更新文章
- Sanity 後台發布文章
- Sanity 後台即時預覽文章

## 安裝

### 安裝套件

```bash
pnpm install
```

### 環境變數說明

請參考 [.env.example]() 檔案。

```env
NEXT_PUBLIC_SANITY_PROJECT_ID= # your sanity project id
NEXT_PUBLIC_SANITY_DATASET= # your sanity project dataset
NEXT_PUBLIC_SANITY_API_VERSION= # your sanity api version
```

### 運行專案

#### Development
```bash
pnpm run dev
```

#### Build
```bash
pnpm run build
```
```bash
pnpm run start
```


## 專案技術

- Next.js 13
- React
- Tailwind CSS
- TypeScript
- Sanity v3
