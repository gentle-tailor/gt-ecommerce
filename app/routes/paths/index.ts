import { join } from 'routes/utils/path';

export const PATH_ROOT = '/';

export const PATH_ACCOUNT = join(PATH_ROOT, '/account');

export const PATH_AUTH = join(PATH_ROOT, '/auth');
export const PATH_AUTH_LOGIN = join(PATH_AUTH, '/login');
export const PATH_AUTH_SIGNUP = join(PATH_AUTH, '/signup');
export const PATH_AUTH_PASSWORD = join(PATH_AUTH, '/password');

export const PATH_CUSTOMIZE = join(PATH_ROOT, '/customize');
export const PATH_CUSTOMIZE_JACKET = join(PATH_CUSTOMIZE, '/jacket');
export const PATH_CUSTOMIZE_JACKET_FABRIC = join(PATH_CUSTOMIZE_JACKET, '/fabric');
export const PATH_CUSTOMIZE_JACKET_STYLES = join(PATH_CUSTOMIZE_JACKET, '/styles');
export const PATH_CUSTOMIZE_JACKET_ACCENTS = join(PATH_CUSTOMIZE_JACKET, '/accents');
export const PATH_CUSTOMIZE_PANTS = join(PATH_CUSTOMIZE, '/pants');
export const PATH_CUSTOMIZE_PANTS_FABRIC = join(PATH_CUSTOMIZE_PANTS, '/fabric');
export const PATH_CUSTOMIZE_PANTS_STYLES = join(PATH_CUSTOMIZE_PANTS, '/styles');
export const PATH_CUSTOMIZE_VEST = join(PATH_CUSTOMIZE, '/vest');
export const PATH_CUSTOMIZE_MEASUREMENT = join(PATH_CUSTOMIZE, '/measurement');

export const PATH_EDITORIALS = join(PATH_ROOT, '/editorials');
export const PATH_EDITORIALS_ENTRY = join(PATH_EDITORIALS, '/:identifier');

export const PATH_INFO = join(PATH_ROOT, '/info');

export const PATH_ORDER = join(PATH_ROOT, '/order');
export const PATH_ORDER_CHECKOUT = join(PATH_ORDER, '/checkout');
export const PATH_ORDER_CONFIRM = join(PATH_ORDER, '/confirm');

export const PATH_SHOP = join(PATH_ROOT, '/shop');
export const PATH_SHOP_PRESET = join(PATH_SHOP, '/:identifier');
