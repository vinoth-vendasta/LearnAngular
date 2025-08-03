# LearnAngular

## Angular Data Binding
Data binding connects component logic (TypeScript) with the HTML template (View). Angular supports four main types:
1. 🧩 Interpolation – {{ value }}
2. 🧩 Property Binding – [property]="value"
3. 🧩 Event Binding – (event)="handler()"
4. 🧩 Two-Way Binding – [(ngModel)]="property"

🧩 1. Interpolation – {{ value }}
* Bind data from the class to the template.

Example:
```ts
export class AppComponent {
  title = 'Angular Data Binding';
}
```
```html
<h1>{{ title }}</h1>  <!-- Output: Angular Data Binding -->
```

🧩 2. Property Binding – [property]="value"
* Bind component data to an HTML element property (like src, disabled, value, etc.).

Example:
```ts
export class AppComponent {
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
}

```
```html
<img [src]="imageUrl" alt="Angular Logo">
```

🧩 3. Event Binding – (event)="handler()"
* Bind a DOM event (e.g., click, input) to a method in the component.
Example:
```ts
export class AppComponent {
  onClick() {
    alert('Button clicked!');
  }
}
```
```html
<button (click)="onClick()">Click Me</button>
```

🧩 4. Two-Way Binding – [(ngModel)]="property"
* Binds data in both directions (template ↔ component).
* Requires importing FormsModule from @angular/forms.
Example:
```ts
export class AppComponent {
  name = '';
}
```
```html
<input [(ngModel)]="name" placeholder="Enter name">
<p>Hello, {{ name }}!</p>

```

## 🧭 Angular Directives    
Directives are special attributes or tags that let you manipulate the DOM or extend HTML behavior.
Angular has 3 main types of directives:

| Type              | Purpose                                   | Example                  |
| ----------------- | ----------------------------------------- | ------------------------ |
| Structural        | Change layout by adding/removing DOM      | `*ngIf`, `*ngFor`        |
| Attribute         | Change appearance or behavior of elements | `[ngClass]`, `[ngStyle]` |
| Custom Directives | User-defined DOM behavior                 | You create your own      |

1. Component Directive
* It defines the Angular components which is the building blocks Angular Application
* @Component{} is also known as Component Directive
* Objects passed to the component directive is "component meta data"

2. 1️⃣ Structural Directives
They change the structure of the DOM (add/remove elements).
**🔸 *ngIf**
Used to conditionally render elements.

```ts
export class AppComponent {
  isLoggedIn = true;
}
```
```html
<div *ngIf="isLoggedIn">
  Welcome back!
</div>
```

**🔸 *ngFor**
Used to loop through a list.


```ts
export class AppComponent {
  items = ['Apple', 'Banana', 'Cherry'];
}
```
```html
<ul>
  <li *ngFor="let item of items; let i = index">
    {{ i + 1 }}. {{ item }}
  </li>
</ul>
```
3. 2️⃣ Attribute Directives
They change the appearance or behavior of elements.

**🔸 [ngClass]**
Dynamically apply CSS classes.
```ts
export class AppComponent {
  isActive = true;
}
```
```html
<div [ngClass]="{ 'active': isActive, 'disabled': !isActive }">
  Status
</div>
```

**🔸 [ngStyle]**
Dynamically apply inline styles.

```ts
export class AppComponent {
  color = 'green';
}
```
```html
<p [ngStyle]="{ color: color, fontWeight: 'bold' }">
  Styled Text
</p>
```
## Create a JSON Server
1. Install it
```cmd
npm install --save-dev json-server
```
2. Create a file **db.json**
```json
{
  "Users: [
  {
    "id" : 1,
    "name" : "Vinoth",
    "username" : "vino",
    "email" : "vinot@gmail.com"
  },

    "id" : 2,
    "name" : "dk",
    "username" : "dk",
    "email" : "dk@gmail.com"
  },

    "id" : 3,
    "name" : "jd",
    "username" : "jd",
    "email" : "jd@gmail.com"
  }

  ]
}
```
3. Run the server
```cmd
npm run start:json
```
