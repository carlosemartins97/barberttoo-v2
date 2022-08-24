import { Component, Input, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-skeleton',
  templateUrl: './card-skeleton.component.html',
  styleUrls: ['./card-skeleton.component.scss']
})
export class CardSkeletonComponent implements OnInit {

  @Input() route: string;
  @Input() title: string;

  faArrowLeft = faArrowLeft;

  constructor() { }

  ngOnInit(): void {
  }

}
