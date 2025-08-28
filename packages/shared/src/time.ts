import dayjs from 'dayjs';

type DateSource = Date | number | string;

export class AcmeTime {
  static format(date: DateSource, format: 'MMM D, YYYY, HH:mm'): string {
    return dayjs(date).format(format);
  }
}
