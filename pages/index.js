import Image from 'next/image';
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div
      className={`text-secondary-dark pt-10 ${inter.className} lg:hidden bg-blue-100 min-h-screen`}
    >
      <div className="grid grid-cols-5 mx-5">
        <div className="col-span-4 grid items-center">
          <h3>Hello Rachel,</h3>
          <h3 className="text-primary">
            Ready to <span className="text-secondary">play English?</span>
          </h3>
        </div>
        <div className="col-span-1 flex flex-end items-center justify-end bg-secondary-light w-16 justify-center h-8 rounded-3xl justify-self-end">
          <div className="border-secondary border-2 rounded-full">
            <Image src="/fire.png" alt="Logo" width={20} height={20} />
          </div>
          <h2 className="font-bold">65</h2>
        </div>
      </div>

      <div className="mx-5 p-3 grid items-center grid-cols-3 gap-5 border-2 border-primary rounded-2xl my-5">
        <div className="col-span-1 grid">
          <h3 className="text-primary">Today&apos;s goal</h3>
          <div className="border-8 rounded-full border-l-orange-400 border-secondary mt-2 h-20 w-20 flex items-center justify-center">
            <h3 className="font-bold">70%</h3>
          </div>
        </div>
        <div className="col-span-2">
          <h1 className="font-bold">Excellent!</h1>
          <p>You&apos;re almost there.</p>
          <p>Finish the goal to achieve</p>
          <div className="flex items-center">
            <Image src="/fire.png" alt="Logo" width={20} height={20} />
            <p className="text-secondary">10</p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between mx-5">
          <h1 className="font-bold">Your lesson</h1>
          <div className="border-primary border items-center flex rounded-md p-1 hover:cursor-pointer hover:bg-indigo-100">
            <Image src="/right-arrows.png" alt="Logo" width={15} height={15} />
          </div>
        </div>
        <div className="flex gap-4 mt-6 ml-5 flex-wrap">
          <div className="w-40">
            <div className="bg-secondary-light hover:cursor-pointer hover:scale-95 hover:border-primary hover:border rounded-xl h-28 flex items-center justify-center">
              <Image
                src="/united-kingdom.png"
                alt="Logo"
                width={60}
                height={60}
              />
            </div>
            <div className="flex mt-3 items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-indigo-300">
                <div
                  className="bg-blue-600 h-2.5 rounded-full dark:bg-primary"
                  style={{ width: '60%' }}
                ></div>
              </div>
              <p className="text-sm pl-1">60%</p>
            </div>
            <div>
              <h1 className="font-bold">Speaking 101</h1>
              <div className="flex text-gray-400 text-sm">
                <p>30 days</p>
                <ul className="list-disc ml-5">
                  <li>daily</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-40">
            <div className="bg-secondary-light hover:cursor-pointer hover:scale-95 hover:border-primary hover:border rounded-xl h-28 flex items-center justify-center">
              <Image src="/dictionary.png" alt="Logo" width={60} height={60} />
            </div>
            <div className="flex mt-3 items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-indigo-300">
                <div
                  className="bg-blue-600 h-2.5 rounded-full dark:bg-primary"
                  style={{ width: '60%' }}
                ></div>
              </div>
              <p className="text-sm pl-1">60%</p>
            </div>
            <div>
              <h1 className="font-bold">New words</h1>
              <div className="flex text-gray-400 text-sm">
                <p>90 days</p>
                <ul className="list-disc ml-5">
                  <li>daily</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-40">
            <div className="bg-secondary-light hover:cursor-pointer hover:scale-95 hover:border-primary hover:border rounded-xl h-28 flex items-center justify-center">
              <Image
                src="/spelling-bee.png"
                alt="Logo"
                width={60}
                height={60}
              />
            </div>
            <div className="flex mt-3 items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-indigo-300">
                <div
                  className="bg-blue-600 h-2.5 rounded-full dark:bg-primary"
                  style={{ width: '60%' }}
                ></div>
              </div>
              <p className="text-sm pl-1">60%</p>
            </div>
            <div>
              <h1 className="font-bold">Spelling</h1>
              <div className="flex text-gray-400 text-sm">
                <p>30 days</p>
                <ul className="list-disc ml-5">
                  <li>daily</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-20">
        <div className="flex justify-between mx-5 py-10">
          <h1 className="font-bold">Leaderboard</h1>
          <div className="border-primary border items-center flex rounded-md p-1 hover:cursor-pointer hover:bg-indigo-100">
            <Image src="/right-arrows.png" alt="Logo" width={15} height={15} />
          </div>
        </div>
        <div className="mx-5 space-y-4">
          <div className="bg-secondary-light rounded-xl w-full flex justify-between p-3 items-center">
            <div className="flex space-x-3 items-center">
              <Image
                src="/woman.jpg"
                alt="Logo"
                width="100"
                height="100"
                className="rounded-full border-2 border-secondary h-16 w-16"
              />

              <div>
                <h1 className="font-bold">Yasmine Lee</h1>
                <p className="text-gray-400 text-sm">Tarwan</p>
              </div>
            </div>
            <div className="flex items-center">
              <Image src="/arrows.png" alt="Logo" width={20} height={20} />
              <Image src="/fire.png" alt="Logo" width={20} height={20} />
              <p className="text-secondary">1230</p>
            </div>
          </div>
          <div className="bg-secondary-light rounded-xl w-full flex justify-between p-3 items-center">
            <div className="flex space-x-3 items-center">
              <Image
                src="/beard.jpg"
                alt="Logo"
                width="100"
                height="100"
                className="rounded-full border-2 border-secondary h-16 w-16"
              />

              <div>
                <h1 className="font-bold">Guy Hawkins</h1>
                <p className="text-gray-400 text-sm">Spain</p>
              </div>
            </div>
            <div className="flex items-center">
              <Image src="/arrows.png" alt="Logo" width={20} height={20} />
              <Image src="/fire.png" alt="Logo" width={20} height={20} />
              <p className="text-secondary">1130</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full z-50 rounded-t-3xl h-14 flex justify-between items-center bg-secondary-light fixed bottom-0">
        <ul className="flex items-center justify-around w-full">
          <li>
            <Image src="/home.png" width={20} height={20} alt="info logo" />
          </li>
          <li>
            <Image
              src="/bar-chart.png"
              width={20}
              height={20}
              alt="info logo"
            />
          </li>
          <li>
            <Image src="/user.png" width={20} height={20} alt="info logo" />
          </li>
          <li>
            <Image src="/settings.png" width={20} height={20} alt="info logo" />
          </li>
        </ul>
      </div>
      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">pages/index.js</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Discover and deploy boilerplate example Next.js&nbsp;projects.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </div>
  );
}
