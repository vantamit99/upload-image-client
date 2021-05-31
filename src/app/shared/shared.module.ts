import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UploadDialog } from './dialogs/upload/upload.dialog';
import { AlertDialog } from './dialogs/alert/alert.dialog';
import { SpinnerDialog } from './dialogs/spinner/spinner.dialog';
import { ConfirmDialog } from './dialogs/confirm/confirm.dialog';


@NgModule({
  declarations: [
    UploadDialog,
    AlertDialog,
    SpinnerDialog,
    ConfirmDialog,  
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    UploadDialog,
    AlertDialog,
    SpinnerDialog,
    ConfirmDialog
  ]
})
export class SharedModule { }
