export function generateFriendlyDate(postedDate: string, forceDate?: boolean): string {
  const date = new Date(postedDate + ' 00:00:00');
  const interval = Math.floor((new Date().valueOf() - date.valueOf()) / 1000 / 86400);
  if (interval <= 7 && !forceDate) {
    return `${interval} days ago`;
  } else {
    return date.toLocaleDateString('en-us', { year: 'numeric', month: 'short', day: 'numeric' });
  }
}
