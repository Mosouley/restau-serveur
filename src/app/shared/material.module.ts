import { MatSidenav, MatToolbarModule, MatListModule,
  MatCardModule, MatRippleModule, MatFormFieldModule,
  MatInputModule, MatSnackBar, MatSnackBarModule, MatTreeModule,
  MatPaginatorModule, MatSortModule, MatCell, MatDialogModule, MatExpansionModule, MatTooltipModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatSidenavModule, MatTableModule, MatButtonModule} from '@angular/material';
  import { WavesModule, TableModule } from 'angular-bootstrap-md';
  // import { MaterialFileInputModule } from 'ngx-material-file-input';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatTreeModule,
    MatTableModule,
    WavesModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatExpansionModule,
    MatTooltipModule
    // MaterialFileInputModule

  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatTreeModule,
    MatTableModule,
    WavesModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatExpansionModule,
    MatTooltipModule


  ]
})
export class MaterialModule { }
