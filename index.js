/*
pending
reject
fullfilled

*/

let oybarchin = true;

let merryme = new Promise((res, rej) => {
  if (oybarchin) {
    setTimeout(() => {
      res("Men ham uylanaman ureeeeee ");
    }, 4000);
  } else {
    rej("Senga tegadigan ahmoq yoq");
  }
});

merryme
  .then((data) => data+' Oybarchin qayerdasan ')
  .then(data=>console.log(data))
  .catch((err) => console.log(err));
