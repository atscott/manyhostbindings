import { Component, HostBinding,Input, Directive } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'many-routerlinks';
}

@Directive({
  selector: '[routerLink]'
})
export class RouterLink {
  @Input('routerLink') set setHref(v: string) {
    this.href = v;
  }
  @HostBinding() href: string;
}