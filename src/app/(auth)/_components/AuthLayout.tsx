import { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-gray-200 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        {children}
      </div>
    </div>
  );
}