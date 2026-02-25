var size = 0;
var placement = 'point';
function categories_informais_EM_10(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Área Informal/ Área Vulnerável':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(136,75,235,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.888}),fill: new ol.style.Fill({color: 'rgba(158,103,210,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Área Informal/ Regularização Fundiária':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(77,175,74,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.888}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Área Irregular/ Área Vulnerável':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(228,26,28,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.888}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sem Informação':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(85,230,228,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.888}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_informais_EM_10 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("CLASSIFIC");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_informais_EM_10(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
