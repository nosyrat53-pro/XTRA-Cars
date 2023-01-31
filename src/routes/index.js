import { useRoutes } from 'react-router-dom';
import MainRoutes from './mainRoutes';

export default function AllRoutes() {
    let routes = useRoutes(MainRoutes);
    return routes;
}
