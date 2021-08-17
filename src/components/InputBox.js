
import {useSelector} from 'react-redux'

const InputBox = ({text, placeholder, value, onTextChange}) => {
    // const {cnt} = useSelector(state => state.user);
    const hardship = useSelector(state => state.user.hardship)  
    const cnt = useSelector(state => state.user.cnt)  

    //if text === "password" -> type = "password"
    return <div>    
        <span style={{fontSize:12, fontWeight:600,}}>{text}</span>
        <br/>
        <input placeholder={placeholder} value={value} onChange={e => onTextChange(e)}
            type={text==="password" ? "password":""}
        />
    </div>  

}
export default InputBox

