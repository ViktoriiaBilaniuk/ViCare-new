import { Routes, RouterModule } from '@angular/router';
import {WrapperComponent} from './components/wrapper/wrapper.component';
import {MainComponent} from './components/main/main.component';
import {CatalogComponent} from './components/catalog/catalog.component';
import {CategoryComponent} from './components/catalog/category/category.component';
import {HairComponent} from './components/catalog/hair/hair.component';
import {BodyComponent} from './components/catalog/body/body.component';
import {FaceComponent} from './components/catalog/face/face.component';
import {ProductComponent} from './components/catalog/category/current-category/product/product.component';
import {InformationComponent} from './components/information/information.component';
import {IngradientComponent} from './components/ingradient/ingradient.component';
import {OrderComponent} from './components/order/order.component';
import {CallbackComponent} from './components/wrapper/callback/callback.component';
import {CurrentCategoryComponent} from './components/catalog/category/current-category/current-category.component';
import {MainIngradientsComponent} from './components/catalog/category/current-category/product/main-ingradients/main-ingradients.component';
import {CompositionComponent} from './components/catalog/category/current-category/product/composition/composition.component';
import {AdviceComponent} from './components/catalog/category/current-category/product/advice/advice.component';
import {CurrentIngradientComponent} from "./components/ingradient/current-ingradient/current-ingradient.component";
import {SubmitComponent} from "./components/order/submit/submit.component";


export const routes: Routes = [
  {path: '',
    component: WrapperComponent,
    children: [
      {path: 'main', component: MainComponent},
      {path: 'catalog', component: CatalogComponent,
        children: [
          {path: 'categories', component: CategoryComponent},
          {path: 'categories/:category', component: CurrentCategoryComponent},
          {path: 'product', component: ProductComponent,
            children: [
              {path: 'mainingradients', component: MainIngradientsComponent },
              {path: 'composition', component: CompositionComponent },
              {path: 'advice', component: AdviceComponent},
              {path: '', redirectTo: 'mainingradients', pathMatch: 'full'}
            ]
          },
          {path: '', redirectTo: 'categories', pathMatch: 'full'},
        ]
      },
      {path: 'info', component: InformationComponent},
      {path: 'ingradient', component: IngradientComponent,
        children: [
          {path: 'currentingradient', component: CurrentIngradientComponent},
        ]
      },
      {path: 'order', component: SubmitComponent},
      {path: '', redirectTo: 'main', pathMatch: 'full'},

    ]
  }
];

export const routing = RouterModule.forRoot(routes, {enableTracing: false});
