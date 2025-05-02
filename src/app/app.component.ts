import { Component, OnInit } from '@angular/core';
import { NavigationService } from './navigation.service';
import { MenuSidebar } from './types/navigation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

activeItem: any;
openSidebar: boolean = true;
readonly MENUS: MenuSidebar[] = this.navigationService.getMenus();
menuSidebar: MenuSidebar[] = this.MENUS;

constructor(
  private navigationService: NavigationService,

  ) { }
  
  ngOnInit() {

  }

  showSubmenu(item: any) {
    if (item.link_name == this.activeItem) {
    this.activeItem = undefined;
    } else {
    this.activeItem = item.link_name;
    }
    }
    
    selectMenu(parentMenu: { link_name: string }): void {
    this.menuSidebar.forEach((menu) => {
    if (menu.link_name !== parentMenu.link_name) {
    menu.active = false;
    } else {
    menu.active = !menu.active;
    }
    });
    }

}
