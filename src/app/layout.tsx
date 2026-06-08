import type { Metadata } from "next"
import { Providers } from "@/components/providers"
import "@/styles/globals.css"

export const metadata: Metadata = {
  title: "결혼식에 초대합니다",
  description: "신랑 ㄱㄱㄱ · 신부 ㄹㄹㄹ의 결혼식에 초대합니다",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "결혼식에 초대합니다",
    description: "신랑 ㄱㄱㄱ · 신부 ㄹㄹㄹ의 결혼식에 초대합니다",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <script
          async
          src="https://developers.kakao.com/sdk/js/kakao.js"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.Kakao && !window.Kakao.isInitialized()) {
                window.Kakao.init('${process.env.NEXT_PUBLIC_KAKAO_APP_KEY || ""}');
              }
            `,
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
