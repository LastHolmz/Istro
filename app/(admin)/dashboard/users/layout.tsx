import type { Metadata } from "next";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Dashboard | users",
  description: "controll all users from here",
};

const LayoutUser = ({ children }: Props) => {
  return <section>{children}</section>;
};
export default LayoutUser;
