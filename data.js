export const cars = [
    // SUVs
    {
      id: 1, brand: "Toyota", model: "RAV4", year: 2022, mileage: 120, maxSpeed: 180,
      price: 2800000, oldPrice: 2950000, image: "toyota-rav4.jpg", type: "SUV",
      title: "Toyota RAV4 - Adventure Awaits", isNew: true, location: "Denver"
    },
    {
      id: 2, brand: "Ford", model: "Explorer", year: 2021, mileage: 200, maxSpeed: 210,
      price: 3100000, oldPrice: 3250000, image: "ford-explorer.jpg", type: "SUV",
      title: "Ford Explorer - Built for the Wild", isNew: false, location: "Chicago"
    },
    {
      id: 3, brand: "Honda", model: "CR-V", year: 2023, mileage: 90, maxSpeed: 190,
      price: 3000000, oldPrice: 3150000, image: "honda-crv.jpg", type: "SUV",
      title: "Honda CR-V - Comfort and Reliability", isNew: true, location: "San Francisco"
    },
    {
      id: 4, brand: "Chevrolet", model: "Tahoe", year: 2020, mileage: 150, maxSpeed: 200,
      price: 3500000, oldPrice: 3700000, image: "chevy-tahoe.jpg", type: "SUV",
      title: "Chevy Tahoe - Rugged and Ready", isNew: false, location: "Dallas"
    },
  
    // Sedans
    {
      id: 5, brand: "Nissan", model: "Altima", year: 2021, mileage: 110, maxSpeed: 190,
      price: 2400000, oldPrice: 2500000, image: "nissan-altima.jpg", type: "Sedan",
      title: "Nissan Altima - Sleek and Smart", isNew: true, location: "Miami"
    },
    {
      id: 6, brand: "Hyundai", model: "Sonata", year: 2020, mileage: 130, maxSpeed: 185,
      price: 2200000, oldPrice: 2350000, image: "hyundai-sonata.jpg", type: "Sedan",
      title: "Hyundai Sonata - Elegance Redefined", isNew: false, location: "Phoenix"
    },
    {
      id: 7, brand: "Toyota", model: "Camry", year: 2023, mileage: 80, maxSpeed: 200,
      price: 2700000, oldPrice: 2800000, image: "toyota-camry.jpg", type: "Sedan",
      title: "Toyota Camry - Confidence in Motion", isNew: true, location: "Seattle"
    },
    {
      id: 8, brand: "Kia", model: "K5", year: 2022, mileage: 90, maxSpeed: 195,
      price: 2600000, oldPrice: 2750000, image: "kia-k5.jpg", type: "Sedan",
      title: "Kia K5 - Future of Driving", isNew: true, location: "Las Vegas"
    },
  
    // Coupes
    {
      id: 9, brand: "BMW", model: "M4", year: 2021, mileage: 55, maxSpeed: 250,
      price: 7000000, oldPrice: 7200000, image: "bmw-m4.jpg", type: "Coupe",
      title: "BMW M4 - Performance Meets Style", isNew: false, location: "New York"
    },
    {
      id: 10, brand: "Audi", model: "TT", year: 2022, mileage: 40, maxSpeed: 240,
      price: 5000000, oldPrice: 5200000, image: "audi-tt.jpg", type: "Coupe",
      title: "Audi TT - Pure Driving Joy", isNew: true, location: "Los Angeles"
    },
    {
      id: 11, brand: "Mercedes", model: "C-Class Coupe", year: 2020, mileage: 75, maxSpeed: 230,
      price: 4800000, oldPrice: 5000000, image: "mercedes-ccoupe.jpg", type: "Coupe",
      title: "Mercedes C-Class Coupe - Elegant Power", isNew: false, location: "Boston"
    },
    {
      id: 12, brand: "Lexus", model: "RC", year: 2023, mileage: 30, maxSpeed: 220,
      price: 4600000, oldPrice: 4700000, image: "lexus-rc.jpg", type: "Coupe",
      title: "Lexus RC - Craftsmanship in Motion", isNew: true, location: "Atlanta"
    },
  
    // Convertibles
    {
      id: 13, brand: "Mazda", model: "MX-5", year: 2022, mileage: 60, maxSpeed: 190,
      price: 3500000, oldPrice: 3600000, image: "mazda-mx5.jpg", type: "Convertible",
      title: "Mazda MX-5 - Open-Top Freedom", isNew: true, location: "San Diego"
    },
    {
      id: 14, brand: "Porsche", model: "911 Cabriolet", year: 2021, mileage: 40, maxSpeed: 310,
      price: 10500000, oldPrice: 11000000, image: "porsche-911.jpg", type: "Convertible",
      title: "Porsche 911 Cabriolet - Wind in Your Hair", isNew: false, location: "Orlando"
    },
    {
      id: 15, brand: "Ford", model: "Mustang Convertible", year: 2020, mileage: 95, maxSpeed: 250,
      price: 4300000, oldPrice: 4500000, image: "mustang-convertible.jpg", type: "Convertible",
      title: "Mustang Convertible - Iconic Thrills", isNew: false, location: "Tampa"
    },
    {
      id: 16, brand: "Chevrolet", model: "Camaro Convertible", year: 2023, mileage: 20, maxSpeed: 245,
      price: 4600000, oldPrice: 4700000, image: "camaro-convertible.jpg", type: "Convertible",
      title: "Camaro Convertible - Wild and Free", isNew: true, location: "San Jose"
    },
  
    // Hatchbacks
    {
      id: 17, brand: "Volkswagen", model: "Golf", year: 2021, mileage: 100, maxSpeed: 180,
      price: 2300000, oldPrice: 2450000, image: "vw-golf.jpg", type: "Hatchback",
      title: "VW Golf - The Iconic Hatch", isNew: false, location: "Philadelphia"
    },
    {
      id: 18, brand: "Ford", model: "Focus", year: 2022, mileage: 70, maxSpeed: 175,
      price: 2100000, oldPrice: 2250000, image: "ford-focus.jpg", type: "Hatchback",
      title: "Ford Focus - Ready for City Life", isNew: true, location: "Austin"
    },
    {
      id: 19, brand: "Hyundai", model: "i30", year: 2023, mileage: 50, maxSpeed: 170,
      price: 2200000, oldPrice: 2300000, image: "hyundai-i30.jpg", type: "Hatchback",
      title: "Hyundai i30 - Compact and Smart", isNew: true, location: "Houston"
    },
    {
      id: 20, brand: "Honda", model: "Fit", year: 2020, mileage: 140, maxSpeed: 160,
      price: 1800000, oldPrice: 1950000, image: "honda-fit.jpg", type: "Hatchback",
      title: "Honda Fit - Small and Mighty", isNew: false, location: "Portland"
    },
  
    // Crossovers
    {
      id: 21, brand: "Nissan", model: "Rogue", year: 2022, mileage: 85, maxSpeed: 185,
      price: 2700000, oldPrice: 2800000, image: "nissan-rogue.jpg", type: "Crossover",
      title: "Nissan Rogue - Smooth Versatility", isNew: true, location: "Salt Lake City"
    },
    {
      id: 22, brand: "Kia", model: "Sportage", year: 2023, mileage: 60, maxSpeed: 190,
      price: 2900000, oldPrice: 3050000, image: "kia-sportage.jpg", type: "Crossover",
      title: "Kia Sportage - Modern Urban Drive", isNew: true, location: "Charlotte"
    },
    {
      id: 23, brand: "Mazda", model: "CX-30", year: 2021, mileage: 120, maxSpeed: 180,
      price: 2600000, oldPrice: 2700000, image: "mazda-cx30.jpg", type: "Crossover",
      title: "Mazda CX-30 - Agile City Car", isNew: false, location: "Indianapolis"
    },
    {
      id: 24, brand: "Subaru", model: "Crosstrek", year: 2020, mileage: 150, maxSpeed: 170,
      price: 2500000, oldPrice: 2650000, image: "subaru-crosstrek.jpg", type: "Crossover",
      title: "Subaru Crosstrek - Trail Ready", isNew: false, location: "Cleveland"
    },
  
    // Pickups
    {
      id: 25, brand: "Ford", model: "F-150", year: 2023, mileage: 60, maxSpeed: 200,
      price: 4500000, oldPrice: 4600000, image: "ford-f150.jpg", type: "Pickup",
      title: "Ford F-150 - Built Tough", isNew: true, location: "Detroit"
    },
    {
      id: 26, brand: "Chevrolet", model: "Silverado", year: 2021, mileage: 100, maxSpeed: 195,
      price: 4400000, oldPrice: 4550000, image: "chevy-silverado.jpg", type: "Pickup",
      title: "Chevy Silverado - Tough on Terrain", isNew: false, location: "Minneapolis"
    },
    {
      id: 27, brand: "Ram", model: "1500", year: 2022, mileage: 90, maxSpeed: 190,
      price: 4600000, oldPrice: 4700000, image: "ram-1500.jpg", type: "Pickup",
      title: "Ram 1500 - Power in Your Hands", isNew: true, location: "Nashville"
    },
    {
      id: 28, brand: "Toyota", model: "Tundra", year: 2020, mileage: 150, maxSpeed: 185,
      price: 4300000, oldPrice: 4450000, image: "toyota-tundra.jpg", type: "Pickup",
      title: "Toyota Tundra - Strength and Reliability", isNew: false, location: "El Paso"
    },
    // More SUVs
  {
    id: 29, brand: "Jeep", model: "Grand Cherokee", year: 2021, mileage: 130, maxSpeed: 200,
    price: 3700000, oldPrice: 3850000, image: "jeep-grandcherokee.jpg", type: "SUV",
    title: "Jeep Grand Cherokee - Off-road Power", isNew: false, location: "Boise"
  },
  {
    id: 30, brand: "Volkswagen", model: "Tiguan", year: 2022, mileage: 95, maxSpeed: 185,
    price: 3200000, oldPrice: 3300000, image: "vw-tiguan.jpg", type: "SUV",
    title: "VW Tiguan - Sophisticated Utility", isNew: true, location: "St. Louis"
  },

  // More Sedans
  {
    id: 31, brand: "BMW", model: "3 Series", year: 2020, mileage: 100, maxSpeed: 240,
    price: 4100000, oldPrice: 4300000, image: "bmw-3series.jpg", type: "Sedan",
    title: "BMW 3 Series - Luxury on Wheels", isNew: false, location: "Cincinnati"
  },
  {
    id: 32, brand: "Audi", model: "A4", year: 2023, mileage: 50, maxSpeed: 245,
    price: 4700000, oldPrice: 4800000, image: "audi-a4.jpg", type: "Sedan",
    title: "Audi A4 - Precision Engineering", isNew: true, location: "New Orleans"
  },

  // More Hatchbacks
  {
    id: 33, brand: "Mini", model: "Cooper", year: 2021, mileage: 70, maxSpeed: 180,
    price: 2500000, oldPrice: 2600000, image: "mini-cooper.jpg", type: "Hatchback",
    title: "Mini Cooper - Big Fun in Small Package", isNew: false, location: "Pittsburgh"
  },
  {
    id: 34, brand: "Toyota", model: "Yaris", year: 2022, mileage: 40, maxSpeed: 165,
    price: 2000000, oldPrice: 2100000, image: "toyota-yaris.jpg", type: "Hatchback",
    title: "Toyota Yaris - Efficient and Nimble", isNew: true, location: "Sacramento"
  },

  // More Coupes
  {
    id: 35, brand: "Infiniti", model: "Q60", year: 2020, mileage: 90, maxSpeed: 225,
    price: 4300000, oldPrice: 4500000, image: "infiniti-q60.jpg", type: "Coupe",
    title: "Infiniti Q60 - Bold and Beautiful", isNew: false, location: "Kansas City"
  },
  {
    id: 36, brand: "Dodge", model: "Challenger", year: 2023, mileage: 45, maxSpeed: 260,
    price: 4900000, oldPrice: 5050000, image: "dodge-challenger.jpg", type: "Coupe",
    title: "Dodge Challenger - Muscle Redefined", isNew: true, location: "Albuquerque"
  },

  // More Convertibles
  {
    id: 37, brand: "BMW", model: "Z4", year: 2021, mileage: 65, maxSpeed: 240,
    price: 5500000, oldPrice: 5700000, image: "bmw-z4.jpg", type: "Convertible",
    title: "BMW Z4 - Roadster Passion", isNew: false, location: "Columbus"
  },
  {
    id: 38, brand: "Mercedes", model: "E-Class Cabriolet", year: 2022, mileage: 35, maxSpeed: 250,
    price: 6800000, oldPrice: 6950000, image: "mercedes-ecab.jpg", type: "Convertible",
    title: "Mercedes E-Class Cabriolet - Refined Luxury", isNew: true, location: "Raleigh"
  },

  // More Crossovers
  {
    id: 39, brand: "Honda", model: "HR-V", year: 2021, mileage: 110, maxSpeed: 175,
    price: 2400000, oldPrice: 2550000, image: "honda-hrv.jpg", type: "Crossover",
    title: "Honda HR-V - Ready for Everything", isNew: false, location: "Fresno"
  },
  {
    id: 40, brand: "Toyota", model: "C-HR", year: 2023, mileage: 50, maxSpeed: 180,
    price: 2500000, oldPrice: 2600000, image: "toyota-chr.jpg", type: "Crossover",
    title: "Toyota C-HR - City Crossover with Flair", isNew: true, location: "Tucson"
  },

  // More Pickups
  {
    id: 41, brand: "GMC", model: "Sierra 1500", year: 2020, mileage: 150, maxSpeed: 185,
    price: 4400000, oldPrice: 4550000, image: "gmc-sierra.jpg", type: "Pickup",
    title: "GMC Sierra - Truck of the People", isNew: false, location: "Birmingham"
  },
  {
    id: 42, brand: "Nissan", model: "Frontier", year: 2022, mileage: 60, maxSpeed: 180,
    price: 4200000, oldPrice: 4300000, image: "nissan-frontier.jpg", type: "Pickup",
    title: "Nissan Frontier - Strength Simplified", isNew: true, location: "Anchorage"
  },

  // Mixed types to reach 50
  {
    id: 43, brand: "Tesla", model: "Model Y", year: 2023, mileage: 20, maxSpeed: 250,
    price: 5200000, oldPrice: 5300000, image: "tesla-modely.jpg", type: "SUV",
    title: "Tesla Model Y - Electric Elevation", isNew: true, location: "San Francisco"
  },
  {
    id: 44, brand: "Tesla", model: "Model 3", year: 2021, mileage: 100, maxSpeed: 260,
    price: 4700000, oldPrice: 4800000, image: "tesla-model3.jpg", type: "Sedan",
    title: "Tesla Model 3 - Drive the Future", isNew: false, location: "San Diego"
  },
  {
    id: 45, brand: "Volvo", model: "XC40", year: 2022, mileage: 90, maxSpeed: 195,
    price: 3600000, oldPrice: 3700000, image: "volvo-xc40.jpg", type: "Crossover",
    title: "Volvo XC40 - Compact Safety", isNew: true, location: "Baltimore"
  },
  {
    id: 46, brand: "Chevrolet", model: "Bolt", year: 2023, mileage: 25, maxSpeed: 160,
    price: 3100000, oldPrice: 3250000, image: "chevy-bolt.jpg", type: "Hatchback",
    title: "Chevy Bolt - Affordable Electric", isNew: true, location: "Reno"
  },
  {
    id: 47, brand: "Fiat", model: "500", year: 2020, mileage: 120, maxSpeed: 150,
    price: 1700000, oldPrice: 1850000, image: "fiat-500.jpg", type: "Hatchback",
    title: "Fiat 500 - European Charm", isNew: false, location: "Providence"
  },
  {
    id: 48, brand: "Hyundai", model: "Santa Cruz", year: 2022, mileage: 85, maxSpeed: 190,
    price: 3900000, oldPrice: 4050000, image: "hyundai-santacruz.jpg", type: "Pickup",
    title: "Santa Cruz - Crossover Meets Truck", isNew: true, location: "Oklahoma City"
  },
  {
    id: 49, brand: "Acura", model: "Integra", year: 2023, mileage: 45, maxSpeed: 220,
    price: 3200000, oldPrice: 3350000, image: "acura-integra.jpg", type: "Sedan",
    title: "Acura Integra - Precision & Prestige", isNew: true, location: "Des Moines"
  },
  {
    id: 50, brand: "Jaguar", model: "F-Type", year: 2021, mileage: 70, maxSpeed: 300,
    price: 8000000, oldPrice: 8200000, image: "jaguar-ftype.jpg", type: "Coupe",
    title: "Jaguar F-Type - Power and Grace", isNew: false, location: "Honolulu"
  }
  ];
  