var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_EsriLightGray_1 = new ol.layer.Tile({
            'title': 'Esri Light Gray',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Zapopan_lim_mun_2 = new ol.format.GeoJSON();
var features_Zapopan_lim_mun_2 = format_Zapopan_lim_mun_2.readFeatures(json_Zapopan_lim_mun_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zapopan_lim_mun_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zapopan_lim_mun_2.addFeatures(features_Zapopan_lim_mun_2);
var lyr_Zapopan_lim_mun_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zapopan_lim_mun_2, 
                style: style_Zapopan_lim_mun_2,
                popuplayertitle: 'Zapopan_lim_mun',
                interactive: false,
                title: '<img src="styles/legend/Zapopan_lim_mun_2.png" /> Zapopan_lim_mun'
            });
var format_DesiertoculturalAGEB_3 = new ol.format.GeoJSON();
var features_DesiertoculturalAGEB_3 = format_DesiertoculturalAGEB_3.readFeatures(json_DesiertoculturalAGEB_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesiertoculturalAGEB_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesiertoculturalAGEB_3.addFeatures(features_DesiertoculturalAGEB_3);
var lyr_DesiertoculturalAGEB_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesiertoculturalAGEB_3, 
                style: style_DesiertoculturalAGEB_3,
                popuplayertitle: 'Desierto cultural AGEB',
                interactive: true,
    title: 'Desierto cultural AGEB<br />\
    <img src="styles/legend/DesiertoculturalAGEB_3_0.png" /> 0 - 1571<br />\
    <img src="styles/legend/DesiertoculturalAGEB_3_1.png" /> 1571 - 3471<br />\
    <img src="styles/legend/DesiertoculturalAGEB_3_2.png" /> 3471 - 5955<br />\
    <img src="styles/legend/DesiertoculturalAGEB_3_3.png" /> 5955 - 10572<br />\
    <img src="styles/legend/DesiertoculturalAGEB_3_4.png" /> 10572 - 17959<br />' });
var format_Isocronas_nvas_4 = new ol.format.GeoJSON();
var features_Isocronas_nvas_4 = format_Isocronas_nvas_4.readFeatures(json_Isocronas_nvas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Isocronas_nvas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isocronas_nvas_4.addFeatures(features_Isocronas_nvas_4);
var lyr_Isocronas_nvas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Isocronas_nvas_4, 
                style: style_Isocronas_nvas_4,
                popuplayertitle: 'Isocronas_nvas',
                interactive: true,
    title: 'Isocronas_nvas<br />\
    <img src="styles/legend/Isocronas_nvas_4_0.png" /> 5 min<br />\
    <img src="styles/legend/Isocronas_nvas_4_1.png" /> 10 min<br />\
    <img src="styles/legend/Isocronas_nvas_4_2.png" /> 15 min<br />' });
var format_marginacin_col_zap_2020_5 = new ol.format.GeoJSON();
var features_marginacin_col_zap_2020_5 = format_marginacin_col_zap_2020_5.readFeatures(json_marginacin_col_zap_2020_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_marginacin_col_zap_2020_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_marginacin_col_zap_2020_5.addFeatures(features_marginacin_col_zap_2020_5);
var lyr_marginacin_col_zap_2020_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_marginacin_col_zap_2020_5, 
                style: style_marginacin_col_zap_2020_5,
                popuplayertitle: 'marginación_col_zap_2020',
                interactive: true,
    title: 'marginación_col_zap_2020<br />\
    <img src="styles/legend/marginacin_col_zap_2020_5_0.png" /> Muy alto<br />\
    <img src="styles/legend/marginacin_col_zap_2020_5_1.png" /> Alto<br />\
    <img src="styles/legend/marginacin_col_zap_2020_5_2.png" /> Medio<br />\
    <img src="styles/legend/marginacin_col_zap_2020_5_3.png" /> Bajo<br />\
    <img src="styles/legend/marginacin_col_zap_2020_5_4.png" /> Muy bajo<br />' });
var format_Equipamientos_culturales_Zap_6 = new ol.format.GeoJSON();
var features_Equipamientos_culturales_Zap_6 = format_Equipamientos_culturales_Zap_6.readFeatures(json_Equipamientos_culturales_Zap_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Equipamientos_culturales_Zap_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Equipamientos_culturales_Zap_6.addFeatures(features_Equipamientos_culturales_Zap_6);
var lyr_Equipamientos_culturales_Zap_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Equipamientos_culturales_Zap_6, 
                style: style_Equipamientos_culturales_Zap_6,
                popuplayertitle: 'Equipamientos_culturales_Zap',
                interactive: true,
                title: '<img src="styles/legend/Equipamientos_culturales_Zap_6.png" /> Equipamientos_culturales_Zap'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_EsriLightGray_1.setVisible(true);lyr_Zapopan_lim_mun_2.setVisible(true);lyr_DesiertoculturalAGEB_3.setVisible(true);lyr_Isocronas_nvas_4.setVisible(true);lyr_marginacin_col_zap_2020_5.setVisible(true);lyr_Equipamientos_culturales_Zap_6.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_EsriLightGray_1,lyr_Zapopan_lim_mun_2,lyr_DesiertoculturalAGEB_3,lyr_Isocronas_nvas_4,lyr_marginacin_col_zap_2020_5,lyr_Equipamientos_culturales_Zap_6];
lyr_Zapopan_lim_mun_2.set('fieldAliases', {'fid': 'fid', 'CVEGEO': 'CVEGEO', 'NOM_ENT': 'NOM_ENT', 'NOMGEO': 'NOMGEO', 'POB1': 'POB1', 'area_mt': 'area_mt', 'area_poblada%': 'area_poblada%', });
lyr_DesiertoculturalAGEB_3.set('fieldAliases', {'fid': 'fid', 'CVEGEO': 'CVEGEO', 'POB1': 'Población total', });
lyr_Isocronas_nvas_4.set('fieldAliases', {'fid': 'fid', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', });
lyr_marginacin_col_zap_2020_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'CVE_COL': 'CVE_COL', 'ID_COL': 'ID_COL', 'COLONIA': 'COLONIA', 'CP': 'CP', 'IM_2020': 'IM_2020', 'GM_2020': 'GM_2020', 'IMN_2020': 'IMN_2020', 'CLASIF': 'CLASIF', });
lyr_Equipamientos_culturales_Zap_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nom_estab': 'nom_estab', 'nombre_act': 'nombre_act', 'per_ocu': 'per_ocu', 'cod_postal': 'cod_postal', 'municipio': 'municipio', 'latitud': 'latitud', 'longitud': 'longitud', 'fecha_alta': 'fecha_alta', });
lyr_Zapopan_lim_mun_2.set('fieldImages', {'fid': 'TextEdit', 'CVEGEO': 'TextEdit', 'NOM_ENT': 'TextEdit', 'NOMGEO': 'TextEdit', 'POB1': 'TextEdit', 'area_mt': 'Range', 'area_poblada%': 'Range', });
lyr_DesiertoculturalAGEB_3.set('fieldImages', {'fid': 'TextEdit', 'CVEGEO': 'TextEdit', 'POB1': 'TextEdit', });
lyr_Isocronas_nvas_4.set('fieldImages', {'fid': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'Range', 'AA_MODE': 'TextEdit', });
lyr_marginacin_col_zap_2020_5.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'CVE_COL': 'TextEdit', 'ID_COL': 'Range', 'COLONIA': 'TextEdit', 'CP': 'TextEdit', 'IM_2020': 'TextEdit', 'GM_2020': 'TextEdit', 'IMN_2020': 'TextEdit', 'CLASIF': 'TextEdit', });
lyr_Equipamientos_culturales_Zap_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'nom_estab': 'TextEdit', 'nombre_act': 'TextEdit', 'per_ocu': 'TextEdit', 'cod_postal': 'TextEdit', 'municipio': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', 'fecha_alta': 'TextEdit', });
lyr_Zapopan_lim_mun_2.set('fieldLabels', {'fid': 'no label', 'CVEGEO': 'no label', 'NOM_ENT': 'no label', 'NOMGEO': 'no label', 'POB1': 'no label', 'POB2': 'no label', 'POB2_R': 'no label', 'POB4': 'no label', 'POB4_R': 'no label', 'POB5': 'no label', 'POB5_R': 'no label', 'POB6': 'no label', 'POB6_R': 'no label', 'POB7': 'no label', 'POB7_R': 'no label', 'POB8': 'no label', 'POB8_R': 'no label', 'POB9': 'no label', 'POB9_R': 'no label', 'POB10': 'no label', 'POB10_R': 'no label', 'POB11': 'no label', 'POB11_R': 'no label', 'POB12': 'no label', 'POB12_R': 'no label', 'POB13': 'no label', 'POB13_R': 'no label', 'POB14': 'no label', 'POB14_R': 'no label', 'POB15': 'no label', 'POB15_R': 'no label', 'POB17': 'no label', 'POB17_R': 'no label', 'POB18': 'no label', 'POB18_R': 'no label', 'POB19': 'no label', 'POB19_R': 'no label', 'POB20': 'no label', 'POB20_R': 'no label', 'POB21': 'no label', 'POB21_R': 'no label', 'POB22': 'no label', 'POB22_R': 'no label', 'POB23': 'no label', 'POB23_R': 'no label', 'POB24': 'no label', 'POB24_R': 'no label', 'POB25': 'no label', 'POB25_R': 'no label', 'POB42': 'no label', 'POB42_R': 'no label', 'POB43': 'no label', 'POB43_R': 'no label', 'POB45': 'no label', 'POB45_R': 'no label', 'POB46': 'no label', 'POB46_R': 'no label', 'POB47': 'no label', 'POB47_R': 'no label', 'POB48': 'no label', 'POB48_R': 'no label', 'POB49': 'no label', 'POB49_R': 'no label', 'POB50': 'no label', 'POB50_R': 'no label', 'POB51': 'no label', 'POB51_R': 'no label', 'POB52': 'no label', 'POB52_R': 'no label', 'POB53': 'no label', 'POB53_R': 'no label', 'POB54': 'no label', 'POB54_R': 'no label', 'POB55': 'no label', 'POB55_R': 'no label', 'POB56': 'no label', 'POB56_R': 'no label', 'POB57': 'no label', 'POB57_R': 'no label', 'POB59': 'no label', 'POB59_R': 'no label', 'POB60': 'no label', 'POB60_R': 'no label', 'POB61': 'no label', 'POB61_R': 'no label', 'POB62': 'no label', 'POB62_R': 'no label', 'POB63': 'no label', 'POB63_R': 'no label', 'POB64': 'no label', 'POB64_R': 'no label', 'POB65': 'no label', 'POB65_R': 'no label', 'POB66': 'no label', 'POB66_R': 'no label', 'POB67': 'no label', 'POB67_R': 'no label', 'POB84': 'no label', 'POB84_R': 'no label', 'POB85': 'no label', 'POB85_R': 'no label', 'POB87': 'no label', 'POB87_R': 'no label', 'POB88': 'no label', 'POB88_R': 'no label', 'POB89': 'no label', 'POB89_R': 'no label', 'POB90': 'no label', 'POB90_R': 'no label', 'POB91': 'no label', 'POB91_R': 'no label', 'POB92': 'no label', 'POB92_R': 'no label', 'POB93': 'no label', 'POB93_R': 'no label', 'POB94': 'no label', 'POB94_R': 'no label', 'POB95': 'no label', 'POB95_R': 'no label', 'POB96': 'no label', 'POB96_R': 'no label', 'POB97': 'no label', 'POB97_R': 'no label', 'POB98': 'no label', 'POB98_R': 'no label', 'POB100': 'no label', 'POB100_R': 'no label', 'POB101': 'no label', 'POB101_R': 'no label', 'POB102': 'no label', 'POB102_R': 'no label', 'POB103': 'no label', 'POB103_R': 'no label', 'POB104': 'no label', 'POB104_R': 'no label', 'POB105': 'no label', 'POB105_R': 'no label', 'POB106': 'no label', 'POB106_R': 'no label', 'POB107': 'no label', 'POB107_R': 'no label', 'POB108': 'no label', 'POB108_R': 'no label', 'POB125_R': 'no label', 'POB126_R': 'no label', 'POB127_R': 'no label', 'POB128_R': 'no label', 'POB129_R': 'no label', 'POB130_R': 'no label', 'POB131_R': 'no label', 'POB132_R': 'no label', 'POB133_R': 'no label', 'POB134_R': 'no label', 'POB3': 'no label', 'POB3_R': 'no label', 'POB16': 'no label', 'POB16_R': 'no label', 'POB26': 'no label', 'POB26_R': 'no label', 'POB27': 'no label', 'POB27_R': 'no label', 'POB28': 'no label', 'POB28_R': 'no label', 'POB29': 'no label', 'POB29_R': 'no label', 'POB30': 'no label', 'POB30_R': 'no label', 'POB31': 'no label', 'POB31_R': 'no label', 'POB32': 'no label', 'POB32_R': 'no label', 'POB33': 'no label', 'POB33_R': 'no label', 'POB34': 'no label', 'POB34_R': 'no label', 'POB35': 'no label', 'POB35_R': 'no label', 'POB36': 'no label', 'POB36_R': 'no label', 'POB37': 'no label', 'POB37_R': 'no label', 'POB38': 'no label', 'POB38_R': 'no label', 'POB39': 'no label', 'POB39_R': 'no label', 'POB40': 'no label', 'POB40_R': 'no label', 'POB41': 'no label', 'POB41_R': 'no label', 'POB44': 'no label', 'POB44_R': 'no label', 'POB58': 'no label', 'POB58_R': 'no label', 'POB68': 'no label', 'POB68_R': 'no label', 'POB69': 'no label', 'POB69_R': 'no label', 'POB70': 'no label', 'POB70_R': 'no label', 'POB71': 'no label', 'POB71_R': 'no label', 'POB72': 'no label', 'POB72_R': 'no label', 'POB73': 'no label', 'POB73_R': 'no label', 'POB74': 'no label', 'POB74_R': 'no label', 'POB75': 'no label', 'POB75_R': 'no label', 'POB76': 'no label', 'POB76_R': 'no label', 'POB77': 'no label', 'POB77_R': 'no label', 'POB78': 'no label', 'POB78_R': 'no label', 'POB79': 'no label', 'POB79_R': 'no label', 'POB80': 'no label', 'POB80_R': 'no label', 'POB81': 'no label', 'POB81_R': 'no label', 'POB82': 'no label', 'POB82_R': 'no label', 'POB83': 'no label', 'POB83_R': 'no label', 'POB86': 'no label', 'POB86_R': 'no label', 'POB99': 'no label', 'POB99_R': 'no label', 'POB109': 'no label', 'POB109_R': 'no label', 'POB110': 'no label', 'POB110_R': 'no label', 'POB111': 'no label', 'POB111_R': 'no label', 'POB112': 'no label', 'POB112_R': 'no label', 'POB113': 'no label', 'POB113_R': 'no label', 'POB114': 'no label', 'POB114_R': 'no label', 'POB115': 'no label', 'POB115_R': 'no label', 'POB116': 'no label', 'POB116_R': 'no label', 'POB117': 'no label', 'POB117_R': 'no label', 'POB118': 'no label', 'POB118_R': 'no label', 'POB119': 'no label', 'POB119_R': 'no label', 'POB120': 'no label', 'POB120_R': 'no label', 'POB121': 'no label', 'POB121_R': 'no label', 'POB122': 'no label', 'POB122_R': 'no label', 'POB123': 'no label', 'POB123_R': 'no label', 'POB124': 'no label', 'POB124_R': 'no label', 'OID': 'no label', 'area_km': 'no label', 'area_mt': 'no label', 'area_poblada%': 'no label', });
lyr_DesiertoculturalAGEB_3.set('fieldLabels', {'fid': 'hidden field', 'CVEGEO': 'inline label - always visible', 'POB1': 'inline label - always visible', });
lyr_Isocronas_nvas_4.set('fieldLabels', {'fid': 'hidden field', 'CENTER_LON': 'hidden field', 'CENTER_LAT': 'hidden field', 'AA_MINS': 'inline label - always visible', 'AA_MODE': 'inline label - always visible', });
lyr_marginacin_col_zap_2020_5.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'CVE_COL': 'hidden field', 'ID_COL': 'hidden field', 'COLONIA': 'hidden field', 'CP': 'hidden field', 'IM_2020': 'inline label - always visible', 'GM_2020': 'inline label - always visible', 'IMN_2020': 'inline label - always visible', 'CLASIF': 'inline label - always visible', });
lyr_Equipamientos_culturales_Zap_6.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'nom_estab': 'inline label - always visible', 'nombre_act': 'inline label - always visible', 'per_ocu': 'inline label - always visible', 'cod_postal': 'hidden field', 'municipio': 'hidden field', 'latitud': 'hidden field', 'longitud': 'hidden field', 'fecha_alta': 'hidden field', });
lyr_Equipamientos_culturales_Zap_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});