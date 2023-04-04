
const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;
const list = [];
const data = JSON.parse(jsonString).list;
for (i = 0; i < data.length; i++) {
    list[i] = {
      name: data[i].name,
      age: data[i].age,
      prof: data[i].prof
    }
}
console.log('list', list);
