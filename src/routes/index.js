import configRoutes from '~/config/routes';

//Layouts
import HeaderOnly from '~/component/Layout/HeaderOnly';

//Pages
import Home from '~/component/pages/Home';
import Following from '~/component/pages/Following';
import Profile from '~/component/pages/Profile';
import Upload from '~/component/pages/Upload';

const publicRoutes = [
    { path: configRoutes.home, component: Home },
    { path: configRoutes.following, component: Following },
    { path: configRoutes.profile, component: Profile },
    { path: configRoutes.upload, component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
