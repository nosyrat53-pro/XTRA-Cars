
import './Button.css';

const Button = ({text,onClickHandler , bgColor}) => {

    return <button 
    onClick={onClickHandler} 
    className="button-container" 
    style={{background: bgColor}}>
        {text}
    </button>
}

export default Button;