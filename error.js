let nominator = 90
let demoninator = 0

try {
  if (demoninator === 0) {
    throw ({ typ: 'Logical Error', msg: 'Denomintor cannot be zero' })
  } else {
    console.log(nominator / demoninator);
  }
}

catch (error) {
  console.log(error.typ + ' : ' + error.msg)
}