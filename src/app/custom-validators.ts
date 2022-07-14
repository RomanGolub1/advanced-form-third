import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";
import {delay, of} from "rxjs";


// @ts-ignore
export function emailValidator(control: AbstractControl): { [key: string]: any } | null {
  const emailRegex = /^([a-zA-Z0-9_.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})$/
  const value = control.value
  const result = emailRegex.test(value)

  if (!result) {
    return {emailValidator: {value}}
  }
  return null
}


export function rangeValidator(minValue: number, maxValue: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = +control.value

    if (isNaN(value)) return {rangeValidator: {value}}
    if (value < minValue) return {minRange: {value}}
    if (value > maxValue) return {maxRange: {value}}
    return null
  }
}

// export function asyncUrlValidator(control: AbstractControl): any {
//   const urlRegex = /^(http\/\/www\.|https:\.|http:\/\/)?[a-z0-9]+([\-.][a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
//   const value = control.value
//   const result = urlRegex.test(value)
//
//   return new Promise((resolve)=> {
//     setTimeout(() => {
//       if (result) {
//         resolve (null)
//       }else {
//         resolve ({urlNotAllowed: {value}})
//       }
//     }, 8000)
//   })
//
// }

export function observableUrlValidator(control: AbstractControl): any {
  const urlRegex = /^(http\/\/www\.|https:\.|http:\/\/)?[a-z0-9]+([\-.][a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
  const value = control.value
  const result = urlRegex.test(value)

  if (result) return of(null).pipe(delay(5000))
  return of({urlNotAllowed: {value}}).pipe(delay(5000))

  // return new Observable( (observer) =>{
  //   if (result){
  //     observer.next(null)
  //   } else {
  //     observer.next({urlNotAllowed: {value}})
  //   }
  //   observer.complete()
  // }).pipe(delay(5000))

}
