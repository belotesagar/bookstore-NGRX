const dbName = "master_books";
var request = indexedDB.open(dbName, 2);
var db;

request.onerror = function (event) {
  console.log("getting error in book");
};

request.onsuccess = function (event) {
  db = request.result;
  console.log("success book");
}

var bookData = [{
    "id": 1,
    "name": "Politics of Opportunism",
    "autherName": "R P N Singh",
    "price": 300,
    "language": "English"
  },
  {
    "id": 2,
    "name": "Obama: The Call of History",
    "autherName": "Peter Baker",
    "price": 700,
    "language": "English"
  },
  {
    "id": 3,
    "name": "Mrityunjaya",
    "autherName": "Shivaji Sawant",
    "price": 945,
    "language": "Marathi"
  },
  {
    "id": 4,
    "name": "Musafir",
    "autherName": "Achyut Godbole",
    "price": 1250,
    "language": "Marathi"
  },
  {
    "id": 5,
    "name": "Maharana Pratap",
    "autherName": "Kunwar Ishwar Singh Rathore",
    "price": 495,
    "language": "Hindi"
  }
];

request.onupgradeneeded = function (event) {
  db = event.target.result;
  var objectStore = db.createObjectStore("books", {
    keyPath: "id",
    autoIncrement: true
  });

  objectStore.createIndex("name", "name", {
    unique: true
  });

  objectStore.transaction.oncomplete = function (event) {
    console.log("books database transaction is complete");
    var customerObjectStore = db.transaction("books", "readwrite").objectStore("books");
    bookData.forEach(function (book) {
      customerObjectStore.add(book);
    });
  };

};

var request = indexedDB.open(dbName, 3);
var db;

request.onerror = function (event) {
  console.log("getting error in book");
};

request.onsuccess = function (event) {
  db = request.result;
  console.log("success book");
}

request.onupgradeneeded = function (event) {
  db = event.target.result;
  var objectStore = db.createObjectStore("cart", {
    keyPath: "id",
    autoIncrement: true
  });

  objectStore.createIndex("name", "name", {
    unique: true
  });

  objectStore.transaction.oncomplete = function (event) {
    console.log("books database transaction is complete");
    var customerObjectStore = db.transaction("cart", "readwrite").objectStore("cart");
    bookData.forEach(function (book) {
      customerObjectStore.add(book);
    });
  };

};
