
export default {
  increment: (() => {
    let key = 0, out = 0;
    return function(step,stop) {
      stop > key+1 ? key += 1 : (key = 0, out =0)
      return key != 0 ? out += (+step || 1) : stop * step;
    }
  })(),
  ascfn: function(params,data) {
    // console.log(params)
    return data.sort((x,y) => {
      return y[params]-x[params]
    })
  },
  goPage: function(data, page, ps) {
    // let total = Math.ceil(data.length/ps);
    let result = [];
    let position = page === 1 ? 0 : (page-1) * ps
    for(let i = 0; i < ps; i++){
      if(data[i + position]){
        result.push(data[i + position]);
      }else{
        return result;
      }
    }
    return result;
  }
}
