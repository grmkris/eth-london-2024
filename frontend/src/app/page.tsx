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
import {
  CreateMatchComponent,
  MatchNFT,
  MatchNFTs,
} from "~/app/_components/MatchNFTs";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <w3m-button />
      <MatchNFTs />
      <CreateMatchComponent />
      <div className="grid gap-6 sm:grid-cols-1 lg:max-w-[70%] lg:grid-cols-1 xl:grid-cols-1">
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-4">
              <SquareIcon className="h-6 w-6" />
              <h3 className="text-lg font-medium leading-none">
                Become a Judge - Decide How Much to Support
              </h3>
            </div>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Choose how many tokens you want to use to back your match. More
              tokens mean a stronger influence on maintaining fairness. But dont
              worry, its all within a safe playfield designed by us.
            </p>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label className="text-sm" htmlFor="stake-assets">
                Provide Assets
              </Label>
              <div className="text-sm" id="stake-assets">
                <p>USDc: 2.5</p>
              </div>
              <Input
                className="w-[50%]"
                id="lp-tokens"
                placeholder="Enter amount"
                type="number"
              />
              <Slider
                className="w-[50%]"
                defaultValue={[33]}
                max={100}
                step={1}
              />
            </div>
            <div className="grid gap-2">
              <Label className="text-sm" htmlFor="stake-amount">
                LP received
              </Label>
              <div className="text-sm" id="lp-tokens">
                <p>LP: 0.5</p>
              </div>
            </div>
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
                Create a match - Lock In Your Support
              </h3>
            </div>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Locking your tokens is like putting them in a vault for
              safekeeping. They'll be there doing their job as you help us keep
              the game fair. And you'll get a special token (let's call it a
              'FairPlay Token') as a thank you, which you can use later!
            </p>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label className="text-sm" htmlFor="match-duration">
                Match Title
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
                Match Date
              </Label>
              <Input
                id="stake-amount"
                placeholder="Enter amount"
                type="number"
              />
            </div>
            <div className="min-w-full">
              <div className="flex min-w-full flex-row">
                <div className="max-w-half min-w-full">
                  Initial Weight A
                  <Input
                    className="min-w-[40%]"
                    id="match-params"
                    placeholder="Enter amount"
                  />
                </div>
                <div className="max-w-half">
                  Initial Weight A
                  <Input
                    className="min-w-[40%]"
                    id="match-params"
                    placeholder="Enter amount"
                  />
                </div>
              </div>
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
