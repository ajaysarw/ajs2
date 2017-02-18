/**import the Component and View package from angular2/core.*/
import {Component, View} from "angular2/core";

/**
The @Component is an Angular 2 decorator that allows you to associate metadata with the component class.
The my-app can be used as 
	- HTML tag to injecting 
	- as a component.
*/
@Component({
   selector: 'my-app'
})

/**The @view contains a template that tells Angular how to render a view.*/
@View({
  template: '<h2>My First Angular 2 App</h2>'
})

/**The export specifies that, this component will be available outside the file.*/
export class AppComponent {

}