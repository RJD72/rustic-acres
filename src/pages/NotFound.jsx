import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { customButtonTheme } from "../customThemes/buttonTheme";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    window.history.replaceState({}, "", "/404");
  }, []);

  return (
    <div className="min-h-screen bg-base flex flex-col items-center px-4 sm:px-6 lg:px-8">
      <Helmet>
        <meta name="robots" content="no index, nofollow" />
        <title>Page Not Found | Timeless Rustic Acres</title>
        <meta
          name="description"
          content="Oops! The page you’re looking for isn’t here. Return to Timeless Rustic Acres to find adorable Cavalier King Charles Spaniel puppies and helpful resources."
        />
      </Helmet>
      <div className="max-w-md w-full space-y-8 text-center mt-24">
        <div className="mb-8">
          <h1 className="text-6xl font-extrabold text-gray-900">404</h1>
          <p className="mt-2 text-3xl font-bold text-gray-900">
            Page not found
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Sorry, we couldn&#39;t find the page you&#39;re looking for.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Button theme={customButtonTheme} color="button">
            <Link to="/" className="flex">
              <svg
                className="mr-2 -ml-1 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12h18m-9-9l9 9-9 9"
                />
              </svg>
              Go back home
            </Link>
          </Button>
        </div>
      </div>
      <div className="mt-16 w-full max-w-2xl">
        <div className="relative">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-2 bg-base text-center text-sm text-gray-500">
              If you think this is a mistake, please contact support
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
