export type Notification = {
  id: number;
  title?: string;
  message: string;
  type: NotificationType;
  duration: number;
};

export enum NotificationType {
  Success = 0,
  Error = 1,
}
