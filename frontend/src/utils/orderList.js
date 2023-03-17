export default function orderList(array){
  array.sort((x, y) => {
    x = new Date(x.date);
    y = new Date(y.date);
   return x - y;
  });
  return array;
}

