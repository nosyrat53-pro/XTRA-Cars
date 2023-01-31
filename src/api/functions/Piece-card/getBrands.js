
import CodeChallengeAPI from 'AxiosConfiguration'
import { BrandsEndPoint } from '../../endpoints/Piece-card';


const getBrands = async ({querykey}) => {
  
     return await CodeChallengeAPI.get(BrandsEndPoint)
}

export default getBrands;

