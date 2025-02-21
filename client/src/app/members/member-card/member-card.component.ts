import { Component, input } from '@angular/core';
import { Member } from '../../_models/member';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faHeart, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-member-card',
  imports: [FontAwesomeModule,RouterLink],
  templateUrl: './member-card.component.html',
  styleUrl: './member-card.component.css'
})
export class MemberCardComponent {
  member = input.required<Member>();
  faUser = faUser;
  faHeart = faHeart;
  faeEnvelope = faEnvelope;
}
