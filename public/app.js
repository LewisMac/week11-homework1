var createCatList = function(){
  var catDetail = document.createElement("ul");
  catDetail.classList.add("cat")
  return catDetail;
};

var createCatName = function(catName){
  var catNameInfo = document.createElement('li');
  catNameInfo.innerText = catName;
  return catNameInfo;
};

var createCatFood = function(catFood){
  var catFoodInfo = document.createElement('li');
  catFoodInfo.innerText = catFood;
  return catFoodInfo;
};
createCatimage = function(catImage){
  var catImageInfo = document.createElement("img");
  catImageInfo.width = 500;
  catImageInfo.src = catImage;
  return catImageInfo;
}

var appendElements = function(cats, catName, catFood, catImage, catDetail){
  catFood.appendChild(catImage);
  catName.appendChild(catFood);
  catDetail.appendChild(catName);
  cats.appendChild(catDetail);
};

var addCat = function(name, favouriteFood, image){
  var catDetail = createCatList();
  var catName = createCatName(name);
  var catFood = createCatFood(favouriteFood);
  var catImage = createCatimage(image);
  var cats = document.getElementById("cats");
  appendElements(cats, catName, catFood, catImage, catDetail)
};

var catArray = [
{name: "Garfield", faveFood: "Lasagne", image: "http://images.mentalfloss.com/sites/default/files/styles/insert_main_wide_image/public/489346.png"},
{name: "Mr Whiskers", faveFood: "Paper", image: "http://i.imgur.com/YPSjOCA.jpg"},
{name: "Boba", faveFood: "Sock fluff", image: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},
{name: "Max", faveFood: "Whiskas Temptations", image: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"}]

var app = function(){
  for(cat of catArray){
    addCat("Name: " + cat.name,"Favourite Food: " + cat.faveFood + "\n", cat.image);
  }

  
}

window.onload = app;

function flashtext(element,colour) {
  var colourCheck = document.getElementById(element).style.color;

    if (colourCheck === 'blue') {
      document.getElementById(element).style.color = colour;
    } else {
      document.getElementById(element).style.color = 'blue';
    }
  }

  setInterval(function() {
    flashtext("catTitle",'red');
  }, 500 );