import Link from "next/link";
import {
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { Slider } from "~/components/ui/slider";

import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";
import { HelloForm } from "~/app/_components/FormComponent";
import { MatchNFT, MatchNFTs } from "~/app/_components/MatchNFTs";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <MatchNFTs />
      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-4">
              <SquareIcon className="h-6 w-6" />
              <h3 className="text-lg font-medium leading-none">Stake Assets</h3>
            </div>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Select assets to stake and receive LP tokens.
            </p>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label className="text-sm" htmlFor="stake-assets">
                Stake Assets
              </Label>
              <div className="text-sm" id="stake-assets">
                <p>ETH: 2.5</p>
                <p>BTC: 0.1</p>
              </div>
            </div>
            <div className="grid gap-2">
              <Label className="text-sm" htmlFor="potential-rewards">
                Potential Rewards
              </Label>
              <div className="text-sm" id="potential-rewards">
                <p>Match 1: 10 Tokens</p>
                <p>Match 2: 5 Tokens</p>
              </div>
            </div>
            <div className="grid gap-2">
              <Label className="text-sm" htmlFor="lp-tokens">
                LP Tokens
              </Label>
              <Input
                className="w-[120px]"
                id="lp-tokens"
                placeholder="Enter amount"
                type="number"
              />
            </div>
            <Slider defaultValue={[33]} max={100} step={1} />
            <Slider defaultValue={[33]} max={100} step={1} />
          </CardContent>
          <CardFooter>
            <Button variant="outline">Confirm</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-4">
              <DollarSignIcon className="h-6 w-6" />
              <h3 className="text-lg font-medium leading-none">
                Stake LP Tokens
              </h3>
            </div>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Set match parameters and stake LP tokens.
            </p>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label className="text-sm" htmlFor="match-duration">
                Match Duration (hours)
              </Label>
              <Input
                id="match-duration"
                min="1"
                placeholder="24"
                type="number"
              />
            </div>
            <div className="grid gap-2">
              <Label className="text-sm" htmlFor="stake-amount">
                Stake Amount
              </Label>
              <Input
                id="stake-amount"
                placeholder="Enter amount"
                type="number"
              />
            </div>
            <div className="grid gap-2">
              <Label className="text-sm" htmlFor="match-params">
                Match Parameters
              </Label>
              <Textarea
                className="min-h-[80px]"
                id="match-params"
                placeholder="Enter match parameters"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Initiate Match</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-4">
              <TrendingUpIcon className="h-6 w-6" />
              <h3 className="text-lg font-medium leading-none">Open Matches</h3>
            </div>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Your matches are ready to go.
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <Link className="flex items-center gap-2" href="#">
                <UserIcon className="h-4 w-4" />
                <span>Match 1</span>
                <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">
                  In Progress
                </span>
              </Link>
              <Link className="flex items-center gap-2" href="#">
                <UserIcon className="h-4 w-4" />
                <span>Match 2</span>
                <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">
                  Pending
                </span>
              </Link>
              <Link className="flex items-center gap-2" href="#">
                <UserIcon className="h-4 w-4" />
                <span>Match 3</span>
                <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">
                  Completed
                </span>
              </Link>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-4">
              <TrendingDownIcon className="h-6 w-6" />
              <h3 className="text-lg font-medium leading-none">Past Matches</h3>
            </div>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Review your match history.
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <Link className="flex items-center gap-2" href="#">
                <UserIcon className="h-4 w-4" />
                <span>Match 1</span>
                <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">
                  View
                </span>
              </Link>
              <Link className="flex items-center gap-2" href="#">
                <UserIcon className="h-4 w-4" />
                <span>Match 2</span>
                <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">
                  View
                </span>
              </Link>
              <Link className="flex items-center gap-2" href="#">
                <UserIcon className="h-4 w-4" />
                <span>Match 3</span>
                <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">
                  View
                </span>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

async function CrudShowcase() {
  const latestPost = await api.post.getLatest();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
      <HelloForm />
    </div>
  );
}

function DollarSignIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function SquareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </svg>
  );
}

function TrendingDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
      <polyline points="16 17 22 17 22 11" />
    </svg>
  );
}

function TrendingUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
