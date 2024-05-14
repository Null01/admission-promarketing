export const filtersFromDate = {
  'all_dates_after_today': (date: Date) => date >= new Date(),
  'all_days_except': (date: Date) => !(date.getDay() === 6 || date.getDay() === 0),
};