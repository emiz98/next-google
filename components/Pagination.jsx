import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

function Pagination() {
  return (
    <div
      className="mb-10 flex max-w-md items-center 
    justify-between text-blue-700"
    >
      <div
        className="flex flex-grow cursor-pointer flex-col
      items-center hover:underline"
      >
        <ChevronLeftIcon className="h-5" />
        <p>Previous</p>
      </div>
      <div
        className="flex flex-grow cursor-pointer flex-col
      items-center hover:underline"
      >
        <ChevronRightIcon className="h-5" />
        <p>Next</p>
      </div>
    </div>
  )
}

export default Pagination
