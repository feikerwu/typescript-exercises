// This enabled module augmentation mode.
import 'date-wizard';

declare module 'date-wizard' {
  // Add your module extensions here.
  export const pad: (s: number) => string;
  interface DateDetails {
    year: number;
    month: number;
    date: number;
    hours: number;
  }
}
