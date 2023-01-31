
import { useQuery } from "react-query"

const useGetData = (cashTitle , getDataFn) => {

    const query = useQuery(cashTitle,getDataFn )

    return {...query};

}

export default useGetData;