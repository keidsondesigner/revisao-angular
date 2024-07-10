import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'revisao-angular';
  showTitle = true;
  imgUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';

  clientes = [
    {
      id: 1,
      nome: 'João',
      idade: 25
    },
    {
      id: 2,
      nome: 'Pedro',
      idade: 10
    },
    {
      id: 3,
      nome: 'Arthur',
      idade: 7
    }
  ]

  // Primeiro método executado do componente
  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnChanges(): void {
    console.log('ngOnChanges');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  chamarFuncao() {
    console.log('chamar evento');
  }
}
