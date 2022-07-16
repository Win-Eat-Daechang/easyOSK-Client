// list에서 target에 해당하는게 있으면 리턴.
// 띄어쓰기 처리 추가
function speechParse(list, input) {
  let target = input.replace(/\s/g, '');

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
