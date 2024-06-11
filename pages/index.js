import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div
      className={`text-secondary-dark pt-10 ${inter.className} bg-blue-100 min-h-screen`}
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
        <div className="flex justify-between items-center mx-5">
          <h1 className="font-bold">Your lesson</h1>
          <div className="border-primary border items-center flex rounded-md p-1 hover:cursor-pointer">
            <Image src="/next.png" className='home' alt="Logo" width={15} height={15} />
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
              <div className="w-full bg-primary-light rounded-full h-2.5 dark:bg-primary-light">
                <div
                  className="bg-primary h-2.5 rounded-full dark:bg-primary"
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
        <div className="flex justify-between items-center mx-5 py-10">
          <h1 className="font-bold">Leaderboard</h1>
          <div className="border-primary border items-center flex rounded-md p-1 hover:cursor-pointer">
            <Image src="/next.png" className='home' alt="Logo" width={15} height={15} />
          </div>
        </div>
        <div className="mx-5 space-y-4">
          <div className="bg-secondary-light hover:cursor-pointer hover:scale-95 hover:border-primary hover:border rounded-xl w-full flex justify-between p-3 items-center">
            <div className="flex space-x-3 items-center">
              <Image
                src="/woman.jpg"
                alt="Logo"
                width="100"
                height="100"
                className="rounded-full border-2 border-orange-400 h-16 w-16"
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
          <div className="bg-secondary-light hover:cursor-pointer hover:scale-95 hover:border-primary hover:border rounded-xl w-full flex justify-between p-3 items-center">
            <div className="flex space-x-3 items-center">
              <Image
                src="/beard.jpg"
                alt="Logo"
                width="100"
                height="100"
                className="rounded-full border-2 border-orange-400 h-16 w-16"
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
          <Link href="/">
            <Image src="/home-e.png"  className='home' width={20} height={20} alt="info logo" />
          </Link>
          </li>
          <li>
          <Link href="/chart">
            <Image
              src="/bar-chart.png"
              className='icon'
              width={20}
              height={20}
              alt="info logo"
            />
            </Link>
          </li>
          <li>
            <Image src="/user.png" className='icon' width={20} height={20} alt="info logo" />
          </li>
          <li>
            <Image src="/settings.png" className='icon' width={20} height={20} alt="info logo" />
          </li>
        </ul>
      </div>

    </div>
  );
}
