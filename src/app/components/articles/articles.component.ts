import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {
  
  @Input() dataSource: Array<any>; 
  protected listForm: FormGroup;

  constructor() { }

  ngOnInit() {
     console.log(this.dataSource);
  }
}
