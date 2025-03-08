import { ReactNode } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  // Todo: Check if user is authenticated and has ADMIN privileges

  return <>{children}</>;
}
