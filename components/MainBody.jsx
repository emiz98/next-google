import { SearchIcon } from '@heroicons/react/outline'
import { MicrophoneIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import suggestions from '../data/suggestions'

function MainBody() {
  const router = useRouter()
  const searchInputRef = useRef(null)
  const results = suggestions.suggestions.items
  const [suggestionsPop, setSuggestionsPop] = useState(false)
  console.log(results)

  const search = (e) => {
    e.preventDefault()
    const term = searchInputRef.current.value
    if (!term) return

    router.push(`/search?term=${term}`)
  }

  const suggestionsTrigger = (e) => {
    if (e.target.value.length > 0) {
      setSuggestionsPop(true)
    } else {
      setSuggestionsPop(false)
    }
  }

  return (
    <div className="relative md:mb-32">
      <form action="" className="flex flex-grow flex-col items-center">
        <img
          loading="lazy"
          className="h-40 object-contain"
          src={
            'https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif'
          }
        />
        <div
          className="flex w-full max-w-md 
        items-center rounded-full border border-gray-200 
        px-5 py-3 focus-within:shadow-lg hover:shadow-lg sm:max-w-xl
        lg:max-w-2xl"
        >
          <SearchIcon className="mr-3 h-5 text-gray-500" />
          <input
            ref={searchInputRef}
            onChange={(e) => suggestionsTrigger(e)}
            type="text"
            className="flex-grow focus:outline-none"
          />
          {/* <MicrophoneIcon className="h-5" /> */}
          <img className="h-8" src="/google-voice-search.ico" alt="" />
        </div>
        {/* <div
          className={`hidden ${
            suggestionsPop ? 'md:inline-flex' : 'hidden'
          } absolute top-[14rem] w-full flex-col items-center space-y-2
          bg-white`}
        >
          {results.map((result) => (
            <div key={result.id}>{result.title}</div>
          ))}
        </div> */}

        <div
          className="mt-8 flex w-1/2 flex-col justify-center
        space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4"
        >
          <button onClick={search} className="btn">
            Google Search
          </button>
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
