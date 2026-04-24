import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { RemoveSpacesPipe } from "../remove-spaces-pipe";
import { InputFormatDirective } from '../input-format';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, UpperCasePipe, RemoveSpacesPipe, InputFormatDirective],
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;
hero: any;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}