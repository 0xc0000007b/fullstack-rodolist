import {Component, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],

})
export class HeaderComponent {
constructor(@Inject(DOCUMENT) document) {
}
ngOnInit(): void{



  }
g


}
