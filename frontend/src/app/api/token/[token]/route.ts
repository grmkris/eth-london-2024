// api > hello > [slug] > route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { token: string } },
) {
  const slug = params.token;
  const greeting = `${"Hello"} ${slug}!!!`;

  // Construct ERC-721 valid JSON metadata object
  const metadata = {
    name: `PSG vs Manchester City`,
    description: "A friendly charity match",
    image: `https://eth-london-2024-frontend.vercel.app/api/og/${slug}`,
    // Additional properties can be added here as needed
  };

  return NextResponse.json(metadata);
}
