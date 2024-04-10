/**
 * @file router guards
 */
import NProgress from 'nprogress';

const beforeEachCallback = async (to, from, next) => {
    NProgress.start();
    next();
    NProgress.done();
};

const afterEachCallback = () => {
    NProgress.done();
};

export {beforeEachCallback, afterEachCallback};
