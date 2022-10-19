import { format } from 'date-fns';

export function toHumanReadableDate(date: string | number | Date) {
	return format(new Date(date), 'dd/MM/yyyy');
}

export function toIsoString(date: string | number | Date) {
	return format(new Date(date), 'yyyy-MM-dd');
}
