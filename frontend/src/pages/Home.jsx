import React from 'react'
import "../styles/tailwind.css";

function Home() {
  return (
    <div className="bg-gray-900">
      <div className="flex justify-center items-center">
        <div className=" isolate overflow-hidden bg-gray-900 px-6 pt-16 sm:px-16 md:pt-24 lg:flex lg:justify-center lg:items-center lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              College-API
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Explore Undergraduate Engineering Colleges Across India with the College API!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-cemter">
              <a
                href="https://github.com/sshiwangi/College-API" target='_blank'
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                GitHub
              </a>
              <a href="/demo" className="text-sm font-semibold leading-6 text-white">
                Demo <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          {/* <div className="relative mt-16 h-80 lg:mt-8">
            <img
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Home