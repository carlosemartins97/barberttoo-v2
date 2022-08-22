import { Component, OnInit } from '@angular/core';
import { faScissors } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent implements OnInit {

  loading: boolean = false;

  //icons
  faScissors = faScissors;

  constructor() { }

  ngOnInit(): void {
  }

}
