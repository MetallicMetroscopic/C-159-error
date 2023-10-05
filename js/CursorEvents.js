AFRAME.registerComponent("cursor-listener", {
  schema: {
    selectedItemId: { default: "", type: "string" },
  },
  init: function () {
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents();
    this.handleMouseClickEvents();
  },

  handlePlacesListState: function () {
    var id = this.el.getAttribute("id")
    var places_id = ["taj-mahal", "budapest", "eiffel-tower", "new-york-city"]
    if (places_id.includes(id)){
      var places_container = document.querySelector("#places-container")
      places_container.setAttribute("cursor-listener", {selectedItemId: id})
      this.el.setAttribute("material", {color: "orange", opacity: 1})
    }
  },
  handleMouseEnterEvents: function () {
    // Mouse Enter Events
    this.el.addEventListener("mouseenter", () => {
      this.handlePlacesListState();
    });
  },
  handleMouseLeaveEvents: function () {
    // Mouse Leave Events
    this.el.addEventListener("mouseleave", ()=>{
      var {selectedItemId} = this.data
      if (selectedItemId) {
        var element = document.querySelector(`#${selectedItemId}`)
        var id = element.getAttribute("id")
        if(id == selectedItemId){
          element.setAttribute("material", {color: "#0077CC", opacity: 1})
        }
      }
    })
  },

  handleMouseClickEvents: function(){
    this.el.addEventListener("click", (e)=>{
        const placesContainer = document.querySelector("#places-container")
        const {state} = placesContainer.getAttribute("tour")
        if(state === "places-list"){
            const id = this.el.getAttribute("id")
            const placeId = ["taj-mahal","budapest","eiffel-tower","new-york-city"]

            if(placeId.includes(id)){
               placesContainer.setAttribute("tour", {state: "view", selectedCard: id})
            }
        }
    })
  }
});
