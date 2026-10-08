/**
 * ARTs - Masterpieces Catalog (107 Curated Global Masterpieces)
 * High-definition museum captures, authentic stories, artist portraits, and historical references.
 */

function getPaintingUrl(filename, width = 1600) {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${filename}?width=${width}`;
}

function getArtistUrl(filename, width = 640) {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${filename}?width=${width}`;
}

const ARTWORKS_DATA = [
  // 1. Van Gogh - The Starry Night
  {
    id: "starry-night",
    title: "The Starry Night",
    originalTitle: "De sterrennacht",
    year: "1889",
    era: "Post-Impressionism",
    medium: "Oil on canvas",
    dimensions: "73.7 cm × 92.1 cm",
    location: "Museum of Modern Art (MoMA), New York City",
    image: getPaintingUrl("Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    artist: {
      name: "Vincent van Gogh",
      lifespan: "1853 – 1890",
      nationality: "Dutch",
      movement: "Post-Impressionism",
      portrait: getArtistUrl("Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg", 640),
      bio: "Dutch Post-Impressionist whose impassioned brushwork, intense color symbolism, and emotional honesty redefined modern visual art."
    },
    story: "Painted in June 1889 from the barred east window of his asylum room at Saint-Paul-de-Mausole in Saint-Rémy-de-Provence following his severe mental crisis. Rather than recording reality photographically, Van Gogh synthesized vivid dawn observations with memories of his native Dutch village, creating an ecstatic celestial vortex anchored by a solemn cypress tree symbolizing eternity.",
    historicalReferences: "Astronomical analysis has demonstrated that the brilliant morning star depicted beside the cypress matches the exact position and extraordinary brightness of Venus in Provence in June 1889. The spiral nebula reflects Lord Rosse's contemporary astronomical sketches of the Whirlpool Galaxy (M51), published in widely circulated French astronomy journals of the era.",
    notableFact: "Van Gogh initially considered The Starry Night a failure, writing to Theo that it 'said nothing' to him; today it is among the most recognized images on Earth."
  },

  // 2. Leonardo da Vinci - Mona Lisa
  {
    id: "mona-lisa",
    title: "Mona Lisa",
    originalTitle: "La Gioconda / La Joconde",
    year: "c. 1503 – 1519",
    era: "High Renaissance",
    medium: "Oil on poplar panel",
    dimensions: "77 cm × 53 cm",
    location: "Musée du Louvre, Paris, France",
    image: getPaintingUrl("Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1280px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    artist: {
      name: "Leonardo da Vinci",
      lifespan: "1452 – 1519",
      nationality: "Italian",
      movement: "High Renaissance",
      portrait: getArtistUrl("Leonardo_self.jpg", 640),
      bio: "Universal genius of the Italian Renaissance whose mastery spanned painting, anatomy, flight, and optics."
    },
    story: "Portraying Florentine gentlewoman Lisa Gherardini, wife of silk merchant Francesco del Giocondo. Leonardo carried the unfinished poplar panel with him for sixteen years across Florence, Rome, and France, continuously refining the imperceptible gradations of tone with sfumato—blending without lines like smoke.",
    historicalReferences: "Created amidst the Florentine Republic's political upheavals and acquired by French King Francis I for Fontainebleau palace. Leonardo's concurrent dissection of facial nerves and orbicularis oris muscles at Santa Maria Nuova hospital informed the lifelike movement of her ambiguous smile.",
    notableFact: "The painting became a global phenomenon after its daring 1911 theft from the Louvre by Italian glazier Vincenzo Peruggia."
  },

  // 3. Vermeer - Girl with a Pearl Earring
  {
    id: "pearl-earring",
    title: "Girl with a Pearl Earring",
    originalTitle: "Het Meisje met de Parel",
    year: "c. 1665",
    era: "Dutch Golden Age",
    medium: "Oil on canvas",
    dimensions: "44.5 cm × 39 cm",
    location: "Mauritshuis, The Hague, Netherlands",
    image: getPaintingUrl("1665_Girl_with_a_Pearl_Earring.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/1280px-1665_Girl_with_a_Pearl_Earring.jpg",
    artist: {
      name: "Johannes Vermeer",
      lifespan: "1632 – 1675",
      nationality: "Dutch",
      movement: "Dutch Golden Age",
      portrait: getArtistUrl("Jan_Vermeer_van_Delft_002.jpg", 640),
      bio: "Delft master of domestic intimacy, exquisite lighting, and optical realism who left fewer than 40 recognized canvases."
    },
    story: "A Dutch tronie—a study of an exotic facial expression and character rather than a commissioned individual likeness. The subject turns abruptly with glistening lips and wide eyes against a dark translucent glaze. The iconic pearl earring is an illusion formed with just two strokes of lead white paint.",
    historicalReferences: "Exemplifies the global mercantile reach of the Dutch East India Company (VOC), which imported oriental silk turbans and rare lapis lazuli pigment from remote Afghan mines to the modest city of Delft.",
    notableFact: "In 1881, it was purchased at an auction in The Hague for just two guilders and thirty cents because centuries of grime obscured Vermeer's signature."
  },

  // 4. Botticelli - The Birth of Venus
  {
    id: "birth-of-venus",
    title: "The Birth of Venus",
    originalTitle: "Nascita di Venere",
    year: "c. 1484 – 1486",
    era: "Early Renaissance",
    medium: "Tempera on canvas",
    dimensions: "172.5 cm × 278.9 cm",
    location: "Uffizi Gallery, Florence, Italy",
    image: getPaintingUrl("Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/1280px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
    artist: {
      name: "Sandro Botticelli",
      lifespan: "1445 – 1510",
      nationality: "Italian",
      movement: "Early Renaissance",
      portrait: getArtistUrl("Sandro_Botticelli_083.jpg", 640),
      bio: "Florentine master celebrated for poetic linear grace, mythological allegory, and early revival of classical antiquity under the Medici."
    },
    story: "Venus emerges fully grown from sea foam upon a giant iridescent scallop shell, driven ashore by the breath of Zephyr and Chloris while an attendant Hora prepares to clothe her. Botticelli prioritized lyrical rhythm over rigid anatomy, creating an immortal archetype of divine feminine beauty.",
    historicalReferences: "Commissioned for Lorenzo di Pierfrancesco de' Medici's Villa di Castello. Rooted in Marsilio Ficino's Florentine Neoplatonism, which held that contemplating physical beauty raised human thought toward spiritual divinity.",
    notableFact: "One of Tuscany's earliest major secular works executed on canvas rather than wood panel, mixing alabaster powder for enduring pearl luminescence."
  },

  // 5. Hokusai - The Great Wave
  {
    id: "great-wave",
    title: "Under the Wave off Kanagawa",
    originalTitle: "Kanagawa-oki Nami Ura (神奈川沖浪裏)",
    year: "c. 1831",
    era: "Edo Period (Ukiyo-e)",
    medium: "Color woodblock print",
    dimensions: "25.7 cm × 37.8 cm",
    location: "Metropolitan Museum of Art, New York",
    image: getPaintingUrl("Tsunami_by_hokusai_19th_century.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tsunami_by_hokusai_19th_century.jpg/1280px-Tsunami_by_hokusai_19th_century.jpg",
    artist: {
      name: "Katsushika Hokusai",
      lifespan: "1760 – 1849",
      nationality: "Japanese",
      movement: "Ukiyo-e",
      portrait: getArtistUrl("Hokusai_selfportrait.jpg", 640),
      bio: "Prolific Edo period Japanese artist whose Thirty-Six Views of Mount Fuji introduced revolutionary dynamic perspective to landscape art."
    },
    story: "A colossal rogue wave with clawed foam towers over three vulnerable oshiokuri-bune cargo boats, while sacred Mount Fuji sits quiet and diminutive in the deep perspective background, balancing mortal vulnerability against eternal nature.",
    historicalReferences: "Produced during late Tokugawa isolation (sakoku), the work daringly integrated Western linear perspective and European imported Prussian blue (Bero-ai) pigment, setting off the international Japonisme craze in 19th-century Europe.",
    notableFact: "Prints of The Great Wave directly inspired Claude Debussy when composing his famous orchestral masterpiece La Mer in 1905."
  },

  // 6. Rembrandt - The Night Watch
  {
    id: "night-watch",
    title: "The Night Watch",
    originalTitle: "De Nachtwacht",
    year: "1642",
    era: "Dutch Golden Age",
    medium: "Oil on canvas",
    dimensions: "363 cm × 437 cm",
    location: "Rijksmuseum, Amsterdam, Netherlands",
    image: getPaintingUrl("The_Night_Watch_-_HD.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Night_Watch_-_HD.jpg/1280px-The_Night_Watch_-_HD.jpg",
    artist: {
      name: "Rembrandt van Rijn",
      lifespan: "1606 – 1669",
      nationality: "Dutch",
      movement: "Dutch Baroque",
      portrait: getArtistUrl("Rembrandt_Harmensz._van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg", 640),
      bio: "Supreme master of light, human psychological depth, and dynamic chiaroscuro in Western painting."
    },
    story: "Departing from stiff, traditional military portraiture, Rembrandt depicted Captain Frans Banninck Cocq ordering his civic guardsmen into active motion, illuminated by theatrical beams of golden light.",
    historicalReferences: "Painted during the Eighty Years' War (Dutch War of Independence) for the Amsterdam Arquebusiers Guild hall (Kloveniersdoelen), celebrating citizen militias defending civic freedom against Spanish Habsburg rule.",
    notableFact: "The painting is set in daylight; centuries of dark varnish and peat smoke led 18th-century viewers to mistakenly nickname it 'The Night Watch'."
  },

  // 7. Friedrich - Wanderer above the Sea of Fog
  {
    id: "wanderer",
    title: "Wanderer above the Sea of Fog",
    originalTitle: "Der Wanderer über dem Nebelmeer",
    year: "c. 1818",
    era: "Romanticism",
    medium: "Oil on canvas",
    dimensions: "94.8 cm × 74.8 cm",
    location: "Hamburger Kunsthalle, Hamburg, Germany",
    image: getPaintingUrl("Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/1280px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg",
    artist: {
      name: "Caspar David Friedrich",
      lifespan: "1774 – 1840",
      nationality: "German",
      movement: "German Romanticism",
      portrait: getArtistUrl("Caspar_David_Friedrich_by_Gerhard_von_K%C3%BCgelgen.jpg", 640),
      bio: "Pioneer of German Romanticism who used landscape as a vehicle for contemplative spiritual encounters and the sublime."
    },
    story: "A solitary young man stands atop a rocky cliff in the Elbe Sandstone Mountains, his back turned to the viewer (Rückenfigur), gazing across a vast, swirling sea of fog and rocky crags that evoke infinite spiritual contemplation.",
    historicalReferences: "Created after the Napoleonic Wars. The wanderer's Old German frock coat (Altdeutsche Tracht) was a forbidden symbol of democratic resistance against post-Napoleonic aristocratic restoration in fragmented Germany.",
    notableFact: "The work has become the definitive visual embodiment of the Romantic concept of 'The Sublime'—the mixture of awe and terror when facing nature's vastness."
  },

  // 8. Klimt - The Kiss
  {
    id: "the-kiss",
    title: "The Kiss",
    originalTitle: "Der Kuss",
    year: "1907 – 1908",
    era: "Vienna Secession (Art Nouveau)",
    medium: "Oil and gold leaf on canvas",
    dimensions: "180 cm × 180 cm",
    location: "Österreichische Galerie Belvedere, Vienna, Austria",
    image: getPaintingUrl("The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg/1280px-The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg",
    artist: {
      name: "Gustav Klimt",
      lifespan: "1862 – 1918",
      nationality: "Austrian",
      movement: "Vienna Secession",
      portrait: getArtistUrl("Klimt.jpg", 640),
      bio: "Founding president of the Vienna Secession known for lavish decorative surfaces, shimmering gold leaf, and sensual symbolism."
    },
    story: "The peak of Klimt's Golden Phase. Two lovers embrace on the floral edge of a precipice, enveloped in an opulent gilded mantle contrasting masculine geometric rectangles against feminine floral spirals.",
    historicalReferences: "Conceived during fin-de-siècle Vienna's intellectual ferment alongside Sigmund Freud's psychoanalysis. Klimt was profoundly inspired by early Christian Byzantine mosaics during his 1903 visit to Ravenna, Italy.",
    notableFact: "The Austrian government purchased the painting for an unprecedented 25,000 kronen before the paint had even fully dried at the 1908 Kunstschau exhibition."
  },

  // 9. Raphael - The School of Athens
  {
    id: "school-of-athens",
    title: "The School of Athens",
    originalTitle: "Scuola di Atene",
    year: "1509 – 1511",
    era: "High Renaissance",
    medium: "Fresco",
    dimensions: "500 cm × 770 cm",
    location: "Apostolic Palace, Vatican City",
    image: getPaintingUrl("The_School_of_Athens_by_Raffaello_Sanzio_da_Urbino.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/The_School_of_Athens_by_Raffaello_Sanzio_da_Urbino.jpg/1280px-The_School_of_Athens_by_Raffaello_Sanzio_da_Urbino.jpg",
    artist: {
      name: "Raphael (Raffaello Sanzio)",
      lifespan: "1483 – 1520",
      nationality: "Italian",
      movement: "High Renaissance",
      portrait: getArtistUrl("Raffaello_Sanzio.jpg", 640),
      bio: "Master of harmonious proportion, monumental clarity, and humanistic Renaissance grace alongside Michelangelo and Leonardo."
    },
    story: "Under majestic classical vaults, the greatest thinkers of antiquity assemble. In the center, Plato gestures to the ideal heavens holding his Timaeus, while Aristotle gestures toward empirical earth holding his Ethics, uniting all human philosophy.",
    historicalReferences: "Commissioned by Pope Julius II for the Stanza della Segnatura papal library. Raphael paid homage to his peers: Plato bears the face of Leonardo da Vinci, and the brooding Heraclitus is Michelangelo.",
    notableFact: "Raphael painted his own discreet self-portrait in the lower right corner, peering outward into the future in a modest black cap."
  },

  // 10. Michelangelo - The Creation of Adam
  {
    id: "creation-of-adam",
    title: "The Creation of Adam",
    originalTitle: "Creazione di Adamo",
    year: "c. 1508 – 1512",
    era: "High Renaissance",
    medium: "Fresco",
    dimensions: "280 cm × 570 cm",
    location: "Sistine Chapel, Vatican City",
    image: getPaintingUrl("Michelangelo_-_Creation_of_Adam_(cropped).jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg/1280px-Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg",
    artist: {
      name: "Michelangelo Buonarroti",
      lifespan: "1475 – 1564",
      nationality: "Italian",
      movement: "High Renaissance",
      portrait: getArtistUrl("Michelangelo_Buonarroti.jpg", 640),
      bio: "Titan of Renaissance sculpture, painting, and architecture whose muscular anatomical figures revolutionized Western visual expression."
    },
    story: "God extends His right index finger across a microscopic void toward Adam's reclining hand, transmitting the divine spark of life. The composition hinges on that imperceptible gap—charged with infinite potential energy.",
    historicalReferences: "Painted standing upon high wooden scaffolding under the demanding patronage of Pope Julius II. In 1990, medical researchers discovered that the billowing mantle surrounding God matches the anatomical cross-section of the human brain.",
    notableFact: "Michelangelo repeatedly protested the Sistine commission, declaring in his letters 'I am no painter, I am a sculptor,' before completing the greatest ceiling fresco in history."
  },

  // 11. Delacroix - Liberty Leading the People
  {
    id: "liberty-leading",
    title: "Liberty Leading the People",
    originalTitle: "La Liberté guidant le peuple",
    year: "1830",
    era: "Romanticism",
    medium: "Oil on canvas",
    dimensions: "260 cm × 325 cm",
    location: "Musée du Louvre, Paris, France",
    image: getPaintingUrl("Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg/1280px-Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg",
    artist: {
      name: "Eugène Delacroix",
      lifespan: "1798 – 1863",
      nationality: "French",
      movement: "Romanticism",
      portrait: getArtistUrl("Delacroix_-_Self-Portrait%2C_ca._1830-35.jpg", 640),
      bio: "Leader of French Romanticism whose expressive brushwork, dramatic color, and historical subjects defied neoclassical sterility."
    },
    story: "Marianne, personifying Liberty in a Phrygian cap, leads citizens across smoke-filled barricades and fallen soldiers, waving the French tricolor flag to unite bourgeois, student, and factory worker in revolution.",
    historicalReferences: "Commemorates the July Revolution (Trois Glorieuses) of 1830 that ousted King Charles X. The street urchin with pistols inspired Victor Hugo's Gavroche in Les Misérables.",
    notableFact: "Delacroix's depiction of Marianne served as the primary visual model for the Statue of Liberty, gifted by France to the United States in 1886."
  },

  // 12. Munch - The Scream
  {
    id: "the-scream",
    title: "The Scream",
    originalTitle: "Skrik",
    year: "1893",
    era: "Expressionism / Symbolism",
    medium: "Oil, tempera, pastel on cardboard",
    dimensions: "91 cm × 73.5 cm",
    location: "National Gallery of Norway, Oslo",
    image: getPaintingUrl("Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/1280px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg",
    artist: {
      name: "Edvard Munch",
      lifespan: "1863 – 1944",
      nationality: "Norwegian",
      movement: "Expressionism",
      portrait: getArtistUrl("Edvard_Munch_1921.jpg", 640),
      bio: "Norwegian pioneer of Expressionism whose psychological explorations of anxiety, isolation, and mortality shaped 20th-century art."
    },
    story: "A figure with a skull-like countenance grasps their ears in torment along an Oslofjord bridge, seeking to silence the unbearable scream vibrating through the cosmos as the sky burns blood-red.",
    historicalReferences: "The apocalyptic blood-red sunset has been linked to atmospheric dust clouds that enveloped Northern Europe following the 1883 Krakatoa volcanic cataclysm.",
    notableFact: "Infrared scans confirmed a faint pencil inscription in the upper corner was written by Munch himself: 'Could only have been painted by a madman!'"
  },

  // 13. Leonardo - The Last Supper
  {
    id: "last-supper",
    title: "The Last Supper",
    originalTitle: "Il Cenacolo",
    year: "1495 – 1498",
    era: "High Renaissance",
    medium: "Tempera and oil on gesso/pitch",
    dimensions: "460 cm × 880 cm",
    location: "Santa Maria delle Grazie, Milan, Italy",
    image: getPaintingUrl("The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/4/4b/%C3%9Altima_Cena_-_Da_Vinci_5.jpg",
    artist: {
      name: "Leonardo da Vinci",
      lifespan: "1452 – 1519",
      nationality: "Italian",
      movement: "High Renaissance",
      portrait: getArtistUrl("Leonardo_self.jpg", 640),
      bio: "Renaissance polymath renowned for unparalleled observational acuity, psychological storytelling, and sfumato mastery."
    },
    story: "Captures the dramatic moment Christ announces 'One of you will betray me,' sending shockwaves of denial, grief, and whispered suspicion through the twelve apostles grouped in mathematical trios.",
    historicalReferences: "Commissioned by Ludovico Sforza, Duke of Milan, for the refectory of Santa Maria delle Grazie monastery. Leonardo experimented with an oil-tempera mixture that sadly began deteriorating during his lifetime.",
    notableFact: "Leonardo used real citizens of Milan as models for the apostles, spending months scouring the criminal quarter of Milan to find a face treacherous enough for Judas."
  },

  // 14. Leonardo - Lady with an Ermine
  {
    id: "lady-ermine",
    title: "Lady with an Ermine",
    originalTitle: "Dama con l'ermellino",
    year: "c. 1489 – 1490",
    era: "High Renaissance",
    medium: "Oil on walnut panel",
    dimensions: "54 cm × 39 cm",
    location: "Czartoryski Museum, Kraków, Poland",
    image: getPaintingUrl("Lady_with_an_Ermine_-_Leonardo_da_Vinci_-_Google_Art_Project.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Lady_with_an_Ermine_-_Leonardo_da_Vinci_-_Google_Art_Project.jpg",
    artist: {
      name: "Leonardo da Vinci",
      lifespan: "1452 – 1519",
      nationality: "Italian",
      movement: "High Renaissance",
      portrait: getArtistUrl("Leonardo_self.jpg", 640),
      bio: "Master of naturalism whose portraits captured fleeting mental states and three-dimensional living vitality."
    },
    story: "Portrays Cecilia Gallerani, the cultured mistress of Ludovico Sforza, Duke of Milan. She turns in a three-quarter spiral toward an unseen speaker outside the frame while caressing a pristine white ermine.",
    historicalReferences: "The ermine was a pun on Cecilia's Greek surname (galê) and the personal heraldic badge of Duke Ludovico Sforza, who belonged to the prestigious chivalric Order of the Ermine.",
    notableFact: "Looted by the Nazis during WWII for Hans Frank's residence at Wawel Castle before being recovered by the Monuments Men and returned to Poland."
  },

  // 15. Botticelli - Primavera
  {
    id: "primavera",
    title: "Primavera (Allegory of Spring)",
    originalTitle: "Primavera",
    year: "c. 1482",
    era: "Early Renaissance",
    medium: "Tempera on wood panel",
    dimensions: "207 cm × 319 cm",
    location: "Uffizi Gallery, Florence, Italy",
    image: getPaintingUrl("Botticelli-primavera.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Botticelli-primavera.jpg",
    artist: {
      name: "Sandro Botticelli",
      lifespan: "1445 – 1510",
      nationality: "Italian",
      movement: "Early Renaissance",
      portrait: getArtistUrl("Sandro_Botticelli_083.jpg", 640),
      bio: "Florentine master celebrated for his ethereal linear figures and mythological allegories for the Medici circle."
    },
    story: "A lush orange grove where Venus presides over the awakening of Spring. Zephyr abducts Chloris, who transforms into Flora scattering flowers, while the Three Graces dance under Cupid's hovering arrow and Mercury dissipates winter clouds.",
    historicalReferences: "Painted for Lorenzo di Pierfrancesco de' Medici under the philosophical influence of Marsilio Ficino and Angelo Poliziano's poetry. Botanists have identified over 500 individual plants and 190 distinct flower species.",
    notableFact: "It remained concealed in the Medici villa at Castello for nearly three centuries until modern art historians rediscovered its intricate allegorical depth."
  },

  // 16. Jan van Eyck - The Arnolfini Portrait
  {
    id: "arnolfini-portrait",
    title: "The Arnolfini Portrait",
    originalTitle: "Portret van Giovanni Arnolfini en zijn vrouw",
    year: "1434",
    era: "Northern Renaissance",
    medium: "Oil on oak panel",
    dimensions: "82.2 cm × 60 cm",
    location: "National Gallery, London, United Kingdom",
    image: getPaintingUrl("Van_Eyck_-_Arnolfini_Portrait.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/3/33/Van_Eyck_-_Arnolfini_Portrait.jpg",
    artist: {
      name: "Jan van Eyck",
      lifespan: "c. 1390 – 1441",
      nationality: "Flemish",
      movement: "Northern Renaissance",
      portrait: getArtistUrl("Jan_van_Eyck_-_Portrait_of_a_Man_in_a_Turban_(Self-Portrait%3F)_-_Google_Art_Project.jpg", 640),
      bio: "Flemish pioneer who perfected the medium of oil painting, achieving miraculous luminous realism and microscopic texture."
    },
    story: "Italian merchant Giovanni di Nicolao Arnolfini and his bride join hands inside a richly furnished Bruges chamber. Every detail radiates domestic prosperity: costly fur robes, an imported Anatolian rug, and a loyal lapdog symbolizing marital fidelity.",
    historicalReferences: "Bruges was Northern Europe's leading international financial hub. In the convex mirror on the back wall, Van Eyck painted two visitors entering the doorway and inscribed in Gothic script: 'Johannes de eyck fuit hic 1434' (Jan van Eyck was here).",
    notableFact: "The single burning candle in the ornate brass chandelier symbolizes the omnipresence of God watching over the sacred marriage vow."
  },

  // 17. Hieronymus Bosch - The Garden of Earthly Delights
  {
    id: "garden-earthly-delights",
    title: "The Garden of Earthly Delights",
    originalTitle: "El jardín de las delicias",
    year: "c. 1490 – 1510",
    era: "Northern Renaissance",
    medium: "Oil on oak panels (Triptych)",
    dimensions: "220 cm × 389 cm",
    location: "Museo del Prado, Madrid, Spain",
    image: getPaintingUrl("The_Garden_of_earthly_delights.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/a/ae/El_jard%C3%ADn_de_las_Delicias%2C_de_El_Bosco.jpg",
    artist: {
      name: "Hieronymus Bosch",
      lifespan: "c. 1450 – 1516",
      nationality: "Dutch",
      movement: "Early Netherlandish",
      portrait: getArtistUrl("Hieronymus_Bosch_-_portrait.jpg", 640),
      bio: "Visionary Netherlandish painter famous for nightmarish moral allegories, fantastical biological hybrid beasts, and religious satire."
    },
    story: "A monumental triptych unfolding from the Garden of Eden on the left, across a surreal central expanse of cavorting humans, giant fruits, and hybrid animals indulging in sensual abandon, to a horrifying apocalyptic hellscape on the right.",
    historicalReferences: "Created in 's-Hertogenbosch and owned by Engelbrecht II of Nassau. Reflects late-medieval anxieties over mortal sin, alchemy, and human folly leading up to the Protestant Reformation.",
    notableFact: "In the right-hand hell panel, Bosch painted real medieval musical notation tattooed onto a sinner's buttocks—a melody modern musicologists have transcribed and recorded."
  },

  // 18. Albrecht Dürer - Self-Portrait at Twenty-Eight
  {
    id: "durer-self-portrait",
    title: "Self-Portrait at Twenty-Eight",
    originalTitle: "Selbstbildnis im Pelzrock",
    year: "1500",
    era: "Northern Renaissance",
    medium: "Oil on lime panel",
    dimensions: "67.1 cm × 48.9 cm",
    location: "Alte Pinakothek, Munich, Germany",
    image: getPaintingUrl("D%C3%BCrer_self_portrait_at_28.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/b/b2/D%C3%BCrer_self_portrait_at_28.jpg",
    artist: {
      name: "Albrecht Dürer",
      lifespan: "1471 – 1528",
      nationality: "German",
      movement: "German Renaissance",
      portrait: getArtistUrl("D%C3%BCrer_self_portrait_at_28.jpg", 640),
      bio: "Nuremberg master printmaker and painter who synthesized Northern detail with Italian Renaissance perspective and humanism."
    },
    story: "Dürer gazes directly at the viewer in a strictly frontal pose traditionally reserved exclusively for representations of Christ (Salvator Mundi), clad in an expensive fur-trimmed coat with curled golden hair.",
    historicalReferences: "Painted in the milestone millennial year 1500, proclaiming the Renaissance philosophy of the artist as an intellectual creator endowed with divine spark, rather than a mere manual medieval artisan.",
    notableFact: "Dürer prominently inscribed his famous 'AD' monogram and a Latin declaration affirming his status as a master from Nuremberg."
  },

  // 19. Pieter Bruegel the Elder - Hunters in the Snow
  {
    id: "hunters-in-the-snow",
    title: "The Hunters in the Snow",
    originalTitle: "Jagers in de Sneeuw",
    year: "1565",
    era: "Northern Renaissance",
    medium: "Oil on wood panel",
    dimensions: "117 cm × 162 cm",
    location: "Kunsthistorisches Museum, Vienna, Austria",
    image: getPaintingUrl("Pieter_Bruegel_the_Elder_-_Hunters_in_the_Snow_(Winter)_-_Google_Art_Project.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Pieter_Bruegel_the_Elder_-_Hunters_in_the_Snow_%28Winter%29_-_Google_Art_Project.jpg",
    artist: {
      name: "Pieter Bruegel the Elder",
      lifespan: "c. 1525 – 1569",
      nationality: "Flemish",
      movement: "Netherlandish Renaissance",
      portrait: getArtistUrl("Pieter_Brueghel_the_Elder_-_portrait.jpg", 640),
      bio: "Pioneering Flemish master of vast panoramic landscapes, peasant life, and seasonal allegories."
    },
    story: "Weary hunters and their emaciated hound pack trudge through deep snow atop a crest, looking down upon frozen ponds where villagers skate and curling players compete against a biting pale winter sky.",
    historicalReferences: "Commissioned by Antwerp merchant Niclaes Jonghelinck as part of a series depicting the months of the year. Painted during the brutal winter of 1564–1565—one of the harshest during the historical 'Little Ice Age'.",
    notableFact: "The dramatic alpine peaks looming in the distance were inspired by Bruegel's crossing of the Alps during his earlier travels to Italy."
  },

  // 20. Pieter Bruegel the Elder - The Tower of Babel
  {
    id: "tower-of-babel",
    title: "The Tower of Babel",
    originalTitle: "De Toren van Babel",
    year: "1563",
    era: "Northern Renaissance",
    medium: "Oil on wood panel",
    dimensions: "114 cm × 155 cm",
    location: "Kunsthistorisches Museum, Vienna, Austria",
    image: getPaintingUrl("Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_(Vienna)_-_Google_Art_Project.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_%28Vienna%29_-_Google_Art_Project.jpg",
    artist: {
      name: "Pieter Bruegel the Elder",
      lifespan: "c. 1525 – 1569",
      nationality: "Flemish",
      movement: "Netherlandish Renaissance",
      portrait: getArtistUrl("Pieter_Brueghel_the_Elder_-_portrait.jpg", 640),
      bio: "Master of grand moral allegories combining microscopic human detail with sweeping architectural scale."
    },
    story: "The biblical construction of the doomed tower reaching into cloud cover. King Nimrod inspects prostrating stonemasons while hundreds of workers haul timber and limestone across tiered ramps already tilting toward catastrophic ruin.",
    historicalReferences: "The architecture mirrors the Colosseum in Rome, which Bruegel viewed as a symbol of pagan imperial hubris doomed to collapse. It commented on Antwerp's rapid commercial growth and linguistic divisions.",
    notableFact: "Upon close inspection, Bruegel rendered individual ladders, cranes, waterwheels, and even laundry drying on the tower's lower residential arches."
  },

  // 21. Hans Holbein - The Ambassadors
  {
    id: "the-ambassadors",
    title: "The Ambassadors",
    originalTitle: "Jean de Dinteville et Georges de Selve",
    year: "1533",
    era: "Northern Renaissance",
    medium: "Oil on oak panel",
    dimensions: "207 cm × 209.5 cm",
    location: "National Gallery, London, United Kingdom",
    image: getPaintingUrl("Hans_Holbein_the_Younger_-_The_Ambassadors_-_Google_Art_Project.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/8/82/Hans_Holbein_the_Younger_-_The_Ambassadors_-_Google_Art_Project.jpg",
    artist: {
      name: "Hans Holbein the Younger",
      lifespan: "c. 1497 – 1543",
      nationality: "German",
      movement: "Northern Renaissance",
      portrait: getArtistUrl("Hans_Holbein_the_Younger_-_Self-portrait_-_Google_Art_Project.jpg", 640),
      bio: "Court painter to King Henry VIII of England, renowned for optical fidelity and psychological precision."
    },
    story: "French ambassador Jean de Dinteville and Bishop Georges de Selve stand beside shelves laden with globes, navigational sundials, mathematical treatises, and a lute with a snapped string symbolizing religious discord.",
    historicalReferences: "Painted during Henry VIII's historic rupture with Rome over his marriage to Anne Boleyn. The ambassadors were in London on secret diplomatic missions seeking to preserve peace between France, England, and the papacy.",
    notableFact: "The bizarre diagonal slash across the floor is an anamorphic skull (memento mori) that only resolves into proper perspective when viewed from the extreme upper right side."
  },

  // 22. Titian - Bacchus and Ariadne
  {
    id: "bacchus-ariadne",
    title: "Bacchus and Ariadne",
    originalTitle: "Bacco e Arianna",
    year: "1520 – 1523",
    era: "High Renaissance (Venetian)",
    medium: "Oil on canvas",
    dimensions: "176.5 cm × 191 cm",
    location: "National Gallery, London, United Kingdom",
    image: getPaintingUrl("Titian_Bacchus_and_Ariadne.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Titian_Bacchus_and_Ariadne.jpg",
    artist: {
      name: "Titian (Tiziano Vecellio)",
      lifespan: "c. 1488 – 1576",
      nationality: "Italian (Venetian)",
      movement: "Venetian Renaissance",
      portrait: getArtistUrl("Tizian_085.jpg", 640),
      bio: "Supreme master of the Venetian school whose fluid brushwork, radiant color (colorito), and sensual warmth influenced generations."
    },
    story: "The wine god Bacchus leaps from his cheetah-drawn chariot in instantaneous love for the abandoned princess Ariadne on Naxos, hurling her crown into the sky to become the constellation Corona Borealis.",
    historicalReferences: "Commissioned by Alfonso I d'Este, Duke of Ferrara, for his Camerino d'Alabastro, following texts from Catullus and Ovid. It showcases Venice's access to the world's finest ultramarine, realgar, and malachite pigments.",
    notableFact: "Ariadne's startled pose directly mirrors classical Hellenistic sculptures discovered in Rome during Titian's era."
  },

  // 23. Titian - Venus of Urbino
  {
    id: "venus-urbino",
    title: "Venus of Urbino",
    originalTitle: "Venere di Urbino",
    year: "1538",
    era: "High Renaissance (Venetian)",
    medium: "Oil on canvas",
    dimensions: "119 cm × 165 cm",
    location: "Uffizi Gallery, Florence, Italy",
    image: getPaintingUrl("Titian_-_Venus_of_Urbino_-_Google_Art_Project.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Titian_-_Venus_of_Urbino_-_Google_Art_Project.jpg",
    artist: {
      name: "Titian",
      lifespan: "c. 1488 – 1576",
      nationality: "Italian (Venetian)",
      movement: "Venetian Renaissance",
      portrait: getArtistUrl("Tizian_085.jpg", 640),
      bio: "Venetian master celebrated for bringing emotional intimacy, glowing skin tones, and rich oil glazes to classical themes."
    },
    story: "A voluptuous young woman reclines upon white sheets in an opulent Venetian palazzo, looking directly at the viewer with serene confidence while a sleeping puppy curls at her feet and maidservants search a wedding chest.",
    historicalReferences: "Commissioned by Guidobaldo II della Rovere, Duke of Urbino, to celebrate his marriage to young Giulia Varano, serving as an idealized didactic model of marital fidelity, beauty, and domestic eroticism.",
    notableFact: "This canvas directly inspired Édouard Manet's scandalous modern masterpiece Olympia over three centuries later in Paris."
  },

  // 24. El Greco - The Burial of the Count of Orgaz
  {
    id: "burial-count-orgaz",
    title: "The Burial of the Count of Orgaz",
    originalTitle: "El entierro del conde de Orgaz",
    year: "1586 – 1588",
    era: "Mannerism / Spanish Renaissance",
    medium: "Oil on canvas",
    dimensions: "480 cm × 360 cm",
    location: "Church of Santo Tomé, Toledo, Spain",
    image: getPaintingUrl("El_Greco_-_The_Burial_of_the_Count_of_Orgaz.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/7/77/El_Greco_-_The_Burial_of_the_Count_of_Orgaz.jpg",
    artist: {
      name: "El Greco (Doménikos Theotokópoulos)",
      lifespan: "1541 – 1614",
      nationality: "Greek / Spanish",
      movement: "Mannerism",
      portrait: getArtistUrl("El_Greco_-_Portrait_of_an_Old_Man_(Self-Portrait%3F)_-_Google_Art_Project.jpg", 640),
      bio: "Cretan-born master who fused Byzantine icon traditions with Venetian color and Spanish Catholic mysticism, creating ecstatic elongated figures."
    },
    story: "Depicts the popular Toledo miracle where Saint Stephen and Saint Augustine descended from heaven in golden vestments to personally lower the pious Count of Orgaz into his tomb, while his soul ascends above into the celestial court of Christ.",
    historicalReferences: "Created during the Counter-Reformation in Spain under King Philip II, celebrating the Catholic doctrine of good works and saintly intercession, which Protestant reformers rejected.",
    notableFact: "El Greco included his young son Jorge Manuel pointing to the miracle on the lower left, with the artist's signature tucked inside the boy's pocket."
  },

  // 25. Caravaggio - The Calling of Saint Matthew
  {
    id: "calling-matthew",
    title: "The Calling of Saint Matthew",
    originalTitle: "Vocazione di San Matteo",
    year: "1599 – 1600",
    era: "Baroque",
    medium: "Oil on canvas",
    dimensions: "322 cm × 340 cm",
    location: "Contarelli Chapel, San Luigi dei Francesi, Rome",
    image: getPaintingUrl("The_Calling_of_Saint_Matthew-Caravaggio_(1599-1600).jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/b/b3/The_Calling_of_Saint_Matthew-Caravaggio_%281599-1600%29.jpg",
    artist: {
      name: "Caravaggio (Michelangelo Merisi)",
      lifespan: "1571 – 1610",
      nationality: "Italian",
      movement: "Baroque",
      portrait: getArtistUrl("Caravaggio_-_Self-portrait.jpg", 640),
      bio: "Volatile revolutionary who brought raw gritty naturalism and dramatic tenebrism (violent contrasts of light and dark) to Western art."
    },
    story: "In a dim Roman tavern, tax collector Matthew and his corrupt associates count coins. Christ enters quietly with Saint Peter, pointing an outstretched finger bathed in a diagonal beam of divine light, commanding Matthew to rise and follow.",
    historicalReferences: "Christ's reaching hand deliberately echoes Michelangelo's God in The Creation of Adam on the Sistine Chapel ceiling, symbolizing divine renewal and grace granted to sinful ordinary men.",
    notableFact: "Caravaggio used real impoverished peasants from the streets of Rome as models for biblical saints, shocking conservative clerics."
  },

  // 26. Caravaggio - Judith Beheading Holofernes
  {
    id: "judith-holofernes",
    title: "Judith Beheading Holofernes",
    originalTitle: "Giuditta e Oloferne",
    year: "c. 1599 – 1602",
    era: "Baroque",
    medium: "Oil on canvas",
    dimensions: "145 cm × 195 cm",
    location: "Gallerie Nazionali di Arte Antica, Palazzo Barberini, Rome",
    image: getPaintingUrl("Judith_Beheading_Holofernes_-_Caravaggio.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/0/07/Judith_Beheading_Holofernes_-_Caravaggio.jpg",
    artist: {
      name: "Caravaggio",
      lifespan: "1571 – 1610",
      nationality: "Italian",
      movement: "Baroque",
      portrait: getArtistUrl("Caravaggio_-_Self-portrait.jpg", 640),
      bio: "Master of visceral realism whose theatrical chiaroscuro and psychological violence defined early Baroque drama."
    },
    story: "The biblical widow Judith slices through the neck of the Assyrian general Holofernes with his own sword to save her besieged city of Bethulia, recoiling with a mixture of determination and disgust as blood spurts across white linen.",
    historicalReferences: "Commissioned by Genoese banker Ottavio Costa. The visceral shock reflected the contemporary public execution of Beatrice Cenci in Rome in 1599, which Caravaggio witnessed.",
    notableFact: "The model for Judith was Fillide Melandroni, a famous Roman courtesan and Caravaggio's frequent muse."
  },

  // 27. Artemisia Gentileschi - Judith Slaying Holofernes
  {
    id: "artemisia-judith",
    title: "Judith Slaying Holofernes",
    originalTitle: "Giuditta che decapita Oloferne",
    year: "c. 1612 – 1613",
    era: "Baroque",
    medium: "Oil on canvas",
    dimensions: "199 cm × 162.5 cm",
    location: "Uffizi Gallery, Florence, Italy",
    image: getPaintingUrl("Judith_Slaying_Holofernes_-_Artemisia_Gentileschi_-_Uffizi.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Judith_Slaying_Holofernes_-_Artemisia_Gentileschi_-_Uffizi.jpg",
    artist: {
      name: "Artemisia Gentileschi",
      lifespan: "1593 – c. 1656",
      nationality: "Italian",
      movement: "Baroque",
      portrait: getArtistUrl("Artemisia_Gentileschi_-_Self-Portrait_as_the_Allegory_of_Painting_(La_Pittura)_-_Royal_Collection.jpg", 640),
      bio: "Foremost female master of the Italian Baroque whose heroic heroines embodied physical strength and female agency."
    },
    story: "Unlike Caravaggio's hesitant Judith, Artemisia's heroine and her maidservant Abra pin down the colossal thrashing general with sheer muscular force, methodically sawing through his throat in fierce determination.",
    historicalReferences: "Painted shortly after the harrowing public rape trial of Agostino Tassi, who assaulted Artemisia in her father's Rome studio. The canvas is celebrated as a defiant masterpiece of personal catharsis and justice.",
    notableFact: "Artemisia was the first woman ever admitted to the prestigious Accademia delle Arti del Disegno in Florence."
  },

  // 28. Velázquez - Las Meninas
  {
    id: "las-meninas",
    title: "Las Meninas (The Ladies-in-Waiting)",
    originalTitle: "Las Meninas",
    year: "1656",
    era: "Spanish Golden Age (Baroque)",
    medium: "Oil on canvas",
    dimensions: "318 cm × 276 cm",
    location: "Museo del Prado, Madrid, Spain",
    image: getPaintingUrl("Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/3/31/Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg",
    artist: {
      name: "Diego Velázquez",
      lifespan: "1599 – 1660",
      nationality: "Spanish",
      movement: "Spanish Baroque",
      portrait: getArtistUrl("Diego_Velazquez_Autorretrato_45_x_38_cm_-_Coleccion_Valencia_de_Don_Juan.jpg", 640),
      bio: "Court painter to King Philip IV of Spain whose loose bravura brushstrokes and spatial brilliance influenced Manet and Picasso."
    },
    story: "Set inside the Royal Alcázar of Madrid. Five-year-old Infanta Margaret Theresa is attended by maidens, chaperones, and family dwarfs, while Velázquez himself paints at an enormous canvas looking directly out at the viewer.",
    historicalReferences: "In the mirror on the rear wall, the reflections of King Philip IV and Queen Mariana appear, meaning the viewer occupies the royal couple's vantage point. It elevated painting from a craft to an aristocratic liberal art.",
    notableFact: "The red cross of the Order of Santiago on Velázquez's chest was added three years later by royal command after he received knighthood."
  },

  // 29. Velázquez - The Rokeby Venus
  {
    id: "rokeby-venus",
    title: "The Rokeby Venus",
    originalTitle: "La Venus del espejo",
    year: "c. 1647 – 1651",
    era: "Spanish Golden Age",
    medium: "Oil on canvas",
    dimensions: "122.5 cm × 177 cm",
    location: "National Gallery, London, United Kingdom",
    image: getPaintingUrl("The_Rokeby_Venus_by_Diego_Vel%C3%A1zquez.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/5/58/The_Rokeby_Venus_by_Diego_Vel%C3%A1zquez.jpg",
    artist: {
      name: "Diego Velázquez",
      lifespan: "1599 – 1660",
      nationality: "Spanish",
      movement: "Spanish Baroque",
      portrait: getArtistUrl("Diego_Velazquez_Autorretrato_45_x_38_cm_-_Coleccion_Valencia_de_Don_Juan.jpg", 640),
      bio: "Master of visual understatement and spatial atmosphere who served the Spanish Habsburg court for decades."
    },
    story: "The goddess Venus lies languidly on dark satin sheets with her back to the spectator, admiring her own blurred reflection held up by Cupid, creating a tantalizing psychological dialogue between viewer and subject.",
    historicalReferences: "Painted during a trip to Italy. The Spanish Inquisition strictly forbade female nudes, making this the only surviving female nude in Velázquez's entire oeuvre.",
    notableFact: "In 1914, militant suffragette Mary Richardson slashed the canvas seven times with a meat cleaver at the National Gallery to protest the arrest of Emmeline Pankhurst."
  },

  // 30. Vermeer - The Milkmaid
  {
    id: "the-milkmaid",
    title: "The Milkmaid",
    originalTitle: "Het melkmeisje",
    year: "c. 1658 – 1660",
    era: "Dutch Golden Age",
    medium: "Oil on canvas",
    dimensions: "45.5 cm × 41 cm",
    location: "Rijksmuseum, Amsterdam, Netherlands",
    image: getPaintingUrl("Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/2/20/Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg",
    artist: {
      name: "Johannes Vermeer",
      lifespan: "1632 – 1675",
      nationality: "Dutch",
      movement: "Dutch Golden Age",
      portrait: getArtistUrl("Jan_Vermeer_van_Delft_002.jpg", 640),
      bio: "Delft master of domestic serenity, light particles (pointillés), and luminous optical tranquility."
    },
    story: "A sturdy kitchen maid pours milk from an earthenware jug into a stoneware bowl. The slow, unbroken stream of white liquid anchors the quiet domestic dignity of everyday labor in a Dutch household.",
    historicalReferences: "Vermeer elevated working-class domestic servants into noble icons of virtue. At the bottom right, Delft blue wall tiles feature Cupid, subtly nodding to themes of romantic devotion.",
    notableFact: "X-ray analysis revealed that Vermeer initially painted a large clothes hamper and a wall map, but painted them out to maintain exquisite minimalist focus on the maid."
  },

  // 31. Vermeer - View of Delft
  {
    id: "view-of-delft",
    title: "View of Delft",
    originalTitle: "Gezicht op Delft",
    year: "c. 1660 – 1661",
    era: "Dutch Golden Age",
    medium: "Oil on canvas",
    dimensions: "96.5 cm × 115.7 cm",
    location: "Mauritshuis, The Hague, Netherlands",
    image: getPaintingUrl("Johannes_Vermeer_-_Gezicht_op_Delft_-_Google_Art_Project.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Johannes_Vermeer_-_Gezicht_op_Delft_-_Google_Art_Project.jpg",
    artist: {
      name: "Johannes Vermeer",
      lifespan: "1632 – 1675",
      nationality: "Dutch",
      movement: "Dutch Golden Age",
      portrait: getArtistUrl("Jan_Vermeer_van_Delft_002.jpg", 640),
      bio: "Master of optical balance and atmospheric light whose rare landscapes are considered the pinnacle of urban topography."
    },
    story: "A breathtaking morning panorama of Vermeer's hometown of Delft viewed from across the Schie canal. Sunlight breaks through billowing grey storm clouds, illuminating the spire of the Nieuwe Kerk.",
    historicalReferences: "The Nieuwe Kerk houses the mausoleum of William the Silent, founding father of the Dutch Republic. The clock shows roughly seven in the morning, capturing a living city waking up to maritime commerce.",
    notableFact: "French novelist Marcel Proust considered View of Delft 'the most beautiful painting in the world,' featuring it in his novel In Search of Lost Time."
  },

  // 32. Rembrandt - The Anatomy Lesson of Dr. Nicolaes Tulp
  {
    id: "anatomy-lesson",
    title: "The Anatomy Lesson of Dr. Nicolaes Tulp",
    originalTitle: "De anatomische les van Dr. Nicolaes Tulp",
    year: "1632",
    era: "Dutch Golden Age",
    medium: "Oil on canvas",
    dimensions: "169.5 cm × 216.5 cm",
    location: "Mauritshuis, The Hague, Netherlands",
    image: getPaintingUrl("The_Anatomy_Lesson_of_Dr_Nicolaes_Tulp.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/4/4d/The_Anatomy_Lesson_of_Dr_Nicolaes_Tulp.jpg",
    artist: {
      name: "Rembrandt van Rijn",
      lifespan: "1606 – 1669",
      nationality: "Dutch",
      movement: "Dutch Baroque",
      portrait: getArtistUrl("Rembrandt_Harmensz._van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg", 640),
      bio: "Dutch master who revolutionized group portraits through psychological intensity and human vulnerability."
    },
    story: "Eminent Amsterdam physician Nicolaes Tulp dissects the forearm flexor tendons of an executed criminal (Aris Kindt), while members of the Surgeons' Guild lean forward in intense intellectual scrutiny.",
    historicalReferences: "Commissioned by the Amsterdam Guild of Surgeons. Public dissections were grand annual civic spectacles combining scientific inquiry, Christian moral lessons on mortality, and civic pride in Golden Age Holland.",
    notableFact: "This was the masterpiece that established 26-year-old Rembrandt's reputation after his arrival in Amsterdam, launching his legendary career."
  },

  // 33. Frans Hals - The Laughing Cavalier
  {
    id: "laughing-cavalier",
    title: "The Laughing Cavalier",
    originalTitle: "Portret van een onbekende man",
    year: "1624",
    era: "Dutch Golden Age",
    medium: "Oil on canvas",
    dimensions: "83 cm × 67.3 cm",
    location: "Wallace Collection, London, United Kingdom",
    image: getPaintingUrl("Frans_Hals_-_The_Laughing_Cavalier.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/0/07/Frans_Hals_-_The_Laughing_Cavalier.jpg",
    artist: {
      name: "Frans Hals",
      lifespan: "c. 1582 – 1666",
      nationality: "Dutch",
      movement: "Dutch Golden Age",
      portrait: getArtistUrl("Frans_Hals_-_Self-portrait.jpg", 640),
      bio: "Haarlem portrait master renowned for his lively, spontaneous brushwork that brought unmatched vitality and laughter to human faces."
    },
    story: "A dashing, unknown 31-year-old gentleman in a dazzling silk doublet and lace ruff casts a haughty, amused glance with an upturned mustache. Despite the nickname, he is not laughing, but sporting an enigmatic smirk.",
    historicalReferences: "The embroidered motifs on his sleeve depict Mercury's caduceus, flaming cornucopias, and arrows of Cupid—symbolizing commerce, prosperity, and romantic conquest in Golden Age Haarlem.",
    notableFact: "In 1865, the 4th Marquess of Hertford outbid Baron James de Rothschild at auction in Paris, paying a then-staggering 51,000 francs for the canvas."
  },

  // 34. Fragonard - The Swing
  {
    id: "the-swing",
    title: "The Swing",
    originalTitle: "Les Hasards heureux de l'escarpolette",
    year: "1767",
    era: "Rococo",
    medium: "Oil on canvas",
    dimensions: "81 cm × 64.2 cm",
    location: "Wallace Collection, London, United Kingdom",
    image: getPaintingUrl("The_Swing_(Fragonard).jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/e/eb/The_Swing_%28Fragonard%29.jpg",
    artist: {
      name: "Jean-Honoré Fragonard",
      lifespan: "1732 – 1806",
      nationality: "French",
      movement: "Rococo",
      portrait: getArtistUrl("Fragonard_Self-Portrait.jpg", 640),
      bio: "Exuberant French Rococo master known for playful hedonism, luminous pastels, and aristocratic romantic intrigue."
    },
    story: "A coquettish young lady in a billowy pink silk gown kicks off her slipper as she swings high in an overgrown garden, delighting her secret lover concealed in the rosebushes while an elderly bishop pushes the swing from behind.",
    historicalReferences: "Commissioned by the libertine Baron de Saint-Julien. It epitomizes the playful, frivolous escapism of the French Ancien Régime aristocracy on the eve of the French Revolution.",
    notableFact: "A marble statue of Cupid shushes with a finger to his lips (Harpocrates), warning the garden to keep the secret affair safe from discovery."
  },

  // 35. Jacques-Louis David - The Death of Marat
  {
    id: "death-of-marat",
    title: "The Death of Marat",
    originalTitle: "La Mort de Marat",
    year: "1793",
    era: "Neoclassicism",
    medium: "Oil on canvas",
    dimensions: "165 cm × 128 cm",
    location: "Royal Museums of Fine Arts of Belgium, Brussels",
    image: getPaintingUrl("Death_of_Marat_by_David.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Death_of_Marat_by_David.jpg",
    artist: {
      name: "Jacques-Louis David",
      lifespan: "1748 – 1825",
      nationality: "French",
      movement: "Neoclassicism",
      portrait: getArtistUrl("Jacques-Louis_David_-_Self-Portrait_-_Google_Art_Project.jpg", 640),
      bio: "Leading Neoclassical painter and active Jacobin revolutionary whose severe, moralizing canvases shaped the French Revolution and Napoleonic Empire."
    },
    story: "Radical Jacobin journalist Jean-Paul Marat slumps lifeless in his medicinal bath, murdered by Girondin sympathizer Charlotte Corday. David transformed a political assassination into a secular Pietà.",
    historicalReferences: "Created at the height of the Reign of Terror. David was Marat's close friend and fellow Jacobin deputy who organized the state martyr funeral. Corday's deceitful petition letter remains clutched in Marat's hand.",
    notableFact: "David famously inscribed on the simple wooden packing crate table: 'À MARAT, DAVID' (To Marat, from David), cementing his personal devotion."
  },

  // 36. Jacques-Louis David - Napoleon Crossing the Alps
  {
    id: "napoleon-crossing",
    title: "Napoleon Crossing the Alps",
    originalTitle: "Le Premier Consul franchissant les Alpes au col du Grand-Saint-Bernard",
    year: "1801",
    era: "Neoclassicism",
    medium: "Oil on canvas",
    dimensions: "260 cm × 221 cm",
    location: "Château de Malmaison, Rueil-Malmaison, France",
    image: getPaintingUrl("Napoleon_at_the_Great_St._Bernard_-_Jacques-Louis_David_-_Google_Cultural_Institute.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Napoleon_4.jpg",
    artist: {
      name: "Jacques-Louis David",
      lifespan: "1748 – 1825",
      nationality: "French",
      movement: "Neoclassicism",
      portrait: getArtistUrl("Jacques-Louis_David_-_Self-Portrait_-_Google_Art_Project.jpg", 640),
      bio: "Premier painter to Napoleon Bonaparte who forged the heroic visual mythology of the French Empire."
    },
    story: "Napoleon Bonaparte, First Consul of France, calms a fiery rearing Arabian stallion amidst howling alpine winds, pointing resolutely forward toward victory in Italy.",
    historicalReferences: "Commemorates the daring May 1800 crossing of the Great St Bernard Pass that surprised Austrian forces at the Battle of Marengo. The rocks below are inscribed with 'BONAPARTE', 'HANNIBAL', and 'KAROLUS MAGNUS' (Charlemagne).",
    notableFact: "In reality, Napoleon crossed the pass days behind his army riding a sturdy, humble mule guided by a local peasant."
  },

  // 37. Francisco Goya - The Third of May 1808
  {
    id: "third-of-may",
    title: "The Third of May 1808",
    originalTitle: "El tres de mayo de 1808 en Madrid",
    year: "1814",
    era: "Romanticism",
    medium: "Oil on canvas",
    dimensions: "268 cm × 347 cm",
    location: "Museo del Prado, Madrid, Spain",
    image: getPaintingUrl("El_tres_de_mayo_de_1808_en_Madrid_(2).jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/f/fd/El_tres_de_mayo_de_1808_en_Madrid_%282%29.jpg",
    artist: {
      name: "Francisco Goya",
      lifespan: "1746 – 1828",
      nationality: "Spanish",
      movement: "Romanticism",
      portrait: getArtistUrl("Goya_Self-portrait_1815.jpg", 640),
      bio: "Spanish master regarded as the last of the Old Masters and the first of the Moderns, confronting war's horror without romantic glorification."
    },
    story: "A defenseless Spanish laborer in a glowing white shirt raises his arms in cruciform surrender before an anonymous French firing squad, illuminated by a harsh box lantern amidst heaps of bloody corpses.",
    historicalReferences: "Depicts the brutal reprisal executions conducted by Napoleon's occupying troops on Príncipe Pío hill following the Madrid Dos de Mayo uprising during the Peninsular War.",
    notableFact: "Often hailed by art historians as the world's first truly modern painting because it depicts the raw slaughter of war without heroic glorification."
  },

  // 38. Francisco Goya - Saturn Devouring His Son
  {
    id: "saturn-devouring",
    title: "Saturn Devouring His Son",
    originalTitle: "Saturno devorando a su hijo",
    year: "c. 1819 – 1823",
    era: "Romanticism (Black Paintings)",
    medium: "Mural transfer to canvas",
    dimensions: "143.5 cm × 81.4 cm",
    location: "Museo del Prado, Madrid, Spain",
    image: getPaintingUrl("Saturno_devorando_a_su_hijo_(1819-1823).jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/8/82/Francisco_de_Goya%2C_Saturno_devorando_a_su_hijo_%281819-1823%29.jpg",
    artist: {
      name: "Francisco Goya",
      lifespan: "1746 – 1828",
      nationality: "Spanish",
      movement: "Romanticism",
      portrait: getArtistUrl("Goya_Self-portrait_1815.jpg", 640),
      bio: "Visionary who explored the darkest recesses of human cruelty, fear, and mortality in his isolated deaf old age."
    },
    story: "The titan Saturn (Cronus), maddened by prophecies that his children will overthrow him, clutches the mutilated, headless corpse of his offspring in wild terror, ripping off an arm with bloodied jaws.",
    historicalReferences: "One of fourteen haunting 'Black Paintings' (Pinturas Negras) painted directly in oil onto the plaster walls of Goya's country house, Quinta del Sordo (House of the Deaf Man), during Ferdinand VII's despotic restoration.",
    notableFact: "Goya never intended these murals for public view or gave them titles; they were hacked off the walls and transferred to canvas fifty years after his death."
  },

  // 39. Théodore Géricault - The Raft of the Medusa
  {
    id: "raft-of-medusa",
    title: "The Raft of the Medusa",
    originalTitle: "Le Radeau de la Méduse",
    year: "1818 – 1819",
    era: "Romanticism",
    medium: "Oil on canvas",
    dimensions: "491 cm × 716 cm",
    location: "Musée du Louvre, Paris, France",
    image: getPaintingUrl("Le_Radeau_de_la_M%C3%A9duse_-_Th%C3%A9odore_G%C3%A9ricault_-_Mus%C3%A9e_du_Louvre_INV_4884.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/1/15/JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg",
    artist: {
      name: "Théodore Géricault",
      lifespan: "1791 – 1824",
      nationality: "French",
      movement: "Romanticism",
      portrait: getArtistUrl("Th%C3%A9odore_G%C3%A9ricault_-_Self-portrait.jpg", 640),
      bio: "Pioneering French Romantic whose visceral monumentality and investigative realism shocked the 1819 Paris Salon."
    },
    story: "Starving, dehydrated survivors on a makeshift wooden raft desperately flag down the distant silhouette of rescue ship Argus, amidst rising sea swells and the corpses of companions lost to madness and cannibalism.",
    historicalReferences: "The naval frigate Méduse ran aground off Mauritania in 1816 due to the gross incompetence of an aristocratic royalist captain. Out of 147 castaways abandoned on the raft, only 15 survived a 13-day nightmare.",
    notableFact: "Géricault interviewed survivors, had a carpenter build a scale raft in his studio, and studied amputated limbs and cadavers from the Beaujon Hospital morgue."
  },

  // 40. J.M.W. Turner - The Fighting Temeraire
  {
    id: "fighting-temeraire",
    title: "The Fighting Temeraire",
    originalTitle: "The Fighting Temeraire tugged to her last berth to be broken up",
    year: "1839",
    era: "Romanticism",
    medium: "Oil on canvas",
    dimensions: "90.7 cm × 121.6 cm",
    location: "National Gallery, London, United Kingdom",
    image: getPaintingUrl("The_Fighting_Temeraire%2C_JMW_Turner%2C_National_Gallery.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/3/30/The_Fighting_Temeraire%2C_JMW_Turner%2C_National_Gallery.jpg",
    artist: {
      name: "J.M.W. Turner",
      lifespan: "1775 – 1851",
      nationality: "British",
      movement: "Romanticism",
      portrait: getArtistUrl("Joseph_Mallord_William_Turner_self-portrait.jpg", 640),
      bio: "The 'painter of light' whose expressive, swirling atmospheric watercolors and oils anticipated Impressionism."
    },
    story: "The heroic 98-gun veteran warship HMS Temeraire is towed up the River Thames by a small, black steam-powered paddle tug toward a Rotherhithe scrapyard, set against a blazing sunset over glassy water.",
    historicalReferences: "HMS Temeraire played a decisive role at the historic 1805 Battle of Trafalgar saving Nelson's flagship HMS Victory. Turner poignantly contrasted the vanishing heroic era of sail against the emerging industrial machine age.",
    notableFact: "Voted the 'Greatest Painting in Britain' in a nationwide BBC public poll in 2005."
  },

  // 41. John Constable - The Hay Wain
  {
    id: "the-hay-wain",
    title: "The Hay Wain",
    originalTitle: "Landscape: Noon",
    year: "1821",
    era: "Romanticism",
    medium: "Oil on canvas",
    dimensions: "130.2 cm × 185.4 cm",
    location: "National Gallery, London, United Kingdom",
    image: getPaintingUrl("John_Constable_The_Hay_Wain.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/2/21/John_Constable_The_Hay_Wain.jpg",
    artist: {
      name: "John Constable",
      lifespan: "1776 – 1837",
      nationality: "British",
      movement: "Romanticism",
      portrait: getArtistUrl("John_Constable_-_Self-portrait.jpg", 640),
      bio: "English landscape master who captured natural weather, scudding clouds, and rural Suffolk scenery with shimmering white highlights."
    },
    story: "Three horses pull an empty wooden farm wagon through the shallow millpond of the River Stour beside Willy Lott's cottage, beneath a towering cathedral of dynamic Suffolk rain clouds.",
    historicalReferences: "Exhibited at the 1824 Paris Salon where it won a Gold Medal and mesmerized young French painters Eugène Delacroix and the Barbizon School, reshaping European landscape painting.",
    notableFact: "Constable made dozens of full-scale oil sketches outdoors (en plein air) to study the fleeting effects of sunlight and wind on moisture before completing the studio canvas."
  },

  // 42. John Everett Millais - Ophelia
  {
    id: "millais-ophelia",
    title: "Ophelia",
    originalTitle: "Ophelia",
    year: "1851 – 1852",
    era: "Pre-Raphaelite Brotherhood",
    medium: "Oil on canvas",
    dimensions: "76.2 cm × 111.8 cm",
    location: "Tate Britain, London, United Kingdom",
    image: getPaintingUrl("John_Everett_Millais_-_Ophelia_-_Google_Art_Project.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/9/94/John_Everett_Millais_-_Ophelia_-_Google_Art_Project.jpg",
    artist: {
      name: "John Everett Millais",
      lifespan: "1829 – 1896",
      nationality: "British",
      movement: "Pre-Raphaelite Brotherhood",
      portrait: getArtistUrl("Sir_John_Everett_Millais%2C_1st_Bt_by_Charles_West_Cope.jpg", 640),
      bio: "Prodigious co-founder of the Pre-Raphaelite Brotherhood dedicated to luminous color, microscopic nature study, and literary fidelity."
    },
    story: "Illustrates the tragic death from Shakespeare's Hamlet where Ophelia, driven to madness, floats singing softly in a willow-draped brook as her embroidered garments drag her down to muddy death.",
    historicalReferences: "The floral wreath includes symbolic weeping willows (forsaken love), nettles (pain), daisies (innocence), pansies (thought), and red poppies (sleep and death). Painted along the Hogsmill River in Surrey.",
    notableFact: "Model Elizabeth Siddal posed fully clothed in a bathtub heated by oil lamps beneath; when the lamps went out, she caught severe pneumonia, prompting her father to threaten legal action."
  },

  // 43. Édouard Manet - Le Déjeuner sur l'herbe
  {
    id: "dejeuner-herbe",
    title: "Le Déjeuner sur l'herbe",
    originalTitle: "Le Déjeuner sur l'herbe (Luncheon on the Grass)",
    year: "1863",
    era: "Realism / Pre-Impressionism",
    medium: "Oil on canvas",
    dimensions: "208 cm × 264.5 cm",
    location: "Musée d'Orsay, Paris, France",
    image: getPaintingUrl("Edouard_Manet_-_Luncheon_on_the_Grass_-_Google_Art_Project.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Edouard_Manet_-_Luncheon_on_the_Grass_-_Google_Art_Project.jpg",
    artist: {
      name: "Édouard Manet",
      lifespan: "1832 – 1883",
      nationality: "French",
      movement: "Realism / Impressionism",
      portrait: getArtistUrl("Edouard_Manet_1874.jpg", 640),
      bio: "Father of modern painting who breached academic decorum by painting contemporary Parisian life with flat perspective and bold brushstrokes."
    },
    story: "A naked female model unashamedly picnicking in a public woodland with two fully dressed bourgeois gentlemen in contemporary Parisian suits, while another bather wades in the background stream.",
    historicalReferences: "Rejected by the conservative 1863 official Paris Salon, Napoleon III permitted it in the breakthrough Salon des Refusés, sparking public outrage that catalyzed the birth of modern art.",
    notableFact: "Manet based the triangular composition on Marcantonio Raimondi's Renaissance engraving of The Judgment of Paris by Raphael."
  },

  // 44. Édouard Manet - A Bar at the Folies-Bergère
  {
    id: "bar-folies-bergere",
    title: "A Bar at the Folies-Bergère",
    originalTitle: "Un bar aux Folies Bergère",
    year: "1882",
    era: "Realism / Impressionism",
    medium: "Oil on canvas",
    dimensions: "96 cm × 130 cm",
    location: "Courtauld Gallery, London, United Kingdom",
    image: getPaintingUrl("Edouard_Manet%2C_A_Bar_at_the_Folies-Berg%C3%A8re.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Edouard_Manet%2C_A_Bar_at_the_Folies-Berg%C3%A8re.jpg",
    artist: {
      name: "Édouard Manet",
      lifespan: "1832 – 1883",
      nationality: "French",
      movement: "Impressionism",
      portrait: getArtistUrl("Edouard_Manet_1874.jpg", 640),
      bio: "Pioneering modernist whose final masterwork captured the alienation, dazzle, and commercialism of modern Parisian nightlife."
    },
    story: "Barmaid Suzon stands behind a marble counter covered in champagne bottles and oranges, gazing detached into the viewer's eyes while the massive mirror behind her reflects the glittering circus crowd.",
    historicalReferences: "The Folies-Bergère was Paris's premier modern music hall where trapeze artists (whose green-shod feet appear at top left) and social classes mingled. It captures the psychological alienation of wage laborers.",
    notableFact: "Manet deliberately skewed the perspective in the mirror: Suzon's reflection appears shifted to the right talking to a mustachioed customer who occupies the exact spot where we stand."
  },

  // 45. Claude Monet - Impression, Sunrise
  {
    id: "impression-sunrise",
    title: "Impression, Sunrise",
    originalTitle: "Impression, soleil levant",
    year: "1872",
    era: "Impressionism",
    medium: "Oil on canvas",
    dimensions: "48 cm × 63 cm",
    location: "Musée Marmottan Monet, Paris, France",
    image: getPaintingUrl("Monet_-_Impression%2C_Sunrise.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/5/59/Monet_-_Impression%2C_Sunrise.jpg",
    artist: {
      name: "Claude Monet",
      lifespan: "1840 – 1926",
      nationality: "French",
      movement: "Impressionism",
      portrait: getArtistUrl("Claude_Monet_1899_Nadar.jpg", 640),
      bio: "Founding father of French Impressionism whose obsession with fleeting light, atmospheric color, and open-air painting gave the movement its name."
    },
    story: "The industrial harbor of Le Havre shrouded in morning mist, as an incandescent orange sun rises over the water and two small rowboats glide across shimmering complementary blue-orange ripples.",
    historicalReferences: "Exhibited in April 1874 at the independent exhibition of the Société Anonyme Coopérative. Hostile critic Louis Leroy derisively labeled the group 'Impressionists', inadvertently naming the most famous art movement in history.",
    notableFact: "Monet explained the title: 'They asked me for a title for the catalogue... I said: Put Impression.'"
  },

  // 46. Claude Monet - Woman with a Parasol
  {
    id: "woman-parasol",
    title: "Woman with a Parasol",
    originalTitle: "La Promenade, la femme à l'ombrelle",
    year: "1875",
    era: "Impressionism",
    medium: "Oil on canvas",
    dimensions: "100 cm × 81 cm",
    location: "National Gallery of Art, Washington, D.C.",
    image: getPaintingUrl("Claude_Monet_-_Woman_with_a_Parasol_-_Madame_Monet_and_Her_Son_-_Google_Art_Project.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/9/91/Claude_Monet_-_Woman_with_a_Parasol_-_Madame_Monet_and_Her_Son_-_Google_Art_Project.jpg",
    artist: {
      name: "Claude Monet",
      lifespan: "1840 – 1926",
      nationality: "French",
      movement: "Impressionism",
      portrait: getArtistUrl("Claude_Monet_1899_Nadar.jpg", 640),
      bio: "Supreme Impressionist master of outdoor sunlight, vibrating shadows, and plein-air spontaneous brushwork."
    },
    story: "Monet's first wife Camille and their young seven-year-old son Jean on a windy summer meadow in Argenteuil. Camille's white dress billows as she turns toward the painter with the green parasol casting a luminous colored shadow.",
    historicalReferences: "Monet painted the scene entirely outdoors within a single sitting, pioneering rapid broken brushstrokes to capture wind blowing through wild grass and scudding clouds.",
    notableFact: "The upward angle (contre-plongée) makes Camille appear almost monumental against the sunlit blue sky."
  },

  // 47. Claude Monet - Water Lilies (Nymphéas)
  {
    id: "water-lilies",
    title: "Water Lilies (Nymphéas)",
    originalTitle: "Nymphéas",
    year: "1916 – 1919",
    era: "Impressionism",
    medium: "Oil on canvas",
    dimensions: "200 cm × 180 cm",
    location: "Musée Marmottan Monet, Paris, France",
    image: getPaintingUrl("Claude_Monet_-_Water_Lilies_-_1916-1919.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Claude_Monet_-_Water_Lilies_-_1916-1919.jpg",
    artist: {
      name: "Claude Monet",
      lifespan: "1840 – 1926",
      nationality: "French",
      movement: "Impressionism",
      portrait: getArtistUrl("Claude_Monet_1899_Nadar.jpg", 640),
      bio: "Master who spent his final decades at his water garden in Giverny transforming pond surfaces into precursors of abstract art."
    },
    story: "A tranquil water expanse where floating lily pads and delicate blossom clusters merge with reflections of weeping willows and drifting sky, dissolving any horizon line or physical shoreline.",
    historicalReferences: "Painted during the devastating carnage of World War I. Following the 1918 Armistice, Monet gifted the immense monumental Nymphéas cycle to the French State as a permanent monument to peace, now housed in the Musée de l'Orangerie.",
    notableFact: "Monet suffered from severe cataracts in his later years, leading him to perceive and paint the world in bold, fiery purples and liquid blues."
  },

  // 48. Renoir - Bal du moulin de la Galette
  {
    id: "moulin-galette",
    title: "Bal du moulin de la Galette",
    originalTitle: "Bal du moulin de la Galette",
    year: "1876",
    era: "Impressionism",
    medium: "Oil on canvas",
    dimensions: "131 cm × 175 cm",
    location: "Musée d'Orsay, Paris, France",
    image: getPaintingUrl("Pierre-Auguste_Renoir%2C_Le_Moulin_de_la_Galette.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/2/21/Pierre-Auguste_Renoir%2C_Le_Moulin_de_la_Galette.jpg",
    artist: {
      name: "Pierre-Auguste Renoir",
      lifespan: "1841 – 1919",
      nationality: "French",
      movement: "Impressionism",
      portrait: getArtistUrl("Pierre-Auguste_Renoir%2C_photo_par_Dornac.jpg", 640),
      bio: "Beloved Impressionist celebrated for joyous social scenes, warm human warmth, and dappled sunlit color harmonies."
    },
    story: "A lively Sunday afternoon open-air dance in Montmartre. Working-class Parisians chat at tables, drink wine, and waltz beneath acacia trees with dappled sunlight shimmering across faces and dresses.",
    historicalReferences: "The Moulin de la Galette was an authentic Montmartre windmill dance hall that served galette flatbread. It captures the joyful resurgence of Parisian working-class life following the Franco-Prussian War.",
    notableFact: "Renoir had friends help carry the large canvas up the steep hill of Montmartre each morning so he could paint real dancing crowds from life."
  },

  // 49. Renoir - Luncheon of the Boating Party
  {
    id: "boating-party",
    title: "Luncheon of the Boating Party",
    originalTitle: "Le Déjeuner des canotiers",
    year: "1881",
    era: "Impressionism",
    medium: "Oil on canvas",
    dimensions: "129.9 cm × 172.7 cm",
    location: "The Phillips Collection, Washington, D.C.",
    image: getPaintingUrl("Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg",
    artist: {
      name: "Pierre-Auguste Renoir",
      lifespan: "1841 – 1919",
      nationality: "French",
      movement: "Impressionism",
      portrait: getArtistUrl("Pierre-Auguste_Renoir%2C_photo_par_Dornac.jpg", 640),
      bio: "Master of convivial bohemian gatherings, sparkling table still lifes, and warm human camaraderie."
    },
    story: "Friends relax on the sun-drenched balcony of the Maison Fournaise restaurant along the Seine in Chatou, enjoying wine, fruit, and lively conversation under an awning overlooking rowing boats.",
    historicalReferences: "Features real friends: painter Gustave Caillebotte in straw hat straddling a chair, actress Ellen Andrée drinking from a glass, and Renoir's future wife Aline Charigot playing with an affenpinscher puppy.",
    notableFact: "Purchased in 1923 by Duncan Phillips for $125,000, calling it 'one of the world's few masterpieces that will never grow old.'"
  },

  // 50. Georges Seurat - A Sunday on La Grande Jatte
  {
    id: "sunday-grande-jatte",
    title: "A Sunday on La Grande Jatte",
    originalTitle: "Un dimanche après-midi à l'Île de la Grande Jatte",
    year: "1884 – 1886",
    era: "Neo-Impressionism (Pointillism)",
    medium: "Oil on canvas",
    dimensions: "207.5 cm × 308.1 cm",
    location: "Art Institute of Chicago, Illinois",
    image: getPaintingUrl("A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/7/7d/A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg",
    artist: {
      name: "Georges Seurat",
      lifespan: "1859 – 1891",
      nationality: "French",
      movement: "Neo-Impressionism / Pointillism",
      portrait: getArtistUrl("Georges_Seurat_1888.jpg", 640),
      bio: "Pioneering innovator who developed divisionism (pointillism), applying tiny dots of pure complementary color to achieve optical vibration."
    },
    story: "Parisians of various social classes relax along the grassy banks of the River Seine island of La Grande Jatte on a tranquil Sunday. Figures stand motionless in profile, resembling classical Greek statuary.",
    historicalReferences: "Seurat applied scientific optical theories of Michel Eugène Chevreul and Ogden Rood, believing adjacent dots of complementary colors would fuse inside the spectator's eye with greater brilliance than premixed pigments.",
    notableFact: "The fashionable lady on the right holds a pet monkey on a leash—a subtle 19th-century visual slang symbol for sexual license or a wealthy courtesan."
  },

  // 51. Van Gogh - Sunflowers
  {
    id: "sunflowers",
    title: "Sunflowers (Twelve Sunflowers in a Vase)",
    originalTitle: "Zonnebloemen",
    year: "1888",
    era: "Post-Impressionism",
    medium: "Oil on canvas",
    dimensions: "91 cm × 72 cm",
    location: "National Gallery, London, United Kingdom",
    image: getPaintingUrl("Vincent_Willem_van_Gogh_127.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/4/46/Vincent_Willem_van_Gogh_127.jpg",
    artist: {
      name: "Vincent van Gogh",
      lifespan: "1853 – 1890",
      nationality: "Dutch",
      movement: "Post-Impressionism",
      portrait: getArtistUrl("Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg", 640),
      bio: "Post-Impressionist master who used expressive color as a direct emotional and spiritual language."
    },
    story: "Painted in Arles in southern France to decorate the guest bedroom of his rented 'Yellow House' in anticipation of the arrival of his friend and fellow painter Paul Gauguin.",
    historicalReferences: "Demonstrates Van Gogh's revolutionary 'symphony in yellow'—using newly invented synthetic chrome yellow pigments to render every stage of the flower's life cycle from budding bloom to wilting seedhead.",
    notableFact: "Gauguin was so enchanted by the sunflowers that he proclaimed them uniquely Vincent's and even painted a portrait of Van Gogh in the act of painting them."
  },

  // 52. Van Gogh - Café Terrace at Night
  {
    id: "cafe-terrace-night",
    title: "Café Terrace at Night",
    originalTitle: "Terrasse du café le soir",
    year: "1888",
    era: "Post-Impressionism",
    medium: "Oil on canvas",
    dimensions: "80.7 cm × 65.3 cm",
    location: "Kröller-Müller Museum, Otterlo, Netherlands",
    image: getPaintingUrl("Vincent_van_Gogh_-_Cafe_Terrace_at_Night_(Yorck).jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/0/09/Vincent_van_Gogh_-_Cafe_Terrace_at_Night_%28Yorck%29.jpg",
    artist: {
      name: "Vincent van Gogh",
      lifespan: "1853 – 1890",
      nationality: "Dutch",
      movement: "Post-Impressionism",
      portrait: getArtistUrl("Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg", 640),
      bio: "Master whose nocturnal canvases proved that nighttime possesses richer and more vibrant colors than daytime."
    },
    story: "A brilliantly illuminated outdoor café terrace on the Place du Forum in Arles beneath a deep starlit violet sky. Van Gogh executed the painting directly on the street at night without using a single stroke of black paint.",
    historicalReferences: "Van Gogh wrote excitedly to his sister Wil: 'The night is more alive and richly colored than the day... I enormously enjoy painting on the spot at night.' The café still exists today in Arles as 'Café Van Gogh'.",
    notableFact: "This was the very first painting where Van Gogh incorporated his signature swirling starry sky background, predating The Starry Night by nine months."
  },

  // 53. Paul Cézanne - The Mont Sainte-Victoire
  {
    id: "cezanne-mont-sainte-victoire",
    title: "Mont Sainte-Victoire seen from Bellevue",
    originalTitle: "La Montagne Sainte-Victoire vue de Bellevue",
    year: "c. 1886",
    era: "Post-Impressionism",
    medium: "Oil on canvas",
    dimensions: "65.5 cm × 81.7 cm",
    location: "Barnes Foundation, Philadelphia, Pennsylvania",
    image: getPaintingUrl("Paul_C%C3%A9zanne_-_Mont_Sainte-Victoire_-_Barnes.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Paul_C%C3%A9zanne_-_Mont_Sainte-Victoire_-_Barnes.jpg",
    artist: {
      name: "Paul Cézanne",
      lifespan: "1839 – 1906",
      nationality: "French",
      movement: "Post-Impressionism",
      portrait: getArtistUrl("Paul_C%C3%A9zanne_-_Self-Portrait_-_Google_Art_Project.jpg", 640),
      bio: "The 'father of us all' according to Picasso and Matisse, who bridged 19th-century Impressionism and 20th-century Cubism."
    },
    story: "The limestone crest of Mont Sainte-Victoire towers over the Provençal valley of Aix-en-Provence. Cézanne broke the landscape down into rhythmic geometric patches and planes of green, ochre, and violet.",
    historicalReferences: "Cézanne declared his ambition to 'make of Impressionism something solid and durable, like the art of the museums,' replacing fleeting sensory impressions with enduring structural architectural harmony.",
    notableFact: "Cézanne painted Mont Sainte-Victoire over sixty times in oil and watercolor, treating the mountain as a sacred personal motif."
  },

  // 54. Paul Cézanne - The Card Players
  {
    id: "the-card-players",
    title: "The Card Players",
    originalTitle: "Les Joueurs de cartes",
    year: "1892 – 1895",
    era: "Post-Impressionism",
    medium: "Oil on canvas",
    dimensions: "47.5 cm × 57 cm",
    location: "Musée d'Orsay, Paris, France",
    image: getPaintingUrl("Les_Joueurs_de_cartes%2C_par_Paul_C%C3%A9zanne.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Les_Joueurs_de_cartes%2C_par_Paul_C%C3%A9zanne.jpg",
    artist: {
      name: "Paul Cézanne",
      lifespan: "1839 – 1906",
      nationality: "French",
      movement: "Post-Impressionism",
      portrait: getArtistUrl("Paul_C%C3%A9zanne_-_Self-Portrait_-_Google_Art_Project.jpg", 640),
      bio: "Master who reduced natural forms to the cylinder, sphere, and cone, creating monumental structural presence."
    },
    story: "Two weathered Provençal farmworkers sit at a wooden table in deep, silent concentration over a game of cards, separated by an unlabelled wine bottle catching a sliver of light.",
    historicalReferences: "Cézanne used local laborers who worked on his family estate, the Jas de Bouffan, as models, stripping away traditional 17th-century tavern rowdiness to render a solemn secular meditation.",
    notableFact: "One of the versions in the series was purchased privately by the Royal Family of Qatar in 2011 for an estimated $250 million, making it one of the most valuable paintings in history."
  },

  // 55. Henri Rousseau - The Sleeping Gypsy
  {
    id: "sleeping-gypsy",
    title: "The Sleeping Gypsy",
    originalTitle: "La Bohémienne endormie",
    year: "1897",
    era: "Post-Impressionism / Naïve Art",
    medium: "Oil on canvas",
    dimensions: "129.5 cm × 200.7 cm",
    location: "Museum of Modern Art (MoMA), New York City",
    image: getPaintingUrl("Henri_Rousseau_-_La_Boh%C3%A9mienne_endormie_-_Google_Art_Project.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Henri_Rousseau_-_La_Boh%C3%A9mienne_endormie_-_Google_Art_Project.jpg",
    artist: {
      name: "Henri Rousseau (Le Douanier)",
      lifespan: "1844 – 1910",
      nationality: "French",
      movement: "Naïve Art / Post-Impressionism",
      portrait: getArtistUrl("Henri_Rousseau_1907.jpg", 640),
      bio: "Self-taught Paris toll collector whose dreamlike visions and exotic jungles enchanted Picasso, Apollinaire, and the Surrealists."
    },
    story: "In a moonlit desert, a sleeping wanderer in a rainbow-striped gown rests beside her mandolin and water jar, while a curious lion approaches softly, sniffing without doing her harm.",
    historicalReferences: "Rousseau offered the canvas to the mayor of his hometown Laval for 200 francs, but was mocked and rejected. Decades later, it became one of MoMA's most beloved early modernist icons.",
    notableFact: "Rousseau described it on the frame: 'A feline carnivore passes, notices her, but does not devour her. There is a moonlight effect, very poetic.'"
  },

  // 56. Gustav Klimt - Portrait of Adele Bloch-Bauer I
  {
    id: "adele-bloch-bauer",
    title: "Portrait of Adele Bloch-Bauer I",
    originalTitle: "Porträt der Adele Bloch-Bauer I (The Woman in Gold)",
    year: "1907",
    era: "Vienna Secession (Art Nouveau)",
    medium: "Oil, silver, and gold leaf on canvas",
    dimensions: "138 cm × 138 cm",
    location: "Neue Galerie, New York City",
    image: getPaintingUrl("Gustav_Klimt_046.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/8/84/Gustav_Klimt_046.jpg",
    artist: {
      name: "Gustav Klimt",
      lifespan: "1862 – 1918",
      nationality: "Austrian",
      movement: "Vienna Secession",
      portrait: getArtistUrl("Klimt.jpg", 640),
      bio: "Austrian symbolist celebrated for his dazzling integration of gold leaf and intricate decorative patterns with sensual portraits."
    },
    story: "Viennese salon hostess Adele Bloch-Bauer emerges from an intricate sea of gilded Byzantine spirals, Egyptian eye symbols, and shimmering gold rectangles, clasping her hands with quiet melancholy.",
    historicalReferences: "Looted by the Nazis in 1941 and retitled 'The Woman in Gold' to erase its Jewish subject. Following an epic international legal battle led by Adele's niece Maria Altmann, it was returned in 2006.",
    notableFact: "Acquired by cosmetics heir Ronald Lauder for the Neue Galerie in New York in 2006 for $135 million, then the highest price ever paid for a painting."
  },

  // 57. Grant Wood - American Gothic
  {
    id: "american-gothic",
    title: "American Gothic",
    originalTitle: "American Gothic",
    year: "1930",
    era: "Regionalism",
    medium: "Oil on beaverboard",
    dimensions: "78 cm × 65.3 cm",
    location: "Art Institute of Chicago, Illinois",
    image: getPaintingUrl("Grant_DeVolson_Wood_-_American_Gothic.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg",
    artist: {
      name: "Grant Wood",
      lifespan: "1891 – 1942",
      nationality: "American",
      movement: "American Regionalism",
      portrait: getArtistUrl("Grant_Wood_1932.jpg", 640),
      bio: "Midwestern American painter who championed rural American subjects with crisp, meticulous Northern Renaissance precision."
    },
    story: "A stern, pitchfork-wielding farmer and his daughter stand in front of a modest white wooden cottage built in Carpenter Gothic architectural style in Eldon, Iowa.",
    historicalReferences: "Painted during the onset of the Great Depression, the image came to symbolize the unyielding stoicism, grit, and moral rectitude of rural American pioneers.",
    notableFact: "Wood used his 32-year-old sister Nan Wood Graham and his 62-year-old family dentist Dr. Byron McKeeby as models."
  },

  // 58. Edward Hopper - Nighthawks
  {
    id: "nighthawks",
    title: "Nighthawks",
    originalTitle: "Nighthawks",
    year: "1942",
    era: "American Realism",
    medium: "Oil on canvas",
    dimensions: "84.1 cm × 152.4 cm",
    location: "Art Institute of Chicago, Illinois",
    image: getPaintingUrl("Nighthawks_by_Edward_Hopper_1942.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg",
    artist: {
      name: "Edward Hopper",
      lifespan: "1882 – 1967",
      nationality: "American",
      movement: "American Realism",
      portrait: getArtistUrl("Edward_Hopper_1937.jpg", 640),
      bio: "Master of cinematic solitude, architectural geometry, and the psychological quietness of modern urban America."
    },
    story: "Four nocturnal figures inside an all-night diner with curved plate-glass windows on a deserted Greenwich Village street corner under eerie fluorescent light, lost in their own thoughts.",
    historicalReferences: "Completed weeks after the Japanese attack on Pearl Harbor in December 1941, capturing the tense, shadowed anxiety of wartime blackouts in New York City.",
    notableFact: "The diner has no visible door to the outside world, subtly amplifying the inescapable atmosphere of emotional quarantine."
  },

  // 59. Matthias Grünewald - Isenheim Altarpiece
  {
    id: "isenheim-altarpiece",
    title: "Isenheim Altarpiece (The Crucifixion)",
    originalTitle: "Isenheimer Altar",
    year: "c. 1512 – 1516",
    era: "Northern Renaissance",
    medium: "Oil on limewood panel",
    dimensions: "269 cm × 307 cm",
    location: "Unterlinden Museum, Colmar, France",
    image: getPaintingUrl("Grunewald_Crucifixion.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Grunewald_Crucifixion.jpg",
    artist: {
      name: "Matthias Grünewald",
      lifespan: "c. 1470 – 1528",
      nationality: "German",
      movement: "German Renaissance",
      portrait: getArtistUrl("Matthias_Gr%C3%BCnewald_-_Self-Portrait_-_WGA10787.jpg", 640),
      bio: "Visionary German Renaissance painter of intense spiritual expressionism and visceral emotional power."
    },
    story: "A harrowing Crucifixion where Christ's twisted body is covered in lacerations, thorns, and gangrenous sores, flanked by the swooning Virgin Mary and John the Baptist pointing with prophetic certainty.",
    historicalReferences: "Commissioned for the Hospital of Saint Anthony in Isenheim, where Antonine monks treated victims of ergotism ('Saint Anthony's Fire') and the plague. Patients were brought before the altar to take comfort that Christ shared their physical torment.",
    notableFact: "The altarpiece's folding panels allowed hospital patients to see scenes of agony during Lent and radiant resurrection on feast days."
  },

  // 60. Andrea Mantegna - The Lamentation of Christ
  {
    id: "mantegna-lamentation",
    title: "The Lamentation over the Dead Christ",
    originalTitle: "Cristo morto",
    year: "c. 1480",
    era: "Early Renaissance",
    medium: "Tempera on canvas",
    dimensions: "68 cm × 81 cm",
    location: "Pinacoteca di Brera, Milan, Italy",
    image: getPaintingUrl("Andrea_Mantegna_-_The_Lamentation_over_the_Dead_Christ.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Andrea_Mantegna_-_The_Lamentation_over_the_Dead_Christ.jpg",
    artist: {
      name: "Andrea Mantegna",
      lifespan: "1431 – 1506",
      nationality: "Italian (Paduan)",
      movement: "Early Renaissance",
      portrait: getArtistUrl("Andrea_Mantegna_084.jpg", 640),
      bio: "Pioneering master of dramatic foreshortening, archaeological antiquity, and sculptural anatomical perspective."
    },
    story: "A shockingly radical foreshortened view of Christ's lifeless body laid upon a cold marble slab, viewed from the soles of his pierced feet upward, while Saint John and the Virgin Mary weep.",
    historicalReferences: "Mantegna modified mathematical linear perspective deliberately: he kept Christ's head proportionally larger than strict geometry dictated to prevent the feet from overwhelming the composition.",
    notableFact: "Found in Mantegna's personal studio after his death, suggesting he painted it for his own private contemplation rather than a commission."
  },

  // 61. Piero della Francesca - The Baptism of Christ
  {
    id: "piero-baptism",
    title: "The Baptism of Christ",
    originalTitle: "Battesimo di Cristo",
    year: "c. 1450",
    era: "Early Renaissance",
    medium: "Egg tempera on poplar panel",
    dimensions: "167 cm × 116 cm",
    location: "National Gallery, London, United Kingdom",
    image: getPaintingUrl("Piero_della_Francesca_045.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/3/30/Piero_della_Francesca_045.jpg",
    artist: {
      name: "Piero della Francesca",
      lifespan: "c. 1415 – 1492",
      nationality: "Italian (Tuscan)",
      movement: "Early Renaissance",
      portrait: getArtistUrl("Piero_della_Francesca_selfportrait.jpg", 640),
      bio: "Mathematician, geometer, and painter whose monumental stillness and mathematical order defined Tuscan Renaissance beauty."
    },
    story: "Christ stands immersed in the shallow River Jordan while John the Baptist pours water over His head, beneath the descending Holy Spirit dove and three angels hand-in-hand under a walnut tree.",
    historicalReferences: "Commissioned for the Camaldolese abbey in Sansepolcro. The landscape represents the Tuscan hills around Borgo San Sepolcro, reflecting early Renaissance humanism grounding biblical events in contemporary homeland scenery.",
    notableFact: "Piero was also an acclaimed mathematician who authored three groundbreaking treatises on solid geometry and perspective."
  },

  // 62. Rogier van der Weyden - The Descent from the Cross
  {
    id: "descent-from-cross",
    title: "The Descent from the Cross",
    originalTitle: "De Kruisafneming",
    year: "c. 1435",
    era: "Northern Renaissance",
    medium: "Oil on oak panel",
    dimensions: "220 cm × 262 cm",
    location: "Museo del Prado, Madrid, Spain",
    image: getPaintingUrl("Rogier_van_der_Weyden_-_The_Descent_from_the_Cross_-_Prado.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Rogier_van_der_Weyden_-_The_Descent_from_the_Cross_-_Prado.jpg",
    artist: {
      name: "Rogier van der Weyden",
      lifespan: "c. 1399 – 1464",
      nationality: "Flemish",
      movement: "Early Netherlandish",
      portrait: getArtistUrl("Rogier_van_der_Weyden_Self_Portrait.jpg", 640),
      bio: "Netherlandish master celebrated for heart-wrenching emotional pathos, sculptural drapery, and religious drama."
    },
    story: "Christ is lowered from the cross into a compressed, shallow gilded box like a sculpted altarpiece. The Virgin Mary collapses in an identical posture of agony below Him, physically mirroring His sacrificial posture.",
    historicalReferences: "Commissioned by the Crossbowmen's Guild of Leuven (evident in tiny crossbows carved into the traceries). Habsburg Queen Mary of Hungary later acquired it before King Philip II brought it to Spain.",
    notableFact: "Van der Weyden painted transparent crystal tears running down the cheeks of the mourners with optical precision unmatched in 15th-century Europe."
  },

  // 63. Antonello da Messina - Saint Jerome in His Study
  {
    id: "saint-jerome-study",
    title: "Saint Jerome in His Study",
    originalTitle: "San Girolamo nello studio",
    year: "c. 1475",
    era: "Early Renaissance",
    medium: "Oil on lime panel",
    dimensions: "45.7 cm × 36.2 cm",
    location: "National Gallery, London, United Kingdom",
    image: getPaintingUrl("Antonello_da_Messina_-_Saint_Jerome_in_His_Study_-_Google_Art_Project.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Antonello_da_Messina_-_Saint_Jerome_in_His_Study_-_Google_Art_Project.jpg",
    artist: {
      name: "Antonello da Messina",
      lifespan: "c. 1430 – 1479",
      nationality: "Italian (Sicilian)",
      movement: "Early Renaissance",
      portrait: getArtistUrl("Antonello_da_Messina_017.jpg", 640),
      bio: "Sicilian painter who introduced Flemish oil painting techniques and microscopic light rendering to Venice and Renaissance Italy."
    },
    story: "Saint Jerome sits reading in his timber desk structure set inside a soaring Gothic stone hall, accompanied by his faithful lion prowling in the shadow and birds perched on a stone portal.",
    historicalReferences: "Exemplifies the crucial transmission of Northern Netherlandish oil glazes to Italian artists. Antonello observed Flemish paintings in Naples before visiting Venice, where his technique revolutionized Venetian masters like Giovanni Bellini.",
    notableFact: "The peacock on the stone ledge symbolizes immortality, while the partridge represents truth recognizing the voice of God."
  },

  // 64. Giotto - The Kiss of Judas
  {
    id: "kiss-of-judas",
    title: "The Kiss of Judas (The Arrest of Christ)",
    originalTitle: "Bacio di Giuda",
    year: "c. 1305",
    era: "Proto-Renaissance",
    medium: "Fresco",
    dimensions: "200 cm × 185 cm",
    location: "Scrovegni Chapel, Padua, Italy",
    image: getPaintingUrl("Giotto_-_Scrovegni_-_31_-_Kiss_of_Judas.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/7/77/Giotto_-_Scrovegni_-_31_-_Kiss_of_Judas.jpg",
    artist: {
      name: "Giotto di Bondone",
      lifespan: "c. 1267 – 1337",
      nationality: "Italian (Florentine)",
      movement: "Proto-Renaissance",
      portrait: getArtistUrl("Giotto_portrait.jpg", 640),
      bio: "The forefather of the Renaissance who broke free from flat Byzantine icons by introducing natural human emotion, physical weight, and space."
    },
    story: "Judas envelops Christ in his billowy yellow cloak to betray Him with a kiss. Their eyes lock in intense psychological combat—Judas's bestial brow contrasting Christ's serene, noble sorrow amidst raised torches and spears.",
    historicalReferences: "Commissioned by Enrico Scrovegni to atone for his family's sins of usury. Giotto's dramatic naturalism laid the foundation that ignited the Italian Renaissance a century later.",
    notableFact: "Dante Alighieri celebrated Giotto in the Divine Comedy, writing that Giotto had surpassed Cimabue and held the field in painting."
  },

  // 65. Fra Angelico - The Annunciation
  {
    id: "fra-angelico-annunciation",
    title: "The Annunciation",
    originalTitle: "Annunciazione",
    year: "c. 1440 – 1445",
    era: "Early Renaissance",
    medium: "Fresco",
    dimensions: "230 cm × 321 cm",
    location: "Convent of San Marco, Florence, Italy",
    image: getPaintingUrl("Fra_Angelico_-_The_Annunciation_(San_Marco).jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Fra_Angelico_-_The_Annunciation_%28San_Marco%29.jpg",
    artist: {
      name: "Fra Angelico (Guido di Pietro)",
      lifespan: "c. 1395 – 1455",
      nationality: "Italian (Florentine)",
      movement: "Early Renaissance",
      portrait: getArtistUrl("Fra_Angelico_-_Self-Portrait_detail_from_Orvieto_Cathedral.jpg", 640),
      bio: "Dominican friar and master painter whose devout frescoes blended Gothic spiritual purity with pioneering Renaissance linear perspective."
    },
    story: "The Archangel Gabriel with rainbow wings kneels before the Virgin Mary inside an open Renaissance loggia looking out onto a cloistered enclosed garden (hortus conclusus) symbolizing virginity.",
    historicalReferences: "Painted at the top of the dormitory staircase in the newly reconstructed San Marco convent, financed by Cosimo de' Medici. Monks greeted the image daily as they entered their cells for prayer.",
    notableFact: "Inscribed at the base: 'When you pass before the figure of the intact Virgin, beware lest you omit to say an Ave.'"
  },

  // 66. Giorgione - The Tempest
  {
    id: "giorgione-tempest",
    title: "The Tempest",
    originalTitle: "La Tempesta",
    year: "c. 1506 – 1508",
    era: "High Renaissance (Venetian)",
    medium: "Oil on canvas",
    dimensions: "83 cm × 73 cm",
    location: "Gallerie dell'Accademia, Venice, Italy",
    image: getPaintingUrl("Giorgione_-_La_Tempesta.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Giorgione_-_La_Tempesta.jpg",
    artist: {
      name: "Giorgione (Giorgio Barbarelli)",
      lifespan: "c. 1477 – 1510",
      nationality: "Italian (Venetian)",
      movement: "Venetian Renaissance",
      portrait: getArtistUrl("Giorgione_-_Self-Portrait_as_David.jpg", 640),
      bio: "Poetic Venetian innovator whose enigmatic mood pieces and atmospheric landscape integration founded modern landscape painting."
    },
    story: "A young soldier leans on a staff gazing toward a nursing mother on the bank of a brook, while lightning flashes across dark storm clouds over a distant Renaissance town.",
    historicalReferences: "Often cited by art historians as the first painting in Western art where landscape and atmospheric mood take precedence over a specific literary or biblical narrative.",
    notableFact: "X-rays revealed that where the soldier stands, Giorgione originally painted another nude woman bathing in the stream before altering his concept."
  },

  // 67. Parmigianino - Madonna with the Long Neck
  {
    id: "madonna-long-neck",
    title: "Madonna with the Long Neck",
    originalTitle: "Madonna dal collo lungo",
    year: "1534 – 1540",
    era: "Mannerism",
    medium: "Oil on wood panel",
    dimensions: "216 cm × 132 cm",
    location: "Uffizi Gallery, Florence, Italy",
    image: getPaintingUrl("Parmigianino_-_Madonna_dal_collo_lungo_-_Google_Art_Project.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Parmigianino_-_Madonna_dal_collo_lungo_-_Google_Art_Project.jpg",
    artist: {
      name: "Parmigianino (Girolamo Francesco Maria Mazzola)",
      lifespan: "1503 – 1540",
      nationality: "Italian",
      movement: "Mannerism",
      portrait: getArtistUrl("Parmigianino_Selfportrait.jpg", 640),
      bio: "Leading master of Mannerism famous for graceful elongation of the human body, enigmatic elegance, and alchemy."
    },
    story: "The Virgin Mary is depicted with an extraordinarily elongated neck and tapering fingers, holding an unnaturally large sleeping Christ Child whose sprawling posture foreshadows His Pietà death.",
    historicalReferences: "Commissioned for the funeral chapel of Elena Baiardi in Parma. The swan-like neck was inspired by medieval hymns comparing Mary's neck to an ivory tower or marble column (turris eburnea).",
    notableFact: "Left unfinished when Parmigianino died young at 37; a colonnade without capitals and an enigmatic tiny prophet holding a scroll remain in the background."
  },

  // 68. Tintoretto - The Origin of the Milky Way
  {
    id: "tintoretto-milky-way",
    title: "The Origin of the Milky Way",
    originalTitle: "Origine della Via Lattea",
    year: "c. 1575",
    era: "Late Renaissance (Venetian)",
    medium: "Oil on canvas",
    dimensions: "149.4 cm × 168 cm",
    location: "National Gallery, London, United Kingdom",
    image: getPaintingUrl("The_Origin_of_the_Milky_Way_by_Tintoretto.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/3/30/The_Origin_of_the_Milky_Way_by_Tintoretto.jpg",
    artist: {
      name: "Tintoretto (Jacopo Robusti)",
      lifespan: "1518 – 1594",
      nationality: "Italian (Venetian)",
      movement: "Venetian Renaissance / Mannerism",
      portrait: getArtistUrl("Tintoretto_Self-Portrait.jpg", 640),
      bio: "Fierce Venetian painter called 'Il Furioso' for his kinetic speed, theatrical flying perspectives, and dramatic lighting."
    },
    story: "Jupiter thrusts the infant Hercules to the breast of the sleeping goddess Juno to grant him immortality. Spilled drops of divine milk shooting upward into the heavens transform into stars, creating the Milky Way.",
    historicalReferences: "Commissioned by Holy Roman Emperor Rudolf II for Prague Castle. Based on a classical myth popularized in the 10th-century Byzantine Geoponica agricultural encyclopedia.",
    notableFact: "The bottom third of the canvas was cut off in the 18th century; originally, drops of milk falling downward grew into blooming white lilies on Earth."
  },

  // 69. Paolo Veronese - The Wedding at Cana
  {
    id: "wedding-cana",
    title: "The Wedding at Cana",
    originalTitle: "Le Nozze di Cana",
    year: "1562 – 1563",
    era: "High Renaissance (Venetian)",
    medium: "Oil on canvas",
    dimensions: "677 cm × 994 cm",
    location: "Musée du Louvre, Paris, France",
    image: getPaintingUrl("Noces_de_Cana_Veronese_Louvre_INV_142.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Noces_de_Cana_Veronese_Louvre_INV_142.jpg",
    artist: {
      name: "Paolo Veronese",
      lifespan: "1528 – 1588",
      nationality: "Italian (Venetian)",
      movement: "Venetian Renaissance",
      portrait: getArtistUrl("Paolo_Veronese_self-portrait.jpg", 640),
      bio: "Venetian master celebrated for monumental architectural pageants, opulent fabrics, and theatrical celebrations."
    },
    story: "Christ performs His first miracle of turning water into wine during an opulent Venetian banquet filled with over 130 guests in lavish silks, dwarfs, jesters, musicians, and hunting hounds.",
    historicalReferences: "Commissioned for the Benedictine refectory of the monastery of San Giorgio Maggiore in Venice. Plundered by Napoleon's army in 1797 and transported to Paris, it remains the largest canvas in the Louvre.",
    notableFact: "The musicians playing in the center are portraits of the greatest painters in Venice: Veronese himself on viola da braccio, Titian on bass viol, Tintoretto on viola, and Bassano on flute."
  },

  // 70. Peter Paul Rubens - The Elevation of the Cross
  {
    id: "elevation-cross",
    title: "The Elevation of the Cross",
    originalTitle: "De kruisoprichting",
    year: "1610 – 1611",
    era: "Flemish Baroque",
    medium: "Oil on wood panel (Triptych)",
    dimensions: "462 cm × 341 cm",
    location: "Cathedral of Our Lady, Antwerp, Belgium",
    image: getPaintingUrl("Rubens_elevation_cross.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Rubens_elevation_cross.jpg",
    artist: {
      name: "Peter Paul Rubens",
      lifespan: "1577 – 1640",
      nationality: "Flemish",
      movement: "Flemish Baroque",
      portrait: getArtistUrl("Peter_Paul_Rubens_-_Self-Portrait_-_Google_Art_Project.jpg", 640),
      bio: "Prince of Baroque painters and international diplomat who brought muscular energy, emotional dynamism, and rich color to Catholic Europe."
    },
    story: "Nine muscular soldiers strain with immense physical force along a sweeping diagonal axis to hoist Christ's cross upright, showcasing Rubens's supreme command of dynamic motion.",
    historicalReferences: "Painted upon Rubens's triumphant return from an eight-year stay in Italy, fusing Michelangelo's muscular heroic figures with Caravaggio's dramatic chiaroscuro for the Counter-Reformation in Flanders.",
    notableFact: "Rubens incorporated his own loyal spaniel dog barking in the lower left corner of the main panel."
  },

  // 71. Anthony van Dyck - Charles I at the Hunt
  {
    id: "charles-i-hunt",
    title: "Charles I at the Hunt",
    originalTitle: "Le Roi à la chasse",
    year: "c. 1635",
    era: "Baroque",
    medium: "Oil on canvas",
    dimensions: "266 cm × 207 cm",
    location: "Musée du Louvre, Paris, France",
    image: getPaintingUrl("Anthony_van_Dyck_-_Charles_I_at_the_Hunt_-_Google_Art_Project.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/9/90/Anthony_van_Dyck_-_Charles_I_at_the_Hunt_-_Google_Art_Project.jpg",
    artist: {
      name: "Anthony van Dyck",
      lifespan: "1599 – 1641",
      nationality: "Flemish",
      movement: "Baroque",
      portrait: getArtistUrl("Anthony_van_Dyck_-_Self-portrait_(Hermitage).jpg", 640),
      bio: "Preeminent court painter to King Charles I who defined the elegance, refined poise, and aristocratic dignity of British portraiture."
    },
    story: "King Charles I of England dismounts during a hunt, resting a hand nonchalantly on his walking cane with sovereign nonchalance (sprezzatura) while his attendant grooms an impatient charger.",
    historicalReferences: "Charles I was notably short (around 5 feet 4 inches). Van Dyck cleverly positioned him on an elevated riverbank looking downward while the horse bows its head, ensuring the king appeared tall and effortlessly authoritative.",
    notableFact: "Acquired by King Louis XVI of France in 1775 from Madame du Barry, the mistress of Louis XV."
  },

  // 72. Georges de La Tour - The Penitent Magdalene
  {
    id: "penitent-magdalene",
    title: "The Penitent Magdalene",
    originalTitle: "La Madeleine à la veilleuse",
    year: "c. 1640",
    era: "French Baroque",
    medium: "Oil on canvas",
    dimensions: "128 cm × 94 cm",
    location: "Musée du Louvre, Paris, France",
    image: getPaintingUrl("Georges_de_La_Tour_-_Magdalene_with_the_Smoking_Flame.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Georges_de_La_Tour_-_Magdalene_with_the_Smoking_Flame.jpg",
    artist: {
      name: "Georges de La Tour",
      lifespan: "1593 – 1652",
      nationality: "French",
      movement: "French Baroque (Caravaggisti)",
      portrait: getArtistUrl("Georges_de_La_Tour_detail.jpg", 640),
      bio: "Master of candlelit nocturnal scenes whose solemn geometric calm and spiritual stillness elevated French Baroque art."
    },
    story: "Mary Magdalene sits in contemplative silence, her hands resting on a human skull upon her lap while staring fixedly into the flickering flame of an oil lamp, meditating upon the transience of mortal life.",
    historicalReferences: "Produced in the Duchy of Lorraine during the devastating Thirty Years' War, capturing Catholic Counter-Reformation themes of spiritual repentance and vanitas.",
    notableFact: "La Tour was virtually forgotten for nearly two centuries until art historian Hermann Voss rediscovered his genius in 1915."
  },

  // 73. Nicolas Poussin - Et in Arcadia ego
  {
    id: "et-in-arcadia-ego",
    title: "Et in Arcadia ego",
    originalTitle: "Les Bergers d'Arcadie",
    year: "1637 – 1638",
    era: "French Classicism",
    medium: "Oil on canvas",
    dimensions: "85 cm × 121 cm",
    location: "Musée du Louvre, Paris, France",
    image: getPaintingUrl("Nicolas_Poussin_-_Et_in_Arcadia_ego_(deuxi%C3%A8me_version).jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Nicolas_Poussin_-_Et_in_Arcadia_ego_%28deuxi%C3%A8me_version%29.jpg",
    artist: {
      name: "Nicolas Poussin",
      lifespan: "1594 – 1665",
      nationality: "French",
      movement: "Classicism",
      portrait: getArtistUrl("Nicolas_Poussin_001.jpg", 640),
      bio: "Foremost painter of the French classical tradition who prioritized intellectual clarity, logic, and harmony over emotion."
    },
    story: "Three idealized shepherds in the idyllic pastoral paradise of Arcadia stumble upon a stone tomb, tracing the solemn carved inscription: 'Et in Arcadia ego'—meaning 'Even in Arcadia, there am I (Death).'",
    historicalReferences: "Commissioned by Cardinal Giulio Rospigliosi (later Pope Clement IX). It embodies the philosophical summit of French Neoclassical stoicism, acknowledging that death is an inescapable reality even in the most serene paradise.",
    notableFact: "Louis XIV acquired the painting and kept it hidden in his private chambers at Versailles, allowing only favored courtiers to behold it."
  },

  // 74. Claude Lorrain - Seaport with the Embarkation
  {
    id: "claude-embarkation-sheba",
    title: "Seaport with the Embarkation of the Queen of Sheba",
    originalTitle: "Port de mer avec l'embarquement de la reine de Saba",
    year: "1648",
    era: "French Classicism",
    medium: "Oil on canvas",
    dimensions: "149.1 cm × 196.7 cm",
    location: "National Gallery, London, United Kingdom",
    image: getPaintingUrl("Claude_Lorrain_-_Embarkation_of_the_Queen_of_Sheba.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Claude_Lorrain_-_Embarkation_of_the_Queen_of_Sheba.jpg",
    artist: {
      name: "Claude Lorrain",
      lifespan: "c. 1600 – 1682",
      nationality: "French",
      movement: "Classicism",
      portrait: getArtistUrl("Claude_Gell%C3%A9e_called_Le_Lorrain.jpg", 640),
      bio: "Master of idealized classical seaports and golden atmospheric sunrise lighting across Rome's Campagna."
    },
    story: "The biblical Queen of Sheba prepares to depart by boat to visit King Solomon in Jerusalem, departing from an idealized classical Mediterranean harbor as the early morning sun casts golden beams across rippling water.",
    historicalReferences: "Commissioned by the French Duke de Bouillon, general of the Papal Army. Claude's luminous golden light directly inspired British landscape painter J.M.W. Turner, who requested in his will that his own paintings hang next to Claude's in London.",
    notableFact: "Claude created a detailed sketchbook (Liber Veritatis) recording all 195 of his finished works to protect against fraudulent forgers copying his style."
  },

  // 75. Antoine Watteau - The Embarkation for Cythera
  {
    id: "watteau-cythera",
    title: "The Embarkation for Cythera",
    originalTitle: "Pèlerinage à l'île de Cythère",
    year: "1717",
    era: "Rococo (Fête Galante)",
    medium: "Oil on canvas",
    dimensions: "129 cm × 194 cm",
    location: "Musée du Louvre, Paris, France",
    image: getPaintingUrl("Antoine_Watteau_-_P%C3%A8lerinage_%C3%A0_l%27%C3%AEle_de_Cyth%C3%A8re.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Antoine_Watteau_-_P%C3%A8lerinage_%C3%A0_l%27%C3%AEle_de_Cyth%C3%A8re.jpg",
    artist: {
      name: "Jean-Antoine Watteau",
      lifespan: "1684 – 1721",
      nationality: "French",
      movement: "Rococo",
      portrait: getArtistUrl("Watteau_Self-portrait.jpg", 640),
      bio: "Originator of the French Rococo 'fête galante' genre, depicting aristocratic courtship in shimmering parklands tinged with melancholy."
    },
    story: "Aristocratic couples in iridescent silk gowns prepare to depart the mythological Mediterranean island of Cythera, the sacred birthplace of Venus, escorted by fluttering cupids.",
    historicalReferences: "Submitted as Watteau's reception piece to the French Royal Academy of Painting and Sculpture. Because the work defied existing academic categories, the Academy invented an entirely new official genre for him: 'Fête galante'.",
    notableFact: "Art historians still debate whether the couples are embarking on a voyage to Cythera or reluctantly preparing to leave the idyllic island to return to mundane reality."
  },

  // 76. François Boucher - The Triumph of Venus
  {
    id: "boucher-triumph-venus",
    title: "The Triumph of Venus",
    originalTitle: "Le Triomphe de Vénus",
    year: "1740",
    era: "Rococo",
    medium: "Oil on canvas",
    dimensions: "130 cm × 162 cm",
    location: "Nationalmuseum, Stockholm, Sweden",
    image: getPaintingUrl("Fran%C3%A7ois_Boucher_-_The_Triumph_of_Venus_-_Google_Art_Project.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Fran%C3%A7ois_Boucher_-_The_Triumph_of_Venus_-_Google_Art_Project.jpg",
    artist: {
      name: "François Boucher",
      lifespan: "1703 – 1770",
      nationality: "French",
      movement: "Rococo",
      portrait: getArtistUrl("Boucher_-_Gustaf_Lundberg.jpg", 640),
      bio: "Premier painter to King Louis XV and favorite artist of Madame de Pompadour, famous for sensuous pastel mythologies."
    },
    story: "The newborn Venus reclines across a sea dolphin's shell surrounded by frolicking Tritons, water nymphs, and putti unfurling billowing pink silk drapes across a pearlescent sky.",
    historicalReferences: "Purchased in Paris by Swedish Ambassador Count Carl Gustaf Tessin, it perfectly reflects the hedonistic luxury, pastoral sensuality, and carefree spirit of the French court of Louis XV.",
    notableFact: "Boucher was also a master porcelain designer for the Manufacture de Sèvres and decorative designer for the Royal Opera."
  },

  // 77. Canaletto - The Bucintoro Returning to the Molo
  {
    id: "canaletto-bucintoro",
    title: "The Bucintoro Returning to the Molo on Ascension Day",
    originalTitle: "Il ritorno del Bucintoro al molo il giorno dell'Ascensione",
    year: "c. 1732",
    era: "Veduta / Rococo",
    medium: "Oil on canvas",
    dimensions: "77 cm × 126 cm",
    location: "Royal Collection, Windsor Castle, United Kingdom",
    image: getPaintingUrl("Canaletto_-_The_Bucintoro_Returning_to_the_Molo_on_Ascension_Day.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Canaletto_-_The_Bucintoro_Returning_to_the_Molo_on_Ascension_Day.jpg",
    artist: {
      name: "Canaletto (Giovanni Antonio Canal)",
      lifespan: "1697 – 1768",
      nationality: "Italian (Venetian)",
      movement: "Veduta (View Painting)",
      portrait: getArtistUrl("Canaletto_-_Self-portrait.jpg", 640),
      bio: "Venetian master of topographical view paintings whose luminous cityscapes became the ultimate Grand Tour souvenirs for European nobility."
    },
    story: "The golden state barge (Bucintoro) of the Doge of Venice glides back to Saint Mark's pier following the annual 'Marriage of the Sea' ceremony, flanked by dozens of decorated gondolas on turquoise water.",
    historicalReferences: "Commemorates the ancient Ascension Day ritual where the Doge threw a consecrated gold ring into the Adriatic Sea, declaring 'We wed thee, O sea, as a sign of true and perpetual dominion.'",
    notableFact: "Canaletto used a camera obscura to assist his precise architectural drafting, but subtly manipulated perspectives to enhance the panoramic grandeur of Venice's monuments."
  },

  // 78. William Hogarth - The Marriage Settlement
  {
    id: "hogarth-marriage-settlement",
    title: "Marriage A-la-Mode: 1. The Marriage Settlement",
    originalTitle: "Marriage A-la-Mode: The Marriage Settlement",
    year: "1743",
    era: "British Rococo / Satire",
    medium: "Oil on canvas",
    dimensions: "69.9 cm × 90.8 cm",
    location: "National Gallery, London, United Kingdom",
    image: getPaintingUrl("William_Hogarth_-_Marriage_A-la-Mode_1_The_Marriage_Settlement.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/6/65/William_Hogarth_-_Marriage_A-la-Mode_1_The_Marriage_Settlement.jpg",
    artist: {
      name: "William Hogarth",
      lifespan: "1697 – 1764",
      nationality: "British",
      movement: "English School / Satire",
      portrait: getArtistUrl("William_Hogarth_045.jpg", 640),
      bio: "Pioneering British painter, engraver, and satirist who created sequential visual narratives criticizing social hypocrisy and greed."
    },
    story: "Gouty Earl Squanderfield points haughtily to his aristocratic family pedigree tree, bartering his title for the dowry of a wealthy city alderman's daughter, while the bored bride and groom ignore each other.",
    historicalReferences: "The opening canvas of Hogarth's famous six-part moral series 'Marriage A-la-Mode', satirizing the disastrous 18th-century practice of aristocratic arranged marriages contracted for money rather than affection.",
    notableFact: "Two dogs chained together in the lower left corner serve as a biting visual metaphor for the unhappy couple chained into a loveless marriage."
  },

  // 79. Thomas Gainsborough - The Blue Boy
  {
    id: "gainsborough-blue-boy",
    title: "The Blue Boy",
    originalTitle: "The Blue Boy (Jonathan Buttall)",
    year: "c. 1770",
    era: "Georgian / Rococo",
    medium: "Oil on canvas",
    dimensions: "177.8 cm × 112.1 cm",
    location: "The Huntington Library, San Marino, California",
    image: getPaintingUrl("The_Blue_Boy.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/e/e6/The_Blue_Boy.jpg",
    artist: {
      name: "Thomas Gainsborough",
      lifespan: "1727 – 1788",
      nationality: "British",
      movement: "Georgian / English School",
      portrait: getArtistUrl("Thomas_Gainsborough_-_Self-Portrait_-_Google_Art_Project.jpg", 640),
      bio: "Leading portraitist and landscapist of 18th-century Britain, famous for effortless brushwork and brilliant costume fabrics."
    },
    story: "A dashing adolescent boy stands poised in an opulent 17th-century van Dyck-style blue satin doublet and knee breeches, holding a plumed hat against a moody romantic landscape.",
    historicalReferences: "Painted as Gainsborough's tribute to Anthony van Dyck and to refute rival Sir Joshua Reynolds's academic dogma that cool blue should never be the dominant color in a portrait.",
    notableFact: "Purchased in 1921 by American railroad magnate Henry E. Huntington for a record-breaking $728,800, sparking public mourning in the British press over the loss of a national treasure."
  },

  // 80. Élisabeth Vigée Le Brun - Self-Portrait in a Straw Hat
  {
    id: "vigee-le-brun-straw-hat",
    title: "Self-Portrait in a Straw Hat",
    originalTitle: "Autoportrait au chapeau de paille",
    year: "1782",
    era: "Rococo / Neoclassicism",
    medium: "Oil on canvas",
    dimensions: "97.8 cm × 70.5 cm",
    location: "National Gallery, London, United Kingdom",
    image: getPaintingUrl("Elisabeth_Vigee_Le_Brun_-_Self-Portrait_in_a_Straw_Hat.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Elisabeth_Vigee_Le_Brun_-_Self-Portrait_in_a_Straw_Hat.jpg",
    artist: {
      name: "Élisabeth Vigée Le Brun",
      lifespan: "1755 – 1842",
      nationality: "French",
      movement: "Rococo / Neoclassicism",
      portrait: getArtistUrl("Elisabeth_Vigee_Le_Brun_-_Self-Portrait_in_a_Straw_Hat.jpg", 640),
      bio: "Official portraitist to Queen Marie Antoinette and one of the most celebrated and prolific female portrait masters in European history."
    },
    story: "The 27-year-old artist portrays herself outdoors bathed in natural sunlight, wearing a casual straw hat decorated with wild flowers and holding her palette and brushes with radiant charm.",
    historicalReferences: "Painted in Antwerp after seeing Peter Paul Rubens's portrait of Susanna Lunden (Le Chapeau de Paille). It demonstrated that a female artist could combine high professional dignity with natural beauty and elegance.",
    notableFact: "Admitted into the French Royal Academy of Painting and Sculpture in 1783 through the personal intervention of Queen Marie Antoinette."
  },

  // 81. Jacques-Louis David - The Oath of the Horatii
  {
    id: "oath-of-horatii",
    title: "The Oath of the Horatii",
    originalTitle: "Le Serment des Horaces",
    year: "1784",
    era: "Neoclassicism",
    medium: "Oil on canvas",
    dimensions: "329.8 cm × 424.8 cm",
    location: "Musée du Louvre, Paris, France",
    image: getPaintingUrl("Jacques-Louis_David_-_The_Oath_of_the_Horatii_-_Google_Art_Project.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/3/35/Jacques-Louis_David_-_The_Oath_of_the_Horatii_-_Google_Art_Project.jpg",
    artist: {
      name: "Jacques-Louis David",
      lifespan: "1748 – 1825",
      nationality: "French",
      movement: "Neoclassicism",
      portrait: getArtistUrl("Jacques-Louis_David_-_Self-Portrait_-_Google_Art_Project.jpg", 640),
      bio: "Champion of Neoclassical rigor whose stark patriotic canvases sounded the death knell of frivolous Rococo art."
    },
    story: "Three Roman brothers swear an uncompromising oath on their swords held aloft by their father to fight to the death against Alba Longa, contrasting with the weeping women collapsed in grief on the right.",
    historicalReferences: "Commissioned for King Louis XVI, but instantly embraced by the French public as an electric manifesto of civic duty, self-sacrifice, and republican patriotism leading up to the 1789 French Revolution.",
    notableFact: "David painted the canvas in Rome, taking inspiration from classical Roman statues, relief sarcophagi, and the severe geometry of Doric columns."
  },

  // 82. Ingres - La Grande Odalisque
  {
    id: "grande-odalisque",
    title: "La Grande Odalisque",
    originalTitle: "Une Odalisque",
    year: "1814",
    era: "Neoclassicism / Orientalism",
    medium: "Oil on canvas",
    dimensions: "91 cm × 162 cm",
    location: "Musée du Louvre, Paris, France",
    image: getPaintingUrl("Jean-Auguste-Dominique_Ingres_-_Une_Odalisque%2C_dite_La_Grande_Odalisque.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/8/87/Jean-Auguste-Dominique_Ingres_-_Une_Odalisque%2C_dite_La_Grande_Odalisque.jpg",
    artist: {
      name: "Jean-Auguste-Dominique Ingres",
      lifespan: "1780 – 1867",
      nationality: "French",
      movement: "Neoclassicism",
      portrait: getArtistUrl("Ingres_Self_Portrait_1804.jpg", 640),
      bio: "High priest of pure linear draftsmanship whose sensual distortions paved the way toward modern abstraction."
    },
    story: "A concubine in an Ottoman sultan's harem turns her back toward the viewer, reclining on blue damask with a peacock feather fan, hookah pipe, and turban.",
    historicalReferences: "Commissioned by Napoleon's sister Caroline Murat, Queen of Naples. Ingres defied anatomical correctness, adding two or three extra vertebrae to elongate her spine into an exquisite serpentine curve.",
    notableFact: "Contemporary critics mocked the anatomical liberties, with one reviewer writing that she had 'three vertebrae too many.'"
  },

  // 83. Caspar David Friedrich - The Sea of Ice
  {
    id: "sea-of-ice",
    title: "The Sea of Ice (The Wreck of Hope)",
    originalTitle: "Das Eismeer (Die gescheiterte Hoffnung)",
    year: "1823 – 1824",
    era: "Romanticism",
    medium: "Oil on canvas",
    dimensions: "96.7 cm × 126.9 cm",
    location: "Hamburger Kunsthalle, Hamburg, Germany",
    image: getPaintingUrl("Das_Eismeer_-_Caspar_David_Friedrich.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Caspar_David_Friedrich_-_Das_Eismeer_-_Hamburger_Kunsthalle.jpg",
    artist: {
      name: "Caspar David Friedrich",
      lifespan: "1774 – 1840",
      nationality: "German",
      movement: "Romanticism",
      portrait: getArtistUrl("Caspar_David_Friedrich_by_Gerhard_von_K%C3%BCgelgen.jpg", 640),
      bio: "Master of melancholic sublime landscapes exploring the indomitable power of nature over fragile human endeavors."
    },
    story: "Towering, sharp slabs of pale green and ochre arctic ice crush and bury the wooden stern of an exploration sailing ship, rendering human ambition utterly insignificant against silent frozen nature.",
    historicalReferences: "Inspired by William Edward Parry's 1819–1820 British polar expedition in search of the Northwest Passage. Friedrich made direct oil studies of ice floes breaking up on the River Elbe near Dresden.",
    notableFact: "The painting remained unsold during Friedrich's lifetime because contemporary audiences found its crushing lack of human warmth too radical."
  },

  // 84. J.M.W. Turner - Rain, Steam and Speed
  {
    id: "rain-steam-speed",
    title: "Rain, Steam and Speed – The Great Western Railway",
    originalTitle: "Rain, Steam, and Speed – The Great Western Railway",
    year: "1844",
    era: "Romanticism",
    medium: "Oil on canvas",
    dimensions: "91 cm × 121.8 cm",
    location: "National Gallery, London, United Kingdom",
    image: getPaintingUrl("Rain_Steam_and_Speed_the_Great_Western_Railway.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/7/77/Rain_Steam_and_Speed_the_Great_Western_Railway.jpg",
    artist: {
      name: "J.M.W. Turner",
      lifespan: "1775 – 1851",
      nationality: "British",
      movement: "Romanticism",
      portrait: getArtistUrl("Joseph_Mallord_William_Turner_self-portrait.jpg", 640),
      bio: "Pioneering visionary whose swirling atmospheric vortexes of light and speed anticipated modern Impressionism and abstraction."
    },
    story: "A modern steam locomotive hurtles across the Maidenhead Railway Bridge over the River Thames during a blinding rainstorm, dissolving land and sky into a shimmering golden-grey optical vortex.",
    historicalReferences: "Celebrates the Industrial Revolution and engineer Isambard Kingdom Brunel's groundbreaking Great Western Railway, contrasting mechanical velocity against pastoral nature.",
    notableFact: "A tiny hare is visible sprinting along the tracks in front of the train, symbolizing natural animal speed challenged by man-made locomotive power."
  },

  // 85. William Blake - The Ancient of Days
  {
    id: "ancient-of-days",
    title: "The Ancient of Days",
    originalTitle: "The Ancient of Days",
    year: "1794",
    era: "Romanticism / Symbolism",
    medium: "Relief etching with watercolor",
    dimensions: "23.3 cm × 16.8 cm",
    location: "British Museum, London, United Kingdom",
    image: getPaintingUrl("William_Blake_-_The_Ancient_of_Days_-_Google_Art_Project.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/3/36/William_Blake_-_The_Ancient_of_Days_-_Google_Art_Project.jpg",
    artist: {
      name: "William Blake",
      lifespan: "1757 – 1827",
      nationality: "British",
      movement: "Romanticism",
      portrait: getArtistUrl("William_Blake_by_Thomas_Phillips.jpg", 640),
      bio: "Visionary English poet, painter, and printmaker who rejected Enlightenment materialism in favor of mystical imagination."
    },
    story: "Urizen, the embodiment of cold reason and law in Blake's personal mythology, leans down from a fiery celestial disc to measure the universe with a golden geometrical compass.",
    historicalReferences: "The frontispiece to Blake's illuminated book Europe a Prophecy. It critiqued Newtonian rationalism and the Enlightenment for attempting to constrain the human soul with mechanical formulas.",
    notableFact: "Blake personally hand-colored each individual print; on his deathbed in 1827, he colored a final copy for friend George Cumberland."
  },

  // 86. Thomas Cole - The Oxbow
  {
    id: "the-oxbow",
    title: "The Oxbow",
    originalTitle: "View from Mount Holyoke, Northampton, Massachusetts, after a Thunderstorm",
    year: "1836",
    era: "Hudson River School / Romanticism",
    medium: "Oil on canvas",
    dimensions: "130.8 cm × 193 cm",
    location: "Metropolitan Museum of Art, New York City",
    image: getPaintingUrl("Cole_Thomas_The_Oxbow_(The_Connecticut_River_near_Northampton_1836).jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Cole_Thomas_The_Oxbow_%28The_Connecticut_River_near_Northampton_1836%29.jpg",
    artist: {
      name: "Thomas Cole",
      lifespan: "1801 – 1848",
      nationality: "American (English-born)",
      movement: "Hudson River School",
      portrait: getArtistUrl("Thomas_Cole_by_Asher_Brown_Durand.jpg", 640),
      bio: "Founder of the Hudson River School who celebrated the spiritual majesty and moral dilemmas of the untamed American wilderness."
    },
    story: "A dramatic panorama split diagonally between wild, untamed wilderness ravaged by a thunderstorm on the left and serene, cultivated pastoral farmland along the oxbow bend of the Connecticut River on the right.",
    historicalReferences: "Contemplates America's westward expansion and Manifest Destiny, questioning whether rapid industrialization and clearing of primal forests would destroy the divine natural heritage of the continent.",
    notableFact: "Cole painted himself tiny in the center foreground, perched on a rocky ledge in a broad-brimmed hat with his easel and parasol."
  },

  // 87. Katsushika Hokusai - Red Fuji
  {
    id: "red-fuji",
    title: "Fine Wind, Clear Morning (Red Fuji)",
    originalTitle: "Gaifū kaisei (凱風快晴)",
    year: "c. 1830 – 1832",
    era: "Edo Period (Ukiyo-e)",
    medium: "Color woodblock print",
    dimensions: "25.7 cm × 38 cm",
    location: "Metropolitan Museum of Art, New York City",
    image: getPaintingUrl("Red_Fuji_southern_wind_clear_morning.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Red_Fuji_southern_wind_clear_morning.jpg",
    artist: {
      name: "Katsushika Hokusai",
      lifespan: "1760 – 1849",
      nationality: "Japanese",
      movement: "Ukiyo-e",
      portrait: getArtistUrl("Hokusai_selfportrait.jpg", 640),
      bio: "Japanese printmaking master whose Thirty-Six Views of Mount Fuji elevated nature landscapes to universal spiritual symbols."
    },
    story: "In early autumn at dawn, a southerly wind clears the sky as rising sunlight bathes the slopes of Mount Fuji in a brilliant, fiery crimson glow against wispy cirrus clouds and dark sea of pine trees.",
    historicalReferences: "A rare phenomenon known as 'Aka-Fuji' (Red Fuji), revered in Shinto and Japanese folklore as an auspicious omen of extraordinary good fortune and spiritual purification.",
    notableFact: "The print requires seven separate woodblocks aligned with micron-level precision to produce the delicate color gradations (bokashi)."
  },

  // 88. Utagawa Hiroshige - Sudden Shower over Shin-Ōhashi
  {
    id: "hiroshige-sudden-shower",
    title: "Sudden Shower over Shin-Ōhashi Bridge and Atake",
    originalTitle: "Ōhashi Atake no yūdachi (大はしあたけの夕立)",
    year: "1857",
    era: "Edo Period (Ukiyo-e)",
    medium: "Color woodblock print",
    dimensions: "36.8 cm × 24.1 cm",
    location: "Brooklyn Museum, New York City",
    image: getPaintingUrl("Hiroshige_Atake_take_no_yabu_1857.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/7/70/Hiroshige_Atake_take_no_yabu_1857.jpg",
    artist: {
      name: "Utagawa Hiroshige",
      lifespan: "1797 – 1858",
      nationality: "Japanese",
      movement: "Ukiyo-e",
      portrait: getArtistUrl("Utagawa_Hiroshige_portrait.jpg", 640),
      bio: "Master of poetic Japanese landscape prints, weather atmospheres, and everyday Edo human journeys."
    },
    story: "Pedestrians scurry across the wooden bridge over the Sumida River during a sudden torrential summer thunderstorm, rendered with sharp diagonal black lines slashing through grey rainclouds.",
    historicalReferences: "From the renowned series One Hundred Famous Views of Edo. Vincent van Gogh was so enraptured by Hiroshige's dramatic perspective and rain technique that he painstakingly made an oil painting copy of it in 1887.",
    notableFact: "Hiroshige pioneered the use of vertical hanging scroll proportions (tate-e) for sweeping landscape prints in Japanese art."
  },

  // 89. Gustave Courbet - The Painter's Studio
  {
    id: "courbet-painters-studio",
    title: "The Painter's Studio",
    originalTitle: "L'Atelier du peintre",
    year: "1855",
    era: "Realism",
    medium: "Oil on canvas",
    dimensions: "361 cm × 598 cm",
    location: "Musée d'Orsay, Paris, France",
    image: getPaintingUrl("Gustave_Courbet_-_L%27Atelier_du_peintre.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/0/00/Gustave_Courbet_-_L%27Atelier_du_peintre.jpg",
    artist: {
      name: "Gustave Courbet",
      lifespan: "1819 – 1877",
      nationality: "French",
      movement: "Realism",
      portrait: getArtistUrl("Gustave_Courbet_-_Le_D%C3%A9sesp%C3%A9r%C3%A9_(1843-1845).jpg", 640),
      bio: "Fierce leader of the 19th-century Realist revolution who rejected romantic fantasy to depict real unvarnished life."
    },
    story: "Courbet paints a landscape in his studio flanked on the left by representatives of everyday society (peasants, poachers, priests) and on the right by friends and intellectuals (Charles Baudelaire, Champfleury).",
    historicalReferences: "Subtitled 'A real allegory summing up seven years of my artistic and moral life.' Rejected by the 1855 Paris Exposition Universelle, Courbet erected his own independent 'Pavilion of Realism' nearby, inaugurating the independent artist exhibition.",
    notableFact: "A nude female model stands directly behind Courbet, representing unvarnished Nature and Naked Truth inspiring the realist brush."
  },

  // 90. Gustave Courbet - The Desperate Man
  {
    id: "courbet-desperate-man",
    title: "The Desperate Man",
    originalTitle: "Le Désespéré",
    year: "1843 – 1845",
    era: "Realism / Romanticism",
    medium: "Oil on canvas",
    dimensions: "45 cm × 54 cm",
    location: "Private Collection (BNP Paribas Collection)",
    image: getPaintingUrl("Gustave_Courbet_-_Le_D%C3%A9sesp%C3%A9r%C3%A9_(1843-1845).jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/2/29/Gustave_Courbet_-_Le_D%C3%A9sesp%C3%A9r%C3%A9_%281843-1845%29.jpg",
    artist: {
      name: "Gustave Courbet",
      lifespan: "1819 – 1877",
      nationality: "French",
      movement: "Realism",
      portrait: getArtistUrl("Gustave_Courbet_-_Le_D%C3%A9sesp%C3%A9r%C3%A9_(1843-1845).jpg", 640),
      bio: "French pioneer who boldly declared: 'Show me an angel and I will paint one,' insisting on painting only what the eye can see."
    },
    story: "A dramatic close-up self-portrait of the young artist tearing at his hair with wide, wild eyes staring directly into the viewer's soul in an electrifying moment of existential crisis and creative fever.",
    historicalReferences: "Painted during Courbet's early bohemian struggles in Paris, showing the influence of Rembrandt's psychological self-portraits before Courbet formulated his rigorous Realist manifesto.",
    notableFact: "Courbet kept this canvas beside him his entire life; during his exile in Switzerland, he refused all offers to sell it."
  },

  // 91. Jean-François Millet - The Gleaners
  {
    id: "millet-the-gleaners",
    title: "The Gleaners",
    originalTitle: "Des glaneuses",
    year: "1857",
    era: "Realism",
    medium: "Oil on canvas",
    dimensions: "83.5 cm × 110 cm",
    location: "Musée d'Orsay, Paris, France",
    image: getPaintingUrl("Jean-Fran%C3%A7ois_Millet_-_Des_glaneuses.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Jean-Fran%C3%A7ois_Millet_-_Des_glaneuses.jpg",
    artist: {
      name: "Jean-François Millet",
      lifespan: "1814 – 1875",
      nationality: "French",
      movement: "Realism / Barbizon School",
      portrait: getArtistUrl("Jean-Fran%C3%A7ois_Millet_portrait.jpg", 640),
      bio: "Co-founder of the Barbizon School celebrated for honoring the dignity and arduous physical labor of rural peasant life."
    },
    story: "Three impoverished peasant women stoop low over a stubbled wheat field to collect discarded stalks of grain left behind after the harvest, under the distant watchful eye of a landlord's supervisor on horseback.",
    historicalReferences: "Gleaning was an ancient biblical right permitted to the poorest rural women. When shown at the 1857 Salon, conservative Parisian critics denounced it as a dangerous socialistic reminder of peasant poverty following the 1848 revolutions.",
    notableFact: "Vincent van Gogh idolized Millet, creating dozens of painted studies based directly on Millet's peasant compositions."
  },

  // 92. Jean-François Millet - The Angelus
  {
    id: "millet-the-angelus",
    title: "The Angelus",
    originalTitle: "L'Angélus",
    year: "1857 – 1859",
    era: "Realism",
    medium: "Oil on canvas",
    dimensions: "55.5 cm × 66 cm",
    location: "Musée d'Orsay, Paris, France",
    image: getPaintingUrl("Jean-Fran%C3%A7ois_Millet_-_L%27Ang%C3%A9lus.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/3/30/Jean-Fran%C3%A7ois_Millet_-_L%27Ang%C3%A9lus.jpg",
    artist: {
      name: "Jean-François Millet",
      lifespan: "1814 – 1875",
      nationality: "French",
      movement: "Realism",
      portrait: getArtistUrl("Jean-Fran%C3%A7ois_Millet_portrait.jpg", 640),
      bio: "Barbizon master who turned rural labor and everyday peasant devotion into timeless spiritual icons."
    },
    story: "Two peasant farmers bow their heads in silent prayer over a basket of harvested potatoes at twilight, pausing their labor as church bells toll the Angelus prayer from the distant spire of Chailly-en-Bière.",
    historicalReferences: "Millet recalled: 'The Angelus is a picture I painted remembering how, when we worked in the fields, my grandmother would make us stop at the sound of the bell to say the Angelus for the poor departed.'",
    notableFact: "Surrealist Salvador Dalí was so obsessed with this painting that he persuaded the Louvre to X-ray it in 1963, uncovering an initial geometric sketch of an infant's coffin."
  },

  // 93. Édouard Manet - Olympia
  {
    id: "manet-olympia",
    title: "Olympia",
    originalTitle: "Olympia",
    year: "1863",
    era: "Realism / Pre-Impressionism",
    medium: "Oil on canvas",
    dimensions: "130.5 cm × 190 cm",
    location: "Musée d'Orsay, Paris, France",
    image: getPaintingUrl("Edouard_Manet_-_Olympia_-_Google_Art_Project_2.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Edouard_Manet_-_Olympia_-_Google_Art_Project_2.jpg",
    artist: {
      name: "Édouard Manet",
      lifespan: "1832 – 1883",
      nationality: "French",
      movement: "Realism / Impressionism",
      portrait: getArtistUrl("Edouard_Manet_1874.jpg", 640),
      bio: "Iconoclastic pioneer whose unflinching depictions of modern Parisian life shattered academic classical dogma."
    },
    story: "A nude courtesan reclines on white silk sheets looking squarely and coolly at the viewer, attended by a Black maid delivering a bouquet from an admirer and an arched-back black cat at the foot of the bed.",
    historicalReferences: "Based on Titian's Venus of Urbino, but stripped of mythological excuse. Shown at the 1865 Salon, it provoked unprecedented fury; guards with bayonets had to protect the canvas from being attacked with walking sticks.",
    notableFact: "The model was Victorine Meurent, Manet's favorite muse who was also an accomplished painter in her own right."
  },

  // 94. Edgar Degas - The Ballet Class
  {
    id: "degas-ballet-class",
    title: "The Ballet Class",
    originalTitle: "La Classe de danse",
    year: "1871 – 1874",
    era: "Impressionism",
    medium: "Oil on canvas",
    dimensions: "85 cm × 75 cm",
    location: "Musée d'Orsay, Paris, France",
    image: getPaintingUrl("Edgar_Degas_-_La_Classe_de_danse.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Edgar_Degas_-_La_Classe_de_danse.jpg",
    artist: {
      name: "Edgar Degas",
      lifespan: "1834 – 1917",
      nationality: "French",
      movement: "Impressionism",
      portrait: getArtistUrl("Edgar_Degas_self_portrait_1855.jpg", 640),
      bio: "Master draftsman and chronicler of modern Parisian dance, racetrack motion, and candid human gestures."
    },
    story: "Ballet master Jules Perrot leans on his walking stick presiding over exhausted young ballerinas stretching, adjusting ribbons, and scratching their backs in an unposed rehearsal room at the Paris Opera.",
    historicalReferences: "Degas spent years backstage at the Palais Garnier, observing the grueling physical reality of young working-class 'petit rats' training for the corps de ballet, rejecting idealized stage glamour.",
    notableFact: "Degas utilized unconventional cropping influenced by Japanese prints and early photography, cutting off figures at the canvas margins."
  },

  // 95. Edgar Degas - L'Absinthe
  {
    id: "degas-absinthe",
    title: "L'Absinthe (In a Café)",
    originalTitle: "Dans un café",
    year: "1875 – 1876",
    era: "Impressionism",
    medium: "Oil on canvas",
    dimensions: "92 cm × 68 cm",
    location: "Musée d'Orsay, Paris, France",
    image: getPaintingUrl("Edgar_Degas_-_Dans_un_caf%C3%A9.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Edgar_Degas_-_Dans_un_caf%C3%A9.jpg",
    artist: {
      name: "Edgar Degas",
      lifespan: "1834 – 1917",
      nationality: "French",
      movement: "Impressionism",
      portrait: getArtistUrl("Edgar_Degas_self_portrait_1855.jpg", 640),
      bio: "Master of psychological realism and unconventional angles capturing the social alienation of modern city life."
    },
    story: "An actress and an artist sit side by side at a marble café table at the Café de la Nouvelle-Athènes, staring vacantly ahead in alcoholic torpor beside a glowing glass of emerald-green absinthe.",
    historicalReferences: "Depicts the widespread 19th-century social scourge of absinthe addiction among Paris's bohemian and working classes. When exhibited in London in 1893, Victorian critics denounced it as an immoral outrage.",
    notableFact: "Degas had to publicly assure audiences that his models—actress Ellen Andrée and engraver Marcellin Desboutin—were respectable citizens and not actual alcoholics."
  },

  // 96. Gustave Caillebotte - Paris Street; Rainy Day
  {
    id: "caillebotte-paris-street",
    title: "Paris Street; Rainy Day",
    originalTitle: "Rue de Paris, temps de pluie",
    year: "1877",
    era: "Impressionism",
    medium: "Oil on canvas",
    dimensions: "212.2 cm × 276.2 cm",
    location: "Art Institute of Chicago, Illinois",
    image: getPaintingUrl("Gustave_Caillebotte_-_Paris_Street%3B_Rainy_Day_-_Google_Art_Project.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/a/af/Gustave_Caillebotte_-_Paris_Street%3B_Rainy_Day_-_Google_Art_Project.jpg",
    artist: {
      name: "Gustave Caillebotte",
      lifespan: "1848 – 1894",
      nationality: "French",
      movement: "Impressionism",
      portrait: getArtistUrl("Gustave_Caillebotte_self_portrait.jpg", 640),
      bio: "Impressionist master and generous patron who documented Haussmann's newly modernized Paris with photographic perspective."
    },
    story: "Well-dressed pedestrians carrying black umbrellas navigate the wet cobblestones of the Place de Dublin in Paris, where broad boulevards converge under a cool overcast sky.",
    historicalReferences: "Celebrates Baron Haussmann's colossal mid-19th-century urban transformation of Paris, replacing cramped medieval alleys with broad grand avenues, gas lamps, and stone apartment blocks.",
    notableFact: "Caillebotte used wide-angle lens perspective tricks that make the couple on the right appear to be stepping right out of the frame into the viewer's space."
  },

  // 97. Mary Cassatt - The Child's Bath
  {
    id: "cassatt-childs-bath",
    title: "The Child's Bath",
    originalTitle: "The Child's Bath",
    year: "1893",
    era: "Impressionism",
    medium: "Oil on canvas",
    dimensions: "100.3 cm × 66.1 cm",
    location: "Art Institute of Chicago, Illinois",
    image: getPaintingUrl("Mary_Cassatt_-_The_Child%27s_Bath_-_Google_Art_Project.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/5/52/Mary_Cassatt_-_The_Child%27s_Bath_-_Google_Art_Project.jpg",
    artist: {
      name: "Mary Cassatt",
      lifespan: "1844 – 1926",
      nationality: "American",
      movement: "Impressionism",
      portrait: getArtistUrl("Mary_Cassatt_1913.jpg", 640),
      bio: "The only American invited to officially exhibit with the French Impressionists, celebrated for tender, unsentimental maternal portraits."
    },
    story: "A mother in a striped robe tenderly washes her young daughter's feet in an enamel basin of warm water, their heads inclined close together in quiet physical intimacy.",
    historicalReferences: "Heavily influenced by an 1890 exhibition of Japanese ukiyo-e woodblock prints (especially Kitagawa Utamaro) at the École des Beaux-Arts, adopting overhead vantage points and flat decorative patterns.",
    notableFact: "Cassatt played a monumental historical role advising wealthy American collectors like the Havemeyers to buy Impressionist canvases, establishing America's great museum collections."
  },

  // 98. Berthe Morisot - The Cradle
  {
    id: "morisot-the-cradle",
    title: "The Cradle",
    originalTitle: "Le Berceau",
    year: "1872",
    era: "Impressionism",
    medium: "Oil on canvas",
    dimensions: "56 cm × 46 cm",
    location: "Musée d'Orsay, Paris, France",
    image: getPaintingUrl("Berthe_Morisot_-_The_Cradle_-_Google_Art_Project.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/9/91/Berthe_Morisot_-_The_Cradle_-_Google_Art_Project.jpg",
    artist: {
      name: "Berthe Morisot",
      lifespan: "1841 – 1895",
      nationality: "French",
      movement: "Impressionism",
      portrait: getArtistUrl("Berthe_Morisot_by_Manet_1872.jpg", 640),
      bio: "Founding core member of the French Impressionists whose delicate brushwork, luminous whites, and intimate domestic portraits broke gender barriers."
    },
    story: "Morisot's sister Edma gazes with protective maternal wonder at her newborn daughter Blanche sleeping peacefully beneath the sheer white tulle netting of a cradle.",
    historicalReferences: "Exhibited at the historic First Impressionist Exhibition of 1874. As a bourgeois 19th-century woman denied access to public academies or bohemian bars, Morisot championed the quiet nobility of the domestic interior.",
    notableFact: "Morisot remained with the canvas unsold for years; her family preserved it until it entered the Louvre's national collection in 1930."
  },

  // 99. Vincent van Gogh - The Bedroom
  {
    id: "van-gogh-bedroom",
    title: "The Bedroom in Arles",
    originalTitle: "La Chambre à coucher",
    year: "1888",
    era: "Post-Impressionism",
    medium: "Oil on canvas",
    dimensions: "72 cm × 90 cm",
    location: "Van Gogh Museum, Amsterdam, Netherlands",
    image: getPaintingUrl("Vincent_van_Gogh_-_De_slaapkamer_-_Google_Art_Project.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/7/76/Vincent_van_Gogh_-_De_slaapkamer_-_Google_Art_Project.jpg",
    artist: {
      name: "Vincent van Gogh",
      lifespan: "1853 – 1890",
      nationality: "Dutch",
      movement: "Post-Impressionism",
      portrait: getArtistUrl("Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg", 640),
      bio: "Post-Impressionist master whose use of simplified color planes aimed to evoke pure psychological rest."
    },
    story: "Van Gogh depicts his modest bedroom in the Yellow House at Arles, using flat lilac walls, yellow wood chairs, and a scarlet blanket to evoke absolute psychological serenity.",
    historicalReferences: "Van Gogh wrote to Theo: 'This time it's simply my bedroom, only here color is to do everything... to be suggestive of rest or of sleep in general.' The paintings on the right wall include portraits of his friends Eugène Boch and Paul-Eugène Milliet.",
    notableFact: "Because water leaked into his studio while he was hospitalized, Van Gogh painted three distinct versions of the bedroom to replace the water-damaged original."
  },

  // 100. Vincent van Gogh - Irises
  {
    id: "van-gogh-irises",
    title: "Irises",
    originalTitle: "Les Iris",
    year: "1889",
    era: "Post-Impressionism",
    medium: "Oil on canvas",
    dimensions: "71 cm × 93 cm",
    location: "J. Paul Getty Museum, Los Angeles, California",
    image: getPaintingUrl("Vincent_van_Gogh_-_Irises_(1889).jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Irises-Vincent_van_Gogh.jpg",
    artist: {
      name: "Vincent van Gogh",
      lifespan: "1853 – 1890",
      nationality: "Dutch",
      movement: "Post-Impressionism",
      portrait: getArtistUrl("Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg", 640),
      bio: "Dutch master who viewed the physical act of painting flowers as an antidote against mental despair."
    },
    story: "Painted during the very first week after committing himself to the asylum at Saint-Rémy. A vibrant sea of deep blue and violet irises bursts with life, centered by a single, solitary white iris standing out in unique isolation.",
    historicalReferences: "Theo submitted the canvas to the Salon des Indépendants in September 1889, where fellow Post-Impressionists marvelled at its calligraphic contours inspired by Japanese ukiyo-e prints.",
    notableFact: "Sold at Sotheby's in 1987 for $53.9 million to Australian businessman Alan Bond, setting a then-world-record price for any artwork."
  },

  // 101. Vincent van Gogh - Wheatfield with Crows
  {
    id: "wheatfield-crows",
    title: "Wheatfield with Crows",
    originalTitle: "Korenveld met kraaien",
    year: "1890",
    era: "Post-Impressionism",
    medium: "Oil on canvas",
    dimensions: "50.5 cm × 103 cm",
    location: "Van Gogh Museum, Amsterdam, Netherlands",
    image: getPaintingUrl("Vincent_van_Gogh_-_Wheatfield_with_crows_-_Google_Art_Project.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Vincent_van_Gogh_-_Wheatfield_with_crows_-_Google_Art_Project.jpg",
    artist: {
      name: "Vincent van Gogh",
      lifespan: "1853 – 1890",
      nationality: "Dutch",
      movement: "Post-Impressionism",
      portrait: getArtistUrl("Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg", 640),
      bio: "Visionary whose final weeks in Auvers-sur-Oise produced some of the most emotionally charged landscapes in history."
    },
    story: "A turbulent, bruised midnight-blue sky hangs heavy over turbulent golden wheatfields cut by three diverging dirt paths, as a flock of ominous black crows scatters toward the horizon.",
    historicalReferences: "Painted in July 1890 in Auvers-sur-Oise days before his fatal gunshot wound. Van Gogh wrote to Theo: 'They are vast stretches of wheat under troubled skies, and I did not need to go out of my way to try to express sadness and extreme loneliness.'",
    notableFact: "Long rumored to be Van Gogh's final canvas, scholarly research shows he painted several other works afterwards, including Tree Roots."
  },

  // 102. Paul Gauguin - Where Do We Come From?
  {
    id: "gauguin-where-do-we-come-from",
    title: "Where Do We Come From? What Are We? Where Are We Going?",
    originalTitle: "D'où venons-nous ? Que sommes-nous ? Où allons-nous ?",
    year: "1897 – 1898",
    era: "Post-Impressionism / Synthetism",
    medium: "Oil on canvas",
    dimensions: "139.1 cm × 374.6 cm",
    location: "Museum of Fine Arts, Boston, Massachusetts",
    image: getPaintingUrl("Paul_Gauguin_-_D%27ou_venons-nous.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/9/98/Paul_Gauguin_-_D%27ou_venons-nous.jpg",
    artist: {
      name: "Paul Gauguin",
      lifespan: "1848 – 1903",
      nationality: "French",
      movement: "Post-Impressionism / Primitivism",
      portrait: getArtistUrl("Paul_Gauguin_-_Self-portrait_1893.jpg", 640),
      bio: "French post-impressionist who abandoned European bourgeois civilization to seek spiritual symbolism in Tahiti."
    },
    story: "A monumental allegorical frieze read from right to left: from a sleeping newborn infant representing the genesis of life, to adults picking fruit of knowledge in maturity, to an elderly woman reconciled to mortality.",
    historicalReferences: "Painted in Tahiti while Gauguin was battling severe illness, depression, and poverty following the death of his beloved daughter Aline. He considered it his spiritual testament and attempted suicide shortly after its completion.",
    notableFact: "Gauguin painted directly onto rough local sackcloth rather than fine European primed canvas, creating a raw, organic texture."
  },

  // 103. Henri de Toulouse-Lautrec - At the Moulin Rouge
  {
    id: "toulouse-lautrec-moulin-rouge",
    title: "At the Moulin Rouge",
    originalTitle: "Au Moulin Rouge",
    year: "1892 – 1895",
    era: "Post-Impressionism",
    medium: "Oil on canvas",
    dimensions: "123 cm × 141 cm",
    location: "Art Institute of Chicago, Illinois",
    image: getPaintingUrl("Henri_de_Toulouse-Lautrec_-_Au_Moulin_Rouge_-_Google_Art_Project.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Henri_de_Toulouse-Lautrec_-_Au_Moulin_Rouge_-_Google_Art_Project.jpg",
    artist: {
      name: "Henri de Toulouse-Lautrec",
      lifespan: "1864 – 1901",
      nationality: "French",
      movement: "Post-Impressionism",
      portrait: getArtistUrl("Henri_de_Toulouse-Lautrec_by_Maurice_Guibert.jpg", 640),
      bio: "Chronicler of bohemian Montmartre cabaret life whose graphic posters and psychological canvases captured the decadent Belle Époque."
    },
    story: "Patrons and cabaret performers gather around a table at the famous Moulin Rouge nightclub, illuminated by harsh artificial gaslight that casts an eerie green glow across the face of dancer May Milton in the right foreground.",
    historicalReferences: "Features real Montmartre personalities: dancer La Goulue arranging her hair in the mirror, Spanish dancer Macarona, and Toulouse-Lautrec himself strolling in the background accompanied by his towering cousin Gabriel Tapié de Céleyran.",
    notableFact: "The scandalous right-hand slice showing May Milton's green face was originally cut off by a dealer to make the canvas more conventional, before being reunited decades later."
  },

  // 104. Egon Schiele - Self-Portrait with Physalis
  {
    id: "schiele-self-portrait",
    title: "Self-Portrait with Chinese Lantern Plant (Physalis)",
    originalTitle: "Selbstbildnis mit Lampionfrüchten",
    year: "1912",
    era: "Expressionism (Vienna)",
    medium: "Oil and gouache on wood",
    dimensions: "32.2 cm × 39.8 cm",
    location: "Leopold Museum, Vienna, Austria",
    image: getPaintingUrl("Egon_Schiele_-_Self-Portrait_with_Physalis_-_Google_Art_Project.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/2/23/Egon_Schiele_-_Self-Portrait_with_Physalis_-_Google_Art_Project.jpg",
    artist: {
      name: "Egon Schiele",
      lifespan: "1890 – 1918",
      nationality: "Austrian",
      movement: "Expressionism",
      portrait: getArtistUrl("Egon_Schiele_photo.jpg", 640),
      bio: "Prodigious protégé of Gustav Klimt whose raw, contorted line drawings and psychological vulnerability defined Austrian Expressionism."
    },
    story: "Schiele tilts his head at a sharp, skeptical angle, fixing the spectator with an intense, probing gaze amidst brittle branches of bright orange Chinese lantern fruits (physalis).",
    historicalReferences: "Painted as a companion piece to his portrait of partner Wally Neuzil during the peak of Schiele's early career before his controversial arrest in Neulengbach for allegedly exhibiting improper drawings to minors.",
    notableFact: "Schiele tragically died of the Spanish Flu at just 28 years old, three days after his pregnant wife Edith succumbed to the same pandemic."
  },

  // 105. Franz Marc - The Large Blue Horses
  {
    id: "franz-marc-blue-horses",
    title: "The Large Blue Horses",
    originalTitle: "Die großen blauen Pferde",
    year: "1911",
    era: "German Expressionism (Der Blaue Reiter)",
    medium: "Oil on canvas",
    dimensions: "105.7 cm × 181.1 cm",
    location: "Walker Art Center, Minneapolis, Minnesota",
    image: getPaintingUrl("Franz_Marc_-_The_Large_Blue_Horses_-_Google_Art_Project.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Franz_Marc_-_The_Large_Blue_Horses_-_Google_Art_Project.jpg",
    artist: {
      name: "Franz Marc",
      lifespan: "1880 – 1916",
      nationality: "German",
      movement: "Der Blaue Reiter (Expressionism)",
      portrait: getArtistUrl("Franz_Marc_1910.jpg", 640),
      bio: "Co-founder of Der Blaue Reiter who used mystical primary colors to convey the spiritual purity of the animal world."
    },
    story: "Three powerful blue horses bow their heads in peaceful harmony, their muscular curving backs echoing the rolling red hills of a pristine, uncorrupted landscape.",
    historicalReferences: "Marc formulated a strict color symbolism: blue represented masculinity, intellect, and spirituality; yellow symbolized female grace and joy; red stood for brutal, heavy matter. The blue horses embody transcendent spiritual innocence.",
    notableFact: "Marc was tragically killed by shrapnel at the Battle of Verdun in 1916 during World War I, ending one of modernism's brightest careers."
  },

  // 106. Wassily Kandinsky - Composition VII
  {
    id: "kandinsky-composition-vii",
    title: "Composition VII",
    originalTitle: "Komposition VII",
    year: "1913",
    era: "Abstract Art / Expressionism",
    medium: "Oil on canvas",
    dimensions: "200 cm × 300 cm",
    location: "State Tretyakov Gallery, Moscow, Russia",
    image: getPaintingUrl("Vassily_Kandinsky%2C_1913_-_Composition_7.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Vassily_Kandinsky%2C_1913_-_Composition_7.jpg",
    artist: {
      name: "Wassily Kandinsky",
      lifespan: "1866 – 1944",
      nationality: "Russian",
      movement: "Abstract Art / Der Blaue Reiter",
      portrait: getArtistUrl("Kandinsky_1913.jpg", 640),
      bio: "Pioneer of pure abstract painting who connected visual color directly to musical chords and spiritual vibrations."
    },
    story: "An apocalyptic cosmic explosion of non-objective swirling colors, colliding black calligraphy, and geometric energy, completely free of any representation of the physical world.",
    historicalReferences: "Widely regarded as the pinnacle of Kandinsky's pre-WWI abstract breakthrough in Munich. Rooted in themes of the biblical Flood, the Resurrection, and the Last Judgment, heralding a spiritual rebirth through art.",
    notableFact: "Kandinsky made over thirty detailed preparatory watercolor and pencil studies before completing this enormous three-meter canvas in an intense three-day painting session."
  },

  // 107. Pablo Picasso - The Old Guitarist
  {
    id: "picasso-old-guitarist",
    title: "The Old Guitarist",
    originalTitle: "El viejo guitarrista ciego",
    year: "1903 – 1904",
    era: "Picasso's Blue Period",
    medium: "Oil on panel",
    dimensions: "122.9 cm × 82.6 cm",
    location: "Art Institute of Chicago, Illinois",
    image: getPaintingUrl("The_Old_Guitarist_by_Pablo_Picasso.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/7/70/The_Old_Guitarist_by_Pablo_Picasso.jpg",
    artist: {
      name: "Pablo Picasso",
      lifespan: "1881 – 1973",
      nationality: "Spanish",
      movement: "Blue Period / Modernism",
      portrait: getArtistUrl("Pablo_Picasso_1908.jpg", 640),
      bio: "Titan of 20th-century art who co-founded Cubism and endlessly reinvented artistic expression across eight decades."
    },
    story: "An emaciated, blind elderly busker in tattered clothes slumps over his acoustic guitar on the streets of Barcelona, clutching the warm wooden instrument as his sole remaining solace in an icy blue world.",
    historicalReferences: "Created during Picasso's poignant Blue Period (1901–1904), triggered by the tragic suicide of his close friend Carlos Casagemas. Reflects the influence of El Greco's elongated figures and the grim reality of poverty in Spain.",
    notableFact: "X-rays and infrared imaging revealed an earlier ghostly painting underneath: a seated mother nursing a child with an ox and calf."
  },

  // 108. Pablo Picasso - Les Demoiselles d'Avignon
  {
    id: "demoiselles-davignon",
    title: "Les Demoiselles d'Avignon",
    originalTitle: "Le Bordel d'Avignon",
    year: "1907",
    era: "Proto-Cubism",
    medium: "Oil on canvas",
    dimensions: "243.9 cm × 233.7 cm",
    location: "Museum of Modern Art (MoMA), New York City",
    image: getPaintingUrl("Les_Demoiselles_d%27Avignon.jpg", 1600),
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Les_Demoiselles_d%27Avignon.jpg",
    artist: {
      name: "Pablo Picasso",
      lifespan: "1881 – 1973",
      nationality: "Spanish",
      movement: "Proto-Cubism",
      portrait: getArtistUrl("Pablo_Picasso_1908.jpg", 640),
      bio: "Revolutionary whose radical geometric fracture of space and forms shattered five centuries of Renaissance perspective."
    },
    story: "Five prostitutes in a brothel on Carrer d'Avinyó in Barcelona confront the viewer with sharp, fractured geometric planes, two of them wearing terrifying African ceremonial masks.",
    historicalReferences: "The decisive catalyst for the birth of Cubism. Picasso was electrified by African and Iberian tribal masks seen at the Musée d'Ethnographie du Trocadéro, seeing art as an exorcism against mortal fear.",
    notableFact: "When Picasso first unveiled the canvas in his Montmartre studio Bateau-Lavoir, friends including Henri Matisse and Georges Braque were initially horrified, calling it an insult to painting."
  }
];

