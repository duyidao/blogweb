import { routeNow } from '@/store/router.js'

/**
 * @file router guards
 */
import NProgress from 'nprogress';

const beforeEachCallback = async (to, from, next) => {
    NProgress.start();
    routeNow.value = {
        path: to.path,
        menuOrder: to.meta.menuOrder,
    };
    next();
    NProgress.done();
};

const afterEachCallback = () => {
    NProgress.done();
};

export {beforeEachCallback, afterEachCallback};
