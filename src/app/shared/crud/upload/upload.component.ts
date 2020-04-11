import { element } from 'protractor';
import { DataModel } from './../../model/data.model';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  public records: any[] = [];
  @ViewChild('csvReader') csvReader: any;

  // @ViewChild('fileUploadInput')
  // fileUploadInput: any;

  @Input()
  dataModelList: DataModel[];
  @Input()
  initItem: any;
  importError = false;
  lstColumnNames: string[] = [];
  @Input()
  service: DataService;

  constructor(
    public toastr: ToastrService
  ) { }

  ngOnInit() {
    this.importError = true;
  }

  uploadListener($event: any): void {

    const text = [];
    const files = $event.srcElement.files;

    this.dataModelList.forEach(col => {
      if (col.readonly = true) {
        this.lstColumnNames.push(col.columnName);
      }

    });
    if (this.isValidCSVFile(files[0])) {

      const input = $event.target;
      const reader = new FileReader();
      reader.readAsText(input.files[0]);

      reader.onload = () => {
        const csvData = reader.result;
        const csvRecordsArray = (csvData as string).split(/\r\n|\n/);
        const headersRow = this.getHeaderArray(csvRecordsArray);
        this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, this.initItem);
      };

    } else {
      alert('Please import valid .csv file.');
      this.fileReset();
    }
  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, model: any) {
    const csvArr = [];
    console.log(model);

    for (let i = 1; i < csvRecordsArray.length; i++) {
      const currentRecord = (<string>csvRecordsArray[i]).split(';');

      if (currentRecord.length === this.lstColumnNames.length) {
        const csvRecord = new Object();
        for (let index = 0; index < this.lstColumnNames.length; index++) {
          const j = this.lstColumnNames[index];
          csvRecord[j] = currentRecord[index].trim();
        }
        csvArr.push(csvRecord);
        this.importError = false;
      } else {
        this.importError = true;
      }
    }
    if (this.importError) {
      alert('Please your data should have same number of columns.');
        this.fileReset();
    }
    return csvArr;
  }

  isValidCSVFile(file: any) {
    return file.name.endsWith('.csv');
  }

  getHeaderArray(csvRecordsArr: any) {
    const headers = (<string>csvRecordsArr[0]).split(';');
    const headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }

    return headerArray;
  }

  fileReset() {
    this.csvReader.nativeElement.value = '';
    this.records = [];
  }

  uploadData() {
    // uploading the data received
    this.service.addAll(this.records).subscribe(res => {
      this.toastr.success('Enregistrement effectue avec succes : Ref ' );
    } );
  }
}
