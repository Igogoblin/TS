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