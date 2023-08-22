const products = [
    {
      name: 'Calabrese Broccoli',
      image: '/images/calabrese-broccoli.jpg',
      description:
        "Discover the natural delight of Calabrese Broccoli at our online organic store. Grown with care, this vibrant green vegetable boasts a mild, earthy flavor and tender florets. Packed with essential nutrients, it's a wholesome addition to your healthy lifestyle. Savor the freshness and goodness of Calabrese Broccoli, brought straight to your doorstep from our organic farms.",
      brand: 'Vegetable',
      category: 'Vegetable',
      price: 13.00,
      countInStock: 10,
      rating: 4.5,
      numReviews: 12,
    },
    {
      name: 'Fresh Banana Fruites',
      image: '/images/banana.jpg',
      description:
        "Discover the natural goodness of our fresh organic bananas at our online store. Packed with vitamins and minerals, these ripe and delicious bananas are a perfect addition to your healthy lifestyle. Grown without synthetic pesticides or fertilizers, our organic bananas offer a burst of sweet flavor while supporting sustainable farming practices. Add these delightful fruits to your cart and enjoy a nutritious snack that's good for you and the environment.",
      brand: 'Fresh',
      category: 'Fresh',
      price: 14.00,
      countInStock: 7,
      rating: 4.0,
      numReviews: 8,
    },
    {
      name: 'White Nuts',
      image: '/images/white-nuts.jpg',
      description:
      "Discover the wholesome goodness of White Nuts at our online organic store! These nutritious and delicious nuts are a natural source of energy and provide a satisfying crunch with every bite. Packed with essential nutrients, White Nuts make a great addition to your snacks or recipes. Sourced from trusted organic farms, they're a guilt-free treat for a healthy lifestyle. Shop now and enjoy the pure, untainted flavor of nature!",
      brand: 'Millets',
      category: 'Millets',
      price: 15.00,
      countInStock: 5,
      rating: 3,
      numReviews: 12,
    },
    {
      name: 'Vegan Red Tomato',
      image: '/images/vegan-red-tomato.jpg',
      description:
      "Discover the vibrant and flavorful world of our Vegan Red Tomatoes at our online organic store. These juicy, ripe, and luscious tomatoes are grown with care, using only natural and sustainable methods. Packed with essential nutrients and free from any animal products, our Vegan Red Tomatoes are perfect for adding a burst of freshness to your salads, sandwiches, and recipes. Embrace a wholesome and compassionate lifestyle with these delicious, organically grown tomatoes.",
      brand: 'Vegetable',
      category: 'Vegetable',
      price: 17.00,
      countInStock: 11,
      rating: 5,
      numReviews: 12,
    },
    {
      name: 'Mung Bean',
      image: '/images/mung-bean.jpg',
      description:
        "Discover the goodness of Mung Beans at our online organic store! These tiny green gems are a powerhouse of nutrition and flavor. Packed with plant-based protein, fiber, and essential vitamins, Mung Beans are a versatile addition to your meals. Whether you're cooking up a hearty curry, a wholesome salad, or a nourishing soup, Mung Beans bring a delightful, earthy taste and a burst of health benefits to every dish. Sourced from trusted organic farms, our Mung Beans are a must-have for a well-rounded, eco-friendly lifestyle. Explore the world of organic goodness with Mung Beans from our online store today!",
      brand: 'Health',
      category: 'Health',
      price: 11.00,
      countInStock: 0,
      rating: 4,
      numReviews: 12,
    },
    {
      name: 'Brown Hazelnut',
      image: '/images/brown-hazelnut.jpg',
      description:
      "Discover the rich and nutty goodness of our Organic Brown Hazelnuts! Sourced from nature and cultivated with care, these hazelnuts are a delightful blend of earthy flavors and satisfying crunch. Packed with nutrients, they make for a wholesome snack or a versatile ingredient in your favorite recipes. Elevate your culinary creations with the natural essence of our Brown Hazelnuts, available now in our online organic store.",
      brand: 'Nuts',
      category: 'Nuts',
      price: 12.00,
      countInStock: 7,
      rating: 3.5,
      numReviews: 10,
    },
    {
      name: 'Eggs',
      image: '/images/eggs.jpg',
      description:
      "Discover farm-fresh goodness with our organic eggs at our online store. Our eggs come from happy, free-range hens raised without chemicals or hormones. Packed with essential nutrients, our eggs are a wholesome choice for your family's breakfast or baking needs. Support sustainable farming and enjoy the natural flavors of eggs that are good for you and the environment. Order now for a delicious and nutritious experience!",
      brand: 'Fresh',
      category: 'Fresh',
      price: 17.00,
      countInStock: 82,
      rating: 4.5,
      numReviews: 10,
    },
    {
      name: 'Bread',
      image: '/images/bread.jpg',
      description:
      "Indulge in the pure goodness of our organic bread collection. Made with the finest ingredients, our bread is a wholesome choice for your daily nourishment. Baked with care, our organic bread offers a delightful blend of taste and health, perfect for your conscious lifestyle. Explore a variety of flavors, each slice telling a story of nature's best. Elevate your meals with our organic bread, delivered straight to your doorstep.",
      brand: 'Fresh',
      category: 'Fresh',
      price: 15.00,
      countInStock: 12,
      rating: 4.5,
      numReviews: 24,
    },
    {
      name: 'Zucchini',
      image: '/images/zucchini.jpg',
      description:
      "Discover the freshness of organically grown zucchinis at our online store. Our zucchinis are cultivated with care, free from harmful chemicals, and bursting with natural flavors. Add a touch of green goodness to your meals with these nutrient-rich delights, perfect for creating wholesome dishes. Shop now and savor the taste of nature's finest zucchinis, delivered straight to your door.",
      brand: 'Health',
      category: 'Health',
      price: 11.00,
      countInStock: 12,
      rating: 4.5,
      numReviews: 8,
    },
    {
      name: 'White Hazelnut',
      image: '/images/white-hazelnut.jpg',
      description:
        "Introducing our delightful White Nuts – a premium organic treat now available at our online store! These delectable nuts offer a perfect blend of crunchy texture and natural sweetness. Sourced from the finest organic farms, White Nuts are rich in nutrients and packed with wholesome goodness. Whether enjoyed as a guilt-free snack or added to your favorite recipes, these nuts are a delicious way to elevate your healthy lifestyle. Order now and savor the pure, natural flavor of White Nuts from the comfort of your home.",
      brand: 'Nuts',
      category: 'Nuts',
      price: 12.00,
      countInStock: 12,
      rating: 4.5,
      numReviews: 8,
    },
    {
      name: 'Fresh Corn',
      image: '/images/fresh-corn.jpg',
      description:
        "Introducing our Fresh Organic Corn! Bursting with natural sweetness and vibrant flavor, our corn is carefully harvested from local organic farms. It's pesticide-free and grown using sustainable practices, ensuring you get the best quality and taste. Enjoy the goodness of farm-fresh corn in every bite. Perfect for grilling, boiling, or adding to your favorite dishes. Elevate your meals with the crisp and delicious goodness of our Fresh Organic Corn, available now at our online store.",
      brand: 'Fresh',
      category: 'Fresh',
      price: 17.00,
      countInStock: 44,
      rating: 4.5,
      numReviews: 21,
    },
    {
      name: 'Organic Almonds',
      image: '/images/organic-almonds.jpg',
      description:
        "Introducing our Organic Almonds – a delicious and nutritious treat straight from nature to your table. Grown using sustainable and eco-friendly practices, these almonds are free from synthetic pesticides and chemicals, ensuring you enjoy their pure and wholesome flavor. Packed with essential nutrients like protein, fiber, and healthy fats, our organic almonds make for a perfect snack or addition to your favorite dishes. Savor the natural goodness while supporting both your well-being and the environment. Taste the difference of truly organic almonds today!",
      brand: 'Fresh',
      category: 'Fresh',
      price: 15.00,
      countInStock: 18,
      rating: 4.5,
      numReviews: 32,
    },
    {
      name: 'Broccoli',
      image: '/images/broccoli.jpg',
      description:
        "Introducing our fresh and vibrant organic Broccoli! Grown with care and without synthetic chemicals, our Broccoli is a nutritious addition to your table. Packed with vitamins and minerals, it's perfect for creating wholesome meals. Add a pop of green goodness to your diet while supporting sustainable farming practices. Order now from our online organic store and enjoy the natural taste of health.",
      brand: 'Vegetable',
      category: 'Vegetable',
      price: 17.00,
      countInStock: 44,
      rating: 4.5,
      numReviews: 21,
    },
    {

      name: 'Zucchini Big',
      image: '/images/zucchini-big.jpg',
      description:
        "Introducing our Zucchini Big: a star product for your organic kitchen! These zucchinis are plump, vibrant, and bursting with natural goodness. Grown with care on local organic farms, they are free from harmful chemicals and pesticides. Their tender flesh and mild flavor make them a versatile ingredient for various culinary creations. From wholesome salads to delicious sautés, Zucchini Big adds a nutritious touch to every meal. Order now from our online organic store and savor the true taste of fresh, healthy produce delivered straight to your doorstep.",
      brand: 'Vegetable',
      category: 'Vegetable',
      price: 12.00,
      countInStock: 33,
      rating: 4.5,
      numReviews: 15,
    },
    {
      name: 'Onion',
      image: '/images/onion.jpg',
      description:
        "Introducing our premium Onion – a star ingredient in your kitchen! Grown with care in organic farms, our onions are full of rich flavor and essential nutrients. Add a touch of natural sweetness and a hint of pungency to your dishes. Perfect for salads, soups, and savory recipes. Sourced responsibly from local organic growers, our onions are free from harmful chemicals and pesticides. Elevate your culinary creations with the wholesome goodness of our organic onions.",
      brand: 'Vegetable',
      category: 'Vegetable',
      price: 17.00,
      countInStock: 45,
      rating: 4.5,
      numReviews: 32,
    },
    {
      name: 'Cabbage',
      image: '/images/cabbage.jpg',
      description:
        "Introducing our fresh and vibrant organic Cabbage! Grown with care on local farms, our Cabbage is a nutritious and delicious addition to your meals. Packed with vitamins and antioxidants, it's perfect for creating crunchy coleslaws, hearty soups, and flavorful stir-fries. Each head of Cabbage is hand-picked to ensure premium quality, and its earthy, crisp leaves will elevate your cooking to a new level of wholesome goodness. Shop now and savor the natural taste of health straight from our organic farm to your table.",
      brand: 'Vegetable',
      category: 'Vegetable',
      price: 17.00,
      countInStock: 17,
      rating: 4.5,
      numReviews: 32,
    },


  ]
  
  export default products
  