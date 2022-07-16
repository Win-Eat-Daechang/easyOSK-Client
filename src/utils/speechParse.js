// list에서 target에 해당하는게 있으면 리턴.
function speechParse(list, target) {
  return new Promise(function (resolve, reject) {
    list.forEach(({ name, id }) => {
      if (target.includes(name)) {
        resolve({ name, id });
      }
    });
    reject('not matched');
  });
}
export default speechParse;
