import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './Container/container.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { NotificationComponent } from './notification/notification.component';
<<<<<<< HEAD

@NgModule({
  declarations: [AppComponent, ContainerComponent, NavComponent, HeaderComponent, NotificationComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
=======
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { FilterComponent } from './filter/filter.component';
import { DemoComponent } from './demo/demo.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    HeaderComponent,
    NotificationComponent,
    SearchComponent,
    ProductsComponent,
    FilterComponent,
    DemoComponent,
    CustomerListComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule],
>>>>>>> f81cbc9791b9ba2a2e8ee7a204c5835430c43b35
})
export class AppModule {}
