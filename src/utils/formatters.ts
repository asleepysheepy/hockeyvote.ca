export function formatDate(date: Date, locale: string): string {
  return date.toLocaleDateString(`${locale}-CA`, {
    timeZone: 'UTC',
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })
}
