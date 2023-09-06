import { ReactNode } from "react"
import { Pressable, Text } from "react-native"


type Props = {
    text:string
    onPress:()=>void
}

const Button = ({text,onPress}:Props)=>{
    
    return<Pressable
    style={style}
    onPress={onPress}
    >
        <Text style={{fontSize:40}}>
            {text}
        </Text>
    </Pressable>
}

export default Button
    
        const style = {
            fontSize:40,
            padding:10,
            textAlign:"center",
            borderWidth:2,
            margin:10
        }