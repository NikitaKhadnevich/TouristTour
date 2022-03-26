const renderer = () => {
  var tourist_routes = document.getElementById("tourist_routes");
  const tourblock = routeData.reduce((accum, item, index) => {
    return (
      accum +
      `<div class="routes" id="routesid_${index + 1}">
          <img src=${item.foto} alt=${item.describe}>
          <div class="cost">
            <div class="pleft">
              <p>от <b>${item.cost}</b></p>
            </div>
            <div class="pright">
              <p>${item.date}</p>
            </div>
          </div>
          <h4>${item.title}</h4>
          <p>${item.about}</p>
          <a href="#">Подробнее</a>
        </div>`
    );
  }, "");
  tourist_routes.innerHTML = tourblock;
};
renderer();
