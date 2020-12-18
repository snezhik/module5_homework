let map = new Map([
    ["apple", "green"],
    ["strawberry", "red"],
    ["blueberry",    "blue"]
  ]);

for(let name of map.keys()){
    console.log("Ключ — ", name, ", значение — ", map.get(name))
}
