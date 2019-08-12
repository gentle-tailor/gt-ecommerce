import { join } from 'routes/utils/path';

export const PATH_ROOT = '/';

export const PATH_CUSTOMIZE = join(PATH_ROOT, '/customize');
export const PATH_CUSTOMIZE_FABRIC = join(PATH_CUSTOMIZE, '/fabric');
export const PATH_CUSTOMIZE_STYLE = join(PATH_CUSTOMIZE, '/style');
export const PATH_CUSTOMIZE_ACCENT = join(PATH_CUSTOMIZE, '/accent');
export const PATH_CUSTOMIZE_CONFIRM = join(PATH_CUSTOMIZE, '/confirm');
export const PATH_CUSTOMIZE_MEASUREMENT = join(PATH_CUSTOMIZE, '/measurement');

export const PATH_INFO = join(PATH_ROOT, '/info');

export const PATH_ACCOUNT = join(PATH_ROOT, '/account');

export const PATH_AUTH = join(PATH_ROOT, '/auth');
export const PATH_AUTH_LOGIN = join(PATH_AUTH, '/login');
export const PATH_AUTH_SIGNUP = join(PATH_AUTH, '/signup');
export const PATH_AUTH_PASSWORD = join(PATH_AUTH, '/password');

export const PATH_ORDER = join(PATH_ROOT, '/order');
export const PATH_ORDER_CHECKOUT = join(PATH_ORDER, '/checkout');
export const PATH_ORDER_CONFIRM = join(PATH_ORDER, '/confirm');

export const PATH_SHOP = join(PATH_ROOT, '/shop');
export const PATH_SHOP_PRESET = join(PATH_SHOP, '/:identifier');
