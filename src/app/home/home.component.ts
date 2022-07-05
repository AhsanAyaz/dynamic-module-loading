import { Component, OnInit } from '@angular/core';
import { OnDemandLoadService } from '../services/on-demand-load.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private load: OnDemandLoadService) {}

  ngOnInit(): void {}

  loadUserModule() {
    this.load.startPreload('User');
  }
}
