export const ToKViews = (number: number): string => {
    let result: number = 0 ;
    let hasil:string = ''
    if(number < 1000){
      result = number 
      hasil = `${result.toString()}`
    }else if(number >= 1000 && number < 1000000){
      result = number / 1000 
      hasil = `${result.toString()}k`
    } else if(number >= 1000000){
      result = number / 1000000
      hasil = `${result.toString()}M`
    }
    return hasil
  }
