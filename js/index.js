// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`

  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`

  document.querySelectorAll('.green-pepper').forEach((oneGreenPep) => {
    if (state.greenPeppers) {
      oneGreenPep.style.visibility = 'visible';
    } else {
      oneGreenPep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

  const theSauce = document.querySelector('.sauce');

  if (state.whiteSauce) {
    theSauce.style.visibility = 'visible';
  } else {
    theSauce.style.visibility = 'hidden';
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

  const theCrust = document.querySelector('.crust');

  if (state.glutenFreeCrust) {
    theCrust.style.visibility = 'hidden';
  } else {
    theCrust.style.visibility = 'visible';
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll('.btn').forEach((button) => {
    // Extract the ingredient name from the class (assuming it follows a pattern)
    const classes = button.classList;
    const ingredientClass = Array.from(classes).find((className) =>
      className.startsWith('btn-')
    );

    // If we found a class, extract the ingredient name
    let ingredientName = '';
    if (ingredientClass) {
      ingredientName = ingredientClass.replace('btn-', '');
    }

    const isActive = state[ingredientName];

    if (isActive) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

  const pricePanel = document.getElementById('total-price');
  let totalPrice = basePrice;

  // Iterate through each ingredient in the state
  if (state.pepperoni) {
    totalPrice = totalPrice + ingredients.pepperoni.price;
    document.querySelector('.pep-price').style.display = 'inherit';
  } else {
    document.querySelector('.pep-price').style.display = 'none';
  }

  if (state.mushrooms) {
    totalPrice = totalPrice + ingredients.mushrooms.price;
    document.querySelector('.mushroom-price').style.display = 'inherit';
  } else {
    document.querySelector('.mushroom-price').style.display = 'none';
  }

  if (state.greenPeppers) {
    totalPrice = totalPrice + ingredients.greenPeppers.price;
    document.querySelector('.greenpep-price').style.display = 'inherit';
  } else {
    document.querySelector('.greenpep-price').style.display = 'none';
  }

  if (state.whiteSauce) {
    totalPrice = totalPrice + ingredients.whiteSauce.price;
    document.querySelector('.sauce-price').style.display = 'inherit';
  } else {
    document.querySelector('.sauce-price').style.display = 'none';
  }

  if (state.glutenFreeCrust) {
    totalPrice = totalPrice + ingredients.glutenFreeCrust.price;
    document.querySelector('.crust-price').style.display = 'inherit';
  } else {
    document.querySelector('.crust-price').style.display = 'none';
  }

  // Update the HTML to display the current price
  pricePanel.innerHTML = `$${totalPrice}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
