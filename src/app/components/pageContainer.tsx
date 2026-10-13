import type { ReactNode } from "react";

export default function PageContainer({ children }: { children?: ReactNode }) {
  return <main 
            className="
                pageContainer
                min-h-screen
                bg-[url('/illustrations/soft-circles.svg')]
                    bg-no-repeat

                    md:bg-[length:350px_auto]
                    md:bg-[position:-100px_center]

                    lg:bg-[length:1300px_auto]
                    lg:bg-[position:600px_150px]
                "
                
        >
            {children}
        </main>;
}