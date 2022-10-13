export default function uuid (){
  function s4() {
    return Math.floor((Math.random()*10))
  }
  const prime =  s4() +'-'+s4() + '-'+s4() +'-'+ s4() +'-'+ s4() +'-'+ s4() + '-'+s4() + '-'+s4();
  const Ary = prime.split('-')
  const result = Ary.join('')
  return result;
}