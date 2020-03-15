import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Directive, forwardRef, ChangeDetectorRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'input[type=file]',
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '(change)': 'onChange($event.target.files)',
    '(blur)': 'onTouched()'
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileValueAccessor),
      multi: true
    }
  ]
})
// tslint:disable-next-line:directive-class-suffix
export class FileValueAccessor implements ControlValueAccessor {
  value: any;
  onChange = (_) => { };
  onTouched = () => { };
  constructor(private _cdr: ChangeDetectorRef) {}
  writeValue(value) { }
  registerOnChange(fn: any) { this.onChange = fn; }
  registerOnTouched(fn: any) { this.onTouched = fn; }


}
