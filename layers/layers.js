ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-47.854851, -24.255689, -45.181034, -22.804337]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
maxResolution:9.387097054238211,

            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelite_1 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'type':'base',
            'opacity': 1.000000,
            
maxResolution:9.387097054238211,

            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_2 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
maxResolution:9.387097054238211,

            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_FUSOS_UTM_3 = new ol.format.GeoJSON();
var features_FUSOS_UTM_3 = format_FUSOS_UTM_3.readFeatures(json_FUSOS_UTM_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FUSOS_UTM_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FUSOS_UTM_3.addFeatures(features_FUSOS_UTM_3);
var lyr_FUSOS_UTM_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FUSOS_UTM_3, 
                style: style_FUSOS_UTM_3,
                popuplayertitle: 'FUSOS_UTM',
                interactive: true,
                title: '<img src="styles/legend/FUSOS_UTM_3.png" /> FUSOS_UTM'
            });
var format_MunicpiosSP_4 = new ol.format.GeoJSON();
var features_MunicpiosSP_4 = format_MunicpiosSP_4.readFeatures(json_MunicpiosSP_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MunicpiosSP_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicpiosSP_4.addFeatures(features_MunicpiosSP_4);
var lyr_MunicpiosSP_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicpiosSP_4, 
                style: style_MunicpiosSP_4,
                popuplayertitle: 'Municípios SP',
                interactive: true,
                title: '<img src="styles/legend/MunicpiosSP_4.png" /> Municípios SP'
            });
var format_MunicpiosporTerritrioSIF_5 = new ol.format.GeoJSON();
var features_MunicpiosporTerritrioSIF_5 = format_MunicpiosporTerritrioSIF_5.readFeatures(json_MunicpiosporTerritrioSIF_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MunicpiosporTerritrioSIF_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicpiosporTerritrioSIF_5.addFeatures(features_MunicpiosporTerritrioSIF_5);
var lyr_MunicpiosporTerritrioSIF_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicpiosporTerritrioSIF_5, 
                style: style_MunicpiosporTerritrioSIF_5,
                popuplayertitle: 'Municípios por Território SIF',
                interactive: true,
    title: 'Municípios por Território SIF<br />\
    <img src="styles/legend/MunicpiosporTerritrioSIF_5_0.png" /> TERRITÓRIO 1 - RMSP / NORTE E LESTE<br />\
    <img src="styles/legend/MunicpiosporTerritrioSIF_5_1.png" /> TERRITÓRIO 2 - RMSP/ OESTE E SUL<br />\
    <img src="styles/legend/MunicpiosporTerritrioSIF_5_2.png" /> TERRITÓRIO 3 - INTERIOR E LITORAL<br />\
    <img src="styles/legend/MunicpiosporTerritrioSIF_5_3.png" /> Outros Municípios<br />' });
var format_SedeMunicipal_6 = new ol.format.GeoJSON();
var features_SedeMunicipal_6 = format_SedeMunicipal_6.readFeatures(json_SedeMunicipal_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SedeMunicipal_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SedeMunicipal_6.addFeatures(features_SedeMunicipal_6);
var lyr_SedeMunicipal_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SedeMunicipal_6, 
                style: style_SedeMunicipal_6,
                popuplayertitle: 'Sede Municipal',
                interactive: true,
                title: '<img src="styles/legend/SedeMunicipal_6.png" /> Sede Municipal'
            });
var format_AIST_area4_7 = new ol.format.GeoJSON();
var features_AIST_area4_7 = format_AIST_area4_7.readFeatures(json_AIST_area4_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AIST_area4_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AIST_area4_7.addFeatures(features_AIST_area4_7);
var lyr_AIST_area4_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AIST_area4_7, 
                style: style_AIST_area4_7,
                popuplayertitle: 'AIST_area4',
                interactive: true,
                title: '<img src="styles/legend/AIST_area4_7.png" /> AIST_area4'
            });
var format_AIST_area3_8 = new ol.format.GeoJSON();
var features_AIST_area3_8 = format_AIST_area3_8.readFeatures(json_AIST_area3_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AIST_area3_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AIST_area3_8.addFeatures(features_AIST_area3_8);
var lyr_AIST_area3_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AIST_area3_8, 
                style: style_AIST_area3_8,
                popuplayertitle: 'AIST_area3',
                interactive: true,
                title: '<img src="styles/legend/AIST_area3_8.png" /> AIST_area3'
            });
var format_AIST_area2_9 = new ol.format.GeoJSON();
var features_AIST_area2_9 = format_AIST_area2_9.readFeatures(json_AIST_area2_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AIST_area2_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AIST_area2_9.addFeatures(features_AIST_area2_9);
var lyr_AIST_area2_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AIST_area2_9, 
                style: style_AIST_area2_9,
                popuplayertitle: 'AIST_area2',
                interactive: true,
                title: '<img src="styles/legend/AIST_area2_9.png" /> AIST_area2'
            });
var format_informais_EM_10 = new ol.format.GeoJSON();
var features_informais_EM_10 = format_informais_EM_10.readFeatures(json_informais_EM_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_informais_EM_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_informais_EM_10.addFeatures(features_informais_EM_10);
var lyr_informais_EM_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_informais_EM_10, 
                style: style_informais_EM_10,
                popuplayertitle: 'informais_EM',
                interactive: true,
    title: 'informais_EM<br />\
    <img src="styles/legend/informais_EM_10_0.png" /> Área Informal/ Área Vulnerável<br />\
    <img src="styles/legend/informais_EM_10_1.png" /> Área Informal/ Regularização Fundiária<br />\
    <img src="styles/legend/informais_EM_10_2.png" /> Área Irregular/ Área Vulnerável<br />\
    <img src="styles/legend/informais_EM_10_3.png" /> Sem Informação<br />' });
var format_CadastrosSignosObraExecutada_11 = new ol.format.GeoJSON();
var features_CadastrosSignosObraExecutada_11 = format_CadastrosSignosObraExecutada_11.readFeatures(json_CadastrosSignosObraExecutada_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CadastrosSignosObraExecutada_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CadastrosSignosObraExecutada_11.addFeatures(features_CadastrosSignosObraExecutada_11);
var lyr_CadastrosSignosObraExecutada_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CadastrosSignosObraExecutada_11, 
                style: style_CadastrosSignosObraExecutada_11,
                popuplayertitle: 'Cadastros Signos - Obra Executada',
                interactive: true,
    title: 'Cadastros Signos - Obra Executada<br />\
    <img src="styles/legend/CadastrosSignosObraExecutada_11_0.png" /> SIM<br />\
    <img src="styles/legend/CadastrosSignosObraExecutada_11_1.png" /> NÃO<br />\
    <img src="styles/legend/CadastrosSignosObraExecutada_11_2.png" /> Sem Informação<br />' });
var format_DemandaDominialPontos022026_12 = new ol.format.GeoJSON();
var features_DemandaDominialPontos022026_12 = format_DemandaDominialPontos022026_12.readFeatures(json_DemandaDominialPontos022026_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DemandaDominialPontos022026_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DemandaDominialPontos022026_12.addFeatures(features_DemandaDominialPontos022026_12);
var lyr_DemandaDominialPontos022026_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DemandaDominialPontos022026_12, 
                style: style_DemandaDominialPontos022026_12,
                popuplayertitle: 'Demanda Dominial (Pontos) (02/2026)',
                interactive: true,
                title: '<img src="styles/legend/DemandaDominialPontos022026_12.png" /> Demanda Dominial (Pontos) (02/2026)'
            });
var format_SABESJURPontosRegularizao_13 = new ol.format.GeoJSON();
var features_SABESJURPontosRegularizao_13 = format_SABESJURPontosRegularizao_13.readFeatures(json_SABESJURPontosRegularizao_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SABESJURPontosRegularizao_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SABESJURPontosRegularizao_13.addFeatures(features_SABESJURPontosRegularizao_13);
var lyr_SABESJURPontosRegularizao_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SABESJURPontosRegularizao_13, 
                style: style_SABESJURPontosRegularizao_13,
                popuplayertitle: 'SABESJUR (Pontos) - Regularização ',
                interactive: true,
    title: 'SABESJUR (Pontos) - Regularização <br />\
    <img src="styles/legend/SABESJURPontosRegularizao_13_0.png" /> REGULARIZADO<br />\
    <img src="styles/legend/SABESJURPontosRegularizao_13_1.png" /> EM PROCESSO<br />\
    <img src="styles/legend/SABESJURPontosRegularizao_13_2.png" /> CANCELADO<br />' });
var group_SABESJURPontos022026 = new ol.layer.Group({
                                layers: [lyr_SABESJURPontosRegularizao_13,],
                                fold: 'close',
                                title: 'SABESJUR (Pontos) (02/2026)'});
var group_DemandaDominialPontos022026 = new ol.layer.Group({
                                layers: [lyr_DemandaDominialPontos022026_12,],
                                fold: 'close',
                                title: 'Demanda Dominial (Pontos) (02/2026)'});
var group_CadastrosSignosAt2014 = new ol.layer.Group({
                                layers: [lyr_CadastrosSignosObraExecutada_11,],
                                fold: 'close',
                                title: 'Cadastros Signos (Até 2014)'});
var group_reasInformais = new ol.layer.Group({
                                layers: [lyr_informais_EM_10,],
                                fold: 'close',
                                title: 'Áreas Informais'});
var group_InformaisSantoAndr = new ol.layer.Group({
                                layers: [lyr_AIST_area4_7,lyr_AIST_area3_8,lyr_AIST_area2_9,],
                                fold: 'close',
                                title: 'Informais Santo André'});
var group_SABESP = new ol.layer.Group({
                                layers: [lyr_MunicpiosSP_4,lyr_MunicpiosporTerritrioSIF_5,lyr_SedeMunicipal_6,],
                                fold: 'close',
                                title: 'SABESP'});
var group_IBGE = new ol.layer.Group({
                                layers: [lyr_FUSOS_UTM_3,],
                                fold: 'close',
                                title: 'IBGE'});
var group_Imagens = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_GoogleSatelite_1,lyr_GoogleMaps_2,],
                                fold: 'close',
                                title: 'Imagens'});

lyr_OpenStreetMap_0.setVisible(false);lyr_GoogleSatelite_1.setVisible(false);lyr_GoogleMaps_2.setVisible(false);lyr_FUSOS_UTM_3.setVisible(false);lyr_MunicpiosSP_4.setVisible(true);lyr_MunicpiosporTerritrioSIF_5.setVisible(true);lyr_SedeMunicipal_6.setVisible(false);lyr_AIST_area4_7.setVisible(false);lyr_AIST_area3_8.setVisible(false);lyr_AIST_area2_9.setVisible(false);lyr_informais_EM_10.setVisible(false);lyr_CadastrosSignosObraExecutada_11.setVisible(false);lyr_DemandaDominialPontos022026_12.setVisible(false);lyr_SABESJURPontosRegularizao_13.setVisible(false);
var layersList = [group_Imagens,group_IBGE,group_SABESP,group_InformaisSantoAndr,group_reasInformais,group_CadastrosSignosAt2014,group_DemandaDominialPontos022026,group_SABESJURPontos022026];
lyr_FUSOS_UTM_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CATID': 'CATID', 'LON': 'LON', 'LAT': 'LAT', 'CODE': 'CODE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'UTM': 'UTM', });
lyr_MunicpiosSP_4.set('fieldAliases', {'nome': 'nome', 'geometriaa': 'geometriaa', 'geocodigo': 'geocodigo', 'anoderefer': 'anoderefer', });
lyr_MunicpiosporTerritrioSIF_5.set('fieldAliases', {'nome': 'nome', 'geometriaa': 'geometriaa', 'geocodigo': 'geocodigo', 'Nome_Origi': 'Nome_Origi', 'Territorio': 'Territorio', 'ObjectID': 'ObjectID', 'SubTerrit': 'SubTerrit', });
lyr_SedeMunicipal_6.set('fieldAliases', {'geometriaa': 'geometriaa', 'nome': 'nome', 'geocodigo': 'geocodigo', 'UF': 'UF', });
lyr_AIST_area4_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AIST_area3_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AIST_area2_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_informais_EM_10.set('fieldAliases', {'TARGET_FID': 'TARGET_FID', 'Name': 'Name', 'NM_AGSN_1': 'NM_AGSN_1', 'AREA_M2': 'AREA_M2', 'DIRETORIA': 'DIRETORIA', 'CLASSIFIC': 'CLASSIFIC', 'CONTRATADO': 'CONTRATADO', 'CONTRATO': 'CONTRATO', 'CONTRATADA': 'CONTRATADA', 'SUM_EDOC_1': 'SUM_EDOC_1', 'FONTE': 'FONTE', 'RESP_EXEC': 'RESP_EXEC', 'NM_MUN': 'NM_MUN', 'NM_FCU': 'NM_FCU', 'INTERF_E': 'INTERF_E', 'P_INTEGRAT': 'P_INTEGRAT', 'EMPREENDI': 'EMPREENDI', 'TRATA': 'TRATA', 'pacote': 'pacote', 'coordena': 'coordena', 'econ_com': 'econ_com', 'econ_ind': 'econ_ind', 'econ_pub': 'econ_pub', 'econ_res': 'econ_res', 'pde': 'pde', 'ATUACAO_EM': 'ATUACAO_EM', 'OBSERVACAO': 'OBSERVACAO', 'Shape_Leng': 'Shape_Leng', 'TL0_ativas': 'TL0_ativas', 'TL1_2_ativ': 'TL1_2_ativ', 'res_TL0_to': 'res_TL0_to', 'fatorU': 'fatorU', 'v0002': 'v0002', 'Parcial': 'Parcial', 'Shape_Le_1': 'Shape_Le_1', 'cor_mancha': 'cor_mancha', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Le_3': 'Shape_Le_3', 'Shape_Area': 'Shape_Area', });
lyr_CadastrosSignosObraExecutada_11.set('fieldAliases', {'AREA': 'AREA', 'FRENTE': 'FRENTE', 'CADASTRO': 'CADASTRO', 'COD_CAD': 'COD_CAD', 'DESCRICAO': 'DESCRICAO', 'ETAPA_REGU': 'ETAPA_REGU', 'FILHO': 'FILHO', 'ID': 'ID', 'TIPO': 'TIPO', 'TIPO_REGUL': 'TIPO_REGUL', 'ULTIMA_ACT': 'ULTIMA_ACT', 'UNIDADE_RE': 'UNIDADE_RE', 'ZONA': 'ZONA', 'ObjectID': 'ObjectID', 'Comparacao': 'Comparacao', 'empreendim': 'empreendim', 'concluído': 'concluído', 'Tipo_de_Ca': 'Tipo_de_Ca', 'Cadastro_c': 'Cadastro_c', 'Proprietá': 'Proprietá', 'Número_da': 'Número_da', 'Planta': 'Planta', 'Cartório_': 'Cartório_', 'Nome_da_Ob': 'Nome_da_Ob', 'Unidade_de': 'Unidade_de', 'Unidade__1': 'Unidade__1', 'Tipo_de_Em': 'Tipo_de_Em', 'Data_de_Re': 'Data_de_Re', 'Nº_PEP': 'Nº_PEP', 'Obra_Execu': 'Obra_Execu', 'Número__2': 'Número__2', 'Tipo_de_Ob': 'Tipo_de_Ob', 'Dados_da_O': 'Dados_da_O', 'Dados_da_1': 'Dados_da_1', 'Endereço': 'Endereço', 'Numero': 'Numero', 'CEP': 'CEP', 'Bairro': 'Bairro', 'Cidade': 'Cidade', 'Estado': 'Estado', 'Coordenada': 'Coordenada', 'Etapa_de_R': 'Etapa_de_R', 'Tipo_de_Re': 'Tipo_de_Re', 'Área_do_T': 'Área_do_T', 'DUP_Tipo': 'DUP_Tipo', 'DUP_Situa': 'DUP_Situa', 'DUP_Data': 'DUP_Data', 'Número__3': 'Número__3', 'Arquivo_Ge': 'Arquivo_Ge', 'Sob_Codifi': 'Sob_Codifi', 'Id_Process': 'Id_Process', });
lyr_DemandaDominialPontos022026_12.set('fieldAliases', {'Identifica': 'Identifica', 'Coordenada': 'Coordenada', 'Coordena_1': 'Coordena_1', 'Fuso': 'Fuso', 'Feito_': 'Feito_', 'Identifi_1': 'Identifi_1', 'descriçã': 'descriçã', 'empreendim': 'empreendim', 'situação': 'situação', 'responsáv': 'responsáv', 'prazo': 'prazo', 'concluído': 'concluído', 'data_concl': 'data_concl', 'data_cria': 'data_cria', 'usuario_cr': 'usuario_cr', 'Município': 'Município', 'Comarca': 'Comarca', 'Coordena_2': 'Coordena_2', 'Coordena_3': 'Coordena_3', 'Área_da_f': 'Área_da_f', 'Área_da_D': 'Área_da_D', 'Área_da_o': 'Área_da_o', 'Unidade_de': 'Unidade_de', 'Zona': 'Zona', 'Obra_Execu': 'Obra_Execu', 'Tipo_da_ob': 'Tipo_da_ob', 'Tipo_de_á': 'Tipo_de_á', 'Número_de': 'Número_de', 'Desenho_Fi': 'Desenho_Fi', 'Endereço': 'Endereço', 'Denominaç': 'Denominaç', 'Bairro___D': 'Bairro___D', 'CEP': 'CEP', 'Nome_da_Ob': 'Nome_da_Ob', 'Envio_das_': 'Envio_das_', 'Número_PE': 'Número_PE', 'Unidade_Re': 'Unidade_Re', 'Respons_1': 'Respons_1', 'Contato_do': 'Contato_do', 'Municíp_1': 'Municíp_1', 'Estado_Civ': 'Estado_Civ', 'Existe_pro': 'Existe_pro', 'Nome_Propr': 'Nome_Propr', 'Endereço_': 'Endereço_', 'CEP1': 'CEP1', 'Contato_1': 'Contato_1', 'Contato_2': 'Contato_2', 'Cônjuge': 'Cônjuge', 'CPF': 'CPF', 'RG': 'RG', 'Se_o_propr': 'Se_o_propr', 'Municíp_2': 'Municíp_2', 'Estado_C_1': 'Estado_C_1', 'Existe_Com': 'Existe_Com', 'Existe_ocu': 'Existe_ocu', 'Nome_Compr': 'Nome_Compr', 'Endereço1': 'Endereço1', 'CEP2': 'CEP2', 'Contato_11': 'Contato_11', 'Contato_21': 'Contato_21', 'Cônjuge1': 'Cônjuge1', 'CPF1': 'CPF1', 'RG1': 'RG1', 'Comarca1': 'Comarca1', 'Tipo_de_ti': 'Tipo_de_ti', 'Titulo_enc': 'Titulo_enc', 'Anexado_Ce': 'Anexado_Ce', 'Laudo_de_a': 'Laudo_de_a', 'Algum_term': 'Algum_term', 'Inscriçã': 'Inscriçã', 'Nº_do_tit': 'Nº_do_tit', 'CRI': 'CRI', 'Data_da_ap': 'Data_da_ap', 'Terceiriza': 'Terceiriza', 'Observaç': 'Observaç', 'Data_de_ap': 'Data_de_ap', 'Observa_1': 'Observa_1', 'Respons_12': 'Respons_12', 'Respons_13': 'Respons_13', 'Empreend_1': 'Empreend_1', 'Observa_12': 'Observa_12', 'Número_do': 'Número_do', 'Data_de__1': 'Data_de__1', 'Respons_14': 'Respons_14', 'Observa_13': 'Observa_13', 'Id_Process': 'Id_Process', 'ObjectID': 'ObjectID', 'Id_Proce_1': 'Id_Proce_1', 'layer': 'layer', 'path': 'path', });
lyr_SABESJURPontosRegularizao_13.set('fieldAliases', {'Identifica': 'Identifica', 'Coord_N': 'Coord_N', 'Coord_E': 'Coord_E', 'FUSO_UTM': 'FUSO_UTM', 'Id_Process': 'Id_Process', 'Correto': 'Correto', 'empreendim': 'empreendim', 'Planta': 'Planta', 'Nome_da_Ob': 'Nome_da_Ob', 'Obra_Execu': 'Obra_Execu', 'Tipo_de_Ob': 'Tipo_de_Ob', 'Dados_da_O': 'Dados_da_O', 'Endereço': 'Endereço', 'Numero': 'Numero', 'CEP': 'CEP', 'Etapa_de_R': 'Etapa_de_R', 'Tipo_de_Re': 'Tipo_de_Re', 'DUP_Tipo': 'DUP_Tipo', 'DUP_Situa': 'DUP_Situa', 'Etapa_Regu': 'Etapa_Regu', });
lyr_FUSOS_UTM_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'CATID': 'TextEdit', 'LON': 'TextEdit', 'LAT': 'TextEdit', 'CODE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'UTM': '', });
lyr_MunicpiosSP_4.set('fieldImages', {'nome': 'TextEdit', 'geometriaa': 'TextEdit', 'geocodigo': 'TextEdit', 'anoderefer': 'Range', });
lyr_MunicpiosporTerritrioSIF_5.set('fieldImages', {'nome': 'TextEdit', 'geometriaa': 'TextEdit', 'geocodigo': 'TextEdit', 'Nome_Origi': 'TextEdit', 'Territorio': 'TextEdit', 'ObjectID': 'Range', 'SubTerrit': 'TextEdit', });
lyr_SedeMunicipal_6.set('fieldImages', {'geometriaa': 'TextEdit', 'nome': 'TextEdit', 'geocodigo': 'TextEdit', 'UF': 'TextEdit', });
lyr_AIST_area4_7.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_AIST_area3_8.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_AIST_area2_9.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_informais_EM_10.set('fieldImages', {'TARGET_FID': 'TextEdit', 'Name': 'TextEdit', 'NM_AGSN_1': 'TextEdit', 'AREA_M2': 'TextEdit', 'DIRETORIA': 'TextEdit', 'CLASSIFIC': 'TextEdit', 'CONTRATADO': 'TextEdit', 'CONTRATO': 'TextEdit', 'CONTRATADA': 'TextEdit', 'SUM_EDOC_1': 'TextEdit', 'FONTE': 'TextEdit', 'RESP_EXEC': 'TextEdit', 'NM_MUN': 'TextEdit', 'NM_FCU': 'TextEdit', 'INTERF_E': 'TextEdit', 'P_INTEGRAT': 'TextEdit', 'EMPREENDI': 'TextEdit', 'TRATA': 'TextEdit', 'pacote': 'TextEdit', 'coordena': 'TextEdit', 'econ_com': 'TextEdit', 'econ_ind': 'TextEdit', 'econ_pub': 'TextEdit', 'econ_res': 'TextEdit', 'pde': 'TextEdit', 'ATUACAO_EM': 'TextEdit', 'OBSERVACAO': 'TextEdit', 'Shape_Leng': 'TextEdit', 'TL0_ativas': 'TextEdit', 'TL1_2_ativ': 'TextEdit', 'res_TL0_to': 'TextEdit', 'fatorU': 'TextEdit', 'v0002': 'TextEdit', 'Parcial': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'cor_mancha': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Le_3': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_CadastrosSignosObraExecutada_11.set('fieldImages', {'AREA': 'TextEdit', 'FRENTE': 'TextEdit', 'CADASTRO': 'TextEdit', 'COD_CAD': 'TextEdit', 'DESCRICAO': 'TextEdit', 'ETAPA_REGU': 'TextEdit', 'FILHO': 'TextEdit', 'ID': 'TextEdit', 'TIPO': 'TextEdit', 'TIPO_REGUL': 'TextEdit', 'ULTIMA_ACT': 'DateTime', 'UNIDADE_RE': 'TextEdit', 'ZONA': 'TextEdit', 'ObjectID': 'Range', 'Comparacao': 'TextEdit', 'empreendim': 'TextEdit', 'concluído': 'TextEdit', 'Tipo_de_Ca': 'TextEdit', 'Cadastro_c': 'TextEdit', 'Proprietá': 'TextEdit', 'Número_da': 'TextEdit', 'Planta': 'TextEdit', 'Cartório_': 'TextEdit', 'Nome_da_Ob': 'TextEdit', 'Unidade_de': 'TextEdit', 'Unidade__1': 'TextEdit', 'Tipo_de_Em': 'TextEdit', 'Data_de_Re': 'TextEdit', 'Nº_PEP': 'TextEdit', 'Obra_Execu': 'TextEdit', 'Número__2': 'TextEdit', 'Tipo_de_Ob': 'TextEdit', 'Dados_da_O': 'TextEdit', 'Dados_da_1': 'TextEdit', 'Endereço': 'TextEdit', 'Numero': 'TextEdit', 'CEP': 'TextEdit', 'Bairro': 'TextEdit', 'Cidade': 'TextEdit', 'Estado': 'TextEdit', 'Coordenada': 'TextEdit', 'Etapa_de_R': 'TextEdit', 'Tipo_de_Re': 'TextEdit', 'Área_do_T': 'TextEdit', 'DUP_Tipo': 'TextEdit', 'DUP_Situa': 'TextEdit', 'DUP_Data': 'TextEdit', 'Número__3': 'TextEdit', 'Arquivo_Ge': 'TextEdit', 'Sob_Codifi': 'TextEdit', 'Id_Process': 'TextEdit', });
lyr_DemandaDominialPontos022026_12.set('fieldImages', {'Identifica': 'TextEdit', 'Coordenada': 'TextEdit', 'Coordena_1': 'TextEdit', 'Fuso': 'TextEdit', 'Feito_': 'TextEdit', 'Identifi_1': 'TextEdit', 'descriçã': 'TextEdit', 'empreendim': 'TextEdit', 'situação': 'TextEdit', 'responsáv': 'TextEdit', 'prazo': 'TextEdit', 'concluído': 'TextEdit', 'data_concl': 'TextEdit', 'data_cria': 'DateTime', 'usuario_cr': 'TextEdit', 'Município': 'TextEdit', 'Comarca': 'TextEdit', 'Coordena_2': 'TextEdit', 'Coordena_3': 'TextEdit', 'Área_da_f': 'TextEdit', 'Área_da_D': 'TextEdit', 'Área_da_o': 'TextEdit', 'Unidade_de': 'TextEdit', 'Zona': 'TextEdit', 'Obra_Execu': 'TextEdit', 'Tipo_da_ob': 'TextEdit', 'Tipo_de_á': 'TextEdit', 'Número_de': 'TextEdit', 'Desenho_Fi': 'TextEdit', 'Endereço': 'TextEdit', 'Denominaç': 'TextEdit', 'Bairro___D': 'TextEdit', 'CEP': 'TextEdit', 'Nome_da_Ob': 'TextEdit', 'Envio_das_': 'TextEdit', 'Número_PE': 'TextEdit', 'Unidade_Re': 'TextEdit', 'Respons_1': 'TextEdit', 'Contato_do': 'TextEdit', 'Municíp_1': 'TextEdit', 'Estado_Civ': 'TextEdit', 'Existe_pro': 'TextEdit', 'Nome_Propr': 'TextEdit', 'Endereço_': 'TextEdit', 'CEP1': 'TextEdit', 'Contato_1': 'TextEdit', 'Contato_2': 'TextEdit', 'Cônjuge': 'TextEdit', 'CPF': 'TextEdit', 'RG': 'TextEdit', 'Se_o_propr': 'TextEdit', 'Municíp_2': 'TextEdit', 'Estado_C_1': 'TextEdit', 'Existe_Com': 'TextEdit', 'Existe_ocu': 'TextEdit', 'Nome_Compr': 'TextEdit', 'Endereço1': 'TextEdit', 'CEP2': 'TextEdit', 'Contato_11': 'TextEdit', 'Contato_21': 'TextEdit', 'Cônjuge1': 'TextEdit', 'CPF1': 'TextEdit', 'RG1': 'TextEdit', 'Comarca1': 'TextEdit', 'Tipo_de_ti': 'TextEdit', 'Titulo_enc': 'TextEdit', 'Anexado_Ce': 'TextEdit', 'Laudo_de_a': 'TextEdit', 'Algum_term': 'TextEdit', 'Inscriçã': 'TextEdit', 'Nº_do_tit': 'TextEdit', 'CRI': 'TextEdit', 'Data_da_ap': 'TextEdit', 'Terceiriza': 'TextEdit', 'Observaç': 'TextEdit', 'Data_de_ap': 'TextEdit', 'Observa_1': 'TextEdit', 'Respons_12': 'TextEdit', 'Respons_13': 'TextEdit', 'Empreend_1': 'TextEdit', 'Observa_12': 'TextEdit', 'Número_do': 'TextEdit', 'Data_de__1': 'TextEdit', 'Respons_14': 'TextEdit', 'Observa_13': 'TextEdit', 'Id_Process': 'TextEdit', 'ObjectID': 'Range', 'Id_Proce_1': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_SABESJURPontosRegularizao_13.set('fieldImages', {'Identifica': 'TextEdit', 'Coord_N': 'TextEdit', 'Coord_E': 'TextEdit', 'FUSO_UTM': 'TextEdit', 'Id_Process': 'TextEdit', 'Correto': 'TextEdit', 'empreendim': 'TextEdit', 'Planta': 'TextEdit', 'Nome_da_Ob': 'TextEdit', 'Obra_Execu': 'TextEdit', 'Tipo_de_Ob': 'TextEdit', 'Dados_da_O': 'TextEdit', 'Endereço': 'TextEdit', 'Numero': 'TextEdit', 'CEP': 'TextEdit', 'Etapa_de_R': 'TextEdit', 'Tipo_de_Re': 'TextEdit', 'DUP_Tipo': 'TextEdit', 'DUP_Situa': 'TextEdit', 'Etapa_Regu': 'TextEdit', });
lyr_FUSOS_UTM_3.set('fieldLabels', {'OBJECTID': 'no label', 'CATID': 'no label', 'LON': 'no label', 'LAT': 'no label', 'CODE': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'UTM': 'no label', });
lyr_MunicpiosSP_4.set('fieldLabels', {'nome': 'no label', 'geometriaa': 'no label', 'geocodigo': 'no label', 'anoderefer': 'no label', });
lyr_MunicpiosporTerritrioSIF_5.set('fieldLabels', {'nome': 'inline label - visible with data', 'geometriaa': 'no label', 'geocodigo': 'no label', 'Nome_Origi': 'no label', 'Territorio': 'no label', 'ObjectID': 'no label', 'SubTerrit': 'no label', });
lyr_SedeMunicipal_6.set('fieldLabels', {'geometriaa': 'no label', 'nome': 'no label', 'geocodigo': 'no label', 'UF': 'no label', });
lyr_AIST_area4_7.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_AIST_area3_8.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_AIST_area2_9.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_informais_EM_10.set('fieldLabels', {'TARGET_FID': 'no label', 'Name': 'no label', 'NM_AGSN_1': 'no label', 'AREA_M2': 'no label', 'DIRETORIA': 'no label', 'CLASSIFIC': 'no label', 'CONTRATADO': 'no label', 'CONTRATO': 'no label', 'CONTRATADA': 'no label', 'SUM_EDOC_1': 'no label', 'FONTE': 'no label', 'RESP_EXEC': 'no label', 'NM_MUN': 'no label', 'NM_FCU': 'no label', 'INTERF_E': 'no label', 'P_INTEGRAT': 'no label', 'EMPREENDI': 'no label', 'TRATA': 'no label', 'pacote': 'no label', 'coordena': 'no label', 'econ_com': 'no label', 'econ_ind': 'no label', 'econ_pub': 'no label', 'econ_res': 'no label', 'pde': 'no label', 'ATUACAO_EM': 'no label', 'OBSERVACAO': 'no label', 'Shape_Leng': 'no label', 'TL0_ativas': 'no label', 'TL1_2_ativ': 'no label', 'res_TL0_to': 'no label', 'fatorU': 'no label', 'v0002': 'no label', 'Parcial': 'no label', 'Shape_Le_1': 'no label', 'cor_mancha': 'no label', 'Shape_Le_2': 'no label', 'Shape_Le_3': 'no label', 'Shape_Area': 'no label', });
lyr_CadastrosSignosObraExecutada_11.set('fieldLabels', {'AREA': 'no label', 'FRENTE': 'no label', 'CADASTRO': 'no label', 'COD_CAD': 'no label', 'DESCRICAO': 'no label', 'ETAPA_REGU': 'no label', 'FILHO': 'no label', 'ID': 'no label', 'TIPO': 'no label', 'TIPO_REGUL': 'no label', 'ULTIMA_ACT': 'no label', 'UNIDADE_RE': 'no label', 'ZONA': 'no label', 'ObjectID': 'no label', 'Comparacao': 'no label', 'empreendim': 'no label', 'concluído': 'no label', 'Tipo_de_Ca': 'no label', 'Cadastro_c': 'no label', 'Proprietá': 'no label', 'Número_da': 'no label', 'Planta': 'no label', 'Cartório_': 'no label', 'Nome_da_Ob': 'no label', 'Unidade_de': 'no label', 'Unidade__1': 'no label', 'Tipo_de_Em': 'no label', 'Data_de_Re': 'no label', 'Nº_PEP': 'no label', 'Obra_Execu': 'no label', 'Número__2': 'no label', 'Tipo_de_Ob': 'no label', 'Dados_da_O': 'no label', 'Dados_da_1': 'no label', 'Endereço': 'no label', 'Numero': 'no label', 'CEP': 'no label', 'Bairro': 'no label', 'Cidade': 'no label', 'Estado': 'no label', 'Coordenada': 'no label', 'Etapa_de_R': 'no label', 'Tipo_de_Re': 'no label', 'Área_do_T': 'no label', 'DUP_Tipo': 'no label', 'DUP_Situa': 'no label', 'DUP_Data': 'no label', 'Número__3': 'no label', 'Arquivo_Ge': 'no label', 'Sob_Codifi': 'no label', 'Id_Process': 'no label', });
lyr_DemandaDominialPontos022026_12.set('fieldLabels', {'Identifica': 'no label', 'Coordenada': 'no label', 'Coordena_1': 'no label', 'Fuso': 'no label', 'Feito_': 'no label', 'Identifi_1': 'no label', 'descriçã': 'no label', 'empreendim': 'no label', 'situação': 'no label', 'responsáv': 'no label', 'prazo': 'no label', 'concluído': 'no label', 'data_concl': 'no label', 'data_cria': 'no label', 'usuario_cr': 'no label', 'Município': 'no label', 'Comarca': 'no label', 'Coordena_2': 'no label', 'Coordena_3': 'no label', 'Área_da_f': 'no label', 'Área_da_D': 'no label', 'Área_da_o': 'no label', 'Unidade_de': 'no label', 'Zona': 'no label', 'Obra_Execu': 'no label', 'Tipo_da_ob': 'no label', 'Tipo_de_á': 'no label', 'Número_de': 'no label', 'Desenho_Fi': 'no label', 'Endereço': 'no label', 'Denominaç': 'no label', 'Bairro___D': 'no label', 'CEP': 'no label', 'Nome_da_Ob': 'no label', 'Envio_das_': 'no label', 'Número_PE': 'no label', 'Unidade_Re': 'no label', 'Respons_1': 'no label', 'Contato_do': 'no label', 'Municíp_1': 'no label', 'Estado_Civ': 'no label', 'Existe_pro': 'no label', 'Nome_Propr': 'no label', 'Endereço_': 'no label', 'CEP1': 'no label', 'Contato_1': 'no label', 'Contato_2': 'no label', 'Cônjuge': 'no label', 'CPF': 'no label', 'RG': 'no label', 'Se_o_propr': 'no label', 'Municíp_2': 'no label', 'Estado_C_1': 'no label', 'Existe_Com': 'no label', 'Existe_ocu': 'no label', 'Nome_Compr': 'no label', 'Endereço1': 'no label', 'CEP2': 'no label', 'Contato_11': 'no label', 'Contato_21': 'no label', 'Cônjuge1': 'no label', 'CPF1': 'no label', 'RG1': 'no label', 'Comarca1': 'no label', 'Tipo_de_ti': 'no label', 'Titulo_enc': 'no label', 'Anexado_Ce': 'no label', 'Laudo_de_a': 'no label', 'Algum_term': 'no label', 'Inscriçã': 'no label', 'Nº_do_tit': 'no label', 'CRI': 'no label', 'Data_da_ap': 'no label', 'Terceiriza': 'no label', 'Observaç': 'no label', 'Data_de_ap': 'no label', 'Observa_1': 'no label', 'Respons_12': 'no label', 'Respons_13': 'no label', 'Empreend_1': 'no label', 'Observa_12': 'no label', 'Número_do': 'no label', 'Data_de__1': 'no label', 'Respons_14': 'no label', 'Observa_13': 'no label', 'Id_Process': 'no label', 'ObjectID': 'no label', 'Id_Proce_1': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_SABESJURPontosRegularizao_13.set('fieldLabels', {'Identifica': 'no label', 'Coord_N': 'no label', 'Coord_E': 'no label', 'FUSO_UTM': 'no label', 'Id_Process': 'no label', 'Correto': 'no label', 'empreendim': 'no label', 'Planta': 'no label', 'Nome_da_Ob': 'no label', 'Obra_Execu': 'no label', 'Tipo_de_Ob': 'no label', 'Dados_da_O': 'no label', 'Endereço': 'no label', 'Numero': 'no label', 'CEP': 'no label', 'Etapa_de_R': 'no label', 'Tipo_de_Re': 'no label', 'DUP_Tipo': 'no label', 'DUP_Situa': 'no label', 'Etapa_Regu': 'no label', });
lyr_SABESJURPontosRegularizao_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});