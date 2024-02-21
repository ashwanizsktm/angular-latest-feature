import { Component, computed, inject } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { FilterEnum } from '../../types/filter.enum';
import { TodoComponent } from '../todo/todo.component';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-todos-main',
	standalone: true,
	templateUrl: './main.component.html',
	imports: [TodoComponent, CommonModule]
})
export class MainComponent {
	todoService = inject(TodosService);
	editingId: string | null = null;
	isAllTodoSelected = computed(() => this.todoService.todosSig().every(todo => todo.isCompleted));
	noTodosClass = computed(() => this.todoService.todosSig().length === 0);

	visibleTodos = computed(() => {
		const todos = this.todoService.todosSig();
		const filter = this.todoService.filterSig();
		if (filter === FilterEnum.ACTIVE) {
			return todos.filter(todo => !todo.isCompleted);
		} else if(filter === FilterEnum.COMPLETED) {
			return todos.filter(todo => todo.isCompleted);
		} else {
			return todos;
		}
	});

	setEditingId(editingId: string | null):void {
		this.editingId = editingId
	}


	toggleAllTodos(event: Event) {
		console.log(event);
		const target = (event.target as HTMLInputElement);
		this.todoService.toggleAll(target.checked)
	}
}
