import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  @Input()
  photoCover: string = '../../../assets/imagens/a123456.jpg';
  @Input()
  contentTitle: string = 'Linha 4080 difícil vender!';
  @Input()
  contentDescription: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates amet
  illum nihil fuga at ut ad nulla aspernatur. Atque placeat doloribus
  distinctio dicta ipsa debitis`;

  constructor() {}

  ngOnInit(): void {}
}
