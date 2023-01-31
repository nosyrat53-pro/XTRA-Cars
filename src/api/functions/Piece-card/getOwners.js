
import CodeChallengeAPI from '../../../AxiosConfiguration'
import { OwenersEndPoint } from '../../endpoints/Piece-card';

const getBrands = async ({querykey}) => {
  
     return await CodeChallengeAPI.get(OwenersEndPoint)
     
}

export default getBrands;

