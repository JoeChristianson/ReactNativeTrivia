type MonthInfo = {
    firstDayOfWeek: number; // 0 is Sunday, 1 is Monday, ..., 6 is Saturday
    daysInMonth: number;
  };
  
  function getMonthInfo(year: number, month: number): MonthInfo {
    // 1. Check the month and year inputs
    if (month < 0 || month > 11) {
      throw new Error("Month number must be between 0 and 11.");
    }
  
    if (year < 1) {
      throw new Error("Year must be a positive number.");
    }
  
    // 2. Determine the first day of the month
    const date = new Date(year, month, 1);
    
    // Here, getUTCDay() will return 0 for Sunday, 1 for Monday, and so on until 6 for Saturday
    const firstDayOfWeek = date.getUTCDay();
  
    // 3. Determine the number of days in the month
    const nextMonth = (month + 1) % 12;
    const nextMonthYear = month === 11 ? year + 1 : year;
  
    const firstDayOfNextMonth = new Date(nextMonthYear, nextMonth, 1);
    const lastDayOfThisMonth = new Date(firstDayOfNextMonth.getTime() - 24 * 60 * 60 * 1000);
  
    const daysInMonth = lastDayOfThisMonth.getUTCDate();
  
    // 4. Return the result
    return {
      firstDayOfWeek,  // This will be 0 for Sunday, 1 for Monday, etc.
      daysInMonth,
    };
  }
  
  export default getMonthInfo