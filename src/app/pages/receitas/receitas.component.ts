import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.scss']
})
export class ReceitasComponent implements OnInit {

  constructor() { }

  receitas = [
    {
      'image': 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/launchbase/receitas/burger.png',
      'title': 'Triplo bacon burger',
      'author': 'Jorge Relato',
    },
    {
      'image': 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/launchbase/receitas/pizza.png',
      'title': 'Pizza 4 estações',
      'author': 'Fabiana Melo',
    },
    {
      'image': 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/launchbase/receitas/asinha.png',
      'title': 'Asinhas de frango ao barbecue',
      'author': 'Vania Steroski',
    },
    {
      'image': 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/launchbase/receitas/lasanha.png',
      'title': "Lasanha mac n' cheese",
      'author': 'Juliano Vieira',
    },
    {
      'image': 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/launchbase/receitas/macarrao.png',
      'title': 'Espaguete ao alho',
      'author': 'Júlia Kinoto',
    },
    {
      'image': 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/launchbase/receitas/doce.png',
      'title': 'Docinhos pão-do-céu',
      'author': 'Ricardo Golvea',
    }
  ]

  ngOnInit(): void {
  }

}
