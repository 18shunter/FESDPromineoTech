class Entree{
    constructor(name, side,) {
        this.name = name;
        this.side = side;
    }
    describe(){
        return `${this.name} will have ${this.side}.`; 
    }
}

class Meal {
    constructor(name){
        this.name = name
        this.entree = [];
    }

    addEntree(entree) {
        if (entree instanceof Entree) {
           this.entrees.push(entree); 
        } else {
            throw new Error(`You can ony add an instance of Entree. Argument is not a entree: ${Entree}`);
        }
    }

    describe() {
        return `${this.name} has ${this.meals.length} entrees`;
    }
}

class Menu {
    constructor() {
        this.meals = [];
        this.selectedMeal = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case `1`:
                    this.createMeal();
                    break;
                case `2`:
                    this.viewMeal();
                    break;
                case `3`:
                    this.deleteMeals();
                    break;
                case `4`:
                    this.displayMeals()
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Goodbye!');
    }

    showMainMenuOptions(listInfo) {
        return prompt(`
          0) Exit
          1) create new meal
          2) view meal
          3) delete meal
          4) display all meals
        `);
    }

    showMealMenuOptions(mealinfo) {
        return prompt(`
        0) back
        1) create entree
        2) delete entree 
        ---------------------
        ${mealinfo}
        `); 
    }

    displayMeals() {
        let mealString = '';
        for (let i = 0; i < this.meals.length; i++) {
            mealString += i + ')' + this.meals[i].name + '\n';
        }
        alert(mealString);
    }

    createMeal() {
        let name = prompt('Enter name for new meal');
        this.meals.push(new Meal(name));
    }

    viewMeal() {
        let index = prompt('enter the index of the meal you wish to view:');
        if (index > -1 && index < this.meals.length) {
            this.selectedMeal = this.meals[index];
            let description = 'Meal name: ' + this.selectedMeal.name + '\n';
            
            for (let i = 0; i < this.selectedMeal.length; i++) {
                description += i + ') ' + this.selectedMeal[i].entree + ' - ' + this.selectedMeal.entree[i].side + '\n';
            }
            let selection = this.showMealMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createEntree();
                case '2':
                    this.deleteEntree();
            }
        }
    } 

    createEntree() {
        let meal = prompt('Enter name for new entree:');
        let side = prompt ('enter side of entree:');
        this.selectedentree.meals.push(new Entree(meal, side));
    }

    deleteMeals() {
        let index = prompt('Enter entree you wish to delete');
        if (index > -1 && index < this.entree.meal.length) {
            this.entree.meal.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();