
import {
    displayApplianceTag,
    selectApplianceTag,
  } from "../librairies/displayApplianceTag.js";
  import { recipes } from "../utils/api.js";
//   console.log(recipes)

//   //************** start appareils*/
//   //************** start appareils*/
function addClickListenersToApplianceLinks() {
    const links = document.querySelectorAll(".link-appliance");
    // console.log(links);
    links.forEach((link) => {
      //  console.log(link)
      link.addEventListener("click", selectApplianceTag);
    });
  }
  
  //   //*****récuperer tous les appareils sans doublons
  let filteredappliancesArray;
  export const getAppliances = (recipes) => {
    // console.log(recipes)
    const appliancesSet = new Set();
  
    recipes.forEach((recipe) => {
      const appliance = recipe.appliance;
    //   console.log(appliance)
      appliancesSet.add(appliance.toLowerCase()); // Convertir en minuscules
    });
  
    filteredappliancesArray = Array.from(appliancesSet);
    // console.log(filteredappliancesArray);
    return filteredappliancesArray;
  };
  getAppliances(recipes);
  
  //****Afficher les appareils dans le dropDownMenu
  filteredappliancesArray
    .sort((a, b) => a.localeCompare(b, "fr"))
    .forEach((appliance) => {
      displayApplianceTag(appliance);
    });
  addClickListenersToApplianceLinks();
// }
  //   //************** end  appareils*/
  //   //************** end  appareils*/