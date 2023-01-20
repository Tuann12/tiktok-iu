import HeaderOnly from '~/component/Layout/HeaderOnly';

import Home from '~/component/pages/Home';
import Following from '~/component/pages/Following';
import Profile from '~/component/pages/Profile';
import Upload from '~/component/pages/Upload';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
