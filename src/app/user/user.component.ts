import { Component, OnInit } from '@angular/core';
import { OnDemandLoadService } from '../services/on-demand-load.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor(private load: OnDemandLoadService) {}

  ngOnInit(): void {}

  loadModule(moduleName: string) {
    this.load.startPreload(moduleName);
  }
}
