import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../shared/models/Tags';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  @Input()
  justifyContent:string = 'center';
  
  @Input()
  foodPageTags?:string[];
  tags?:Tag[];
  constructor(private foodService:FoodService) {}

  ngOnInit(): void {
    if (!this.foodPageTags)
    this.tags = this.foodService.getAllTags();
  }
}
