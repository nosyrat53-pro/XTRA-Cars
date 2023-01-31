
import './InputWithPopup.css';

import { useDispatch } from 'react-redux';
import { openModal } from 'app/features/SelectModal';
import SelectModal from 'components/SelectModal/SelectModal';
import { BrandsEndPoint } from 'api/endpoints/Piece-card';

const InputWithPopUp = ({ label,register={},setter,valueKey }) => {

    const dispatch = useDispatch();

    return <>

    <div className="input-popup-container">
        
        <div className="input-popup-label">{label}</div>
        
        <button className="input-popup-btn">
        <input {...register} disabled />
            <div className='inner-button' onClick={() => dispatch(openModal())}>...</div>
        </button>


    </div>
    
       
    </> 

}

export default InputWithPopUp;