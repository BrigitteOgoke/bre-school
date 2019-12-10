var shopper = {
    name = 'Jay',
    age = 20,
    isVegan = yes,
    groceryCart =['apples','oranges','spinach','cucumber'],
    groceryChoice: function(){
        return this.isVegan  +'Items to shop' + this.groceryCart;
    }

}

