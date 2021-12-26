import { EventStatus } from './enum';

declare namespace API {
  interface Base {
    type: 'message' | 'notification' | 'event';
    id: string;
    title: string;
  }

  interface Notification extends Base {
    type: 'notification';
    read?: boolean;
    avatar: string;
    datetime: string;
  }

  interface Message extends Base {
    type: 'message';
    read?: boolean;
    avatar: string;
    datetime: string;
    description: string;
    clickClose: boolean;
  }

  interface Event extends Base {
    type: 'event';
    description: string;
    extra: string;
    status: keyof typeof EventStatus;
  }

  type Notices = Notification | Message | Event;

  type Notice<T extends Notices['type'] | 'all' = 'all'> = T extends 'all' ? Notices : Extract<Notices, { type: T }>;
}

// type MinusKeys<T, U> = Pick<T, Exclude<keyof T, keyof U>>

// type Defined<T> = T extends undefined ? never : T

// type MergedProperties<T, U> = { [K in keyof T & keyof U]: undefined extends T[K] ? Defined<T[K] | U[K]> : T[K] }

// type Merge<T extends Object, U extends Object> = MinusKeys<T, U> & MinusKeys<U, T> & MergedProperties<U, T>
