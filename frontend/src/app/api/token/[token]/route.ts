// api > hello > [slug] > route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } },
) {
  const slug = params.slug;
  const paramGreeting = request.nextUrl.searchParams.get("greeting");
  const greeting = `${paramGreeting || "Hello"} ${slug}!!!`;

  // Construct ERC-721 valid JSON metadata object
  const metadata = {
    name: `Asset ${slug}`, // A title for your asset
    description: greeting, // A description for your asset, using the greeting
    image: `https://example.com/path/to/your/asset/${slug}.png`, // URL to an image associated with the asset
    // Additional properties can be added here as needed
  };

  return NextResponse.json(metadata);
}
