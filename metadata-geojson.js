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
            "id": 3.3
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
            "id": 3.2
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
            "id": 3.1
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
            "id": 4.1
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
            "id": 4.2
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
            "id": 5.1
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
            "id": 5.2
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
            "id": 5.3
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
            "id": 5.4
        },
    ]
};

































