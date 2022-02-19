import { SearchIcon } from '@heroicons/react/outline'
import { MicrophoneIcon } from '@heroicons/react/solid'
import Image from 'next/image'

function MainBody() {
  return (
    <div className="">
      <form action="" className="flex flex-grow flex-col items-center">
        <img
          loading="lazy"
          className="h-40 object-contain"
          src={
            'https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif'
          }
        />
        <div
          className="mt-3 flex w-full max-w-md 
        items-center rounded-full border border-gray-200 
        px-5 py-3 focus-within:shadow-lg hover:shadow-lg sm:max-w-xl
        lg:max-w-2xl"
        >
          <SearchIcon className="mr-3 h-5 text-gray-500" />
          <input type="text" className="flex-grow focus:outline-none" />
          <MicrophoneIcon className="h-5" />
        </div>

        <div
          className="mt-8 flex w-1/2 flex-col justify-center
        space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4"
        >
          <button className="btn">Google Search</button>
          <button className="btn">I'm Feeling Lucky</button>
        </div>
        <p className="mt-8 text-sm md:mt-5">
          Google offered in: <span className="link text-blue-800">සිංහල</span>{' '}
          <span className="link text-blue-800">தமிழ்</span>{' '}
        </p>
      </form>
    </div>
  )
}

export default MainBody
