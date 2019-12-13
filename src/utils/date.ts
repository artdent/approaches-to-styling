export function isValid(date: any): boolean {
  return !isNaN(date) && date instanceof Date;
}
