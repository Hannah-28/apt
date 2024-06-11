import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Chart() {
  return (
    <div
      className={`text-secondary-dark pt-10 ${inter.className} bg-blue-100 min-h-screen w-full`}
    >
      <div className="flex justify-between mx-5 flex-wrap">
        <div className="border-primary border items-center flex rounded-md p-1 hover:cursor-pointer hover:bg-indigo-100">
          <Image
            src="/back.png"
            className="home"
            alt="Logo"
            width={15}
            height={15}
          />
        </div>
        <h1 className="font-bold">September</h1>
        <div className="border-primary border items-center flex rounded-md p-1 hover:cursor-pointer hover:bg-indigo-100">
          <Image
            src="/next.png"
            className="home"
            alt="Logo"
            width={15}
            height={15}
          />
        </div>
      </div>

      <div className="flex w-full justify-start sm:justify-between flex-wrap">
        <div className="mx-5 my-5 text-sm grid space-y-2">
          <div className="rounded-full text-primary bg-secondary-light h-7 w-7 flex items-center justify-center">
            <p>2</p>
          </div>
          <p>Mon</p>
        </div>
        <div className="mx-5 my-5 text-sm grid space-y-2">
          <div className="rounded-full text-primary bg-primary h-7 w-7 flex items-center justify-center">
            <Image
              src="/tick.png"
              className="mark"
              alt="Logo"
              width={15}
              height={15}
            />
          </div>
          <p>Tue</p>
        </div>
        <div className="mx-5 my-5 text-sm grid space-y-2">
          <div className="rounded-full text-primary bg-primary h-7 w-7 flex items-center justify-center">
            <Image
              src="/tick.png"
              className="mark"
              alt="Logo"
              width={15}
              height={15}
            />
          </div>
          <p>Wed</p>
        </div>
        <div className="mx-5 my-5 text-sm grid space-y-2">
          <div className="rounded-full text-secondary-light bg-secondary h-7 w-7 flex items-center justify-center">
            <p>5</p>
          </div>
          <p className="text-secondary">Thu</p>
        </div>
        <div className="mx-5 my-5 text-sm grid space-y-2">
          <div className="rounded-full text-primary bg-secondary-light h-7 w-7 flex items-center justify-center">
            <p>6</p>
          </div>
          <p>Fri</p>
        </div>
        <div className="mx-5 my-5 text-sm grid space-y-2">
          <div className="rounded-full text-primary bg-secondary-light h-7 w-7 flex items-center justify-center">
            <p>7</p>
          </div>
          <p>Sat</p>
        </div>
        <div className="mx-5 my-5 text-sm grid space-y-2">
          <div className="rounded-full text-primary bg-secondary-light h-7 w-7 flex items-center justify-center">
            <p>8</p>
          </div>
          <p>Sun</p>
        </div>
      </div>

      <div className="pb-20">
        <div className="flex justify-between items-center mx-5">
          <h1 className="font-bold">Skills</h1>
          <Image
            src="/more.png"
            className="home"
            alt="Logo"
            width={25}
            height={25}
          />
        </div>
        <div className="grid grid-cols-2 justify-between mt-6 mx-5">
          <div className="bg-secondary-light mb-8 hover:cursor-pointer hover:scale-95 hover:border-primary hover:border rounded-xl grid items-center justify-center h-72 w-36 sm:w-44 md:w-52 py-3">
            <div className="rounded-full bg-primary flex h-20 w-20 items-center justify-center justify-self-center">
              <Image
                src="/book.png"
                className="mark"
                alt="Logo"
                width={45}
                height={45}
              />
            </div>
            <div className="space-y-2 my-3 grid justify-self-center justify-center">
              <h1 className="font-bold">Reading</h1>
              <p className="text-gray-400 text-sm justify-self-center">100%</p>
            </div>
            <button className="text-sm border border-secondary text-secondary-light bg-secondary rounded-2xl px-3 py-1">
              Completed
            </button>
          </div>

          <div className="bg-secondary-light mb-8 justify-self-end hover:cursor-pointer hover:scale-95 hover:border-primary hover:border rounded-xl grid items-center justify-center h-72 w-36 sm:w-44 md:w-52 py-3">
            <div className="rounded-full bg-primary flex h-20 w-20 items-center justify-center justify-self-center">
              <Image
                src="/copy-writing.png"
                className="mark"
                alt="Logo"
                width={45}
                height={45}
              />
            </div>
            <div className="space-y-2 my-3 grid justify-self-center justify-center">
              <h1 className="font-bold">Writing</h1>
              <p className="text-gray-400 text-sm justify-self-center">85%</p>
            </div>
            <button className="text-sm border border-secondary text-secondary bg-secondary-light rounded-2xl px-3 py-1">
              Good work
            </button>
          </div>

          <div className="bg-secondary-light hover:cursor-pointer hover:scale-95 hover:border-primary hover:border rounded-xl grid items-center justify-center h-72 w-36 sm:w-44 md:w-52 py-3">
            <div className="rounded-full bg-primary flex h-20 w-20 items-center justify-center justify-self-center">
              <Image
                src="/speaker.png"
                className="mark"
                alt="Logo"
                width={45}
                height={45}
              />
            </div>
            <div className="space-y-2 my-3 grid justify-self-center justify-center">
              <h1 className="font-bold">Speaking</h1>
              <p className="text-gray-400 text-sm justify-self-center">100%</p>
            </div>
            <button className="text-sm border border-secondary text-secondary-light bg-secondary rounded-2xl px-3 py-1">
              Completed
            </button>
          </div>

          <div className="bg-secondary-light justify-self-end hover:cursor-pointer hover:scale-95 hover:border-primary hover:border rounded-xl grid items-center justify-center h-72 w-36 sm:w-44 md:w-52 py-3">
            <div className="rounded-full bg-primary flex h-20 w-20 items-center justify-center justify-self-center">
              <Image
                src="/earphones.png"
                className="mark"
                alt="Logo"
                width={45}
                height={45}
              />
            </div>
            <div className="space-y-2 my-3 grid justify-self-center justify-center">
              <h1 className="font-bold">Listening</h1>
              <p className="text-gray-400 text-sm justify-self-center">70%</p>
            </div>
            <button className="text-sm border border-secondary text-secondary bg-secondary-light rounded-2xl px-3 py-1">
              Good work
            </button>
          </div>
        </div>
      </div>

      <div className="w-full z-50 rounded-t-3xl h-14 flex justify-between items-center bg-secondary-light fixed bottom-0">
        <ul className="flex items-center justify-around w-full">
          <li>
            <Link href="/">
              <Image
                src="/home.png"
                className="icon"
                width={20}
                height={20}
                alt="info logo"
              />
            </Link>
          </li>
          <li>
            <Link href="/chart">
              <Image
                src="/bar-chart-e.png"
                className="home"
                width={20}
                height={20}
                alt="info logo"
              />
            </Link>
          </li>
          <li>
            <Image
              src="/user.png"
              className="icon"
              width={20}
              height={20}
              alt="info logo"
            />
          </li>
          <li>
            <Image
              src="/settings.png"
              className="icon"
              width={20}
              height={20}
              alt="info logo"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
