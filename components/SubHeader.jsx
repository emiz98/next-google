import { useRouter } from 'next/router'
import { useRef } from 'react'
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid'
import HeaderOptions from './HeaderOptions'

function SubHeader() {
  const router = useRouter()
  const searchInputRef = useRef(null)

  const search = (e) => {
    e.preventDefault()
    const term = searchInputRef.current.value

    if (!term) return
    router.push(`/search?term=${term}`)
  }
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full items-center p-6">
        <img
          onClick={() => router.push('/')}
          src="/google-h.ico"
          className="hidden h-14 cursor-pointer object-contain sm:inline-flex"
        />
        <img
          onClick={() => router.push('/')}
          src="/google.ico"
          className="h-12 cursor-pointer object-contain sm:hidden"
        />
        <form
          className="ml-10 mr-5 flex max-w-3xl flex-grow
      items-center rounded-full border border-gray-200 
      px-6 py-3 shadow-lg"
        >
          <input
            className="w-full flex-grow focus:outline-none"
            type="text"
            ref={searchInputRef}
          />
          <XIcon
            onClick={() => (searchInputRef.current.value = '')}
            className="h-7 transform cursor-pointer 
        text-gray-500 transition duration-100 hover:scale-125 sm:mr-3"
          />
          <MicrophoneIcon
            className="mr-3 hidden h-6 border-l-2 border-gray-300
        pl-4 text-blue-500 sm:inline-flex"
          />
          <SearchIcon className="hidden h-6 text-blue-500 sm:inline-flex" />
          <button className="hidden" type="submit" onClick={search}>
            Search
          </button>
        </form>
        <img
          className="ml-auto h-10 w-10 transform cursor-pointer rounded-full transition duration-150 hover:scale-110"
          loading="lazy"
          src="https://avatars.githubusercontent.com/u/64089619?v=4"
          alt="profile image"
        />
      </div>

      <HeaderOptions />
    </header>
  )
}

export default SubHeader
