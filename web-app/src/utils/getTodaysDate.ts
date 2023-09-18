function getToday(): { day: number; month: number; year: number } {
    const today = new Date();
  
    return {
      day: today.getDate(),
      month: today.getMonth(),  // getMonth() returns a value from 0-11, so we add 1 to make it 1-12.
      year: today.getFullYear()
    };
  }
  
  export default getToday