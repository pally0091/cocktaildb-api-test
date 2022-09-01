const loadCocktail = (search) =>{
    const url =`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${search}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayDrinks(data.drinks))
}

const displayDrinks = drinks =>{
    const cockContainer = document.getElementById("cock-container")
    cockContainer.innerHTML='';
    drinks.forEach(drink => {
        console.log(drink)
        const drinkDiv = document.createElement('div');
        drinkDiv.classList.add('col')
        drinkDiv.innerHTML= `
        
            <div onclick="drinkDetail(${drink.idDrink})" class="card">
                <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${drink.strDrink}</h5>
                    <p class="card-text">${drink.strAlcoholic}</p>
                </div>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal">
                Show Details
                </button
            </div>
     
        `
        cockContainer.appendChild(drinkDiv)
    });
}
const searchDrink = () => {
    const search = document.getElementById('search');
    const searchValue = search.value;
    loadCocktail(searchValue);
    search.value = ''
}

const drinkDetail = (idDrink) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
    fetch(url)
        .then(res => res.json())
        .then(data => loadDrink(data.drinks[0]));
        
}

const loadDrink = (drink) => {
    const cockModal = document.getElementById("modal")
    cockModal.innerHTML='';
    console.log(drink)
    const drinkModal = document.createElement('div');
        drinkModal.classList.add('modal-dialog')
        
        drinkModal.innerHTML= `
        
        <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">${drink.strDrink}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
        <div class="modal-body">
          ${drink.strInstructions}
        </div>
        <div class="modal-footer">
          
        </div>
      </div>

       
        `;
        
        cockModal.appendChild(drinkModal);
        
}

// loadCocktail('a');
