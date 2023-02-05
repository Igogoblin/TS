const skills:[number,string]= [1,'Dev'];

const res = skills
  .filter((s)=>s!=='DevOps')
  .map(s=>s+'!')
  .reduce((a,b)=>a+b);
  console.log(res);

  const [id,skillName] = skills;

  enum StatusCode {
    SUCCESS,
    IN_PROCESS,
    FAILED  
  }

  const resp = {
    message: ' plata uspeshna',
    StatusCode: StatusCode.SUCCESS
  }

  // типизация typealias

  type User = {
    name: string,
    age: number,
    skills: string[]
  }
type Role = {
    id: number
  }

  type UserWithRole = User & Role;

  let user: User = {
    name: 'asd',
    age: 33,
    skills:['1','2']
  }
  interface Usem {
    name: string,
    age: number,
    skills: string[]
  }
  // interace можно дообределять, не работает с простыми типами, только внутри
  // type для примитивных типов 
  //  это ? обционально(может быть)

  function test(param?:string){
    const t = param ?? 5; // это ?? если param==null||param==undefined то тогда 5
  }
  //void - ничего не возвращать или игнорировать возврат