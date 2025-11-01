const items = [
    { id: 1, type: "bus", name: "The Jet Luxury Bus", image: "https://images.foxtv.com/static.fox13news.com/www.fox13news.com/content/uploads/2022/11/932/470/The-Jet-Exterior.jpg?ve=1&tl=1" },
    { id: 2, type: "bike", name: "The Mont Ventoux by bike", image: "https://www.crillonlebrave.com/wp-content/uploads/sites/4/2024/09/crillon-le-brave-3-1500x1000.jpg" },
    { id: 3, type: "motorcycle", name: "2026 Honda Gold Wing Trike", image: "https://i.ytimg.com/vi/B9-LAtrBx10/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCMCBN-kFXwYxs2upmCDAX_c9yu0g" },
    { id: 4, type: "plane", name: "Luxury hotel group Aman enters private jet market", image: "https://media.cnn.com/api/v1/images/stellar/prod/191107124437-01-aman-private-jet-photos.jpg?q=x_41,y_0,h_1392,w_2473,c_crop/h_833,w_1480" },
    { id: 5, type: "scooter", name: "Limited 2021 Vespa 946 Christian Dior Edition For Sale", image: "https://news.dupontregistry.com/wp-content/uploads/2024/11/dior-vespa-1.jpg" },
    { id: 6, type: "rv", name: "The Most Luxurious RVs for 2024", image: "https://www.rv.com/wp-content/uploads/2024/04/luxury-rvs-1-apr24.jpg" },
    { id: 7, type: "helicopter", name: "High Flyer | Aston Martin Custom Helicopter Revealed", image: "https://api.siennacharles.com/images/2021/05/11/blog-ach130-aston-martin-609a5e9791a81289219268.jpg" },
    { id: 8, type: "truck", name: "Best Luxury Trucks in 2025", image: "https://www.usnews.com/cmsmedia/00/88/adca9bf94df5ae52fedcf8aefaa8/2025-gmc-sierra-ev-denali-001.jpg" },
    { id: 9, type: "train", name: "Europe's stunning high-tech luxury train", image: "https://ichef.bbci.co.uk/images/ic/480xn/p0jl8m5z.jpg.webp" },
    { id: 10, type: "boat", name: "30 Most Expensive Yachts in the World", image: "https://cdn.northropandjohnson.com/uploads/cb78e590-b322-11eb-b59b-bfd1177c77f4-eclipse-exterior-do-not-use-outside-feature.jpg" },
    { id: 11, type: "car", name: "The Era of the Luxury Car Clubhouse has Arrived", image: "https://www.insidehook.com/wp-content/uploads/2022/01/audiskysphere.jpg?fit=1200%2C800" },
    { id: 12, type: "bus", name: "Double Decker Luxury Coach ! 2024 Neoplan Skyliner Exterior Tour", image: "https://i.ytimg.com/vi/-04h1dSiVHc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDwic7Kyq_hqJeT8hr4I-c8CgYlQQ" },
    { id: 13, type: "bike", name: "Royalty-Free photo: Black and White Bicycle Beside Post", image: "https://i1.pickpik.com/photos/788/272/843/architecture-bicycle-bike-building-preview.jpg" },
    { id: 14, type: "motorcycle", name: "The Best Motorcycles for Riding Across the Country", image: "https://hips.hearstapps.com/hmg-prod/images/p90451698-highres-64a51227d3299.jpg?crop=0.706xw:0.705xh;0.0155xw,0.158xh" },
    { id: 15, type: "plane", name: "Best Luxury Private Jets 2024 - Comparison", image: "https://flyvolato.com/wp-content/uploads/2023/12/global-5500-exterior.png" },
    { id: 16, type: "scooter", name: "2026 Yamaha XMAX 300 – The Luxury Scooter That DESTROYS Motorcycles?!", image: "https://i.ytimg.com/vi/nr4uwJVp0Ls/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDy9k29wnp1r8Nz0Xz1C04nHW2cUA" },
    { id: 17, type: "rv", name: "These five 'land yachts' show how luxurious RVs have become", image: "https://canadianfamilyoffices.com/app/uploads/2024/09/MarchiMobile-RV-exterior-1.jpg" },
    { id: 18, type: "helicopter", name: "Flexjet's Sikorsky S-76: Redefining Luxury Helicopter Travel", image: "https://media.assettype.com/resident%2F2024-11-08%2Fupd9zuty%2FFlexjet-Sikorsky-S-76-exterior.jpg?rect=0%2C85%2C7338%2C4128&w=480&auto=format%2Ccompress&fit=max" },
    { id: 19, type: "truck", name: "Best Luxury Trucks in 2025", image: "https://www.usnews.com/cmsmedia/4c/1b/e4bb29b94bdb883c5bbd283b7e37/2024-gmc-sierra-2500-hd-denali-ultimate-020.jpg" },
    { id: 20, type: "train", name: "11 most luxurious train rides", image: "https://media.cnn.com/api/v1/images/stellar/prod/140902120029-seven-stars-exterior.jpg?q=w_1500,h_994,x_0,y_0,c_fill/h_447" },
    { id: 21, type: "boat", name: "Sunseeker 42M Ocean: Exclusive new details of superyacht project", image: "https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/18/2020/09/Sunseeker-Ocean-Club-42-yacht-exterior-hero-920x534.jpg" },
    { id: 22, type: "car", name: "Meet the New Luxury Electric Car That Finally Rivals Tesla", image: "https://media.architecturaldigest.com/photos/5fb40417d110d0e102c1ebc3/master/w_1600%2Cc_limit/lucid-air-exterior-08.jpg" },
    { id: 23, type: "bus", name: "Our Fleet - Coachman Luxury Transport", image: "https://coachmanluxury.com/wp-content/uploads/2019/06/Mini-Shuttle-Exterior-view.png" },
    { id: 24, type: "bike", name: "Luxury bicycle Images - Free Download on Freepik", image: "https://img.freepik.com/free-photo/bicycle-outdoors-street_23-2148889112.jpg?semt=ais_hybrid&w=740&q=80" },
    { id: 25, type: "motorcycle", name: "Harley Davidson Bobber, 2018, luxury motorcycle, exterior, new", image: "https://w0.peakpx.com/wallpaper/449/311/HD-wallpaper-harley-davidson-bobber-2018-luxury-motorcycle-exterior-new-motorcycles.jpg" },
    { id: 26, type: "plane", name: "The 7 Best New Private Jets Hitting the Skies in 2023", image: "https://robbreport.com/wp-content/uploads/2023/04/Lead-Screen-Shot-2023-04-19-at-9.26.46-AM.jpg" },
    { id: 27, type: "scooter", name: "2022 Yamaha TMAX 560 Tech MAX Review", image: "https://www.webbikeworld.com/wp-content/uploads/2023/01/web_bike_wrold_Yamaha_Tmax_560_tech_max_scooter_review_01.jpg" },
    { id: 28, type: "rv", name: "The Most Luxurious RVs for 2024 - RV.com", image: "https://www.rv.com/wp-content/uploads/2024/04/luxury-rvs-4-apr24.jpg" },
    { id: 29, type: "helicopter", name: "Luxury air miles: Hill Helicopters aims for new heights - DEVELOP3D", image: "https://develop3d.com/wp-content/uploads/2022/08/Hill-helicopters_HX50_Exterior_4-1024x576.jpg" },
    { id: 30, type: "truck", name: "GMC Sierra 1500 Denali | Luxury Pickup Truck | GMC", image: "https://www.gmc.com/content/dam/gmc/na/us/english/index/vehicles/2026/trucks/sierra-ld/denali/masthead/my26-sierra-1500-denali-masthead-1920x1440-26PGSRLD99027.jpg?imwidth=1920" },
    { id: 31, type: "train", name: "Around the World By Luxury Train' Covers 13 Countries in 80 Days", image: "https://www.travelandleisure.com/thmb/D6z1tbDeRJrDIt0KaxpONyPx7Vs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-header-eastern-oriental-express-WRLDTRAINRIDE1023-2a82e2b9e4b64e06b51b2f31ab7bcf38.jpg" },
    { id: 32, type: "boat", name: "Azimut Grande 35 Metri", image: "https://alliedyachting.com/wp-content/uploads/2024/07/azimut-grande-35-metri-2021-for-Sale-Main.jpg" },
    { id: 33, type: "car", name: "GENESIS G90 — Luxury Fullsize Sedan | GENESIS", image: "https://www.genesis.com/content/dam/genesis-p2/worldwide/assets/models/g90/24my/exterior/genesis-ww-g90-exterior-cover-dark-small.jpg" },
    { id: 34, type: "bus", name: "Home - Custom Luxury Motorcoach", image: "https://libertycoach.com/wp-content/uploads/2025/02/liberty-coach-showtime-915-exterior-news.jpg" },
    { id: 35, type: "bike", name: "Luxury bicycle Images - Free Download on Freepik", image: "https://img.freepik.com/free-photo/bicycle-outdoors-street_23-2148889091.jpg?semt=ais_hybrid&w=740&q=80" },
    { id: 36, type: "motorcycle", name: "1-of-1 #HF355: When A Ferrari V8 Meets Two Wheels In A Bespoke", image: "https://news.dupontregistry.com/wp-content/uploads/2025/07/Maxwell-Hazan-HF355-1076x570.jpg" },
    { id: 37, type: "plane", name: "2018 GULFSTREAM G650ER", image: "https://39841271.fs1.hubspotusercontent-na1.net/hubfs/39841271/N2E-WebRes-1-1.jpg" },
    { id: 38, type: "scooter", name: "Top 10 Maxi Scooters Bringing Large Displacement Power for 2025-2026", image: "https://i.ytimg.com/vi/UrvZv_tCRjA/maxresdefault.jpg" },
    { id: 39, type: "rv", name: "These five 'land yachts' show how luxurious RVs have become", image: "https://canadianfamilyoffices.com/app/uploads/2024/09/Cornerstone-RV-exterior.jpg" },
    { id: 40, type: "helicopter", name: "Mercedes-Benz Unveils Ultimate Luxury Helicopter for $8.5 Million", image: "https://www.hollywoodreporter.com/wp-content/uploads/2011/05/mercedes_benz_helicopter_2011_a_l.jpg" },
    { id: 41, type: "truck", name: "GMC Sierra 3500HD Denali", image: "https://www.carfax.com/wp-content/uploads/2024/11/gmc-sierra-3500hd-denali.jpg" },
    { id: 42, type: "train", name: "Venice Simplon-Orient-Express, A Belmond Train, Review", image: "https://www.travelandleisure.com/thmb/kfbhUn9zMYGUkzLjjyWHmSsEyPw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-header-aerial-exterior-venice-simplon-orient-express-VSOE1023-007f57ee97314cd986e0d8cbd4357ea8.jpg" },
    { id: 43, type: "boat", name: "Lürssen Azzam", image: "https://cdn.lurssen.com/images/new-build/the-yachts/azzam/header.jpg" },
    { id: 44, type: "car", name: "Take a look at Ford's futuristic vision for its luxury Lincoln brand", image: "https://image.cnbcfm.com/api/v1/image/107106096-1660848311022-Lincoln_Model_L100_Concept_Exterior_1.jpg?v=1660848332&w=1920&h=1080" },
    { id: 45, type: "bus", name: "What Makes A Quality Luxury Tour Bus? | Dreamliner Coach Company", image: "https://dreamlinercoaches.com/wp-content/uploads/2017/01/Exterior2_2000.jpg" },
    { id: 46, type: "bike", name: "cranes-beach-house-gallery-exterior-2 - Crane's Beach House", image: "https://cranesbeachhouse.com/wp-content/uploads/2017/03/cranes-beach-house-gallery-exterior-2.jpg" },
    { id: 47, type: "motorcycle", name: "The Best Motorcycles for Riding Across the Country", image: "https://hips.hearstapps.com/hmg-prod/images/honda-gold-wing-64a513e0adf85.jpg" },
    { id: 48, type: "plane", name: "Private Jet Exterior Livery Design - Lie Alonso Dynasty", image: "https://liealonso.com/wp-content/uploads/2024/04/Lie-Alonso-Dynasty_Gulfstream-G650ER_Private-Jet-Design_Exterior_Ground_Caramelo_.jpg" },
    { id: 49, type: "scooter", name: "Most Powerful Maxi Scooters of 2024-2025 (All-NEW 400+ cc Lineup Review)", image: "https://i.ytimg.com/vi/pnWnrhmWH9g/maxresdefault.jpg" },
    { id: 50, type: "rv", name: "2026 Cadillac Motorhome | Luxury RV Exterior, Performance & Interior Review", image: "https://i.ytimg.com/vi/_UkH-Us6ifw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBs1RdkOeHmy74r8h799UMRILw8SQ" },
    { id: 51, type: "helicopter", name: "Luxury air miles: Hill Helicopters aims for new heights - DEVELOP3D", image: "https://develop3d.com/wp-content/uploads/2022/08/Hill-helicopters_HX50_Exterior_4-1024x576.jpg" },
    { id: 52, type: "truck", name: "GMC Sierra 1500 Denali | Luxury Pickup Truck | GMC", image: "https://www.gmc.com/content/dam/gmc/na/us/english/index/vehicles/2026/trucks/sierra-ld/denali/exterior/my26-sierra-1500-denali-exterior-header-1280x960-26PGSRLD99054.jpg?imwidth=1920" },
    { id: 53, type: "train", name: "11 most luxurious train rides | CNN", image: "https://media.cnn.com/api/v1/images/stellar/prod/140902120029-seven-stars-exterior.jpg?q=w_1500,h_994,x_0,y_0,c_fill/h_447" },
    { id: 54, type: "boat", name: "Azimut Grande 35 Metri", image: "https://alliedyachting.com/wp-content/uploads/2024/07/azimut-grande-35-metri-2021-for-Sale-Main.jpg" },
    { id: 55, type: "car", name: "The 2023 BMW i7 proves a luxury car doesn't need internal", image: "https://cdn.arstechnica.net/wp-content/uploads/2022/11/2023-BMW-i7-exterior-1-scaled.jpg" },
    { id: 56, type: "bus", name: "Executive Luxury Bus — Coach Quarters", image: "https://images.squarespace-cdn.com/content/v1/60f5dccfb29cb158dec6b64d/1632758835560-TIRVZY3AIW5QW91ETFZZ/exterior.jpeg" },
    { id: 57, type: "bike", name: "Polestar x Allebike Collaboration Results In Limited Edition", image: "https://ik.imagekit.io/vyro/public/giltrap-articles/686d989600ee6bd25f7cbdd9bbf5f9fa5f511cc0c6db0cd0cc6c6cdc93ce893a.jpg" },
    { id: 58, type: "motorcycle", name: "Harley-Davidson Softail, Thunderbike Compact, luxury blue", image: "https://w0.peakpx.com/wallpaper/778/876/HD-wallpaper-harley-davidson-softail-thunderbike-compact-luxury-blue-motorcycle-exterior-motorcycle-tuning-american-motorcycles-harley-davidson.jpg" },
    { id: 59, type: "plane", name: "Luxury Private Jet in Hangar, Sleek Design, Polished Exterior", image: "https://thumbs.dreamstime.com/b/luxury-private-jet-hangar-sleek-design-polished-exterior-modern-aviation-technology-spacious-interior-high-end-travel-luxury-356322771.jpg" },
    { id: 60, type: "scooter", name: "2025 Yamaha XMAX Scooters Brilliant Ohio CZD300SCB", image: "https://cdpcdn.dx1app.com/products/USA/YA/2025/SCOOTER/SCOOTER/XMAX/50/MIDNIGHT_BLACK/2000000001.jpg" },
    { id: 61, type: "rv", name: "These five 'land yachts' show how luxurious RVs have become", image: "https://canadianfamilyoffices.com/app/uploads/2024/09/Cornerstone-RV-exterior.jpg" },
    { id: 62, type: "helicopter", name: "Mercedes-Benz Unveils Ultimate Luxury Helicopter for $8.5 Million", image: "https://www.hollywoodreporter.com/wp-content/uploads/2011/05/mercedes_benz_helicopter_2011_a_l.jpg" },
    { id: 63, type: "truck", name: "GMC Sierra 3500HD Denali", image: "https://www.carfax.com/wp-content/uploads/2024/11/gmc-sierra-3500hd-denali.jpg" },
    { id: 64, type: "train", name: "Venice Simplon-Orient-Express, A Belmond Train, Review", image: "https://www.travelandleisure.com/thmb/kfbhUn9zMYGUkzLjjyWHmSsEyPw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-header-aerial-exterior-venice-simplon-orient-express-VSOE1023-007f57ee97314cd986e0d8cbd4357ea8.jpg" },
    { id: 65, type: "boat", name: "Lürssen Azzam", image: "https://cdn.lurssen.com/images/new-build/the-yachts/azzam/header.jpg" },
    { id: 66, type: "car", name: "Cadillac Unveils the Escala Concept Car Before the Pebble Beach", image: "https://media.architecturaldigest.com/photos/57b745298714e5ff1d20b1b6/16:9/w_2560%2Cc_limit/2016-Cadillac-Escala-Concept-Exterior-001.jpg" },
    { id: 67, type: "bus", name: "Photos: I Tried 2 Luxury Buses Making Intercity Travel", image: "https://i.insider.com/624fb651625681001819ae4f?width=700" },
    { id: 68, type: "bike", name: "11+ Thousand Bicycle Luxury Royalty-Free Images, Stock Photos", image: "https://www.shutterstock.com/image-photo/young-woman-pushing-bicycle-outdoors-260nw-2065270859.jpg" },
    { id: 69, type: "motorcycle", name: "The Most Powerful American Motorcycle You Can Buy Today", image: "https://static0.hotcarsimages.com/wordpress/wp-content/uploads/2024/06/classic-bagger-bike.jpg?q=49&fit=contain&w=750&h=422&dpr=2" },
    { id: 70, type: "plane", name: "Top 4 Must See Private Jets: Stylish, Chic and Unique | Magellan", image: "https://magellanjets.com/wp-content/uploads/2023/10/Global-Express-XRS.jpg" },
    { id: 71, type: "scooter", name: "Most Expensive Scooters On Sale In India: BMW CE 04, Vespa 946", image: "https://images.carandbike.com/cms/articles/3204458/articles/3204545/BMW_CE_04_bb54fa9b3f.51" },
    { id: 72, type: "rv", name: "A Guide to Class A Motorhomes – RV Lifestyle Magazine", image: "https://www.rvlifemag.com/wp-content/uploads/2023/06/Holiday-Rambler_Eclipse_34J_Exterior-696x464.jpg" },
    { id: 73, type: "helicopter", name: "Airbus Helicopters H155 - JetFlo", image: "https://jetflo.com/storage/2022/11/H155_exterior-1.jpg" },
    { id: 74, type: "truck", name: "Refreshed 2025 Ram 1500 Runs Away With Full-Size Pickup Challenge", image: "https://images.cars.com/cldstatic/wp-content/uploads/ram-1500-tungsten-2025-18-exterior-front-angle.jpg" },
    { id: 75, type: "train", name: "This Luxury Train Journey in Canada Is One of the Best Ways to", image: "https://www.travelandleisure.com/thmb/sbqcQ3oeqivxmJJD4gwC1xsGwQY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-header-rocky-mountaineer-train-jasper-canada-CANNPTRAIN1224-929e2a0321ee4d608c509e71f2b5989d.jpg" },
    { id: 76, type: "boat", name: "What It's Like to Sail Aboard the Ritz-Carlton's 'Ilma' Cruise Liner", image: "https://robbreport.com/wp-content/uploads/2024/11/RYMIA-Ilma-Exterior-Marina.jpg?w=1024" },
    { id: 77, type: "car", name: "The 10 Bestselling Luxury Vehicles of 2025 (So Far)", image: "https://hips.hearstapps.com/hmg-prod/images/2024-buick-envision-avenir-exterior-102-660b030534327.jpg" },
    { id: 78, type: "bus", name: "Napaway | Premium Sleeper Coach & Charter Service", image: "https://images.squarespace-cdn.com/content/v1/66c63d515801833a7e35ed03/f71290b1-266d-40c7-ac37-a36d065ed345/Exterior+Photo.jpg" },
    { id: 79, type: "bike", name: "Luxury bicycles on display Images - Free Download on Freepik", image: "https://img.freepik.com/free-photo/beautiful-white-bicycle-outdoors_23-2148907940.jpg?semt=ais_hybrid&w=740&q=80" },
    { id: 80, type: "motorcycle", name: "Download wallpapers Harley Davidson, Softail Deluxe, 2018, blue", image: "https://i.pinimg.com/736x/9b/7e/c3/9b7ec33c2af11e217b143f3d75d07e09.jpg" },
    { id: 81, type: "plane", name: "Most Luxurious Private Jets in the World - Business Insider", image: "https://i.insider.com/5823653e691e88284e8b4fcc?width=600&format=jpeg&auto=webp" },
    { id: 82, type: "scooter", name: "2024 Yamaha XMAX Scooters Middletown New York", image: "https://cdpcdn.dx1app.com/products-private/prod/2a3e76b9-bcb5-4b32-a2e0-c0526dfe8530/6a4f976b-97b4-4b96-810a-a5ca01075631/00000000-0000-0000-0000-000000000000/94dc94b6-daf0-4f4e-af5b-b0b4007552a9/51d5ae28-6b28-4775-a024-b19600fabc4c/6000000001.jpg" },
    { id: 83, type: "rv", name: "Luxury Bus RV | Similar Galleries: Luxury Rv Bedroom , Luxury Rv", image: "https://i.pinimg.com/736x/52/0b/b5/520bb5ee410fe92613f5f37484c8c64d.jpg" },
    { id: 84, type: "helicopter", name: "The $22 Million Airbus H160 VIP Helicopter Is The Bugatti Of The", image: "https://www.maxim.com/wp-content/uploads/2021/05/ah-h160-vip-exterior__lightshadows.jpg" },
    { id: 85, type: "truck", name: "2024 Chevrolet Silverado EV: The Avalanche Resurrected (and", image: "https://images.cars.com/cldstatic/wp-content/uploads/chevrolet-chevrolet-silverado-ev-rst-2024-01-angle-blue-exterior-front-interior-oem.jpg" },
    { id: 86, type: "train", name: "Discover the World's Most Luxurious Train Journeys", image: "https://www.travelandleisure.com/thmb/D6z1tbDeRJrDIt0KaxpONyPx7Vs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/exterior-british-pullman-WESBELMOND1221-41372357af154343ab180339a7a2a7b1.jpg" },
    { id: 87, type: "boat", name: "BOAT INTERNATIONAL DESIGN & INNOVATION AWARDS 2023 The Mangusta", image: "https://www.mangustayachts.com/wp-content/uploads/2023/03/Mangusta_165REV_winner.jpg" },
    { id: 88, type: "car", name: "Is the 2023 Hyundai Palisade Calligraphy a Credible Luxury SUV", image: "https://images.cars.com/cldstatic/wp-content/uploads/hyundai-palisade-calligraphy-awd-2023-01-exterior-front-angle-scaled.jpg" },
    { id: 89, type: "bus", name: "Europe's New Luxury Night Bus Feels Like Flying Business", image: "https://www.travelandleisure.com/thmb/YfmCPW7E0RAi7Bw7Xpn_ZdrFaJU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-twiliner-bus-exterior-NIGHTBUSBEDS0925-89759cf278284c3ba1a4b130fd054baf.jpg" },
    { id: 90, type: "bike", name: "Luxury Three Wheel Bike, 20in Adult Bicycle Outdoor Nigeria | Ubuy", image: "https://m.media-amazon.com/images/I/61kF6WUtxHL._AC_SL1500_.jpg" },
    { id: 91, type: "motorcycle", name: "Honda Gold Wing GL1800 Redefined Luxury Motorcycling", image: "https://i.ebayimg.com/images/g/eTAAAeSwuBBoqBUD/s-l1200/q-90.webp" },
    { id: 92, type: "plane", name: "Private Jet Travel with Jet Linx on the Challenger 604 | Jet Linx", image: "https://www.jetlinx.com/wp-content/uploads/2023/08/N604PW_Matt_St_Clair_04-1024x683.jpg" },
    { id: 93, type: "scooter", name: "Top 10 Maxi Scooters | Best Maxi Scooters | Devitt Insurance", image: "https://www.devittinsurance.com/wp-content/uploads/2019/05/E5D39832_web.jpg" },
    { id: 94, type: "rv", name: "12 of the Most Expensive Luxury RVs You Can Buy", image: "https://www.cheapism.com/wp-content/uploads/2022/09/Exterior-of-Newell-Coach-p50-Side-and-Back.original.png" },
    { id: 95, type: "helicopter", name: "Airbus Helicopters H155 - JetFlo", image: "https://jetflo.com/storage/2022/11/H155_exterior-1.jpg" },
    { id: 96, type: "truck", name: "Country Club Pick Ups: Top Luxury Trucks for 2023 - The Engine Block", image: "https://theengineblock.com/wp-content/uploads/2023/01/2023-ram-1500-limited-elite.jpg" },
    { id: 97, type: "train", name: "The Golden Eagle: A Luxury Train Trip Across the Arctic", image: "https://good-nature-blog-uploads.s3.amazonaws.com/uploads/2021/08/WintertrainexteriorCC.jpg" },
    { id: 98, type: "boat", name: "LEXUS INTRODUCES THE NEXT EVOLUTION OF THE LEXUS LUXURY YACHT, LY680", image: "https://content.presspage.com/uploads/1850/b9ba768c-e539-4a2a-8844-5d013a787c12/1920_ly680exterior1.png?10000" },
    { id: 99, type: "car", name: "The 10 Bestselling Luxury Vehicles of 2025 (So Far)", image: "https://hips.hearstapps.com/hmg-prod/images/2024-buick-envision-avenir-exterior-102-660b030534327.jpg" },
    { id: 100, type: "bus", name: "Dreamliner Luxury Coaches Transports Celebrities During", image: "https://i.insider.com/655393ee385143459e8c85ac?width=800&format=jpeg&auto=webp" },
    { id: 101, type: "bike", name: "Luxury bicycles on display Images - Free Download on Freepik", image: "https://img.freepik.com/free-photo/beautiful-white-bicycle-outdoors_23-2148907940.jpg?semt=ais_hybrid&w=740&q=80" },
    { id: 102, type: "motorcycle", name: "Download wallpapers Harley Davidson, Softail Deluxe, 2018, blue", image: "https://i.pinimg.com/736x/9b/7e/c3/9b7ec33c2af11e217b143f3d75d07e09.jpg" },
    { id: 103, type: "plane", name: "Most Luxurious Private Jets in the World - Business Insider", image: "https://i.insider.com/5823653e691e88284e8b4fcc?width=600&format=jpeg&auto=webp" },
    { id: 104, type: "scooter", name: "2024 Yamaha XMAX Scooters Middletown New York", image: "https://cdpcdn.dx1app.com/products-private/prod/2a3e76b9-bcb5-4b32-a2e0-c0526dfe8530/6a4f976b-97b4-4b96-810a-a5ca01075631/00000000-0000-0000-0000-000000000000/94dc94b6-daf0-4f4e-af5b-b0b4007552a9/51d5ae28-6b28-4775-a024-b19600fabc4c/6000000001.jpg" },
    { id: 105, type: "rv", name: "Luxury Bus RV | Similar Galleries: Luxury Rv Bedroom , Luxury Rv", image: "https://i.pinimg.com/736x/52/0b/b5/520bb5ee410fe92613f5f37484c8c64d.jpg" },
    { id: 106, type: "helicopter", name: "The $22 Million Airbus H160 VIP Helicopter Is The Bugatti Of The", image: "https://www.maxim.com/wp-content/uploads/2021/05/ah-h160-vip-exterior__lightshadows.jpg" },
    { id: 107, type: "truck", name: "2024 Chevrolet Silverado EV: The Avalanche Resurrected (and", image: "https://images.cars.com/cldstatic/wp-content/uploads/chevrolet-chevrolet-silverado-ev-rst-2024-01-angle-blue-exterior-front-interior-oem.jpg" },
    { id: 108, type: "train", name: "The Golden Eagle: A Luxury Train Trip Across the Arctic", image: "https://good-nature-blog-uploads.s3.amazonaws.com/uploads/2021/08/WintertrainexteriorCC.jpg" },
    { id: 109, type: "boat", name: "LEXUS INTRODUCES THE NEXT EVOLUTION OF THE LEXUS LUXURY YACHT, LY680", image: "https://content.presspage.com/uploads/1850/b9ba768c-e539-4a2a-8844-5d013a787c12/1920_ly680exterior1.png?10000" },
    { id: 110, type: "car", name: "Is the 2023 Hyundai Palisade Calligraphy a Credible Luxury SUV", image: "https://images.cars.com/cldstatic/wp-content/uploads/hyundai-palisade-calligraphy-awd-2023-01-exterior-front-angle-scaled.jpg" }
];


items.forEach(item => {
    
    let container = document.querySelector(".itemsFilter");
    let html = `<div class="all item ${item.type} bg-white p-4 rounded shadow" data-id="${item.id}">
            <img src="${item.image}" alt="${item.name}" class="max-w-[200px] h-max object-cover w-[100%]" />
        </div>`
    let temp = document.createElement("div");
    temp.innerHTML += html;
    container.appendChild(temp.firstElementChild);

})



function filterItems(type) {
    const allItems = document.querySelectorAll('.item');
    allItems.forEach(item => {
        if (item.className.indexOf(type) !== -1) {
            item.style.display = ""
            console.log("hello");
        } else {
            item.style.display = "none"
        }
    })


}
filterItems("all");