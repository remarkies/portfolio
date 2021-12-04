import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-a-link',
  templateUrl: './a-link.component.html',
  styleUrls: ['./a-link.component.scss']
})
export class ALinkComponent implements OnInit {

  @Input() label: string = '';
  @Input() link: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
