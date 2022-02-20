import { ViewGridIcon } from '@heroicons/react/solid'

function Header() {
  return (
    <header className="flex w-full justify-between p-5 text-sm text-gray-700">
      {/* left */}
      <div className="flex items-center space-x-4">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>

      {/* right */}
      <div className="flex items-center space-x-4">
        <p className="link hidden md:inline-flex">Gmail</p>
        <p className="link hidden md:inline-flex">Images</p>
        <ViewGridIcon
          className="h-10 w-10 cursor-pointer rounded-full
         p-2 hover:bg-gray-100"
        />
        <img
          className="h-10 w-10 transform cursor-pointer rounded-full transition duration-150 hover:scale-110"
          loading="lazy"
          src="https://avatars.githubusercontent.com/u/64089619?v=4"
          alt="profile image"
        />
      </div>
    </header>
  )
}

export default Header
