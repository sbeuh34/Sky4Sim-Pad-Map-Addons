/*global L addonFilters, addonLayers, Filter, filtersTable, map, RemoveAllLayers*/

var openAip = new L.TileLayer("http://{s}.tile.maps.openaip.net/geowebcache/service/tms/1.0.0/openaip_basemap@EPSG%3A900913@png/{z}/{x}/{y}.png", {
    maxZoom: 14,
    minZoom: 4,
    tms: true,
    detectRetina: true,
    subdomains: "12",
    format: "image/png",
    transparent: true
});

function ToggleOpenAIP(){
    if(map.hasLayer(openAip)){
        openAip.removeFrom(map);
        addonFilters["openAip"].uncheck();
    }else{
        RemoveAllLayers();
        openAip.addTo(map);
        addonLayers.push(openAip);
        addonFilters["openAip"].check();
    }
}

var openAIPFilter = new Filter("OpenAIP Map", "f_openaip", "checkbox");
openAIPFilter.input.addEventListener("click", ToggleOpenAIP);
filtersTable.appendChild(openAIPFilter.line);

addonFilters["openAip"] = openAIPFilter;

if(window.location.search.search("browser") != -1){
    resizeElementAndChilds(filtersTable);
}