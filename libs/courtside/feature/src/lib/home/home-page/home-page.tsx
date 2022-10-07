import { Link } from 'react-router-dom';

export function Home() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-medium sm:text-5xl">
            Welcome to
            <strong className="font-extrabold acce sm:block text-amber-600">
              Courtside
            </strong>
            <span role="img" aria-label="basketball" className="mx-2">
              🏀
            </span>
          </h1>

          <p className="mt-4 text-xl sm:leading-relaxed">
            Share info, communicate, and invite new members to your squad within
            one platform
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/register"
              className="block w-full rounded bg-amber-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-amber-700 focus:outline-none focus:ring active:bg-amber-500 sm:w-auto"
            >
              Get Started
            </Link>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-amber-600 shadow hover:text-amber-700 focus:outline-none focus:ring active:text-amber-500 sm:w-auto"
              href="/about"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
