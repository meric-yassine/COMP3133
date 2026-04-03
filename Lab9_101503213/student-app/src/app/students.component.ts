import { Component } from '@angular/core';

@Component({
  selector: 'students',
  standalone: false,
  template: `
    <h1>{{ getTitle() }}</h1>
    <p>{{ getCurrentDate() }}</p>
  `
})
export class StudentsComponent {
  title: string = 'Students Component';

  getTitle(): string {
    return this.title;
  }

  getCurrentDate(): string {
    return new Date().toString();
  }
}