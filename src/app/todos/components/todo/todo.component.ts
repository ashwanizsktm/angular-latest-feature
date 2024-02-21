import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, inject } from '@angular/core';
import { TodoInterface } from '../../types/todo.interface';
import { CommonModule } from '@angular/common';
import { TodosService } from '../../services/todos.service';


@Component({
	selector: 'app-todos-todo',
	standalone: true,
	templateUrl: './todo.component.html',
	imports: [CommonModule]
})

export class TodoComponent implements OnInit{
	@Input({ required: true }) todo!: TodoInterface;
	@Input({ required: true }) isEditing!: boolean;
	@Output() setEditingId: EventEmitter<string | null> = new EventEmitter();
	@ViewChild('textInput') textInput?: ElementRef
	editingText: string = '';

	todosService = inject(TodosService);

	ngOnInit(): void {
		this.editingText = this.todo.text;
	}

	changeText(event: Event) {
		const value = (event.target as HTMLInputElement).value;
		this.editingText = value;
	}

	changeTodo() {
		this.todosService.changeTodo(this.todo.id, this.editingText);
		this.setEditingId.emit(null);
	}

	setTodoInEditMode(): void {
		this.setEditingId.emit(this.todo.id);
	}

	removeTodo(): void {
		this.todosService.removeTodo(this.todo.id);
	}

	toggleTodo() {
		this.todosService.toggleTodo(this.todo.id);
	}

}