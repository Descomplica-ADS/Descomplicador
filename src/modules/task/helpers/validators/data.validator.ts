export function isDateValid(date: string): Boolean {
  return (
    typeof new Date(date).getDate === 'function' &&
    !Number.isNaN(new Date(date).getDate())
  );
}
