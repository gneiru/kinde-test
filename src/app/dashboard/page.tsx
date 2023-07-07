import {
  LogoutLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";

interface DashBoardPageProps {}

export default function DashBoardPage({}: DashBoardPageProps) {
  const { getUser } = getKindeServerSession();
  const user = getUser();
  return (
    <>
      <h1>DashBoard</h1>
      <p>Hello {user.given_name} {user.family_name}</p>
      <LogoutLink>Log out</LogoutLink>
    </>
  );
}
