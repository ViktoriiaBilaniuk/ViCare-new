import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Http, HttpModule} from '@angular/http';
import {routing} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { MainComponent } from './components/main/main.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CategoryComponent } from './components/catalog/category/category.component';
import { HairComponent } from './components/catalog/hair/hair.component';
import { BodyComponent } from './components/catalog/body/body.component';
import { FaceComponent } from './components/catalog/face/face.component';
import { ProductComponent } from './components/catalog/category/current-category/product/product.component';
import { InformationComponent } from './components/information/information.component';
import { IngradientComponent } from './components/ingradient/ingradient.component';
import { MenuComponent } from './components/wrapper/menu/menu.component';
import { CallbackComponent } from './components/wrapper/callback/callback.component';
import { OrderComponent } from './components/order/order.component';
import { CurrentCategoryComponent } from './components/catalog/category/current-category/current-category.component';
import {CategoryService} from "./services/category.service";
import {ProductsService} from "./services/products.service";
import { MainIngradientsComponent } from './components/catalog/category/current-category/product/main-ingradients/main-ingradients.component';
import { CompositionComponent } from './components/catalog/category/current-category/product/composition/composition.component';
import { AdviceComponent } from './components/catalog/category/current-category/product/advice/advice.component';
import {IngradientService} from "./services/ingradient.service";
import { CurrentIngradientComponent } from './components/ingradient/current-ingradient/current-ingradient.component';
import {OrderService} from "./services/order.service";
import { SubmitComponent } from './components/order/submit/submit.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatSelect,
  MatSelectTrigger
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    MainComponent,
    CatalogComponent,
    CategoryComponent,
    HairComponent,
    BodyComponent,
    FaceComponent,
    ProductComponent,
    InformationComponent,
    IngradientComponent,
    MenuComponent,
    CallbackComponent,
    OrderComponent,
    CurrentCategoryComponent,
    MainIngradientsComponent,
    CompositionComponent,
    AdviceComponent,
    CurrentIngradientComponent,
    SubmitComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    MatButtonModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [CategoryService, ProductsService, IngradientService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
