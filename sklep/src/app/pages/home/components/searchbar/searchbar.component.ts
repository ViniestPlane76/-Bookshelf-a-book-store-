import { CommonModule } from '@angular/common';
import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop'
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-searchbar',
  standalone: true, 
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatIconModule],
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit, OnDestroy {
@Output() searchChange= new EventEmitter<string>();
search = new FormControl<string>("");
onDestroy$= new Subject<void>();
ngOnInit(): void {
  this.search.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe((res)=>this.searchChange.emit(res))

}
ngOnDestroy(): void {
  this.onDestroy$.next();
  this.onDestroy$.complete();
}
}
