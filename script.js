/* ============================================================
   SAVORY TABLE — Main JavaScript
   ============================================================ */

'use strict';

/* ─── Recipe Data ───────────────────────────────────────────── */
const RECIPES = [
  {
    id: 1,
    name: "Lemon Herb Grilled Chicken",
    category: "dinner",
    prepTime: "15 min",
    cookTime: "25 min",
    servings: 4,
    difficulty: "Easy",
    description: "Juicy grilled chicken marinated in fresh lemon, garlic, and aromatic herbs — a weeknight classic that never disappoints.",
    image: "https://www.eatingwell.com/thmb/upst6ydvrAITWRwB4u3hL_O2btg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5177922-ad507ccfe07d491eba9ad48c0ea8e114.jpg",
    featured: true,
    tags: ["chicken", "grilled", "high-protein"],
    ingredients: [
      "4 boneless, skin-on chicken breasts",
      "3 tablespoons olive oil",
      "2 tablespoons fresh lemon juice",
      "3 garlic cloves, minced",
      "1 tablespoon fresh thyme leaves",
      "1 tablespoon fresh rosemary, chopped",
      "1 teaspoon kosher salt",
      "½ teaspoon black pepper",
      "1 teaspoon smoked paprika",
      "Fresh parsley, for garnish"
    ],
    instructions: [
      "In a bowl, whisk together olive oil, lemon juice, garlic, thyme, rosemary, salt, pepper, and paprika to make the marinade.",
      "Place chicken breasts in a zip-lock bag or shallow dish and pour the marinade over them. Let marinate for at least 30 minutes, or up to 4 hours in the refrigerator.",
      "Preheat your grill or grill pan to medium-high heat. Brush the grates lightly with oil.",
      "Remove chicken from the marinade, letting excess drip off. Grill for 6–7 minutes per side, or until the internal temperature reaches 165°F.",
      "Let rest for 5 minutes before slicing. Garnish with fresh parsley and lemon wedges. Serve immediately."
    ]
  },
  {
    id: 2,
    name: "Classic Cacio e Pepe",
    category: "dinner",
    prepTime: "5 min",
    cookTime: "20 min",
    servings: 2,
    difficulty: "Medium",
    description: "Rome's legendary pasta with only three ingredients — black pepper, Pecorino Romano, and perfectly cooked spaghetti.",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&auto=format&fit=crop",
    featured: true,
    tags: ["pasta", "vegetarian", "italian"],
    ingredients: [
      "8 oz spaghetti",
      "1½ cups finely grated Pecorino Romano",
      "½ cup grated Parmigiano-Reggiano",
      "1½ teaspoons freshly cracked black pepper",
      "1 teaspoon kosher salt",
      "2 tablespoons reserved pasta water"
    ],
    instructions: [
      "Bring a large pot of salted water to a boil. Cook spaghetti until 2 minutes before al dente, reserving 1 cup of pasta water.",
      "While pasta cooks, toast black pepper in a large skillet over medium heat for 1 minute until fragrant. Add ½ cup pasta water and bring to a simmer.",
      "Drain pasta and add directly to the skillet. Toss vigorously over medium heat.",
      "Remove from heat. Add cheese in batches, adding splashes of pasta water and tossing constantly to create a creamy, silky sauce.",
      "Plate immediately, topping with extra Pecorino and cracked black pepper. Serve at once."
    ]
  },
  {
    id: 3,
    name: "Pan-Seared Salmon with Dill",
    category: "dinner",
    prepTime: "10 min",
    cookTime: "12 min",
    servings: 2,
    difficulty: "Easy",
    description: "Crispy-skinned salmon finished with a bright lemon-dill butter sauce — elegant, fast, and incredibly delicious.",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&auto=format&fit=crop",
    featured: true,
    tags: ["seafood", "healthy", "quick"],
    ingredients: [
      "2 salmon fillets (6 oz each), skin-on",
      "2 tablespoons unsalted butter",
      "1 tablespoon olive oil",
      "2 garlic cloves, minced",
      "2 tablespoons fresh dill, chopped",
      "1 tablespoon capers",
      "2 tablespoons fresh lemon juice",
      "Salt and white pepper to taste"
    ],
    instructions: [
      "Pat salmon fillets very dry with paper towels. Season generously with salt and white pepper on both sides.",
      "Heat olive oil in a stainless skillet over high heat until just smoking. Place salmon skin-side down and press firmly for 30 seconds.",
      "Reduce heat to medium-high. Cook 4–5 minutes without moving until skin is golden and crispy. Flip and cook 2–3 more minutes.",
      "Add butter, garlic, dill, and capers to the pan. Baste salmon with the foaming butter for 1 minute.",
      "Finish with lemon juice. Serve immediately over roasted asparagus or with crusty bread."
    ]
  },
  {
    id: 4,
    name: "Caprese Chicken Skillet",
    category: "dinner",
    prepTime: "10 min",
    cookTime: "22 min",
    servings: 4,
    difficulty: "Easy",
    description: "Tender chicken topped with fresh mozzarella, heirloom tomatoes, and basil pesto — the taste of summer in one skillet.",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&auto=format&fit=crop",
    featured: false,
    tags: ["chicken", "italian", "quick"],
    ingredients: [
      "4 chicken breasts, pounded thin",
      "8 oz fresh mozzarella, sliced",
      "2 large heirloom tomatoes, sliced",
      "¼ cup basil pesto",
      "2 tablespoons balsamic glaze",
      "Fresh basil leaves",
      "2 tablespoons olive oil",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Season chicken with salt and pepper on both sides.",
      "Heat olive oil in a large oven-safe skillet over medium-high. Sear chicken 4 minutes per side until golden. Remove from heat.",
      "Spread a tablespoon of pesto on each breast. Top with tomato slices and mozzarella.",
      "Transfer to a 400°F oven for 8–10 minutes until cheese is melted and bubbling.",
      "Drizzle with balsamic glaze and scatter fresh basil. Serve straight from the skillet."
    ]
  },
  {
    id: 5,
    name: "Mediterranean Chickpea Bowl",
    category: "lunch",
    prepTime: "15 min",
    cookTime: "10 min",
    servings: 2,
    difficulty: "Easy",
    description: "A vibrant, nourishing bowl loaded with spiced chickpeas, cucumber, tzatziki, and warm pita — vegetarian and deeply satisfying.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop",
    featured: true,
    tags: ["vegetarian", "healthy", "bowl"],
    ingredients: [
      "1 can (15 oz) chickpeas, drained and rinsed",
      "1 teaspoon cumin",
      "1 teaspoon smoked paprika",
      "½ teaspoon turmeric",
      "2 tablespoons olive oil",
      "1 cup cucumber, diced",
      "1 cup cherry tomatoes, halved",
      "½ cup Kalamata olives",
      "¼ cup red onion, thinly sliced",
      "½ cup tzatziki",
      "Warm pita, for serving",
      "Fresh mint and parsley"
    ],
    instructions: [
      "Pat chickpeas completely dry. Toss with olive oil, cumin, paprika, and turmeric.",
      "Cook chickpeas in a skillet over medium-high heat for 8–10 minutes, tossing occasionally, until crispy and golden.",
      "Arrange cucumber, tomatoes, olives, and red onion in bowls.",
      "Top with crispy chickpeas and a generous dollop of tzatziki.",
      "Garnish with fresh mint and parsley. Serve with warm pita on the side."
    ]
  },
  {
    id: 6,
    name: "Avocado BLT Wrap",
    category: "lunch",
    prepTime: "12 min",
    cookTime: "5 min",
    servings: 2,
    difficulty: "Easy",
    description: "The classic BLT gets a California upgrade — crispy bacon, ripe avocado, heirloom tomato, and herb mayo in a warm tortilla.",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&auto=format&fit=crop",
    featured: false,
    tags: ["quick", "lunch", "sandwich"],
    ingredients: [
      "2 large flour tortillas (10-inch)",
      "6 strips thick-cut bacon",
      "1 ripe avocado, sliced",
      "2 large heirloom tomatoes, sliced",
      "4 leaves romaine lettuce",
      "3 tablespoons mayonnaise",
      "1 tablespoon fresh chives, minced",
      "½ tablespoon lemon juice",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Cook bacon in a skillet over medium heat until crispy. Drain on paper towels.",
      "Mix mayonnaise with chives and lemon juice to make herb mayo. Season with salt and pepper.",
      "Warm tortillas in the dry skillet for 30 seconds per side.",
      "Spread herb mayo over each tortilla. Layer with lettuce, tomato, bacon, and avocado. Season avocado with salt and a squeeze of lemon.",
      "Fold sides in, roll tightly, and cut diagonally. Serve immediately."
    ]
  },
  {
    id: 7,
    name: "Spicy Thai Basil Beef",
    category: "dinner",
    prepTime: "12 min",
    cookTime: "10 min",
    servings: 4,
    difficulty: "Medium",
    description: "Fragrant Thai basil stir-fry with ground beef, chilies, and fish sauce served over jasmine rice — bold, fast, and addictive.",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&auto=format&fit=crop",
    featured: false,
    tags: ["beef", "asian", "spicy"],
    ingredients: [
      "1 lb ground beef (80/20)",
      "1½ cups fresh Thai basil leaves",
      "4 garlic cloves, minced",
      "3 Thai red chilies, thinly sliced",
      "2 tablespoons oyster sauce",
      "1 tablespoon fish sauce",
      "1 teaspoon soy sauce",
      "1 teaspoon sugar",
      "2 tablespoons neutral oil",
      "2 cups cooked jasmine rice",
      "Fried eggs (optional, for serving)"
    ],
    instructions: [
      "Combine oyster sauce, fish sauce, soy sauce, and sugar in a small bowl. Set aside.",
      "Heat oil in a wok or large skillet over high heat until smoking. Add garlic and chilies, stir-fry 30 seconds.",
      "Add ground beef, breaking it up with a spoon. Cook 4–5 minutes until browned and slightly crispy.",
      "Add the sauce mixture and toss to coat. Cook 1 more minute.",
      "Remove from heat and fold in Thai basil leaves. Serve immediately over jasmine rice, topped with a fried egg if desired."
    ]
  },
  {
    id: 8,
    name: "Tomato Bisque Soup",
    category: "lunch",
    prepTime: "15 min",
    cookTime: "30 min",
    servings: 4,
    difficulty: "Easy",
    description: "Silky roasted tomato bisque with cream and fresh basil — the ultimate cozy lunch. Perfect with a crusty grilled cheese.",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop",
    featured: false,
    tags: ["vegetarian", "soup", "comfort"],
    ingredients: [
      "2 lbs plum tomatoes, halved",
      "1 large onion, quartered",
      "6 garlic cloves",
      "3 tablespoons olive oil",
      "2 cups vegetable broth",
      "½ cup heavy cream",
      "1 tablespoon tomato paste",
      "1 teaspoon sugar",
      "½ cup fresh basil, packed",
      "Salt, pepper, red pepper flakes"
    ],
    instructions: [
      "Preheat oven to 425°F. Toss tomatoes, onion, and garlic with olive oil, salt, and pepper on a baking sheet.",
      "Roast 25–30 minutes until caramelized and charred at the edges.",
      "Transfer roasted vegetables and any juices to a blender. Add broth, tomato paste, and sugar. Blend until very smooth.",
      "Pour into a saucepan over medium heat. Add cream and half the basil. Simmer 5 minutes, adjust seasoning.",
      "Ladle into bowls and garnish with remaining basil, a drizzle of cream, and cracked pepper."
    ]
  },
  {
    id: 9,
    name: "Mushroom Risotto",
    category: "dinner",
    prepTime: "10 min",
    cookTime: "35 min",
    servings: 4,
    difficulty: "Medium",
    description: "Deeply savory risotto with wild mushrooms, Parmigiano-Reggiano, and a splash of white wine — luxuriously creamy.",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&auto=format&fit=crop",
    featured: false,
    tags: ["vegetarian", "italian", "comfort"],
    ingredients: [
      "1½ cups Arborio rice",
      "1 lb mixed wild mushrooms, sliced",
      "1 shallot, minced",
      "3 garlic cloves, minced",
      "½ cup dry white wine",
      "5 cups warm vegetable or chicken broth",
      "¾ cup grated Parmigiano-Reggiano",
      "3 tablespoons unsalted butter",
      "2 tablespoons olive oil",
      "Fresh thyme and parsley",
      "Salt and white pepper"
    ],
    instructions: [
      "Heat olive oil in a large, wide pan over high heat. Sauté mushrooms in batches until golden, about 5 minutes. Season and set aside.",
      "In the same pan, melt 1 tablespoon butter over medium heat. Sauté shallot and garlic until soft, 3 minutes.",
      "Add Arborio rice, toasting for 2 minutes, stirring constantly. Pour in white wine and cook until absorbed.",
      "Add warm broth, one ladle at a time, stirring constantly and allowing each addition to absorb before adding the next. Continue 18–20 minutes until rice is al dente.",
      "Remove from heat. Stir in remaining butter and Parmigiano vigorously. Fold in mushrooms and fresh herbs. Serve immediately."
    ]
  },
  {
    id: 10,
    name: "Greek-Style Lamb Chops",
    category: "dinner",
    prepTime: "20 min",
    cookTime: "15 min",
    servings: 4,
    difficulty: "Medium",
    description: "Tender lamb chops marinated in oregano, lemon, and garlic, char-grilled and served with a cooling tzatziki drizzle.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop",
    featured: false,
    tags: ["lamb", "grilled", "mediterranean"],
    ingredients: [
      "8 lamb loin chops (about 1-inch thick)",
      "4 tablespoons olive oil",
      "3 tablespoons fresh lemon juice",
      "4 garlic cloves, minced",
      "2 tablespoons dried oregano",
      "1 teaspoon dried thyme",
      "1 teaspoon kosher salt",
      "½ teaspoon black pepper",
      "½ cup store-bought tzatziki",
      "Lemon wedges and fresh mint"
    ],
    instructions: [
      "Whisk together olive oil, lemon juice, garlic, oregano, thyme, salt, and pepper. Pour over lamb chops and marinate 1–4 hours.",
      "Bring lamb to room temperature 30 minutes before cooking. Preheat grill to high heat.",
      "Shake off excess marinade. Grill chops 3–4 minutes per side for medium-rare (internal temp 130°F).",
      "Rest chops on a plate for 5 minutes, tented with foil.",
      "Serve with tzatziki, lemon wedges, and fresh mint alongside warm pita or roasted potatoes."
    ]
  },
  {
    id: 11,
    name: "Shrimp Tacos with Mango Salsa",
    category: "lunch",
    prepTime: "20 min",
    cookTime: "8 min",
    servings: 4,
    difficulty: "Easy",
    description: "Chili-lime shrimp in warm corn tortillas with vibrant mango salsa and chipotle crema — bright, fresh, and fiesta-ready.",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&auto=format&fit=crop",
    featured: false,
    tags: ["seafood", "tacos", "quick"],
    ingredients: [
      "1 lb large shrimp, peeled and deveined",
      "1 tablespoon chili powder",
      "½ teaspoon cumin",
      "½ teaspoon garlic powder",
      "2 tablespoons lime juice",
      "8 corn tortillas",
      "1 ripe mango, diced small",
      "½ red onion, minced",
      "¼ cup cilantro, chopped",
      "1 jalapeño, minced",
      "½ cup sour cream",
      "1 tablespoon chipotle in adobo, minced"
    ],
    instructions: [
      "Toss shrimp with chili powder, cumin, garlic powder, lime juice, and salt. Let sit 10 minutes.",
      "Make mango salsa: combine mango, red onion, cilantro, jalapeño, and a squeeze of lime. Season with salt.",
      "Mix sour cream with chipotle to make crema.",
      "Cook shrimp in a hot, oiled skillet over high heat, 2–3 minutes per side until pink and charred.",
      "Warm tortillas. Assemble tacos with shrimp, mango salsa, and chipotle crema. Serve with lime wedges."
    ]
  },
  {
    id: 12,
    name: "Honey Garlic Salmon Bowl",
    category: "lunch",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: 2,
    difficulty: "Easy",
    description: "Sticky honey-garlic glazed salmon over brown rice with edamame, pickled cucumber, and sesame — a power lunch.",
    image: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=800&auto=format&fit=crop",
    featured: false,
    tags: ["seafood", "bowl", "healthy"],
    ingredients: [
      "2 salmon fillets (5 oz each), skinless",
      "3 tablespoons honey",
      "3 tablespoons soy sauce",
      "2 garlic cloves, minced",
      "1 teaspoon sesame oil",
      "1½ cups cooked brown rice",
      "½ cup shelled edamame",
      "¼ cucumber, thinly sliced",
      "2 tablespoons rice vinegar",
      "1 teaspoon sesame seeds",
      "Sliced scallions for garnish"
    ],
    instructions: [
      "Whisk together honey, soy sauce, garlic, and sesame oil. Reserve 2 tablespoons for serving.",
      "Marinate salmon in the sauce for 10 minutes. Quick-pickle cucumber slices in rice vinegar with a pinch of sugar and salt.",
      "Heat a non-stick pan over medium-high. Cook salmon 4 minutes per side, basting with remaining marinade, until glaze is sticky and caramelized.",
      "Divide brown rice between bowls. Top with salmon, edamame, and pickled cucumber.",
      "Drizzle with reserved sauce, sprinkle sesame seeds and scallions, and serve."
    ]
  },
  {
    id: 13,
    name: "Beef & Vegetable Stew",
    category: "dinner",
    prepTime: "20 min",
    cookTime: "2 hrs",
    servings: 6,
    difficulty: "Medium",
    description: "Slow-braised beef chuck with root vegetables in a rich red wine broth — the kind of stew that fills the whole house with warmth.",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&auto=format&fit=crop",
    featured: false,
    tags: ["beef", "comfort", "slow-cook"],
    ingredients: [
      "2 lbs beef chuck, cut into 1.5-inch cubes",
      "3 tablespoons vegetable oil",
      "3 tablespoons all-purpose flour",
      "2 onions, diced",
      "4 garlic cloves, minced",
      "1 cup red wine (Cabernet or Merlot)",
      "3 cups beef broth",
      "3 carrots, cut into chunks",
      "3 Yukon Gold potatoes, cubed",
      "2 bay leaves",
      "1 tablespoon fresh thyme",
      "Salt, pepper, Worcestershire sauce"
    ],
    instructions: [
      "Season beef with salt and pepper. Toss with flour. Sear in batches in hot oil until deeply browned on all sides. Set aside.",
      "In the same Dutch oven, sauté onions 5 minutes until soft. Add garlic and cook 1 minute more.",
      "Pour in red wine, scraping up browned bits. Add broth, bay leaves, thyme, and Worcestershire. Return beef to pot.",
      "Bring to a boil, then reduce to a low simmer. Cover and cook 1.5 hours.",
      "Add carrots and potatoes. Cook uncovered 30 more minutes until vegetables are tender and broth is reduced to a rich sauce. Adjust seasoning and serve."
    ]
  },
  {
    id: 14,
    name: "Caesar Salad with Crispy Chicken",
    category: "lunch",
    prepTime: "15 min",
    cookTime: "18 min",
    servings: 2,
    difficulty: "Medium",
    description: "Classic Caesar gets upgraded with a golden panko-crusted chicken breast and house-made anchovy-garlic dressing.",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&auto=format&fit=crop",
    featured: false,
    tags: ["chicken", "salad", "classic"],
    ingredients: [
      "2 chicken breasts, pounded to ½-inch",
      "1 cup panko breadcrumbs",
      "1 egg, beaten",
      "½ cup flour",
      "1 large head romaine, chopped",
      "½ cup grated Parmesan",
      "1 cup croutons",
      "4 tablespoons Caesar dressing",
      "2 anchovy fillets, minced",
      "1 lemon wedge",
      "Salt and pepper"
    ],
    instructions: [
      "Set up a breading station: flour, beaten egg, and seasoned panko. Dip chicken in flour, egg, then panko.",
      "Pan-fry in ½ inch of oil over medium-high heat for 4–5 minutes per side until golden brown and cooked through. Drain.",
      "Whisk Caesar dressing with minced anchovies for extra depth.",
      "Toss romaine with dressing, Parmesan, and croutons.",
      "Slice chicken and fan over salad. Finish with a squeeze of lemon, extra Parmesan, and cracked pepper."
    ]
  },
  {
    id: 15,
    name: "Pesto Pasta Primavera",
    category: "lunch",
    prepTime: "12 min",
    cookTime: "15 min",
    servings: 4,
    difficulty: "Easy",
    description: "Farfalle tossed in vibrant basil pesto with spring vegetables — a fresh, light pasta that celebrates the garden.",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&auto=format&fit=crop",
    featured: false,
    tags: ["pasta", "vegetarian", "quick"],
    ingredients: [
      "12 oz farfalle pasta",
      "½ cup basil pesto",
      "1 zucchini, diced",
      "1 cup cherry tomatoes, halved",
      "1 cup fresh or frozen peas",
      "1 cup asparagus tips",
      "3 tablespoons olive oil",
      "2 garlic cloves, minced",
      "½ cup grated Parmesan",
      "Fresh basil leaves",
      "Salt, pepper, chili flakes"
    ],
    instructions: [
      "Cook farfalle in salted boiling water to al dente. Reserve 1 cup pasta water before draining.",
      "Heat olive oil in a large skillet. Sauté garlic 30 seconds, then add zucchini and asparagus. Cook 3–4 minutes until tender-crisp.",
      "Add peas and tomatoes, cooking 2 more minutes.",
      "Toss drained pasta with pesto and vegetables. Add pasta water as needed for a silky consistency.",
      "Plate and finish with Parmesan, fresh basil, and a pinch of chili flakes."
    ]
  },
  {
    id: 16,
    name: "Miso-Glazed Black Cod",
    category: "dinner",
    prepTime: "10 min",
    cookTime: "12 min",
    servings: 2,
    difficulty: "Medium",
    description: "Japanese-inspired black cod broiled with a sweet white miso glaze — silky, buttery, and absolutely breathtaking.",
    image: "https://images.unsplash.com/photo-1559742811-822873691df8?w=800&auto=format&fit=crop",
    featured: false,
    tags: ["seafood", "japanese", "elegant"],
    ingredients: [
      "2 black cod fillets (6 oz each)",
      "3 tablespoons white miso paste",
      "2 tablespoons mirin",
      "2 tablespoons sake",
      "1 tablespoon sugar",
      "1 teaspoon sesame oil",
      "Pickled ginger for serving",
      "Steamed bok choy and rice"
    ],
    instructions: [
      "Whisk miso, mirin, sake, sugar, and sesame oil into a smooth glaze. Pat cod dry and coat generously with glaze.",
      "Cover and refrigerate 2–24 hours (overnight is best for maximum flavor absorption).",
      "Preheat broiler to high. Line a baking sheet with foil and oil lightly.",
      "Wipe off excess marinade. Broil cod 3–4 inches from heat for 10–12 minutes until caramelized and flaking.",
      "Serve over steamed rice with bok choy, pickled ginger, and any pan juices."
    ]
  }
];

/* ─── DOM References ─────────────────────────────────────────── */
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const modalOverlay = document.getElementById('modalOverlay');
const savePopup = document.getElementById('savePopup');
const toastEl = document.getElementById('toast');

/* ─── Navbar ─────────────────────────────────────────────────── */
function initNavbar() {
  if (!navbar) return;

  const isHomePage = document.body.classList.contains('home-page');

  function updateNavbar() {
    if (isHomePage) {
      if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
        navbar.classList.remove('transparent');
      } else {
        navbar.classList.remove('scrolled');
        navbar.classList.add('transparent');
      }
    } else {
      navbar.classList.add('scrolled');
      navbar.classList.remove('transparent');
    }
  }

  updateNavbar();
  window.addEventListener('scroll', updateNavbar, { passive: true });

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const spans = navToggle.querySelectorAll('span');
      if (navLinks.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px,5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
      } else {
        spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      }
    });
  }

  // Mark active link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ─── Modal ──────────────────────────────────────────────────── */
function openModal(recipeId) {
  const recipe = RECIPES.find(r => r.id === recipeId);
  if (!recipe || !modalOverlay) return;

  document.getElementById('modalImage').src = recipe.image;
  document.getElementById('modalImage').alt = recipe.name;
  document.getElementById('modalTitle').textContent = recipe.name;
  document.getElementById('modalTitleMain').textContent = recipe.name;
  document.getElementById('modalPrepTime').textContent = recipe.prepTime;
  document.getElementById('modalCookTime').textContent = recipe.cookTime;
  document.getElementById('modalServings').textContent = recipe.servings + ' Servings';
  document.getElementById('modalDifficulty').textContent = recipe.difficulty;

  const ingList = document.getElementById('modalIngredients');
  ingList.innerHTML = recipe.ingredients.map(i => `<li>${i}</li>`).join('');

  const stepList = document.getElementById('modalSteps');
  stepList.innerHTML = recipe.instructions.map((step, i) =>
    `<li><span class="step-num">${i+1}</span><span>${step}</span></li>`
  ).join('');

  // Store recipe ID for save button
  document.getElementById('modalSaveBtn').dataset.id = recipeId;
  document.getElementById('modalViewBtn').href = recipe.category === 'lunch' ? 'lunch.html' : 'dinner.html';

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!modalOverlay) return;
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

function initModal() {
  if (!modalOverlay) return;
  modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay) closeModal();
  });
  document.getElementById('modalClose')?.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
  document.getElementById('modalSaveBtn')?.addEventListener('click', () => {
    closeModal();
    openSavePopup();
  });
}

/* ─── Save Popup ─────────────────────────────────────────────── */
function openSavePopup() {
  if (!savePopup) return;
  savePopup.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeSavePopup() {
  if (!savePopup) return;
  savePopup.classList.remove('open');
  document.body.style.overflow = '';
}

function initSavePopup() {
  if (!savePopup) return;
  savePopup.addEventListener('click', e => {
    if (e.target === savePopup) closeSavePopup();
  });
  document.getElementById('savePopupClose')?.addEventListener('click', closeSavePopup);
}

/* ─── Toast ──────────────────────────────────────────────────── */
function showToast(msg) {
  if (!toastEl) return;
  toastEl.querySelector('.toast-msg').textContent = msg;
  toastEl.classList.add('show');
  setTimeout(() => toastEl.classList.remove('show'), 3200);
}

/* ─── Render Recipe Cards ────────────────────────────────────── */
function createRecipeCard(recipe, size = 'normal') {
  const card = document.createElement('div');
  card.className = 'recipe-card' + (size === 'hero' ? ' featured-hero-card' : '');
  card.dataset.id = recipe.id;
  card.innerHTML = `
    <div class="card-img">
      <img src="${recipe.image}" alt="${recipe.name}" loading="lazy">
      <span class="card-badge ${recipe.category}">${recipe.category}</span>
      <button class="card-save" aria-label="Save recipe" onclick="event.stopPropagation(); openSavePopup()">♡</button>
    </div>
    <div class="card-body">
      <div class="card-meta">
        <span>⏱ ${recipe.prepTime}</span>
        <span>🍳 ${recipe.cookTime}</span>
        <span>👤 ${recipe.servings}</span>
      </div>
      <h3 class="card-title">${recipe.name}</h3>
      <p class="card-desc">${recipe.description}</p>
    </div>
  `;
  card.addEventListener('click', () => openModal(recipe.id));
  return card;
}

/* ─── Homepage Sections ──────────────────────────────────────── */
function initFeaturedRecipes() {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;

  const featured = RECIPES.filter(r => r.featured).slice(0, 4);
  featured.forEach((recipe, i) => {
    grid.appendChild(createRecipeCard(recipe, i === 0 ? 'hero' : 'normal'));
  });
}

function initPopularRecipes() {
  const grid = document.getElementById('popularGrid');
  if (!grid) return;
  const popular = RECIPES.slice(4, 8);
  popular.forEach(r => grid.appendChild(createRecipeCard(r)));
}

/* ─── Category Filter (Recipes Page) ────────────────────────── */
function initRecipesPage() {
  const grid = document.getElementById('recipesPageGrid');
  if (!grid) return;

  let current = 'all';
  const tabs = document.querySelectorAll('.filter-tab');

  function render(filter) {
    grid.innerHTML = '';
    const filtered = filter === 'all' ? RECIPES
      : RECIPES.filter(r => r.category === filter || r.tags.includes(filter));
    filtered.forEach(r => grid.appendChild(createRecipeCard(r)));
    // Trigger reveal
    setTimeout(() => {
      grid.querySelectorAll('.recipe-card').forEach(c => c.classList.add('reveal', 'visible'));
    }, 50);
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      current = tab.dataset.filter;
      render(current);
    });
  });

  render('all');
}

/* ─── Lunch/Dinner Page ──────────────────────────────────────── */
function initCategoryPage(category) {
  const grid = document.getElementById('categoryPageGrid');
  if (!grid) return;
  const filtered = RECIPES.filter(r => r.category === category);
  filtered.forEach(r => grid.appendChild(createRecipeCard(r)));
}

/* ─── Newsletter Form ────────────────────────────────────────── */
function initNewsletterForms() {
  const forms = document.querySelectorAll('.newsletter-form, .footer-newsletter');

  forms.forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const emailInput = form.querySelector('input[type="email"]');
      const nameInput = form.querySelector('input[type="text"]');

      if (!emailInput) return;

      const email = emailInput.value.trim();

      if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showToast("🎉 You're now part of the Savory Table community!");

        if (typeof form.reset === 'function') {
          form.reset();
        } else {
          emailInput.value = '';
          if (nameInput) nameInput.value = '';
        }
      } else {
        showToast('Please enter a valid email address.');
      }
    });
  });
}

/* ─── Contact Form ───────────────────────────────────────────── */
function initContactForm() {
  const form = document.getElementById('contactForm');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    showToast("✉️ Your message has been received. We'll be in touch!");

    if (typeof form.reset === 'function') {
      form.reset();
    }
  });
}

/* ─── Scroll Reveal ──────────────────────────────────────────── */
function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    revealEls.forEach(el => el.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => observer.observe(el));
}

/* ─── Smooth Scroll to Recipes ───────────────────────────────── */
function initHeroCTA() {
  const cta = document.getElementById('heroCTA');
  if (!cta) return;
  cta.addEventListener('click', e => {
    e.preventDefault();
    const target = document.getElementById('featured');
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

/* ─── Init ───────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initModal();
  initSavePopup();
  initNewsletterForms();
  initContactForm();
  initScrollReveal();
  initHeroCTA();
  initFeaturedRecipes();
  initPopularRecipes();
  initRecipesPage();

  // Category pages
  if (document.body.classList.contains('lunch-page')) initCategoryPage('lunch');
  if (document.body.classList.contains('dinner-page')) initCategoryPage('dinner');
});

// Expose globals for inline handlers
window.openModal = openModal;
window.openSavePopup = openSavePopup;
window.closeSavePopup = closeSavePopup;
window.closeModal = closeModal;
