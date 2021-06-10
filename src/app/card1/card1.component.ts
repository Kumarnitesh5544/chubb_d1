import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component implements OnInit {
  @Input('planname') planname="";
  @Input('currency')  currency="";
  @Input('period') period="";
 
  @Input('offers') offers="";
 
  constructor() { }

  ngOnInit(): void {
  }

}
