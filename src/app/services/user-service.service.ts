// user.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private currentUser: string | null = null;

  setCurrentUser(username: string): void {
    this.currentUser = username;
  }

  getCurrentUser(): string | null {
    return this.currentUser;
  }
}
