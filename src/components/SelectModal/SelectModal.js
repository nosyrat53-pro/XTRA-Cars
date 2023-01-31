
import './SelectModal.css';
import Spinner from "components/Spinner/Spinner";

import { useSelector , useDispatch } from "react-redux";
import { openModal , closeModal } from "app/features/SelectModal";
import useGetData from 'utils/useGetData';
import getBrands from 'api/functions/Piece-card/getBrands';


const SelectModal = ({setter,valueKey}) => {

    const isOpen = useSelector((state) => state.SelectModal.isOpen);
    const dispatch = useDispatch();

    const handleCloseModa = (event) => {
        event.stopPropagation();
 
        dispatch(closeModal);
    }

    const {data ,isLoading , isError ,error } = 
    useGetData( valueKey , getBrands);


    return <div 
    className={`select-modal-container ${isOpen ? '' : 'close-select-modal'}`} 
    onClick={handleCloseModa}>

        <div className=''>
        <div className='modal-main-title'>يرجى اختيار الماركة</div>
        {
            data?.data?.map((model,idx) => {
                return <h1 className='modal-select-element'>{model.name}</h1>
            })
        }
        </div>
   
    </div>
}

export default SelectModal;