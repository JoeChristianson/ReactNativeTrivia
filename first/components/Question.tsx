import { ReactNode } from "react"
import { StyleSheet, Text, View } from "react-native"

type Props = {
    children:ReactNode
}

const Question = ({children}:Props)=>{
    return<View >
        <Text style={style.question}>
        {children}
        </Text>
        </View>
}

export default Question

const style = StyleSheet.create({
    question: {
      padding:10,
      marginBottom:40,
      textAlign:"center",
      fontSize:40
    }
  });