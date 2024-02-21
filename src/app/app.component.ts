import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
/*
interface UserInterface {
	id: number
	name: string
	role: string
}
*/
@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, TodosComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})


export class AppComponent {
	title = 'Angular latest feature';
	// Angular latest new features
	/**
	 * it is configured with es build to make the development faster in angular.json file
	 * It has added a configuration where the ngModule is optional
	 * It has configured a standalone component which doesn't need ngModule anymore.
	 * The control flow structure has been changed. let's look in to html
	 * It has new concept called signals
	 */

	/*
	users = signal<UserInterface[]>([
		{id:1, name:'Foo', role: 'developer'},
		{id:2, name:'Bar', role: 'admin'},
		{id:3, name:'Baz', role: 'qa'}
	]);
	user = this.users()[2];
   */
	constructor() {
	}
	

}
