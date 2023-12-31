import dayjs, { Dayjs } from "dayjs";

// Plugins:
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";

// Locales:
import "dayjs/locale/fr";

// Config:
dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.locale("fr");

// Export:
export const dayJS = dayjs;
export { Dayjs };