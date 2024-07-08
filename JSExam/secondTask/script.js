// При клике на картинку превью, к основной картинке должен применяться соответствующий фильтр.

const filter__gallery__result = document.querySelector(".filter-gallery__result");
const filter__gallery__label = document.querySelectorAll(".filter-gallery__label");

let cls = "";
let filterArr = ["filter-gallery__result--none", "filter-gallery__result--chrome",
                 "filter-gallery__result--sepia", "filter-gallery__result--marvin", 
                 "filter-gallery__result--phobos", "filter-gallery__result--heat"];

filter__gallery__label.forEach(element => {

    element.addEventListener("click" , (evt) => {
        evt.preventDefault();

        if(cls !== ""){
            filter__gallery__result.classList.remove(cls);
        }    

        switch(element.outerText){
            case "ОРИГИНАЛ":
                cls = filterArr[0];                
                break;
            case "ХРОМ":
                cls = filterArr[1];
                break;
            case "СЕПИЯ":
                cls = filterArr[2];
                break;
            case "МАРВИН":
                cls = filterArr[3];
                break;
            case "ФОБОС":
                cls = filterArr[4];
                break;
            case "ЗНОЙ":
                cls = filterArr[5];
                break;
        }    
        filter__gallery__result.classList.add(cls);
    })
})

