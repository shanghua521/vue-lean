/* const Status = {
  MASSAGE: 0,
  SPA: 1,
  DABAOJIAN1: 0,
};

function getServer(status: number) {
  if (status === Status.MASSAGE) {
    return "message";
  } else if (status === Status.SPA) {
    return "SPA";
  } else if (status === Status.DABAOJIAN1) {
    return "dabaojian";
  }
}

const result = getServer(Status.SPA);
console.log(`我要去${result}`);
 */

enum Status {
  MASSAGE = 1,
  SPA,
  DABAOJIAN1,
}

function getServer(status: number) {
  if (status === Status.MASSAGE) {
    return "message";
  } else if (status === Status.SPA) {
    return "SPA";
  } else if (status === Status.DABAOJIAN1) {
    return "dabaojian";
  }
}

console.log(Status.MASSAGE);
console.log(Status.SPA);
console.log(Status.DABAOJIAN1);

console.log(Status.MASSAGE, Status[1]);

const result = getServer(1);
console.log(`我要去${result}`);
