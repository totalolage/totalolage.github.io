import { cn } from "~/utils/cn";
import PrintButton from "~/components/PrintButton";
import RepoLink from "~/components/RepoLink";

type Props = {
  className?: string;
};

export default function Footer({ className }: Props) {
  return (
    <footer
      className={cn(
        "flex flex-wrap justify-center space-x-4 bg-slate-100 px-8 py-4 text-slate-600 dark:bg-black print:hidden",
        className,
      )}
    >
      <RepoLink />
      <PrintButton />
    </footer>
  );
}
