import ThemeToggle from "../components/ThemeToggle";
import { GithubIcon, LinkedInIcon, LeetcodeIcon, XIcon } from "../icons";
import { LINKS } from "../utils/constant";

const Header = () => {
  const iconClass =
    "h-6 w-6 text-gray-700 transition-colors duration-200 hover:text-black dark:text-white dark:hover:text-gray-300";

  return (
    <header className="sticky -top-2 z-50 bg-white/70 pt-4 backdrop-blur-md dark:bg-black/50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <ThemeToggle />

        <div className="flex gap-4">
          <a
            href={LINKS.LINKED_IN}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            title="LinkedIn"
          >
            <LinkedInIcon className={iconClass} />
          </a>

          <a
            href={LINKS.GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            title="GitHub"
          >
            <GithubIcon className={iconClass} />
          </a>

          <a
            href={LINKS.LEETCODE}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode Profile"
            title="LeetCode"
          >
            <LeetcodeIcon className={iconClass} />
          </a>

          <a
            href={LINKS.X}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter) Profile"
            title="X (Twitter)"
          >
            <XIcon className={iconClass} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
