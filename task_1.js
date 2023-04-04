const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.getElementsByTagName("student");
const list = [];
for (i = 0; i < listNode.length; i++) {
    const nameNode = listNode[i].querySelector("first");
    const secNameNode = listNode[i].querySelector("second");
    const ageNode = listNode[i].querySelector("age");
    const profNode = listNode[i].querySelector("prof");
    const langAttr = listNode[i].querySelector("name").getAttribute('lang');
    list[i] = {
        name: nameNode.textContent + ' ' + secNameNode.textContent,
        age: ageNode.textContent,
        prof: profNode.textContent,
        lang: langAttr,
}  
}
console.log('list', list);

