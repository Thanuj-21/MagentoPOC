//union

function print(code: string | number):void {
    console.log(`My status code is ${code}.`)
  }
  print(404);
  print('404');

//intersection

type emp={
    empname:string,
    empno:number
}

type dept={
    deptid:number,
    deptname:string
}

type empdept = emp & dept

let empdetails : empdept={
    empname:"Thanuj",
    empno:123,
    deptid:567,
    deptname:"IT"
}
console.log(empdetails)