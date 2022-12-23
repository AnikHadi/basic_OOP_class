const Datastructure = class {
  constructor(name, age){
    this.storage = [];
    this.name = name;
    this.age = age;
    this.object = {};
    this.count = 0;
  }
  insert(value) {
    this.storage.push(value);

    return this.storage;
  }
  insertFist(value){
    this.storage.unshift(value);
    return this.storage;
  }
  addedObject(key, value){
    this.count++;
    this.object.id = this.count;
    this.object[key] = value;
    return this.object;
  }
}

let ds = new Datastructure("Storage", 26);

console.log(ds.insert(20))
console.log(ds.insert(26))
console.log(ds.insert(21))

console.log(ds.insertFist(1))
console.log(ds.insertFist(19))
console.log(ds.insertFist(90))

console.log(ds.addedObject('Name', "Hadiuzzaman"))

console.log(ds)



