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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-foreground mb-4">
        Welcome to Dashboard
      </h1>
      {user && (
        <div className="bg-card p-6 rounded-lg border">
          <h2 className="text-lg font-semibold mb-2">User Info:</h2>
          <p>Email: {user.email}</p>
          <p>
            Name: {user.given_name} {user.family_name}
          </p>
          <p>ID: {user.id}</p>
        </div>
      )}
    </div>
  );
}
