import { DashboardNav } from "./nav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid lg:grid-cols-5">
      <div className="col-span-1 hidden lg:block">
        <div className="px-4 py-6 lg:px-8">
          <DashboardNav />
        </div>
      </div>
      <div className="col-span-4">
        <div className="px-4 py-6 lg:px-8">
          {children}
        </div>
      </div>
    </div>
  );
}
