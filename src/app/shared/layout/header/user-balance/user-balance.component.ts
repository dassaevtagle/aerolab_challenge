import { formatNumber } from "@angular/common";
import { Component, Inject, LOCALE_ID, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { User } from "src/app/models/user.model";
import { Icons } from "src/app/shared/icons/icons.enum";
import { addPointsInitiated, selectUserInfo } from "src/app/state/user";

@Component({
  selector: "user-balance",
  templateUrl: "./user-balance.component.html",
  styles: [],
})
export class UserBalanceComponent implements OnInit {
  Icons = Icons;
  user: User & { displayPoints: string };
  addPointsForm = this.fb.group({
    points: [null, [Validators.required]],
  });
  showDropdown = false;

  constructor(
    private store: Store,
    private fb: FormBuilder,
    @Inject(LOCALE_ID) public locale: string
  ) {
    this.store.select(selectUserInfo).subscribe((user) => {
      this.user = {
        ...user,
        displayPoints: formatNumber(user.points, this.locale),
      };
    });
  }

  ngOnInit(): void {}

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
    if (!this.showDropdown) {
      this.addPointsForm.reset();
    }
  }

  onSubmit() {
    if (!this.addPointsForm.invalid && this.addPointsForm.value.points) {
      const amount = this.addPointsForm.value.points;
      this.store.dispatch(addPointsInitiated({ amount }));
    }
  }
}
