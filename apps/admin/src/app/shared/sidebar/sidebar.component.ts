import { Component, OnInit } from '@angular/core';
import { AuthService } from '@eshop/users';

@Component({
  selector: 'admin-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  showCoursesMenu = false; // Initialize the boolean variable

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  toggleCoursesMenu() {
    this.showCoursesMenu = !this.showCoursesMenu; // Toggle the boolean value
  }

  logoutUser() {
    this.authService.logout();
  }
}
