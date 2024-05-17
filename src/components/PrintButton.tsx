"use client";

import PrinterIcon from "./icons/Printer";

type Props = {
  className?: string;
};

export default function PrintButton({ className }: Props) {
  return (
    <button onClick={() => window.print()} className={className}>
      <span className="sr-only">Print</span>
      <PrinterIcon className="size-8" />
    </button>
  );
}
