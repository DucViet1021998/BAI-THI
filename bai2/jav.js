function numberOneTriangle(a) {
  let b = [];
for (let i = 1; i<=a ; i++){
  for( let j = 1; j<=i; j++){
    document.write('*')
  }
   b.push('*');
   console.log(b.join(''));
   document.write('<br>')
}
}
numberOneTriangle(10);