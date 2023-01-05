export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("default", {
    dateStyle: "medium",
  }).format(date);
}

export function convertTimestamp({ seconds }: FireTimestamp) {
  return formatDate(new Date(seconds * 1000));
}

export function randomDate() {
  const start = new Date(2020, 0, 1);

  const end = new Date();

  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );

  return formatDate(date);
}
