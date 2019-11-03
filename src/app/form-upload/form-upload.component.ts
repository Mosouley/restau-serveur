
import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { UploadFileService } from '../shared/upload-file.service';

@Component({
  selector: 'app-form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.css']
})
export class FormUploadComponent implements OnInit {

  selectedFiles: FileList;
  selectionFiles: FileList;
  currentFileUpload: File;
  currentFile: File;

  progress: { percentage: number } = { percentage: 0};
  progres: { percentage: number } = { percentage: 0};

  constructor(private uploaService: UploadFileService) { }

  ngOnInit() {
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  checkUpFile(event) {
    this.selectionFiles = event.target.files;

  }

  upload() {
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploaService.pushFileToStorage(this.currentFileUpload).subscribe( event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          console.log('File is completely uploaded! ');

      }
    });

    this.selectedFiles = undefined;
  }

  load() {
    this.progres.percentage = 0;
    this.currentFile = this.selectionFiles.item(0);
    console.log(this.currentFile);

    this.uploaService.pushFileTwoToStorage(this.currentFile).subscribe( event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progres.percentage = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          console.log('File is completely uploaded! ');

      }
    });

    this.selectionFiles = undefined;
  }
}
