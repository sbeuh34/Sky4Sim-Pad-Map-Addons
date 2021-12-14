/*global Filter, filtersTable, L, map, addonFilters, RemoveAllLayers, addonLayers*/

var franceOACI = L.tileLayer("https://wxs.ign.fr/an7nvfzojv5wa96dsga5nk8w/geoportail/wmts?service=WMTS&request=GetTile&version=1.0.0&tilematrixset=PM&tilematrix={z}&tilecol={x}&tilerow={y}&layer=GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN-OACI&format=image/jpeg&style=normal",
    {
        minZoom : 0,
        maxZoom : 18,
        tileSize : 256,
        attribution : "IGN-F/Géoportail"
    }
);

function ToggleFranceOACI(){
    if(map.hasLayer(franceOACI)){
        franceOACI.removeFrom(map);
        addonFilters["franceOACI"].uncheck();
    }else{
        RemoveAllLayers();
        franceOACI.addTo(map);
        addonLayers.push(franceOACI);
        addonFilters["franceOACI"].check();
    }
}

var franceOACIFilter = new Filter("France OACI Map", "f_franceoaci", "checkbox");
franceOACIFilter.input.addEventListener("click", ToggleFranceOACI);
filtersTable.appendChild(franceOACIFilter.line);

addonFilters["franceOACI"] = franceOACIFilter;