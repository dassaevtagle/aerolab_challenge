import { Component, OnInit } from "@angular/core";
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
  user: User;
  addPointsForm = this.fb.group({
    points: [null, [Validators.required]],
  });
  showDropdown = false;

  constructor(private store: Store, private fb: FormBuilder) {
    this.store.select(selectUserInfo).subscribe((user) => {
      this.user = user;
      this.showDropdown = false;
      this.addPointsForm.reset();
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
