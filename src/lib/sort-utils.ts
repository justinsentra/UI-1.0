export function sortByDate<T extends { lastInteraction: string }>(
  items: T[],
  direction: "asc" | "desc",
): T[] {
  return [...items].sort((a, b) => {
    const diff =
      new Date(a.lastInteraction).getTime() -
      new Date(b.lastInteraction).getTime();
    return direction === "desc" ? -diff : diff;
  });
}
