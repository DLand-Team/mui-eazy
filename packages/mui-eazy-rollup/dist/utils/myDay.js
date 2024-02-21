import dayjs from '../node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/dayjs.min.js';
import relativeTime from '../node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/plugin/relativeTime.js';

dayjs.extend(relativeTime);

export { dayjs as default };
