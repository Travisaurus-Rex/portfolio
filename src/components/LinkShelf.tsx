import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function LinkShelf() {
    return (
        <div className="flex items-center space-x-5 text-neutral-400 lg:mt-12">
          <a
            href="https://github.com/Travisaurus-Rex"
            className="text-4xl text-accent hover:text-contrast transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/travis-a-768637a2/"
            className="text-4xl text-accent hover:text-contrast transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="mailto:tadamsdeveloper@gmail.com"
            className="text-4xl text-accent hover:text-contrast transition-colors"
          >
            <MdEmail />
          </a>
        </div>
    )
}