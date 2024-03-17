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
    {
      name: "Sevilla vs Betis",
      description:
        "The Seville derby heats up as Sevilla faces Betis in a passionate encounter that's central to both teams' league ambitions.",
      image: `https://eth-london-2024-frontend.vercel.app/api/og/${slug}`,
    },
    {
      name: "Roma vs Lazio",
      description:
        "A fierce battle in the heart of Italy, the Rome derby sees Roma and Lazio clash in a high-stakes match filled with historic rivalry.",
      image: `https://eth-london-2024-frontend.vercel.app/api/og/${slug}`,
    },
    {
      name: "Porto vs Benfica",
      description:
        "Portugal's prime teams face off in a decisive match that could tilt the title race, showcasing the best of Portuguese football.",
      image: `https://eth-london-2024-frontend.vercel.app/api/og/${slug}`,
    },
    {
      name: "Ajax vs Feyenoord",
      description:
        "The Dutch classic rivalry ignites once more as Ajax and Feyenoord compete for supremacy in a game known for its intense atmosphere.",
      image: `https://eth-london-2024-frontend.vercel.app/api/og/${slug}`,
    },
    {
      name: "Boca Juniors vs River Plate",
      description:
        "Argentina's most famous football clash, the Superclásico, promises a spectacle as Boca Juniors take on River Plate.",
      image: `https://eth-london-2024-frontend.vercel.app/api/og/${slug}`,
    },
    {
      name: "Celtic vs Rangers",
      description:
        "Scotland's biggest football rivalry, the Old Firm derby, pits Celtic against Rangers in a match with historic and cultural significance.",
      image: `https://eth-london-2024-frontend.vercel.app/api/og/${slug}`,
    },
    {
      name: "Galatasaray vs Fenerbahce",
      description:
        "The Istanbul derby brings together Galatasaray and Fenerbahce in a fierce contest that's about pride as much as it is about points.",
      image: `https://eth-london-2024-frontend.vercel.app/api/og/${slug}`,
    },
    {
      name: "Olympiacos vs Panathinaikos",
      description:
        "Greece's most intense rivalry sees Olympiacos and Panathinaikos face off in a match filled with passion and tradition.",
      image: `https://eth-london-2024-frontend.vercel.app/api/og/${slug}`,
    },
    {
      name: "Spartak Moscow vs Zenit",
      description:
        "A clash of titans in Russian football, Spartak Moscow and Zenit St. Petersburg battle it out in a match with high stakes for the league title.",
      image: `https://eth-london-2024-frontend.vercel.app/api/og/${slug}`,
    },
    {
      name: "Al Ahly vs Zamalek",
      description:
        "Egypt's fiercest football rivalry, the Cairo derby, sees Al Ahly and Zamalek compete in a match that divides the city in two.",
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
