
import TextInput from 'components/TextInput/TextInput';
import InputWithPopUp from 'components/InputWithPopup/InputWithPopup';
import './PieceCard.css';
import PieceImage from 'assets/piece.png';
import SelectInput from 'components/SelectInput/SelectInput';
import Button from 'components/Button/Button';
import { useForm } from 'react-hook-form';
import useGetData from 'utils/useGetData';
import getBrands from 'api/functions/Piece-card/getBrands';
import SelectModal from 'app/features/SelectModal';

const PieceCard = () => {


    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
      } = useForm({
        mode: 'onChange',
        defaultValues: {
            brand: ''
        }
      });

    return <div className="piece-card-container">
        <h1 className="pice-card-head">بطاقة قطعة</h1>

        <div className='data-input-form-container'>


        <div className='inputs'>
            <TextInput 
                label="رمز البطاقة"
                defaultValue="123"
                placeHolder=""
            />
            <TextInput 
                label="الوصف"
                defaultValue=""
                placeHolder=""
            />

                <TextInput 
                label="الاسم اللاتيني"
                defaultValue=""
                placeHolder=""
                />

                <InputWithPopUp 
                label="الماركة" 
                register={{...register}} 
                setter={setValue}
                valueKey={'brand'}   
                />
                <InputWithPopUp label="الموديل"/>
                <InputWithPopUp label="الرقم التسلسلي"/>
                <InputWithPopUp label="معرف القطعة"/>
                <SelectInput 
                    options={[
                        {id:1,name:'تعمل'},
                        {id:2,name:'لا تعمل'}
                        ]}
                        label="الحالة"
                />
                <InputWithPopUp label="المالك"/>
                <SelectInput 
                    options={[
                        {id:1,name:'أسود'},
                        {id:2,name:'أصفر'}
                        ]}
                        label="اللون"
                />

                <SelectInput 
                    options={[
                        {id:1,name:'1999'},
                        {id:2,name:'2005'},
                        {id:2,name:'2010'}
                        ]}
                        label="سنة التصنيع"
                />
                <SelectInput 
                    options={[
                        {id:1,name:'يوجد'},
                        {id:2,name:'لا يوجد'}
                        ]}
                        label="الفرش"
                />
                <SelectInput 
                    options={[
                        {id:1,name:'بنزين'},
                        {id:2,name:'كيروسين'}
                        ]}
                        label="الوقود"
                />
        </div>
                        


        <div className='show-actions'>
        <div className=''>
            <div className='head'>صورة القطعة</div>
            <img src={PieceImage} className='image-itself' width={200} alt={'XTRA CARS'} />
        </div>

        <div className='buttons-container'>
            <Button 
                text="جديد"
                onClickHandler={() => {}}
            />
            <Button 
                text="حفظ"
                onClickHandler={() => {}}
            />
            <Button 
                text="حذف"
                onClickHandler={() => {}}
                bgColor="#9E0000"
            />
            <Button 
                text="إغلاق"
                onClickHandler={() => {}}
                bgColor={'var(--light1)'}
            />
            
        </div>
        </div>
        </div>


    </div>
}

export default PieceCard;