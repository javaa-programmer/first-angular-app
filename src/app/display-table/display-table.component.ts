import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsermanagementService } from '../usermanagement.service';
import { UserDetails } from '../userdetails';
import { DisplayTableService } from '../DisplayTableService';

@Component({
  selector: 'app-display-table',
  templateUrl: './display-table.component.html',
  styleUrls: ['./display-table.component.css']
})

export class DisplayTableComponent implements OnInit {

  @Input () headers: any;
  @Input () valuesArray: any;

  @Output() dataEvent = new EventEmitter();

  ngOnInit() {
  } 
}
