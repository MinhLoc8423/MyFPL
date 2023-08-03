export const displayPostedTime = date => {
  const now = new Date(); // Current date and time

  // Convert the date parameter to a Date object
  const postedDate = new Date(date);

  // Check if the conversion is successful
  if (isNaN(postedDate.getTime())) {
    // If the date parameter is not a valid date, return an empty string
    return '';
  }

  // Calculate the time difference between the current date and the posted date
  const timeDiff = Math.abs(now.getTime() - postedDate.getTime());

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  // Build the posted time string
  let postedTime = '';

  if (days > 0) {
    postedTime = days + 'd ago';
  } else if (hours > 0) {
    postedTime = hours + 'h ago';
  } else if (minutes > 0) {
    postedTime = minutes + 'm ago';
  } else if (seconds > 0) {
    postedTime = seconds + 's ago';
  } else {
    postedTime = 'Just now';
  }

  return postedTime;
};

export const formatDate = dateString => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();

  return `${day}-${month}-${year}`;
};

export const formatDate1 = dateString => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();

  const formattedDate = `${year}-${month}-${day}T00:00:00.000Z`;
  return formattedDate.replace('Z', '+00:00');
};
