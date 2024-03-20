export interface Movie {
  id: number;
  name: string;
  language: string;
  ticketCost?: number;
  rows?: number;
  cols?: number;
  seats?: Seats;
}

export interface Seats {
  [key: string]: number[];
}
