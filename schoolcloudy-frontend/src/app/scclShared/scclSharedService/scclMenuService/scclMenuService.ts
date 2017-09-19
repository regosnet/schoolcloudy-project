import {Injectable} from '@angular/core';
import {Router, Routes} from '@angular/router';
import * as _ from 'lodash';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ScclMenuService {
  public menuItems = new BehaviorSubject<any[]>([]);
  public scclHeaderMenuItems = new BehaviorSubject<any>({});

  protected _currentMenuItem = {};

  constructor(private _router: Router) { }

  /**
   * Updates the routes in the menu
   *
   * @param {Routes} routes Type compatible with app.menu.ts
   */
  public updateMenuByRoutes(routes: Routes) {
    const convertedRoutes = this.convertRoutesToMenus(_.cloneDeep(routes));
    this.menuItems.next(convertedRoutes);
  }

  public updateHeaderMenu(routes: Routes) {
      const convertedRoutes = this._prepareHeaderMenu(_.cloneDeep(routes));
      this.scclHeaderMenuItems.next(convertedRoutes);
  }

  public convertRoutesToMenus(routes: Routes): any[] {
    const items = this._convertArrayToItems(routes);
    return this._skipEmpty(items);
  }

  public getCurrentItem(): any {
    return this._currentMenuItem;
  }

  public selectMenuItem(menuItems: any[]): any[] {
    const items = [];
    menuItems.forEach((item) => {
      this._selectItem(item);

      if (item.selected) {
        this._currentMenuItem = item;
      }

      if (item.children && item.children.length > 0) {
        item.children = this.selectMenuItem(item.children);
      }
      items.push(item);
    });
    return items;
  }

  protected _skipEmpty(items: any[]): any[] {
    const menu = [];
    items.forEach((item) => {
      let menuItem;
      if (item.skip) {
        if (item.children && item.children.length > 0) {
          menuItem = item.children;
        }
      } else {
        menuItem = item;
      }

      if (menuItem) {
        menu.push(menuItem);
      }
    });

    return [].concat.apply([], menu);
  }

  protected _convertArrayToItems(routes: any[], parent?: any): any[] {
    const items = [];
    routes.forEach((route) => {
        const convertedItem = this._convertObjectToItem(route, parent);
        items.push(convertedItem);
    });
    return items;
  }

  protected _convertObjectToItem(object, parent?: any): any {
    let item: any = {};
    if (object.data && object.data.menu) {
      // this is a menu object
      item = object.data.menu;
      item.route = object;
      delete item.route.data.menu;
    }else {
      item.route = object;
      item.skip = true;
    }

    // we have to collect all paths to correctly build the url then
    if (Array.isArray(item.route.path)) {
      item.route.paths = item.route.path;
    } else {
      item.route.paths = parent && parent.route && parent.route.paths ? parent.route.paths.slice(0) : ['/'];
      if (!!item.route.path) {
          item.route.paths.push(item.route.path);
      }
    }

    if (object.children && object.children.length > 0) {
      item.children = this._convertArrayToItems(object.children, item);
    }

    const prepared = this._prepareItem(item);

    // if current item is selected or expanded - then parent is expanded too
    if ((prepared.selected || prepared.expanded) && parent) {
      parent.expanded = true;
    }

    return prepared;
  }

  protected _prepareItem(object: any): any {
    if (!object.skip) {
      object.target = object.target || '';
      object.pathMatch = object.pathMatch  || 'full';
      return this._selectItem(object);
    }
    return object;
  }

  protected _selectItem(object: any): any {
    object.selected = this._router.isActive(this._router.createUrlTree(object.route.paths), object.pathMatch === 'full');
    return object;
  }

  // extract and prepare items for the header menu
  protected _prepareHeaderMenu(routes: Routes) {
      const convertedItems = {top: {}, main: {}};
      const items = [];
      routes.forEach((route) => {
         if (route.children) {
            route.children.forEach((childItem) => {
                if (childItem.data.menu.top) {
                    convertedItems.top = childItem.data.menu.top;
                }else if (childItem.data.menu.main) {
                    convertedItems.main = childItem.data.menu.main;
                }
            });
         }
      });
      return convertedItems;
  }
}
