import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const authenticated = await isAuthenticated();

  if (!authenticated) {
    redirect('/');
  }

  const user = await getUser();

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground mb-4">
        Welcome to Dashboard
      </h1>
    </div>
  );
}
