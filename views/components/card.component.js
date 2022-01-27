import BadgeComponent from "./badge.component.js";

const CardComponent = ({id, image, name, status, species, gender}) => (
    `<div class="col-md-4 col-lg-3 py-2" key="${id}">
    <div class="card">
        <img src="${image}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${name}</h5>
        ${
            status && BadgeComponent(status)
        }
        ${
            species && BadgeComponent(species)
        }
        ${
            gender && BadgeComponent(gender)
        }
        </div>
    </div>
    </div>`
)


export default CardComponent;