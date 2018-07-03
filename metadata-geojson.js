//geojson file
var geojsonFeature = {
    "type": "FeatureCollection",
    "features": [
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    121.7471494,
                    31.2998241
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "This is a B-Cycle Station. Come pick up a bike and pay by the hour. What a deal!"
            },
            "id": 11
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    121.7502833,
                    31.1983545
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "This is a B-Cycle Station. Come pick up a bike and pay by the hour. What a deal!"
            },
            "id": 12
        }
    ]
};


var transportation = {
    "type": "FeatureCollection",
    "features": [
        {
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                        [
                            [116.878499726, 27.483689998],
                            [121.870303722, 27.483689998],
                            [121.870303722, 34.813542995],
                            [116.878499726, 34.813542995],
                            [116.878499726, 27.483689998]
                        ]
                ]
            },
            "type": "Feature",
            "properties": {
                "title": "Railway stations",
                "year": "2013",
                "scale": "1:250,000",
                "projection": "WGS84",
                "format": "shapefile",
                "type": "points",
                "datasize": "33KB",
                "category": "transportation",
                "language": "CHE",
                "constraints": "apply before usage",
                "contact": "Chenyu Zuo",
                "description": "'Type' is the rail way station type: 1 for freight station, 2 for passenger station, -1 for unknown. 'rank' is the level of the stations.",
                "storageLocation": "Y:\\06_Geodata\\2018_Yangtze_Delta_Data\\3 1 250k The distribution and statistical data of the railways in the Yangtze River Delta(2013)"
            },
            "id": 303
        },
        {
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [116.878499726, 27.483689998],
                        [121.870303722, 27.483689998],
                        [121.870303722, 34.813542995],
                        [116.878499726, 34.813542995],
                        [116.878499726, 27.483689998]
                    ]
                ]
            },
            "type": "Feature",
            "properties": {
                "title": "Railway lines",
                "year": "2013",
                "scale": "1:250,000",
                "projection": "WGS84",
                "format": "shapefile",
                "type": "lines",
                "datasize": "180KB",
                "category": "transportation",
                "language": "CHE",
                "constraints": "apply before usage",
                "contact": "Chenyu Zuo",
                "description": "",
                "storageLocation": "Y:\\06_Geodata\\2018_Yangtze_Delta_Data\\3 1 250k The distribution and statistical data of the railways in the Yangtze River Delta(2013)"
            },
            "id": 302
        },
        {
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [116.878499726, 27.483689998],
                        [121.870303722, 27.483689998],
                        [121.870303722, 34.813542995],
                        [116.878499726, 34.813542995],
                        [116.878499726, 27.483689998]
                    ]
                ]
            },
            "type": "Feature",
            "properties": {
                "title": "Boundaries",
                "year": "2013",
                "scale": "1:250,000",
                "projection": "WGS84",
                "format": "shapefile",
                "type": "lines",
                "datasize": "180KB",
                "category": "transportation",
                "language": "CHE",
                "constraints": "apply before usage",
                "contact": "Chenyu Zuo",
                "description": "province boundaries",
                "storageLocation": "Y:\\06_Geodata\\2018_Yangtze_Delta_Data\\3 1 250k The distribution and statistical data of the railways in the Yangtze River Delta(2013)"
            },
            "id": 301
        },
        {
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [117.060349107, 28.005108724],
                        [121.862711672, 28.005108724],
                        [121.862711672, 34.581657519],
                        [117.060349107, 34.581657519],
                        [117.060349107, 28.005108724]
                    ]
                ]
            },
            "type": "Feature",
            "properties": {
                "title": "Port distribution",
                "year": "2013",
                "scale": "1:250,000",
                "projection": "WGS84",
                "format": "shapefile",
                "type": "points",
                "datasize": "113KB",
                "category": "transportation",
                "language": "CHE",
                "constraints": "apply before usage",
                "contact": "Chenyu Zuo",
                "description": "the distribution of the ports and attributes",
                "storageLocation": "Y:\\06_Geodata\\2018_Yangtze_Delta_Data\\4 1 250k Distribution and statistical data of major ports in the Yangtze River Delta(2013)\\1250k Distribution and statistical data of major ports in the Yangtze River Delta  (2013)\\port"
            },
            "id": 401
        },
        {
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [117.060349107, 28.005108724],
                        [121.862711672, 28.005108724],
                        [121.862711672, 34.581657519],
                        [117.060349107, 34.581657519],
                        [117.060349107, 28.005108724]
                    ]
                ]
            },
            "type": "Feature",
            "properties": {
                "title": "Channel distribution",
                "year": "2013",
                "scale": "1:250,000",
                "projection": "WGS84",
                "format": "shapefile",
                "type": "lines",
                "datasize": "10.6KB",
                "category": "transportation",
                "language": "CHE",
                "constraints": "apply before usage",
                "contact": "Chenyu Zuo",
                "description": "the distribution of the ports and attributes",
                "storageLocation": "Y:\\06_Geodata\\2018_Yangtze_Delta_Data\\4 1 250k Distribution and statistical data of major ports in the Yangtze River Delta(2013)\\1250k Distribution and statistical data of major ports in the Yangtze River Delta  (2013)\\port"
            },
            "id": 402
        },
        {
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [116.373309202601, 30.7676156762115],
                        [121.900375366211, 30.7676156762115],
                        [121.900375366211, 35.1244698223977],
                        [116.373309202601, 35.1244698223977],
                        [116.373309202601, 30.7676156762115]
                    ]
                ]
            },
            "type": "Feature",
            "properties": {
                "title": "road",
                "year": "1990",
                "scale": "1:250,000",
                "projection": "WGS84",
                "format": "shapefile",
                "type": "lines",
                "datasize": "1.59MB",
                "category": "transportation",
                "language": "CHE",
                "constraints": "apply before usage",
                "contact": "Chenyu Zuo",
                "description": "the distribution of the roads, including national roads, province road, contry road and channels",
                "storageLocation": "Y:\\06_Geodata\\2018_Yangtze_Delta_Data\\5 1 250k road data in Jiangsu province(1990-2015 years)\\1 250k road data in Jiangsu province (1990-2015 years)"
            },
            "id": 501
        },
        {
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [116.356134019324, 30.7610750080186],
                        [121.900375366211, 30.7610750080186],
                        [121.900375366211, 35.1162356378226],
                        [116.356134019324, 35.1162356378226],
                        [116.356134019324, 30.7610750080186]
                    ]
                ]
            },
            "type": "Feature",
            "properties": {
                "title": "road",
                "year": "1996",
                "scale": "1:250,000",
                "projection": "WGS84",
                "format": "shapefile",
                "type": "lines",
                "datasize": "1.59MB",
                "category": "transportation",
                "language": "CHE",
                "constraints": "apply before usage",
                "contact": "Chenyu Zuo",
                "description": "the distribution of the roads, including national roads, province road, contry road and channels",
                "storageLocation": "Y:\\06_Geodata\\2018_Yangtze_Delta_Data\\5 1 250k road data in Jiangsu province(1990-2015 years)\\1 250k road data in Jiangsu province (1990-2015 years)"
            },
            "id": 502
        },
        {
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [116.356134019324, 30.7610750080186],
                        [121.900375366211, 30.7610750080186],
                        [121.900375366211, 35.1162356378226],
                        [116.356134019324, 35.1162356378226],
                        [116.356134019324, 30.7610750080186]
                    ]
                ]
            },
            "type": "Feature",
            "properties": {
                "title": "road",
                "year": "2002",
                "scale": "1:250,000",
                "projection": "WGS84",
                "format": "shapefile",
                "type": "lines",
                "datasize": "1.59MB",
                "category": "transportation",
                "language": "CHE",
                "constraints": "apply before usage",
                "contact": "Chenyu Zuo",
                "description": "the distribution of the roads, including national roads, province road, contry road and channels",
                "storageLocation": "Y:\\06_Geodata\\2018_Yangtze_Delta_Data\\5 1 250k road data in Jiangsu province(1990-2015 years)\\1 250k road data in Jiangsu province (1990-2015 years)"
            },
            "id": 503
        },
        {
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [116.356134019324, 30.7610750080186],
                        [121.900375366211, 30.7610750080186],
                        [121.900375366211, 35.1162356378226],
                        [116.356134019324, 35.1162356378226],
                        [116.356134019324, 30.7610750080186]
                    ]
                ]
            },
            "type": "Feature",
            "properties": {
                "title": "road",
                "year": "2002",
                "scale": "1:250,000",
                "projection": "WGS84",
                "format": "shapefile",
                "type": "lines",
                "datasize": "1.59MB",
                "category": "transportation",
                "language": "CHE",
                "constraints": "apply before usage",
                "contact": "Chenyu Zuo",
                "description": "the distribution of the roads, including national roads, province road, contry road and channels",
                "storageLocation": "Y:\\06_Geodata\\2018_Yangtze_Delta_Data\\5 1 250k road data in Jiangsu province(1990-2015 years)\\1 250k road data in Jiangsu province (1990-2015 years)"
            },
            "id": 504
        },
    ]
};


var tourism_resources = {
    "type": "FeatureCollection",
    "features": [
        {
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [116.927985920804, 27.265480183847],
                        [122.843948670031, 27.265480183847],
                        [122.843948670031, 35.047182089832],
                        [116.927985920804, 35.047182089832],
                        [116.927985920804, 27.265480183847]
                    ]
                ]
            },
            "type": "Feature",
            "properties": {
                "title": "scenic areas",
                "year": "2013",
                "scale": "1:250,000",
                "projection": "WGS84",
                "format": "shapefile",
                "type": "polygon",
                "datasize": "599KB",
                "category": "resource",
                "language": "CHE",
                "constraints": "apply before usage",
                "contact": "Chenyu Zuo",
                "description": "Information about scenic spots, including name, area, level and ect.)",
                "storageLocation": "Y:\\06_Geodata\\2018_Yangtze_Delta_Data\\47 The 1 250K spatial distribution data of scenic spots and National Geopark in the Yangtze River Delta(Jiangsu Province)(2013)"
            },
            "id": 4701
        },
        {
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [116.929305461006, 27.2660241237269],
                        [122.392137426671, 27.2660241237269],
                        [122.392137426671, 35.0442553527949],
                        [116.929305461006, 35.0442553527949],
                        [116.929305461006, 27.2660241237269]
                    ]
                ]
            },
            "type": "Feature",
            "properties": {
                "title": "scenic spots",
                "year": "2013",
                "scale": "1:250,000",
                "projection": "WGS84",
                "format": "shapefile",
                "type": "point",
                "datasize": "186KB",
                "category": "resource",
                "language": "CHE",
                "constraints": "apply before usage",
                "contact": "Chenyu Zuo",
                "description": "Information about scenic spots, including name, area, level and ect.",
                "storageLocation": "Y:\\06_Geodata\\2018_Yangtze_Delta_Data\\47 The 1 250K spatial distribution data of scenic spots and National Geopark in the Yangtze River Delta(Jiangsu Province)(2013)"
            },
            "id": 4702
        },
        {
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [118.506398525068, 28.2846700000001],
                        [121.579383616388, 28.2846700000001],
                        [121.579383616388, 34.6595115110811],
                        [118.506398525068, 34.6595115110811],
                        [118.506398525068, 28.2846700000001]
                    ]
                ]
            },
            "type": "Feature",
            "properties": {
                "title": "national park",
                "year": "2013",
                "scale": "1:250,000",
                "projection": "WGS84",
                "format": "shapefile",
                "type": "polygon",
                "datasize": "21.5KB",
                "category": "resource",
                "language": "CHE",
                "constraints": "apply before usage",
                "contact": "Chenyu Zuo",
                "description": "Information about scenic spots, including name, area, level and ect.)",
                "storageLocation": "Y:\\06_Geodata\\2018_Yangtze_Delta_Data\\47 The 1 250K spatial distribution data of scenic spots and National Geopark in the Yangtze River Delta(Jiangsu Province)(2013)"
            },
            "id": 4703
        },
        {
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [117.057700127, 27.229313942],
                        [122.669757117, 27.229313942],
                        [122.669757117, 34.680000000],
                        [117.057700127, 34.680000000],
                        [117.057700127, 27.229313942]
                    ]
                ]
            },
            "type": "Feature",
            "properties": {
                "title": "national protected antiques",
                "year": "2013",
                "scale": "1:250,000",
                "projection": "WGS84",
                "format": "shapefile",
                "type": "point",
                "datasize": "58.8KB",
                "category": "resource",
                "language": "CHE",
                "constraints": "apply before usage",
                "contact": "Chenyu Zuo",
                "description": "Information about national protected antiques, including address and name.",
                "storageLocation": "Y:\\06_Geodata\\2018_Yangtze_Delta_Data\\50 The 1 250K  the state key cultural relics protection units in the Yangtze River Delta (Jiangsu province)  (2013)"
            },
            "id": 5001
        },
        {
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [117.057700127, 27.229313942],
                        [122.669757117, 27.229313942],
                        [122.669757117, 34.680000000],
                        [117.057700127, 34.680000000],
                        [117.057700127, 27.229313942]
                    ]
                ]
            },
            "type": "Feature",
            "properties": {
                "title": "National reserves",
                "year": "2013",
                "scale": "1:250,000",
                "projection": "WGS84",
                "format": "shapefile",
                "type": "polygon",
                "datasize": "153KB",
                "category": "resource",
                "language": "CHE",
                "constraints": "apply before usage",
                "contact": "Chenyu Zuo",
                "description": "Information about natural reserves, including name, type, area, time, address and etc.",
                "storageLocation": "Y:\\06_Geodata\\2018_Yangtze_Delta_Data\\53 The 1 250K  Nature Reserve in the Yangtze River Delta (Jiangsu) (2013)"
            },
            "id": 5301
        },
    ]
};

var nature_resources = {
    "type": "FeatureCollection",
    "features": [
        {
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [86.6489513315312, 24.6810400822169],
                        [121.803186334366, 24.6810400822169],
                        [121.803186334366, 38.8709362011307],
                        [86.6489513315312, 38.8709362011307],
                        [86.6489513315312, 24.6810400822169]
                    ]
                ]
            },
            "type": "Feature",
            "properties": {
                "title": "soil points",
                "year": "2015",
                "scale": "1:1,000,000",
                "projection": "WGS84",
                "format": "shapefile",
                "type": "point",
                "datasize": "53.7KB",
                "category": "resource",
                "language": "CHE",
                "constraints": "apply before usage",
                "contact": "Chenyu Zuo",
                "description": "Description of soil types, e.g. chernozem, red soil,  alpine desert soil",
                "storageLocation": "Y:\\06_Geodata\\2018_Yangtze_Delta_Data\\12 1 1000k Soil type map in the Yangtze River Basin(2015)"
            },
            "id": 1201
        },
        {
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [86.2780364108298, 24.4578544238092],
                        [121.866960494416, 24.4578544238092],
                        [121.866960494416, 39.0296736235143],
                        [86.2780364108298, 39.0296736235143],
                        [86.2780364108298, 24.4578544238092]
                    ]
                ]
            },
            "type": "Feature",
            "properties": {
                "title": "soil polygons",
                "year": "2015",
                "scale": "1:1,000,000",
                "projection": "WGS84",
                "format": "shapefile",
                "type": "polygon",
                "datasize": "465KB",
                "category": "resource",
                "language": "CHE",
                "constraints": "apply before usage",
                "contact": "Chenyu Zuo",
                "description": "Description of soil types, e.g. chernozem, red soil,  alpine desert soil",
                "storageLocation": "Y:\\06_Geodata\\2018_Yangtze_Delta_Data\\12 1 1000k Soil type map in the Yangtze River Basin(2015)"
            },
            "id": 1202
        },
        {
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [118.33771711128, 28.0403344465231],
                        [122.844940769737, 28.0403344465231],
                        [122.844940769737, 33.4178091863722],
                        [118.33771711128, 33.4178091863722],
                        [118.33771711128, 28.0403344465231]
                    ]
                ]
            },
            "type": "Feature",
            "properties": {
                "title": "landuse",
                "year": "2010",
                "scale": "1:100,000",
                "projection": "WGS84",
                "format": "shapefile",
                "type": "polygon",
                "datasize": "114MB",
                "category": "resource",
                "language": "CHE",
                "constraints": "apply before usage",
                "contact": "Chenyu Zuo",
                "description": "1-Arable land, 2-Forest, 3-Grassland, 4-Waterbody, 5-Building, 6-unuse",
                "storageLocation": "Y:\\06_Geodata\\2018_Yangtze_Delta_Data\\15 The 1 100K land use data set in the Yangtze River Delta(2010)"
            },
            "id": 1501
        },
        {
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [116.07331701355, 28.1127472335815],
                        [121.78401701355, 28.1127472335815],
                        [121.78401701355, 34.1632472335815],
                        [116.07331701355, 34.1632472335815],
                        [116.07331701355, 28.1127472335815]
                    ]
                ]
            },
            "type": "Feature",
            "properties": {
                "title": "wetland",
                "year": "2000",
                "scale": "1:1,000,000",
                "projection": "WGS84",
                "format": "shapefile",
                "type": "polygon",
                "datasize": "149KB",
                "category": "resource",
                "language": "CHE",
                "constraints": "apply before usage",
                "contact": "Chenyu Zuo",
                "description": "information of wetlands, including area, name, soil type, vegetation, climate and ect.",
                "storageLocation": "Y:\\06_Geodata\\2018_Yangtze_Delta_Data\\20  The 1 1000K Spatial distribution data of wetlands in the Yangtze River Delta region(2000)"
            },
            "id": 2001
        },
        {
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [116.687559915, 27.3166666670001],
                        [122.420860956, 27.3166666670001],
                        [122.420860956, 35.0458333330001],
                        [116.687559915, 35.0458333330001],
                        [116.687559915, 27.3166666670001]
                    ]
                ]
            },
            "type": "Feature",
            "properties": {
                "title": "mineral",
                "year": "2015",
                "scale": "1:250,000",
                "projection": "WGS84",
                "format": "shapefile",
                "type": "polygon",
                "datasize": "36KB",
                "category": "resource",
                "language": "CHE",
                "constraints": "apply before usage",
                "contact": "Chenyu Zuo",
                "description": "information of mineral, including area, name, and resource type(mineral water, geothermal, copper and stc.)",
                "storageLocation": "Y:\\06_Geodata\\2018_Yangtze_Delta_Data\\44 The 1 250k mineral resources distribution data set in the Yangtze River Delta (Jiangsu) (2015)"
            },
            "id": 4401
        },
    ]
};

var education = {
    "type": "FeatureCollection",
    "features": [
        {
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [116.412763, 27.55521],
                        [122.45229, 27.55521],
                        [122.45229, 35.114083],
                        [116.412763, 35.114083],
                        [116.412763, 27.55521]
                    ]
                ]
            },
            "type": "Feature",
            "properties": {
                "title": "Primary school",
                "year": "2015",
                "scale": "1:250,000",
                "projection": "WGS84",
                "format": "shapefile",
                "type": "point",
                "datasize": "1.58MB",
                "category": "education",
                "language": "CHE",
                "constraints": "apply before usage",
                "contact": "Chenyu Zuo",
                "description": "Name of the entity",
                "storageLocation": "Y:\\06_Geodata\\2018_Yangtze_Delta_Data\\56 1 250K distribution data of educational resources in the Yangtze River Delta (2015)"
            },
            "id": 5601
        },
        {
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [116.412763, 27.55521],
                        [122.45229, 27.55521],
                        [122.45229, 35.114083],
                        [116.412763, 35.114083],
                        [116.412763, 27.55521]
                    ]
                ]
            },
            "type": "Feature",
            "properties": {
                "title": "Middle school",
                "year": "2015",
                "scale": "1:250,000",
                "projection": "WGS84",
                "format": "shapefile",
                "type": "point",
                "datasize": "1.08MB",
                "category": "education",
                "language": "CHE",
                "constraints": "apply before usage",
                "contact": "Chenyu Zuo",
                "description": "Name of the entity",
                "storageLocation": "Y:\\06_Geodata\\2018_Yangtze_Delta_Data\\56 1 250K distribution data of educational resources in the Yangtze River Delta (2015)"
            },
            "id": 5602
        },
        {
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [116.412763, 27.55521],
                        [122.45229, 27.55521],
                        [122.45229, 35.114083],
                        [116.412763, 35.114083],
                        [116.412763, 27.55521]
                    ]
                ]
            },
            "type": "Feature",
            "properties": {
                "title": "Higher education",
                "year": "2015",
                "scale": "1:250,000",
                "projection": "WGS84",
                "format": "shapefile",
                "type": "point",
                "datasize": "198KB",
                "category": "education",
                "language": "CHE",
                "constraints": "apply before usage",
                "contact": "Chenyu Zuo",
                "description": "Name of the entity",
                "storageLocation": "Y:\\06_Geodata\\2018_Yangtze_Delta_Data\\56 1 250K distribution data of educational resources in the Yangtze River Delta (2015)"
            },
            "id": 5603
        },
        {
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [116.412763, 27.55521],
                        [122.45229, 27.55521],
                        [122.45229, 35.114083],
                        [116.412763, 35.114083],
                        [116.412763, 27.55521]
                    ]
                ]
            },
            "type": "Feature",
            "properties": {
                "title": "Scientific research institute",
                "year": "2015",
                "scale": "1:250,000",
                "projection": "WGS84",
                "format": "shapefile",
                "type": "point",
                "datasize": "7.29MB",
                "category": "education",
                "language": "CHE",
                "constraints": "apply before usage",
                "contact": "Chenyu Zuo",
                "description": "Name of the entity",
                "storageLocation": "Y:\\06_Geodata\\2018_Yangtze_Delta_Data\\56 1 250K distribution data of educational resources in the Yangtze River Delta (2015)"
            },
            "id": 5604
        },
    ]
};

var energy = {
    "type": "FeatureCollection",
    "features": [
        {
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [116.867370605469, 30.8915404820741],
                        [121.75918673974, 30.8915404820741],
                        [121.75918673974, 34.8710601774779],
                        [116.867370605469, 34.8710601774779],
                        [116.867370605469, 30.8915404820741]
                    ]
                ]
            },
            "type": "Feature",
            "properties": {
                "title": "Power plant",
                "year": "2014",
                "scale": "1:250,000",
                "projection": "WGS84",
                "format": "shapefile",
                "type": "point",
                "datasize": "19.4KB",
                "category": "energy",
                "language": "CHE",
                "constraints": "apply before usage",
                "contact": "Chenyu Zuo",
                "description": "Distribution of the power plants",
                "storageLocation": "Y:\\06_Geodata\\2018_Yangtze_Delta_Data\\57 1 250K Distribution data of major thermal power plants in the Yangtze River Delta (Jiangsu)(2014)"
            },
            "id": 5701
        },
        {
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [116.867370605469, 30.8915404820741],
                        [121.75918673974, 30.8915404820741],
                        [121.75918673974, 34.8710601774779],
                        [116.867370605469, 34.8710601774779],
                        [116.867370605469, 30.8915404820741]
                    ]
                ]
            },
            "type": "Feature",
            "properties": {
                "title": "low_kv",
                "year": "2014",
                "scale": "1:250,000",
                "projection": "WGS84",
                "format": "shapefile",
                "type": "polyline",
                "datasize": "572KB",
                "category": "energy",
                "language": "CHE",
                "constraints": "apply before usage",
                "contact": "Chenyu Zuo",
                "description": "220V power nets",
                "storageLocation": "Y:\\06_Geodata\\2018_Yangtze_Delta_Data\\57 1 250K Distribution data of major thermal power plants in the Yangtze River Delta (Jiangsu)(2014)"
            },
            "id": 5702
        },
        {
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [116.867370605469, 30.8915404820741],
                        [121.75918673974, 30.8915404820741],
                        [121.75918673974, 34.8710601774779],
                        [116.867370605469, 34.8710601774779],
                        [116.867370605469, 30.8915404820741]
                    ]
                ]
            },
            "type": "Feature",
            "properties": {
                "title": "high_kv",
                "year": "2014",
                "scale": "1:250,000",
                "projection": "WGS84",
                "format": "shapefile",
                "type": "polyline",
                "datasize": "10.9KB",
                "category": "energy",
                "language": "CHE",
                "constraints": "apply before usage",
                "contact": "Chenyu Zuo",
                "description": "500V power nets",
                "storageLocation": "Y:\\06_Geodata\\2018_Yangtze_Delta_Data\\57 1 250K Distribution data of major thermal power plants in the Yangtze River Delta (Jiangsu)(2014)"
            },
            "id": 5703
        },
        {
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [116.867370605469, 30.8915404820741],
                        [121.75918673974, 30.8915404820741],
                        [121.75918673974, 34.8710601774779],
                        [116.867370605469, 34.8710601774779],
                        [116.867370605469, 30.8915404820741]
                    ]
                ]
            },
            "type": "Feature",
            "properties": {
                "title": "high_kv_in_construction",
                "year": "2014",
                "scale": "1:250,000",
                "projection": "WGS84",
                "format": "shapefile",
                "type": "polyline",
                "datasize": "10.9KB",
                "category": "energy",
                "language": "CHE",
                "constraints": "apply before usage",
                "contact": "Chenyu Zuo",
                "description": "500V power nets under construction",
                "storageLocation": "Y:\\06_Geodata\\2018_Yangtze_Delta_Data\\57 1 250K Distribution data of major thermal power plants in the Yangtze River Delta (Jiangsu)(2014)"
            },
            "id": 5704
        },
        {
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [116.867370605469, 30.8915404820741],
                        [121.75918673974, 30.8915404820741],
                        [121.75918673974, 34.8710601774779],
                        [116.867370605469, 34.8710601774779],
                        [116.867370605469, 30.8915404820741]
                    ]
                ]
            },
            "type": "Feature",
            "properties": {
                "title": "high_kv_dc",
                "year": "2014",
                "scale": "1:250,000",
                "projection": "WGS84",
                "format": "shapefile",
                "type": "polyline",
                "datasize": "1.34KB",
                "category": "energy",
                "language": "CHE",
                "constraints": "apply before usage",
                "contact": "Chenyu Zuo",
                "description": "500V DC power",
                "storageLocation": "Y:\\06_Geodata\\2018_Yangtze_Delta_Data\\57 1 250K Distribution data of major thermal power plants in the Yangtze River Delta (Jiangsu)(2014)"
            },
            "id": 5705
        },
    ]
};

var pollution = {
    "type": "FeatureCollection",
    "features": [
        {
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [119.504203951703, 30.9474628565335],
                        [120.602577852731, 30.9474628565335],
                        [120.602577852731, 31.947263189654],
                        [119.504203951703, 31.947263189654],
                        [119.504203951703, 30.9474628565335]
                    ]
                ]
            },
            "type": "Feature",
            "properties": {
                "title": "factory",
                "year": "2014",
                "scale": "1:250,000",
                "projection": "WGS84",
                "format": "shapefile",
                "type": "point",
                "datasize": "32KB",
                "category": "pollution",
                "language": "CHE",
                "constraints": "apply before usage",
                "contact": "Chenyu Zuo",
                "description": "Distribution of the key industrial pollution sources in Jiangsu.",
                "storageLocation": "Y:\\06_Geodata\\2018_Yangtze_Delta_Data\\58 1 250K Distribution data of key industrial pollution sources in the Yangtze River Delta(Jiangsu)(2014)"
            },
            "id": 5801
        },
        {
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [118.636780504119, 30.8161534255],
                        [121.03024463797, 30.8161534255],
                        [121.03024463797, 33.792847246491],
                        [118.636780504119, 33.792847246491],
                        [118.636780504119, 30.8161534255]
                    ]
                ]
            },
            "type": "Feature",
            "properties": {
                "title": "Sewage plant",
                "year": "2014",
                "scale": "1:250,000",
                "projection": "WGS84",
                "format": "shapefile",
                "type": "point",
                "datasize": "6.25KB",
                "category": "pollution",
                "language": "CHE",
                "constraints": "apply before usage",
                "contact": "Chenyu Zuo",
                "description": "Distribution of the sewage treatment plants in Jiangsu.",
                "storageLocation": "Y:\\06_Geodata\\2018_Yangtze_Delta_Data\\59 1 250K spatial distribution data of  sewage treatment plants in Yangtze River Delta(Jiangsu)(2014)"
            },
            "id": 5802
        },
    ]
};


























