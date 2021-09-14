exports.getDate = 
//wrap in a function 
 ()=>{
  let today = new Date (); 
  let options = {weekday:'long', year:"numeric", month:"long", day:"numeric"};
  return today.toLocaleDateString("en-us", options);

}
exports.getDay = ()=> {
  let today = new Date (); 
  let options = {weekday:'long'};
  return today.toLocaleDateString("en-us", options);

}
