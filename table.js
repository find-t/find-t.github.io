console.log("Script loaded.");

const response = {
  "pokedata": [
    {
        "name": "Nasjonalmuseet",
        "construct": "Legal Entity",
        "type": "Institution",
        "status": "Active",
        "ownership": "Norwegian State",
        "details": {
            "description": "Nasjonalmuseet (The National Museum of Norway) is the largest museum of art, design and architecture in Scandinavia. It is located at Brynjulf Bulls plass 1, in a new building as part of the Fjord City redevelopment.</a>.",
            "image": "https://culture360.asef.org/media/2013/8/Nasjonalmuseet.jpeg",
            "related": ["Brynjulf Bulls plass 1", "Statsbygg", "Fjordbyen"],
            "links": []
        }
    },
    {
        "name": "Museet for Samtidskunst",
        "construct": "Legal Entity",
        "type": "Institution",
        "status": "Closed",
        "ownership": "Norwegian State",
        "details": {
            "description": "Museet for Samtidskunst was a contemporary art museum located in Oslo.",
            "image": "https://kunsthalloslo.no/wordpress/wp-content/uploads/2017/11/MUSEUMJPG-256x256.jpg",
            "related": [],
            "links": [
                { "text": "Reasons for closure", "url": "#" }
            ]
        }
    },
    {
        "name": "Jens Thiis",
        "construct": "Person",
        "type": "Art Historian",
        "status": "Deceased",
        "ownership": "",
        "details": {
            "description": "Jens Thiis was the first director of <a href=\"#\" class=\"modal-link\" data-name=\"Nasjonalgalleriet\">Nasjonalgalleriet</a>.",
            "image": "https://media.lex.dk/media/149194/standard_compressed_OB.RP14217a.jpg",
            "related": ["Nasjonalmuseet"],
            "links": []
        }
    },
    {
        "name": "Nasjonalgalleriet",
        "construct": "Given Name",
        "type": "Building",
        "status": "Closed",
        "ownership": "Statsbygg",
        "details": {
            "description": "Nasjonalgalleriet is the first building in Norway dedicated to the display of art. Originally comissioned by Christiania Sparebank, the buidling is now owned and managed by Statsbygg.",
            "image": "https://media.snl.no/media/182833/standard_nasjonalgalleriet.jpg",
            "consyear": "1881",
            "consfunction": "Museum",
            "closyear": "2019",
            "closfunction": "None",
            "related": ["Nasjonalmuseet", "Jens Thiis"],
            "links": [
                { "text": "Reasons for closure", "url": "d-r-i/ng-c.html" },
                { "text": "Timeline", "url": "d-r-i/ng-t.html" }
            ],
        }
      },
      {
          "name": "Statsbygg",
          "construct": "Legal Entity",
          "type": "Government Agency",
          "status": "Active",
          "ownership": "Norwegian State",
          "details": {
              "image": "https://files.nettsteder.regjeringen.no/wpuploads01/blogs.dir/397/files/2020/10/statsbygg-logo-800x800-1-400x400.png",
              "description":"Statsbygg (Norwegian Directorate of Public Construction and Property) is a Norwegian government agency that manages the real estate portfolio of the Government of Norway.",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Nasjonalmuseet", "Nasjonalgalleriet"],
              "links": [
                { "text": "Commercial Register", "url": "https://w2.brreg.no/enhet/sok/detalj.jsp?orgnr=971278374"}
              ],
          }
     },
     {
          "name": "Kunstindustrimuseet",
          "construct": "Legal Entity",
          "type": "Institution",
          "status": "Closed",
          "ownership": "",
          "details": {
              "description":"Kunstindustrimuseet (The Arts and Crafts Museum) became in 2003 part of the National Museum of Norway. It used to be located at St Olavs gate 1.",
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["St Olavs gate 1", "Nasjonalmuseet"],
              "links": [],
          }
     },
     {
          "name": "Arkitekturmuseet",
          "construct": "Legal Entity",
          "type": "Institution",
          "status": "Closed",
          "ownership": "",
          "details": {
              "description":"Arkitekturmuseet (The Architecture Museum) became in 2003 part of the National Museum of Norway. It used to be located at Bankplassen 3.",
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Bankplassen 3", "Nasjonalmuseet"],
          }
     },
     {
          "name": "Sparebankstiftelsen DNB",
          "construct": "Legal Entity",
          "type": "Foundation",
          "status": "Active",
          "ownership": "DNB NOR",
          "details": {
              "image": "https://upload.wikimedia.org/wikipedia/commons/e/e7/Logo_Sparebankstiftelsen_DNB.jpg",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Nasjonalmuseet", "Nasjonalgalleriet"],
              "links": [],
          }
     },
     {
          "name": "Christiania Sparebank",
          "construct": "Legal Entity",
          "type": "Bank",
          "status": "Mutated",
          "ownership": "",
          "details": {
              "description":"Christiania Sparebank is the ancestor of the currently active bank DNB NOR. In 1881, Christiania Sparebank provided the funds for the construction of the old National Gallery.",
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Nasjonalgalleriet", "Sparebankstiftelsen DNB"],
              "links": [],
          }
     },
     {
          "name": "Billedkunstsamlingene",
          "construct": "",
          "type": "Art Collection",
          "status": "Active",
          "ownership": "Nasjonalmuseet",
          "details": {
              "description":"Billedkunstsamlingene is a department of the National Museum.",
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Nasjonalmuseet"],
              "links": [],
          }
     },
     {
          "name": "Designsamlingene",
          "construct": "",
          "type": "Art Collection",
          "status": "Active",
          "ownership": "Nasjonalmuseet",
          "details": {
              "description":"Designsamlingene is a department of the National Museum.",
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Nasjonalmuseet"],
              "links": [],
          }
     },
     {
          "name": "Arkitektursamlingene",
          "construct": "",
          "type": "Art Collection",
          "status": "Active",
          "ownership": "Nasjonalmuseet",
          "details": {
              "description":"Arkitektursamlingene is a department of the National Museum.",
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Nasjonalmuseet"],
              "links": [],
          }
     },
     {
          "name": "The Fredriksen Family Collection",
          "construct": "Legal Entity",
          "type": "Art Collection",
          "status": "Active",
          "ownership": "Fredriksen Family Art Company Ltd.",
          "details": {
              "description":"The Fredriksen Family Collection has 28 of its works displayed at the National Museum. The owner, Fredriksen Family Art Company Ltd., is registered in Cyprus.",
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Nasjonalmuseet", "John Fredriksen", "C.K. Ltd."],
              "links": [],
          }
     },
     {
          "name": "Bankplassen 3",
          "construct": "Adress",
          "type": "Building",
          "status": "Unused",
          "ownership": "",
          "details": {
              "image": "https://cdn2.picryl.com/photo/1930/12/31/rigsarkivet-no-nb-digifoto-20160121-00037-nb-ns-000178-3d30d1-640.jpg",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Nasjonalmuseet"],
              "links": [
                  { "text": "Reasons for closure", "url": "" },
                  { "text": "Timeline", "url": "#" }
              ],
          }
     },
     {
          "name": "Bankplassen 4",
          "construct": "Adress",
          "type": "Building",
          "status": "Unused",
          "ownership": "Statsbygg",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Museet for Samtidskunst", "Nasjonalmuseet", "Statsbygg"],
              "links": [
                  { "text": "Reasons for closure", "url": "" },
                  { "text": "Timeline", "url": "#" }
              ],
          }
     },
     {
          "name": "St Olavs Gate 1",
          "construct": "Adress",
          "type": "Building",
          "status": "Active",
          "ownership": "",
          "details": {
              "image": "https://brekkestrand.com/wp-content/uploads/2021/01/bp0115_Edv_Munch_vgs_1-555x373-1.jpg",
              "consyear": "1904",
              "consfunction": "Museum",
              "closyear": "2016",
              "closfunction": "Highschool",
              "related": ["Kunstindustrimuseet", "Stiftelsen Kunstindustrimuseet"],
              "links": [],
          }
     },
     {
          "name": "Toyengata 53",
          "construct": "Adress",
          "type": "Building",
          "status": "Repurposed",
          "ownership": "",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Munchmuseet", "Edvard Munch", "Nasjonalmuseet"],
              "links": [
                  { "text": "Reasons for closure", "url": "" },
                  { "text": "Timeline", "url": "#" }
              ],
          }
     },
     {
          "name": "Universitetsgata 13",
          "construct": "Adress",
          "type": "Building",
          "status": "Unused",
          "ownership": "Statsbygg",
          "details": {
              "image": "",
              "consyear": "1881",
              "consfunction": "Museum",
              "closyear": "2019",
              "closfunction": "None",
              "related": ["Nasjonalgalleriet", "Jens Thiis", "Nasjonalmuseet"],
              "links": [
                  { "text": "Reasons for closure", "url": "" },
                  { "text": "Timeline", "url": "#" }
              ],
          }
     },
     {
          "name": "Brynjulf Bulls plass 1",
          "construct": "Adress",
          "type": "Building",
          "status": "Active",
          "ownership": "Statsbygg",
          "details": {
              "image": "https://www.nasjonalmuseet.no/globalassets/bilder/lokaler/nye-nm/national-museum-of-norway_photo-iwan-baan_2.jpg?scale=opengraph",
              "consyear": "2022",
              "consfunction": "Museum",
              "closyear": "",
              "closfunction": "",
              "related": ["Nasjonalmuseet", "Statsbygg"],
              "links": [],
          }
     },
     {
          "name": "Munch Plass 1",
          "construct": "Adress",
          "type": "Building",
          "status": "Active",
          "ownership": "",
          "details": {
              "image": "https://www.munchmuseet.no/globalassets/foto-munch/munch-photo_einar_aslaksen-01210_f_web.jpg?w=800",
              "consyear": "2021",
              "consfunction": "Museum",
              "closyear": "",
              "closfunction": "",
              "related": ["Munchmuseet", "Edvard Munch"],
              "links": [],
          }
     },
     {
          "name": "Arbeiderpartiet",
          "construct": "Legal Entity",
          "type": "Political Party",
          "status": "Active",
          "ownership": "",
          "details": {
              "description": "Arbeiderpartiet (Labour Party) is a social democratic political party in Norway. It is positioned on the centre-left of the political spectrum, and is led by Jonas Gahr Støre.<br>Its representants at the parliament voted fully <a href=\"d-r-i/ng-v.html\" class=\"modal-link\">in favor of a new building for the National Museum</a>, and <a href=\"d-r-i/ng-v.html\" class=\"modal-link\">against the use of the old National Gallery as a continued venue for the display of the national collections</a>.",
              "image": "https://upload.wikimedia.org/wikipedia/de/thumb/1/1f/Arbeiderpartiet-Logo.svg/1024px-Arbeiderpartiet-Logo.svg.png",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Jonas Gahr Støre", "Trond Giske"],
              "links": [],
          }
     },
     {
          "name": "Høyre",
          "construct": "Legal Entity",
          "type": "Political Party",
          "status": "Active",
          "ownership": "",
          "details": {
              "description": "Høyre (The Right) is a liberal-conservative political party in Norway. <br>Its representants at the parliament voted <a href=\"d-r-i/ng-v.html\" class=\"modal-link\">in favor of a new building for the National Museum</a>, and <a href=\"d-r-i/ng-v.html\" class=\"modal-link\">against the use of the old National Gallery as a continued venue for the display of the national collections</a>.",
              "image": "https://upload.wikimedia.org/wikipedia/de/thumb/f/fc/H%C3%B8yre-Logo.svg/1920px-H%C3%B8yre-Logo.svg.png",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": [],
              "links": [],
          }
     },
     {
          "name": "Senterpartiet",
          "construct": "Legal Entity",
          "type": "Political Party",
          "status": "Active",
          "ownership": "",
          "details": {
              "description": "",
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": [],
              "links": [],
          }
     },
     {
          "name": "Fremskrittspartiet",
          "construct": "Legal Entity",
          "type": "Political Party",
          "status": "Active",
          "ownership": "",
          "details": {
              "description": "",
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": [],
              "links": [],
          }
     },
     {
          "name": "Sosialistisk Venstreparti",
          "construct": "Legal Entity",
          "type": "Political Party",
          "status": "Active",
          "ownership": "",
          "details": {
              "description": "",
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": [],
              "links": [],
          }
     },
     {
          "name": "Venstre",
          "construct": "Legal Entity",
          "type": "Political Party",
          "status": "Active",
          "ownership": "",
          "details": {
              "description": "",
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": [],
              "links": [],
          }
     },
     {
          "name": "Kristelig Folkeparti",
          "construct": "Legal Entity",
          "type": "Political Party",
          "status": "Active",
          "ownership": "",
          "details": {
              "description": "",
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": [],
              "links": [],
          }
     },
     {
          "name": "Gamle Munch",
          "construct": "Legal Entity",
          "type": "Association",
          "status": "Active",
          "ownership": "",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": [],
              "links": [],
          }
     },
     {
          "name": "Munchmuseet",
          "construct": "Legal Entity",
          "type": "Institution",
          "status": "Active",
          "ownership": "City of Oslo",
          "details": {
              "image": "https://admin.itsnicethat.com/images/VRXtmi4Ds3UgnREO4FseaMhOsxM=/186780/format-webp%7Cwidth-2880/munch_museum_identity_north_graphic_design_itsnicethat1.jpg",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Munch Plass 1"],
              "links": [],
          }
     },
     {
          "name": "Stenersens Samling",
          "construct": "Given Name",
          "type": "Art Collection",
          "status": "Active",
          "ownership": "City of Oslo",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": [],
              "links": ["Munchmuseet"],
          }
     },
     {
          "name": "Munch Arven",
          "construct": "Given Name",
          "type": "Art Collection",
          "status": "Active",
          "ownership": "City of Oslo",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": [],
              "links": ["Munchmuseet"],
          }
     },
     {
          "name": "Rolf Stenersen",
          "construct": "Person",
          "type": "Art Collector",
          "status": "Deceased",
          "ownership": "",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": [],
              "links": ["Munchmuseet"],
          }
     },
     {
          "name": "Ludvig O. Ravensberg",
          "construct": "Person",
          "type": "Art Collector",
          "status": "Deceased",
          "ownership": "",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Munchmuseet"],
              "links": [],
          }
     },
     {
          "name": "Amaldus Nielsen",
          "construct": "Person",
          "type": "Art Collector",
          "status": "Deceased",
          "ownership": "",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Munchmuseet"],
              "links": [],
          }
     },
     {
          "name": "Heinrich Ernst Schirmer",
          "construct": "Person",
          "type": "Architect",
          "status": "Deceased",
          "ownership": "",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Nasjonalgalleriet"],
              "links": [],
          }
     },
     {
          "name": "Edvard Munch",
          "construct": "Person",
          "type": "Artist",
          "status": "Deceased",
          "ownership": "",
          "details": {
              "description": "Edvard Munch (1863-1944) is generally considered by Norwegians to be the country's most important artist. A <a href=\"#\" class=\"modal-link\" data-name=\"Toyengata 53\">museum dedicated solely to his work was first opened in 1963</a>, then subsequently replaced by a new one in 2021.",
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": [],
              "links": [],
          }
     },
     {
          "name": "Stiftelsen Kunstindustrimuseet",
          "construct": "Legal Entity",
          "type": "Foundation",
          "status": "Active",
          "ownership": "",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Nasjonalmuseet"],
              "links": [],
          }
     },
     {
          "name": "Acquisition Committee (National Museum)",
          "construct": "Legal Entity",
          "type": "Committee",
          "status": "Active",
          "ownership": "Nasjonalmuseet",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Nasjonalmuseet"],
              "links": [],
          }
     },
     {
          "name": "Board (National Museum)",
          "construct": "Legal Entity",
          "type": "Committee",
          "status": "Active",
          "ownership": "Nasjonalmuseet",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Nasjonalmuseet"],
              "links": [
                { "text": "Board Composition", "url": "#" }
              ],
          }
     },
     {
          "name": "Trond Giske",
          "construct": "Person",
          "type": "Politician",
          "status": "Active",
          "ownership": "",
          "details": {
              "description":"Trond Giske was the main advocate for a relocation of Oslo's cultural institutions to the shoreline. As a cabinet member he several times faced accusations of cronyism by having appointed little-qualified close friends to well paid government jobs. He finally withdrew from politics in 2020 following accusations of widespread sexual harassment from multiple women.",
              "image": "https://www.stortinget.no/Personimages/PersonImages_ExtraLarge/TG_ekstrastort.jpg",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Arbeiderpartiet", "Nasjonalmuseet"],
              "links": [],
          }
     },
     {
          "name": "Jonas Gahr Støre",
          "construct": "Person",
          "type": "Politician",
          "status": "Active",
          "ownership": "",
          "details": {
              "description":"Jonas Gahr Støre is currently the prime minister in Norway",
              "image": "https://www.regjeringen.no/globalassets/departementene/smk/statsministerjonasgahrstore/smin.jpg?preset=article&v=306870557",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Arbeiderpartiet"],
              "links": [],
          }
     },
     {
          "name": "Fjordbyen",
          "construct": "Given Name",
          "type": "Project",
          "status": "In Development",
          "ownership": "",
          "details": {
              "description":"Fjordbyen (Fjord City) is the official name of an urban redevelopment project aiming at transforming the waterfront and former industrial harbour of Oslo into a new district.",
              "image": "https://upload.wikimedia.org/wikipedia/commons/a/a6/Fjordbyen.gif",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Vestbanetomta", "Filipstad (East)", "Filipstad (West)", "Aker Brygee", "Tjuvholmen", "Bjørvika", "Sørenga", "Grønlikaia"],
              "links": [],
          }
     },
     {
          "name": "Vestbanetomta",
          "construct": "",
          "type": "Site",
          "status": "Developped",
          "ownership": "Statsbygg",
          "details": {
              "description":"Vestbanetomta was the site of the New National Museum of Norway. The official address of the site is Brynjulf Bulls plass 1.",
              "image": "https://images.gfx.no/1000x/2350/2350679/PBE%2520Oslo%2520kommune%2520plansaker.jpg",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Brynjulf Bulls plass 1", "Nasjonalmuseet", "Fjordbyen"],
              "links": [],
          }
     },
     {
          "name": "Filipstad (West)",
          "construct": "",
          "type": "Site",
          "status": "In Development",
          "ownership": "City of Oslo",
          "details": {
              "description":"Filipstad is the next main area to be developped as part of the Fjord City project.",
              "image": "https://images.squarespace-cdn.com/content/6124a4fd689c806393eb581b/1708942925727-8Z1VED3OISXIBEHMLNZY/fugleperspektiv+mot+sentrum+filipstad+foto+Oslo+Drone+og+Foto.jpg?format=1500w&content-type=image%2Fjpeg",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Fjordbyen"],
              "links": [],
          }
     },
     {
          "name": "Filipstad (East)",
          "construct": "",
          "type": "Site",
          "status": "Developped",
          "ownership": "Storebrand Filipstad Brygge AS",
          "details": {
              "description":"Filipstad East is a neighborhood developped by Storebrand ASA as part of the larger Fjord City redevelopment project.",
              "image": "https://ne.no/wp-content/uploads/filipstad-brygge.jpeg",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Storebrand ASA", "Fjordbyen"],
              "links": [],
          }
     },
     {
          "name": "Tjuvholmen",
          "construct": "",
          "type": "Site",
          "status": "Developped",
          "ownership": "Tjuvholmen Infrastruktur AS",
          "details": {
              "description":"Tjuvholmen is a fully private neighborhood developped as part of Fjord City. The city of Oslo sold the land to private developpers Selvaag Gruppen AS and Aspelin Ramm-Gruppen AS in 2003.",
              "image": "https://www.ourwaytours.com/wp-content/uploads/2020/07/tjuvholmen.jpg",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Stiftelsen Tjuvholmen Kultureiendom", "Fjordbyen"],
              "links": [],
          }
     },
     {
          "name": "Aker Brygge",
          "construct": "",
          "type": "Site",
          "status": "Developped",
          "ownership": "Aker Brygge Uteareal AS",
          "details": {
              "description":"Aker Brygge is the first neighborhood developped as part of Fjord City.",
              "image": "https://media.istockphoto.com/id/628986248/photo/scandinavian-architecture-exterior-building-in-aker-brygge.jpg?s=612x612&w=0&k=20&c=p4w68DwECQxarvLaCY3ei9W-IAkUlQu9iLF7_VDG3z4=",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Fjordbyen"],
              "links": [],
          }
     },
     {
          "name": "Bjørvika",
          "construct": "",
          "type": "Site",
          "status": "Developped",
          "ownership": "Hav Eiendom",
          "details": {
              "description":"Bjørvika is one of the main neighborhoods of Fjord City, and is where the new Munchmuseum, the new Opera and the new Public Library are located.",
              "image": "https://oslobyleksikon.no/images/thumb/7/7c/Bj%C3%B8rvika.jpg/748px-Bj%C3%B8rvika.jpg",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Munchmuseet", "Fjordbyen"],
              "links": [],
          }
     },
     {
          "name": "Sørenga",
          "construct": "",
          "type": "Site",
          "status": "Developped",
          "ownership": "",
          "details": {
              "description":"Sørenga is a new neighborhood developped as part of Fjord City.",
              "image": "https://media.snl.no/media/150279/standard_compressed_NTB_r6NxFEHr6gs.jpg",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Fjordbyen"],
              "links": [],
          }
     },
     {
          "name": "Grønlikaia",
          "construct": "",
          "type": "Site",
          "status": "In Development",
          "ownership": "Bjørvika Utvikling AS",
          "details": {
              "description":"Grønlikaia is a future neighborhood of Fjord City, currently under development.",
              "image": "https://haveiendom.no/wp-content/uploads/Gronlikaia-oversikt-Rodeo-arkitekter-utsnitt-802x650.jpg",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Fjordbyen"],
              "links": [],
          }
     },
     {
          "name": "Storebrand ASA",
          "construct": "Legal Entity",
          "type": "Firm",
          "status": "Active",
          "ownership": "",
          "details": {
              "description": "Storebrand ASA is a holding company. It owns among others Storebrand Filipstad Brygge AS",
              "image": "https://photos.watchmedier.dk/Images/article13241102.ece/ALTERNATES/schema-16_9/doc7hbz61nk3w618gjt4buk.jpg",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Filipstad (East)"],
              "links": [],
          }
     },
     {
          "name": "Stiftelsen Tjuvholmen Kultureiendom",
          "construct": "Legal Entity",
          "type": "Foundation",
          "status": "Active",
          "ownership": "",
          "details": {
              "description":"Stiftelsen Tujuvholmen Kultureiendom is responsible for the public art on display in the neighborhood of Tjuvholmen.",
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Tjuvholmen", "Fjordbyen"],
              "links": [],
          }
     },
     {
          "name": "Norwegian Property ASA",
          "construct": "Legal Entity",
          "type": "Firm",
          "status": "Active",
          "ownership": "Geveran Trading Company Ltd",
          "details": {
              "description": "Norwegian Property ASA is a holding company. It owns among other Aker Brygge Uteareal AS.",
              "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe6ts1WgbAm2gFwawzEP6CFIQc9cqOpMBrFA&s",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Aker Brygge", "Geveran Trading Company Ltd", "C.K. Ltd."],
              "links": [],
          }
     },
     {
          "name": "Oslo Havn Kf",
          "construct": "Legal Entity",
          "type": "",
          "status": "Active",
          "ownership": "City of Oslo",
          "details": {
              "description": "",
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Hav Eiendom AS", "Fjordbyen"],
              "links": [],
          }
     },
     {
          "name": "Hav Eiendom AS",
          "construct": "Legal Entity",
          "type": "Firm",
          "status": "Active",
          "ownership": "Oslo Havn Kf",
          "details": {
              "description": "Hav Eiendom AS is a firm owned by the City of Oslo. It is the main public actor responsible for the Fjord City redevelopment project. HAV Eiendom AS owns in turn Bjørvika Utvikling AS (66%).",
              "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzA_GQ9BLZR49wyfIScJ4weeKIFZFkp0HNunTzoAkZdEmD0DCH2WzKYFQqzRmClLSeiAU&usqp=CAU",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Fjordbyen"],
              "links": [],
          }
     },
     {
          "name": "Geveran Trading Company Ltd",
          "construct": "Legal Entity",
          "type": "Holding Company",
          "status": "Active",
          "ownership": "C.K. Ltd.",
          "details": {
              "description": "Private holding company registered in Cyprus. Owns Norwegian Property ASA.",
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Norwegian Property ASA"],
              "links": [],
          }
     },
     {
          "name": "C.K. Ltd.",
          "construct": "Legal Entity",
          "type": "Trust",
          "status": "Active",
          "ownership": "Fredriksen Family",
          "details": {
              "description": "Private holding company based in Jersey. Manages Geveran Trading Company Ltd.",
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["John Fredriksen", "Geveran Trading Company Ltd"],
              "links": [],
          }
     },
     {
          "name": "Paweco Trust",
          "construct": "Legal Entity",
          "type": "Trust",
          "status": "Active",
          "ownership": "Wilhelmsen Family",
          "details": {
              "description": "Trust based in Bermuda. Owns Awas Holding AS.",
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Peter Preben Wilhelmsen", "Awas Holding AS"],
              "links": [],
          }
     },
     {
          "name": "John Fredriksen",
          "construct": "Person",
          "type": "Businessman",
          "status": "Active",
          "ownership": "",
          "details": {
              "image": "https://images.dn.no/image/Q2JJVlNEdDROdDJOcnhrL0x3dW1rOHIweWJtbG4ydzZiSzBubDZVQ3BuVT0=/nhst/binary/20a06fbc0f815a5a92d9cda5bf912b98?image_version=640",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["C.K. Ltd.", "Geveran Trading Company Ltd", "The Fredriksen Family Collection", "Norwegian Property ASA"],
              "links": [],
          }
     },
     {
          "name": "Peter Preben Wilhelmsen",
          "construct": "Person",
          "type": "Businessman",
          "status": "Active",
          "ownership": "",
          "details": {
              "image": "https://images.dngroup.com/image/eyJ3Ijo5ODAsImsiOiJiMjVlOWM5YTlmOTFkYjRjNjQwOTdjYzBmOGJkYzliMCIsImYiOiJ3ZWJwIiwiY3JvcCI6WzE3LDAsMTU2OSwxMDQ2XSwiciI6MS41LCJvIjoiZG4ifQ==",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Paweco Trust", "Awas Holding AS"],
              "links": [],
          }
     },
     {
          "name": "Awas Holding AS",
          "construct": "Legal Entity",
          "type": "Holding Company",
          "status": "Active",
          "ownership": "Paweco Trust",
          "details": {
              "description":"Awas Holding AS is a private holding company. It owns among others Linstow AS, which is responsible for developments within the Fjord City project. Awas Holding AS is in turn part of the Paweco Trust group.",
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Linstow AS", "Paweco Trust"],
              "links": [],
          }
     },
    {
          "name": "Linstow AS",
          "construct": "Legal Entity",
          "type": "Holding Company",
          "status": "Active",
          "ownership": "Paweco Trust",
          "details": {
              "description":"Linstow AS is a private firm responsible for developments within the Fjord City project. It owned by Awas Holding AS",
              "image": "https://www.iwcr.lv/wp-content/uploads/2018/10/linstow-logo-1.jpg",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Awas Holding AS", "Paweco Trust"],
              "links": [],
          }
     },
  ]
};


const tableContent = document.getElementById("table-content");
const tableButtons = document.querySelectorAll("th button");
const searchInput = document.getElementById("search");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const modalClose = document.getElementById("modal-close");

// Create row function, excluding the details object
const createRow = (obj) => {
    const row = document.createElement("tr");
    const objKeys = Object.keys(obj).filter(key => key !== "details"); // Exclude details

    objKeys.map((key) => {
        const cell = document.createElement("td");
        cell.setAttribute("data-attr", key);
        cell.innerHTML = obj[key];
        row.appendChild(cell);
    });
    row.addEventListener("click", () => openModal(obj));
    return row;
};

// Function to get table content
const getTableContent = (data) => {
    tableContent.innerHTML = ''; // Clear existing content
    data.map((obj) => {
        const row = createRow(obj);
        tableContent.appendChild(row);
    });
};

// Array to store modal history
let modalHistory = [];

// Function to open modal and save history
const openModal = (obj) => {
    const { name, construct, type, status, ownership, details } = obj;

    // Save the current modal content (if any) to history before changing it
    if (modalContent.innerHTML.trim() !== "") {
        modalHistory.push(modalContent.innerHTML);  // Save current content to history
    }

    // Build modal content dynamically
    let content = `<br><p>${name}</p><br>`;
    
    if (details.image) {
        content += `<img src="${details.image}" alt="${name}"/>`;
    } else {
        content += `<p>NO IMAGE</p><br>`;
    }

    content += `<table class="modal-table">`;
    if (construct) content += `<tr><td>Construct</td><td>${construct}</td></tr>`;
    if (type) content += `<tr><td>Type</td><td>${type}</td></tr>`;
    if (status) content += `<tr><td>Status</td><td>${status}</td></tr>`;
    if (ownership) content += `<tr><td>Ownership</td><td>${ownership}</td></tr>`;
    if (details.consyear) content += `<tr><td>Construction Year</td><td>${details.consyear}</td></tr>`;
    if (details.consfunction) content += `<tr><td>Function</td><td>${details.consfunction}</td></tr>`;
    if (details.closyear) content += `<tr><td>Date of Closure</td><td>${details.closyear}</td></tr>`;
    if (details.closfunction) content += `<tr><td>New Function</td><td>${details.closfunction}</td></tr>`;
    content += `</table><br>`;

    // Add description
    if (details.description) {
        content += `<p class="modal-description">${details.description}</p><br>`;
    }

    // Relevant Information
    if (details.links && details.links.length > 0) {
        content += `<p>Relevant Information: ${details.links.map(link => 
            `<a class="relevant-information" href="${link.url}">${link.text}</a>`).join(", ")}</p>`;
    }

    // Related entries
    if (details.related && details.related.length > 0) {
        content += `<br><p>Related Entries: ${details.related.map(item => 
            `<span class="related-item" data-name="${item}">${item}</span>`).join(", ")}</p>`;
    }

    // Set modal content to the new content
    modalContent.innerHTML = content;

    // Show modal
    modal.style.display = "block";

    // Add click events to related items for modal navigation
    const relatedItems = document.querySelectorAll(".related-item");
    relatedItems.forEach(item => {
        item.addEventListener("click", (e) => {
            const relatedName = e.target.getAttribute("data-name");
            const relatedObj = response.pokedata.find(p => p.name === relatedName);
            openModal(relatedObj);
        });
    });

};

// Back button functionality
const backLink = document.getElementById("back-link");
backLink.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default behavior

    // Check if there's any previous modal content in the history
    if (modalHistory.length > 0) {
        const previousContent = modalHistory.pop(); // Get the last modal content
        modalContent.innerHTML = previousContent; // Restore previous modal content
    } else {
        // If no history exists, reload the page
        window.location.reload(); // This will take you back to the main table
    }
});





// Function to add an arrow to the button
const updateButtonWithArrow = (button, direction) => {
    // Clear the previous arrow from all buttons
    tableButtons.forEach(btn => {
        const originalText = btn.innerText.replace(/[\u2191\u2193]/g, ''); // Remove arrows
        btn.innerText = originalText;
    });

    // Update the clicked button with the appropriate arrow
    const arrow = direction === "asc" ? "↑" : "↓";
    button.innerText += ` ${arrow}`;
};

// Sorting function remains the same but now includes updateButtonWithArrow
const sortData = (data, param, direction = "asc") => {
    tableContent.innerHTML = '';
    const sortedData =
        direction == "asc"
            ? [...data].sort(function (a, b) {
                if (a[param] < b[param]) {
                    return -1;
                }
                if (a[param] > b[param]) {
                    return 1;
                }
                return 0;
            })
            : [...data].sort(function (a, b) {
                if (b[param] < a[param]) {
                    return -1;
                }
                if (b[param] > a[param]) {
                    return 1;
                }
                return 0;
            });

    getTableContent(sortedData);
};

// Function to reset button sorting directions
const resetButtons = (event) => {
    [...tableButtons].map((button) => {
        if (button !== event.target) {
            button.removeAttribute("data-dir");
        }
    });
};

// Function to filter data based on search input
const filterData = (searchTerm) => {
    const filteredData = response.pokedata.filter(obj => {
        // Check if any object property contains the search term
        const matchFound = Object.keys(obj).some(key => {
            if (typeof obj[key] === 'string') {
                return obj[key].toLowerCase().includes(searchTerm);
            } else if (typeof obj[key] === 'object') {
                // Check the 'details' object and related properties for the search term
                return Object.values(obj.details).some(val => 
                    typeof val === 'string' && val.toLowerCase().includes(searchTerm)
                );
            }
            return false;
        });
        return matchFound;
    });

    // Update the table with filtered data
    getTableContent(filteredData);
};

// Event listeners
window.addEventListener("load", () => {
    getTableContent(response.pokedata);

    [...tableButtons].map((button) => {
        button.addEventListener("click", (e) => {
            resetButtons(e);
            const currentDir = e.target.getAttribute("data-dir") || "asc"; // Default to ascending
            const newDir = currentDir === "asc" ? "desc" : "asc"; // Toggle direction

            sortData(response.pokedata, e.target.id, newDir);
            e.target.setAttribute("data-dir", newDir);

            // Update button with arrow
            updateButtonWithArrow(e.target, newDir);
        });
    });

    // Search functionality
    searchInput.addEventListener("input", (e) => {
        const searchTerm = e.target.value.toLowerCase();
        filterData(searchTerm);
    });
});
