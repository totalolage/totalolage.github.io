import packageJson from "package.json";
import GithubIcon from "./icons/GithubIcon";

type Props = {
  className?: string;
};

export default function RepoLink({ className }: Props) {
  return (
    <a
      href={packageJson.repository.url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <span className="sr-only">GitHub</span>
      <GithubIcon className="size-8" />
    </a>
  );
}
