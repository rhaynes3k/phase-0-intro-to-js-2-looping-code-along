function writeCards(arr, event) {
  let msg = []
  for(let m = 0; m < arr.length; m++){
    msg.push( `Thank you, ${arr[m]}, for the wonderful ${event} gift!` )
  }
  return msg
}

function countDown(num) {
  let m = 0
  while(m <= num){
    console.log(num - m)
    m++
  }
}
