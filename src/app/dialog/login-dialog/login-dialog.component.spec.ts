import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDialogComponent } from './login-dialog.component';

describe('LoginDialogComponent', () => {
    let component: LoginDialogComponent;
    let fixture: ComponentFixture<LoginDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoginDialogComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    xit('should create', () => {
        expect(component).toBeTruthy();
    });
});
