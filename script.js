let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.89936954331783, lng: -80.18616095415102 },
    zoom: 17, 
    styles: 
[
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ff0000"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ff0000"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "landscape.natural.landcover",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fd0000"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#4f00ff"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#030000"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f08400"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#390909"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#e15f00"
            },
            {
                "saturation": "-15"
            },
            {
                "lightness": "24"
            },
            {
                "gamma": "1.09"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#fcfcfc"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "saturation": "-13"
            },
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ff8100"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#3f518c"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#84afa3"
            },
            {
                "lightness": 52
            }
        ]
    }
]
  });

const ChapelCoords = [
    { lat:39.90094079650348, lng: -80.1873137027191},
    { lat:39.90051280001583, lng: -80.18732711376427}, 
    { lat:39.90050662697002, lng: -80.18704011739734},
    { lat:39.90093873883446, lng: -80.18702670635216},
    { lat:39.90094079650348, lng: -80.1873137027191}
  ];

  const ChapelPolygon = new google.maps.Polygon({
    paths: ChapelCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 0.35,

   }); 

const MillerCoords = [
    { lat: 39.89939727765804, lng: -80.1877995788888}, 
    { lat: 39.89939419108494, lng: -80.18761718866978},
    { lat: 39.89937772935947, lng: -80.18761718866978},
    { lat: 39.89937515721452, lng: -80.18760713038564},
    { lat: 39.899367955208106, lng: -80.1876057892811},
    { lat: 39.89936744077903,  lng: -80.1874254107189},
    { lat: 39.89937515721452, lng: -80.1874227285098},
    { lat: 39.899376186072516, lng: -80.18741602298704},
    { lat: 39.89939933537334, lng: -80.18741535243477}, 
    { lat: 39.89939984980218, lng: -80.1872289389021},
    { lat: 39.89955932254984, lng: -80.18723229166346},
    { lat: 39.89956343797066, lng: -80.18743748065987},
    { lat: 39.899593274764335, lng: -80.18743748065987},
    { lat: 39.89959481804641, lng: -80.18759103713101},
    { lat: 39.8995618946879, lng: -80.18759304878785},
    { lat: 39.89956086583266, lng: -80.18779555557518},
    { lat: 39.89939727765804, lng: -80.1877995788888}
];
      const MillerPolygon = new google.maps.Polygon({
    paths: MillerCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 0.35,

    });

      const GPACCoords = [
    { lat: 39.90003, lng: -80.18801},
    { lat: 39.90002, lng: -80.18771},
    { lat: 39.89980, lng: -80.18772},
    { lat: 39.89981, lng: -80.18802},
    { lat: 39.90003, lng: -80.18801} ];

    const GPACPolygon = new google.maps.Polygon({
        paths: GPACCoords,
        strokeColor: "#000000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#c16c18",
        fillOpacity: 0.35,

        });

    const ThayerCoords = [
    { lat: 39.89980, lng: -80.18429},
    { lat: 39.89979, lng: -80.18416},
    { lat: 39.89947, lng: -80.18416},
    { lat: 39.89947, lng: -80.18415},
    { lat: 39.89940, lng: -80.18415},
    { lat: 39.89939, lng: -80.18409},
    { lat: 39.89922, lng: -80.18409},
    { lat: 39.89922, lng: -80.18430},
    { lat: 39.89980, lng: -80.18429} 

    ];


    const ThayerPolygon = new google.maps.Polygon({
        paths: ThayerCoords,
        strokeColor: "#000000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#c16c18",
        fillOpacity: 0.35,

        });
       
        const PollockCoords = [
     { lat: 39.89932966350404, lng: -80.18516459443458 }, 
     { lat: 39.89932674703466, lng: -80.18474261889916 }, 
     { lat: 39.89918383988418, lng: -80.18474185858288 }, 
     { lat:39.89918675635962, lng: -80.18516611506715 }, 
     { lat: 39.89932966350404 , lng: -80.18516459443458}
  
      ];

      const PollockPolygon = new google.maps.Polygon({
        paths: PollockCoords,
        strokeColor: "#000000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#c16c18",
        fillOpacity: 0.35,

        });

        const StewartCoords = [
    { lat: 39.89820313942542, lng: -80.18674222997413 },
    { lat: 39.898196966171525, lng: -80.1864800440406 },
    { lat: 39.8977313983387, lng: -80.1864981489516 },
    { lat: 39.89773808607581, lng: -80.18675966433287 },
    { lat: 39.89820313942542, lng: -80.18674222997413 },
  ];
  
  const Stewartpolygon = new google.maps.Polygon({
    paths: StewartCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,

  });

  const SouthCoords = [
    { lat: 39.90036605487646, lng: -80.18613153937626 },
    { lat: 39.90036296834702, lng: -80.18572786691594 },
    { lat: 39.90022304553257, lng: -80.18572786691594 },
    { lat: 39.90022407437784, lng: -80.18613556268981 },
    { lat: 39.90036605487646, lng: -80.18613153937626 },
  ];

  const Southpolygon = new google.maps.Polygon({
    paths: SouthCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

const WestCoords = [
    { lat: 39.90055601131593, lng:-80.1864124804877 },
    { lat: 39.900237070088444, lng: -80.1864124804877 },
    { lat: 39.90023295470808, lng:-80.18622472585513 },
    { lat: 39.90055395363536, lng:-80.18622472585513 },
    { lat: 39.90055601131593, lng:-80.1864124804877 }
  ];
  
  const Westpolygon = new google.maps.Polygon({
    paths: WestCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,

    });

const WillisonCoords = [
  { lat: 39.897538998708136, lng: -80.18620531789718 },
  { lat: 39.897541056479255, lng: -80.18638502589995 },
  { lat: 39.89711509654142, lng: -80.18639307252694 },
  { lat: 39.89711509654142, lng: -80.18621604673316 },
  { lat: 39.897538998708136, lng: -80.18620531789718 }
  ];

const Willisonpolygon = new google.maps.Polygon({
    paths: WillisonCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,

    });

    const EberlyCoords = [
{ lat: 39.90005305490059, lng: -80.18549297214429 },
{ lat: 39.900042602452224, lng: -80.18519237546121 },
{ lat: 39.899704856856225, lng: -80.18517193829295 },
{ lat: 39.89971138966885, lng: -80.18550233917973 },
{ lat: 39.90005305490059, lng: -80.18549297214429 },
];

const EberlyPolygon = new google.maps.Polygon({
    paths: EberlyCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 0.35,

    });

    const FieldhouseCoords = [
    { lat: 39.89822129557472, lng: -80.18785727074538 },
    { lat: 39.89821720506465, lng: -80.18727432259585 },
    { lat: 39.89798540909532, lng: -80.18727609987678 },
    { lat: 39.89798677260331, lng: -80.18785904802633 },
    { lat: 39.89822129557472, lng: -80.18785727074538 },

  ];

    const FieldhousePolygon = new google.maps.Polygon({
    paths: FieldhouseCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 0.35,

    });

    const HannaCoords = [
    { lat: 39.899575902129406, lng: -80.18715171790629 },
    { lat: 39.89957230113685, lng: -80.18694183506034 },
    { lat: 39.89937424625455, lng: -80.18694787003034 },
    { lat: 39.89937784725752, lng: -80.18715708232408 },
    { lat: 39.899575902129406, lng: -80.18715171790629 }
  ];

const HannaPolygon = new google.maps.Polygon({
    paths: HannaCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 0.35,

    });

const CREDCoords = [
    { lat: 39.89820789567786, lng: -80.1863954019053 },
    { lat: 39.898204677891705, lng:  -80.18609970550332 },
    { lat: 39.89802287272942, lng:  -80.18610389977852 },
    { lat: 39.89802930831865,  lng:  -80.18640588759332 },
    { lat: 39.89820789567786, lng: -80.1863954019053 }
  ];
  const CREDPolygon = new google.maps.Polygon({
    paths: CREDCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 0.35,

    });

  const CafCoords = [
{lat: 39.900203456792106, lng: -80.18817887398245},
{lat: 39.900590052054156, lng: -80.18815381174599},
{lat: 39.90067519885253, lng: -80.18808489059572},
{lat: 39.900671765515945, lng: -80.18796763513225},
{lat: 39.900573572016434, lng: -80.18770358656951},
{lat: 39.90018903667797, lng: -80.18772506848647},

];

const CafPolygon = new google.maps.Polygon({
    paths: CafCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 0.35,

  });

const NestCoords = [
    {lat: 39.8982031743014, lng: -80.18528256249408},
    {lat: 39.89803340961704, lng: -80.1852906091205},
    {lat: 39.89803958288567, lng: -80.18549915085532},
    {lat: 39.89820883311696, lng: -80.18549512754211}

  ];

    const NestPolygon = new google.maps.Polygon({
    paths: NestCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 0.35,

    });

  const CJCoords = [
    { lat: 39.900381516505455, lng: -80.18875312061515 },
    { lat: 39.90030229555674, lng: -80.18875312061515 },
    { lat: 39.900303838822865, lng: -80.1890005543931 },
    { lat: 39.90038357419121, lng: -80.18899988384086 },
    { lat: 39.900381516505455, lng: -80.18875312061515 },
    ];


    const CJPolygon = new google.maps.Polygon({
        paths: CJCoords,
        strokeColor: "#000000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#c16c18",
        fillOpacity: 0.35,
   
  });

const WILEYCoords = [
    { lat: 39.893091605353035, lng: -80.18150925038465}, 
    { lat: 39.89317597939296, lng: -80.1814180552774}, 
    { lat: 39.89325212173008, lng: -80.18153741357952},  
    { lat: 39.89316466093023, lng: -80.1816286086868 },
    { lat: 39.893091605353035, lng: -80.18150925038465} 
  ];
  
  const Wileypolygon = new google.maps.Polygon({
    paths: WILEYCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,

    });

const BuhlCoords = [
  { lat: 39.89950878796206,  lng: -80.18562837849694},
  { lat: 39.899509816818046, lng: -80.18551304351189},
  { lat: 39.89954891333424,  lng: -80.18551304351189},
  { lat: 39.899546855623434, lng: -80.18537356864626},
  { lat: 39.89950055711358,  lng: -80.18537222754178},
  { lat: 39.899497470545185, lng: -80.18525689255674},
  { lat: 39.899184697556294, lng: -80.18526091587017},
  { lat: 39.899188812999625, lng: -80.18564178954172},
  { lat: 39.89950878796206,  lng: -80.18562837849694},  
];

  const Buhlpolygon = new google.maps.Polygon({
        paths: BuhlCoords,
        strokeColor: "#000000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "c16c18",
        fillOpacity: 0.35

  });

  const StoverCoords = [
    {lat: 39.899772227541916, lng: -80.18636360069222},
    {lat: 39.89980309309625, lng: -80.18636695345333},
    {lat: 39.89980309309625, lng: -80.18640517492993},
    {lat: 39.89999548807153, lng: -80.18639712830327},
    {lat: 39.89999548807153, lng: -80.18635823627444},
    {lat: 39.90002841122172, lng: -80.18635756572223},
    {lat: 39.90002326698055, lng: -80.18596864543396},
    {lat: 39.89976502557723, lng: -80.18597803316504},
    {lat: 39.899772227541916, lng: -80.18636360069222}

    ];

const Stoverpolygon = new google.maps.Polygon({
        paths: StoverCoords,
        strokeColor: "#000000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#c16c18",
        fillOpacity: 0.35,

        });


  Stewartpolygon.setMap(map);

  MillerPolygon.setMap(map);

  Westpolygon.setMap(map);

  ThayerPolygon.setMap(map);

  GPACPolygon.setMap(map);

  Willisonpolygon.setMap(map);

  EberlyPolygon.setMap(map);

  FieldhousePolygon.setMap(map);

  HannaPolygon.setMap(map);

  CREDPolygon.setMap(map);

  CafPolygon.setMap(map);

  NestPolygon.setMap(map);

  Buhlpolygon.setMap(map);

  Stoverpolygon.setMap(map);

  ChapelPolygon.setMap(map);

  PollockPolygon.setMap(map);

  Westpolygon.setMap(map);

  Southpolygon.setMap(map);

  CJPolygon.setMap(map);




  const StewartMarker = new google.maps.Marker({
    position: { lat:39.89798811441821, lng:-80.18662969138462},
    map,
    title: "Stewart Hall",
    icon: "https://i.imgur.com/GdKreBz.png",
  });

  const CREDMarker = new google.maps.Marker({
    position: { lat:39.89811977808352, lng: -80.18627293432324},
    map,
    title: "Center for Research and Economic Development",
    icon: "https://i.imgur.com/GdKreBz.png",
  });

const MillerMarker = new google.maps.Marker({
    position: { lat:39.899464943253946, lng: -80.18745844095886},
    map,
    title: "Miller Hall",
    icon: "https://i.imgur.com/GdKreBz.png",
  });

const WestMarker = new google.maps.Marker({
    position: { lat:39.90040103089527, lng: -80.18631821404497},
    map,
    title: "West Hall",
    icon: "https://imgur.com/Hk7mtXv.png",
  });

const SouthMarker = new google.maps.Marker({
    position: { lat:39.900298146558555, lng: -80.18593465816626},
    map,
    title: "South Hall",
    icon: "https://imgur.com/Hk7mtXv.png",
  });

const ThayerMarker = new google.maps.Marker({
    position: { lat:39.899483932334164, lng: -80.18423288841876},
    map,
    title: "Thayer Hall",
    icon: "https://imgur.com/Hk7mtXv.png",
  });

const GPACMarker = new google.maps.Marker({
    position: { lat:39.89991430130822, lng: -80.1878795102787},
    map,
    title: "Goodwin Performing Arts Center",
    icon: "https://imgur.com/OcrVvLP.png",
  });

const WillisonMarker = new google.maps.Marker({
    position: { lat:39.89734120253956, lng: -80.1863032672224},
    map,
    title: "Willison Hall",
    icon: "https://imgur.com/Hk7mtXv.png",
  });

const EberlyMarker = new google.maps.Marker({
    position: { lat:39.89987896164472, lng: -80.18534260377902},
    map,
    title: "Eberly Library",
    icon: "https://i.imgur.com/GdKreBz.png",
  });

const FieldhouseMarker = new google.maps.Marker({
    position: { lat:39.89809802700779, lng: -80.18756919049653},
    map,
    title: "Rudy Marisa Fieldhouse",
    icon: "https://imgur.com/cpczfC1.png",
  });

const HannahMarker = new google.maps.Marker({
    position: { lat:39.89948087663223, lng: -80.18704399479331},
    map,
    title: "Hannah Hall",
    icon: "https://i.imgur.com/GdKreBz.png",
  });

const CafMarker = new google.maps.Marker({
    position: { lat:39.900414268283804, lng:-80.18794494550829},
    map,
    title: "Benedum Dining Hall",
    icon: "https://imgur.com/DMXT9gk.png",
  });

const NestMarker = new google.maps.Marker({
    position: { lat:39.89811674860323, lng: -80.18539436250639},
    map,
    title: "The Nest",
    icon: "https://i.imgur.com/GdKreBz.png",
  });

const BuhlMarker = new google.maps.Marker({
    position: { lat:39.89935392357392, lng: -80.18545429419818},
    map,
    title: "Buhl Hall",
    icon: "https://i.imgur.com/GdKreBz.png",
  });

const StoverMarker = new google.maps.Marker({
    position: { lat:39.89989803635358, lng:-80.1861852948693},
    map,
    title: "Stover Center",
    icon: "https://i.imgur.com/GdKreBz.png",
  });

const ChapelMarker = new google.maps.Marker({
    position: { lat:39.900751959778866, lng: -80.18717198695956},
    map,
    title: "Roberts Chapel",
    icon: "https://imgur.com/q4LvhNJ.png",
  });

const PollockMarker = new google.maps.Marker({
    position: { lat:39.89925369743461, lng:-80.1849584735772},
    map,
    title: "Pollock Hall",
    icon: "https://imgur.com/Hk7mtXv.png",
  });

const CJMarker = new google.maps.Marker({
    position: { lat:39.900341533251506, lng:-80.1888890263849},
    map,
    title: "CSI Center",
    icon: "https://i.imgur.com/GdKreBz.png",
  });

const StewartInfo = new google.maps.InfoWindow({
    content: "Built in 1964, the Paul R. Stewart Science Building is a five-story building that serves as the home for the Biology, Chemistry, Computer Science, Mathematics, and Nursing departments."
});
const CREDInfo = new google.maps.InfoWindow({
    content: "The Center for Research and Economic Development houses multiple classrooms and serves as a resource for business and industry, applying the University's scientific research and business expertise to real-world projects."
  });

const MillerInfo = new google.maps.InfoWindow({
    content: "At the center of Waynesburg University's campus, Alfred Brashear Miller Hall wears many hats as it holds classrooms, administrative offices, Education Department offices and many more."
  });

const WestInfo = new google.maps.InfoWindow({
    content: "West Hall is a suite-style, female residence halls that houses 60 female students. Residence in this hall is offered based on total credits completed between roommates."
  });

const SouthInfo = new google.maps.InfoWindow({
    content: "South Hall is a suite-style, female residence hall that houses 70 female students. Residence in this halls is offered based on total credits completed between roommates."
  });

const ThayerInfo = new google.maps.InfoWindow({
    content: "Thayer Hall is a male residence hall on the campus of Waynesburg University. Thayer Hall houses 130 total male students in all class levels."
  });

const GPACInfo = new google.maps.InfoWindow({
    content: "With a 250-seat auditorium, the Goodwin Performing Arts Center (GPAC) is the home for Waynesburg University's drama and music programs."
  });

const WillisonInfo = new google.maps.InfoWindow({
    content: "Willison Hall is a suite-style, male residence hall that houses male 175 students."
  });

const EberlyInfo = new google.maps.InfoWindow({
    content: "Named after the Eberly Foundation of Uniontown, Pennsylvania, the Eberly Library is the campus library for Waynesburg University. Eberly Library is open from 7:30 a.m. to midnight, Monday through Thursday and with reduced hours on the weekends."
  });

const FieldhouseInfo = new google.maps.InfoWindow({
    content: "Named after the Rudy Marisa, former Men's basketball coach and arguably the biggest figure in the history of Waynesburg University Athletics, Rudy Marisa Fieldhouse is the home of Waynesburg University's athletic offices and gymnasium."
  });

const HannahInfo = new google.maps.InfoWindow({
    content: "Built in 1851 and renovated in 1990, Hannah Hall now serves as Waynesburg University’s home for the Department of Business Administration."
  });

const CafInfo = new google.maps.InfoWindow({
    content: "Managed by Aladdin Food Management Services, LLC., Benedum Dining Hall serves as the campus main cafeteria."
  });

const NestInfo = new google.maps.InfoWindow({
    content: "The Nest is the new home of the campus store, bookstore and a cool new hangout spot for students."
  });

const BuhlInfo = new google.maps.InfoWindow({
    content: "Made possible by a grant from the Buhl Foundation of Pittsburgh, Buhl Hall serves as the home for the departments of Communication, Criminal Justice, English and Human Studies. The University's radio, television, student newspaper, and yearbook facilities are also located in this building."
  });

const StoverInfo = new google.maps.InfoWindow({
    content: "The Stover Center is the hub of campus activity at Waynesburg University. Complete with classrooms, food options at The Hive and Student Services, this is often the busiest building on campus"
  });

const ChapelInfo = new google.maps.InfoWindow({
    content: "Roberts Chapel is the home for worship on the faith-based campus of Waynesburg University. The University offers a weekly Chapel service on Tuesday morning at 11 AM in Roberts Chapel."
  });

const PollockInfo = new google.maps.InfoWindow({
    content: "Pollock Hall is a suite-style, female residence hall that houses 90 female students. Residence in these halls is offered based on total credits completed between roommates and are assigned in early April."
  });

const CJInfo = new google.maps.InfoWindow({
    content: "The CSI center serves as a state-of-the-art building for all Criminal Justice majors to further thir education in."
  });

StewartMarker.addListener("click", () => {
    StewartInfo.open({
      anchor: StewartMarker,
      map,
      shouldFocus: false,
    });
  });

CREDMarker.addListener("click", () => {
    CREDInfo.open({
      anchor: CREDMarker,
      map,
      shouldFocus: false,
    });
  });

MillerMarker.addListener("click", () => {
    MillerInfo.open({
      anchor: MillerMarker,
      map,
      shouldFocus: false,
    });
  });

WestMarker.addListener("click", () => {
    WestInfo.open({
      anchor: WestMarker,
      map,
      shouldFocus: false,
    });
  });

SouthMarker.addListener("click", () => {
    SouthInfo.open({
      anchor: SouthMarker,
      map,
      shouldFocus: false,
    });
  });

ThayerMarker.addListener("click", () => {
    ThayerInfo.open({
      anchor: ThayerMarker,
      map,
      shouldFocus: false,
    });
  });

GPACMarker.addListener("click", () => {
    GPACInfo.open({
      anchor: GPACMarker,
      map,
      shouldFocus: false,
    });
  });

WillisonMarker.addListener("click", () => {
    WillisonInfo.open({
      anchor: WillisonMarker,
      map,
      shouldFocus: false,
    });
  });

EberlyMarker.addListener("click", () => {
    EberlyInfo.open({
      anchor: EberlyMarker,
      map,
      shouldFocus: false,
    });
  });

FieldhouseMarker.addListener("click", () => {
    FieldhouseInfo.open({
      anchor: FieldhouseMarker,
      map,
      shouldFocus: false,
    });
  });

HannahMarker.addListener("click", () => {
    HannahInfo.open({
      anchor: HannahMarker,
      map,
      shouldFocus: false,
    });
  });

CafMarker.addListener("click", () => {
    CafInfo.open({
      anchor: CafMarker,
      map,
      shouldFocus: false,
    });
  });

NestMarker.addListener("click", () => {
    NestInfo.open({
      anchor: NestMarker,
      map,
      shouldFocus: false,
    });
  });

BuhlMarker.addListener("click", () => {
    BuhlInfo.open({
      anchor: BuhlMarker,
      map,
      shouldFocus: false,
    });
  });

StoverMarker.addListener("click", () => {
    StoverInfo.open({
      anchor: StoverMarker,
      map,
      shouldFocus: false,
    });
  });

ChapelMarker.addListener("click", () => {
    ChapelInfo.open({
      anchor: ChapelMarker,
      map,
      shouldFocus: false,
    });
  });

PollockMarker.addListener("click", () => {
    PollockInfo.open({
      anchor: PollockMarker,
      map,
      shouldFocus: false,
    });
  });

CJMarker.addListener("click", () => {
    CJInfo.open({
      anchor: CJMarker,
      map,
      shouldFocus: false,
    });
  });


}
