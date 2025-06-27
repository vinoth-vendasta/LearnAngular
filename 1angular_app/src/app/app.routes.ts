import { Routes } from '@angular/router';
import { DataBinding } from './data-binding/data-binding';
import { Learndirectives } from './learndirectives/learndirectives';
import { Cards } from './cards/cards';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';
import { Loginpage } from './loginpage/loginpage';
import { Pipes } from './pipes/pipes';
import { TemplateDrivenForm } from './template-driven-form/template-driven-form';

export const routes: Routes = [
    { path: "", component: Home },
    { path: "data-binding", component: DataBinding },
    { path: "directives", component: Learndirectives },
    { path: "cards", component: Cards },
    { path: "login", component: Loginpage },
    { path: "pipes", component: Pipes },
    { path: "tdf", component: TemplateDrivenForm },
    { path: "**", component: PageNotFound }
];
