import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { Notification, NotificationType } from "../models/notification.model";

@Injectable({
  providedIn: "root",
})
export class NotificationService {
  constructor() {}

  private notification$: Subject<Notification> = new Subject();
  private id = 0;

  private notify(
    message: string,
    type: NotificationType,
    duration: number = 3000,
    title?: string
  ) {
    this.notification$.next({
      id: this.id++,
      title,
      message,
      type,
      duration,
    } as Notification);
  }

  success({
    message,
    duration,
    title,
  }: {
    message: string;
    duration?: number;
    title?: string;
  }) {
    this.notify(message, NotificationType.Success, duration, title);
  }

  error({
    message = "There was a problem with the transaction",
    duration,
    title,
  }: {
    message?: string;
    duration?: number;
    title?: string;
  }) {
    this.notify(message, NotificationType.Error, duration, title);
  }

  get notification(): Observable<Notification> {
    return this.notification$.asObservable();
  }
}
