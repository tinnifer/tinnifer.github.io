const fs = require('fs');

const dexdata = `001 	Bulbasaur 	Bulba|saur GRASS 	POISON 	Pallet Town (Player House Postgame)/Viridian River (static)/ Cerulean trade 	1
002 	Ivysaur 	Ivy|saur GRASS 	POISON 	Evolve Bulbasaur 	1
003 	Venusaur 	Venu|saur GRASS 	POISON 	Evolve Venusaur 	1
004 	Charmander 	Char|mander FIRE 		Pallet Town (Oak and your Sister) /Viridian River (static)/ Cerulean trade 	1
005 	Charmeleon  Char|meleon	FIRE 		Evolve Charmander 	1
006 	Charizard 	Char|izard FIRE 	FLYING 	Evolve Charmeleon 	1
007 	Squirtle 	Squir|tle WATER 		Pallet Town (Oak and your Sister) /Viridian River (static)/ Cerulean trade 	1
008 	Wartortle 	War|tortle WATER 		Evolve Squirtle 	1
009 	Blastoise 	Blas|toise WATER 		Evolve Wartortle 	1
010 	Caterpie Cater|pie	BUG 		Routes 2, 24, 30, 31 / Cerulean Cape / Ilex Forest / National Park / Viridian Forest 	1
011 	Metapod Meta|pod	BUG 		Route 24/ Cerulean Cape/ Viridian Forest / Secret Forest/ Viridian River 	1
012 	Butterfree Butter|free	BUG 	FLYING 	Routes 30, 31 / Bond Bridge / Ilex Forest / National Park / Secret Forest 	1
013 	Weedle Wee|dle	BUG 	POISON 	Routes 2, 24 / Cerulean Cape / National Park / Viridian Forest 	1
014 	Kakuna Kak|una	BUG 	POISON 	Routes 24, 30, 31 / Cerulean Cape / National Park / Secret Forest / Viridian Forest / Viridian River 	1
015 	Beedrill  Bee|drill 	BUG 	POISON 	Ilex Forest / National Park / Secret Forest/ Viridian Forest (static) 	1
016 	Pidgey Pid|gey	NORMAL 	FLYING 	Routes 1, 2, 3, 5, 6, 7, 8, 12, 13, 14, 15, 24 / Celadon City / Cerulean Cape / Viridian Forest / Secret Garden 	1
017 	Pidgeotto Pidge|otto	NORMAL 	FLYING 	Routes 13, 14, 15, 21, 23, 29, 30, 31, 34, 35, 36, 37, 43 / Berry Forest / Bond Bridge / Celadon City / Chrono Island / Viridian River / Lake of Rage / Secluded Path / Secret Forest 	1
018 	Pidgeot Pid|geot	NORMAL 	FLYING 	Route 23 	1
019 	Rattata Rat|tata	NORMAL 		Route 1, 2, 4, 5, 9, 16, 17, 18, 21, 22, 33/ Secret Garden (Night) / Cerulean City/ Celadon Sewers/ Pokemon Mansion 	1
020 	Raticate Rat|icate	NORMAL 		Route 9, 16, 17, 18, 21, 23, 27, 29, 32, 33, 34, 42/ Burned Tower/ Celadon Sewers/ Mt. Mortar/ Pokemon Mansion/ Power Tower/ Secluded Path/ Tohjo Falls/ Union Cave/ Viridian River 	1
021 	Spearow  Spear|ow	NORMAL 	FLYING 	Route 3, 4, 9, 10, 11, 16, 17, 18, 22, 23 / Boon Island / Kindle Road / Secluded Path 	1
022 	Fearow Fear|ow	NORMAL 	FLYING 	Routes 9, 17, 18, 23, 29, 33, 42, 46 / Boon Island / Brine Road / Kindle Road / Safari Zone (Area 5) 	1
023 	Ekans Ek|ans	POISON 		Routes 4, 8, 9, 10, 11, 23 	1
024 	Arbok Ar|bok	POISON 		Routes 23, 27, 32, 33 / Cerulean Cave 1 / Victory Road 	1
025 	Pikachu Pika|chu	ELECTRIC 		Routes 6, 7 / Power Plant / Secret Forest / Evolve Pichu (Lv15) 	1
026 	Raichu Rai|chu	ELECTRIC 		Cerulean Cave 1&3 / Evolve Pikachu (Thunder Stone) 	1
027 	Sandshrew Sand|shrew	GROUND 		Routes 4, 8, 9, 10, 23 / Mt. Moon 	1
028 	Sandslash Sand|slash	GROUND 		Routes 23, 27 / Cerulean Cave 1 / Union Cave / Victory Road 	1
029 	Nidoranf Nido|ran	POISON 		Route 3, 9, 22 / Safari Zone (Areas 1-4) 	1
030 	Nidorina Nido|rina	POISON 		Routes 9, 35, 36 / Safari Zone (Areas 1-4) 	1
031 	Nidoqueen Nido|queen	POISON 	GROUND 	Evolve Nidorina 	1
032 	Nidoranm Nido|ran	POISON 		Route 3, 9, 22 / Safari Zone (Areas 1-4) 	1
033 	Nidorino  Nido|rino	POISON 		Routes 9, 35, 36 / Safari Zone (Areas 1-4) 	1
034 	Nidoking Nido|king	POISON 	GROUND 	Evolve Nidorino 	1
035 	Clefairy Cle|fairy	FAIRY 		Mt Moon (dark)/ Celadon Game Corner/ Evolve Ceffa (Lv 15) 	1
036 	Clefable Cle|fable	FAIRY 		Cerulean Cave 3/ Evolve Clefairy (Moon Stone) 	1
037 	Vulpix Vul|pix	FIRE 		Route 7, 8, 36, 37 / Pokémon Mansion (Floors 1-3) 	1
038 	Ninetales Nine|tales	FIRE 		Evolve Vulpix 	1
039 	Jigglypuff Jiggly|puff	NORMAL 	FAIRY 	Route 5 / Evolve Igglybuff (Lv 15) 	1
040 	Wigglytuff Wiggly|tuff	NORMAL 	FAIRY 	Routes 34, 46 / Cerulean Cave 2 / Evolve Jigglypuff (Moon Stone) 	1
041 	Zubat Zu|bat	POISON 	FLYING 	Routes 2, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 21, 22, 23 (Night) / Celadon City (Night) / Mt. Moon / Rock Tunnel / Viridian Forest 	1
042 	Golbat Gol|bat	POISON 	FLYING 	Routes 9, 13, 14, 15, 17, 18, 21, 23, 30, 31, 32, 33, 42, 43 (Night) / Cerulean Cave / Dark Cave / Ilex Forest / Mt. Mortar / Pokémon Tower / Rock Tunnel / Seafoam Islands / Slowpoke Well / Sky Pillar / Tohjo Falls / Union Cave / Victory Road 	1
043 	Oddish Odd|ish	GRASS 	POISON 	Route 5, 6, 7, 12, 13, 14, 15, 24 / Cerulean Cape / Secret Forest 	1
044 	Gloom Gloo|oom	GRASS 	POISON 	Routes 6 (night), 12, 13, 14, 15 / Berry Island / Bond Bridge / Boon Island / Cerulean Cave 1 / Ilex Forest 	1
045 	Vileplume Vile|plume	GRASS 	POISON 	Evolve Gloom (Leaf Stone) 	1
046 	Paras Par|as	BUG 	GRASS 	Mt. Moon / National Park / Safari Zone (Areas 2&3) / Viridian Forest (Mushrooms) 	1
047 	Parasect Para|sect	BUG 	GRASS 	Mt. Moon / National Park / Safari Zone (Areas 2&3)/ Cerulean Cave 1&2/ Ilex Forest 	1
048 	Venonat Veno|nat	BUG 	POISON 	Routes 9, 11, 12, 13, 14, 15 / Berry Forest / National Park / Safari Zone (Areas 1-4) 	1
049 	Venomoth Veno|moth	BUG 	POISON 	Routes 12 (Morning), 14, 18, 43 (Night) / Berry Forest / Cerulean Cave (1&2) / Safari Zone (Areas 1-4) / Secret Forest (Night) 	1
050 	Diglett Dig|lett	GROUND 		Diglett Cave / Safari Zone (Area 5) 	1
051 	Dugtrio Dug|trio	GROUND 		Diglett Cave 	1
052 	Meowth Meow|owth	NORMAL 		Routes 3, 16 (Night), 5, 6, 7, 8, 9, 11 / Boon Island / Celadon City (Night) / Kindle Road / Treasure Beach / Viridian Forest (Morning/Night) 	1
053 	Persian Per|sian	NORMAL 		Routes 9, 16 (Night) / Bond Bridge / Boon Island / Cerulean Cave 2 / Kindle Road / Safari Zone (Areas 1-4, Night) 	1
054 	Psyduck Psy|duck 	WATER 		Routes 4, 6, 7, 10, 12, 13, 14, 15, 17, 19, 22, 23, 24, 35 / Berry Forest / Boon Island / Chrono Island / Cerulean Cape / Cerulean City / Pallet Town / Ruins of Alph / Safari Zone (Areas 1-5) / Seafoam Islands (2-4) / Secluded Path / Treasure Beach / Vermillion City / Viridian River 	1
055 	Golduck  Gol|duck	WATER 		Route 35/ Safari Zone (All Areas)/ Cerulean Cave 2/ Seamfoam 3&4/ Brine Road/ Berry Forest 	1
056 	Mankey Man|key	FIGHTING 		Routes 3, 4, 6, 9, 22, 23 / Rock Tunnel 	1
057 	Primeape Prime|ape	FIGHTING 		Routes 9, 23, 42 	1
058 	Growlithe Grow|lithe	FIRE 		Routes 7, 8, 36, 37 / Pokémon Mansion 	1
059 	Arcanine Arca|nine	FIRE 		Evolve Growlithe (Fire Stone) 	1
060 	Poliwag Poli|wag	WATER 		Routes 2, 4, 7 (Night) / Routes 6, 10, 11, 13, 14, 15, 17, 19, 20, 21, 22, 23, 24, 30, 31, 35, 43, 44, 45 (Anytime) / Blackthorn City / Cinnabar Island / Cerulean Cape / Cerulean Cave 2 / Cerulean City / Crimson City / Ilex Forest / Mt. Silver / Pallet Town / Ruins of Alph / Safari Zone (All Areas) / Secluded Path / Treasure Beach / Vermillion City / Violet City / Viridian River 	1
061 	Poliwhirl Poli|whirl	WATER 		Routes 6, 8 (Night) / Routes 14, 15, 22, 23, 24, 30, 35, 43, 44, 45 / Blackthorn City / Cerulean Cape / Crimson City / Ilex Forest / Mt. Silver / Pallet Town / Safari Zone (Areas 1-4, Night) / Violet City 	1
062 	Poliwrath Poli|wrath	WATER 	FIGHTING 	Routes 30, 31, 35, 43 / Ilex Forest / Mt. Silver / Violet City/ Evolve Poliwhirl (Water Stone) 	1
063 	Abra Ab|ra	PSYCHIC 		Route 24 / Cerulean Cape / Game Corner 	1
064 	Kadabra Ka|dabra	PSYCHIC 		Routes 34, 35 / Cerulean Cave 1&2 	1
065 	Alakazam Ala|kazam	PSYCHIC 		Cerulean Cave 1&2/ Evolve Kadabra (Lv40) 	1
066 	Machop Ma|chop	FIGHTING 		Rock Tunnel / Victory Road 	1
067 	Machoke Ma|choke	FIGHTING 		Cerulean Cave 2, Mt. Ember, Mt. Mortar, Rock Tunnel, Victory Road 	1
068 	Machamp Ma|champ 	FIGHTING 		Mt. Mortar/ Evolve Machoke (Lv40) 	1
069 	Bellsprout Bell|sprout GRASS 	POISON 	Routes 5, 6, 7, 12, 13, 14, 24, 44 / Cerulean Cape 	1
070 	Weepinbell Weepin|bell	GRASS 	POISON 	Routes 12, 13, 14, 15, 30, 31, 32, 44 / Bond Bridge / Boon Island / Cerulean Cave 1 	1
071 	Victreebel Victree|bell	GRASS 	POISON 	Evolve Weepinbell (Leaf Stone) 	1
072 	Tentacool Tenta|cool	WATER 	POISON 	Routes 4, 10, 11, 12, 13, 17, 18, 19, 20, 21, 23, 27, 32, 34, 42 / Brine Road / Boon Island / Bond Bridge / Celadon Sewers / Cerulean City / Chrono Island / Cinnabar Island / Crimson City / Kin Island / Kindle Road / Knot Island / Resort Gorgeous / Secluded Path / Treasure Beach / Vermillion City / Water Labyrinth 	1
073 	Tentacruel Tenta|cruel 	WATER 	POISON 	Routes 4, 10, 11, 12, 17, 18, 19, 20, 21, 23, 27, 31, 34, 42 / Bond Bridge / Boon Island / Brine Road / Cerulean City / Chrono Island / Cinnabar Island / Crimson City / Kin Island / Kindle Road / Knot Island / Resort Gorgeous / Secluded Path / Vermillion City / Treasure Beach / Water Labyrinth 	1
074 	Geodude Geo|dude	ROCK 	GROUND 	Mt. Moon / Rock Tunnel/ Rock Smash 	1
075 	Graveler	Grave|ler 	ROCK 	GROUND 	Routes 23, 45 / Blackthorn City / Route 46 / Cerulean Cave 1 / Dark Cave / Mt. Ember / Mt. Mortar / Rock Tunnel / Union Cave / Victory Road 	1
076 	Golem Gol|em	ROCK 	GROUND 	Mt. Mortar/ Evolve Graveler (lv40) 	1
077 	Ponyta Pon|yta	FIRE 		Routes 17, 27 / Mt. Ember / Kindle Road 	1
078 	Rapidash Rapi|dash 	FIRE 		Route 27 / Cerulean Cave 1 / Kindle Road / Mt. Silver 	1
079 	Slowpoke Slow|poke 	WATER 	PSYCHIC 	Routes 4, 6, 10, 11, 12, 13, 14, 15, 17, 19, 22, 23, 24 / Cerulean Cape / Cerulean Cave 2 / Cerulean City / Chrono Island / Cinnabar Island / Crimson City / Boon Island / Dark Cave / Pallet Town / Ruins of Alph / Safari Zone (Areas 1-5) / Seafoam Islands 2-4 / Secluded Path / Slowpoke Well / Treasure Beach / Tohjo Falls / Vermillion City / Viridian River 	1
080 	Slowbro  Slow|bro	WATER 	PSYCHIC 	Bond Bridge / Cerulean Cave 2 / Safari Zone (Areas 1-5) / Seafoam 4 / Slowpoke Well / Tohjo Falls / Treasure Beach 	1
081 	Magnemite Magne|mite 	STEEL 	ELECTRIC 	Routes 9, 10, 23 / Celadon Sewers / Power Plant 	1
082 	Magneton Magne|ton	STEEL 	ELECTRIC 	Route 23 / Cerulean Cave 1 / Power Plant 	1
083 	Farfetchd Far|fetch'd 	NORMAL 	FLYING 	Route 13 / Secret Garden (Day) / Viridian River / Vermillion City (Trade) 	1
084 	Doduo Do|duo	NORMAL 	FLYING 	Routes 16, 17, 18, 27 / Safari Zone (Areas 2&4) 	1
085 	Dodrio Do|drio	NORMAL 	FLYING 	Route 27/ Cerulean Cave 1 & 2/ Mt. Silver 	1
086 	Seel See|eel	WATER 		Routes 19, 20, 23 / Cinnabar Island / Crimson City / Seafoam Islands / Treasure Beach 	1
087 	Dewgong Dew|gong	ICE 	WATER 	Route 23 / Crimson City / Seafoam 4 	1
088 	Grimer Gri|mer	POISON 		Routes 14, 17 (Night) / Route 15 (Anytime) / Celadon City / Celadon Sewers / Pokémon Mansion / Power Plant 	1
089 	Muk Mu|uk	POISON 		Routes 14, 17 (Night) / Route 15 (Anytime) / Celadon City / Celadon Sewers / Pokémon Mansion 	1
090 	Shellder Shell|der	WATER 		Routes 12, 13, 20, 21 (Underwater) / Routes 23, 27, 42 / Boon Island / Brine Road / Chrono Island / Crimson City / Kin Island / Kindle Road / Knot Island / Resort Gorgeous / Ruins of Alph / Secluded Path / Seafoam Islands / Vermillion City / Water Labyrinth 	1
091 	Cloyster Cloy|ster 	WATER 	ICE 	Routes 12, 13, 20 (Underwater) / Seafoam 4 	1
092 	Gastly Gas|tly	GHOST 	POISON 	Burned Tower / Pokémon Tower(F3-F4) 	1
093 	Haunter Haun|ter	GHOST 	POISON 	Burned Tower / Pokémon Tower (F3-F4) / Safari Zone (Areas 1-4, Night) 	1
094 	Gengar Gen|gar	GHOST 	POISON 	Pokémon Tower (F4)/ Evolve Haunter (Lv40) 	1
095 	Onix On|ix	ROCK 	GROUND 	Mt. Moon / Rock Tunnel / Union Cave / Victory Road 	1
096 	Drowzee Drow|zee	PSYCHIC 		Routes 11, 35 / Berry Forest / Pokemon Tower (F3-F4) 	1
097 	Hypno Hyp|no	PSYCHIC 		Routes 34, 35 (Night) / Berry Forest / Cerulean Cave 1 	1
098 	Krabby Krab|by 	WATER 		Routes 4, 10, 11, 12, 13, 17, 19, 20, 21, 34 / Brine Road / Cerulean Cave 2 / Cerulean City / Cinnabar island / Ruins of Alph / Vermillion City / Seafoam Islands / Secluded Path / Togepi Island / Treasure Beach 	1
099 	Kingler King|ler	WATER 		Route 20 (Underwater) / Route 34 / Cerulean Cave 2 / Seafoam Islands 4 / Treasure Beach 	1
100 	Voltorb Volt|orb 	ELECTRIC 		Routes 9, 10 / Power Plant 	1
101 	Electrode Elec|trode	ELECTRIC 		Cerulean Cave 2 / Power Plant B1-1 	1
102 	Exeggcute Exegg|cute	GRASS 	PSYCHIC 	Route 35 / Berry Forest / Safari Zone (Areas 1-4) 	1
103 	Exeggutor Exegg|utor	GRASS 	PSYCHIC 	Evolve Exeggcute (Leaf Stone) 	1
104 	Cubone Cub|one 	GROUND 		Route 5 / Pokemon Tower F3-F4 / Rock Tunnel 	1
105 	Marowak Maro|wak	GROUND 		Cerulean Cave 2 / Victory Road 	1
106 	Hitmonlee Hitmon|lee	FIGHTING 		Route 23 	1
107 	Hitmonchan Hitmon|chan	FIGHTING 		Route 23 	1
108 	Lickitung Licki|tung	NORMAL 		Route 44/ Safari Zone (Areas 1-3) / Safari Zone (Area 4, Morning) / Secret Garden (Night)/ Cerulean Cave 3 	1
109 	Koffing Kof|fing	POISON 		Celadon City / Pokémon Mansion 	1
110 	Weezing Wee|zing	POISON 		Burned Tower / Pokemon Mansion (F1-F3) 	1
111 	Rhyhorn Rhy|horn	GROUND 	ROCK 	Safari Zone (Areas 1-5) / Victory Road 	1
112 	Rhydon Rhy|don	GROUND 	ROCK 	Cerulean Cave 2 	1
113 	Chansey Chan|sey 	NORMAL 		Safari Zone (Areas 1-4) / Cerulean Cave 2/ Evolve Happiny (Oval Stone) 	1
114 	Tangela Tan|gela	GRASS 		Route 1, 21, 44 / Secret Garden / Treasure Beach 	1
115 	Kangaskhan Kangas|khan	NORMAL 		Safari Zone (Areas 2 and 4) 	1
116 	Horsea Hor|sea	WATER 		Routes 4, 10, 11, 12, 13, 17, 19, 20, 21 / Bond Bridge / Cerulean City / Cinnabar Island / Ruins of Alph / Vermillion City / Seafoam Islands 4 / Secluded Path / Treasure Beach / Water Labyrinth / Boon Island / Chrono Island / Brine Road / Kin Island / Laboratory / Resort Gorgeous 	1
117 	Seadra Sea|dra	WATER 		Routes 19, 20 / Cerulean Cave 2 / Cinnabar Island / Bond Bridge / Deep Sea / Laboratory / Seafoam Islands 4 / Treasure Beach 	1
118 	Goldeen Gol|deen 	WATER 		Routes 4, 6, 10, 11, 12, 17, 18, 22, 23, 24/ Cerulean Cape/ Cerulean Cave 2/ Cerulean City/ Crimson City/ Dark Cave/ Mt. Mortar/ Pallet Town/ Safari Zone/ Slowpoke Well/ Secluded Path/ Tohjo Falls/ Vermillion City/ Viridian River 	1
119 	Seaking Sea|king	WATER 		Routes 4, 10, 11, 12, 13, 17, 18, 20, 23 / Cerulean Cave 2 / Cerulean City / Crimson City / Dark Cave / Deep Sea / Mt. Mortar / Safari Zone (Areas 1-5) / Secluded Path / Tohjo Falls / Union Cave / Vermillion City / Viridian River 	1
120 	Staryu 	Star|yu WATER 		Routes 17, 21, 34 / Vermillion City / Ruins of Alph / Seafoam Islands 4 / Secluded Path 	1
121 	Starmie Star|mie	WATER 	PSYCHIC 	Seafoam Islands 4 	1
122 	MrMime Mr.|Mime	PSYCHIC 		Route 21 / Route 2 (Trade Abra)/ Evolve Mime Jr (knowing Mimic) 	1
123 	Scyther Scy|ther	BUG 	FLYING 	Safari Zone (Areas 1-4) / National Park / Game Corner 	1
124 	Jynx Jy|nx	ICE 	PSYCHIC 	Seafoam Islands (3&4) 	1
125 	Electabuzz Electa|buzz 	ELECTRIC 		Power Plant B1-1 & B1-2/ Evolve Elekid (Lv 25) 	1
126 	Magmar Mag|mar	FIRE 		Burned Tower / Mt. Ember/ Evolve Magby (Lv 25) 	1
127 	Pinsir Pin|sir	BUG 		National Park / Safari Zone / Game Corner 	1
128 	Tauros Tau|ros	NORMAL 		Safari Zone (Areas 3-4) 	1
129 	Magikarp Magi|karp 	WATER 		Most Bodies of Water (Any Rod) / Mt. Moon (Fisherman inside Pokemon Center) 	1
130 	Gyarados Gyara|dos	WATER 	FLYING 	Most Bodies of Water (Super Rod) / Routes 19, 20, 23 / Cinnabar Island / Crimson City / Lake of Rage / Treasure Beach 	1
131 	Lapras Lap|ras	WATER 	ICE 	Silph Co (gifted from Silph worker) / Union Cave (static) / Treasure Beach 	1
132 	Ditto Dit|to	NORMAL 		Route 34, 35 / Cerulean Cave 1, 2/ Pokémon Mansion (Basement) / Secret Garden (Night) 	1
133 	Eevee Ee|vee	NORMAL 		Secret Garden (Day) / Celadon City (grass)/ Celadon Condominiums (Top Floor, Gift) 	1
134 	Vaporeon Vapor|eon 	WATER 		Evolve Eevee (Water Stone) 	1
135 	Jolteon Jolt|eon 	ELECTRIC 		Evolve Eevee (Thunder Stone) 	1
136 	Flareon Flar|eon	FIRE 		Evolve Eevee (Fire Stone) 	1
137 	Porygon Pory|gon 	NORMAL 		Bill's House / Celadon Game Corner 	1
138 	Omanyte Oma|nyte	WATER 	ROCK 	Mt. Moon/ Cinnabar Island/ Rock Smash rocks (Fossil) [postgame] 	1
139 	Omastar Oma|star	WATER 	ROCK 	Evlove Omanyte 	1
140 	Kabuto Kabu|to	ROCK 	WATER 	Mt. Moon/ Cinnabar Island/ Rock Smash rocks (Fossil) [postgame] 	1
141 	Kabutops Kabu|tops	ROCK 	WATER 	Evolve Kabuto 	1
142 	Aerodactyl Aero|dactyl 	ROCK 	FLYING 	Pewter City Quest (Fossil) 	1
143 	Snorlax Snor|lax	NORMAL 		Routes 12, 16 (Static) / Route 23/ Evolve Munchlax (Lv 30) 	1
144 	Articuno Arti|cuno	ICE 	FLYING 	Seafoam Islands 	1
145 	Zapdos Zap|dos	ELECTRIC 	FLYING 	Power Plant 	1
146 	Moltres Mol|tres 	FIRE 	FLYING 	Mt. Ember 	1
147 	Dratini Dra|tini	DRAGON 		Blackthorn/Dragon's Den/Route 45/ Safari Zone/ CeladonCorner 	1
148 	Dragonair Dragon|air	DRAGON 		Blackthorn/ Dragon's Den/ Route 45/ Safari Zone 	1
149 	Dragonite Dragon|ite	DRAGON 	FLYING 	Dragon's Den/ Route 45 	1
150 	Mewtwo Mew|two	PSYCHIC 		Cerulean Cave 	1
151 	Mew Me|ew	PSYCHIC 		Viridian River (base on Karma) 	1
152 	Chikorita Chiko|rita	GRASS 		Fuchsia City /Viridian River (static)/ Goldenrod/ Newbark 	2
153 	Bayleef Bay|leef	GRASS 		Evolve Chikorita 	2
154 	Meganium Meg|anium	GRASS 		Evolve Bayleef 	2
155 	Cyndaquil Cynda|quil	FIRE 		Fuchsia City /Viridian River (static)/ Goldenrod/ Newbark 	2
156 	Quilava Quil|ava 	FIRE 		Evolve Cyndaquil 	2
157 	Typhlosion Typh|losion	FIRE 		Evolve Quilava 	2
158 	Totodile Toto|dile	WATER 		Fuchsia City /Viridian River (static)/ Goldenrod/ Newbark 	2
159 	Croconaw Croco|naw	WATER 		Evolve Totodile 	2
160 	Feraligatr Fera|gatr	WATER 		Evolve Croconaw 	2
161 	Sentret Sen|tret	NORMAL 		Route 2 	2
162 	Furret Fur|ret	NORMAL 		Route 29/ Chrono Island 	2
163 	Hoothoot Hoot|hoot	NORMAL 	FLYING 	Route 1, 2, 3, 4, 8, 11, 22, 36/ Viridian Forest (Night) 	2
164 	Noctowl Noct|owl 	NORMAL 	FLYING 	Route 29, 30, 31, 34, 35, 36, 37/ Secluded Path/ Secret Forest/ Viridian River/ Viridian Forest 	2
165 	Ledyba Led|yba	BUG 	FLYING 	Viridian Forest (Day) 	2
166 	Ledian Led|ian	BUG 	FLYING 	Route 29, 30, 31/ Secret Forest (Day) 	2
167 	Spinarak Spina|rak 	BUG 	POISON 	Viridian Forest (Webs), 	2
168 	Ariados Aria|dos 	BUG 	POISON 	Routes 29, 30, 31, 37 / Sky Pillar / Viridian Forest (Webs) 	2
169 	Crobat Cro|bat	POISON 	FLYING 	Evolve Golbat (lvl 40)/ Toh-jo Falls/ Union Cave 	2
170 	Chinchou Chin|chou 	WATER 	ELECTRIC 	Route 20, 27, 42/ Boon Island/ Brine Road/ Chrono Island/ Deep Sea/ Kin Island/ Kindle Road/ Knot Island/ Resort Gorgeous/ Water Labyrinth 	2
171 	Lanturn Lan|turn	WATER 	ELECTRIC 	Route 27, 42/ Boon Island/ Brine Road/ Chrono Island/ Deep Sea (Underwater), Kin Island/ Kindle Road/ Knot Island/ Resort Gorgeous/ Water Labyrinth 	2
172 	Pichu Pi|chu	ELECTRIC 		Viridian Forest/ Daycare 	2
173 	Cleffa Cle|ffa	FAIRY 		Route 3, 4/ Mt. Moon/ Daycare 	2
174 	Igglybuff Iggly|buff	NORMAL 	FAIRY 	Route 3 (Day)/ Daycare 	2
175 	Togepi Toge|pi 	FAIRY 		Route 5 (Pokéradar)/ Topepi Island/ Daycare 	2
176 	Togetic Toge|tic 	FAIRY 	FLYING 	Topepi Island/ Evolve Togetic (Lv15) 	2
177 	Natu Na|tu	PSYCHIC 	FLYING 	Route 16 (Pokeradar)/ Ruins of Alph/ Secluded Path 	2
178 	Xatu Xa|tu	PSYCHIC 	FLYING 	Evolve Xatu 	2
179 	Mareep Ma|reeps	ELECTRIC 		Route 11, 22, 32 	2
180 	Flaaffy Flaa|ffy	ELECTRIC 		Route 32, 42, 43/ Lake of Rage 	2
181 	Ampharos Ampha|ros	ELECTRIC 		Evolve Flaaffy 	2
182 	Bellossom Bell|ossom	GRASS 		Evolve Gloom (Sun Stone)/ Bond Bridge 	2
183 	Marill Ma|rill	WATER 	FAIRY 	Viridian River (Surfing)/ Evolve Azurill (Lv15) 	2
184 	Azumarill Azuma|rill	WATER 	FAIRY 	Evolve Marill/ Mt. Mortar/ Viridian River 	2
185 	Sudowoodo Sudo|woodo	ROCK 		Route 36 (Rokeradar) (Static Encounter) 	2
186 	Politoed Poli|toed	WATER 		Route 30, 32, 36, 46/ Ilex Forest/ Mt.Silver/ Violet City/ Evolve Poliwhirl (Kings Rock) 	2
187 	Hoppip Hop|pip	GRASS 	FLYING 	Route 4/ Chrono Island/ Resort Gorgeous/ Water Labyrinth 	2
188 	Skiploom Skip|loom	GRASS 	FLYING 	Evolve Hoppip/ Route 32, 33/ Brine Road/ Chrono Island 	2
189 	Jumpluff Jump|luff	GRASS 	FLYING 	Evolve Skiploom/ Route 29, 32, 33/ Brine Road 	2
190 	Aipom Ai|pom	NORMAL 		Ilex Forest/ Bond Bridge/ 	2
191 	Sunkern Sun|kern	GRASS 		Route 3 (Day) 	2
192 	Sunflora Sun|flora	GRASS 		Evolve Sunkern (Sun Stone) 	2
193 	Yanma Yan|ma	BUG 	FLYING 	Route 35/ Viridian River 	2
194 	Wooper Woo|per WATER 	GROUND 	Ruins of Alph/ Union Cave/ Viridian River/ Cerulean City reward 	2
195 	Quagsire Quag|sire	WATER 	GROUND 	Route 27, 32/ Ruins of Alph/ Union Cave/ Viridian River 	2
196 Espeon Esp|eon 	PSYCHIC 		Evolve Eevee (Sun Stone) 	2
197 Umbreon Umbr|eon 	DARK 		Evolve Eevee (Moon Stone) 	2
198 Murkrow Mur|krow 	DARK 	FLYING 	Route 7, 16, 33/ Secret Forest 	2
199 Slowking Slow|king 	WATER 	PSYCHIC 	Slowpoke Well/ Evolve Slowpoke (Water Stone) 	2
200 Misdreavus Mis|dreavus 	GHOST 		Burned Tower/ Pokemon Tower/ Mt. Silver 	2
201 Unown Un|own 	PSYCHIC 		Ruins of Alph 	2
202 Wobbuffet Wob|fet 	PSYCHIC 		Dark Cave / Evolve Wynaut 	2
203 Girafarig Gira|farig 	NORMAL 	PSYCHIC 	Route 27, 43/ Bond Bridge/ Secluded Path 	2
204 Pineco Pine|co 	BUG 		Route 43/ Ilex Forest / Lake of Rage/ Viridian River 	2
205 Forretress Forre|tress 	BUG 	STEEL 	Evolve Pineco 	2
206 Dunsparce Dun|sparce 	NORMAL 		Chrono Island/ Dark Cave/ Secluded Path 	2
207 Gligar Gli|gar 	GROUND 	FLYING 	Route 45, 46 	2
208 Steelix Steel|ix 	STEEL 	GROUND 	Evolve Onix (Lv40 or or Metal Coat)/ Mt. Silver/ Union Cave/ Victory Road 	2
209 Snubbull Snub|bull 	FAIRY 		Route 8 	2
210 Granbull Gran|bull 	FAIRY 		Evolve Snubbull/ Route 34 	2
211 Qwilfish Qwil|fish 	WATER 	POISON 	Route 21, 12, 13, 32/ Bond Bridge/ Boon Island/ Brine Road/ Chrono Island/ Kin Island/ the Laboratory/ Resort Gorgeous/ Water Labyrinth 	2
212 Scizor Sci|zor 	STEEL 	BUG 	Evolve Scyther (Lv40 or or Metal Coat) 	2
213 Shuckle Shu|ckle 	BUG 	ROCK 	Rock Runnel/ Union Cave 	2
214 Heracross Hera|cross 	BUG 	FIGHTING 	Ilex Forest 	2
215 Sneasel Snea|sel 	DARK 	ICE 	Seaform 3/ Ice Mountains 	2
216 Teddiursa Teddi|ursa 	NORMAL 		Route 5/ Mt. Silver 	2
217 Ursaring Ursa|ring 	NORMAL 		Victory Road / Blackthorn City / Ice Mountains/ Dark Cave/ Mt. Silver 	2
218 Slugma Slug|ma 	FIRE 		Route 16, 17 	2
219 Magcargo Mag|cargo 	FIRE 	ROCK 	Evolve Slugma 	2
220 Swinub Swi|nub 	ICE 	GROUND 	Seafoam 2, 3 	2
221 Piloswine Pilo|swine 	ICE 	GROUND 	Ice Mountains/ Evolve Swinub 	2
222 Corsola Cor|sola 	WATER 	ROCK 	Route 21, 34/ Boon Island/ Brine Road/ Chrono Island/ Kindle Road/ Kin Island/ Knot Island/ Resort Gorgeous/ Water Labyrinth 	2
223 Remoraid Remo|raid 	WATER 		Route 12,13 (underwater), (underwater), 20, 21, 44 	2
224 Octillery Octi|llery 	WATER 		Evolve Remoraid 	2
225 Delibird Deli|bird 	ICE 	FLYING 	Ice Mountains 	2
226 Mantine Man|tine 	WATER 	FLYING 	Route 20/ Brine Road/ Water Labyrinth/ Resort Gorgeous/ Boon Island/KIN Island/ Chrono Island 	2
227 Skarmory Skar|mory 	STEEL 	FLYING 	Ice Mountains/ Blackthorn / route 45/ Mt Silver (snow side) 	2
228 Houndour Houn|dour 	DARK 	FIRE 	Route 7 (night) 	2
229 Houndoom Houn|doom 	DARK 	FIRE 	Evolve Houndour 	2
230 Kingdra King|dra 	WATER 	DRAGON 	Evolve Seadra (Lv50 or Dragon Scale)/ Route 32 Old Rod only/ Laboratory 	2
231 Phanpy Phan|py 	GROUND 		Route 9, 10/ Mt Silver 	2
232 Donphan Don|phan 	GROUND 		Evolve Phanpy/ Route 45 (Blackthorn),46/ Boon Island/ Mt. Silver/ Victory Road 	2
233 Porygon2 Pory|gon2 	NORMAL 		Evolve Porygon (Upgrade) 	2
234 Stantler Stan|tler 	NORMAL 		Route 36, 37/ Berry Forest 	2
235 Smeargle Smear|gle 	NORMAL 		Saffron Nightclub (gift)/ Ruin of Alph/ Brine Road 	2
236 Tyrogue Tyro|gue 	FIGHTING 		Breed Evolution/ Route 23 	2
237 Hitmontop Hitmon|top 	FIGHTING 		Evolve Tyrogue/ Saffron City Fighting Dojo 	2
238 Smoochum Smoo|chum 	ICE 	PSYCHIC 	Breed Jynx/ Daycare 	2
239 Elekid Ele|kid 	ELECTRIC 		Breeding/ Daycare Gift 	2
240 Magby Mag|by 	FIRE 		Breeding/ Daycare Gift 	2
241 Miltank Mil|tank 	NORMAL 		Route 18 	2
242 Blissey Bli|ssey 	NORMAL 		Evolve Chansey (Lv42) 	2
243 Raikou Rai|kou 	ELECTRIC 		Roaming after Ruins of Alph Fused 	2
244 Entei En|tei 	FIRE 		Victory Road, Roading after 	2
245 Suicune Sui|cune 	WATER 		Roaming after Ruins of Alph Fused 	2
246 Larvitar Larvi|tar 	ROCK 	GROUND 	Mt. Silver, Safari Zone 4 (Pokéradar) 	2
247 Pupitar Pupi|tar 	ROCK 	GROUND 	Evolve Larvitar/ Mt Silver 	2
248 Tyranitar Tyrani|tar 	ROCK 	DARK 	Evolve Pupitar 	2
249 Lugia Lu|gia 	PSYCHIC 	FLYING 	Fused with other at Naval Rock (Only after battling Chuck in Sevii Isles postgame) 	2
250 Hooh Ho-|-oh 	FIRE 	FLYING 	Fused with other at Naval Rock (Only after battling Chuck in Sevii Isles postgame) 	2
251 Celebi Cele|bi 	GRASS 	PSYCHIC 	Ilex Forest (after 30 hotel quest, the man top gives a GS ball, go to shrine) 	2 
252 Azurill Azu|rill 	NORMAL 	FAIRY 	Daycare / Breeding 	3
253 Wynaut Wy|naut 	PSYCHIC 		Lavender Town (egg) / Breeding 	3
254 Ambipom Ambi|pom 	NORMAL 		Evolve Aipom (knowing move Double Hit) 	4
255 Mismagius Mis|magius 	GHOST 		Evolve Misdreavus (Dusk Stone) 	4
256 Honchkrow Honch|krow 	DARK 	FLYING 	Evolve Murkrow (Dusk Stone) 	4
257 Bonsly Bon|sly 	ROCK 		Daycare / Breeding; Route 37 	4
258 MimeJr Mime|Jr. 	PSYCHIC 	FAIRY 	Route 1 / Secret Garden 	4
259 Happiny Happ|iny 	NORMAL 		Daycare / Breeding 	4
260 Munchlax Munch|lax 	NORMAL 		Route 23, 26 / Daycare / Breeding 	4
261 Mantyke Man|tyke 	WATER 	FLYING 	Daycare / Breeding 	4
262 Weavile Wea|vile 	DARK 	ICE 	Evolve Sneasel (Ice Stone)/ Ice Mountains (Pokeradar)/ Mt. Silver 	4
263 Magnezone Magne|zone 	STEEL 	ELECTRIC 	Evolve Magneton (Magnet stone) / P2 Laboratory 	4
264 Lickilicky Licki|licky 	NORMAL 		Route 44 / Evolve Lickitung (with move Rollout) 	4
265 Rhyperior Rhy|perior 	GROUND 	ROCK 	Evolve Rhydon (lvl 55 or Protector) 	4
266 Tangrowth Tan|growth 	GRASS 		Route 44 / Evolve Tangela (with move Ancient Power) 	4
267 Electivire Electi|vire 	ELECTRIC 		Evolve Electabuzz (lvl 50 or Electrizer) 	4
268 Magmortar Mag|mortar 	FIRE 		Evolve Magmar (lvl 50 or Magmarizer) 	4
269 Togekiss Toge|kiss 	FAIRY 	FLYING 	Evolve Togetic (Shiny Stone) 	4
270 Yanmega Yan|mega 	BUG 	FLYING 	Evolve Yanma (with move Ancient Power) 	4
271 Leafeon Leaf|eon 	GRASS 		Evolve Eevee (Leaf Stone) 	4
272 Glaceon Glac|eon 	ICE 		Evolve Eevee (Ice Stone) 	4
273 Gliscor Glis|cor 	GROUND 	FLYING 	Evolve Gligar (Dusk Stone) 	4
274 Mamoswine Mamo|swine 	ICE 	GROUND 	Ice Cavern (static) / Evolve Piloswine (with move Ancient Power) 	4
275 PorygonZ Pory|gon-Z 	NORMAL 		Evolve Porygon2 (Dubious Disc) 	4
276 Treecko Tree|cko 	GRASS 		Pallet Town (postgame)/Viridian River (static) 	3
277 Grovyle Gro|vyle 	GRASS 		Evolve Treecko 	3
278 Sceptile Scep|tile 	GRASS 		Evolve Grovyle 	3
279 Torchic Tor|chic 	FIRE 		Pallet Town (postgame)/Viridian River (static) 	3
280 Combusken Combus|ken 	FIRE 	FIGHTING 	Evolve Torchic 	3
281 Blaziken Blazi|ken 	FIRE 	FIGHTING 	Evolve Combusken 	3
282 Mudkip Mud|kip 	WATER 		Pallet Town (postgame)/Viridian River (static) 	3
283 Marshtomp Marsh|tomp 	WATER 	GROUND 	Evolve Mudkip 	3
284 Swampert Swam|pert 	WATER 	GROUND 	Evolve Marshtomp 	3
285 Ralts Ra|lts 	PSYCHIC 	FAIRY 	Johto daycare National Park (egg) / Secret Garden 	3
286 Kirlia Kir|lia 	PSYCHIC 	FAIRY 	Evolve Ralts / Route 34 (Pokéradar) 	3
287 Gardevoir Garde|voir 	PSYCHIC 	FAIRY 	Evolve Kirlia 	3
288 Gallade Gal|lade 	PSYCHIC 	FIGHTING 	Evolve male Kirlia (Dawn Stone) 	4
289 Shedinja Shed|inja 	BUG 	GHOST 	Ilex Forest (postgame) / evolve Nincada 	3
290 Kecleon Kec|leon 	NORMAL 		Saffron City (quest) / Chrono Island (Pokeradar) 	3
291 Beldum Bel|dum 	STEEL 	PSYCHIC 	Safari Zone (Area 5) (Pokéradar) / Violet City (postgame) 	3
292 Metang Me|tang 	STEEL 	PSYCHIC 	Evolve Beldum / Sky Pillar 	3
293 Metagross Meta|gross 	STEEL 	PSYCHIC 	Evolve Metang 	3
294 Bidoof Bi|doof 	NORMAL 		Route 29 (postgame) / Route 22 (Pokéradar), 42, 43 Lake of Rage 	4
295 Spiritomb Spiri|tomb 	DARK 	GHOST 	Route 36 (quest) 	4
296 Lucario Luca|rio 	FIGHTING 	STEEL 	Blackthorn City (quest) (postgame) Evolve Riolu (Lv20) 	4
297 Gible Gi|ble 	DRAGON 	GROUND 	Dragon's Den (postgame) 	4
298 Gabite Ga|bite 	DRAGON 	GROUND 	Evolve Gible 	4
299 Garchomp Gar|chomp 	DRAGON 	GROUND 	Evolve Gabite 	4
300 Mawile Ma|wile 	STEEL 	FAIRY 	Crimson City Cave / Sky Pillar 	3
301 Lileep Li|leep 	ROCK 	GRASS 	S.S. Anne (fossil) / Rock Smash (postgame) 	3
302 Cradily Cra|dily 	ROCK 	GRASS 	Evolve Lileep 	3
303 Anorith Ano|rith 	ROCK 	BUG 	S.S. Anne (fossil) / Rock Smash (postgame) 	3
304 Armaldo Arma|ldo 	ROCK 	BUG 	Evolve Anorith 	3
305 Cranidos Crani|dos 	ROCK 		Celadon Cafe (fossil) / Rock Smash (postgame) 	4
306 Rampardos Rampar|dos 	ROCK 		Evolve Cranidos 	4
307 Shieldon Shiel|don 	ROCK 	STEEL 	Celadon Cafe (fossil) / Rock Smash (postgame) 	4
308 Bastiodon Bastio|don 	ROCK 	STEEL 	Evolve Shieldon 	4
309 Slaking Sla|king 	NORMAL 		Route 46 (static) 	3
310 Absol Ab|sol 	DARK 		Cinnabar Island (static) / Mt Mortar / Chrono Island / Route 26, 27 (Pokeradar) 	3
311 Duskull Dus|kull 	GHOST 		Secret Garden (Night) / Secret Forest (night) / Hidden Tomb, Lavender Town (quest) 	3
312 Dusclops Dus|clops 	GHOST 		Evolve Duskull / Sky Pillar 	3
313 Dusknoir Dusk|noir 	GHOST 		Evolve Dusclops (lvl 50) 	4
314 Wailord Wai|lord 	WATER 		Route 21 (postgame) / Evolve Wailmer 	3
315 Arceus Ar|ceus 	NORMAL 		Hall of Origin (postgame) 	4
316 Turtwig Tur|twig 	GRASS 		Knot Island / Boon Island (gift)/Viridian River (static) 	4
317 Grotle Gro|tle 	GRASS 		Evolve Turtwig 	4
318 Torterra Tor|terra 	GRASS 	GROUND 	Evolve Grotle 	4
319 Chimchar Chim|char 	FIRE 		Knot Island / Boon Island/Viridian River (static) 	4
320 Monferno Mon|ferno 	FIRE 	FIGHTING 	Evolve Chimchar 	4
321 Infernape Infern|ape 	FIRE 	FIGHTING 	Evolve Monferno 	4
322 Piplup Pip|lup 	WATER 		Knot Island / Boon Island/Viridian River (static) 	4
323 Prinplup Prin|plup 	WATER 		Evolve Piplup 	4
324 Empoleon Empo|leon 	STEEL 	WATER 	Evolve Prinplup 	4
325 Nosepass Nose|pass 	ROCK 		Mt. Moon (Rock Smash) / Rock Tunnel / Kindle Road / Mt Ember / Sky Pillar 	3
326 Probopass Probo|pass 	ROCK 	STEEL 	Evolve Nosepass (Magnet Stone) 	4
327 Honedge Hon|edge 	STEEL 	GHOST 	Rock Tunnel 	6
328 Doublade Doub|lade 	STEEL 	GHOST 	Evolve Honedge 	6
329 Aegislash Aegi|slash 	STEEL 	GHOST 	Evolve Doublade (Dusk Stone) 	6
330 Pawniard Pawn|iard 	DARK 	STEEL 	Knot Island (as egg) / Laboratory P2 	5
331 Bisharp Bi|sharp 	DARK 	STEEL 	Evolve Pawniard 	5
332 Luxray Lux|ray 	ELECTRIC 		Route 42 (postgame) / Evolve Luxio 	4
333 Aggron Agg|ron 	STEEL 	ROCK 	Knot Island / Evolve Lairon 	3
334 Flygon Fly|gon 	GROUND 	DRAGON 	Kindle Road / Evolve Vibrava 	3
335 Milotic Milo|tic 	WATER 		Evolve Feebas (Lv 35) 	3
336 Salamence Sala|mence 	DRAGON 	FLYING 	Knot Island / Evolve Shelgon 	3
337 Klinklang Klink|lang 	STEEL 		Rocket Warehouse / Evolve Klang 	5
338 Zoroark Zoro|ark 	DARK 		Secret Forest / Berry Forest / Evolve Zorua 	5
339 Sylveon Syl|eon 	FAIRY 		Evolve Eevee (Shiny Stone) 	6
340 Kyogre Kyo|gre 	WATER 		Deep Ocean (Sevii Islands) 	3
341 Groudon Grou|don 	GROUND 		Mt. Ember 	3
342 Rayquaza Ray|quaza 	DRAGON 	FLYING 	Sky Pillar 	3
343 Dialga Dial|ga 	STEEL 	DRAGON 	Sinjoh Ruins (postgame) 	4
344 Palkia Pal|kia 	WATER 	DRAGON 	Sinjoh Ruins (postgame) 	4
345 Giratina Gira|tina 	GHOST 	DRAGON 	Sinjoh Ruins (postgame) 	4
346 Regigigas Regi|gigas 	NORMAL 		Water Labyrinth 	4
347 Darkrai Dark|rai 	DARK 		Ecruteak City 	4
348 Genesect Gene|sect 	BUG 	STEEL 	P2 Laboratory (postgame) 	5
349 Reshiram Reshi|ram 	DRAGON 	FIRE 	Bell Tower (postgame) 	5
350 Zekrom Zek|rom 	DRAGON 	ELECTRIC 	Bell Tower (postgame) 	5
351 Kyurem Kyu|rem 	DRAGON 	ICE 	Lake of Rage (postgame) 	5
352 Roserade Rose|rade 	GRASS 	POISON 	Evolve Roselia (Lv 15) 	4
353 Drifblim Drif|blim 	GHOST 	FLYING 	Evolve Drifloon 	4
354 Lopunny Lo|punny 	NORMAL 		Evolve Buneary (lv 22) 	4
355 Breloom Bre|loom 	GRASS 	FIGHTING 	Evolve Shroomish / Ikex Forest 	3
356 Ninjask Nin|jask 	BUG 	FLYING 	Evolve Nincada / Boon Island (Pokeradar) 	3
357 Banette Ban|ette 	GHOST 		Evolve Shuppet 	3
358 Rotom Ro|tom 	ELECTRIC 	GHOST 	Celadon City (Postgame) / Saffron City / Goldenrod City 	4
359 Reuniclus Reuni|clus 	PSYCHIC 		Evolve Duosion 	5
360 Whimsicott Whimsi|cott 	GRASS 	FAIRY 	Evolve Cottonee (Sun Stone) / Brine Road (Pokeradar) 	5
361 Krookodile Krooko|dile 	GROUND 	DARK 	Evolve Krokorok 	5
362 Cofagrigus Cofa|grigus 	GHOST 		Evolve Yamask 	5
363 Galvantula Galvan|tula 	BUG 	ELECTRIC 	Evolve Joltik 	5
364 Ferrothorn Ferro|thorn 	GRASS 	STEEL 	Evolve Ferroseed 	5
365 Litwick Lit|wick 	GHOST 	FIRE 	Creepy House 	5
366 Lampent Lamp|ent 	GHOST 	FIRE 	Creepy House 	5
367 Chandelure Chande|lure 	GHOST 	FIRE 	Evolve Lampent (Dusk Stone) 	5
368 Haxorus Hax|orus 	DRAGON 		Evolve Fraxure 	5
369 Golurk Go|lurk 	GROUND 	GHOST 	Evolve Golett 	5
370 Pyukumuku Pyuku|muku 	WATER 		Treasure Beach (Rain) / Viridian City (if Second Run) 	7
371 Klefki Klef|ki 	STEEL 	FAIRY 	Cycling Road (Pokéradar) 	6
372 Talonflame Talon|flame 	FIRE 	FLYING 	Evolve Fletchinder 	6
373 Mimikyu Mimi|kyu 	GHOST 	FAIRY 	Creepy House (Static) 	7
374 Volcarona Volca|rona 	BUG 	FIRE 	Evolve Larvesta / Safari Zone 5 (static 	5
375 Deino Dei|no 	DARK 	DRAGON 	Safari Zone (Area 3) (Pokéradar) 	5
376 Zweilous Zwei|lous 	DARK 	DRAGON 	Evolve Deino 	5
377 Hydreigon Hydr|eigon 	DARK 	DRAGON 	Evolve Zweilous 	5
378 Latias Lat|ias 	DRAGON 	PSYCHIC 	Roaming (Sevii Islands) 	3
379 Latios Lat|ios 	DRAGON 	PSYCHIC 	Roaming (Sevii Islands) 	3
380 Deoxys Deo|xys 	PSYCHIC 		Birth Island 	3
381 Jirachi Jira|chi 	STEEL 	PSYCHIC 	Dream in Hotel (after 777 encounters) 	3
382 Nincada Nin|cada 	Bug 	Ground 	Route 4, 11 (Pokéradar) 	3
383 Bibarel Bi|barel 	Normal 	Water 	Evolve Bidoof / Route 30 (Pokeradar) 	4
384 Riolu Rio|lu 	Fighting 		Route 23 (Pokéradar) 	4
385 Slakoth Slak|oth 	Normal 		Route 6 (Pokéradar) 	3
386 Vigoroth Vigor|oth 	Normal 		Evolve Slakoth / Route 32 (Pokeradar) 	3
387 Wailmer Wail|mer 	Water 		Sevii Islands (Surfing) / Brine Road / Kindle Road / Knot Island 	3
388 Shinx Shi|nx 	Electric 		Route 8 (Pokéradar) 	4
389 Luxio Lux|io 	Electric 		Evolve Shinx / Route 33 (Pokeradar) 	4
390 Aron Ar|on 	Steel 	Rock 	Route 9 (Pokéradar) 	3
391 Lairon Lair|on 	Steel 	Rock 	Safari Zone (Area 5) / Evolve Aron 	3
392 Trapinch Trap|inch 	Ground 		Safari Zone (Area 5) 	3
393 Vibrava Vibr|ava 	Ground 	Dragon 	Evolve Trapinch / Safari Zone (Area 5) 	3
394 Feebas Fee|bas 	Water 		Sevii Islands (Fishing in Rain) 	3
395 Bagon Ba|gon 	Dragon 		Safari Zone (Area 1) (Pokéradar) 	3
396 Shelgon Shel|gon 	Dragon 		Evolve Bagon 	3
397 Klink Kli|ink 	Steel 		Power Plant / Laboratory / Route 10 (Pokeradar) 	5
398 Klang Kla|ang 	Steel 		Evolve Klink / Laboratory 	5
399 Zorua Zor|ua 	Dark 		Secret Forest 	5
400 Budew Bu|dew 	Grass 	Poison 	Route 3 (Pokéradar) 	4
401 Roselia Rose|lia 	Grass 	Poison 	National Park (Pokéradar) 	3
402 Drifloon Drif|loon 	Ghost 	Flying 	Route 7 (Pokéradar) 	4
403 Buneary Bun|eary 	Normal 		Route 24 (Pokéradar) 	4
404 Shroomish Shroom|ish 	Grass 		Viridian Forest (Pokéradar) 	3
405 Shuppet Shup|pet 	Ghost 		Creepy House 	3
406 Solosis Solo|sis 	Psychic 		Route 15 (Pokéradar) 	5
407 Duosion Duo|sion 	Psychic 		Evolve Solosis 	5
408 Cottonee Cotto|nee 	Grass 	Fairy 	Route 12, 13 (Pokéradar) 	5
409 Sandile San|dile 	Ground 	Dark 	Safari Zone (Area 5) 	5
410 Krokorok Kroko|rok 	Ground 	Dark 	Evolve Sandile 	5
411 Yamask Ya|mask 	Ghost 		Safari Zone (Area 5) Desert Temple 	5
412 Joltik Jol|tik 	Bug 	Electric 	Routes 13-14 (Pokéradar) 	5
413 Ferroseed Ferro|seed 	Grass 	Steel 	Route 18 (Pokéradar) 	5
414 Axew Ax|ew 	Dragon 		Safari Zone (Area 2) (Pokéradar) 	5
415 Fraxure Frax|ure 	Dragon 		Evolve Axew 	5
416 Golett Gol|ett 	Ground 	Ghost 	Safari Zone (Area 5) 	5
417 Fletchling Fletch|ling 	Normal 	Flying 	Route 1, 2, 22 (Pokéradar) 	6
418 Fletchinder Fletch|inder 	Fire 	Flying 	Evolve Fletchling 	6
419 Larvesta Lar|vesta 	Bug 	Fire 	Safari Zone (Area 5) 	5
420 Stunfisk Stun|fisk 	Ground 	Electric 	Route 15 (Surfing) 	5`;


const lines = dexdata.split('\n');
const re = /^(\d+)\s+([^\s]+)\s+([^|]+)\|([^\s]+)/;

const https = require('https');

var out = [];

var mons = {};

for (const i in lines)
{
	var line = lines[i];
	var m = line.match(re);
	if (!m)
	{
		continue;
	}
	
	
	var mon = m[2].toLowerCase();	
	var num = parseInt(m[1]);
	mons[mon] = num;
}

var count = 0;
	
for (const mon in mons)
{
	let num = mons[mon];
	let dir = mon;
	if (!fs.existsSync(dir)) continue;		
	console.log(mon);
	
	let files = fs.readdirSync(dir);
	for (let mon2 in mons) {
		let num2 = mons[mon2];
		let outFile = mon2 + ".png";
		
		/*
		outFile = dir + '/' + outFile;
		
		if (!fs.existsSync(outFile)) continue;
		
		let d = fs.readFileSync(outFile, { encoding: 'utf8' });
		if (d && d.startsWith('429: Too Many Requests'))
		{
			console.log(outFile);
			fs.unlinkSync(outFile);
		}
		*/		
				
		if (!files.includes(outFile)) {
			// Download AI-generated sprite
			
			outFile = dir + '/' + outFile;
			const url = 'https://raw.githubusercontent.com/Aegide/autogen-fusion-sprites/master/Battlers/' + 
				num + "/" + num + "." + num2 + ".png";
				
			console.log("getting " + url);
				
			https.get(url, (res) => {
				//console.log('statusCode:', res.statusCode);
				//console.log('headers:', res.headers);

				res.on('data', (d) => {					
					fs.appendFileSync(outFile, d, { encoding: null });
				});
			}).on('error', (e) => {
				console.log("error: " + e);
			});
			
			++count;
		}
	}
	
	
	if (count >= 720)
	{
		break;
	}	
}

//console.log(JSON.stringify(out));

/*
var fre = /^(\d+)\.(\d+)[a-z]+\.png$/;

var data = {};
for (var num in dex)
{
	var mon = dex[num];	
	var d = data[mon] = {};
	d.customsprites = {};
	
	var dir = mon;
	if (!fs.existsSync(dir)) continue;
	
	var files = fs.readdirSync(dir);	
	for (const i in files)
	{
		const file = files[i];
		const m = file.match(fre);
		if (m)
		{			
			fs.unlinkSync(dir + "/" + file);
		}
		
		else
		{
			var other = file.slice(0, -4);
			d.customsprites[other] = true;
		}
	}
}

console.log(data);
*/