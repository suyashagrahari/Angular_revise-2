import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { UserlistComponent } from './userlist/userlist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lazycomponent';

  constructor(private viewContainer: ViewContainerRef, private cfr : ComponentFactoryResolver){}

  async userList (){
    this.viewContainer.clear();
    const {UserlistComponent} = await import('./userlist/userlist.component');
    this.viewContainer.createComponent(this.cfr.resolveComponentFactory(UserlistComponent))
  }
  async adminList (){
    this.viewContainer.clear();
    const {AdminlistComponent} = await import('./adminlist/adminlist.component');
    this.viewContainer.createComponent(this.cfr.resolveComponentFactory(AdminlistComponent))
  }

}
