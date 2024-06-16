import { Component, signal } from "@angular/core";

import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [
		MatButtonModule,
		MatSelectModule,
		MatFormFieldModule,
		MatInputModule,
	],
	template: `
		<div>
			<a href="https://analogjs.org/" target="_blank">
				<img alt="Analog Logo" class="logo analog" src="/analog.svg" />
			</a>
		</div>

		<h2>Analog</h2>

		<div class="center">
			<mat-form-field>
				<mat-label>Select an option</mat-label>
				<mat-select [(value)]="selected">
					<mat-option>None</mat-option>
					<mat-option value="option1">Option 1</mat-option>
					<mat-option value="option2">Option 2</mat-option>
					<mat-option value="option3">Option 3</mat-option>
				</mat-select>
			</mat-form-field>
		</div>

		<h3>The fullstack meta-framework for Angular!</h3>

		<div class="card">
			<button mat-raised-button type="button" (click)="increment()">
				Count {{ count() }}
			</button>
		</div>

		<p class="read-the-docs">
			For guides on how to customize this project, visit the
			<a href="https://analogjs.org" target="_blank">Analog documentation</a>
		</p>
	`,
	styles: [
		`
			.logo {
				will-change: filter;
			}
			.logo:hover {
				filter: drop-shadow(0 0 2em #646cffaa);
			}

      .center {
        display: flex;
        justify-content: center;
      }

			.read-the-docs {
				color: #888;
			}
		`,
	],
})
export default class HomeComponent {
	selected = "option1";
	count = signal(0);

	increment() {
		this.count.update((count) => count + 1);
	}
}
