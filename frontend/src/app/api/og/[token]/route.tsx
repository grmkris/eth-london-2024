import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
// App router includes @vercel/og.
// No need to install it.

export const runtime = "edge";

export async function GET(
  request: NextRequest,
  { params }: { params: { token: string } },
) {
  const slug = params.token;
  const greeting = `${"Hello"} ${slug}!!!`;
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          color: "black",
          background: "white",
          width: "100%",
          height: "100%",
          padding: "50px 200px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {`👋 ${greeting} `}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
