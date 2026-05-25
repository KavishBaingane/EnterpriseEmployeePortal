import { Component, Input, Output, EventEmitter, input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../../../models/employee.model';

@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-card.html',
  styleUrl: './employee-card.css'
})

export class EmployeeCardComponent {
  @Input() employee!: Employee; //parent ==> Child 
  @Output() remove = new EventEmitter<number>();

  onRemove() {
    this.remove.emit(this.employee.id);
  }

  ngOnInit(): void {
  console.log('Employee Card Initialized');
}

ngOnChanges(changes: SimpleChanges): void {
  console.log('Input Changed', changes);
}

ngOnDestroy(): void {
  console.log('Employee Card Destroyed');
}
}