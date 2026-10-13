import type { ReactNode } from "react";

export default function PageContainer({ children }: { children?: ReactNode }) {
  return <main className="pageContainer min-h-screen">{children}</main>;
}