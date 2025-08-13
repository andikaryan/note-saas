import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import {
  LoginLink,
  RegisterLink,
} from '@kinde-oss/kinde-auth-nextjs/components';

export default async function DebugPage() {
  try {
    const { isAuthenticated, getUser } = getKindeServerSession();

    const debugInfo = {
      timestamp: new Date().toISOString(),
      isAuthenticated: null as boolean | null,
      user: null as unknown,
      error: null as string | null,
    };

    try {
      debugInfo.isAuthenticated = await isAuthenticated();
      if (debugInfo.isAuthenticated) {
        debugInfo.user = await getUser();
      }
    } catch (error) {
      debugInfo.error =
        error instanceof Error ? error.message : 'Unknown error';
    }

    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Debug Authentication</h1>

        <div className="mb-6 space-x-4">
          <LoginLink>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Sign In
            </button>
          </LoginLink>

          <RegisterLink>
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              Sign Up
            </button>
          </RegisterLink>
        </div>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-auto text-xs">
          {JSON.stringify(debugInfo, null, 2)}
        </pre>

        <div className="mt-4 space-x-4">
          <a href="/api/auth/health" className="text-blue-500 underline">
            Health Check
          </a>
          <a href="/api/auth/login" className="text-blue-500 underline">
            Direct Login
          </a>
          <a href="/api/auth/register" className="text-blue-500 underline">
            Direct Register
          </a>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Debug Error</h1>
        <pre className="bg-red-100 p-4 rounded-lg">
          {error instanceof Error ? error.message : 'Unknown error'}
        </pre>
      </div>
    );
  }
}
