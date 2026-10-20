const DATA = {
 "scenes": [
  {
   "id": "arctic",
   "title": "Arctic Wilderness",
   "prompt": "A frozen polar wilderness: emperor penguins with black backs and white bellies, a creamy-white polar bear, a domed snow-block igloo, towering icebergs, flat white ice floes and calm pale blue sea, cold clear light.",
   "objects": [
    {
     "id": "penguin",
     "label": "Penguin",
     "action": "add",
     "count": 20
    },
    {
     "id": "polar_bear_shanda",
     "label": "Polar Bear",
     "action": "add",
     "count": 2
    },
    {
     "id": "igloo_2",
     "label": "Igloo",
     "action": "add",
     "count": 1
    }
   ]
  },
  {
   "id": "canyon",
   "title": "Blossom Canyon",
   "prompt": "A blossom-filled red sandstone canyon: flowering trees in coral pink, magenta, red and lavender, big frothy blossom clusters, blooming rose bushes, layered rock buttes and mesas, warm dusty haze.",
   "objects": [
    {
     "id": "crape_myrtle_tree",
     "label": "Crape Myrtle Tree",
     "action": "replace",
     "count": null
    },
    {
     "id": "garden_rose_bush",
     "label": "Garden Rose Bush",
     "action": "replace",
     "count": null
    },
    {
     "id": "colorful_butterfly",
     "label": "Colorful Butterfly",
     "action": "add",
     "count": 8
    }
   ]
  },
  {
   "id": "cliff",
   "title": "Autumn Cliff",
   "prompt": "A blazing autumn canopy on a cliff: vivid orange and crimson maple leaves, clusters of bright red winged samara seeds, brilliant blue morpho butterflies, grey rock cliff face.",
   "objects": [
    {
     "id": "orange_maple_samara",
     "label": "Orange Maple Samara",
     "action": "replace",
     "count": null
    },
    {
     "id": "blue_morpho_butterfly",
     "label": "Blue Morpho Butterfly",
     "action": "add",
     "count": 14
    }
   ]
  },
  {
   "id": "coast",
   "title": "Flamingo Beach",
   "prompt": "A tropical palm beach paradise: a flock of tall pink flamingos wading in a calm lagoon, a dense grove of tall coconut palms, a white sailboat, pale sand and rocky headland, clear blue sky.",
   "objects": [
    {
     "id": "palm_tree",
     "label": "Palm Tree",
     "action": "add",
     "count": null
    },
    {
     "id": "flamingo",
     "label": "Flamingo",
     "action": "add",
     "count": 10
    },
    {
     "id": "sailboat",
     "label": "Sailboat",
     "action": "add",
     "count": 1
    },
    {
     "id": "picnic_shelter_table",
     "label": "Picnic Shelter Table",
     "action": "add",
     "count": 1
    }
   ]
  },
  {
   "id": "coast_cypress",
   "title": "Cypress Lagoon",
   "prompt": "A calm coastal lagoon: bald cypress trees along the shore with tapering trunks and tiers of rusty-brown needle foliage, snowberry shrubs carrying masses of round white berries, a flock of black-and-white magpie ducks floating on the still water, pale sand banks, clear blue sky.",
   "objects": [
    {
     "id": "bald_cypress",
     "label": "Bald Cypress",
     "action": "replace",
     "count": null
    },
    {
     "id": "snowberry_tree_bush",
     "label": "Snowberry Tree Bush",
     "action": "replace",
     "count": null
    },
    {
     "id": "black_white_magpie_duck",
     "label": "Black-and-White Magpie Duck",
     "action": "add",
     "count": 8
    }
   ]
  },
  {
   "id": "coast_ginkgo",
   "title": "Ginkgo Lakeshore",
   "prompt": "A golden autumn lakeshore: ginkgo trees blazing brilliant yellow, brightly coloured kayaks in pink, mint green, violet and cyan on still water, red rock hills, warm evening light.",
   "objects": [
    {
     "id": "golden_ginkgo_tree",
     "label": "Golden Ginkgo Tree",
     "action": "replace",
     "count": null
    },
    {
     "id": "kayak_seed_palette",
     "label": "Kayak",
     "action": "add",
     "count": 5
    }
   ]
  },
  {
   "id": "coral_reef",
   "title": "Coral Reef",
   "prompt": "A vivid tropical coral reef underwater: a round spiny pufferfish, orange and white striped clownfish, soft anemones in every colour, pale glowing jellyfish, clear blue water.",
   "objects": [
    {
     "id": "clownfish_striped_shanda",
     "label": "Striped Clownfish",
     "action": "replace",
     "count": null
    },
    {
     "id": "pufferfish",
     "label": "Pufferfish",
     "action": "add",
     "count": 2
    },
    {
     "id": "anemone_seed_palette",
     "label": "Anemone",
     "action": "add",
     "count": 1
    },
    {
     "id": "red_handfish",
     "label": "Red Handfish",
     "action": "add",
     "count": 2
    },
    {
     "id": "azure_long_tentacle_jellyfish_group",
     "label": "Azure Long-Tentacle Jellyfish",
     "action": "add",
     "count": 1
    }
   ]
  },
  {
   "id": "desert",
   "title": "Desert Oasis",
   "prompt": "A lush desert oasis among red rock: giant tree ferns with arching feathered fronds, powdery silver-blue agave rosettes, barrel cacti in vivid orange bloom, sandstone outcrops and distant buttes, hazy warm light.",
   "objects": [
    {
     "id": "blue_agave_plant",
     "label": "Blue Agave Plant",
     "action": "add",
     "count": null
    },
    {
     "id": "cactus_flower",
     "label": "Cactus Flower",
     "action": "replace",
     "count": null
    },
    {
     "id": "giant_tree_fern",
     "label": "Giant Tree Fern",
     "action": "replace",
     "count": null
    }
   ]
  },
  {
   "id": "desert_s3",
   "title": "Cactus Desert",
   "prompt": "A sun-baked cactus desert: giant ribbed saguaro cacti with thick arms, dusty oasis palms, round barrel cacti crowned with magenta flowers, golden-scaled pangolins, pale pink sand.",
   "objects": [
    {
     "id": "egypt_sun_baked_palm",
     "label": "Sun-Baked Palm",
     "action": "add",
     "count": null
    },
    {
     "id": "giant_saguaro_cactus",
     "label": "Giant Saguaro Cactus",
     "action": "add",
     "count": null
    },
    {
     "id": "flowering_globular_cactus",
     "label": "Flowering Globular Cactus",
     "action": "add",
     "count": null
    },
    {
     "id": "golden_pangolin",
     "label": "Golden Pangolin",
     "action": "add",
     "count": 2
    }
   ]
  },
  {
   "id": "forest_seed2",
   "title": "Sci-Fi Forest",
   "prompt": "A metallic sci-fi forest: alien trees with mirror-polished chrome trunks, dense canopies of glowing pale cyan leaves, clusters of glossy golden spherical fruits, and a ground thickly carpeted with small glowing blue mushrooms.",
   "objects": [
    {
     "id": "scifi_glow_tree_high_rerun_0916_tree",
     "label": "Sci-Fi Glow Tree",
     "action": "replace",
     "count": null
    },
    {
     "id": "glowing_blue_mushroom",
     "label": "Glowing Blue Mushroom",
     "action": "add",
     "count": 1
    }
   ]
  },
  {
   "id": "mountain",
   "title": "Misty Slope",
   "prompt": "A misty alpine slope in thick fog: lime trees carrying many round vivid-green limes and small white blossoms, a bald eagle gliding with outstretched wings, clumps of silvergrass raising feathery silver-white plumes, low woolly snow lotus among the stones, reddish stony ground.",
   "objects": [
    {
     "id": "silvergrass",
     "label": "Silvergrass",
     "action": "add",
     "count": 1
    },
    {
     "id": "lime_tree",
     "label": "Lime Tree",
     "action": "replace",
     "count": null
    },
    {
     "id": "eagle",
     "label": "Eagle",
     "action": "add",
     "count": 1
    }
   ]
  },
  {
   "id": "mountain_seed1",
   "title": "Alpine Garden",
   "prompt": "An enchanted alpine garden at dusk: white alpine hares with black-tipped ears, masses of pink and violet blossoms, snow-covered rocks, pale grass tufts, dark earth, soft twilight.",
   "objects": [
    {
     "id": "alpine_hare",
     "label": "Alpine Hare",
     "action": "add",
     "count": 5
    },
    {
     "id": "pink_blossom_glade",
     "label": "Pink Blossom Glade",
     "action": "add",
     "count": 1
    },
    {
     "id": "blue_jacaranda_tree",
     "label": "Blue Jacaranda Tree",
     "action": "replace",
     "count": null
    }
   ]
  },
  {
   "id": "plain_lily",
   "title": "Lily Plain",
   "prompt": "A serene flowering plain: large pure white funnel-shaped calla lilies on broad glossy leaves, blue and violet hydrangea bushes, a peacock fanning its blue-green eye-spotted tail, tall pines, mossy grass.",
   "objects": [
    {
     "id": "white_calla_lily",
     "label": "White Calla Lily",
     "action": "add",
     "count": 1
    },
    {
     "id": "blue_hydrangea_bush",
     "label": "Blue Hydrangea Bush",
     "action": "replace",
     "count": null
    },
    {
     "id": "monkey_puzzle_tree",
     "label": "Monkey Puzzle Tree",
     "action": "add",
     "count": null
    },
    {
     "id": "peacock",
     "label": "Peacock",
     "action": "add",
     "count": 1
    },
    {
     "id": "sword_billed_hummingbird",
     "label": "Sword Billed Hummingbird",
     "action": "add",
     "count": 4
    }
   ]
  },
  {
   "id": "plain_sunflower",
   "title": "Flowering Meadow",
   "prompt": "A hazy flowering meadow: masses of small flat yellow daisy-like sunflowers on tall stems, blooming rose bushes in coral pink, orange and white, big fuzzy black-and-yellow bees in flight, broad dark-green trees, fallen logs.",
   "objects": [
    {
     "id": "sunflower",
     "label": "Sunflower",
     "action": "add",
     "count": 1
    },
    {
     "id": "acacia_tree",
     "label": "Acacia Tree",
     "action": "replace",
     "count": null
    },
    {
     "id": "bee",
     "label": "Bee",
     "action": "add",
     "count": 12
    },
    {
     "id": "garden_rose_bush",
     "label": "Garden Rose Bush",
     "action": "replace",
     "count": null
    }
   ]
  },
  {
   "id": "river",
   "title": "Willow River",
   "prompt": "A rustic river canyon at dusk: a covered wooden bridge with a gabled shingle roof, cascading green weeping willows, spikes of purple lavender, black-and-white ducks, red rock walls, warm dim light.",
   "objects": [
    {
     "id": "weeping_willow",
     "label": "Weeping Willow",
     "action": "add",
     "count": null
    },
    {
     "id": "lavender",
     "label": "Lavender",
     "action": "add",
     "count": 1
    },
    {
     "id": "giant_dragonfly",
     "label": "Giant Dragonfly",
     "action": "add",
     "count": 2
    },
    {
     "id": "covered_wooden_bridge",
     "label": "Covered Wooden Bridge",
     "action": "add",
     "count": 1
    },
    {
     "id": "black_white_magpie_duck",
     "label": "Black-and-White Magpie Duck",
     "action": "add",
     "count": 3
    }
   ]
  },
  {
   "id": "river_s3_japan",
   "title": "Japanese Garden",
   "prompt": "A Japanese river garden: a flowering cherry tree with airy pale pink blossom clusters, a vermilion arched wooden footbridge, grey stone lanterns with pagoda roofs, dense bird-of-paradise plants with orange and blue blooms.",
   "objects": [
    {
     "id": "cherry_blossom_trees_slim",
     "label": "Cherry Blossom Tree (slim)",
     "action": "replace",
     "count": null
    },
    {
     "id": "japanese_red_arch_bridge",
     "label": "Japanese Red Arch Bridge",
     "action": "add",
     "count": 1
    },
    {
     "id": "japanese_stone_lantern",
     "label": "Japanese Stone Lantern",
     "action": "add",
     "count": 3
    },
    {
     "id": "bird_of_paradise_flower",
     "label": "Bird Of Paradise Flower",
     "action": "add",
     "count": 1
    }
   ]
  },
  {
   "id": "river_seed4",
   "title": "Jacaranda Riverbank",
   "prompt": "A riverbank drowned in purple bloom: jacaranda trees carrying masses of lavender-violet trumpet flowers, azalea bushes covered in bright pink blossom, a large sika deer with tall antlers standing on the open ground by the water, sandy banks, pale sunlit rock cliff.",
   "objects": [
    {
     "id": "jacaranda_purple_tree",
     "label": "Jacaranda Purple Tree",
     "action": "replace",
     "count": null
    },
    {
     "id": "sika_deer",
     "label": "Sika Deer",
     "action": "add",
     "count": 3
    },
    {
     "id": "pink_azalea_bush",
     "label": "Pink Azalea Bush",
     "action": "replace",
     "count": null
    }
   ]
  },
  {
   "id": "sakura_firefly",
   "title": "Sakura Forest",
   "prompt": "A cherry blossom forest: dense ruffled pale pink blossoms crowding every branch, a few scattered green leaves, pale birch and dark red-brown trunks, two large red foxes running across the pink forest floor.",
   "objects": [
    {
     "id": "cherry_blossom_trees",
     "label": "Cherry Blossom Tree",
     "action": "replace",
     "count": null
    },
    {
     "id": "red_fox_v2",
     "label": "Red Fox",
     "action": "add",
     "count": 2
    }
   ]
  },
  {
   "id": "snowy_mountain",
   "title": "Snowy Mountain",
   "prompt": "A festive snowy mountain range: rainbow-striped parachute canopies drifting over the slopes, decorated christmas trees hung with gold and red baubles, white domed igloos, deep blue sky.",
   "objects": [
    {
     "id": "christmas_tree_shanda",
     "label": "Christmas Tree",
     "action": "add",
     "count": null
    },
    {
     "id": "colorful_parachute",
     "label": "Colorful Parachute",
     "action": "add",
     "count": 3
    },
    {
     "id": "igloo_2",
     "label": "Igloo",
     "action": "add",
     "count": 4
    }
   ]
  },
  {
   "id": "under_water",
   "title": "Underwater Seascape",
   "prompt": "A colourful underwater seascape: blue tangs with royal-blue bodies and bright yellow tails, golden-yellow kelp fronds, pale coral branches, a deep red spiny king crab, deep blue water.",
   "objects": [
    {
     "id": "blue_tang",
     "label": "Blue Tang",
     "action": "add",
     "count": 6
    },
    {
     "id": "rainbow_sea_fan",
     "label": "Rainbow Sea Fan",
     "action": "add",
     "count": 1
    },
    {
     "id": "king_crab",
     "label": "King Crab",
     "action": "add",
     "count": 1
    },
    {
     "id": "golden_kelp",
     "label": "Golden Kelp",
     "action": "replace",
     "count": null
    }
   ]
  }
 ],
 "objects": [
  {
    "id": "striped_okapi",
    "label": "Striped Okapi"
  },
  {
    "id": "peacock_mantis_shrimp",
    "label": "Peacock Mantis Shrimp"
  },
  {
    "id": "blue_jacaranda_tree",
    "label": "Blue Jacaranda Tree"
  },
  {
    "id": "alpine_hare",
    "label": "Alpine Hare"
  },
  {
    "id": "hummingbird",
    "label": "Hummingbird"
  },
  {
    "id": "peacock",
    "label": "Peacock"
  },
  {
    "id": "reindeer",
    "label": "Reindeer"
  },
  {
    "id": "red_panda",
    "label": "Red Panda"
  },
  {
    "id": "musk_ox",
    "label": "Musk Ox"
  },
  {
    "id": "bee",
    "label": "Bee"
  },
  {
    "id": "slipper_lobster",
    "label": "Slipper Lobster"
  },
  {
    "id": "coral_blossom_bush",
    "label": "Coral Blossom Bush"
  },
  {
    "id": "flowering_globular_cactus",
    "label": "Flowering Globular Cactus"
  },
  {
    "id": "white_birch_grove_tree",
    "label": "White Birch Grove"
  },
  {
    "id": "chameleon_rainbow",
    "label": "Rainbow Chameleon"
  },
  {
    "id": "red_handfish",
    "label": "Red Handfish"
  }
],
 "diversity": [
  {
   "id": "koi_fish",
   "label": "Koi Fish"
  },
  {
   "id": "orange_maple_samara",
   "label": "Orange Maple Samara"
  },
  {
   "id": "pink_mossy_boulder",
   "label": "Pink Mossy Boulder"
  },
  {
   "id": "cosmos_flower",
   "label": "Cosmos Flower"
  },
  {
   "id": "garden_rose_bush",
   "label": "Garden Rose Bush"
  },
  {
   "id": "heart_shaped_tree",
   "label": "Heart-Shaped Tree"
  },
  {
   "id": "anemone_seed_palette",
   "label": "Sea Anemone"
  },
  {
   "id": "banana_tree",
   "label": "Banana Tree"
  },
  {
   "id": "black_goat",
   "label": "Black Goat"
  },
  {
   "id": "camping_tent",
   "label": "Camping Tent"
  },
  {
   "id": "candy_tree",
   "label": "Candy Tree"
  },
  {
   "id": "octopus",
   "label": "Octopus"
  }
 ]
};
