export const formatDate = (dateStr: string): string => {
  // "2023-06-26T00:16:29.822Z";
  const date = new Date(dateStr);
  const currentDate = new Date();
  const timeDiff = currentDate.getTime() - date.getTime();
  const secondsDiff = Math.floor(timeDiff / 1000);
  const minutesDiff = Math.floor(secondsDiff / 60);
  const hoursDiff = Math.floor(minutesDiff / 60);
  const daysDiff = Math.floor(hoursDiff / 24);
  const monthsDiff = Math.floor(daysDiff / 30);
  const yearsDiff = Math.floor(daysDiff / 365);

  if (daysDiff === 0) {
    const formattedTime = date.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });
    return `Today, ${formattedTime}`;
  } else if (daysDiff === 1) {
    return "1 day ago";
  } else if (daysDiff < 30) {
    return `${daysDiff} days ago`;
  } else if (monthsDiff === 1) {
    return "1 month ago";
  } else if (monthsDiff < 12) {
    return `${monthsDiff} months ago`;
  } else {
    return `${yearsDiff} years ago`;
  }
};
