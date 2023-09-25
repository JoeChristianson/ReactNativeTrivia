import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import Question from '../../../types/Question';
import route from '../../../utils/fex/route';
import addNeededFieldsForQuiz from './helpers/addNeededFieldsForQuiz';


export type Quiz = {
  id:string
  questions:Question[]
}

type State = {
    quiz?:null|Quiz
    error?:string
  }

const initialState:State = {
  quiz:null
};

interface GetQuizParams {
  day:number
  month:number
  year:number
  userId:string
}

export const getQuiz = createAsyncThunk(
  'currentQuiz/getQuiz',
  async (params:GetQuizParams) => {
    const {month,day,year,userId} = params
    const date = `${month+1}-${day}-${year}`
    const url = route("api/quiz/"+date) 
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error('Registration failed');
    }

    const data = await response.json();
    return data;

  }
);

interface AnswerQuestionPayload{
  _id:string
  playerAnswer:string
}

interface FinishReviewQuestionPayload{
  _id:string
}

const currentQuizSlice = createSlice({
  name: 'currentQuizSlice',
  initialState,
  reducers: {
    answerQuestion:(state:State,action:PayloadAction<AnswerQuestionPayload>)=>{
      const {_id,playerAnswer} = action.payload
      if(!state?.quiz){
        return
      }
      const questionSet = state.quiz.questions.map((q)=>{
        if(_id!==q._id){
          return q
        }
        return {...q,playerAnswer}
      })
      state.quiz.questions = questionSet
      state.error = undefined
    },
    finishReviewQuestion:(state:State,action:PayloadAction<FinishReviewQuestionPayload>)=>{
      const {_id} = action.payload
      if(!state?.quiz){
        return
      }
      const questionSet = state.quiz.questions.map((q)=>{
        if(_id!==q._id){
          return q
        }
        return {...q,reviewed:true}
      })
      state.quiz.questions = questionSet
      state.error = undefined
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getQuiz.fulfilled, (state, action:any) => {
        const quiz = action.payload.quiz
        state.quiz = addNeededFieldsForQuiz({quiz})
      })
      .addCase(getQuiz.rejected, (state, action) => {
        state.error = action.error.message;        
        console.log("error")
      })
  }
});


export default currentQuizSlice.reducer;
export const {answerQuestion,finishReviewQuestion} = currentQuizSlice.actions