const modules = [
  {
    id: "sequencing",
    name: "Sequencing Lab",
    accent: "#ff6b6b",
    exercises: [
      {
        id: "SEQ-1",
        title: "Wake Robo Spark",
        prompt: "Robo Spark wants to start the day with energy! Help turn the robot on in the correct order.",
        instruction: "Tap each step in the order it should happen.",
        type: "sequencing",
        hint: "Think about powering up before stretching or celebrating.",
        image: { emoji: "🤖", colors: ["#ffd166", "#ff6b6b"] },
        steps: [
          { id: "a", text: "Press the power button", order: 1 },
          { id: "b", text: "Boot up the robot eyes", order: 2 },
          { id: "c", text: "Do the morning victory pose", order: 3 }
        ]
      },
      {
        id: "SEQ-2",
        title: "Rainbow Smoothie Mixer",
        prompt: "Luna is blending a rainbow smoothie for the Coding Carnival.",
        instruction: "Arrange the steps to blend the smoothie.",
        type: "sequencing",
        hint: "You have to prepare the ingredients before pouring.",
        image: { emoji: "🍓", colors: ["#ffafcc", "#bde0fe"] },
        steps: [
          { id: "a", text: "Place the blender jar", order: 1 },
          { id: "b", text: "Add chopped fruit", order: 2 },
          { id: "c", text: "Press blend until smooth", order: 3 },
          { id: "d", text: "Pour into glowing cups", order: 4 }
        ]
      },
      {
        id: "SEQ-3",
        title: "Rocket Launch Countdown",
        prompt: "The mini rocket wants to reach the neon stars.",
        instruction: "Sequence the countdown steps.",
        type: "sequencing",
        hint: "Check systems, then countdown, then launch!",
        image: { emoji: "🚀", colors: ["#90e0ef", "#ffcad4"] },
        steps: [
          { id: "a", text: "Check fuel tanks", order: 1 },
          { id: "b", text: "Begin 3-2-1 countdown", order: 2 },
          { id: "c", text: "Ignite boosters", order: 3 },
          { id: "d", text: "Blast off!", order: 4 }
        ]
      },
      {
        id: "SEQ-4",
        title: "Treasure Map Painting",
        prompt: "Captain Pixel is painting a glow-in-the-dark treasure map.",
        instruction: "Put the painting steps in order.",
        type: "sequencing",
        hint: "Create the base before adding details and sparkles.",
        image: { emoji: "🗺️", colors: ["#ffe169", "#f8961e"] },
        steps: [
          { id: "a", text: "Sketch the island outline", order: 1 },
          { id: "b", text: "Color the ocean blue", order: 2 },
          { id: "c", text: "Draw the dotted path", order: 3 },
          { id: "d", text: "Add glittering X marks", order: 4 }
        ]
      },
      {
        id: "SEQ-5",
        title: "Coding Garden Sprouts",
        prompt: "Pixel plants code seeds that grow into ideas!",
        instruction: "Help the sprouts grow by ordering the steps.",
        type: "sequencing",
        hint: "Plant, water, and give light before celebrating.",
        image: { emoji: "🌱", colors: ["#b7efc5", "#52b788"] },
        steps: [
          { id: "a", text: "Plant the code seed", order: 1 },
          { id: "b", text: "Water with logic droplets", order: 2 },
          { id: "c", text: "Shine the idea lamp", order: 3 },
          { id: "d", text: "Watch the sprout dance", order: 4 }
        ]
      },
      {
        id: "SEQ-6",
        title: "Astro Chef Sandwich",
        prompt: "Chef Nova prepares a floating picnic sandwich for astronauts.",
        instruction: "Sequence the sandwich-making steps.",
        type: "sequencing",
        hint: "Start with bread and layer ingredients before closing.",
        image: { emoji: "🥪", colors: ["#ffdd95", "#ffd6a5"] },
        steps: [
          { id: "a", text: "Place the bottom bread slice", order: 1 },
          { id: "b", text: "Stack veggies and stardust sauce", order: 2 },
          { id: "c", text: "Add the cheese comet", order: 3 },
          { id: "d", text: "Top with the final slice", order: 4 }
        ]
      },
      {
        id: "SEQ-7",
        title: "Glow Bug Parade",
        prompt: "Little glow bugs are lining up for the night parade.",
        instruction: "Arrange what happens so the parade begins right.",
        type: "sequencing",
        hint: "Gather, line up, then start moving.",
        image: { emoji: "🪲", colors: ["#8ecae6", "#ffafcc"] },
        steps: [
          { id: "a", text: "Wake the glow bugs", order: 1 },
          { id: "b", text: "Line them by color", order: 2 },
          { id: "c", text: "Start the marching song", order: 3 },
          { id: "d", text: "Parade past the cheering kids", order: 4 }
        ]
      },
      {
        id: "SEQ-8",
        title: "Pixel Pizza Party",
        prompt: "Tonight is pizza coding night!",
        instruction: "Select the steps in order to bake the pizza.",
        type: "sequencing",
        hint: "Prepare dough before adding toppings and baking.",
        image: { emoji: "🍕", colors: ["#ffb703", "#fb8500"] },
        steps: [
          { id: "a", text: "Roll the cosmic dough", order: 1 },
          { id: "b", text: "Paint sauce swirls", order: 2 },
          { id: "c", text: "Sprinkle topping constellations", order: 3 },
          { id: "d", text: "Bake until cheesy stars melt", order: 4 }
        ]
      },
      {
        id: "SEQ-9",
        title: "Hoverboard Tune-Up",
        prompt: "Ria's hoverboard needs a quick tune-up before the race.",
        instruction: "Put the tune-up steps in order.",
        type: "sequencing",
        hint: "Clean, check, charge, then test ride.",
        image: { emoji: "🛹", colors: ["#a0c4ff", "#cdb4db"] },
        steps: [
          { id: "a", text: "Wipe away moon dust", order: 1 },
          { id: "b", text: "Tighten sparkle wheels", order: 2 },
          { id: "c", text: "Charge the energy cells", order: 3 },
          { id: "d", text: "Test ride in the glow tunnel", order: 4 }
        ]
      },
      {
        id: "SEQ-10",
        title: "Mystery Code Cake",
        prompt: "Bake a cake that reveals a secret message when sliced!",
        instruction: "Sequence the baking actions.",
        type: "sequencing",
        hint: "Mix ingredients before baking and decorating.",
        image: { emoji: "🎂", colors: ["#ffc8dd", "#cdb4db"] },
        steps: [
          { id: "a", text: "Preheat the neon oven", order: 1 },
          { id: "b", text: "Stir batter with message sprinkles", order: 2 },
          { id: "c", text: "Bake until fluffy", order: 3 },
          { id: "d", text: "Ice with glowing frosting", order: 4 }
        ]
      },
      {
        id: "SEQ-11",
        title: "Bubble Bot Bath",
        prompt: "Bubble Bot needs a squeaky-clean tune-up.",
        instruction: "Help Bubble Bot wash in order.",
        type: "sequencing",
        hint: "Rinse, scrub, rinse again, then polish.",
        image: { emoji: "🫧", colors: ["#caf0f8", "#ade8f4"] },
        steps: [
          { id: "a", text: "Spray with warm bubbles", order: 1 },
          { id: "b", text: "Scrub gears with soft brush", order: 2 },
          { id: "c", text: "Rinse off the soap", order: 3 },
          { id: "d", text: "Polish to a rainbow shine", order: 4 }
        ]
      },
      {
        id: "SEQ-12",
        title: "Sky Lantern Festival",
        prompt: "Friends are launching wish lanterns into the twilight sky.",
        instruction: "Organize the lantern launch.",
        type: "sequencing",
        hint: "Decorate, light, then release together.",
        image: { emoji: "🏮", colors: ["#ff9e00", "#ffb703"] },
        steps: [
          { id: "a", text: "Paint the lantern wishes", order: 1 },
          { id: "b", text: "Light the gentle flame", order: 2 },
          { id: "c", text: "Countdown with friends", order: 3 },
          { id: "d", text: "Release into the sky", order: 4 }
        ]
      },
      {
        id: "SEQ-13",
        title: "Coding Carnival Ride",
        prompt: "Build the mini roller coaster for the carnival robots.",
        instruction: "Arrange the building steps.",
        type: "sequencing",
        hint: "Build support first, then track, then test.",
        image: { emoji: "🎢", colors: ["#90be6d", "#f9c74f"] },
        steps: [
          { id: "a", text: "Assemble the sturdy base", order: 1 },
          { id: "b", text: "Snap in the glowing tracks", order: 2 },
          { id: "c", text: "Secure the safety lights", order: 3 },
          { id: "d", text: "Send a test cart zooming", order: 4 }
        ]
      },
      {
        id: "SEQ-14",
        title: "Ocean Cleanup Drone",
        prompt: "Program the sea drone to tidy the coral reef.",
        instruction: "Put the mission steps in order.",
        type: "sequencing",
        hint: "Scan first, collect trash, then recycle.",
        image: { emoji: "🌊", colors: ["#48cae4", "#0096c7"] },
        steps: [
          { id: "a", text: "Scan coral for debris", order: 1 },
          { id: "b", text: "Scoop floating plastic", order: 2 },
          { id: "c", text: "Drop trash in recycler", order: 3 },
          { id: "d", text: "Wave goodbye to fish", order: 4 }
        ]
      },
      {
        id: "SEQ-15",
        title: "Space Pajama Routine",
        prompt: "Time for the astronauts to get ready for bed!",
        instruction: "Organize the bedtime routine steps.",
        type: "sequencing",
        hint: "Change, brush, read, then lights out.",
        image: { emoji: "🛌", colors: ["#bde0fe", "#caffbf"] },
        steps: [
          { id: "a", text: "Change into zero-gravity pajamas", order: 1 },
          { id: "b", text: "Brush teeth with star paste", order: 2 },
          { id: "c", text: "Read a moon story", order: 3 },
          { id: "d", text: "Dim the cabin lights", order: 4 }
        ]
      },
      {
        id: "SEQ-16",
        title: "Robot Soccer Warm-Up",
        prompt: "The coding club robots are warming up for a match.",
        instruction: "Line up the warm-up activities.",
        type: "sequencing",
        hint: "Stretch before dribbling and shooting.",
        image: { emoji: "⚽", colors: ["#a7c957", "#6a994e"] },
        steps: [
          { id: "a", text: "Charge power cells", order: 1 },
          { id: "b", text: "Stretch metal joints", order: 2 },
          { id: "c", text: "Practice dribbling", order: 3 },
          { id: "d", text: "Shoot at the neon goal", order: 4 }
        ]
      },
      {
        id: "SEQ-17",
        title: "Crystal Coding Concert",
        prompt: "The band is ready to perform their coding rhythm.",
        instruction: "Help them set up in order.",
        type: "sequencing",
        hint: "Set the stage, tune instruments, then perform.",
        image: { emoji: "🎶", colors: ["#ffd166", "#06d6a0"] },
        steps: [
          { id: "a", text: "Place the crystal stage lights", order: 1 },
          { id: "b", text: "Tune the digital drums", order: 2 },
          { id: "c", text: "Test the microphones", order: 3 },
          { id: "d", text: "Start the concert", order: 4 }
        ]
      },
      {
        id: "SEQ-18",
        title: "Gadget Glider Build",
        prompt: "Build a glider that soars across the coding clubhouse.",
        instruction: "Arrange the building steps.",
        type: "sequencing",
        hint: "Attach wings after building the frame.",
        image: { emoji: "🪁", colors: ["#ffadad", "#ffd6a5"] },
        steps: [
          { id: "a", text: "Fold the glider frame", order: 1 },
          { id: "b", text: "Attach shimmering wings", order: 2 },
          { id: "c", text: "Add the guiding tail", order: 3 },
          { id: "d", text: "Launch across the room", order: 4 }
        ]
      },
      {
        id: "SEQ-19",
        title: "Starlight Coding Camp",
        prompt: "Campers are setting up their coding campsite.",
        instruction: "Help them set up in order.",
        type: "sequencing",
        hint: "Pitch tent before decorating and roasting snacks.",
        image: { emoji: "🏕️", colors: ["#ffb4a2", "#e5989b"] },
        steps: [
          { id: "a", text: "Pitch the glowing tent", order: 1 },
          { id: "b", text: "Connect the solar lanterns", order: 2 },
          { id: "c", text: "Place the coding tablet", order: 3 },
          { id: "d", text: "Roast marshmallow circuits", order: 4 }
        ]
      },
      {
        id: "SEQ-20",
        title: "Time-Travel Backpack",
        prompt: "Pack the backpack that lets you visit famous coders!",
        instruction: "Put the packing steps in order.",
        type: "sequencing",
        hint: "Gather tools before sealing the bag.",
        image: { emoji: "🎒", colors: ["#a0c4ff", "#ffcad4"] },
        steps: [
          { id: "a", text: "Collect adventure gadgets", order: 1 },
          { id: "b", text: "Pack the hologram map", order: 2 },
          { id: "c", text: "Add snacks for the journey", order: 3 },
          { id: "d", text: "Zip the time backpack", order: 4 }
        ]
      }
    ]
  },
  {
    id: "events",
    name: "Events & Conditions Lab",
    accent: "#4cc9f0",
    exercises: [
      {
        id: "EVT-1",
        title: "Rainbow Door Sensor",
        prompt: "A door only opens when it hears the secret knock rhythm.",
        instruction: "Choose the code that reacts correctly to the knock event.",
        type: "choices",
        hint: "We need to check both the pattern and number of knocks.",
        image: { emoji: "🚪", colors: ["#ade8f4", "#caf0f8"] },
        choices: [
          {
            id: "a",
            text: "if (knocks === 3) { openDoor(); }",
            correct: false,
            explanation: "The code counts the knocks but forgets to match the rhythm pattern."
          },
          {
            id: "b",
            text: "if (isRhythmCorrect && knocks === 3) { openDoor(); }",
            correct: true,
            explanation: "It checks the rhythm and the number of knocks before opening."
          },
          {
            id: "c",
            text: "openDoor(); playLights();",
            correct: false,
            explanation: "This always opens the door even without knocks."
          }
        ]
      },
      {
        id: "EVT-2",
        title: "Glow Garden Sprinklers",
        prompt: "Sprinklers should water the garden when it's sunny and the soil is dry.",
        instruction: "Pick the code that uses the weather sensor correctly.",
        type: "choices",
        hint: "Check both the weather and soil moisture before watering.",
        image: { emoji: "🌼", colors: ["#caffbf", "#ffd6a5"] },
        choices: [
          {
            id: "a",
            text: "if (isSunny || soilDry) { startSprinklers(); }",
            correct: false,
            explanation: "Using OR means it waters when only one condition is true."
          },
          {
            id: "b",
            text: "if (isSunny && soilDry) { startSprinklers(); }",
            correct: true,
            explanation: "Both conditions must be true before watering."
          },
          {
            id: "c",
            text: "if (!isSunny && soilDry) { startSprinklers(); }",
            correct: false,
            explanation: "This waters when it is not sunny, which is the opposite of what we want."
          }
        ]
      },
      {
        id: "EVT-3",
        title: "Dance Pad Controller",
        prompt: "Players step on colored pads to trigger music loops.",
        instruction: "Choose the code that plays a sound when the blue pad is pressed.",
        type: "choices",
        hint: "Listen for the event type and pad color.",
        image: { emoji: "🕺", colors: ["#bde0fe", "#ffcfd2"] },
        choices: [
          {
            id: "a",
            text: "if (event.pad === 'blue') { playLoop('sky'); }",
            correct: true,
            explanation: "It checks for the blue pad and plays the sky loop."
          },
          {
            id: "b",
            text: "if (event.type === 'press') { playLoop('sky'); }",
            correct: false,
            explanation: "This plays for every press, not just the blue pad."
          },
          {
            id: "c",
            text: "if (event.pad === 'blue') { stopMusic(); }",
            correct: false,
            explanation: "This stops the music instead of playing it."
          }
        ]
      },
      {
        id: "EVT-4",
        title: "Space Library Scanner",
        prompt: "Books float into the scanner to be sorted.",
        instruction: "Pick the condition that sends mystery books to the secret shelf.",
        type: "choices",
        hint: "We only want to send books tagged as mystery.",
        image: { emoji: "📚", colors: ["#ffc8dd", "#cdb4db"] },
        choices: [
          {
            id: "a",
            text: "if (book.genre === 'mystery') { sendToSecretShelf(); }",
            correct: true,
            explanation: "It checks the genre and routes the book correctly."
          },
          {
            id: "b",
            text: "if (book.isNew) { sendToSecretShelf(); }",
            correct: false,
            explanation: "New books of any genre would be sent, not just mysteries."
          },
          {
            id: "c",
            text: "sendToSecretShelf();",
            correct: false,
            explanation: "This sends every book without checking."
          }
        ]
      },
      {
        id: "EVT-5",
        title: "Magnetic Maze Game",
        prompt: "Players guide a comet marble using tilt sensors.",
        instruction: "Choose the code that reacts to a left tilt event.",
        type: "choices",
        hint: "Look for an event listener checking the direction.",
        image: { emoji: "🧲", colors: ["#ffadad", "#ffd6a5"] },
        choices: [
          {
            id: "a",
            text: "if (event.direction === 'left') { moveComet(-1); }",
            correct: true,
            explanation: "It moves the comet left when the direction matches."
          },
          {
            id: "b",
            text: "if (event.speed > 5) { moveComet(-1); }",
            correct: false,
            explanation: "Speed is checked, not the direction."
          },
          {
            id: "c",
            text: "moveComet(1);",
            correct: false,
            explanation: "This always moves right, no conditions."
          }
        ]
      },
      {
        id: "EVT-6",
        title: "Aurora Stage Lights",
        prompt: "The stage lights brighten when the performer raises both arms.",
        instruction: "Select the condition that checks for both arms up.",
        type: "choices",
        hint: "The condition must check two sensors at once.",
        image: { emoji: "🎤", colors: ["#ffd166", "#06d6a0"] },
        choices: [
          {
            id: "a",
            text: "if (armsUp.left && armsUp.right) { brightenLights(); }",
            correct: true,
            explanation: "Both arms must be up to brighten the lights."
          },
          {
            id: "b",
            text: "if (armsUp.left || armsUp.right) { brightenLights(); }",
            correct: false,
            explanation: "This would brighten if only one arm is raised."
          },
          {
            id: "c",
            text: "brightenLights();",
            correct: false,
            explanation: "Lights brighten regardless of any event."
          }
        ]
      },
      {
        id: "EVT-7",
        title: "Underwater Melody Reef",
        prompt: "Fish swim by instruments to trigger ocean songs.",
        instruction: "Pick the event that plays music for rainbow fish.",
        type: "choices",
        hint: "Listen for the fishType and speed.",
        image: { emoji: "🐠", colors: ["#90e0ef", "#48cae4"] },
        choices: [
          {
            id: "a",
            text: "if (fish.type === 'rainbow') { playMelody(fish.color); }",
            correct: true,
            explanation: "It checks that the fish is rainbow before playing."
          },
          {
            id: "b",
            text: "if (fish.speed > 4) { playMelody('bubble'); }",
            correct: false,
            explanation: "Speed is checked, not the fish type."
          },
          {
            id: "c",
            text: "playMelody('bubble');",
            correct: false,
            explanation: "Music plays for every fish without checking type."
          }
        ]
      },
      {
        id: "EVT-8",
        title: "Code Drone Delivery",
        prompt: "The delivery drone should drop packages only at the correct beacon.",
        instruction: "Choose the condition that makes sure the beacon color matches.",
        type: "choices",
        hint: "Match the signal color with the package tag.",
        image: { emoji: "📦", colors: ["#fcbf49", "#f77f00"] },
        choices: [
          {
            id: "a",
            text: "if (signal.color === package.tagColor) { dropPackage(); }",
            correct: true,
            explanation: "It ensures the beacon color matches the package tag."
          },
          {
            id: "b",
            text: "if (package.weight < 5) { dropPackage(); }",
            correct: false,
            explanation: "Weight is unrelated to the beacon color."
          },
          {
            id: "c",
            text: "dropPackage();",
            correct: false,
            explanation: "Drops every package without any event."
          }
        ]
      },
      {
        id: "EVT-9",
        title: "Laser Maze Alarm",
        prompt: "An alarm should sound when two beams are broken at once.",
        instruction: "Select the code that detects both beams crossing.",
        type: "choices",
        hint: "Use AND logic to require both beams.",
        image: { emoji: "🕳️", colors: ["#ffb4a2", "#fcd5ce"] },
        choices: [
          {
            id: "a",
            text: "if (beamA && beamB) { soundAlarm(); }",
            correct: true,
            explanation: "Both beams must break before sounding the alarm."
          },
          {
            id: "b",
            text: "if (beamA || beamB) { soundAlarm(); }",
            correct: false,
            explanation: "The alarm would sound if just one beam broke."
          },
          {
            id: "c",
            text: "soundAlarm();",
            correct: false,
            explanation: "The alarm never stops!"
          }
        ]
      },
      {
        id: "EVT-10",
        title: "Friendship Bracelet Maker",
        prompt: "A loom weaves special beads when friends pick the same color.",
        instruction: "Choose the condition that checks the match.",
        type: "choices",
        hint: "Compare both color choices.",
        image: { emoji: "📿", colors: ["#ffd6a5", "#fdffb6"] },
        choices: [
          {
            id: "a",
            text: "if (friendA.color === friendB.color) { weaveSpecialBead(); }",
            correct: true,
            explanation: "It weaves only when both colors match."
          },
          {
            id: "b",
            text: "if (friendA.color !== friendB.color) { weaveSpecialBead(); }",
            correct: false,
            explanation: "This triggers when colors are different."
          },
          {
            id: "c",
            text: "weaveSpecialBead();",
            correct: false,
            explanation: "It weaves no matter what colors they choose."
          }
        ]
      },
      {
        id: "EVT-11",
        title: "Astro Arcade Bonus",
        prompt: "A bonus round begins when the score is high and time is left.",
        instruction: "Pick the code that checks both the score and timer.",
        type: "choices",
        hint: "AND is needed to require both conditions.",
        image: { emoji: "🕹️", colors: ["#ff9f1c", "#ffbf69"] },
        choices: [
          {
            id: "a",
            text: "if (score > 2000 && timeLeft > 30) { startBonusRound(); }",
            correct: true,
            explanation: "Bonus only starts with enough points and time."
          },
          {
            id: "b",
            text: "if (score > 2000 || timeLeft > 30) { startBonusRound(); }",
            correct: false,
            explanation: "This would start when just one condition is true."
          },
          {
            id: "c",
            text: "if (score < 2000) { startBonusRound(); }",
            correct: false,
            explanation: "This starts when the score is too low."
          }
        ]
      },
      {
        id: "EVT-12",
        title: "Secret Snack Vault",
        prompt: "Only campers with both a code badge and snack token can open the vault.",
        instruction: "Choose the condition that checks for both items.",
        type: "choices",
        hint: "Both badge and token are required.",
        image: { emoji: "🍪", colors: ["#ffcbf2", "#f3c4fb"] },
        choices: [
          {
            id: "a",
            text: "if (camper.hasBadge && camper.hasToken) { openVault(); }",
            correct: true,
            explanation: "The vault opens only when both conditions are true."
          },
          {
            id: "b",
            text: "if (camper.hasBadge || camper.hasToken) { openVault(); }",
            correct: false,
            explanation: "It would open with just one item."
          },
          {
            id: "c",
            text: "openVault();",
            correct: false,
            explanation: "Everyone could open the vault without items."
          }
        ]
      },
      {
        id: "EVT-13",
        title: "Hover Pet Feeder",
        prompt: "The feeder dispenses treats when the hover pet waves and says 'please'.",
        instruction: "Select the code that checks both the wave and voice command.",
        type: "choices",
        hint: "Two sensors must be true.",
        image: { emoji: "🐾", colors: ["#caffbf", "#bde0fe"] },
        choices: [
          {
            id: "a",
            text: "if (pet.waves && pet.saysPlease) { dropTreat(); }",
            correct: true,
            explanation: "Treats drop when both gestures happen together."
          },
          {
            id: "b",
            text: "if (pet.waves || pet.saysPlease) { dropTreat(); }",
            correct: false,
            explanation: "Treats would drop when only one action happens."
          },
          {
            id: "c",
            text: "dropTreat();",
            correct: false,
            explanation: "Treats would fall all the time!"
          }
        ]
      },
      {
        id: "EVT-14",
        title: "Mystery Door Puzzle",
        prompt: "A door opens when the code word is shouted and the lantern glows blue.",
        instruction: "Choose the condition that checks both clues.",
        type: "choices",
        hint: "Use AND logic for both events.",
        image: { emoji: "🌀", colors: ["#bde0fe", "#c77dff"] },
        choices: [
          {
            id: "a",
            text: "if (shout.word === 'illuminate' && lantern.color === 'blue') { unlockDoor(); }",
            correct: true,
            explanation: "It waits for the correct word and color."
          },
          {
            id: "b",
            text: "if (shout.word === 'illuminate' || lantern.color === 'blue') { unlockDoor(); }",
            correct: false,
            explanation: "Either clue alone would open the door, which is wrong."
          },
          {
            id: "c",
            text: "unlockDoor();",
            correct: false,
            explanation: "Door opens with no puzzle solving."
          }
        ]
      },
      {
        id: "EVT-15",
        title: "Rocket Lab Safety",
        prompt: "An alarm should sound if the hatch is open while the engine is on.",
        instruction: "Pick the safety condition.",
        type: "choices",
        hint: "Both hatch open and engine running cause danger.",
        image: { emoji: "🚨", colors: ["#ff6b6b", "#ffc300"] },
        choices: [
          {
            id: "a",
            text: "if (hatchOpen && engineOn) { soundAlarm(); }",
            correct: true,
            explanation: "The alarm sounds only when both risky conditions happen."
          },
          {
            id: "b",
            text: "if (hatchOpen || engineOn) { soundAlarm(); }",
            correct: false,
            explanation: "It would sound even if the engine is off but hatch open."
          },
          {
            id: "c",
            text: "soundAlarm();",
            correct: false,
            explanation: "The alarm never stops regardless of safety."
          }
        ]
      },
      {
        id: "EVT-16",
        title: "Coding Campfire Story",
        prompt: "The projector plays a story when someone claps twice and says 'start story'.",
        instruction: "Choose the event listener that waits for both actions.",
        type: "choices",
        hint: "Check for the clap count and the phrase.",
        image: { emoji: "🔥", colors: ["#ffadad", "#ffd6a5"] },
        choices: [
          {
            id: "a",
            text: "if (claps === 2 && phrase === 'start story') { playProjector(); }",
            correct: true,
            explanation: "Both the claps and phrase are required."
          },
          {
            id: "b",
            text: "if (claps === 2 || phrase === 'start story') { playProjector(); }",
            correct: false,
            explanation: "Only one action could start the projector."
          },
          {
            id: "c",
            text: "playProjector();",
            correct: false,
            explanation: "The story would never stop playing."
          }
        ]
      },
      {
        id: "EVT-17",
        title: "Rainforest Rescue Bot",
        prompt: "The bot sprinkles water only when the sensor sees a wilting leaf and the sun is shining.",
        instruction: "Pick the condition that checks both clues.",
        type: "choices",
        hint: "We only water when both are true.",
        image: { emoji: "🌿", colors: ["#95d5b2", "#52b788"] },
        choices: [
          {
            id: "a",
            text: "if (leafWilting && sunIsOut) { sprayWater(); }",
            correct: true,
            explanation: "It sprays only when the leaf needs help and sunlight is available."
          },
          {
            id: "b",
            text: "if (leafWilting || sunIsOut) { sprayWater(); }",
            correct: false,
            explanation: "Water would spray when just one condition happens."
          },
          {
            id: "c",
            text: "sprayWater();",
            correct: false,
            explanation: "It sprays nonstop!"
          }
        ]
      },
      {
        id: "EVT-18",
        title: "Puzzle Portal Game",
        prompt: "A portal opens when the timer is running and all gems are collected.",
        instruction: "Choose the winning condition.",
        type: "choices",
        hint: "Both timer and gems must be checked.",
        image: { emoji: "💎", colors: ["#ffafcc", "#bde0fe"] },
        choices: [
          {
            id: "a",
            text: "if (timerActive && gemsCollected === totalGems) { openPortal(); }",
            correct: true,
            explanation: "It waits for all gems while the timer is still active."
          },
          {
            id: "b",
            text: "if (gemsCollected === totalGems) { openPortal(); }",
            correct: false,
            explanation: "The portal opens even if the timer has ended."
          },
          {
            id: "c",
            text: "if (timerActive) { openPortal(); }",
            correct: false,
            explanation: "The portal opens without collecting gems."
          }
        ]
      },
      {
        id: "EVT-19",
        title: "Singing Statue Plaza",
        prompt: "Statues sing when a visitor waves AND the plaza lights turn purple.",
        instruction: "Select the correct event handler.",
        type: "choices",
        hint: "Both actions must be true at the same time.",
        image: { emoji: "🗽", colors: ["#cdb4db", "#ffafcc"] },
        choices: [
          {
            id: "a",
            text: "if (visitor.waves && lights.color === 'purple') { startSong(); }",
            correct: true,
            explanation: "Both actions trigger the singing together."
          },
          {
            id: "b",
            text: "if (visitor.waves || lights.color === 'purple') { startSong(); }",
            correct: false,
            explanation: "Waving alone or purple lights alone would start the song."
          },
          {
            id: "c",
            text: "startSong();",
            correct: false,
            explanation: "The statues would sing nonstop."
          }
        ]
      },
      {
        id: "EVT-20",
        title: "Ice Cream Weather Bot",
        prompt: "A robot offers ice cream when it's hot AND friends are nearby.",
        instruction: "Choose the condition that checks both.",
        type: "choices",
        hint: "We want both sunshine and friends detected.",
        image: { emoji: "🍦", colors: ["#ffe5ec", "#d8e2dc"] },
        choices: [
          {
            id: "a",
            text: "if (isHotOutside && friendsNearby) { serveIceCream(); }",
            correct: true,
            explanation: "It serves treats only when both conditions are true."
          },
          {
            id: "b",
            text: "if (isHotOutside || friendsNearby) { serveIceCream(); }",
            correct: false,
            explanation: "It would serve ice cream when it's hot even without friends."
          },
          {
            id: "c",
            text: "serveIceCream();",
            correct: false,
            explanation: "The robot would never stop serving!"
          }
        ]
      }
    ]
  },
  {
    id: "loops",
    name: "Looping Lab",
    accent: "#f72585",
    exercises: [
      {
        id: "LOOP-1",
        title: "Star Trail Painter",
        prompt: "Paint five sparkling stars across the sky.",
        instruction: "Choose the loop that paints 5 stars.",
        type: "choices",
        hint: "A loop that runs exactly five times is perfect.",
        image: { emoji: "⭐", colors: ["#fee440", "#ffd6a5"] },
        choices: [
          {
            id: "a",
            text: "for (let i = 0; i < 5; i++) { paintStar(); }",
            correct: true,
            explanation: "The loop runs five times, painting five stars."
          },
          {
            id: "b",
            text: "while (skyIsDark) { paintStar(); }",
            correct: false,
            explanation: "This could paint too many stars without a counter."
          },
          {
            id: "c",
            text: "paintStar(); paintStar();",
            correct: false,
            explanation: "Only two stars are painted manually."
          }
        ]
      },
      {
        id: "LOOP-2",
        title: "Robot Dance Moves",
        prompt: "Robo wants to repeat a dance move three times.",
        instruction: "Pick the loop that repeats the move exactly three times.",
        type: "choices",
        hint: "Count from 1 to 3 or 0 to less than 3.",
        image: { emoji: "🤖", colors: ["#bde0fe", "#ffafcc"] },
        choices: [
          {
            id: "a",
            text: "for (let count = 1; count <= 3; count++) { spin(); }",
            correct: true,
            explanation: "The loop spins three times."
          },
          {
            id: "b",
            text: "for (let count = 0; count <= 3; count++) { spin(); }",
            correct: false,
            explanation: "This spins four times (0,1,2,3)."
          },
          {
            id: "c",
            text: "spin();",
            correct: false,
            explanation: "Only one spin happens."
          }
        ]
      },
      {
        id: "LOOP-3",
        title: "Galaxy Bead Necklace",
        prompt: "We need to add beads from a list to make a necklace.",
        instruction: "Select the loop that goes through each bead in the array.",
        type: "choices",
        hint: "Use a loop that visits each bead once.",
        image: { emoji: "🪐", colors: ["#cdb4db", "#ffcad4"] },
        choices: [
          {
            id: "a",
            text: "for (const bead of beads) { addToNecklace(bead); }",
            correct: true,
            explanation: "The for...of loop visits each bead in order."
          },
          {
            id: "b",
            text: "for (let bead = 0; bead < beads; bead++) { addToNecklace(bead); }",
            correct: false,
            explanation: "It treats beads like a number, not an array length."
          },
          {
            id: "c",
            text: "addToNecklace(beads[0]);",
            correct: false,
            explanation: "Only the first bead is added."
          }
        ]
      },
      {
        id: "LOOP-4",
        title: "Echo Cave Song",
        prompt: "An echo repeats a sound four times before fading.",
        instruction: "Pick the loop that echoes exactly four extra times.",
        type: "choices",
        hint: "Repeat while counter is less than 4.",
        image: { emoji: "🎵", colors: ["#ffb4a2", "#a2d2ff"] },
        choices: [
          {
            id: "a",
            text: "let echo = 0; while (echo < 4) { playEcho(); echo++; }",
            correct: true,
            explanation: "Echo plays four times: 0,1,2,3."
          },
          {
            id: "b",
            text: "while (echo <= 4) { playEcho(); }",
            correct: false,
            explanation: "The echo counter never changes, causing an endless loop."
          },
          {
            id: "c",
            text: "playEcho();",
            correct: false,
            explanation: "Only one echo happens."
          }
        ]
      },
      {
        id: "LOOP-5",
        title: "Candy Conveyor",
        prompt: "A conveyor belts wraps 10 candies with stickers.",
        instruction: "Choose the loop that wraps each candy from an array.",
        type: "choices",
        hint: "Use the length of the candies array to loop.",
        image: { emoji: "🍬", colors: ["#ffc8dd", "#ffafcc"] },
        choices: [
          {
            id: "a",
            text: "for (let i = 0; i < candies.length; i++) { wrapCandy(candies[i]); }",
            correct: true,
            explanation: "It loops through every candy in the array."
          },
          {
            id: "b",
            text: "for (let candy in candies) { wrapCandy(candy); }",
            correct: false,
            explanation: "The loop passes the index string, not the candy."
          },
          {
            id: "c",
            text: "wrapCandy(candies[0]);",
            correct: false,
            explanation: "Only the first candy gets wrapped."
          }
        ]
      },
      {
        id: "LOOP-6",
        title: "Glow Stick Countdown",
        prompt: "Activate glow sticks from 10 down to 1 for the light show.",
        instruction: "Select the loop that counts backward from 10.",
        type: "choices",
        hint: "Start at 10 and keep going while greater than 0.",
        image: { emoji: "🪩", colors: ["#ff6b6b", "#4cc9f0"] },
        choices: [
          {
            id: "a",
            text: "for (let i = 10; i > 0; i--) { activateStick(i); }",
            correct: true,
            explanation: "It activates sticks 10 through 1."
          },
          {
            id: "b",
            text: "for (let i = 0; i < 10; i++) { activateStick(i); }",
            correct: false,
            explanation: "Counts upward instead of downward."
          },
          {
            id: "c",
            text: "activateStick(10);",
            correct: false,
            explanation: "Only one glow stick activates."
          }
        ]
      },
      {
        id: "LOOP-7",
        title: "Bubble Pop Orchestra",
        prompt: "Pop every bubble in a grid until none remain.",
        instruction: "Pick the loop that continues while bubbles remain.",
        type: "choices",
        hint: "Use a while loop that checks the count.",
        image: { emoji: "🫧", colors: ["#caf0f8", "#ade8f4"] },
        choices: [
          {
            id: "a",
            text: "while (bubblesLeft > 0) { popBubble(); bubblesLeft--; }",
            correct: true,
            explanation: "It pops bubbles until the count reaches zero."
          },
          {
            id: "b",
            text: "while (true) { popBubble(); }",
            correct: false,
            explanation: "This loops forever with no stop."
          },
          {
            id: "c",
            text: "popBubble();",
            correct: false,
            explanation: "Only one bubble pops."
          }
        ]
      },
      {
        id: "LOOP-8",
        title: "Dragon Flyer Flags",
        prompt: "Hang a series of flags numbered 1 to 8 on a dragon flyer.",
        instruction: "Choose the loop that counts from 1 to 8 inclusive.",
        type: "choices",
        hint: "Start at 1 and run while the number is less than or equal to 8.",
        image: { emoji: "🏳️", colors: ["#ffd6a5", "#ffcad4"] },
        choices: [
          {
            id: "a",
            text: "for (let flag = 1; flag <= 8; flag++) { hangFlag(flag); }",
            correct: true,
            explanation: "It places flags 1 through 8."
          },
          {
            id: "b",
            text: "for (let flag = 0; flag < 8; flag++) { hangFlag(flag); }",
            correct: false,
            explanation: "This hangs flag 0 and stops at 7."
          },
          {
            id: "c",
            text: "hangFlag(1);",
            correct: false,
            explanation: "Only one flag is hung."
          }
        ]
      },
      {
        id: "LOOP-9",
        title: "Code Beat DJ",
        prompt: "Play a rhythm pattern stored in an array of beats.",
        instruction: "Select the loop that visits each beat index.",
        type: "choices",
        hint: "Use a for loop with beats.length.",
        image: { emoji: "🥁", colors: ["#bde0fe", "#a2d2ff"] },
        choices: [
          {
            id: "a",
            text: "for (let i = 0; i < beats.length; i++) { playBeat(beats[i]); }",
            correct: true,
            explanation: "Each beat is played in order."
          },
          {
            id: "b",
            text: "for (let beat of beats) { playBeat(beats); }",
            correct: false,
            explanation: "It passes the entire array instead of the beat."
          },
          {
            id: "c",
            text: "playBeat(beats[0]);",
            correct: false,
            explanation: "Only the first beat plays."
          }
        ]
      },
      {
        id: "LOOP-10",
        title: "Moonlight Staircase",
        prompt: "Light each step on a staircase with numbers from top to bottom.",
        instruction: "Pick the loop that counts down from the last step to 1.",
        type: "choices",
        hint: "Start at steps.length and go down.",
        image: { emoji: "🪜", colors: ["#caffbf", "#ffd6a5"] },
        choices: [
          {
            id: "a",
            text: "for (let i = steps.length - 1; i >= 0; i--) { lightStep(steps[i]); }",
            correct: true,
            explanation: "It lights steps from the top to the bottom."
          },
          {
            id: "b",
            text: "for (let i = 0; i < steps.length; i++) { lightStep(steps[i]); }",
            correct: false,
            explanation: "This goes from bottom to top instead."
          },
          {
            id: "c",
            text: "lightStep(steps[steps.length - 1]);",
            correct: false,
            explanation: "Only the top step lights up."
          }
        ]
      },
      {
        id: "LOOP-11",
        title: "Treasure Chest Locks",
        prompt: "Turn each lock dial 3 times to open the chest.",
        instruction: "Choose the nested loop that turns each lock three times.",
        type: "choices",
        hint: "Use one loop for locks and one inside for turns.",
        image: { emoji: "🧰", colors: ["#ffb4a2", "#fcd5ce"] },
        choices: [
          {
            id: "a",
            text: "for (const lock of locks) { for (let turn = 0; turn < 3; turn++) { twist(lock); } }",
            correct: true,
            explanation: "Each lock is twisted three times."
          },
          {
            id: "b",
            text: "for (const lock of locks) { twist(lock); }",
            correct: false,
            explanation: "Each lock twists only once."
          },
          {
            id: "c",
            text: "for (let turn = 0; turn < 3; turn++) { twist(locks[0]); }",
            correct: false,
            explanation: "Only the first lock twists."
          }
        ]
      },
      {
        id: "LOOP-12",
        title: "Pixel Path Painter",
        prompt: "Fill a 5x5 grid with glowing pixels.",
        instruction: "Select the nested loops that cover every row and column.",
        type: "choices",
        hint: "Use two loops: one for rows and one for columns.",
        image: { emoji: "🖌️", colors: ["#a2d2ff", "#cdb4db"] },
        choices: [
          {
            id: "a",
            text: "for (let row = 0; row < 5; row++) { for (let col = 0; col < 5; col++) { paintPixel(row, col); } }",
            correct: true,
            explanation: "Both loops cover all 25 pixels."
          },
          {
            id: "b",
            text: "for (let row = 0; row < 5; row++) { paintPixel(row, row); }",
            correct: false,
            explanation: "Only diagonal pixels are painted."
          },
          {
            id: "c",
            text: "paintPixel(0, 0);",
            correct: false,
            explanation: "Only one pixel is painted."
          }
        ]
      },
      {
        id: "LOOP-13",
        title: "Rocket Booster Charging",
        prompt: "Charge boosters until their energy reaches 100%.",
        instruction: "Pick the loop that keeps charging while power is low.",
        type: "choices",
        hint: "Use a while loop with a condition that increases energy.",
        image: { emoji: "🚀", colors: ["#ffadad", "#ffd6a5"] },
        choices: [
          {
            id: "a",
            text: "while (energy < 100) { energy += 10; chargeBooster(); }",
            correct: true,
            explanation: "Energy increases until it reaches 100."
          },
          {
            id: "b",
            text: "while (energy > 100) { chargeBooster(); }",
            correct: false,
            explanation: "This never runs because energy starts lower."
          },
          {
            id: "c",
            text: "chargeBooster();",
            correct: false,
            explanation: "Booster charges only once."
          }
        ]
      },
      {
        id: "LOOP-14",
        title: "Mystery Melody Mixer",
        prompt: "Play each instrument in the band twice for a remix.",
        instruction: "Choose the loop that repeats the band list twice.",
        type: "choices",
        hint: "Use an outer loop for repeats and inner for instruments.",
        image: { emoji: "🎺", colors: ["#ffd6a5", "#fdffb6"] },
        choices: [
          {
            id: "a",
            text: "for (let repeat = 0; repeat < 2; repeat++) { for (const instrument of band) { play(instrument); } }",
            correct: true,
            explanation: "Each instrument plays twice."
          },
          {
            id: "b",
            text: "for (const instrument of band) { play(instrument); }",
            correct: false,
            explanation: "The band plays only once."
          },
          {
            id: "c",
            text: "for (let repeat = 0; repeat < 2; repeat++) { play(band[0]); }",
            correct: false,
            explanation: "Only the first instrument plays twice."
          }
        ]
      },
      {
        id: "LOOP-15",
        title: "Rocket Race Lap Counter",
        prompt: "Spaceships race for 6 laps.",
        instruction: "Pick the loop that counts laps from 1 to 6.",
        type: "choices",
        hint: "Use <= 6 to include the last lap.",
        image: { emoji: "🏁", colors: ["#90e0ef", "#48cae4"] },
        choices: [
          {
            id: "a",
            text: "for (let lap = 1; lap <= 6; lap++) { announceLap(lap); }",
            correct: true,
            explanation: "It announces laps 1 through 6."
          },
          {
            id: "b",
            text: "for (let lap = 0; lap < 6; lap++) { announceLap(lap); }",
            correct: false,
            explanation: "Laps start at 0 instead of 1."
          },
          {
            id: "c",
            text: "announceLap(1);",
            correct: false,
            explanation: "Only the first lap is announced."
          }
        ]
      },
      {
        id: "LOOP-16",
        title: "Code Spark Fireworks",
        prompt: "Launch fireworks for every color in the list of sparks.",
        instruction: "Select the loop that launches each color once.",
        type: "choices",
        hint: "Use forEach or for...of to visit every color.",
        image: { emoji: "🎆", colors: ["#ff9f1c", "#ffbf69"] },
        choices: [
          {
            id: "a",
            text: "sparks.forEach(color => launchFirework(color));",
            correct: true,
            explanation: "forEach launches fireworks for each color."
          },
          {
            id: "b",
            text: "for (let i = 0; i <= sparks.length; i++) { launchFirework(sparks[i]); }",
            correct: false,
            explanation: "It runs one extra time, launching an undefined color."
          },
          {
            id: "c",
            text: "launchFirework(sparks[0]);",
            correct: false,
            explanation: "Only the first color launches."
          }
        ]
      },
      {
        id: "LOOP-17",
        title: "Crystal Code Patterns",
        prompt: "Draw a triangle of crystals using nested loops.",
        instruction: "Choose the code that builds growing rows of crystals.",
        type: "choices",
        hint: "The inner loop should run up to the row number.",
        image: { emoji: "🔺", colors: ["#cdb4db", "#ffc8dd"] },
        choices: [
          {
            id: "a",
            text: "for (let row = 1; row <= size; row++) { for (let col = 0; col < row; col++) { placeCrystal(); } }",
            correct: true,
            explanation: "Each row has one more crystal than the last."
          },
          {
            id: "b",
            text: "for (let row = 0; row < size; row++) { placeCrystal(); }",
            correct: false,
            explanation: "This places only one crystal per row."
          },
          {
            id: "c",
            text: "for (let col = 0; col < size; col++) { placeCrystal(); }",
            correct: false,
            explanation: "This creates a single long row."
          }
        ]
      },
      {
        id: "LOOP-18",
        title: "Puzzle Path Runner",
        prompt: "A character must take 12 steps forward in a maze.",
        instruction: "Pick the loop that moves forward 12 times.",
        type: "choices",
        hint: "Count from 0 while less than 12.",
        image: { emoji: "🚶", colors: ["#ffcbf2", "#bde0fe"] },
        choices: [
          {
            id: "a",
            text: "for (let step = 0; step < 12; step++) { moveForward(); }",
            correct: true,
            explanation: "The loop moves forward exactly 12 times."
          },
          {
            id: "b",
            text: "for (let step = 1; step < 12; step++) { moveForward(); }",
            correct: false,
            explanation: "The explorer only moves 11 times (missing step 12)."
          },
          {
            id: "c",
            text: "moveForward();",
            correct: false,
            explanation: "Only one step is taken."
          }
        ]
      },
      {
        id: "LOOP-19",
        title: "Lightning Code Zaps",
        prompt: "Send power zaps to every robot in the team array.",
        instruction: "Choose the loop that visits each robot and zaps them once.",
        type: "choices",
        hint: "for...of or forEach works great for arrays.",
        image: { emoji: "⚡", colors: ["#ffd166", "#f8961e"] },
        choices: [
          {
            id: "a",
            text: "for (const robot of robots) { sendZap(robot); }",
            correct: true,
            explanation: "Each robot receives a zap exactly once."
          },
          {
            id: "b",
            text: "for (let i = 0; i <= robots.length; i++) { sendZap(robots[i]); }",
            correct: false,
            explanation: "The loop runs one extra time and zaps undefined."
          },
          {
            id: "c",
            text: "sendZap(robots[0]);",
            correct: false,
            explanation: "Only the first robot is powered up."
          }
        ]
      },
      {
        id: "LOOP-20",
        title: "Comet Countdown Chimes",
        prompt: "Ring a chime every second for 15 seconds.",
        instruction: "Pick the loop that repeats 15 times with a timer.",
        type: "choices",
        hint: "Use a loop that counts seconds from 1 to 15.",
        image: { emoji: "⏱️", colors: ["#a0c4ff", "#ffcad4"] },
        choices: [
          {
            id: "a",
            text: "for (let second = 1; second <= 15; second++) { ringChime(second); }",
            correct: true,
            explanation: "It rings the chime for each of the 15 seconds."
          },
          {
            id: "b",
            text: "for (let second = 0; second < 15; second += 2) { ringChime(second); }",
            correct: false,
            explanation: "This rings only on even numbers, so fewer than 15 times."
          },
          {
            id: "c",
            text: "ringChime(1);",
            correct: false,
            explanation: "Only one chime sounds."
          }
        ]
      }
    ]
  }
];

const state = {
  moduleIndex: 0,
  exerciseIndex: 0,
  streak: 0,
  score: 0,
  soundOn: true,
  completed: new Set()
};

let audioContext;

const refs = {
  moduleLabel: document.getElementById("module-label"),
  exerciseCount: document.getElementById("exercise-count"),
  streakCount: document.getElementById("streak-count"),
  scoreCount: document.getElementById("score-count"),
  questTitle: document.getElementById("quest-title"),
  questPrompt: document.getElementById("quest-prompt"),
  questInstruction: document.getElementById("quest-instruction"),
  interactionZone: document.getElementById("interaction-zone"),
  questImage: document.getElementById("quest-image"),
  hintText: document.getElementById("hint-text"),
  progressFill: document.getElementById("progress-fill"),
  progressLabel: document.getElementById("progress-label"),
  soundToggle: document.getElementById("sound-toggle"),
  prevButton: document.getElementById("prev-button"),
  nextButton: document.getElementById("next-button"),
  resetButton: document.getElementById("reset-button"),
  timelineTrack: document.getElementById("timeline-track")
};

function ensureAudioContext() {
  if (!state.soundOn) {
    return null;
  }
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }
  return audioContext;
}

function playSound(type) {
  const context = ensureAudioContext();
  if (!context) {
    return;
  }
  const now = context.currentTime;
  const duration = type === "success" ? 0.35 : 0.25;
  const baseFrequency = type === "success" ? 660 : 180;
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(baseFrequency, now);
  oscillator.frequency.exponentialRampToValueAtTime(
    type === "success" ? baseFrequency * 1.4 : baseFrequency * 0.7,
    now + duration
  );

  gain.gain.setValueAtTime(0.001, now);
  gain.gain.exponentialRampToValueAtTime(0.2, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(now);
  oscillator.stop(now + duration + 0.02);
}

function createSceneImage({ emoji, colors }) {
  const [primary, secondary] = colors;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="320" viewBox="0 0 320 320">`
    + `<defs>`
    + `<linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">`
    + `<stop offset="0%" stop-color="${primary}"/>`
    + `<stop offset="100%" stop-color="${secondary}"/>`
    + `</linearGradient>`
    + `<filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">`
    + `<feDropShadow dx="0" dy="12" stdDeviation="18" flood-color="rgba(0,0,0,0.2)"/>`
    + `</filter>`
    + `</defs>`
    + `<rect x="0" y="0" width="320" height="320" rx="36" fill="url(#grad)"/>`
    + `<circle cx="90" cy="96" r="36" fill="rgba(255,255,255,0.25)"/>`
    + `<circle cx="250" cy="110" r="46" fill="rgba(255,255,255,0.2)"/>`
    + `<text x="50%" y="58%" font-size="140" text-anchor="middle" filter="url(#shadow)">${emoji}</text>`
    + `</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function getCurrentModule() {
  return modules[state.moduleIndex];
}

function getCurrentExercise() {
  return getCurrentModule().exercises[state.exerciseIndex];
}

function getGlobalIndex(moduleIndex, exerciseIndex) {
  let index = 0;
  for (let i = 0; i < moduleIndex; i++) {
    index += modules[i].exercises.length;
  }
  return index + exerciseIndex;
}

function updateProgress() {
  const totalExercises = modules.reduce((sum, module) => sum + module.exercises.length, 0);
  const completedCount = state.completed.size;
  const percentage = totalExercises === 0 ? 0 : Math.round((completedCount / totalExercises) * 100);
  refs.progressFill.style.width = `${percentage}%`;
  refs.progressLabel.textContent = `${completedCount} / ${totalExercises} quests`;
}

function updateTimeline() {
  const totalExercises = modules.reduce((sum, module) => sum + module.exercises.length, 0);
  if (!refs.timelineTrack.dataset.initialized) {
    refs.timelineTrack.innerHTML = "";
    for (let i = 0; i < totalExercises; i++) {
      const dot = document.createElement("div");
      dot.className = "timeline__dot";
      dot.dataset.index = i;
      refs.timelineTrack.append(dot);
    }
    refs.timelineTrack.dataset.initialized = "true";
  }

  const dots = refs.timelineTrack.querySelectorAll(".timeline__dot");
  dots.forEach((dot) => {
    const index = Number(dot.dataset.index);
    const currentIndex = getGlobalIndex(state.moduleIndex, state.exerciseIndex);
    dot.classList.toggle("is-active", index === currentIndex);
    dot.classList.toggle("is-complete", state.completed.has(index));
  });
}

function setHint(text) {
  refs.hintText.textContent = text ? `Hint: ${text}` : "";
}

function renderExercise() {
  const module = getCurrentModule();
  const exercise = getCurrentExercise();
  const totalInModule = module.exercises.length;
  const exerciseNumber = state.exerciseIndex + 1;

  refs.moduleLabel.textContent = module.name;
  refs.moduleLabel.style.color = module.accent;
  refs.exerciseCount.textContent = `Quest ${exerciseNumber} of ${totalInModule}`;
  refs.questTitle.textContent = exercise.title;
  refs.questPrompt.textContent = exercise.prompt;
  refs.questInstruction.textContent = exercise.instruction;
  refs.questImage.src = createSceneImage(exercise.image);
  refs.questImage.alt = `${exercise.title} illustration`;
  setHint(exercise.hint);
  refs.interactionZone.innerHTML = "";

  if (exercise.type === "sequencing") {
    renderSequencingExercise(exercise);
  } else {
    renderChoiceExercise(exercise);
  }

  const currentIndex = getGlobalIndex(state.moduleIndex, state.exerciseIndex);
  const isComplete = state.completed.has(currentIndex);
  const atEndOfModule = state.exerciseIndex === module.exercises.length - 1;
  const atFinalExercise = state.moduleIndex === modules.length - 1 && atEndOfModule;

  refs.nextButton.disabled = !isComplete && !atFinalExercise;
  refs.prevButton.disabled = state.moduleIndex === 0 && state.exerciseIndex === 0;
  refs.resetButton.disabled = false;

  updateProgress();
  updateTimeline();
}

function renderSequencingExercise(exercise) {
  const template = document.getElementById("sequence-template");
  const clone = template.content.firstElementChild.cloneNode(true);
  const pool = clone.querySelector(".sequence__pool");
  const slotsContainer = clone.querySelector(".sequence__slots");
  const feedback = document.createElement("div");
  feedback.className = "feedback";
  feedback.textContent = "Tap the steps to build your algorithm.";

  const shuffled = [...exercise.steps].sort(() => Math.random() - 0.5);
  const selection = [];

  exercise.steps.forEach((_, index) => {
    const slot = document.createElement("div");
    slot.className = "sequence-slot";
    slot.textContent = `Step ${index + 1}`;
    slot.dataset.index = index.toString();
    slotsContainer.append(slot);
  });

  shuffled.forEach((step) => {
    const button = document.createElement("button");
    button.className = "sequence-step";
    button.type = "button";
    button.textContent = step.text;
    button.dataset.stepId = step.id;
    button.addEventListener("click", () => {
      if (button.classList.contains("is-selected")) {
        return;
      }
      const currentIndex = selection.length;
      selection.push(step);
      button.classList.add("is-selected");
      const slot = slotsContainer.querySelector(`.sequence-slot[data-index="${currentIndex}"]`);
      if (slot) {
        slot.textContent = step.text;
        slot.classList.add("filled");
      }
      if (selection.length === exercise.steps.length) {
        const isCorrect = selection.every((item, index) => item.order === index + 1);
        if (isCorrect) {
          showFeedback(feedback, "✨ Perfect order!", true);
          completeCurrentExercise();
        } else {
          showFeedback(feedback, "Oops! Try a different order.", false);
          state.streak = 0;
          updateScoreboard();
          playSound("error");
        }
      } else {
        playSound("success");
      }
    });
    pool.append(button);
  });

  refs.interactionZone.append(clone, feedback);
}

function renderChoiceExercise(exercise) {
  const template = document.getElementById("choice-template");
  const clone = template.content.firstElementChild.cloneNode(true);
  const feedback = document.createElement("div");
  feedback.className = "feedback";
  feedback.textContent = "Pick the code that matches the rule.";

  exercise.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.type = "button";
    button.textContent = choice.text;
    button.addEventListener("click", () => {
      const currentIndex = getGlobalIndex(state.moduleIndex, state.exerciseIndex);
      if (state.completed.has(currentIndex)) {
        return;
      }
      if (choice.correct) {
        button.classList.add("correct");
        showFeedback(feedback, `Great choice! ${choice.explanation}`, true);
        completeCurrentExercise();
      } else {
        button.classList.add("incorrect");
        showFeedback(feedback, `Not quite. ${choice.explanation}`, false);
        state.streak = 0;
        updateScoreboard();
        playSound("error");
      }
      clone.querySelectorAll("button").forEach((btn) => (btn.disabled = true));
    });
    clone.append(button);
  });

  refs.interactionZone.append(clone, feedback);
}

function showFeedback(feedbackElement, message, isSuccess) {
  feedbackElement.classList.toggle("feedback--success", isSuccess);
  feedbackElement.classList.toggle("feedback--error", !isSuccess);
  feedbackElement.textContent = message;
  if (isSuccess) {
    playSound("success");
  }
}

function completeCurrentExercise() {
  const globalIndex = getGlobalIndex(state.moduleIndex, state.exerciseIndex);
  state.completed.add(globalIndex);
  state.streak += 1;
  state.score += 20;
  updateScoreboard();
  updateProgress();
  updateTimeline();
  refs.nextButton.disabled = false;
}

function updateScoreboard() {
  refs.streakCount.textContent = state.streak.toString();
  refs.scoreCount.textContent = state.score.toString();
}

function goToNext() {
  const module = getCurrentModule();
  if (state.exerciseIndex < module.exercises.length - 1) {
    state.exerciseIndex += 1;
  } else if (state.moduleIndex < modules.length - 1) {
    state.moduleIndex += 1;
    state.exerciseIndex = 0;
  }
  renderExercise();
}

function goToPrevious() {
  if (state.exerciseIndex > 0) {
    state.exerciseIndex -= 1;
  } else if (state.moduleIndex > 0) {
    state.moduleIndex -= 1;
    state.exerciseIndex = getCurrentModule().exercises.length - 1;
  }
  renderExercise();
}

function resetExercise() {
  const globalIndex = getGlobalIndex(state.moduleIndex, state.exerciseIndex);
  state.completed.delete(globalIndex);
  renderExercise();
}

function setupTimeline() {
  updateTimeline();
}

function setupControls() {
  refs.nextButton.addEventListener("click", () => {
    goToNext();
  });

  refs.prevButton.addEventListener("click", () => {
    goToPrevious();
  });

  refs.resetButton.addEventListener("click", () => {
    resetExercise();
  });

  refs.soundToggle.addEventListener("click", () => {
    state.soundOn = !state.soundOn;
    refs.soundToggle.textContent = state.soundOn ? "🔊 Sound On" : "🔈 Sound Off";
    refs.soundToggle.setAttribute("aria-pressed", state.soundOn.toString());
    if (state.soundOn) {
      ensureAudioContext();
      playSound("success");
    }
  });
}

function initialize() {
  setupControls();
  setupTimeline();
  updateScoreboard();
  renderExercise();
}

document.addEventListener("DOMContentLoaded", initialize);
