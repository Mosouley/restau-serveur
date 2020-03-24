import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    {
       provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef( () => CustomInputComponent),
    multi: true
    }

  ]
})
export class CustomInputComponent implements ControlValueAccessor {

  val = '';  // this is the updated value that the class accesses
  constructor() { }
  onChange: any = () => {};

  onTouch: any = () => {};

  set value(val) { // this value is updated programaticlly
    if (val !== undefined && this.val !== val) {
      this.val = val;
      this.onChange(val);
      this.onTouch(val);
    }
  }
  // setting the value programatically
  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  // setDisabledState?(isDisabled: boolean): void {
  //   throw new Error("Method not implemented.");
  // }


}
