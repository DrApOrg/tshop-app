
export interface Payload<T> {
  message: string;
  status: number;
  data: T
}