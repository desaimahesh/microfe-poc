import React from "react";

export default function TicketDetai() {
  return (
    <div className="relative mt-10 px-6 pt-10 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10">
      <div className="max-w-md mx-auto">
        <div className="h-6 flex items-center">
          <svg
            className="w-8 h-8 flex fill-sky-100 stroke-blue-600 stroke-2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 0 0-2 2v3a2 2 0 1 1 0 4v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3a2 2 0 1 1 0-4V7a2 2 0 0 0-2-2H5z"
            />
          </svg>
          <p className="px-2 font-mono font-semibold"># 0017897678542</p>
        </div>
        <div className="divide-y divide-gray-300/50">
          <div className="py-8 text-base leading-7 space-y-6 text-gray-600">
            <p>
              An advanced online playground for Tailwind CSS, including support
              for things like:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="11" />
                  <path
                    d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                    fill="none"
                  />
                </svg>
                <p className="ml-4">
                  Customizing your
                  <code className="text-sm font-bold text-gray-900">
                    tailwind.config.js
                  </code>{" "}
                  file
                </p>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="11" />
                  <path
                    d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                    fill="none"
                  />
                </svg>
                <p className="ml-4">
                  Extracting classes with
                  <code className="text-sm font-bold text-gray-900">
                    @apply
                  </code>
                </p>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="11" />
                  <path
                    d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                    fill="none"
                  />
                </svg>
                <p className="ml-4">Code completion with instant preview</p>
              </li>
            </ul>
            <p>
              Perfect for learning how the framework works, prototyping a new
              idea, or creating a demo to share online.
            </p>
          </div>
          <div className="pt-8 text-base leading-7 font-semibold">
            <p className="text-gray-900">Want to dig deeper into Tailwind?</p>
            <p>
              <a
                href="https://tailwindcss.com/docs"
                className="text-sky-500 hover:text-sky-600"
              >
                Read the docs &rarr;
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
