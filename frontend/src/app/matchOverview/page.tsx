import { Card, CardHeader, CardContent } from "~/components/ui/card";

export default async function matchOverview() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <Card className="min-w-[50%]">
        <CardHeader>
          <h1>Match Overview</h1>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row">
              <p>Match Name</p>
            </div>
            <div className="flex flex-row">
              <p>Match Date</p>
            </div>
            <div className="flex flex-row">
              <p>Team A</p>
            </div>
            <div className="flex flex-row">
              <p>Team B</p>
            </div>
            <div className="flex flex-row">
              <p>Team A Odds</p>
            </div>
            <div className="flex flex-row">
              <p>Team B Odds</p>
            </div>
            <div className="flex flex-row">
              <p>Match Status</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
