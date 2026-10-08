const Loading = () => {
  return (
    <main className="min-h-screen bg-[#F3F8F4] px-4 py-8 md:py-10">
      <div className="mx-auto max-w-7xl">

        {/* Header Skeleton */}
        <div className="mb-7 flex items-center gap-4 rounded-2xl border border-gray-200 bg-white px-6 py-6 shadow-sm">
          <div className="h-14 w-14 animate-pulse rounded-xl bg-gray-200" />

          <div className="space-y-2">
            <div className="h-7 w-32 animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-52 animate-pulse rounded bg-gray-200" />
          </div>
        </div>

        {/* Top Row */}
        <div className="mb-5 flex items-center justify-between">
          <div className="h-5 w-48 animate-pulse rounded bg-gray-200" />

          <div className="h-10 w-36 animate-pulse rounded-xl bg-gray-200" />
        </div>

        {/* Card Skeletons */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 animate-pulse rounded-xl bg-gray-200" />

                <div className="flex-1 space-y-2">
                  <div className="h-5 w-32 animate-pulse rounded bg-gray-200" />
                  <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <div className="space-y-2">
                  <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />
                  <div className="h-7 w-24 animate-pulse rounded bg-gray-200" />
                </div>

                <div className="h-8 w-16 animate-pulse rounded-full bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Loading;