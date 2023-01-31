
import './SelectInput.css';

const SelectInput = ({ label , options}) => {

    return <div className="select-input-container">
        
        <div className="label">{label}</div>
        
        <select className="select-input-itself">
            {
                options.map((option,idx) => {
                    return <option value={option.id}>{option.name}</option>
                })
            }
        </select>
    
    </div> 
}

export default SelectInput;