const fish = [
	{
	id: 1,
	hawaiian_name: "Humuhumunukunukuapua'a",
	english_name: "Rectangular Triggerfish",
	photo: "/fish/humuhumu.jpeg",
	fun_fact: "Hawaii's state fish"
	},
	{
	id: 2,
	hawaiian_name: "po'opa'a",
	english_name: "Stocky Hawkfish",
	photo: "/fish/stocky_hawkfish.webp",
	fun_fact: "it cannot swim properly because it lacks a swim bladder"
	},
	{
	id: 3,
	hawaiian_name: "pāpiʻo",
	english_name: "bluefin trevally",
	photo: "/fish/bluefin_trevally.jpg",
	fun_fact: "once they pass 10 lbs they are called ulua"
	},
	{
	id: 4,
	hawaiian_name: "ahi",
	english_name: "Yellowfin Tuna",
	photo: "/fish/ahi.webp",
	fun_fact: "one of the most popular fish in Hawaiian cuisine"
	},
	{
	id: 5,
	hawaiian_name: "mahi mahi",
	english_name: "dolphinfish",
	photo: "/fish/mahi-mahi.jpeg",
	fun_fact: "mahi-mahi means strong-strong in Hawaiian"
	},
	{
	id: 6,
	hawaiian_name: "uhu",
	english_name: "Parrotfish",
	photo: "/fish/parrotfish.webp",
	fun_fact: "uses its beak-like teeth to scrape algae off coral, then poops out white sand"
	},
	{
	id: 7,
	hawaiian_name: "manini",
	english_name: "Convict Tang",
	photo: "/fish/convict-tang.jpg",
	fun_fact: "named for its black stripes that resemble a prison uniform"
	},
	{
	id: 8,
	hawaiian_name: "weke",
	english_name: "Goatfish",
	photo: "/fish/yellowstripe_goatfish.webp",
	fun_fact: "has whisker-like barbels under its chin to hunt prey in the sand. In nihonggo goatfish is Ojisan. Ojisan means old man and goatfish kinda look old because their barbels resemble a beard"
	},
	{
	id: 9,
	hawaiian_name: "kumu",
	english_name: "Whitesaddle Goatfish",
	photo: "/fish/kumu_goatfish.jpg",
	fun_fact: "a prized fish in ancient Hawaii, reserved for royalty and ceremonies"
	},
	{
	id: 10,
	hawaiian_name: "ulua",
	english_name: "Giant Trevally",
	photo: "/fish/ulua.jpg",
	fun_fact: "the adult form of pāpiʻo — they become ulua after reaching about 10 lbs"
	},
	{
	id: 11,
	hawaiian_name: "ono",
	english_name: "Wahoo",
	photo: "/fish/wahoo.jpg",
	fun_fact: "its name means 'delicious' in Hawaiian — one of the fastest fish in the ocean"
	},
	{
	id: 12,
	hawaiian_name: "opelu",
	english_name: "Mackerel Scad",
	photo: "/fish/mackeral-scad.jpg",
	fun_fact: "travel in large schools and are an important food source for bigger predators"
	},
	{
	id: 13,
	hawaiian_name: "menpachi",
	english_name: "Soldierfish",
	photo: "/fish/menpachi.jpeg",
	fun_fact: "nocturnal hunters that hide in caves and crevices during the day and come out at night to feed"
	},
	{
	id: 14,
	hawaiian_name: "nūnū",
	english_name: "Trumpetfish",
	photo: "/fish/trumpetfish.jpg",
	fun_fact: "hides by swimming vertically among coral branches and can change color to match its surroundings"
	},
	{
	id: 15,
	hawaiian_name: "'awela",
	english_name: "Christmas Wrasse",
	photo: "/fish/ChristmasWrasse.jpg",
	fun_fact: "named for its festive red and green coloring — males are more vibrantly colored than females"
	},
	{
	id: 16,
	hawaiian_name: "kihikihi",
	english_name: "Moorish Idol",
	photo: "/fish/Moorish_idol.jpg",
	fun_fact: "the long white dorsal fin streamer is called a filament and continues to grow throughout its life"
	},
	{
	id: 17,
	hawaiian_name: "he'e",
	english_name: "Octopus",
	photo: "/fish/he'e.jpg",
	fun_fact: "tako in japanese, 9 hearts 3 brains, can change color and texture, only bone in entire body is their beak, can flex individual muscle fibers, live to reproduce after they mate they die. their lifespan is about 2 years, sustainable food source"
	},
	{
	id: 18,
	hawaiian_name: "ula papapa",
	english_name: "Slipper Lobster",
	photo: "/fish/Slipper_Lobster.jpg",
	fun_fact: "unlike true lobsters, slipper lobsters have no claws"
	},
	{
	id: 19,
	hawaiian_name: "Hawaiian WhiteSpotted Toby",
	english_name: "Hawaiian WhiteSpotted Toby",
	photo: "/fish/Toby.jpeg",
	fun_fact: "also known as sharpnose pufferfish. one of the smallest pufferfish in Hawaii — inflates by gulping water when threatened"
	},
	{
	id: 20,
	hawaiian_name: "no common hawaiian name",
	english_name: "Flying Gurnard",
	photo: "/fish/flying_gurnard.png",
	fun_fact: "spreads enormous pectoral fins like wings to startle predators — it walks along the seafloor on leg-like fins"
	},
	{
	id: 21,
	hawaiian_name: "nohu",
	english_name: "Scorpionfish",
	photo: "/fish/nohu.jpg",
	fun_fact: "masters of camouflage that look exactly like rocks — their dorsal spines deliver a painful venomous sting"
	},
	{
	id: 22,
	hawaiian_name: "yellow-spotted Scorpionfish",
	english_name: "yellow-spotted Scorpionfish",
	photo: "/fish/Coral_Scorpionfish.jpeg",
	fun_fact: "also called coral scorpionfish, common in kuilima cove at t-bay"
	},
	{
	id: 23,
	hawaiian_name: "Devil Scorpionfish",
	english_name: "Devil Scorpionfish",
	photo: "/fish/Devil_Scorpionfish.jpg",
	fun_fact: "When disturbed or threatened, it raises its venomous spines and flashes vibrant red, orange, and yellow patterns on its pectoral fins as a warning"
	},
	{
	id: 24,
	hawaiian_name: "kōkala",
	english_name: "Porcupine Pufferfish",
	photo: "/fish/porcupine_puffer.webp",
	fun_fact: "its spines only stick out when it inflates — deflated, it looks like a smooth round fish"
	},
	{
	id: 25,
	hawaiian_name: "moa",
	english_name: "Boxfish",
	photo: "/fish/boxfish.jpeg",
	fun_fact: "its boxy rigid shell is so strong it inspired engineers designing crumple-resistant car bodies"
	},
	{
	id: 26,
	hawaiian_name: "kala",
	english_name: "surgeonfish",
	photo: "/fish/kala.jpeg",
	fun_fact: "has a bony horn above its mouth and sharp spines near its tail that can slice like a scalpel"
	},
	{
	id: 27,
	hawaiian_name: "honu",
	english_name: "Green Sea Turtle",
	photo: "/fish/honu.jpeg",
	fun_fact: "considered sacred in Hawaiian culture — honu are a symbol of good luck, endurance, and the navigator's spirit"
	},
	{
	id: 28,
	hawaiian_name: "kikakapu",
	english_name: "Raccoon Butterflyfish",
	photo: "/fish/racoon_butterflyfish.jpeg",
	fun_fact: "the black mask across its eyes resembles a raccoon — it uses its pointed snout to pick coral polyps"
	},
	{
	id: 29,
	hawaiian_name: "lauhau",
	english_name: "Threadfin Butterflyfish",
	photo: "/fish/threadfin_butterflyfish.jpeg",
	fun_fact: "one of the most recognizable Hawaiian reef fish — pairs mate for life and are rarely seen alone"
	},
	{
	id: 30,
	hawaiian_name: "pūpū poniuniu",
	english_name: "Textile Cone Snail",
	photo: "/fish/textile_conesnail.jpeg",
	fun_fact: "fires a harpoon-like tooth that injects venom powerful enough to kill a human — never pick one up"
	},
	{
	id: 31,
	hawaiian_name: "pāpa'i",
	english_name: "Jeweled Anemone Crab",
	photo: "/fish/jeweled_anemone.jpg",
	fun_fact: "lives among stinging anemone tentacles that kill other creatures — the crab is immune to the venom"
	},
	{
	id: 32,
	hawaiian_name: "pe'a pe'a",
	english_name: "Brittle Star",
	photo: "/fish/brittlestar.jpeg",
	fun_fact: "can shed and regrow its arms as a defense — the lost arm wriggles to distract predators while it escapes"
	},
	{
	id: 33,
	hawaiian_name: "loli",
	english_name: "Conspicuous Sea Cucumber",
	photo: "/fish/medusa_worm.jpeg",
	fun_fact: "90% Water, look like snot rockets out of water, have feather like arms that help them pull food in. they are filter feeders."
	},
	{
	id: 34,
	hawaiian_name: "wana pā'ū",
	english_name: "Collector Urchin",
	photo: "/fish/collector_urchin.jpeg",
	fun_fact: "decorates itself by holding shells, pebbles, and coral fragments over its body for camouflage"
	},
	{
	id: 35,
	hawaiian_name: "wana",
	english_name: "Long-spined Urchin",
	photo: "/fish/long_spined_urchin.jpeg",
	fun_fact: "spines can reach 12 inches and break off in skin — stepping on one barefoot is a common painful lesson"
	},
	{
	id: 36,
	hawaiian_name: "hāwa'e",
	english_name: "Boring Urchin",
	photo: "/fish/boring_urchin.jpeg",
	fun_fact: "slowly grinds holes into solid rock with its teeth and spine tips, then lives inside the hole it created"
	},
	{
	id: 37,
	hawaiian_name: "hāwa'e maoli",
	english_name: "Pencil Urchin",
	photo: "/fish/pencil_urchin.jpeg",
	fun_fact: "has thick blunt spines that look like pencils"
	},
	{
	id: 38,
	hawaiian_name: "hāwa'e pōhaku",
	english_name: "Pebble Urchin",
	photo: "/fish/pebble-urchin.jpg",
	fun_fact: "has short, flattened spines that help it grip and hide in rocky surge zones battered by waves"
	},
	{
	id: 39,
	hawaiian_name: "kualakai",
	english_name: "Sea Hare",
	photo: "/fish/sea-hare.jpeg",
	fun_fact: "a giant sea slug that releases a purple/pink coagulant when threatened. the coagulant gets stuck in the gills of the predator and they suffocate"
	},
	{
	id: 40,
	hawaiian_name: "sanalala",
	english_name: "Spanish Dancer",
	photo: "/fish/spanishdancer.jpeg",
	fun_fact: "the largest nudibranch in the world — flaps its vivid red body like a flamenco skirt to swim away from danger"
	},
	{
	id: 41,
	hawaiian_name: "puhi",
	english_name: "Moray Eel",
	photo: "/fish/moray_eel.jpeg",
	fun_fact: "nocturnal"
	},
	{
	id: 42,
	hawaiian_name: "puhi uha",
	english_name: "Conger Eel",
	photo: "/fish/conger_eel.jpeg",
	fun_fact: "nocturnal"
	},
	{
	id: 43,
	hawaiian_name: "'alakuma",
	english_name: "7-Eleven Crab",
	photo: "/fish/7-11crab.jpeg",
	fun_fact: "named because they either have 7 or 11 spots on their shell"
	},
	{
	id: 44,
	hawaiian_name: "pāki'i",
	english_name: "Flounder",
	photo: "/fish/Flounder.jpeg",
	fun_fact: "born with eyes on both sides of its head — as it grows, one eye migrates to join the other on top"
	},
	{
	id: 45,
	hawaiian_name: "nohu 'omakaha",
	english_name: "Stonefish",
	photo: "/fish/stonefish.jpeg",
	fun_fact: "the most venomous fish in the world. same family as the scorpionfish"
	},
	{
	id: 46,
	hawaiian_name: "nohu pinao",
	english_name: "Lionfish",
	photo: "/fish/lionfish.jpeg",
	fun_fact: "an invasive species in many oceans — its venomous spines have no natural predators, making it a reef threat"
	},
	{
	id: 47,
	hawaiian_name: "nūnū",
	english_name: "Trumpetfish",
	photo: "/fish/trumpetfish.jpeg",
	fun_fact: "very similar to Cornetfish"
	},
	{
	id: 48,
	hawaiian_name: "nūnū peke",
	english_name: "Cornetfish",
	photo: "/fish/Cornetfish.jpeg",
	fun_fact: "very similar to Trumpet fish"
	},
	{
	id: 49,
	hawaiian_name: "to'au",
	english_name: "Blacktail snapper",
	photo: "/fish/BlacktailSnapper.jpeg",
	fun_fact: "Not originally from Hawaii — it was intentionally introduced from Moorea in French Polynesia in 1958 as a food fish and has since spread throughout the islands."
	},
	{
	id: 50,
	hawaiian_name: "ta'ape",
	english_name: "Bluestripe snapper",
	photo: "/fish/BluestripeSnapper.webp",
	fun_fact: "Introduced to Hawaii from the Marquesas Islands in 1958 alongside the to'au, it's now one of the most common reef fish in the islands despite not being native. Also looks very similar to the bluestripe butterfly fish"
	},
	{
	id: 51,
	hawaiian_name: "kīkākapu",
	english_name: "Bluestripe butterflyfish",
	photo: "/fish/BluestripeButterflyfish.jpeg",
	fun_fact: "Endemic to Hawaii — found nowhere else in the world — and its blue stripes actually curve diagonally across its yellow body rather than running straight."
	},
	{
	id: 52,
	hawaiian_name: "female starryeye uhu",
	english_name: "female starryeye parrotfish",
	photo: "/fish/female_starryeye_uhu.jpg",
	fun_fact: "the females are more drab / grey / rock colored compared to the males."
	},
	{
	id: 53, 
	hawaiian_name: "male starryeye uhu",
	english_name: "Bluestripe butterflyfish",
	photo: "/fish/male_starryeye_uhu.jpg",
	fun_fact: "they have a star - like shape around their eye and their mouths are different from normal uhus"
	}
];

export default fish;
