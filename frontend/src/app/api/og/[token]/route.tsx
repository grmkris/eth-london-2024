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
