export function generateFriendlyDate(postedDate: string): string {
  const date = new Date(postedDate);
  const interval = Math.floor((new Date().valueOf() - date.valueOf()) / 1000 / 86400);
  if (interval <= 7) {
    return `${interval} days ago`;
  } else {
    return date.toLocaleDateString('en-us', { year: 'numeric', month: 'short', day: 'numeric' });
  }
}
