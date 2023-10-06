import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { Tag } from '../../shared/models/Tags';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number):Food{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllTags():Tag[] {
 return [
  { name: 'All', count:7 },
  { name: 'fastFood', count:4 },
  { name: 'chicken', count:1 },
  { name: 'lunch', count:2 },
  { name: 'potatoes', count:1 },
  { name: 'fry', count:1 },
  { name: 'soup', count:1 },
  { name: 'onions', count:1 },
  { name: 'vegetables', count:1 },
  { name: 'italian', count:2 },
 ];
  }

getAllFoodsBySearchTerm(searchTerm:string):Food[]{
  return this.getAll().filter(food => food.name.toLowerCase().includes('searchTerm'.toLowerCase()));
}


  getAllFoodsByTag(tag:string):Food[] {
    return tag =="All"?
    this.getAll():
    this.getAll().filter(food => food.tags?.includes(tag))

   // if (tag == "All")
  //  return this.getAll();
  //  else 
   // return this.getAll().filter(food.tags?.includes(tag))
  }
  getAll():Food[]{
    return [
      {
      id:1,
      name: 'Chicken tikka masala',
      price: 4,
      cookTime: '10-20',
      favorite: false,
      origins:['India'],
      stars: 4.0,
      imageUrl: '/assets/images/foods/food1.jpg',
      tags: ['fastfood', 'chicken', 'lunch']
      },
      {
        id:2,
        name: 'French Fries',
        price: 2.5,
        cookTime: '10-15',
        favorite: true,
        origins:['belgium', 'france'],
        stars: 3.5,
        imageUrl: '/assets/images/foods/food2.jpg',
        tags: ['fastfood', 'potatoes', 'fry']
        },
        {
          id:3,
          name: 'Onion Soup',
          price: 3,
          cookTime: '15-25',
          favorite: true,
          origins:['france'],
          stars: 4.5,
          imageUrl: '/assets/images/foods/food3.jpg',
          tags: ['soup', 'onions']
          },
          {
            id:4,
            name: 'Ratatouille',
            price: 3.7,
            cookTime: '30',
            favorite: false,
            origins:['france'],
            stars: 5,
            imageUrl: '/assets/images/foods/food4.jpg',
            tags: ['dinner', 'vegetables', 'healthy']
            },
            {
              id:5,
              name: 'Spaghetti',
              price: 1.9,
              cookTime: '10-15',
              favorite: false,
              origins:['italy'],
              stars: 4.5,
              imageUrl: '/assets/images/foods/food5.jpg',
              tags: ['italian', 'lunch', 'macaroni']
              },
              {
                id:6,
                name: 'Cheese Pizza',
                price: 2.7,
                cookTime: '20-25',
                favorite: true,
                origins:['italy'],
                stars: 4.2,
                imageUrl: '/assets/images/foods/food6.jpg',
                tags: ['fastfood', 'pizza', 'italian']
                },
                {
                  id:7,
                  name: 'Beef Burger',
                  price: 3.2,
                  cookTime: '20',
                  favorite: false,
                  origins:['germany', 'usa'],
                  stars: 4,
                  imageUrl: '/assets/images/foods/food7.jpg',
                  tags: ['fastfood', 'beef', 'burger']
                  },
    ]
  }
}
