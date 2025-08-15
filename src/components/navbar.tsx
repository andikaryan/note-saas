import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from '@kinde-oss/kinde-auth-nextjs/components';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Link from 'next/link';
import { Themetoggle } from './theme-toggle';
import { Button } from './ui/button';
import { UserNav } from '@/app/dashboard/userNav';

export async function Navbar() {
  const { isAuthenticated } = getKindeServerSession();
  const authenticated = await isAuthenticated();

  return (
    <nav className="border-b bg-background h-[10vh] flex items-center">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <h1 className="font-bold text-3xl ps-10">NoteSaaS</h1>
        </Link>

        <div className="flex items-center gap-x-5 pe-10">
          <Themetoggle />

          {authenticated ? (
            <UserNav />
          ) : (
            <div className="flex items-center gap-x-5 pe-10">
              <LoginLink>
                <Button>Sign In</Button>
              </LoginLink>

              <RegisterLink>
                <Button variant="secondary">Sign Up</Button>
              </RegisterLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
