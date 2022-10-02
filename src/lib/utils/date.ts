export function generateFriendlyDate(postedDate: string): string {
  const date = new Date(postedDate);
  const interval = Math.floor((new Date().valueOf() - date.valueOf()) / 1000 / 86400);
  if (interval <= 7) {
    return `${interval} days ago`;
  } else {
    return date.toLocaleDateString('en-us', { year: 'numeric', month: 'short', day: 'numeric' });
  }
}

// const date = new Date(post.meta.date).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"})
// var seconds = Math.floor((new Date() - new Date(post.meta.date)) / 1000);
// const interval = seconds / 86400;
// const fancyDate = Math.floor(interval) + " days ago";
