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
  const greeting = `Greeting ${slug}!`;
  const match = "Manchester City vs PSG";
  const score = "Score: Not started yet";
  const odds = "Odds: PSG 3.5 <-> Manchester City 2.0";

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
          display: "flex",
          flexDirection: "column", // Adjust layout to column for stacking elements
        }}
      >
        <div>{`👋 ${greeting}`}</div>
        <div style={{ fontSize: 30, marginTop: 20 }}>{match}</div>
        <div style={{ fontSize: 25, marginTop: 20 }}>{score}</div>
        <div style={{ fontSize: 20, marginTop: 20 }}>{odds}</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
