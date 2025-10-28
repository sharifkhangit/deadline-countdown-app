import { Component, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeadlineService } from './deadline.service';
import { Subscription, interval, switchMap, takeWhile, tap } from 'rxjs';

@Component({
  selector: 'app-deadline-countdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deadline-countdown.component.html',
  styleUrls: ['./deadline-countdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeadlineCountdownComponent implements OnDestroy {
  secondsLeft = 0;
  loading = true;
  error: string | null = null;
  private sub?: Subscription;

  constructor(
    private deadlineService: DeadlineService,
    private cdr: ChangeDetectorRef
  ) {
    this.init();
  }

  private init() {
    this.sub = this.deadlineService.getDeadline().pipe(
      tap(res => {
        this.secondsLeft = Math.max(0, Math.floor(res.secondsLeft ?? 0));
        this.loading = false;
        this.cdr.markForCheck(); // refresh view after API response
      }),
      switchMap(() =>
        interval(1000).pipe(
          takeWhile(() => this.secondsLeft > 0),
          tap(() => {
            this.secondsLeft--;
            this.cdr.markForCheck(); // refresh every second
          })
        )
      )
    ).subscribe({
      error: (err) => {
        this.error = err?.message ?? 'Unknown error';
        this.loading = false;
        this.cdr.markForCheck();
      }
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
