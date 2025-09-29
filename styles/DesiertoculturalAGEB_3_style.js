var size = 0;
var placement = 'point';

var style_DesiertoculturalAGEB_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("POB1");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 0.000000 && value <= 1571.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(246,223,213,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1571.000000 && value <= 3471.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(219,184,164,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 3471.000000 && value <= 5955.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(192,145,114,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 5955.000000 && value <= 10572.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(165,106,64,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 10572.000000 && value <= 17959.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(139,67,14,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
