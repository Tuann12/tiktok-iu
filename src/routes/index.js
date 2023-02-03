import config from '~/config';

//Layouts
import HeaderOnly from '~/layouts/HeaderOnly';

//Pages
import Home from '~/component/pages/Home';
import Following from '~/component/pages/Following';
import Profile from '~/component/pages/Profile';
import Upload from '~/component/pages/Upload';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
