//create an object

  Var shopper = {
    firstName: "Hanna",
    lastName: "Evans",
    deliverby: "12pm"
    foodtype: "organic"
    grocerycart: ['apples', 'oranges', 'cucumbers', 'lettuce', 'ranch',
    'bread', 'eggs', 'coconut milk'],
    numberofitems: "8",
    thefoodisorganic: "true",
    shoppersinfo: function(){
        return this.firstname + "add her surname" + this.lastName + "time to deliver"
    + this.deliverby + "type of food" + this.foodtype +"add cart items" + this.grocerycart
     + "Total of itemsthat should be shopped" + this.numberofitems + "food grade"
      + this.thefoodisorganic;
    }
};

