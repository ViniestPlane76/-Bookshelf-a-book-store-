import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-thankyou',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss']
})
export class ThankyouComponent implements OnInit {
    router=inject(Router)
    ngOnInit(): void {
      setTimeout(() => {
        void this.router.navigateByUrl("/")
      }, 5000);
    }
}
