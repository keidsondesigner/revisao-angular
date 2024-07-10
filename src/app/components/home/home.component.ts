import { Component } from '@angular/core';
import { filter, map, of, tap } from 'rxjs';
import { ProdutoService } from 'src/app/features/produto/services/produto.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  frutas: string[] = [];

  constructor(private produtoService: ProdutoService) {
    of('banana', 'morango', 'abacaxi', 'melancia', 'pera').pipe(
      tap(console.log),
      map((fruta) => fruta.toUpperCase()),
      tap(console.log),
      filter((fruta) => fruta.startsWith('B') || fruta.startsWith('M')),
    ).subscribe( resultado => {
      this.frutas.push(resultado);
    });
  }

  ngOnInit() {
    this.produtoService.getCEP('69058582').subscribe(
      (retorno) => console.log('AQUI', retorno)
    );
  }
}
