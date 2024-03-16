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
    name: `Asset ${slug}`, // A title for your asset
    description: greeting, // A description for your asset, using the greeting
    image: `https://eth-london-2024-frontend.vercel.app/api/og/${slug}`,
    // Additional properties can be added here as needed
  };

  return NextResponse.json(metadata);
}
