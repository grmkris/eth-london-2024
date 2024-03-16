// api > hello > [slug] > route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { token: string } },
) {
  const slug = parseInt(params.token, 10); // Convert slug to number for comparison

  // Define unique metadata for each tokenID
  const metadatas = [
    {
      name: "Manchester City vs PSG",
      description:
        "A highly anticipated match featuring Manchester City against PSG, yet to kick off. Stay tuned for an intense battle.",
      image: `https://eth-london-2024-frontend.vercel.app/api/og/${slug}`,
    },
    {
      name: "Real Madrid vs Barcelona",
      description:
        "El Clásico brings together two of Spain's football giants, locked at a thrilling 2-2 draw. The ultimate rivalry in football.",
      image: `https://eth-london-2024-frontend.vercel.app/api/og/${slug}`,
    },
    {
      name: "Liverpool vs Chelsea",
      description:
        "A classic Premier League clash sees Liverpool leading Chelsea 1-0. A match filled with strategy and passion.",
      image: `https://eth-london-2024-frontend.vercel.app/api/og/${slug}`,
    },
    {
      name: "Bayern Munich vs Dortmund",
      description:
        "The Bundesliga's fiercest rivals yet to face off. Expectations are high for a match that's always a highlight of the German football calendar.",
      image: `https://eth-london-2024-frontend.vercel.app/api/og/${slug}`,
    },
    {
      name: "Inter Milan vs AC Milan",
      description:
        "The Milan derby sees AC Milan leading by a single goal in a match that's always fiercely contested.",
      image: `https://eth-london-2024-frontend.vercel.app/api/og/${slug}`,
    },
    {
      name: "Atletico Madrid vs Valencia",
      description:
        "Atletico Madrid showcases their strength with a 3-1 victory over Valencia, a match demonstrating Atletico's tactical prowess.",
      image: `https://eth-london-2024-frontend.vercel.app/api/og/${slug}`,
    },
    {
      name: "Paris Saint-Germain vs Lyon",
      description:
        "A high-scoring affair ends in a 2-2 draw, highlighting the offensive capabilities of both PSG and Lyon.",
      image: `https://eth-london-2024-frontend.vercel.app/api/og/${slug}`,
    },
    {
      name: "Juventus vs Napoli",
      description:
        "An upcoming clash between Juventus and Napoli, two of Italy's top teams, promises to be a strategic and intense match.",
      image: `https://eth-london-2024-frontend.vercel.app/api/og/${slug}`,
    },
    {
      name: "Arsenal vs Tottenham",
      description:
        "The North London derby ends in a 1-1 draw, a testament to the deep-rooted rivalry and evenly matched squads.",
      image: `https://eth-london-2024-frontend.vercel.app/api/og/${slug}`,
    },
    {
      name: "Manchester United vs Everton",
      description:
        "Manchester United and Everton are set to face off in a match that's eagerly awaited by fans, with expectations high for an exciting game.",
      image: `https://eth-london-2024-frontend.vercel.app/api/og/${slug}`,
    },
  ];

  let metadata;

  if (slug >= 1 && slug <= metadatas.length) {
    metadata = metadatas[slug - 1];
  } else {
    // Fallback metadata if the tokenID doesn't match
    metadata = {
      name: "Unknown Match",
      description: "No match found for this ID",
      image: "https://yourdomain.com/api/og/placeholder",
    };
  }

  return NextResponse.json(metadata);
}
