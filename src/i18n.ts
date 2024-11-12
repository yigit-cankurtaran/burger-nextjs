import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Move translations to separate objects for better maintainability
const trTranslations = {
  "Signature Burgers": "İkonik Burgerler",
  "Fresh Ingredients": "Taze Malzemeler",
  "Cozy Atmosphere": "Rahat Atmosfer",
  "MENU": "MENÜ",
  "ABOUT": "HAKKINDA",
  "CONTACT": "İLETİŞİM",
  "Experience culinary excellence": "Müthiş yemeklerimizi deneyimleyin",
  "Our Menu": "Menümüz",
  "Signature Dish": "İmza Yemek",
  "About Us": "Hakkımızda",
  "We are a cafe & bistro dedicated to providing the best experience in the city.": "Şehirdeki en iyi deneyimi sunmaya adanmış bir cafe ve bistroyuz.",
  "Our chefs use only the freshest ingredients to create mouth-watering dishes that will leave you coming back for more.": "Şeflerimiz, sizi tekrar tekrar geri getirecek ağız sulandıran yemekler yaratmak için sadece en taze malzemeleri kullanır.",
  "Contact Us": "Bize Ulaşın",
  "Have any questions or feedback? We'd love to hear from you!": "Herhangi bir sorunuz veya geri bildiriminiz mi var? Sizden haber almak isteriz!",
  "2024 Yiğit Cankurtaran. All rights reserved.": "2024 Yiğit Cankurtaran. Tüm hakları saklıdır.",
  // Burger descriptions
  "2 pieces of Chef's Buffalo meatballs, 2 pieces of cheddar cheese, caramelized mushrooms, caramelized onions, french fries, special Chef's sauce": "2 adet Chef's Buffalo köftesi, 2 adet cheddar peyniri, karamelize mantar, karamelize soğan, patates kızartması, özel Chef's sos",
  "Buffalo meatballs cooked on charcoal fire, onion rings, tomato slices, 40 gr. tenderloin, barbecue sauce": "Kömür ateşinde suyu hapsedilerek pişmiş Buffalo köftesi, halka soğan, domates dilimleri, 40 gr. löp antrikot, barbekü sos",
  "150 gr. crispy chicken thigh, curly lettuce, onion rings, tomato slices, crispy pickles, ranch sauce": "150 gr. çıtır tavuk but, kıvırcık marul, halka soğan, dilim domatesler, çıtır salatalık turşusu, ranch sos",
  "Homemade meatballs, curly lettuce, onion rings, diced tomato slices, cheddar cheese, sauce, sliced pickles, ranch sauce": "Ev yapımı köfte, kıvırcık, halka soğan, küp domates dilimleri, cheddar peyniri, sos, dilimlenmiş salatalık turşusu, ranch sos",
  "Chef's meatballs, curly lettuce, onion rings, tomato slices, pickles, ranch sauce": "Chefs köfte, kıvırcık marul, halka soğan, domates dilimleri, salatalık turşusu, ranch sos",
  "Butcher's meatballs, butcher's sausage, onion rings, two slices of tomato, sweet red pepper, barbecue sauce": "Kasap köfte, kasap sucuk, soğan halkaları, iki dilim domates, tatlı kapya biber, barbekü sos",
  "Homemade meatballs, kolot cheese, onion rings, tomato slices, curly lettuce, ranch sauce": "Ev köftesi, kolot peyniri, halka soğan, domates dilimleri, kıvırcık marul, ranch sos",
  "Chef's meatballs, cheddar cheese, ranch sauce, ham, egg": "Chefs köfte, cheddar peyniri, ranch sos, jambon, yumurta",
  "Meatballs cooked on charcoal, lettuce pieces, onion rings, tomato slices, pickle pieces, grilled halloumi cheese, mixed sauce": "Kömürde demlenerek pişmiş köfte, marul parçaları, soğan halkaları, domates dilimleri, kornişon turşu parçaları, közde kızarmış hellim peyniri, mix sos",
  "Chef's meatballs mixed with Mexican spices, broken onion rings, curly lettuce, tomato slices, red pepper, jalapeno pepper, hot sauce": "Meksika baharatlarıyla harmanlanmış Chef's köftesi, parçalanmış soğan halkaları, kıvırcık marul, dilim domates, kapya biber jalapeno biber, hot sos",
  "Butcher's baton sausage, curly lettuce, tomato slices, diced pickles, onion rings, matchstick potato chips, ranch sauce": "Kasap baton sucuk, kıvırcık marul, domates dilimleri, küp kornişon turşu, halka soğan, kibrit patates cips, ranch sos",
  "Grilled chicken thigh with barbecue flavor, curly lettuce, onion rings, tomato slices, pickles, ranch sauce": "Mangal tadında 150 gr. ızgara tavuk but, kıvırcık marul, halka soğan, domates dilimleri, kornişon turşu, ranch sos",
  // Page title and meta descriptions
  "NuZZret Cafe & Bistro | Pizza & Burgers": "NuZZret Cafe & Bistro | Pizza & Burger",
  "Premium pizza and gourmet burgers at NuZZret Cafe & Bistro. Experience culinary excellence in a cozy atmosphere.": "NuZZret Cafe & Bistro'da premium pizza ve gurme burgerler. Rahat bir atmosferde muhteşem lezzetler.",
  "pizza, burger, cafe, bistro, restaurant, food, Bolu, bolu": "pizza, burger, kafe, bistro, restoran, yemek, Bolu, bolu",
  "Premium pizza and gourmet burgers in a cozy atmosphere": "Rahat bir atmosferde premium pizza ve gurme burgerler",
  // Pizza descriptions
  "Signature Pizzas": "İkonik Pizzalar",
  "Beef salami, beef sausage, mushrooms": "Dana salam, dana sucuk, mantar",
  "Mozzarella cheese, kaşar cheese, parmesan cheese, cheddar cheese": "Mozzarella peyniri, kaşar peyniri, parmesan peyniri, cheddar peyniri",
  "Mozzarella cheese, tomato sauce, sausage": "Mozzarella peyniri, domates sosu, sucuk",
  "Chicken with barbecue sauce, red pepper, green pepper": "Barbekü soslu tavuk, kırmızı biber, yeşil biber",
  "Mozzarella cheese, tomato sauce, tuna fish, corn": "Mozzarella peyniri, domates sosu, ton balığı, mısır",
  "Mozzarella cheese, tomato sauce": "Mozzarella peyniri, domates sosu",
  "Tomato sauce, mozzarella cheese, mushrooms, corn": "Domates sosu, mozzarella peyniri, mantar, mısır",
  "Base sauce, mozzarella cheese, red pepper, green pepper, french fries, garlic mix sauce": "Ana sos, mozzarella peyniri, kırmızı biber, yeşil biber, patates kızartması, sarımsaklı karışık sos"
};

// English translations are the same as the keys
const enTranslations = Object.fromEntries(
  Object.keys(trTranslations).map(key => [key, key])
);

const frTranslations = {
  "Signature Burgers": "Burgers Signature",
  "Fresh Ingredients": "Ingrédients Frais",
  "Cozy Atmosphere": "Atmosphère Conviviale",
  "MENU": "MENU",
  "ABOUT": "À PROPOS",
  "CONTACT": "CONTACT",
  "Experience culinary excellence": "Découvrez l'excellence culinaire",
  "Our Menu": "Notre Menu",
  "Signature Dish": "Plat Signature",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "About Us": "À Propos de Nous",
  "We are a cafe & bistro dedicated to providing the best experience in the city.": "Nous sommes un café et un bistro dédiés à offrir la meilleure expérience en ville.",
  "Our chefs use only the freshest ingredients to create mouth-watering dishes that will leave you coming back for more.": "Nos chefs n'utilisent que les ingrédients les plus frais pour créer des plats délicieux qui vous feront revenir encore et encore.",
  "Contact Us": "Contactez-Nous",
  "Have any questions or feedback? We'd love to hear from you!": "Vous avez des questions ou des commentaires ? Nous serions ravis de vous entendre !",
  "2024 Yiğit Cankurtaran. All rights reserved.": "2024 Yiğit Cankurtaran. Tous droits réservés.",
  "2 pieces of Chef's Buffalo meatballs, 2 pieces of cheddar cheese, caramelized mushrooms, caramelized onions, french fries, special Chef's sauce": "2 pièces de boulettes de viande de Buffalo du Chef, 2 pièces de fromage cheddar, champignons caramélisés, oignons caramélisés, frites, sauce spéciale du Chef",
  "Buffalo meatballs cooked on charcoal fire, onion rings, tomato slices, 40 gr. tenderloin, barbecue sauce": "Boulettes de viande de Buffalo cuites au feu de charbon, rondelles d'oignon, tranches de tomate, 40 gr. de filet mignon, sauce barbecue",
  "150 gr. crispy chicken thigh, curly lettuce, onion rings, tomato slices, crispy pickles, ranch sauce": "150 gr. de cuisse de poulet croustillante, laitue frisée, rondelles d'oignon, tranches de tomate, cornichons croustillants, sauce ranch",
  "Homemade meatballs, curly lettuce, onion rings, diced tomato slices, cheddar cheese, sauce, sliced pickles, ranch sauce": "Boulettes de viande maison, laitue frisée, rondelles d'oignon, tranches de tomate en dés, fromage cheddar, sauce, cornichons tranchés, sauce ranch",
  "Chef's meatballs, curly lettuce, onion rings, tomato slices, pickles, ranch sauce": "Boulettes de viande du Chef, laitue frisée, rondelles d'oignon, tranches de tomate, cornichons, sauce ranch",
  "Butcher's meatballs, butcher's sausage, onion rings, two slices of tomato, sweet red pepper, barbecue sauce": "Boulettes de viande du boucher, saucisse du boucher, rondelles d'oignon, deux tranches de tomate, poivron rouge doux, sauce barbecue",
  "Homemade meatballs, kolot cheese, onion rings, tomato slices, curly lettuce, ranch sauce": "Boulettes de viande maison, fromage kolot, rondelles d'oignon, tranches de tomate, laitue frisée, sauce ranch",
  "Chef's meatballs, cheddar cheese, ranch sauce, ham, egg": "Boulettes de viande du Chef, fromage cheddar, sauce ranch, jambon, œuf",
  "Meatballs cooked on charcoal, lettuce pieces, onion rings, tomato slices, pickle pieces, grilled halloumi cheese, mixed sauce": "Boulettes de viande cuites au charbon, morceaux de laitue, rondelles d'oignon, tranches de tomate, morceaux de cornichon, fromage halloumi grillé, sauce mixte",
  "Chef's meatballs mixed with Mexican spices, broken onion rings, curly lettuce, tomato slices, red pepper, jalapeno pepper, hot sauce": "Boulettes de viande du Chef mélangées avec des épices mexicaines, rondelles d'oignon cassées, laitue frisée, tranches de tomate, poivron rouge, piment jalapeno, sauce piquante",
  "Butcher's baton sausage, curly lettuce, tomato slices, diced pickles, onion rings, matchstick potato chips, ranch sauce": "Saucisse bâton du boucher, laitue frisée, tranches de tomate, cornichons en dés, rondelles d'oignon, chips de pommes de terre allumettes, sauce ranch",
  "Grilled chicken thigh with barbecue flavor, curly lettuce, onion rings, tomato slices, pickles, ranch sauce": "Cuisse de poulet grillée avec saveur barbecue, laitue frisée, rondelles d'oignon, tranches de tomate, cornichons, sauce ranch",


  "NuZZret Cafe & Bistro | Pizza & Burgers": "NuZZret Cafe & Bistro | Pizza & Burgers",
  "Premium pizza and gourmet burgers at NuZZret Cafe & Bistro. Experience culinary excellence in a cozy atmosphere.": "Pizzas premium et burgers gastronomiques chez NuZZret Cafe & Bistro. Découvrez l'excellence culinaire dans une ambiance chaleureuse.",
  "pizza, burger, cafe, bistro, restaurant, food, Bolu, bolu": "pizza, burger, café, bistro, restaurant, cuisine, Bolu, bolu",
  "Premium pizza and gourmet burgers in a cozy atmosphere": "Pizzas premium et burgers gastronomiques dans une ambiance chaleureuse",

  "Signature Pizzas": "Pizzas Signature",
  "Beef salami, beef sausage, mushrooms": "Salami de bœuf, saucisse de bœuf, champignons",
  "Mozzarella cheese, kaşar cheese, parmesan cheese, cheddar cheese": "Fromage mozzarella, fromage kaşar, fromage parmesan, fromage cheddar",
  "Mozzarella cheese, tomato sauce, sausage": "Fromage mozzarella, sauce tomate, saucisse",
  "Chicken with barbecue sauce, red pepper, green pepper": "Poulet sauce barbecue, poivron rouge, poivron vert",
  "Mozzarella cheese, tomato sauce, tuna fish, corn": "Fromage mozzarella, sauce tomate, thon, maïs",
  "Mozzarella cheese, tomato sauce": "Fromage mozzarella, sauce tomate",
  "Tomato sauce, mozzarella cheese, mushrooms, corn": "Sauce tomate, fromage mozzarella, champignons, maïs",
  "Base sauce, mozzarella cheese, red pepper, green pepper, french fries, garlic mix sauce": "Sauce de base, fromage mozzarella, poivron rouge, poivron vert, frites, sauce à l'ail mixte"
}

const ruTranslations = {
  "Signature Burgers": "Фирменные Бургеры",
  "Fresh Ingredients": "Свежие Ингредиенты",
  "Cozy Atmosphere": "Уютная Атмосфера",
  "MENU": "МЕНЮ",
  "ABOUT": "О НАС",
  "CONTACT": "КОНТАКТЫ",
  "Experience culinary excellence": "Испытайте кулинарное совершенство",
  "Our Menu": "Наше Меню",
  "Signature Dish": "Фирменное Блюдо",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "About Us": "О Нас",
  "We are a cafe & bistro dedicated to providing the best experience in the city.": "Мы - кафе и бистро, посвященные предоставлению лучшего опыта в городе.",
  "Our chefs use only the freshest ingredients to create mouth-watering dishes that will leave you coming back for more.": "Наши повара используют только самые свежие ингредиенты для создания аппетитных блюд, которые заставят вас возвращаться снова и снова.",
  "Contact Us": "Свяжитесь с Нами",
  "Have any questions or feedback? We'd love to hear from you!": "Есть вопросы или отзывы? Мы будем рады услышать вас!",
  "2024 Yiğit Cankurtaran. All rights reserved.": "2024 Yiğит Cankurtaran. Все права защищены.",
  "2 pieces of Chef's Buffalo meatballs, 2 pieces of cheddar cheese, caramelized mushrooms, caramelized onions, french fries, special Chef's sauce": "2 кусочка буйволиных котлет от шефа, 2 кусочка сыра чеддер, карамелизированные грибы, карамелизированный лук, картофель фри, специальный соус от шефа",
  "Buffalo meatballs cooked on charcoal fire, onion rings, tomato slices, 40 gr. tenderloin, barbecue sauce": "Буйволиные котлеты, приготовленные на углях, кольца лука, ломтики помидора, 40 гр. вырезки, барбекю соус",
  "150 gr. crispy chicken thigh, curly lettuce, onion rings, tomato slices, crispy pickles, ranch sauce": "150 гр. хрустящего куриного бедра, кудрявая салат, кольца лука, ломтики помидора, хрустящие огурцы, соус ранч",
  "Homemade meatballs, curly lettuce, onion rings, diced tomato slices, cheddar cheese, sauce, sliced pickles, ranch sauce": "Домашние котлеты, кудрявая салат, кольца лука, нарезанные кубиками ломтики помидора, сыр чеддер, соус, нарезанные огурцы, соус ранч",
  "Chef's meatballs, curly lettuce, onion rings, tomato slices, pickles, ranch sauce": "Котлеты от шефа, кудрявая салат, кольца лука, ломтики помидора, огурцы, соус ранч",
  "Butcher's meatballs, butcher's sausage, onion rings, two slices of tomato, sweet red pepper, barbecue sauce": "Котлеты мясника, колбаса мясника, кольца лука, два ломтика помидора, сладкий красный перец, барбекю соус",
  "Homemade meatballs, kolot cheese, onion rings, tomato slices, curly lettuce, ranch sauce": "Домашние котлеты, сыр колот, кольца лука, ломтики помидора, кудрявая салат, соус ранч",
  "Chef's meatballs, cheddar cheese, ranch sauce, ham, egg": "Котлеты от шефа, сыр чеддер, соус ранч, ветчина, яйцо",
  "Meatballs cooked on charcoal, lettuce pieces, onion rings, tomato slices, pickle pieces, grilled halloumi cheese, mixed sauce": "Котлеты, приготовленные на углях, кусочки салата, кольца лука, ломтики помидора, кусочки огурца, жареный халлуми, смешанный соус",
  "Chef's meatballs mixed with Mexican spices, broken onion rings, curly lettuce, tomato slices, red pepper, jalapeno pepper, hot sauce": "Котлеты от шефа, смешанные с мексиканскими специями, сломанные кольца лука, кудрявая салат, ломтики помидора, красный перец, перец халапеньо, острый соус",
  "Butcher's baton sausage, curly lettuce, tomato slices, diced pickles, onion rings, matchstick potato chips, ranch sauce": "Колбаса мясника, кудрявая салат, ломтики помидора, нарезанные кубиками огурцы, кольца лука, картофельные чипсы, соус ранч",
  "Grilled chicken thigh with barbecue flavor, curly lettuce, onion rings, tomato slices, pickles, ranch sauce": "Куриное бедро на гриле с вкусом барбекю, кудрявая салат, кольца лука, ломтики помидора, огурцы, соус ранч",


  "NuZZret Cafe & Bistro | Pizza & Burgers": "NuZZret Cafe & Bistro | Пицца и Бургеры",
  "Premium pizza and gourmet burgers at NuZZret Cafe & Bistro. Experience culinary excellence in a cozy atmosphere.": "Премиальная пицца и изысканные бургеры в NuZZret Cafe & Bistro. Испытайте кулинарное совершенство в уютной атмосфере.",
  "pizza, burger, cafe, bistro, restaurant, food, Bolu, bolu": "пицца, бургер, кафе, бистро, ресторан, еда, болу",
  "Premium pizza and gourmet burgers in a cozy atmosphere": "Премиальная пицца и изысканные бургеры в уютной атмосфере",

  "Signature Pizzas": "Фирменные Пиццы",
  "Beef salami, beef sausage, mushrooms": "Говяжья салями, говяжья колбаса, грибы",
  "Mozzarella cheese, kaşar cheese, parmesan cheese, cheddar cheese": "Сыр моцарелла, сыр кашар, сыр пармезан, сыр чеддер",
  "Mozzarella cheese, tomato sauce, sausage": "Сыр моцарелла, томатный соус, колбаса",
  "Chicken with barbecue sauce, red pepper, green pepper": "Курица в соусе барбекю, красный перец, зеленый перец",
  "Mozzarella cheese, tomato sauce, tuna fish, corn": "Сыр моцарелла, томатный соус, тунец, кукуруза",
  "Mozzarella cheese, tomato sauce": "Сыр моцарелла, томатный соус",
  "Tomato sauce, mozzarella cheese, mushrooms, corn": "Томатный соус, сыр моцарелла, грибы, кукуруза",
  "Base sauce, mozzarella cheese, red pepper, green pepper, french fries, garlic mix sauce": "Базовый соус, сыр моцарелла, красный перец, зеленый перец, картофель фри, чесночный микс соус"
}

const arTranslations = {
  "Signature Burgers": "برجر مميز",
  "Fresh Ingredients": "مكونات طازجة",
  "Cozy Atmosphere": "جو مريح",
  "MENU": "قائمة الطعام",
  "ABOUT": "حول",
  "CONTACT": "اتصل",
  "Experience culinary excellence": "تجربة التميز في الطهي",
  "Our Menu": "قائمتنا",
  "Signature Dish": "طبق مميز",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.": "لوريم إيبسوم دولار سيت أميت، كونسيكتيتور أديبيسشينغ إيليت.",
  "About Us": "معلومات عنا",
  "We are a cafe & bistro dedicated to providing the best experience in the city.": "نحن مقهى وبيسترو مكرسان لتقديم أفضل تجربة في المدينة.",
  "Our chefs use only the freshest ingredients to create mouth-watering dishes that will leave you coming back for more.": "يستخدم طهاتنا فقط المكونات الطازجة لخلق أطباق لذيذة ستجعلك تعود للمزيد.",
  "Contact Us": "اتصل بنا",
  "Have any questions or feedback? We'd love to hear from you!": "هل لديك أي أسئلة أو ملاحظات؟ نود أن نسمع منك!",
  "2024 Yiğit Cankurtaran. All rights reserved.": "2024 Yiğit Cankurtaran. جميع الحقوق محفوظة.",
  "2 pieces of Chef's Buffalo meatballs, 2 pieces of cheddar cheese, caramelized mushrooms, caramelized onions, french fries, special Chef's sauce": "قطعتان من كرات لحم الجاموس الخاصة بالشيف، قطعتان من جبن الشيدر، فطر مكرمل، بصل مكرمل، بطاطس مقلية، صلصة خاصة بالشيف",
  "Buffalo meatballs cooked on charcoal fire, onion rings, tomato slices, 40 gr. tenderloin, barbecue sauce": "كرات لحم الجاموس المطبوخة على الفحم، حلقات البصل، شرائح الطماطم، 40 غرام من لحم الخاصرة، صلصة باربيكيو",
  "150 gr. crispy chicken thigh, curly lettuce, onion rings, tomato slices, crispy pickles, ranch sauce": "150 غرام من فخذ الدجاج المقرمش، خس مجعد، حلقات البصل، شرائح الطماطم، مخللات مقرمشة، صلصة رانش",
  "Homemade meatballs, curly lettuce, onion rings, diced tomato slices, cheddar cheese, sauce, sliced pickles, ranch sauce": "كرات لحم منزلية، خس مجعد، حلقات البصل، شرائح الطماطم المقطعة، جبن شيدر، صلصة، مخللات مقطعة، صلصة رانش",
  "Chef's meatballs, curly lettuce, onion rings, tomato slices, pickles, ranch sauce": "كرات لحم الشيف، خس مجعد، حلقات البصل، شرائح الطماطم، مخللات، صلصة رانش",
  "Butcher's meatballs, butcher's sausage, onion rings, two slices of tomato, sweet red pepper, barbecue sauce": "كرات لحم الجزار، سجق الجزار، حلقات البصل، شريحتان من الطماطم، فلفل أحمر حلو، صلصة باربيكيو",
  "Homemade meatballs, kolot cheese, onion rings, tomato slices, curly lettuce, ranch sauce": "كرات لحم منزلية، جبن كولوت، حلقات البصل، شرائح الطماطم، خس مجعد، صلصة رانش",
  "Chef's meatballs, cheddar cheese, ranch sauce, ham, egg": "كرات لحم الشيف، جبن شيدر، صلصة رانش، لحم خنزير، بيضة",
  "Meatballs cooked on charcoal, lettuce pieces, onion rings, tomato slices, pickle pieces, grilled halloumi cheese, mixed sauce": "كرات لحم مطبوخة على الفحم، قطع خس، حلقات البصل، شرائح الطماطم، قطع مخلل، جبن حلومي مشوي، صلصة مختلطة",
  "Chef's meatballs mixed with Mexican spices, broken onion rings, curly lettuce, tomato slices, red pepper, jalapeno pepper, hot sauce": "كرات لحم الشيف الممزوجة بالتوابل المكسيكية، حلقات البصل المكسورة، خس مجعد، شرائح الطماطم، فلفل أحمر، فلفل هالبينو، صلصة حارة",
  "Butcher's baton sausage, curly lettuce, tomato slices, diced pickles, onion rings, matchstick potato chips, ranch sauce": "سجق باتون الجزار، خس مجعد، شرائح الطماطم، مخللات مقطعة، حلقات البصل، رقائق البطاطس، صلصة رانش",
  "Grilled chicken thigh with barbecue flavor, curly lettuce, onion rings, tomato slices, pickles, ranch sauce": "فخذ دجاج مشوي بنكهة الباربيكيو، خس مجعد، حلقات البصل، شرائح الطماطم، مخللات، صلصة رانش",

  "NuZZret Cafe & Bistro | Pizza & Burgers": "NuZZret مقهى وبيسترو | بيتزا وبرجر",
  "Premium pizza and gourmet burgers at NuZZret Cafe & Bistro. Experience culinary excellence in a cozy atmosphere.": "بيتزا فاخرة وبرجر غورميه في NuZZret مقهى وبيسترو. استمتع بالتميز في الطهي في أجواء مريحة.",
  "pizza, burger, cafe, bistro, restaurant, food, Bolu": "بيتزا, برجر, مقهى, بيسترو, مطعم, طعام, بولو",
  "Premium pizza and gourmet burgers in a cozy atmosphere": "بيتزا فاخرة وبرجر غورميه في أجواء مريحة",

  "Signature Pizzas": "بيتزا مميزة",
  "Beef salami, beef sausage, mushrooms": "سلامي لحم البقر، نقانق لحم البقر، فطر",
  "Mozzarella cheese, kaşar cheese, parmesan cheese, cheddar cheese": "جبنة موزاريلا، جبنة قشقوان، جبنة بارميزان، جبنة شيدر",
  "Mozzarella cheese, tomato sauce, sausage": "جبنة موزاريلا، صلصة طماطم، نقانق",
  "Chicken with barbecue sauce, red pepper, green pepper": "دجاج مع صلصة الباربكيو، فلفل أحمر، فلفل أخضر",
  "Mozzarella cheese, tomato sauce, tuna fish, corn": "جبنة موزاريلا، صلصة طماطم، سمك التونة، ذرة",
  "Mozzarella cheese, tomato sauce": "جبنة موزاريلا، صلصة طماطم",
  "Tomato sauce, mozzarella cheese, mushrooms, corn": "صلصة طماطم، جبنة موزاريلا، فطر، ذرة",
  "Base sauce, mozzarella cheese, red pepper, green pepper, french fries, garlic mix sauce": "صلصة أساسية، جبنة موزاريلا، فلفل أحمر، فلفل أخضر، بطاطس مقلية، صلصة الثوم المختلطة"
}

const resources = {
  tr: {
    translation: trTranslations
  },
  en: {
    translation: enTranslations
  },
  fr: {
    translation: frTranslations
  },
  ru: {
    translation: ruTranslations
  },
  ar: {
    translation: arTranslations
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'tr',
    debug: false, // Set to false in production
    interpolation: {
      escapeValue: false
    },
    // Optimize language detection
    detection: {
      order: ['localStorage'], // removed navigator for edge requests
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
      cookieMinutes: 365 * 24 * 60, // caching for 1 year
    },
    // Load only default language at start
    preload: ['tr'],
    load: 'languageOnly',
    ns: ['translation'],
    defaultNS: 'translation',
    react: {
      useSuspense: false
    },
    // Reduce network requests
    partialBundledLanguages: true,
    supportedLngs: ['en', 'tr', 'fr', 'ru', 'ar']
  });

export default i18n;
