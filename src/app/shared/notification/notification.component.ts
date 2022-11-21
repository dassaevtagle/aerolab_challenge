import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Subscription } from "rxjs";
import {
  Notification,
  NotificationType,
} from "src/app/models/notification.model";
import { NotificationService } from "src/app/services/notification.service";
import { Icons } from "../icons/icons.enum";

@Component({
  selector: "notification",
  templateUrl: "./notification.component.html",
  styles: [],
})
export class NotificationComponent implements OnInit {
  Icons = Icons;
  NotificationType = NotificationType;
  @ViewChild("notificationContainer") container: ElementRef<HTMLElement>;
  notificationSubscription$: Subscription;
  notifications: Notification[] = [];
  timeOuts: { [key: number]: NodeJS.Timeout } = {};

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationSubscription$ =
      this.notificationService.notification.subscribe((notification) =>
        this.addNotification(notification)
      );
  }

  private addNotification(notification: Notification) {
    this.notifications.push(notification);
    const timeout = setTimeout(
      () => this.close(notification.id),
      notification.duration
    );
    this.timeOuts[notification.id] = timeout;
  }

  close(id: number) {
    this.notifications = this.notifications.filter((notif) => notif.id !== id);
    clearTimeout(this.timeOuts[id]);
    delete this.timeOuts[id];
  }

  ngOnDestroy() {
    this.notificationSubscription$.unsubscribe();
  }
}
