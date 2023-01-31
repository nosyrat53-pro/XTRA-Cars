import { lazy } from 'react';

import Loadable from 'components/Loadable/Loadable';

// project imports
const PieceCard = Loadable(lazy(() => import('../screens/PieceCard/PieceCard.js')));

const MainRoutes = [
    {
        path: '/',
        element: <PieceCard />
    }
];

export default MainRoutes;
