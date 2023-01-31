
import './TextInput.css';

const TextInput = ({label,defaultValue,placeHolder}) => {

    return <label className="text-input-container">
            
            <div>{label}</div>
            
            <input 
            type='text' 
            placeholder={placeHolder} 
            defaultValue={defaultValue} 
            className="text-input-itself"

            />

    </label>
}

export default TextInput;