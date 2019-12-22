import { AbstractControl } from "@angular/forms";

export function atSignValidator(control: AbstractControl): { [key: string]: any } | null {

    const atSign = /@/.test(control.value);
    return atSign ? null : { 'atSignName': { value: control.value } };
}