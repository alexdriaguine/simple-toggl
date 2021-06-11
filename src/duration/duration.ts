export const formatDuration = (duration: number) =>
  new Date(duration * 1000).toISOString().substr(11, 8);

export const getDurationFromStart = (startDateString: string, now: Date) => {
  const startTime = new Date(startDateString).getTime();
  const currentTime = now.getTime();

  const diffInMs = currentTime - startTime;
  return Math.round(diffInMs / 1000);
};
