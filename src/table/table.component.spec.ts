import { Component, OnInit } from "@angular/core";
import { DialogModule } from "./../dialog/dialog.module";
import { TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import {
	Table,
	TableHead,
	TableModel,
	TableHeaderItem,
	TableItem,
	DataGridFocus,
	ExpandedRowHover,
	TableDirective,
	TableBody,
	TableRowComponent,
	TableExpandedRow,
	TableData,
	TableCheckbox,
	TableExpandButton
} from "./table.module";

import { By } from "@angular/platform-browser";

import { NFormsModule } from "./../forms/forms.module";
import { I18nModule } from "../i18n/i18n.module";
import { ChevronRight16Module } from "@carbon/icons-angular/lib/chevron--right/16";

@Component({
	template: `<ibm-table [model]="tableModel"></ibm-table>`
})
class TableTest implements OnInit {
	tableModel = new TableModel();

	ngOnInit() {
		this.tableModel.header = [new TableHeaderItem({data: "Column"})];
		this.tableModel.data = [
			[new TableItem({data: "Lorem"})],
			[new TableItem({data: "ipsum"})],
			[new TableItem({data: "dolor"})],
			[new TableItem({data: "sit"})]
		];
	}
}

describe("Table", () => {
	let fixture, tableInstance;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				FormsModule,
				NFormsModule,
				DialogModule,
				I18nModule,
				ChevronRight16Module
			],
			declarations: [
				Table,
				TableDirective,
				TableBody,
				TableRowComponent,
				TableExpandedRow,
				TableData,
				TableCheckbox,
				TableExpandButton,
				TableHead,
				TableTest,
				DataGridFocus,
				ExpandedRowHover
			]
		});

		fixture = TestBed.createComponent(TableTest);
		tableInstance = fixture.debugElement.query(By.css("ibm-table"));
		fixture.detectChanges();
	});

	it("should work", () => {
		fixture = TestBed.createComponent(Table);
		expect(fixture.componentInstance instanceof Table).toBe(true);
	});

	it("should call the row sort function", () => {});

	it("should call the row filter function", () => {});

	it("should emit a select all event", () => {
		spyOn(tableInstance.componentInstance.selectAll, "emit");

		let checkbox = fixture.nativeElement.querySelector("th input[type='checkbox']");
		checkbox.click();
		fixture.detectChanges();

		expect(tableInstance.componentInstance.selectAll.emit).toHaveBeenCalled();
	});

	it("should emit a deselect all event", () => {
		spyOn(tableInstance.componentInstance.deselectAll, "emit");

		let checkbox = fixture.nativeElement.querySelector("th input[type='checkbox']");
		checkbox.click();
		fixture.detectChanges();
		checkbox.click();
		fixture.detectChanges();

		expect(tableInstance.componentInstance.deselectAll.emit).toHaveBeenCalled();
	});

	it("should emit a select row event", () => {
		spyOn(tableInstance.componentInstance.selectRow, "emit");

		let checkbox = fixture.nativeElement.querySelector("td input[type='checkbox']");
		checkbox.click();
		fixture.detectChanges();

		expect(tableInstance.componentInstance.selectRow.emit).toHaveBeenCalled();
	});

	it("should emit a deselect row event", () => {
		spyOn(tableInstance.componentInstance.deselectRow, "emit");

		let checkbox = fixture.nativeElement.querySelector("td input[type='checkbox']");
		checkbox.click();
		fixture.detectChanges();
		checkbox.click();
		fixture.detectChanges();

		expect(tableInstance.componentInstance.deselectRow.emit).toHaveBeenCalled();
	});
});
