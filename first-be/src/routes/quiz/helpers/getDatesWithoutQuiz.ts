import DailyQuiz from "../../../models/DailyQuiz";

const getDatesWithoutQuiz = async ()=>{

    
    const startDate = new Date();
    startDate.setHours(0, 0, 0, 0); // Set time to beginning of the day
    
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 30);
    
    const quizzes = await DailyQuiz.find({
    date: {
      $gte: startDate,
      $lte: endDate
    }
}).select('date').lean();

  // Extract only the dates from the quizzes
  const quizDates = quizzes.map(q => q.date.toISOString().split('T')[0]);

  // Check all dates from today to next 30 days
  let current = new Date(startDate);
  const missingDates: Date[] = [];
  
  while (current <= endDate) {
      const currentDateStr = current.toISOString().split('T')[0];
      if (!quizDates.includes(currentDateStr)) {
          missingDates.push(new Date(current));
        }
        current.setDate(current.getDate() + 1);
    }
    return missingDates
}

export default getDatesWithoutQuiz