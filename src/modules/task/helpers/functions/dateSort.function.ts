import isAfter from 'date-fns/isAfter';

export function dateSortFn(a: any, b: any) {
  if (isAfter(new Date(a), new Date(b))) return 1;
  return -1;
}

export function dateSort<T extends (string | Date)[]>(dates: T): T {
  const sortedDate = dates.slice().sort(dateSortFn);

  return sortedDate as T;
}
