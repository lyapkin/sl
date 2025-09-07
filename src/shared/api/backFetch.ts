export const backFetch = async (
  path: string,
  options?: { revalidate?: number; redirect?: "follow" | "manual" | "error" }
) => {
  const url = new URL(path, process.env.NEXT_PUBLIC_API_BASE_URL);
  const res = await fetch(url, {
    next: {
      revalidate: options?.revalidate || 0,
    },
    redirect: options?.redirect || "follow",
  });
  return res;
};
