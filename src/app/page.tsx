export default function Home() {
  return (
    <div className="container mx-auto px-4 py-45">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Hero Section */}
        <div className="space-y-6">
          <div>
            <span className="w-auto px-6 py-3 rounded-full bg-secondary">
              <span className="text-sm font-medium text-primary">
                Sort your notes easily
              </span>
            </span>
          </div>

          <h1 className="mt-8 text-3xl font-extrabold tracking-tight lg:text-6xl">
            Create Notes with ease
          </h1>

          <p className="max-w-xl mx-auto mt-8 text-base lg:text-xl text-secondary-foreground">
            NoteSaaS is a simple and powerful note-taking application that helps you
            organize your thoughts and ideas effortlessly. Whether you jotting down
            quick notes or writing detailed articles, NoteSaaS has got you covered.
          </p>
        </div>
      </div>
    </div>
  );
}
