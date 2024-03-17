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

  // Define matches, scores, and odds for the first 10 token IDs
  const data = {
    "1": {
      match: "Manchester City vs PSG",
      score: "Score: Not started yet",
      odds: "Odds: PSG 3.5 <-> Manchester City 2.0",
      description:
        "A highly anticipated match featuring Manchester City against PSG, yet to kick off. Stay tuned for an intense battle.",
    },
    "2": {
      match: "Real Madrid vs Barcelona",
      score: "Score: 2-2",
      odds: "Odds: Real Madrid 2.3 <-> Barcelona 2.1",
      description:
        "El Clásico brings together two of Spain's football giants, locked at a thrilling 2-2 draw. The ultimate rivalry in football.",
    },
    "3": {
      match: "Liverpool vs Chelsea",
      score: "Score: 1-0",
      odds: "Odds: Liverpool 1.8 <-> Chelsea 4.5",
      description:
        "A classic Premier League clash sees Liverpool leading Chelsea 1-0. A match filled with strategy and passion.",
    },
    "4": {
      match: "Bayern Munich vs Dortmund",
      score: "Score: Not started yet",
      odds: "Odds: Bayern 1.5 <-> Dortmund 6.0",
      description:
        "The Bundesliga's fiercest rivals yet to face off. Expectations are high for a match that's always a highlight of the German football calendar.",
    },
    "5": {
      match: "Inter Milan vs AC Milan",
      score: "Score: 0-1",
      odds: "Odds: Inter 2.0 <-> AC Milan 3.8",
      description:
        "The Milan derby sees AC Milan leading by a single goal in a match that's always fiercely contested.",
    },
    "6": {
      match: "Atletico Madrid vs Valencia",
      score: "Score: 3-1",
      odds: "Odds: Atletico 1.4 <-> Valencia 7.2",
      description:
        "Atletico Madrid showcases their strength with a 3-1 victory over Valencia, a match demonstrating Atletico's tactical prowess.",
    },
    "7": {
      match: "Paris Saint-Germain vs Lyon",
      score: "Score: 2-2",
      odds: "Odds: PSG 1.3 <-> Lyon 9.5",
      description:
        "A high-scoring affair ends in a 2-2 draw, highlighting the offensive capabilities of both PSG and Lyon.",
    },
    "8": {
      match: "Juventus vs Napoli",
      score: "Score: Not started yet",
      odds: "Odds: Juventus 2.2 <-> Napoli 3.1",
      description:
        "An upcoming clash between Juventus and Napoli, two of Italy's top teams, promises to be a strategic and intense match.",
    },
    "9": {
      match: "Arsenal vs Tottenham",
      score: "Score: 1-1",
      odds: "Odds: Arsenal 2.5 <-> Tottenham 2.9",
      description:
        "The North London derby ends in a 1-1 draw, a testament to the deep-rooted rivalry and evenly matched squads.",
    },
    "10": {
      match: "Manchester United vs Everton",
      score: "Score: Not started yet",
      odds: "Odds: Man Utd 1.8 <-> Everton 4.3",
      description:
        "Manchester United and Everton are set to face off in a match that's eagerly awaited by fans, with expectations high for an exciting game.",
    },
    "11": {
      match: "Sevilla vs Betis",
      score: "Score: Not started yet",
      odds: "Odds: Sevilla 2.0 <-> Betis 3.6",
      description:
        "The Seville derby heats up as Sevilla faces Betis in a passionate encounter that's central to both teams' league ambitions.",
    },
    "12": {
      match: "Roma vs Lazio",
      score: "Score: Not started yet",
      odds: "Odds: Roma 2.1 <-> Lazio 3.4",
      description:
        "A fierce battle in the heart of Italy, the Rome derby sees Roma and Lazio clash in a high-stakes match filled with historic rivalry.",
    },
    "13": {
      match: "Porto vs Benfica",
      score: "Score: Not started yet",
      odds: "Odds: Porto 2.2 <-> Benfica 3.1",
      description:
        "Portugal's prime teams face off in a decisive match that could tilt the title race, showcasing the best of Portuguese football.",
    },
    "14": {
      match: "Ajax vs Feyenoord",
      score: "Score: Not started yet",
      odds: "Ajax 1.8 <-> Feyenoord 4.3",
      description:
        "The Dutch classic rivalry ignites once more as Ajax and Feyenoord compete for supremacy in a game known for its intense atmosphere.",
    },
    "15": {
      match: "Boca Juniors vs River Plate",
      score: "Score: Not started yet",
      odds: "Odds: Boca Juniors 2.5 <-> River Plate 2.7",
      description:
        "Argentina's most famous football clash, the Superclásico, promises a spectacle as Boca Juniors take on River Plate.",
    },
    "16": {
      match: "Celtic vs Rangers",
      score: "Score: Not started yet",
      odds: "Odds: Celtic 2.3 <-> Rangers 3.0",
      description:
        "Scotland's biggest football rivalry, the Old Firm derby, pits Celtic against Rangers in a match with historic and cultural significance.",
    },
    "17": {
      match: "Galatasaray vs Fenerbahce",
      score: "Score: Not started yet",
      odds: "Odds: Galatasaray 2.4 <-> Fenerbahce 2.9",
      description:
        "The Istanbul derby brings together Galatasaray and Fenerbahce in a fierce contest that's about pride as much as it is about points.",
    },
    "18": {
      match: "Olympiacos vs Panathinaikos",
      score: "Score: Not started yet",
      odds: "Odds: Olympiacos 1.9 <-> Panathinaikos 4.0",
      description:
        "Greece's most intense rivalry sees Olympiacos and Panathinaikos face off in a match filled with passion and tradition.",
    },
    "19": {
      match: "Spartak Moscow vs Zenit",
      score: "Score: Not started yet",
      odds: "Odds: Spartak Moscow 2.6 <-> Zenit 2.8",
      description:
        "A clash of titans in Russian football, Spartak Moscow and Zenit St. Petersburg battle it out in a match with high stakes for the league title.",
    },
    "20": {
      match: "Al Ahly vs Zamalek",
      score: "Score: Not started yet",
      odds: "Odds: Al Ahly 2.0 <-> Zamalek 3.5",
      description:
        "Egypt's fiercest football rivalry, the Cairo derby, sees Al Ahly and Zamalek compete in a match that divides the city in two.",
    },
  };

  // Fallback data if the tokenID does not match
  const fallback = {
    match: "Match not found",
    score: "Score: N/A",
    odds: "Odds: N/A",
    description: "The match you're looking for is not available.",
  };

  // Select data based on the slug, or use fallback
  const { match, score, odds } = data[slug] || fallback;

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
          flexDirection: "column",
        }}
      >
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
