import { GlobeIcon } from '@heroicons/react/solid'

function Footer() {
  return (
    <footer
      className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100
    text-sm text-gray-500"
    >
      <div className="px-8 py-3">
        <p>Sri Lanka</p>
      </div>
      <div
        className="grid grid-flow-row-dense grid-cols-1 gap-y-4 
      p-5 md:grid-cols-2 md:p-5 md:pl-8 lg:grid-cols-3"
      >
        <div
          className="flex items-center justify-center md:col-span-2
        lg:col-span-1 lg:col-start-2"
        >
          <GlobeIcon className="mr-1 h-5 text-gray-600" />
          This is an educational app
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
          <p>Advertising</p>
          <p>Business</p>
          <p>How Search Works</p>
        </div>
        <div className="flex justify-center space-x-8 md:ml-auto">
          <p>Privacy</p>
          <p>Terms</p>
          <p>Settings</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
