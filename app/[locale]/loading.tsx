export default function Loading() {
  return (
    <div className="min-h-screen bg-notion-bg dark:bg-notion-bg-dark pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Page title skeleton */}
        <div className="text-center mb-12 space-y-4">
          <div className="h-4 w-24 bg-notion-gray-200 dark:bg-notion-gray-700 rounded-full mx-auto animate-pulse" />
          <div className="h-10 w-2/3 bg-notion-gray-200 dark:bg-notion-gray-700 rounded-xl mx-auto animate-pulse" />
          <div className="h-6 w-1/2 bg-notion-gray-100 dark:bg-notion-gray-800 rounded-lg mx-auto animate-pulse" />
        </div>

        {/* Cards skeleton grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-white dark:bg-notion-gray-800 rounded-2xl border border-notion-border dark:border-notion-border-dark overflow-hidden"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Card header */}
              <div className="h-36 bg-notion-gray-100 dark:bg-notion-gray-700 animate-pulse" />
              {/* Card body */}
              <div className="p-6 space-y-3">
                <div className="h-5 bg-notion-gray-200 dark:bg-notion-gray-600 rounded-lg animate-pulse w-3/4" />
                <div className="h-4 bg-notion-gray-100 dark:bg-notion-gray-700 rounded animate-pulse" />
                <div className="h-4 bg-notion-gray-100 dark:bg-notion-gray-700 rounded animate-pulse w-5/6" />
                <div className="flex gap-2 pt-2">
                  <div className="h-5 w-16 bg-notion-gray-100 dark:bg-notion-gray-700 rounded-full animate-pulse" />
                  <div className="h-5 w-20 bg-notion-gray-100 dark:bg-notion-gray-700 rounded-full animate-pulse" />
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-notion-border dark:border-notion-border-dark">
                  <div className="h-7 w-24 bg-notion-gray-200 dark:bg-notion-gray-600 rounded animate-pulse" />
                  <div className="h-8 w-20 bg-notion-blue/20 rounded-lg animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
