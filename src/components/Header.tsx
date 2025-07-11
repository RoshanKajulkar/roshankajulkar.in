import ThemeToggle from "../components/ThemeToggle";
import { GithubIcon, LinkedInIcon, LeetcodeIcon } from "../icons";

const Header = () => {
  return (
    <div className="sticky -top-2 z-50 bg-white/70 pt-4 backdrop-blur-md dark:bg-black/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <ThemeToggle />

        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/roshan-kajulkar/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon className="h-6 w-6 text-gray-700 transition-colors duration-200 hover:text-black dark:text-white dark:hover:text-gray-300" />
          </a>

          <a
            href="https://github.com/RoshanKajulkar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="h-6 w-6 text-gray-700 transition-colors duration-200 hover:text-black dark:text-white dark:hover:text-gray-300" />
          </a>

          <a
            href="https://leetcode.com/u/RoshanKajulkar/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode Profile"
          >
            <LeetcodeIcon className="h-6 w-6 text-gray-700 transition-colors duration-200 hover:text-black dark:text-white dark:hover:text-gray-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
