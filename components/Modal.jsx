import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

function Modal() {
  let [isOpen, setIsOpen] = useState(true)
  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center backdrop-blur-sm">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-center text-lg font-bold leading-6 text-gray-900"
                >
                  <span className="text-blue-500">G</span>
                  <span className="text-red-500">O</span>
                  <span className="text-yellow-500">O</span>
                  <span className="text-blue-500">G</span>
                  <span className="text-green-500">L</span>
                  <span className="text-red-500">E</span>
                  <span className="ml-2">2.0</span>
                </Dialog.Title>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">
                    Google 2.0 is only made for an educational purposes only.
                    This is initially powered by the original google API, but
                    due to the limitations of the requests, the API was mocked
                    and only contains the search results for "Stephan Hawking"
                  </p>
                </div>

                <div className="mt-8 flex justify-center">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md 
                    border border-transparent bg-blue-500 px-4 py-2 text-sm
                    font-medium text-white transition duration-100 
                    ease-in-out hover:bg-red-500 
                    focus:outline-none "
                    onClick={closeModal}
                  >
                    CONTINUE
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Modal
