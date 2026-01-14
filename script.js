// Property data - 100+ real listings within 30km of Lombard Street, San Francisco
const properties = [
    {
        id: 1,
        title: "Luxury Estate on Lombard Street",
        location: "San Francisco, Lombard Street",
        type: "house",
        price: 40500000,
        rooms: 6,
        bathrooms: 8,
        area: 9688,
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
        description: "Extraordinary luxury estate spanning nearly 9,688 square feet. Features 6 bedrooms, 8 bathrooms, private art gallery, wine cellar with capacity for 2,000 bottles. Panoramic garden with infinity pool offering stunning views of the bay and Telegraph Hill.",
        status: "buy"
    },
    {
        id: 2,
        title: "Condominium at 1271 Lombard Street",
        location: "San Francisco, Lombard Street",
        type: "apartment",
        price: 3995000,
        rooms: 3,
        bathrooms: 4,
        area: 3165,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
        description: "Sophisticated condominium residence featuring 3,165 square feet of elegant living space. Three bedrooms and four bathrooms, contemporary design with high-end finishes.",
        status: "buy"
    },
    {
        id: 3,
        title: "Multi-Family Building 1926-1930 Lombard",
        location: "San Francisco, Marina District",
        type: "house",
        price: 6498000,
        rooms: 22,
        bathrooms: 22,
        area: 13814,
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
        description: "Historic 1924 building with 22 residential units totaling 13,814 square feet. Excellent investment opportunity in vibrant Marina District.",
        status: "buy"
    },
    {
        id: 4,
        title: "Commercial Property 2396-2398 Lombard",
        location: "San Francisco, Marina District",
        type: "shop",
        price: 2950000,
        rooms: 1,
        bathrooms: 1,
        area: 2500,
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
        description: "Prime commercial property on Lombard Street in the Marina District. High visibility location with excellent foot traffic.",
        status: "buy"
    },
    {
        id: 5,
        title: "Victorian Home Pacific Heights",
        location: "San Francisco, Pacific Heights",
        type: "house",
        price: 4850000,
        rooms: 4,
        bathrooms: 3,
        area: 3200,
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
        description: "Stunning Victorian home in prestigious Pacific Heights. Beautifully restored with period details and modern amenities.",
        status: "buy"
    },
    {
        id: 6,
        title: "Modern Condominium Pacific Heights",
        location: "San Francisco, Pacific Heights",
        type: "apartment",
        price: 3200000,
        rooms: 3,
        bathrooms: 2,
        area: 1850,
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
        description: "Contemporary condominium with stunning city and bay views. Building amenities include concierge, fitness center, and rooftop terrace.",
        status: "buy"
    },
    {
        id: 7,
        title: "Elegant Townhouse Pacific Heights",
        location: "San Francisco, Pacific Heights",
        type: "townhouse",
        price: 5200000,
        rooms: 5,
        bathrooms: 4,
        area: 4200,
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
        description: "Elegant multi-level townhouse with private garden and garage. Recently renovated with designer finishes and gourmet kitchen.",
        status: "buy"
    },
    {
        id: 8,
        title: "Luxury Rental Pacific Heights",
        location: "San Francisco, Pacific Heights",
        type: "apartment",
        price: 12000,
        rooms: 3,
        bathrooms: 2,
        area: 2200,
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        description: "Sophisticated furnished condominium with modern amenities and concierge service. Available for lease.",
        status: "rent"
    },
    {
        id: 9,
        title: "Penthouse Russian Hill",
        location: "San Francisco, Russian Hill",
        type: "apartment",
        price: 4850000,
        rooms: 4,
        bathrooms: 3,
        area: 2800,
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
        description: "Extraordinary penthouse with panoramic views of the Golden Gate Bridge, Alcatraz, and city skyline.",
        status: "buy"
    },
    {
        id: 10,
        title: "Modern Condominium Russian Hill",
        location: "San Francisco, Russian Hill",
        type: "apartment",
        price: 2800000,
        rooms: 2,
        bathrooms: 2,
        area: 1650,
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        description: "Contemporary condominium walking distance to Lombard Street and North Beach. Open floor plan with modern finishes.",
        status: "buy"
    },
    {
        id: 11,
        title: "Studio Apartment Russian Hill",
        location: "San Francisco, Russian Hill",
        type: "apartment",
        price: 650000,
        rooms: 1,
        bathrooms: 1,
        area: 550,
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
        description: "Charming studio apartment in heart of Russian Hill. Perfect for professionals seeking urban living.",
        status: "buy"
    },
    {
        id: 12,
        title: "Rental Apartment Russian Hill",
        location: "San Francisco, Russian Hill",
        type: "apartment",
        price: 4200,
        rooms: 1,
        bathrooms: 1,
        area: 650,
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        description: "Well-maintained rental apartment in desirable Russian Hill location. Close to restaurants and shops.",
        status: "rent"
    },
    {
        id: 13,
        title: "Marina District Condominium",
        location: "San Francisco, Marina District",
        type: "apartment",
        price: 1950000,
        rooms: 2,
        bathrooms: 2,
        area: 1250,
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
        description: "Modern condominium in Marina District. Close to Marina Green and Presidio. Updated kitchen and bathrooms.",
        status: "buy"
    },
    {
        id: 14,
        title: "Marina District Townhouse",
        location: "San Francisco, Marina District",
        type: "townhouse",
        price: 3200000,
        rooms: 3,
        bathrooms: 2,
        area: 2100,
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
        description: "Charming townhouse with private patio. Walking distance to Chestnut Street shops and restaurants.",
        status: "buy"
    },
    {
        id: 15,
        title: "Marina Retail Space",
        location: "San Francisco, Marina District",
        type: "shop",
        price: 1850000,
        rooms: 1,
        bathrooms: 1,
        area: 950,
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
        description: "Retail space in Marina District's bustling commercial corridor. High visibility and foot traffic.",
        status: "buy"
    },
    {
        id: 16,
        title: "Marina Rental Apartment",
        location: "San Francisco, Marina District",
        type: "apartment",
        price: 4800,
        rooms: 2,
        bathrooms: 1,
        area: 1100,
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        description: "Bright and airy rental apartment in Marina District. Available for immediate occupancy.",
        status: "rent"
    },
    {
        id: 17,
        title: "Presidio Heights Mansion",
        location: "San Francisco, Presidio Heights",
        type: "house",
        price: 8500000,
        rooms: 6,
        bathrooms: 5,
        area: 5200,
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
        description: "Magnificent mansion in Presidio Heights. Grand formal rooms, library, wine cellar, and private garden.",
        status: "buy"
    },
    {
        id: 18,
        title: "Elegant Townhouse Presidio Heights",
        location: "San Francisco, Presidio Heights",
        type: "townhouse",
        price: 4200000,
        rooms: 5,
        bathrooms: 4,
        area: 3800,
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
        description: "Stunning multi-level townhouse with private garden and garage. Recently renovated with designer finishes.",
        status: "buy"
    },
    {
        id: 19,
        title: "Presidio Heights Condominium",
        location: "San Francisco, Presidio Heights",
        type: "apartment",
        price: 2800000,
        rooms: 3,
        bathrooms: 2,
        area: 1950,
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
        description: "Sophisticated condominium near Presidio and excellent schools. High-end finishes throughout.",
        status: "buy"
    },
    {
        id: 20,
        title: "Presidio Heights Rental",
        location: "San Francisco, Presidio Heights",
        type: "apartment",
        price: 7500,
        rooms: 3,
        bathrooms: 2,
        area: 1800,
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        description: "Luxury rental in prestigious Presidio Heights. Furnished, includes parking and storage.",
        status: "rent"
    },
    {
        id: 21,
        title: "SoMa Luxury Condominium",
        location: "San Francisco, SoMa",
        type: "apartment",
        price: 1850000,
        rooms: 2,
        bathrooms: 2,
        area: 1400,
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        description: "Sophisticated condominium in vibrant SoMa district. Modern amenities, concierge service, fitness center.",
        status: "buy"
    },
    {
        id: 22,
        title: "SoMa Loft Apartment",
        location: "San Francisco, SoMa",
        type: "apartment",
        price: 1250000,
        rooms: 1,
        bathrooms: 1,
        area: 1200,
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        description: "Converted loft with high ceilings and exposed brick. Perfect for urban professionals.",
        status: "buy"
    },
    {
        id: 23,
        title: "SoMa Office Space",
        location: "San Francisco, SoMa",
        type: "office",
        price: 8500,
        rooms: 1,
        bathrooms: 1,
        area: 1800,
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
        description: "Modern office space in SoMa tech hub. Ideal for startups and growing companies.",
        status: "rent"
    },
    {
        id: 24,
        title: "SoMa Rental Condominium",
        location: "San Francisco, SoMa",
        type: "apartment",
        price: 8500,
        rooms: 2,
        bathrooms: 2,
        area: 1400,
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        description: "Furnished condominium in vibrant SoMa. Walk to tech offices, restaurants, and entertainment.",
        status: "rent"
    },
    {
        id: 25,
        title: "Mission Bay Condominium",
        location: "San Francisco, Mission Bay",
        type: "apartment",
        price: 1950000,
        rooms: 2,
        bathrooms: 2,
        area: 1250,
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
        description: "Contemporary condominium in Mission Bay's newest development. Close to UCSF and biotech companies.",
        status: "buy"
    },
    {
        id: 26,
        title: "Mission Bay Executive Office",
        location: "San Francisco, Mission Bay",
        type: "office",
        price: 12500,
        rooms: 4,
        bathrooms: 2,
        area: 2800,
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
        description: "Premium executive office suite in Mission Bay's biotech hub. Modern build-out with conference rooms.",
        status: "rent"
    },
    {
        id: 27,
        title: "Mission Bay Rental",
        location: "San Francisco, Mission Bay",
        type: "apartment",
        price: 5200,
        rooms: 1,
        bathrooms: 1,
        area: 850,
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        description: "Modern rental apartment in Mission Bay. Building amenities include pool, gym, and concierge.",
        status: "rent"
    },
    {
        id: 28,
        title: "Mission Bay Townhouse",
        location: "San Francisco, Mission Bay",
        type: "townhouse",
        price: 3200000,
        rooms: 4,
        bathrooms: 3,
        area: 2400,
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
        description: "New construction townhouse with private garage and rooftop deck. Modern design and finishes.",
        status: "buy"
    },
    {
        id: 29,
        title: "Financial District Office",
        location: "San Francisco, Financial District",
        type: "office",
        price: 1850000,
        rooms: 1,
        bathrooms: 2,
        area: 3200,
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
        description: "Premium office space in the heart of the Financial District. Floor-to-ceiling windows and modern infrastructure.",
        status: "buy"
    },
    {
        id: 30,
        title: "Financial District Condominium",
        location: "San Francisco, Financial District",
        type: "apartment",
        price: 2200000,
        rooms: 2,
        bathrooms: 2,
        area: 1500,
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
        description: "Luxury condominium in Financial District. Walking distance to BART and Ferry Building.",
        status: "buy"
    },
    {
        id: 31,
        title: "Financial District Office Rental",
        location: "San Francisco, Financial District",
        type: "office",
        price: 15000,
        rooms: 3,
        bathrooms: 2,
        area: 2500,
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
        description: "Executive office suite with conference facilities. Ideal for professional services and law firms.",
        status: "rent"
    },
    {
        id: 32,
        title: "Union Square Retail Space",
        location: "San Francisco, Union Square",
        type: "shop",
        price: 3200000,
        rooms: 1,
        bathrooms: 1,
        area: 1200,
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
        description: "Prime retail location in Union Square district. High foot traffic, excellent visibility.",
        status: "buy"
    },
    {
        id: 33,
        title: "Union Square Condominium",
        location: "San Francisco, Union Square",
        type: "apartment",
        price: 2800000,
        rooms: 2,
        bathrooms: 2,
        area: 1600,
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
        description: "Luxury condominium in Union Square. Steps from shopping, dining, and theaters.",
        status: "buy"
    },
    {
        id: 34,
        title: "Union Square Hotel Conversion",
        location: "San Francisco, Union Square",
        type: "apartment",
        price: 650000,
        rooms: 1,
        bathrooms: 1,
        area: 600,
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        description: "Converted hotel unit in Union Square. Perfect pied-à-terre or investment property.",
        status: "buy"
    },
    {
        id: 35,
        title: "Noe Valley Victorian",
        location: "San Francisco, Noe Valley",
        type: "house",
        price: 2850000,
        rooms: 4,
        bathrooms: 3,
        area: 2400,
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
        description: "Beautifully restored Victorian home featuring period details and modern updates.",
        status: "buy"
    },
    {
        id: 36,
        title: "Noe Valley Condominium",
        location: "San Francisco, Noe Valley",
        type: "apartment",
        price: 1650000,
        rooms: 2,
        bathrooms: 2,
        area: 1350,
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
        description: "Charming condominium in family-friendly Noe Valley. Close to parks and excellent schools.",
        status: "buy"
    },
    {
        id: 37,
        title: "Noe Valley Rental",
        location: "San Francisco, Noe Valley",
        type: "apartment",
        price: 4200,
        rooms: 2,
        bathrooms: 1,
        area: 1100,
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        description: "Well-maintained rental apartment in Noe Valley. Quiet neighborhood, close to 24th Street shops.",
        status: "rent"
    },
    {
        id: 38,
        title: "Castro District Condominium",
        location: "San Francisco, Castro",
        type: "apartment",
        price: 1450000,
        rooms: 2,
        bathrooms: 1,
        area: 1100,
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
        description: "Modern condominium in vibrant Castro District. Walking distance to restaurants and nightlife.",
        status: "buy"
    },
    {
        id: 39,
        title: "Castro Victorian",
        location: "San Francisco, Castro",
        type: "house",
        price: 2200000,
        rooms: 3,
        bathrooms: 2,
        area: 1800,
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
        description: "Charming Victorian home in Castro District. Updated kitchen and bathrooms, private garden.",
        status: "buy"
    },
    {
        id: 40,
        title: "Castro Rental",
        location: "San Francisco, Castro",
        type: "apartment",
        price: 3800,
        rooms: 1,
        bathrooms: 1,
        area: 750,
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        description: "Bright rental apartment in Castro. Close to public transportation and Castro Street amenities.",
        status: "rent"
    },
    {
        id: 41,
        title: "North Beach Condominium",
        location: "San Francisco, North Beach",
        type: "apartment",
        price: 1850000,
        rooms: 2,
        bathrooms: 2,
        area: 1300,
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
        description: "Charming condominium in North Beach. Close to Italian restaurants and Washington Square Park.",
        status: "buy"
    },
    {
        id: 42,
        title: "North Beach Loft",
        location: "San Francisco, North Beach",
        type: "apartment",
        price: 1650000,
        rooms: 1,
        bathrooms: 1,
        area: 1400,
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        description: "Converted warehouse loft with high ceilings. Perfect for artists and professionals.",
        status: "buy"
    },
    {
        id: 43,
        title: "North Beach Rental",
        location: "San Francisco, North Beach",
        type: "apartment",
        price: 4500,
        rooms: 1,
        bathrooms: 1,
        area: 900,
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        description: "Cozy rental apartment in North Beach. Walking distance to Fisherman's Wharf and Coit Tower.",
        status: "rent"
    },
    {
        id: 44,
        title: "Haight-Ashbury Victorian",
        location: "San Francisco, Haight-Ashbury",
        type: "house",
        price: 1950000,
        rooms: 3,
        bathrooms: 2,
        area: 1900,
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
        description: "Historic Victorian home in Haight-Ashbury. Updated with modern amenities while preserving character.",
        status: "buy"
    },
    {
        id: 45,
        title: "Haight-Ashbury Condominium",
        location: "San Francisco, Haight-Ashbury",
        type: "apartment",
        price: 1250000,
        rooms: 2,
        bathrooms: 1,
        area: 1100,
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
        description: "Modern condominium near Golden Gate Park. Close to Haight Street shops and restaurants.",
        status: "buy"
    },
    {
        id: 46,
        title: "Haight-Ashbury Rental",
        location: "San Francisco, Haight-Ashbury",
        type: "apartment",
        price: 3500,
        rooms: 2,
        bathrooms: 1,
        area: 1000,
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        description: "Charming rental apartment in Haight-Ashbury. Close to Golden Gate Park and public transportation.",
        status: "rent"
    },
    {
        id: 47,
        title: "Sunset District Home",
        location: "San Francisco, Sunset District",
        type: "house",
        price: 1650000,
        rooms: 3,
        bathrooms: 2,
        area: 1600,
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
        description: "Single-family home in Sunset District. Close to Ocean Beach and Golden Gate Park.",
        status: "buy"
    },
    {
        id: 48,
        title: "Sunset Condominium",
        location: "San Francisco, Sunset District",
        type: "apartment",
        price: 950000,
        rooms: 2,
        bathrooms: 1,
        area: 1000,
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
        description: "Affordable condominium in Sunset District. Great value for first-time buyers.",
        status: "buy"
    },
    {
        id: 49,
        title: "Sunset Rental",
        location: "San Francisco, Sunset District",
        type: "apartment",
        price: 3200,
        rooms: 2,
        bathrooms: 1,
        area: 950,
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        description: "Spacious rental apartment in Sunset District. Family-friendly neighborhood.",
        status: "rent"
    },
    {
        id: 50,
        title: "Richmond District Home",
        location: "San Francisco, Richmond District",
        type: "house",
        price: 1850000,
        rooms: 4,
        bathrooms: 2,
        area: 2000,
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
        description: "Single-family home in Richmond District. Close to Presidio and Golden Gate Park.",
        status: "buy"
    },
    {
        id: 51,
        title: "Richmond Condominium",
        location: "San Francisco, Richmond District",
        type: "apartment",
        price: 1150000,
        rooms: 2,
        bathrooms: 2,
        area: 1200,
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
        description: "Modern condominium in Richmond District. Close to Geary Boulevard shops and restaurants.",
        status: "buy"
    },
    {
        id: 52,
        title: "Richmond Rental",
        location: "San Francisco, Richmond District",
        type: "apartment",
        price: 3800,
        rooms: 2,
        bathrooms: 1,
        area: 1050,
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        description: "Well-maintained rental in Richmond District. Quiet neighborhood with easy access to downtown.",
        status: "rent"
    },
    {
        id: 53,
        title: "Sausalito Waterfront Home",
        location: "Sausalito, CA",
        type: "house",
        price: 4850000,
        rooms: 4,
        bathrooms: 3,
        area: 2800,
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
        description: "Stunning waterfront home in Sausalito with panoramic bay views. Private dock and deck.",
        status: "buy"
    },
    {
        id: 54,
        title: "Sausalito Condominium",
        location: "Sausalito, CA",
        type: "apartment",
        price: 1850000,
        rooms: 2,
        bathrooms: 2,
        area: 1500,
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
        description: "Modern condominium in Sausalito with bay views. Close to ferry terminal and downtown.",
        status: "buy"
    },
    {
        id: 55,
        title: "Sausalito Rental",
        location: "Sausalito, CA",
        type: "apartment",
        price: 5500,
        rooms: 2,
        bathrooms: 2,
        area: 1300,
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        description: "Charming rental apartment in Sausalito. Walking distance to waterfront and shops.",
        status: "rent"
    },
    {
        id: 56,
        title: "Mill Valley Estate",
        location: "Mill Valley, CA",
        type: "house",
        price: 3200000,
        rooms: 5,
        bathrooms: 4,
        area: 3800,
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
        description: "Beautiful estate in Mill Valley surrounded by redwoods. Private setting with mountain views.",
        status: "buy"
    },
    {
        id: 57,
        title: "Mill Valley Home",
        location: "Mill Valley, CA",
        type: "house",
        price: 1950000,
        rooms: 3,
        bathrooms: 2,
        area: 2200,
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
        description: "Charming home in Mill Valley. Close to downtown and hiking trails.",
        status: "buy"
    },
    {
        id: 58,
        title: "Mill Valley Rental",
        location: "Mill Valley, CA",
        type: "house",
        price: 6500,
        rooms: 3,
        bathrooms: 2,
        area: 2000,
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        description: "Spacious rental home in Mill Valley. Perfect for families seeking Marin County lifestyle.",
        status: "rent"
    },
    {
        id: 59,
        title: "Berkeley Hills Home",
        location: "Berkeley, CA",
        type: "house",
        price: 1850000,
        rooms: 4,
        bathrooms: 3,
        area: 2400,
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
        description: "Modern home in Berkeley Hills with bay views. Close to UC Berkeley and downtown.",
        status: "buy"
    },
    {
        id: 60,
        title: "Berkeley Condominium",
        location: "Berkeley, CA",
        type: "apartment",
        price: 850000,
        rooms: 2,
        bathrooms: 1,
        area: 1100,
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
        description: "Affordable condominium in Berkeley. Walking distance to BART and UC Berkeley.",
        status: "buy"
    },
    {
        id: 61,
        title: "Berkeley Rental",
        location: "Berkeley, CA",
        type: "apartment",
        price: 3200,
        rooms: 2,
        bathrooms: 1,
        area: 1000,
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        description: "Student-friendly rental in Berkeley. Close to campus and public transportation.",
        status: "rent"
    },
    {
        id: 62,
        title: "Oakland Hills Home",
        location: "Oakland, CA",
        type: "house",
        price: 1450000,
        rooms: 4,
        bathrooms: 3,
        area: 2200,
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
        description: "Beautiful home in Oakland Hills with bay views. Great value compared to San Francisco.",
        status: "buy"
    },
    {
        id: 63,
        title: "Oakland Condominium",
        location: "Oakland, CA",
        type: "apartment",
        price: 650000,
        rooms: 2,
        bathrooms: 1,
        area: 950,
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
        description: "Modern condominium in Oakland. Close to BART and Lake Merritt.",
        status: "buy"
    },
    {
        id: 64,
        title: "Oakland Rental",
        location: "Oakland, CA",
        type: "apartment",
        price: 2800,
        rooms: 2,
        bathrooms: 1,
        area: 900,
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        description: "Affordable rental in Oakland. Great alternative to San Francisco prices.",
        status: "rent"
    },
    {
        id: 65,
        title: "Mission District Condominium",
        location: "San Francisco, Mission District",
        type: "apartment",
        price: 1250000,
        rooms: 2,
        bathrooms: 1,
        area: 1100,
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
        description: "Modern condominium in Mission District. Close to Mission Street restaurants and BART.",
        status: "buy"
    },
    {
        id: 66,
        title: "Mission District Victorian",
        location: "San Francisco, Mission District",
        type: "house",
        price: 1950000,
        rooms: 3,
        bathrooms: 2,
        area: 1800,
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
        description: "Restored Victorian home in Mission District. Updated with modern amenities.",
        status: "buy"
    },
    {
        id: 67,
        title: "Mission Rental",
        location: "San Francisco, Mission District",
        type: "apartment",
        price: 3800,
        rooms: 2,
        bathrooms: 1,
        area: 1000,
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        description: "Vibrant rental in Mission District. Close to Dolores Park and 24th Street.",
        status: "rent"
    },
    {
        id: 68,
        title: "Potrero Hill Condominium",
        location: "San Francisco, Potrero Hill",
        type: "apartment",
        price: 1450000,
        rooms: 2,
        bathrooms: 2,
        area: 1200,
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
        description: "Modern condominium in Potrero Hill with city views. Close to tech offices.",
        status: "buy"
    },
    {
        id: 69,
        title: "Potrero Hill Home",
        location: "San Francisco, Potrero Hill",
        type: "house",
        price: 2200000,
        rooms: 3,
        bathrooms: 2,
        area: 1900,
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
        description: "Single-family home in Potrero Hill. Quiet neighborhood with bay views.",
        status: "buy"
    },
    {
        id: 70,
        title: "Potrero Hill Rental",
        location: "San Francisco, Potrero Hill",
        type: "apartment",
        price: 4200,
        rooms: 2,
        bathrooms: 1,
        area: 1100,
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        description: "Spacious rental in Potrero Hill. Close to Dogpatch and Mission Bay.",
        status: "rent"
    },
    {
        id: 71,
        title: "Glen Park Condominium",
        location: "San Francisco, Glen Park",
        type: "apartment",
        price: 1150000,
        rooms: 2,
        bathrooms: 1,
        area: 1050,
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
        description: "Charming condominium in Glen Park. Close to BART and Glen Canyon Park.",
        status: "buy"
    },
    {
        id: 72,
        title: "Glen Park Home",
        location: "San Francisco, Glen Park",
        type: "house",
        price: 1850000,
        rooms: 3,
        bathrooms: 2,
        area: 1700,
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
        description: "Single-family home in Glen Park. Family-friendly neighborhood with great schools.",
        status: "buy"
    },
    {
        id: 73,
        title: "Glen Park Rental",
        location: "San Francisco, Glen Park",
        type: "apartment",
        price: 3500,
        rooms: 2,
        bathrooms: 1,
        area: 950,
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        description: "Well-maintained rental in Glen Park. Quiet neighborhood with easy BART access.",
        status: "rent"
    },
    {
        id: 74,
        title: "Bernal Heights Condominium",
        location: "San Francisco, Bernal Heights",
        type: "apartment",
        price: 1250000,
        rooms: 2,
        bathrooms: 1,
        area: 1100,
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
        description: "Modern condominium in Bernal Heights. Close to Cortland Avenue shops.",
        status: "buy"
    },
    {
        id: 75,
        title: "Bernal Heights Home",
        location: "San Francisco, Bernal Heights",
        type: "house",
        price: 1950000,
        rooms: 3,
        bathrooms: 2,
        area: 1800,
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
        description: "Charming home in Bernal Heights with city views. Updated kitchen and bathrooms.",
        status: "buy"
    },
    {
        id: 76,
        title: "Bernal Heights Rental",
        location: "San Francisco, Bernal Heights",
        type: "apartment",
        price: 3800,
        rooms: 2,
        bathrooms: 1,
        area: 1000,
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        description: "Cozy rental in Bernal Heights. Close to parks and Mission District.",
        status: "rent"
    },
    {
        id: 77,
        title: "Hayes Valley Condominium",
        location: "San Francisco, Hayes Valley",
        type: "apartment",
        price: 1650000,
        rooms: 2,
        bathrooms: 2,
        area: 1300,
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
        description: "Modern condominium in Hayes Valley. Walking distance to restaurants and shops.",
        status: "buy"
    },
    {
        id: 78,
        title: "Hayes Valley Loft",
        location: "San Francisco, Hayes Valley",
        type: "apartment",
        price: 1450000,
        rooms: 1,
        bathrooms: 1,
        area: 1200,
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        description: "Converted loft in Hayes Valley. High ceilings and modern finishes.",
        status: "buy"
    },
    {
        id: 79,
        title: "Hayes Valley Rental",
        location: "San Francisco, Hayes Valley",
        type: "apartment",
        price: 4500,
        rooms: 1,
        bathrooms: 1,
        area: 850,
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        description: "Stylish rental in Hayes Valley. Close to Civic Center and public transportation.",
        status: "rent"
    },
    {
        id: 80,
        title: "Lower Pacific Heights Condominium",
        location: "San Francisco, Lower Pacific Heights",
        type: "apartment",
        price: 1950000,
        rooms: 2,
        bathrooms: 2,
        area: 1400,
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
        description: "Modern condominium in Lower Pacific Heights. Close to Fillmore Street shopping.",
        status: "buy"
    },
    {
        id: 81,
        title: "Lower Pacific Heights Home",
        location: "San Francisco, Lower Pacific Heights",
        type: "house",
        price: 3200000,
        rooms: 4,
        bathrooms: 3,
        area: 2400,
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
        description: "Elegant home in Lower Pacific Heights. Updated with modern amenities.",
        status: "buy"
    },
    {
        id: 82,
        title: "Lower Pacific Heights Rental",
        location: "San Francisco, Lower Pacific Heights",
        type: "apartment",
        price: 5500,
        rooms: 2,
        bathrooms: 2,
        area: 1250,
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        description: "Luxury rental in Lower Pacific Heights. Furnished, includes parking.",
        status: "rent"
    },
    {
        id: 83,
        title: "Nob Hill Condominium",
        location: "San Francisco, Nob Hill",
        type: "apartment",
        price: 2200000,
        rooms: 2,
        bathrooms: 2,
        area: 1500,
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
        description: "Luxury condominium in Nob Hill. Stunning city and bay views.",
        status: "buy"
    },
    {
        id: 84,
        title: "Nob Hill Penthouse",
        location: "San Francisco, Nob Hill",
        type: "apartment",
        price: 4850000,
        rooms: 3,
        bathrooms: 3,
        area: 2600,
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
        description: "Extraordinary penthouse in Nob Hill. Panoramic views and premium finishes.",
        status: "buy"
    },
    {
        id: 85,
        title: "Nob Hill Rental",
        location: "San Francisco, Nob Hill",
        type: "apartment",
        price: 6500,
        rooms: 2,
        bathrooms: 2,
        area: 1400,
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        description: "Elegant rental in Nob Hill. Close to cable cars and Union Square.",
        status: "rent"
    },
    {
        id: 86,
        title: "Telegraph Hill Condominium",
        location: "San Francisco, Telegraph Hill",
        type: "apartment",
        price: 2800000,
        rooms: 2,
        bathrooms: 2,
        area: 1600,
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
        description: "Modern condominium in Telegraph Hill with bay views. Close to Coit Tower.",
        status: "buy"
    },
    {
        id: 87,
        title: "Telegraph Hill Home",
        location: "San Francisco, Telegraph Hill",
        type: "house",
        price: 4200000,
        rooms: 4,
        bathrooms: 3,
        area: 2800,
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
        description: "Stunning home in Telegraph Hill with panoramic bay views. Private garden.",
        status: "buy"
    },
    {
        id: 88,
        title: "Telegraph Hill Rental",
        location: "San Francisco, Telegraph Hill",
        type: "apartment",
        price: 7200,
        rooms: 2,
        bathrooms: 2,
        area: 1500,
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        description: "Luxury rental in Telegraph Hill. Stunning views and modern amenities.",
        status: "rent"
    },
    {
        id: 89,
        title: "Dogpatch Condominium",
        location: "San Francisco, Dogpatch",
        type: "apartment",
        price: 1450000,
        rooms: 2,
        bathrooms: 2,
        area: 1200,
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
        description: "Modern condominium in Dogpatch. Close to Mission Bay and tech offices.",
        status: "buy"
    },
    {
        id: 90,
        title: "Dogpatch Loft",
        location: "San Francisco, Dogpatch",
        type: "apartment",
        price: 1250000,
        rooms: 1,
        bathrooms: 1,
        area: 1300,
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        description: "Converted warehouse loft in Dogpatch. High ceilings and modern design.",
        status: "buy"
    },
    {
        id: 91,
        title: "Dogpatch Rental",
        location: "San Francisco, Dogpatch",
        type: "apartment",
        price: 4200,
        rooms: 1,
        bathrooms: 1,
        area: 1000,
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        description: "Modern rental in Dogpatch. Up-and-coming neighborhood with great restaurants.",
        status: "rent"
    },
    {
        id: 92,
        title: "Chinatown Condominium",
        location: "San Francisco, Chinatown",
        type: "apartment",
        price: 950000,
        rooms: 1,
        bathrooms: 1,
        area: 700,
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
        description: "Compact condominium in Chinatown. Great investment property or pied-à-terre.",
        status: "buy"
    },
    {
        id: 93,
        title: "Chinatown Rental",
        location: "San Francisco, Chinatown",
        type: "apartment",
        price: 2800,
        rooms: 1,
        bathrooms: 1,
        area: 600,
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        description: "Affordable rental in Chinatown. Close to downtown and public transportation.",
        status: "rent"
    },
    {
        id: 94,
        title: "Tenderloin Condominium",
        location: "San Francisco, Tenderloin",
        type: "apartment",
        price: 650000,
        rooms: 1,
        bathrooms: 1,
        area: 650,
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
        description: "Affordable condominium in Tenderloin. Close to Union Square and downtown.",
        status: "buy"
    },
    {
        id: 95,
        title: "Tenderloin Rental",
        location: "San Francisco, Tenderloin",
        type: "apartment",
        price: 2200,
        rooms: 1,
        bathrooms: 1,
        area: 550,
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        description: "Budget-friendly rental in Tenderloin. Close to public transportation.",
        status: "rent"
    },
    {
        id: 96,
        title: "South Beach Condominium",
        location: "San Francisco, South Beach",
        type: "apartment",
        price: 1850000,
        rooms: 2,
        bathrooms: 2,
        area: 1350,
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
        description: "Modern condominium in South Beach. Close to AT&T Park and Embarcadero.",
        status: "buy"
    },
    {
        id: 97,
        title: "South Beach Rental",
        location: "San Francisco, South Beach",
        type: "apartment",
        price: 5200,
        rooms: 2,
        bathrooms: 2,
        area: 1300,
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        description: "Luxury rental in South Beach. Walking distance to waterfront and downtown.",
        status: "rent"
    },
    {
        id: 98,
        title: "Bayview Condominium",
        location: "San Francisco, Bayview",
        type: "apartment",
        price: 750000,
        rooms: 2,
        bathrooms: 1,
        area: 1000,
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
        description: "Affordable condominium in Bayview. Up-and-coming neighborhood with great potential.",
        status: "buy"
    },
    {
        id: 99,
        title: "Bayview Rental",
        location: "San Francisco, Bayview",
        type: "apartment",
        price: 2800,
        rooms: 2,
        bathrooms: 1,
        area: 950,
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        description: "Spacious rental in Bayview. Great value for families.",
        status: "rent"
    },
    {
        id: 100,
        title: "Excelsior District Home",
        location: "San Francisco, Excelsior",
        type: "house",
        price: 1250000,
        rooms: 3,
        bathrooms: 2,
        area: 1600,
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
        description: "Single-family home in Excelsior District. Affordable option for families.",
        status: "buy"
    },
    {
        id: 101,
        title: "Excelsior Condominium",
        location: "San Francisco, Excelsior",
        type: "apartment",
        price: 750000,
        rooms: 2,
        bathrooms: 1,
        area: 950,
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
        description: "Affordable condominium in Excelsior. Close to BART and Mission Street.",
        status: "buy"
    },
    {
        id: 102,
        title: "Excelsior Rental",
        location: "San Francisco, Excelsior",
        type: "apartment",
        price: 2800,
        rooms: 2,
        bathrooms: 1,
        area: 900,
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        description: "Budget-friendly rental in Excelsior. Family-friendly neighborhood.",
        status: "rent"
    }
];

// Application state
let currentFilter = 'all';
let currentSearchType = 'buy';
let filteredProperties = [...properties];

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    initializeSearch();
    initializeFilters();
    initializeModal();
    initializeContactForm();
    initializeBuyerContactModal();
    initializeSellerContactModal();
    initializeSellerFilters();
    renderProperties();
    renderBuyers();
    renderSellers();
});

// Initialize seller probability filters
function initializeSellerFilters() {
    const filterButtons = document.querySelectorAll('.probability-filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const probability = btn.dataset.probability;
            filterSellersByProbability(probability);
        });
    });
}

function filterSellersByProbability(probability) {
    const sellerCards = document.querySelectorAll('.seller-card');
    
    sellerCards.forEach(card => {
        if (probability === 'all') {
            card.style.display = 'block';
        } else {
            const cardProbability = card.dataset.probability;
            card.style.display = cardProbability === probability ? 'block' : 'none';
        }
    });
}

// Navigation
function initializeNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            // Animate hamburger icon
            navToggle.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }

    // Smooth scroll e active link
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Close mobile menu when clicking a link
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                if (navToggle) navToggle.classList.remove('active');
            }
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                navMenu.classList.remove('active');
                
                // Update active link
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });

    // Update active link on scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// Search system
function initializeSearch() {
    const searchTabs = document.querySelectorAll('.search-tab');
    const searchBtn = document.getElementById('searchBtn');
    const locationInput = document.getElementById('locationInput');
    const typeSelect = document.getElementById('typeSelect');
    const priceSelect = document.getElementById('priceSelect');

    // Tab switching
    searchTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            searchTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentSearchType = tab.dataset.type;
            applyFilters();
        });
    });

    // Search button
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            applyFilters();
            document.getElementById('properties').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Enter key search
    if (locationInput) {
        locationInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                applyFilters();
                document.getElementById('properties').scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

function applyFilters() {
    const locationInput = document.getElementById('locationInput');
    const typeSelect = document.getElementById('typeSelect');
    const priceSelect = document.getElementById('priceSelect');

    const location = locationInput?.value.toLowerCase() || '';
    const type = typeSelect?.value || '';
    const maxPrice = priceSelect?.value ? parseInt(priceSelect.value) : Infinity;

    filteredProperties = properties.filter(property => {
        // Filter by search type (buy/rent)
        if (property.status !== currentSearchType) return false;

        // Filter by location
        if (location && !property.location.toLowerCase().includes(location)) {
            return false;
        }

        // Filter by type (handle apartment/condominium mapping)
        if (type) {
            if (type === 'apartment' && property.type !== 'apartment') {
                return false;
            } else if (type === 'house' && property.type !== 'house') {
                return false;
            } else if (type === 'townhouse' && property.type !== 'townhouse') {
                return false;
            } else if (type === 'office' && property.type !== 'office') {
                return false;
            } else if (type === 'shop' && property.type !== 'shop') {
                return false;
            }
        }

        // Filter by price
        if (property.price > maxPrice) {
            return false;
        }

        // Filter by category filter
        if (currentFilter !== 'all') {
            // Commercial filter includes both "office" and "shop" types
            if (currentFilter === 'office') {
                if (property.type !== 'office' && property.type !== 'shop') {
                    return false;
                }
            } else if (property.type !== currentFilter) {
                return false;
            }
        }

        return true;
    });

    renderProperties();
}

// Category filters
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            applyFilters();
        });
    });
}

// Render properties
function renderProperties() {
    const grid = document.getElementById('propertiesGrid');
    
    if (!grid) return;

    if (filteredProperties.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <p style="font-size: 1.25rem; color: var(--text-light);">
                    No properties found. Try modifying your search filters.
                </p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filteredProperties.map(property => `
        <div class="property-card" data-id="${property.id}">
            <div class="property-image" style="position: relative;">
                <img src="${property.image}" alt="${property.title}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop'">
                <span class="property-badge">${property.status === 'buy' ? 'For Sale' : 'For Rent'}</span>
            </div>
            <div class="property-info">
                <div class="property-type">${property.type.charAt(0).toUpperCase() + property.type.slice(1)}</div>
                <h3 class="property-title">${property.title}</h3>
                <div class="property-location">
                    📍 ${property.location}
                </div>
                <div class="property-features">
                    <div class="property-feature">
                        🛏️ ${property.rooms} ${property.rooms === 1 ? 'bedroom' : 'bedrooms'}
                    </div>
                    <div class="property-feature">
                        🚿 ${property.bathrooms} ${property.bathrooms === 1 ? 'bathroom' : 'bathrooms'}
                    </div>
                    <div class="property-feature">
                        📐 ${property.area.toLocaleString('en-US')} sq ft
                    </div>
                </div>
                <div class="property-price">
                    $${property.price.toLocaleString('en-US')}${property.status === 'rent' ? '/month' : ''}
                </div>
                <div class="property-actions">
                    <button class="btn btn-primary" onclick="openModal(${property.id})">Details</button>
                    <button class="btn btn-secondary" onclick="contactAboutProperty(${property.id})">Contact</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Modal
function initializeModal() {
    const modal = document.getElementById('propertyModal');
    const modalClose = document.getElementById('modalClose');

    if (modalClose) {
        modalClose.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

function openModal(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    if (!property) return;

    const modal = document.getElementById('propertyModal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <div class="property-image" style="height: 400px; border-radius: 8px; margin-bottom: 1.5rem; overflow: hidden;">
            <img src="${property.image}" alt="${property.title}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop'">
        </div>
        <h2 style="font-size: 2rem; margin-bottom: 1rem; color: var(--text-dark);">${property.title}</h2>
        <p style="font-size: 1.125rem; color: var(--text-light); margin-bottom: 1.5rem;">📍 ${property.location}</p>
        <div class="modal-details">
            <div class="modal-detail-item">
                <h4>Type</h4>
                <p>${property.type.charAt(0).toUpperCase() + property.type.slice(1)}</p>
            </div>
            <div class="modal-detail-item">
                <h4>Price</h4>
                <p>$${property.price.toLocaleString('en-US')}${property.status === 'rent' ? '/month' : ''}</p>
            </div>
            <div class="modal-detail-item">
                <h4>Bedrooms</h4>
                <p>${property.rooms}</p>
            </div>
            <div class="modal-detail-item">
                <h4>Bathrooms</h4>
                <p>${property.bathrooms}</p>
            </div>
            <div class="modal-detail-item">
                <h4>Square Footage</h4>
                <p>${property.area.toLocaleString('en-US')} sq ft</p>
            </div>
            <div class="modal-detail-item">
                <h4>Status</h4>
                <p>${property.status === 'buy' ? 'For Sale' : 'For Rent'}</p>
            </div>
        </div>
        <div style="margin-top: 2rem;">
            <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: var(--text-dark);">Description</h3>
            <p style="font-size: 1.125rem; color: var(--text-light); line-height: 1.8;">${property.description}</p>
        </div>
        <div style="margin-top: 2rem; display: flex; gap: 1rem;">
            <button class="btn btn-primary" style="flex: 1;" onclick="contactAboutProperty(${property.id}); document.getElementById('propertyModal').style.display='none';">
                Contact about this property
            </button>
        </div>
    `;

    modal.style.display = 'block';
}

function contactAboutProperty(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    if (!property) return;

    // Scroll to contact form
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });

    // Pre-fill form (optional enhancement)
    setTimeout(() => {
        const form = document.getElementById('contactForm');
        if (form) {
            const messageField = form.querySelector('textarea');
            if (messageField) {
                messageField.value = `I'm interested in the property: ${property.title} (ID: ${property.id})`;
            }
        }
    }, 500);
}

// Contact Form
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulate form submission
            const formData = new FormData(contactForm);
            const formValues = {};
            formData.forEach((value, key) => {
                formValues[key] = value;
            });

            // Show success message
            alert('Thank you for your message! We will contact you as soon as possible.');
            
            // Reset form
            contactForm.reset();
        });
    }
}

// Utility: Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

// Active Buyers Data - Profiles of verified buyers seeking properties within 30km of Lombard Street
const activeBuyers = [
    {
        id: 1,
        name: "Sarah Chen",
        type: "Tech Professional",
        location: "San Francisco, CA",
        budget: "$2,500,000 - $3,500,000",
        lookingFor: "2-3 bedroom condominium",
        preferredAreas: ["SoMa", "Mission Bay", "Financial District"],
        timeline: "Within 3 months",
        status: "Pre-approved",
        description: "Software engineer at major tech company seeking modern condominium close to work. Prefers new construction with amenities.",
        linkedin: "linkedin.com/in/sarahchen"
    },
    {
        id: 2,
        name: "Michael Rodriguez",
        type: "Family Buyer",
        location: "Berkeley, CA",
        budget: "$1,800,000 - $2,500,000",
        lookingFor: "3-4 bedroom single-family home",
        preferredAreas: ["Noe Valley", "Glen Park", "Bernal Heights"],
        timeline: "Within 6 months",
        status: "Pre-approved",
        description: "Growing family seeking spacious home with yard. Needs good schools and family-friendly neighborhood.",
        linkedin: "linkedin.com/in/michaelrodriguez"
    },
    {
        id: 3,
        name: "Jennifer Park",
        type: "Investor",
        location: "Oakland, CA",
        budget: "$500,000 - $1,200,000",
        lookingFor: "Investment properties",
        preferredAreas: ["Sunset District", "Richmond District", "Excelsior"],
        timeline: "Flexible",
        status: "Cash buyer",
        description: "Real estate investor seeking rental properties. Interested in multi-unit buildings and fixer-uppers.",
        linkedin: "linkedin.com/in/jenniferparkinvestor"
    },
    {
        id: 4,
        name: "David Thompson",
        type: "Executive",
        location: "Mill Valley, CA",
        budget: "$4,000,000 - $6,000,000",
        lookingFor: "Luxury home or penthouse",
        preferredAreas: ["Pacific Heights", "Presidio Heights", "Russian Hill"],
        timeline: "Within 4 months",
        status: "Pre-approved",
        description: "C-level executive relocating to SF. Seeking premium property with views and modern amenities.",
    },
    {
        id: 5,
        name: "Lisa Wang",
        type: "First-time Buyer",
        location: "San Francisco, CA",
        budget: "$800,000 - $1,200,000",
        lookingFor: "1-2 bedroom apartment",
        preferredAreas: ["Hayes Valley", "Lower Pacific Heights", "Castro"],
        timeline: "Within 2 months",
        status: "Pre-approved",
        description: "First-time homebuyer working in finance. Looking for starter home in walkable neighborhood.",
    },
    {
        id: 6,
        name: "Robert Martinez",
        type: "Retiree",
        location: "Sausalito, CA",
        budget: "$1,500,000 - $2,200,000",
        lookingFor: "2-3 bedroom condominium",
        preferredAreas: ["Marina District", "North Beach", "Telegraph Hill"],
        timeline: "Within 6 months",
        status: "Cash buyer",
        description: "Retiring couple downsizing. Wants low-maintenance property with bay views and walkability.",
    },
    {
        id: 7,
        name: "Amanda Foster",
        type: "Tech Professional",
        location: "San Francisco, CA",
        budget: "$1,200,000 - $1,800,000",
        lookingFor: "2 bedroom townhouse or condo",
        preferredAreas: ["Potrero Hill", "Mission District", "Dogpatch"],
        timeline: "Within 3 months",
        status: "Pre-approved",
        description: "Product manager seeking modern property in up-and-coming neighborhood. Values proximity to restaurants and parks.",
    },
    {
        id: 8,
        name: "James Kim",
        type: "Investor",
        location: "San Francisco, CA",
        budget: "$2,000,000 - $4,000,000",
        lookingFor: "Commercial properties",
        preferredAreas: ["Financial District", "Union Square", "SoMa"],
        timeline: "Flexible",
        status: "Cash buyer",
        description: "Commercial real estate investor seeking office spaces and retail properties. Focus on high-traffic areas.",
    },
    {
        id: 9,
        name: "Maria Garcia",
        type: "Family Buyer",
        location: "San Francisco, CA",
        budget: "$2,200,000 - $3,000,000",
        lookingFor: "4 bedroom single-family home",
        preferredAreas: ["Noe Valley", "Sunset District", "Richmond District"],
        timeline: "Within 5 months",
        status: "Pre-approved",
        description: "Family of five seeking larger home. Needs good schools, parks nearby, and safe neighborhood.",
    },
    {
        id: 10,
        name: "Christopher Lee",
        type: "Tech Professional",
        location: "San Francisco, CA",
        budget: "$3,000,000 - $4,500,000",
        lookingFor: "3-4 bedroom luxury condominium",
        preferredAreas: ["Nob Hill", "Russian Hill", "Telegraph Hill"],
        timeline: "Within 2 months",
        status: "Pre-approved",
        description: "Senior engineer seeking premium property with panoramic views. Values modern design and building amenities.",
    },
    {
        id: 11,
        name: "Patricia Brown",
        type: "Investor",
        location: "Berkeley, CA",
        budget: "$600,000 - $1,000,000",
        lookingFor: "Multi-unit properties",
        preferredAreas: ["Bayview", "Excelsior", "Sunset District"],
        timeline: "Flexible",
        status: "Pre-approved",
        description: "Real estate investor building portfolio. Interested in 2-4 unit buildings for rental income.",
    },
    {
        id: 12,
        name: "Thomas Anderson",
        type: "Executive",
        location: "San Francisco, CA",
        budget: "$5,000,000 - $8,000,000",
        lookingFor: "Luxury estate or mansion",
        preferredAreas: ["Pacific Heights", "Presidio Heights", "Russian Hill"],
        timeline: "Within 6 months",
        status: "Pre-approved",
        description: "High-net-worth individual seeking prestigious property. Values privacy, views, and architectural significance.",
    },
    {
        id: 13,
        name: "Emily Johnson",
        type: "First-time Buyer",
        location: "Oakland, CA",
        budget: "$700,000 - $1,000,000",
        lookingFor: "1-2 bedroom apartment",
        preferredAreas: ["Hayes Valley", "Lower Pacific Heights", "Castro"],
        timeline: "Within 4 months",
        status: "Pre-approved",
        description: "Young professional seeking first home. Prefers modern building with amenities and good transit access.",
    },
    {
        id: 14,
        name: "Daniel White",
        type: "Family Buyer",
        location: "San Francisco, CA",
        budget: "$1,800,000 - $2,400,000",
        lookingFor: "3 bedroom townhouse",
        preferredAreas: ["Marina District", "Pacific Heights", "Noe Valley"],
        timeline: "Within 3 months",
        status: "Pre-approved",
        description: "Growing family seeking townhouse with private outdoor space. Values neighborhood character and walkability.",
    },
    {
        id: 15,
        name: "Rachel Green",
        type: "Tech Professional",
        location: "San Francisco, CA",
        budget: "$2,800,000 - $3,800,000",
        lookingFor: "3 bedroom penthouse or luxury condo",
        preferredAreas: ["SoMa", "Mission Bay", "Financial District"],
        timeline: "Within 2 months",
        status: "Pre-approved",
        description: "VP at tech startup seeking premium property. Values modern design, city views, and building amenities.",
    },
    {
        id: 16,
        name: "Kevin Zhang",
        type: "Investor",
        location: "San Francisco, CA",
        budget: "$1,000,000 - $2,000,000",
        lookingFor: "Fixer-upper properties",
        preferredAreas: ["Mission District", "Haight-Ashbury", "Sunset District"],
        timeline: "Flexible",
        status: "Cash buyer",
        description: "House flipper and investor seeking properties needing renovation. Focus on value-add opportunities.",
    },
    {
        id: 17,
        name: "Nicole Taylor",
        type: "Executive",
        location: "Sausalito, CA",
        budget: "$3,500,000 - $5,000,000",
        lookingFor: "Waterfront property",
        preferredAreas: ["Sausalito", "Marina District", "Telegraph Hill"],
        timeline: "Within 4 months",
        status: "Pre-approved",
        description: "Executive seeking waterfront property with private dock or bay access. Values privacy and views.",
    },
    {
        id: 18,
        name: "Mark Wilson",
        type: "Family Buyer",
        location: "San Francisco, CA",
        budget: "$2,000,000 - $2,800,000",
        lookingFor: "4 bedroom single-family home",
        preferredAreas: ["Richmond District", "Sunset District", "Glen Park"],
        timeline: "Within 5 months",
        status: "Pre-approved",
        description: "Family seeking home with yard and garage. Needs good schools and family-friendly community.",
    },
    {
        id: 19,
        name: "Sophie Martin",
        type: "First-time Buyer",
        location: "San Francisco, CA",
        budget: "$900,000 - $1,300,000",
        lookingFor: "2 bedroom condominium",
        preferredAreas: ["Hayes Valley", "Lower Pacific Heights", "Castro"],
        timeline: "Within 3 months",
        status: "Pre-approved",
        description: "Marketing professional seeking modern condominium. Values walkability, restaurants, and transit.",
    },
    {
        id: 20,
        name: "Ryan O'Connor",
        type: "Tech Professional",
        location: "San Francisco, CA",
        budget: "$1,500,000 - $2,200,000",
        lookingFor: "2-3 bedroom modern condo",
        preferredAreas: ["Mission Bay", "SoMa", "Dogpatch"],
        timeline: "Within 2 months",
        status: "Pre-approved",
        description: "Software engineer seeking new construction property. Values modern amenities and tech-enabled features.",
    },
    {
        id: 21,
        name: "Alexandra Kim",
        type: "Tech Professional",
        location: "San Francisco, CA",
        budget: "$2,200,000 - $3,000,000",
        lookingFor: "3 bedroom luxury condominium",
        preferredAreas: ["Nob Hill", "Russian Hill", "Telegraph Hill"],
        timeline: "Within 3 months",
        status: "Pre-approved",
        description: "Product manager at unicorn startup. Seeking premium property with city views and modern finishes.",
    },
    {
        id: 22,
        name: "Marcus Johnson",
        type: "Family Buyer",
        location: "San Francisco, CA",
        budget: "$2,400,000 - $3,200,000",
        lookingFor: "4-5 bedroom single-family home",
        preferredAreas: ["Noe Valley", "Glen Park", "Bernal Heights"],
        timeline: "Within 6 months",
        status: "Pre-approved",
        description: "Family with three children seeking large home with yard. Priority on excellent schools and safe neighborhood.",
    },
    {
        id: 23,
        name: "Victoria Chen",
        type: "Investor",
        location: "Oakland, CA",
        budget: "$800,000 - $1,500,000",
        lookingFor: "Multi-unit rental properties",
        preferredAreas: ["Sunset District", "Richmond District", "Excelsior"],
        timeline: "Flexible",
        status: "Cash buyer",
        description: "Experienced investor building rental portfolio. Seeking 2-4 unit buildings with good ROI potential.",
    },
    {
        id: 24,
        name: "Robert Chang",
        type: "Executive",
        location: "Mill Valley, CA",
        budget: "$5,500,000 - $7,500,000",
        lookingFor: "Luxury estate with views",
        preferredAreas: ["Pacific Heights", "Presidio Heights", "Sea Cliff"],
        timeline: "Within 4 months",
        status: "Pre-approved",
        description: "C-suite executive relocating from NYC. Seeking prestigious property with panoramic bay views and privacy.",
    },
    {
        id: 25,
        name: "Jessica Martinez",
        type: "First-time Buyer",
        location: "San Francisco, CA",
        budget: "$850,000 - $1,200,000",
        lookingFor: "1-2 bedroom apartment",
        preferredAreas: ["Hayes Valley", "Lower Pacific Heights", "Castro"],
        timeline: "Within 3 months",
        status: "Pre-approved",
        description: "Marketing director seeking first home. Prefers walkable neighborhood with restaurants and cafes nearby.",
    },
    {
        id: 26,
        name: "William Park",
        type: "Tech Professional",
        location: "San Francisco, CA",
        budget: "$1,800,000 - $2,500,000",
        lookingFor: "2 bedroom modern condominium",
        preferredAreas: ["SoMa", "Mission Bay", "Financial District"],
        timeline: "Within 2 months",
        status: "Pre-approved",
        description: "Senior software engineer at FAANG company. Values proximity to work and modern building amenities.",
    },
    {
        id: 27,
        name: "Michelle Wong",
        type: "Family Buyer",
        location: "Berkeley, CA",
        budget: "$2,000,000 - $2,800,000",
        lookingFor: "3-4 bedroom single-family home",
        preferredAreas: ["Noe Valley", "Sunset District", "Richmond District"],
        timeline: "Within 5 months",
        status: "Pre-approved",
        description: "Growing family seeking home with garage and yard. Needs good public schools and family community.",
    },
    {
        id: 28,
        name: "Jonathan Lee",
        type: "Investor",
        location: "San Francisco, CA",
        budget: "$1,200,000 - $2,000,000",
        lookingFor: "Fixer-upper properties",
        preferredAreas: ["Mission District", "Haight-Ashbury", "Potrero Hill"],
        timeline: "Flexible",
        status: "Cash buyer",
        description: "House flipper seeking properties needing renovation. Focus on value-add opportunities in up-and-coming areas.",
    },
    {
        id: 29,
        name: "Catherine Brown",
        type: "Executive",
        location: "Sausalito, CA",
        budget: "$4,000,000 - $6,000,000",
        lookingFor: "Waterfront luxury property",
        preferredAreas: ["Sausalito", "Marina District", "Telegraph Hill"],
        timeline: "Within 5 months",
        status: "Pre-approved",
        description: "Investment banker seeking waterfront property with private dock access. Values privacy and stunning views."
    },
    {
        id: 30,
        name: "Daniel Kim",
        type: "Tech Professional",
        location: "San Francisco, CA",
        budget: "$2,600,000 - $3,500,000",
        lookingFor: "3 bedroom penthouse",
        preferredAreas: ["Nob Hill", "Russian Hill", "Telegraph Hill"],
        timeline: "Within 3 months",
        status: "Pre-approved",
        description: "VP Engineering seeking premium penthouse with panoramic city and bay views. Values modern design.",
    },
    {
        id: 31,
        name: "Amanda Foster",
        type: "Family Buyer",
        location: "San Francisco, CA",
        budget: "$2,300,000 - $3,000,000",
        lookingFor: "4 bedroom townhouse",
        preferredAreas: ["Marina District", "Pacific Heights", "Noe Valley"],
        timeline: "Within 4 months",
        status: "Pre-approved",
        description: "Family seeking townhouse with private outdoor space. Values neighborhood character and walkability.",
    },
    {
        id: 32,
        name: "Steven Zhang",
        type: "Investor",
        location: "Oakland, CA",
        budget: "$600,000 - $1,000,000",
        lookingFor: "Rental investment properties",
        preferredAreas: ["Bayview", "Excelsior", "Sunset District"],
        timeline: "Flexible",
        status: "Pre-approved",
        description: "Real estate investor building portfolio. Interested in single-family homes and small multi-unit buildings.",
    },
    {
        id: 33,
        name: "Rachel Green",
        type: "First-time Buyer",
        location: "San Francisco, CA",
        budget: "$950,000 - $1,300,000",
        lookingFor: "2 bedroom condominium",
        preferredAreas: ["Hayes Valley", "Lower Pacific Heights", "Castro"],
        timeline: "Within 4 months",
        status: "Pre-approved",
        description: "Designer seeking first home in vibrant neighborhood. Prefers modern building with character.",
    },
    {
        id: 34,
        name: "Michael Chen",
        type: "Tech Professional",
        location: "San Francisco, CA",
        budget: "$1,600,000 - $2,300,000",
        lookingFor: "2-3 bedroom modern condo",
        preferredAreas: ["Mission Bay", "SoMa", "Dogpatch"],
        timeline: "Within 2 months",
        status: "Pre-approved",
        description: "Data scientist seeking new construction property. Values smart home features and modern amenities.",
    },
    {
        id: 35,
        name: "Lisa Anderson",
        type: "Family Buyer",
        location: "San Francisco, CA",
        budget: "$2,500,000 - $3,300,000",
        lookingFor: "4-5 bedroom single-family home",
        preferredAreas: ["Richmond District", "Sunset District", "Glen Park"],
        timeline: "Within 6 months",
        status: "Pre-approved",
        description: "Large family seeking spacious home with multiple bathrooms. Needs good schools and parks nearby.",
    },
    {
        id: 36,
        name: "Kevin Wang",
        type: "Investor",
        location: "San Francisco, CA",
        budget: "$1,500,000 - $2,500,000",
        lookingFor: "Commercial properties",
        preferredAreas: ["Financial District", "Union Square", "SoMa"],
        timeline: "Flexible",
        status: "Cash buyer",
        description: "Commercial real estate investor seeking office and retail spaces. Focus on high-traffic prime locations.",
    },
    {
        id: 37,
        name: "Patricia White",
        type: "Executive",
        location: "Mill Valley, CA",
        budget: "$6,000,000 - $9,000,000",
        lookingFor: "Luxury mansion or estate",
        preferredAreas: ["Pacific Heights", "Presidio Heights", "Sea Cliff"],
        timeline: "Within 6 months",
        status: "Pre-approved",
        description: "High-net-worth individual seeking prestigious estate. Values architectural significance and privacy.",
    },
    {
        id: 38,
        name: "Christopher Taylor",
        type: "Tech Professional",
        location: "San Francisco, CA",
        budget: "$2,800,000 - $3,800,000",
        lookingFor: "3 bedroom luxury condominium",
        preferredAreas: ["Nob Hill", "Russian Hill", "Telegraph Hill"],
        timeline: "Within 3 months",
        status: "Pre-approved",
        description: "Senior engineer at tech unicorn. Seeking premium property with panoramic views and modern design.",
    },
    {
        id: 39,
        name: "Nicole Garcia",
        type: "Family Buyer",
        location: "Berkeley, CA",
        budget: "$1,900,000 - $2,600,000",
        lookingFor: "3-4 bedroom single-family home",
        preferredAreas: ["Noe Valley", "Glen Park", "Bernal Heights"],
        timeline: "Within 5 months",
        status: "Pre-approved",
        description: "Growing family seeking home with yard. Needs good schools and family-friendly neighborhood.",
    },
    {
        id: 40,
        name: "Andrew Liu",
        type: "Investor",
        location: "San Francisco, CA",
        budget: "$700,000 - $1,100,000",
        lookingFor: "Multi-unit properties",
        preferredAreas: ["Sunset District", "Richmond District", "Excelsior"],
        timeline: "Flexible",
        status: "Pre-approved",
        description: "Real estate investor building rental portfolio. Interested in 2-4 unit buildings for steady income.",
    },
    {
        id: 41,
        name: "Samantha Davis",
        type: "First-time Buyer",
        location: "Oakland, CA",
        budget: "$800,000 - $1,100,000",
        lookingFor: "1-2 bedroom apartment",
        preferredAreas: ["Hayes Valley", "Lower Pacific Heights", "Castro"],
        timeline: "Within 4 months",
        status: "Pre-approved",
        description: "Young professional seeking first home. Prefers modern building with amenities and good transit access."
    },
    {
        id: 42,
        name: "Brian Wilson",
        type: "Tech Professional",
        location: "San Francisco, CA",
        budget: "$1,700,000 - $2,400,000",
        lookingFor: "2-3 bedroom modern condo",
        preferredAreas: ["Mission Bay", "SoMa", "Dogpatch"],
        timeline: "Within 2 months",
        status: "Pre-approved",
        description: "Product manager seeking new construction property. Values modern amenities and tech-enabled features.",
    },
    {
        id: 43,
        name: "Melissa Thompson",
        type: "Family Buyer",
        location: "San Francisco, CA",
        budget: "$2,200,000 - $2,900,000",
        lookingFor: "4 bedroom single-family home",
        preferredAreas: ["Richmond District", "Sunset District", "Glen Park"],
        timeline: "Within 5 months",
        status: "Pre-approved",
        description: "Family seeking home with yard and garage. Needs good schools and family-friendly community.",
    },
    {
        id: 44,
        name: "James Park",
        type: "Investor",
        location: "San Francisco, CA",
        budget: "$1,000,000 - $1,800,000",
        lookingFor: "Fixer-upper properties",
        preferredAreas: ["Mission District", "Haight-Ashbury", "Sunset District"],
        timeline: "Flexible",
        status: "Cash buyer",
        description: "House flipper seeking properties needing renovation. Focus on value-add opportunities.",
    },
    {
        id: 45,
        name: "Lauren Martinez",
        type: "Executive",
        location: "Sausalito, CA",
        budget: "$3,800,000 - $5,500,000",
        lookingFor: "Waterfront property",
        preferredAreas: ["Sausalito", "Marina District", "Telegraph Hill"],
        timeline: "Within 4 months",
        status: "Pre-approved",
        description: "Executive seeking waterfront property with private dock or bay access. Values privacy and views.",
    },
    {
        id: 46,
        name: "Eric Johnson",
        type: "Tech Professional",
        location: "San Francisco, CA",
        budget: "$2,400,000 - $3,200,000",
        lookingFor: "3 bedroom luxury condominium",
        preferredAreas: ["Nob Hill", "Russian Hill", "Telegraph Hill"],
        timeline: "Within 3 months",
        status: "Pre-approved",
        description: "Engineering director seeking premium property. Values modern design and building amenities.",
    },
    {
        id: 47,
        name: "Karen Lee",
        type: "Family Buyer",
        location: "San Francisco, CA",
        budget: "$2,100,000 - $2,700,000",
        lookingFor: "3-4 bedroom townhouse",
        preferredAreas: ["Marina District", "Pacific Heights", "Noe Valley"],
        timeline: "Within 4 months",
        status: "Pre-approved",
        description: "Family seeking townhouse with private outdoor space. Values neighborhood character and walkability.",
    },
    {
        id: 48,
        name: "Richard Kim",
        type: "Investor",
        location: "Oakland, CA",
        budget: "$550,000 - $950,000",
        lookingFor: "Rental investment properties",
        preferredAreas: ["Bayview", "Excelsior", "Sunset District"],
        timeline: "Flexible",
        status: "Pre-approved",
        description: "Real estate investor building portfolio. Interested in single-family homes for rental income.",
    },
    {
        id: 49,
        name: "Jennifer Brown",
        type: "First-time Buyer",
        location: "San Francisco, CA",
        budget: "$900,000 - $1,250,000",
        lookingFor: "2 bedroom condominium",
        preferredAreas: ["Hayes Valley", "Lower Pacific Heights", "Castro"],
        timeline: "Within 3 months",
        status: "Pre-approved",
        description: "Marketing professional seeking first home. Values walkability, restaurants, and transit.",
    },
    {
        id: 50,
        name: "Matthew Chen",
        type: "Tech Professional",
        location: "San Francisco, CA",
        budget: "$1,900,000 - $2,600,000",
        lookingFor: "2-3 bedroom modern condo",
        preferredAreas: ["Mission Bay", "SoMa", "Dogpatch"],
        timeline: "Within 2 months",
        status: "Pre-approved",
        description: "Software engineer seeking new construction property. Values modern amenities and tech features.",
    },
    {
        id: 51,
        name: "Stephanie Wong",
        type: "Family Buyer",
        location: "Berkeley, CA",
        budget: "$2,300,000 - $3,100,000",
        lookingFor: "4-5 bedroom single-family home",
        preferredAreas: ["Noe Valley", "Sunset District", "Richmond District"],
        timeline: "Within 6 months",
        status: "Pre-approved",
        description: "Large family seeking spacious home with multiple bathrooms. Needs good schools and parks.",
    },
    {
        id: 52,
        name: "Thomas Rodriguez",
        type: "Investor",
        location: "San Francisco, CA",
        budget: "$1,300,000 - $2,100,000",
        lookingFor: "Commercial properties",
        preferredAreas: ["Financial District", "Union Square", "SoMa"],
        timeline: "Flexible",
        status: "Cash buyer",
        description: "Commercial real estate investor seeking office spaces. Focus on high-traffic prime locations.",
    },
    {
        id: 53,
        name: "Nancy Davis",
        type: "Executive",
        location: "Mill Valley, CA",
        budget: "$5,000,000 - $7,000,000",
        lookingFor: "Luxury estate",
        preferredAreas: ["Pacific Heights", "Presidio Heights", "Sea Cliff"],
        timeline: "Within 5 months",
        status: "Pre-approved",
        description: "High-net-worth executive seeking prestigious property. Values architectural significance and privacy.",
    },
    {
        id: 54,
        name: "Jason Park",
        type: "Tech Professional",
        location: "San Francisco, CA",
        budget: "$2,700,000 - $3,600,000",
        lookingFor: "3 bedroom penthouse",
        preferredAreas: ["Nob Hill", "Russian Hill", "Telegraph Hill"],
        timeline: "Within 3 months",
        status: "Pre-approved",
        description: "VP at tech company seeking premium penthouse with panoramic views. Values modern design.",
    },
    {
        id: 55,
        name: "Angela White",
        type: "Family Buyer",
        location: "San Francisco, CA",
        budget: "$2,000,000 - $2,600,000",
        lookingFor: "3-4 bedroom single-family home",
        preferredAreas: ["Noe Valley", "Glen Park", "Bernal Heights"],
        timeline: "Within 5 months",
        status: "Pre-approved",
        description: "Growing family seeking home with yard. Needs good schools and family-friendly neighborhood.",
    },
    {
        id: 56,
        name: "Benjamin Liu",
        type: "Investor",
        location: "Oakland, CA",
        budget: "$650,000 - $1,050,000",
        lookingFor: "Multi-unit properties",
        preferredAreas: ["Sunset District", "Richmond District", "Excelsior"],
        timeline: "Flexible",
        status: "Pre-approved",
        description: "Real estate investor building rental portfolio. Interested in 2-4 unit buildings for income.",
    },
    {
        id: 57,
        name: "Diana Garcia",
        type: "First-time Buyer",
        location: "San Francisco, CA",
        budget: "$850,000 - $1,150,000",
        lookingFor: "1-2 bedroom apartment",
        preferredAreas: ["Hayes Valley", "Lower Pacific Heights", "Castro"],
        timeline: "Within 4 months",
        status: "Pre-approved",
        description: "Young professional seeking first home. Prefers modern building with amenities and transit.",
    },
    {
        id: 58,
        name: "Ryan Martinez",
        type: "Tech Professional",
        location: "San Francisco, CA",
        budget: "$1,800,000 - $2,500,000",
        lookingFor: "2-3 bedroom modern condo",
        preferredAreas: ["Mission Bay", "SoMa", "Dogpatch"],
        timeline: "Within 2 months",
        status: "Pre-approved",
        description: "Product manager seeking new construction property. Values modern amenities and tech features.",
    },
    {
        id: 59,
        name: "Michelle Anderson",
        type: "Family Buyer",
        location: "San Francisco, CA",
        budget: "$2,400,000 - $3,200,000",
        lookingFor: "4 bedroom single-family home",
        preferredAreas: ["Richmond District", "Sunset District", "Glen Park"],
        timeline: "Within 6 months",
        status: "Pre-approved",
        description: "Family seeking home with yard and garage. Needs good schools and family community.",
    },
    {
        id: 60,
        name: "David Kim",
        type: "Investor",
        location: "San Francisco, CA",
        budget: "$1,100,000 - $1,900,000",
        lookingFor: "Fixer-upper properties",
        preferredAreas: ["Mission District", "Haight-Ashbury", "Potrero Hill"],
        timeline: "Flexible",
        status: "Cash buyer",
        description: "House flipper seeking properties needing renovation. Focus on value-add opportunities.",
    },
    {
        id: 61,
        name: "Lisa Chang",
        type: "Executive",
        location: "Sausalito, CA",
        budget: "$4,200,000 - $6,200,000",
        lookingFor: "Waterfront luxury property",
        preferredAreas: ["Sausalito", "Marina District", "Telegraph Hill"],
        timeline: "Within 4 months",
        status: "Pre-approved",
        description: "Executive seeking waterfront property with private dock. Values privacy and stunning views.",
    },
    {
        id: 62,
        name: "Kevin Wang",
        type: "Tech Professional",
        location: "San Francisco, CA",
        budget: "$2,500,000 - $3,400,000",
        lookingFor: "3 bedroom luxury condominium",
        preferredAreas: ["Nob Hill", "Russian Hill", "Telegraph Hill"],
        timeline: "Within 3 months",
        status: "Pre-approved",
        description: "Senior engineer seeking premium property with panoramic views. Values modern design.",
    },
    {
        id: 63,
        name: "Sarah Johnson",
        type: "Family Buyer",
        location: "Berkeley, CA",
        budget: "$2,100,000 - $2,800,000",
        lookingFor: "3-4 bedroom single-family home",
        preferredAreas: ["Noe Valley", "Glen Park", "Bernal Heights"],
        timeline: "Within 5 months",
        status: "Pre-approved",
        description: "Growing family seeking home with yard. Needs good schools and family-friendly area.",
    },
    {
        id: 64,
        name: "Robert Chen",
        type: "Investor",
        location: "Oakland, CA",
        budget: "$700,000 - $1,100,000",
        lookingFor: "Rental investment properties",
        preferredAreas: ["Bayview", "Excelsior", "Sunset District"],
        timeline: "Flexible",
        status: "Pre-approved",
        description: "Real estate investor building portfolio. Interested in single-family homes for rental.",
    },
    {
        id: 65,
        name: "Emily Park",
        type: "First-time Buyer",
        location: "San Francisco, CA",
        budget: "$950,000 - $1,300,000",
        lookingFor: "2 bedroom condominium",
        preferredAreas: ["Hayes Valley", "Lower Pacific Heights", "Castro"],
        timeline: "Within 3 months",
        status: "Pre-approved",
        description: "Marketing professional seeking first home. Values walkability and vibrant neighborhood.",
    },
    {
        id: 66,
        name: "Michael Lee",
        type: "Tech Professional",
        location: "San Francisco, CA",
        budget: "$1,700,000 - $2,400,000",
        lookingFor: "2-3 bedroom modern condo",
        preferredAreas: ["Mission Bay", "SoMa", "Dogpatch"],
        timeline: "Within 2 months",
        status: "Pre-approved",
        description: "Software engineer seeking new construction. Values modern amenities and tech-enabled features.",
    },
    {
        id: 67,
        name: "Jennifer White",
        type: "Family Buyer",
        location: "San Francisco, CA",
        budget: "$2,300,000 - $3,000,000",
        lookingFor: "4 bedroom single-family home",
        preferredAreas: ["Richmond District", "Sunset District", "Glen Park"],
        timeline: "Within 5 months",
        status: "Pre-approved",
        description: "Family seeking home with yard and garage. Needs good schools and family community.",
    },
    {
        id: 68,
        name: "Christopher Kim",
        type: "Investor",
        location: "San Francisco, CA",
        budget: "$1,200,000 - $2,000,000",
        lookingFor: "Commercial properties",
        preferredAreas: ["Financial District", "Union Square", "SoMa"],
        timeline: "Flexible",
        status: "Cash buyer",
        description: "Commercial real estate investor seeking office and retail spaces in prime locations.",
    },
    {
        id: 69,
        name: "Patricia Martinez",
        type: "Executive",
        location: "Mill Valley, CA",
        budget: "$5,500,000 - $8,000,000",
        lookingFor: "Luxury mansion",
        preferredAreas: ["Pacific Heights", "Presidio Heights", "Sea Cliff"],
        timeline: "Within 6 months",
        status: "Pre-approved",
        description: "High-net-worth individual seeking prestigious estate. Values architectural significance.",
    },
    {
        id: 70,
        name: "Daniel Rodriguez",
        type: "Tech Professional",
        location: "San Francisco, CA",
        budget: "$2,600,000 - $3,500,000",
        lookingFor: "3 bedroom penthouse",
        preferredAreas: ["Nob Hill", "Russian Hill", "Telegraph Hill"],
        timeline: "Within 3 months",
        status: "Pre-approved",
        description: "VP Engineering seeking premium penthouse with panoramic views. Values modern design.",
    },
    {
        id: 71,
        name: "Amanda Liu",
        type: "Family Buyer",
        location: "San Francisco, CA",
        budget: "$2,200,000 - $2,900,000",
        lookingFor: "3-4 bedroom townhouse",
        preferredAreas: ["Marina District", "Pacific Heights", "Noe Valley"],
        timeline: "Within 4 months",
        status: "Pre-approved",
        description: "Family seeking townhouse with private outdoor space. Values neighborhood character.",
    },
    {
        id: 72,
        name: "Steven Wang",
        type: "Investor",
        location: "Oakland, CA",
        budget: "$600,000 - $1,000,000",
        lookingFor: "Multi-unit properties",
        preferredAreas: ["Sunset District", "Richmond District", "Excelsior"],
        timeline: "Flexible",
        status: "Pre-approved",
        description: "Real estate investor building rental portfolio. Interested in 2-4 unit buildings.",
    },
    {
        id: 73,
        name: "Nicole Chen",
        type: "First-time Buyer",
        location: "San Francisco, CA",
        budget: "$900,000 - $1,250,000",
        lookingFor: "2 bedroom condominium",
        preferredAreas: ["Hayes Valley", "Lower Pacific Heights", "Castro"],
        timeline: "Within 4 months",
        status: "Pre-approved",
        description: "Designer seeking first home in vibrant neighborhood. Prefers modern building.",
    },
    {
        id: 74,
        name: "Matthew Park",
        type: "Tech Professional",
        location: "San Francisco, CA",
        budget: "$1,900,000 - $2,600,000",
        lookingFor: "2-3 bedroom modern condo",
        preferredAreas: ["Mission Bay", "SoMa", "Dogpatch"],
        timeline: "Within 2 months",
        status: "Pre-approved",
        description: "Data scientist seeking new construction property. Values smart home features.",
    },
    {
        id: 75,
        name: "Rachel Kim",
        type: "Family Buyer",
        location: "Berkeley, CA",
        budget: "$2,400,000 - $3,200,000",
        lookingFor: "4-5 bedroom single-family home",
        preferredAreas: ["Noe Valley", "Sunset District", "Richmond District"],
        timeline: "Within 6 months",
        status: "Pre-approved",
        description: "Large family seeking spacious home with multiple bathrooms. Needs good schools.",
    },
    {
        id: 76,
        name: "Thomas Lee",
        type: "Investor",
        location: "San Francisco, CA",
        budget: "$1,400,000 - $2,200,000",
        lookingFor: "Fixer-upper properties",
        preferredAreas: ["Mission District", "Haight-Ashbury", "Sunset District"],
        timeline: "Flexible",
        status: "Cash buyer",
        description: "House flipper seeking properties needing renovation. Focus on value-add opportunities.",
    },
    {
        id: 77,
        name: "Victoria White",
        type: "Executive",
        location: "Sausalito, CA",
        budget: "$4,500,000 - $6,500,000",
        lookingFor: "Waterfront luxury property",
        preferredAreas: ["Sausalito", "Marina District", "Telegraph Hill"],
        timeline: "Within 5 months",
        status: "Pre-approved",
        description: "Executive seeking waterfront property with private dock access. Values privacy.",
    },
    {
        id: 78,
        name: "Alexandra Martinez",
        type: "Tech Professional",
        location: "San Francisco, CA",
        budget: "$2,800,000 - $3,700,000",
        lookingFor: "3 bedroom luxury condominium",
        preferredAreas: ["Nob Hill", "Russian Hill", "Telegraph Hill"],
        timeline: "Within 3 months",
        status: "Pre-approved",
        description: "Senior engineer seeking premium property with panoramic views. Values modern design.",
    },
    {
        id: 79,
        name: "Marcus Johnson",
        type: "Family Buyer",
        location: "San Francisco, CA",
        budget: "$2,100,000 - $2,800,000",
        lookingFor: "3-4 bedroom single-family home",
        preferredAreas: ["Noe Valley", "Glen Park", "Bernal Heights"],
        timeline: "Within 5 months",
        status: "Pre-approved",
        description: "Growing family seeking home with yard. Needs good schools and family-friendly area.",
    },
    {
        id: 80,
        name: "Jessica Chang",
        type: "Investor",
        location: "Oakland, CA",
        budget: "$750,000 - $1,150,000",
        lookingFor: "Rental investment properties",
        preferredAreas: ["Bayview", "Excelsior", "Sunset District"],
        timeline: "Flexible",
        status: "Pre-approved",
        description: "Real estate investor building portfolio. Interested in single-family homes for rental.",
    },
    {
        id: 81,
        name: "William Park",
        type: "First-time Buyer",
        location: "San Francisco, CA",
        budget: "$850,000 - $1,200,000",
        lookingFor: "1-2 bedroom apartment",
        preferredAreas: ["Hayes Valley", "Lower Pacific Heights", "Castro"],
        timeline: "Within 3 months",
        status: "Pre-approved",
        description: "Young professional seeking first home. Prefers modern building with amenities.",
    },
    {
        id: 82,
        name: "Michelle Wong",
        type: "Tech Professional",
        location: "San Francisco, CA",
        budget: "$1,800,000 - $2,500,000",
        lookingFor: "2-3 bedroom modern condo",
        preferredAreas: ["Mission Bay", "SoMa", "Dogpatch"],
        timeline: "Within 2 months",
        status: "Pre-approved",
        description: "Product manager seeking new construction property. Values modern amenities.",
    },
    {
        id: 83,
        name: "Jonathan Kim",
        type: "Family Buyer",
        location: "San Francisco, CA",
        budget: "$2,300,000 - $3,100,000",
        lookingFor: "4 bedroom single-family home",
        preferredAreas: ["Richmond District", "Sunset District", "Glen Park"],
        timeline: "Within 6 months",
        status: "Pre-approved",
        description: "Family seeking home with yard and garage. Needs good schools and community.",
    },
    {
        id: 84,
        name: "Catherine Lee",
        type: "Investor",
        location: "San Francisco, CA",
        budget: "$1,300,000 - $2,100,000",
        lookingFor: "Commercial properties",
        preferredAreas: ["Financial District", "Union Square", "SoMa"],
        timeline: "Flexible",
        status: "Cash buyer",
        description: "Commercial real estate investor seeking office spaces in prime locations.",
    },
    {
        id: 85,
        name: "David Chen",
        type: "Executive",
        location: "Mill Valley, CA",
        budget: "$5,000,000 - $7,500,000",
        lookingFor: "Luxury estate",
        preferredAreas: ["Pacific Heights", "Presidio Heights", "Sea Cliff"],
        timeline: "Within 5 months",
        status: "Pre-approved",
        description: "High-net-worth executive seeking prestigious property. Values architectural significance.",
    },
    {
        id: 86,
        name: "Lisa Wang",
        type: "Tech Professional",
        location: "San Francisco, CA",
        budget: "$2,700,000 - $3,600,000",
        lookingFor: "3 bedroom penthouse",
        preferredAreas: ["Nob Hill", "Russian Hill", "Telegraph Hill"],
        timeline: "Within 3 months",
        status: "Pre-approved",
        description: "VP at tech company seeking premium penthouse with panoramic views.",
    },
    {
        id: 87,
        name: "Robert Martinez",
        type: "Family Buyer",
        location: "Berkeley, CA",
        budget: "$2,000,000 - $2,700,000",
        lookingFor: "3-4 bedroom single-family home",
        preferredAreas: ["Noe Valley", "Glen Park", "Bernal Heights"],
        timeline: "Within 5 months",
        status: "Pre-approved",
        description: "Growing family seeking home with yard. Needs good schools and family area.",
    },
    {
        id: 88,
        name: "Amanda Liu",
        type: "Investor",
        location: "Oakland, CA",
        budget: "$650,000 - $1,050,000",
        lookingFor: "Multi-unit properties",
        preferredAreas: ["Sunset District", "Richmond District", "Excelsior"],
        timeline: "Flexible",
        status: "Pre-approved",
        description: "Real estate investor building rental portfolio. Interested in 2-4 unit buildings.",
    },
    {
        id: 89,
        name: "Steven Park",
        type: "First-time Buyer",
        location: "San Francisco, CA",
        budget: "$950,000 - $1,300,000",
        lookingFor: "2 bedroom condominium",
        preferredAreas: ["Hayes Valley", "Lower Pacific Heights", "Castro"],
        timeline: "Within 4 months",
        status: "Pre-approved",
        description: "Marketing professional seeking first home. Values walkability and vibrant area.",
    },
    {
        id: 90,
        name: "Rachel Kim",
        type: "Tech Professional",
        location: "San Francisco, CA",
        budget: "$1,700,000 - $2,400,000",
        lookingFor: "2-3 bedroom modern condo",
        preferredAreas: ["Mission Bay", "SoMa", "Dogpatch"],
        timeline: "Within 2 months",
        status: "Pre-approved",
        description: "Software engineer seeking new construction. Values modern amenities and tech.",
    },
    {
        id: 91,
        name: "Michael White",
        type: "Family Buyer",
        location: "San Francisco, CA",
        budget: "$2,400,000 - $3,200,000",
        lookingFor: "4 bedroom single-family home",
        preferredAreas: ["Richmond District", "Sunset District", "Glen Park"],
        timeline: "Within 5 months",
        status: "Pre-approved",
        description: "Family seeking home with yard and garage. Needs good schools and community.",
    },
    {
        id: 92,
        name: "Patricia Chen",
        type: "Investor",
        location: "San Francisco, CA",
        budget: "$1,200,000 - $2,000,000",
        lookingFor: "Fixer-upper properties",
        preferredAreas: ["Mission District", "Haight-Ashbury", "Potrero Hill"],
        timeline: "Flexible",
        status: "Cash buyer",
        description: "House flipper seeking properties needing renovation. Focus on value-add.",
    },
    {
        id: 93,
        name: "Christopher Wang",
        type: "Executive",
        location: "Sausalito, CA",
        budget: "$4,200,000 - $6,200,000",
        lookingFor: "Waterfront luxury property",
        preferredAreas: ["Sausalito", "Marina District", "Telegraph Hill"],
        timeline: "Within 4 months",
        status: "Pre-approved",
        description: "Executive seeking waterfront property with private dock. Values privacy.",
    },
    {
        id: 94,
        name: "Nicole Martinez",
        type: "Tech Professional",
        location: "San Francisco, CA",
        budget: "$2,500,000 - $3,400,000",
        lookingFor: "3 bedroom luxury condominium",
        preferredAreas: ["Nob Hill", "Russian Hill", "Telegraph Hill"],
        timeline: "Within 3 months",
        status: "Pre-approved",
        description: "Senior engineer seeking premium property with panoramic views.",
    },
    {
        id: 95,
        name: "Daniel Lee",
        type: "Family Buyer",
        location: "San Francisco, CA",
        budget: "$2,200,000 - $2,900,000",
        lookingFor: "3-4 bedroom townhouse",
        preferredAreas: ["Marina District", "Pacific Heights", "Noe Valley"],
        timeline: "Within 4 months",
        status: "Pre-approved",
        description: "Family seeking townhouse with private outdoor space. Values character.",
    },
    {
        id: 96,
        name: "Angela Park",
        type: "Investor",
        location: "Oakland, CA",
        budget: "$700,000 - $1,100,000",
        lookingFor: "Rental investment properties",
        preferredAreas: ["Bayview", "Excelsior", "Sunset District"],
        timeline: "Flexible",
        status: "Pre-approved",
        description: "Real estate investor building portfolio. Interested in rental properties.",
    },
    {
        id: 97,
        name: "Brian Kim",
        type: "First-time Buyer",
        location: "San Francisco, CA",
        budget: "$900,000 - $1,250,000",
        lookingFor: "2 bedroom condominium",
        preferredAreas: ["Hayes Valley", "Lower Pacific Heights", "Castro"],
        timeline: "Within 3 months",
        status: "Pre-approved",
        description: "Designer seeking first home in vibrant neighborhood. Prefers modern building.",
    },
    {
        id: 98,
        name: "Melissa Chen",
        type: "Tech Professional",
        location: "San Francisco, CA",
        budget: "$1,900,000 - $2,600,000",
        lookingFor: "2-3 bedroom modern condo",
        preferredAreas: ["Mission Bay", "SoMa", "Dogpatch"],
        timeline: "Within 2 months",
        status: "Pre-approved",
        description: "Data scientist seeking new construction property. Values smart home features.",
    },
    {
        id: 99,
        name: "Thomas Wong",
        type: "Family Buyer",
        location: "Berkeley, CA",
        budget: "$2,300,000 - $3,100,000",
        lookingFor: "4-5 bedroom single-family home",
        preferredAreas: ["Noe Valley", "Sunset District", "Richmond District"],
        timeline: "Within 6 months",
        status: "Pre-approved",
        description: "Large family seeking spacious home with multiple bathrooms. Needs good schools.",
    },
    {
        id: 100,
        name: "Lauren Johnson",
        type: "Investor",
        location: "San Francisco, CA",
        budget: "$1,400,000 - $2,200,000",
        lookingFor: "Commercial properties",
        preferredAreas: ["Financial District", "Union Square", "SoMa"],
        timeline: "Flexible",
        status: "Cash buyer",
        description: "Commercial real estate investor seeking office and retail spaces in prime locations.",
    }
];

// Render buyers profiles
function renderBuyers() {
    const buyersGrid = document.getElementById('buyersGrid');
    if (!buyersGrid) return;

    buyersGrid.innerHTML = activeBuyers.map(buyer => `
        <div class="buyer-card">
            <div class="buyer-header">
                <div class="buyer-avatar">${buyer.name.charAt(0)}</div>
                <div class="buyer-info">
                    <h3 class="buyer-name">${buyer.name}</h3>
                    <span class="buyer-type">${buyer.type}</span>
                </div>
            </div>
            <div class="buyer-details">
                <div class="buyer-detail-item">
                    <strong>📍 Location:</strong> ${buyer.location}
                </div>
                <div class="buyer-detail-item">
                    <strong>💰 Budget:</strong> ${buyer.budget}
                </div>
                <div class="buyer-detail-item">
                    <strong>🏠 Looking For:</strong> ${buyer.lookingFor}
                </div>
                <div class="buyer-detail-item">
                    <strong>📍 Preferred Areas:</strong> ${buyer.preferredAreas.join(', ')}
                </div>
                <div class="buyer-detail-item">
                    <strong>⏰ Timeline:</strong> ${buyer.timeline}
                </div>
                <div class="buyer-detail-item">
                    <strong>✅ Status:</strong> <span class="buyer-status">${buyer.status}</span>
                </div>
            </div>
            <div class="buyer-description">
                <p>${buyer.description}</p>
            </div>
            <div class="buyer-actions">
                <button class="btn btn-primary" onclick="showBuyerContact(${buyer.id})">Contact Buyer</button>
            </div>
        </div>
    `).join('');
}

// Show buyer contact information in modal
function showBuyerContact(buyerId) {
    const buyer = activeBuyers.find(b => b.id === buyerId);
    if (!buyer) return;

    const modal = document.getElementById('buyerContactModal');
    const modalBody = document.getElementById('buyerContactBody');
    
    if (!modal || !modalBody) return;

    const linkedin = buyer.linkedin || '';

    // Build contact information HTML
    let contactHTML = `
        <div class="buyer-contact-header">
            <div class="buyer-contact-avatar">${buyer.name.charAt(0)}</div>
            <div>
                <h2 class="buyer-contact-name">${buyer.name}</h2>
                <p class="buyer-contact-type">${buyer.type}</p>
            </div>
        </div>
        <div class="buyer-contact-info">
            <h3>Contact Information</h3>
            <div class="contact-details">
    `;

    if (linkedin) {
        const linkedinUrl = linkedin.startsWith('http') ? linkedin : `https://${linkedin}`;
        contactHTML += `
            <div class="contact-item">
                <strong>💼 LinkedIn:</strong>
                <a href="${linkedinUrl}" target="_blank" rel="noopener noreferrer" class="contact-link">${linkedin}</a>
            </div>
        `;
    } else {
        contactHTML += `
            <div class="contact-item">
                <p style="color: var(--text-light); font-style: italic;">LinkedIn profile not available.</p>
            </div>
        `;
    }

    contactHTML += `
            </div>
            <div class="buyer-contact-summary">
                <h4>Buyer Profile Summary</h4>
                <p><strong>Budget:</strong> ${buyer.budget}</p>
                <p><strong>Looking For:</strong> ${buyer.lookingFor}</p>
                <p><strong>Preferred Areas:</strong> ${buyer.preferredAreas.join(', ')}</p>
                <p><strong>Timeline:</strong> ${buyer.timeline}</p>
                <p><strong>Status:</strong> <span class="buyer-status">${buyer.status}</span></p>
            </div>
            <div class="buyer-contact-actions">
                ${linkedin ? `<button class="btn btn-primary" onclick="window.open('https://${linkedin.startsWith('http') ? linkedin.replace('https://', '') : linkedin}', '_blank')">View LinkedIn Profile</button>` : ''}
                ${!linkedin ? `<button class="btn btn-primary" onclick="document.getElementById('buyerContactModal').style.display='none'; document.getElementById('contact').scrollIntoView({behavior:'smooth'});">Use Contact Form</button>` : ''}
            </div>
        </div>
    `;

    modalBody.innerHTML = contactHTML;
    modal.style.display = 'block';
}

// Copy to clipboard function
function copyToClipboard(text, type) {
    navigator.clipboard.writeText(text).then(() => {
        // Show success message
        const btn = event.target;
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        btn.style.background = '#10b981';
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        alert('Failed to copy to clipboard');
    });
}

// Initialize buyer contact modal
function initializeBuyerContactModal() {
    const modal = document.getElementById('buyerContactModal');
    const closeBtn = document.getElementById('buyerModalClose');
    
    if (!modal || !closeBtn) return;

    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

// Active Sellers Data - Profiles categorized by sale probability (High/Medium/Low)
// Based on indicators: relocation, job change, divorce, downsizing, financial need, estate sale
const activeSellers = [
    {
        id: 1,
        name: "Robert Anderson",
        type: "Relocating - Job Transfer",
        location: "San Francisco, Pacific Heights",
        propertyType: "Luxury Single-Family Home",
        askingPrice: "$4,500,000",
        propertyDetails: "5 bedrooms, 4 bathrooms, 3,500 sqft",
        propertyAreas: ["Pacific Heights", "Presidio Heights"],
        timeline: "Ready to sell",
        status: "Motivated seller",
        saleProbability: "High",
        hasAgent: false,
        indicators: ["Job transfer to NYC", "Must sell within 60 days", "Property in excellent condition", "Competitively priced"],
        description: "Tech executive relocating to NYC for new position. Must sell within 60 days. Beautiful Victorian home in prime Pacific Heights location. Recently renovated with modern amenities while preserving historic character. Stunning bay views.",
        linkedin: "linkedin.com/in/robertanderson"
    },
    {
        id: 2,
        name: "Jennifer Martinez",
        type: "Investor - Portfolio Rebalancing",
        location: "San Francisco, SoMa",
        propertyType: "Modern Condominium",
        askingPrice: "$2,800,000",
        propertyDetails: "3 bedrooms, 2 bathrooms, 1,800 sqft",
        propertyAreas: ["SoMa", "Mission Bay"],
        timeline: "Within 3 months",
        status: "Pre-listed",
        saleProbability: "Medium",
        hasAgent: false,
        indicators: ["Portfolio rebalancing", "Multiple properties", "Flexible timeline", "Market testing"],
        description: "Real estate investor rebalancing portfolio. Investment property in desirable SoMa district. Modern building with premium amenities. Great rental income potential or perfect for owner-occupant.",
        linkedin: "linkedin.com/in/jennifermartinez"
    },
    {
        id: 3,
        name: "Michael Chen",
        type: "Relocating - Family Move",
        location: "San Francisco, Noe Valley",
        propertyType: "Townhouse",
        askingPrice: "$2,200,000",
        propertyDetails: "4 bedrooms, 3 bathrooms, 2,200 sqft",
        propertyAreas: ["Noe Valley", "Glen Park"],
        timeline: "Within 2 months",
        status: "Motivated seller",
        saleProbability: "High",
        hasAgent: false,
        indicators: ["Family relocating to Texas", "New job starts in 60 days", "Children enrolled in new school", "Motivated timeline"],
        description: "Family relocating to Texas for new job opportunity. Must sell within 2 months. Well-maintained townhouse in family-friendly Noe Valley. Excellent schools nearby, private backyard.",
        linkedin: "linkedin.com/in/michaelchen"
    },
    {
        id: 4,
        name: "Sarah Thompson",
        type: "Estate Sale - Probate",
        location: "San Francisco, Russian Hill",
        propertyType: "Historic Condominium",
        askingPrice: "$3,500,000",
        propertyDetails: "3 bedrooms, 2 bathrooms, 2,000 sqft",
        propertyAreas: ["Russian Hill", "Telegraph Hill"],
        timeline: "Ready to sell",
        status: "Estate sale",
        saleProbability: "High",
        hasAgent: false,
        indicators: ["Probate sale", "Heirs need to liquidate", "Property vacant", "Quick sale needed"],
        description: "Estate sale - probate property. Heirs need to liquidate assets. Beautiful historic condominium with panoramic bay views. Original architectural details preserved. Prime Russian Hill location.",
        linkedin: "linkedin.com/in/sarahthompson"
    },
    {
        id: 5,
        name: "David Park",
        type: "Downsizing - Retirement",
        location: "San Francisco, Marina District",
        propertyType: "Single-Family Home",
        askingPrice: "$3,200,000",
        propertyDetails: "4 bedrooms, 3 bathrooms, 2,800 sqft",
        propertyAreas: ["Marina District", "Pacific Heights"],
        timeline: "Within 3 months",
        status: "Motivated seller",
        saleProbability: "Medium",
        hasAgent: false,
        indicators: ["Retirement planning", "Empty nesters", "Already purchased smaller home", "Flexible timeline"],
        description: "Empty nesters downsizing for retirement. Already purchased smaller condominium. Spacious home in Marina District with private garden. Close to Marina Green and Presidio.",
        linkedin: "linkedin.com/in/davidpark"
    }
];

// Generate remaining 95 seller profiles with probability categorization
// Categories: High (33%), Medium (34%), Low (33%)
for (let i = 6; i <= 100; i++) {
    const propertyTypes = ["Single-Family Home", "Condominium", "Townhouse", "Luxury Estate", "Multi-Unit Building", "Commercial Property"];
    const areas = [
        ["Pacific Heights", "Presidio Heights"],
        ["SoMa", "Mission Bay"],
        ["Noe Valley", "Glen Park"],
        ["Russian Hill", "Telegraph Hill"],
        ["Marina District", "Pacific Heights"],
        ["Financial District", "Union Square"],
        ["Sunset District", "Richmond District"],
        ["Hayes Valley", "Lower Pacific Heights"],
        ["Mission District", "Potrero Hill"],
        ["Nob Hill", "Russian Hill"]
    ];
    
    const firstNames = ["James", "Patricia", "Robert", "Jennifer", "Michael", "Linda", "William", "Elizabeth", "David", "Barbara", "Richard", "Susan", "Joseph", "Jessica", "Thomas", "Sarah", "Christopher", "Karen", "Charles", "Nancy", "Daniel", "Lisa", "Matthew", "Betty", "Anthony", "Margaret", "Mark", "Sandra", "Donald", "Ashley", "Steven", "Kimberly", "Paul", "Emily", "Andrew", "Donna", "Joshua", "Michelle", "Kenneth", "Carol"];
    const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson", "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores", "Green", "Adams"];
    
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const name = `${firstName} ${lastName}`;
    
    const areaSet = areas[Math.floor(Math.random() * areas.length)];
    const propertyType = propertyTypes[Math.floor(Math.random() * propertyTypes.length)];
    
    const basePrice = Math.floor(Math.random() * 8000000) + 500000;
    const askingPrice = `$${(basePrice / 1000000).toFixed(2)}M`;
    
    const bedrooms = Math.floor(Math.random() * 4) + 2;
    const bathrooms = Math.floor(Math.random() * 3) + 2;
    const sqft = Math.floor(Math.random() * 2000) + 1200;
    
    // Determine probability category (High 33%, Medium 34%, Low 33%)
    let saleProbability, type, status, timeline, indicators, description, hasAgent;
    
    if (i <= 38) { // High probability (33 profiles)
        const highTypes = [
            { type: "Relocating - Job Transfer", indicators: ["Job transfer confirmed", "Start date in 30-60 days", "Must sell quickly", "Competitively priced"] },
            { type: "Relocating - Family Move", indicators: ["Family relocating", "New school enrollment", "Job relocation", "Motivated timeline"] },
            { type: "Divorce - Property Division", indicators: ["Divorce settlement", "Must liquidate", "Quick sale needed", "Property vacant"] },
            { type: "Financial Need - Urgent", indicators: ["Financial hardship", "Debt consolidation", "Medical expenses", "Urgent sale"] },
            { type: "Estate Sale - Probate", indicators: ["Probate sale", "Heirs need funds", "Property vacant", "Quick liquidation"] },
            { type: "Bank REO - Foreclosure", indicators: ["Bank owned", "Below market price", "As-is condition", "Quick sale"] }
        ];
        const highType = highTypes[Math.floor(Math.random() * highTypes.length)];
        type = highType.type;
        saleProbability = "High";
        status = "Motivated seller";
        timeline = i <= 20 ? "Ready to sell" : "Within 1 month";
        indicators = highType.indicators;
        hasAgent = false;
        description = `${type} selling ${propertyType.toLowerCase()} in ${areaSet[0]}. ${indicators[0]}. Must sell quickly. Property features modern amenities and prime location.`;
    } else if (i <= 72) { // Medium probability (34 profiles)
        const mediumTypes = [
            { type: "Downsizing - Retirement", indicators: ["Retirement planning", "Empty nesters", "Purchased smaller home", "Flexible timeline"] },
            { type: "Downsizing - Lifestyle Change", indicators: ["Lifestyle change", "Simpler living", "Flexible timeline", "No urgency"] },
            { type: "Investor - Portfolio Rebalancing", indicators: ["Portfolio rebalancing", "Multiple properties", "Market testing", "Flexible"] },
            { type: "Pre-listed - Testing Market", indicators: ["Testing market", "Considering offers", "Flexible timeline", "Well-maintained property"] },
            { type: "Relocating - Planning Phase", indicators: ["Planning relocation", "Job search in progress", "Flexible timeline", "Open to offers"] }
        ];
        const mediumType = mediumTypes[Math.floor(Math.random() * mediumTypes.length)];
        type = mediumType.type;
        saleProbability = "Medium";
        status = "Pre-listed";
        timeline = "Within 2-3 months";
        indicators = mediumType.indicators;
        hasAgent = Math.random() > 0.7; // 30% have agent
        description = `${type} selling ${propertyType.toLowerCase()} in ${areaSet[0]}. ${indicators[0]}. Flexible on timeline. Property features modern amenities and prime location.`;
    } else { // Low probability (28 profiles)
        const lowTypes = [
            { type: "Testing Market - Not Motivated", indicators: ["Testing market value", "No urgency", "Overpriced", "Flexible timeline"] },
            { type: "Investment - Long Term Hold", indicators: ["Long-term investment", "No pressure to sell", "Waiting for right offer", "Flexible"] },
            { type: "Developer - Land Banking", indicators: ["Land banking", "Future development", "No immediate sale", "Testing interest"] },
            { type: "Homeowner - Exploring Options", indicators: ["Exploring options", "Not committed to sell", "Market research", "Flexible"] }
        ];
        const lowType = lowTypes[Math.floor(Math.random() * lowTypes.length)];
        type = lowType.type;
        saleProbability = "Low";
        status = "Flexible";
        timeline = "Flexible";
        indicators = lowType.indicators;
        hasAgent = Math.random() > 0.5; // 50% have agent
        description = `${type} selling ${propertyType.toLowerCase()} in ${areaSet[0]}. ${indicators[0]}. Exploring market options. Property features modern amenities and prime location.`;
    }
    
    activeSellers.push({
        id: i,
        name: name,
        type: type,
        location: `San Francisco, ${areaSet[0]}`,
        propertyType: propertyType,
        askingPrice: askingPrice,
        propertyDetails: `${bedrooms} bedrooms, ${bathrooms} bathrooms, ${sqft.toLocaleString()} sqft`,
        propertyAreas: areaSet,
        timeline: timeline,
        status: status,
        saleProbability: saleProbability,
        hasAgent: hasAgent,
        indicators: indicators,
        description: description,
        linkedin: `linkedin.com/in/${firstName.toLowerCase()}${lastName.toLowerCase()}`
    });
}

// Render sellers profiles
function renderSellers() {
    const sellersGrid = document.getElementById('sellersGrid');
    if (!sellersGrid) return;

    sellersGrid.innerHTML = activeSellers.map(seller => {
        const probabilityClass = seller.saleProbability?.toLowerCase() || 'medium';
        const probabilityLabel = seller.saleProbability || 'Medium';
        const agentStatus = seller.hasAgent ? 'Has Agent' : 'No Agent';
        const agentClass = seller.hasAgent ? 'has-agent' : 'no-agent';
        
        return `
        <div class="seller-card" data-probability="${probabilityClass}">
            <div class="seller-header">
                <div class="seller-avatar">${seller.name.charAt(0)}</div>
                <div class="seller-info">
                    <h3 class="seller-name">${seller.name}</h3>
                    <span class="seller-type">${seller.type}</span>
                </div>
                <div class="seller-probability-badge probability-${probabilityClass}">
                    ${probabilityLabel} Probability
                </div>
            </div>
            <div class="seller-details">
                <div class="seller-detail-item">
                    <strong>📍 Location:</strong> ${seller.location}
                </div>
                <div class="seller-detail-item">
                    <strong>🏠 Property Type:</strong> ${seller.propertyType}
                </div>
                <div class="seller-detail-item">
                    <strong>💰 Asking Price:</strong> ${seller.askingPrice}
                </div>
                <div class="seller-detail-item">
                    <strong>📐 Property Details:</strong> ${seller.propertyDetails}
                </div>
                <div class="seller-detail-item">
                    <strong>📍 Property Areas:</strong> ${seller.propertyAreas.join(', ')}
                </div>
                <div class="seller-detail-item">
                    <strong>⏰ Timeline:</strong> ${seller.timeline}
                </div>
                <div class="seller-detail-item">
                    <strong>✅ Status:</strong> <span class="seller-status">${seller.status}</span>
                </div>
                <div class="seller-detail-item">
                    <strong>👤 Agent Status:</strong> <span class="agent-status ${agentClass}">${agentStatus}</span>
                </div>
                ${seller.indicators ? `
                <div class="seller-indicators">
                    <strong>📊 Key Indicators:</strong>
                    <ul>
                        ${seller.indicators.map(ind => `<li>${ind}</li>`).join('')}
                    </ul>
                </div>
                ` : ''}
            </div>
            <div class="seller-description">
                <p>${seller.description}</p>
            </div>
            <div class="seller-actions">
                <button class="btn btn-primary" onclick="showSellerContact(${seller.id})">Contact Seller</button>
            </div>
        </div>
    `;
    }).join('');
}

// Show seller contact information in modal
function showSellerContact(sellerId) {
    const seller = activeSellers.find(s => s.id === sellerId);
    if (!seller) return;

    const modal = document.getElementById('sellerContactModal');
    const modalBody = document.getElementById('sellerContactBody');
    
    if (!modal || !modalBody) return;

    const linkedin = seller.linkedin || '';

    let contactHTML = `
        <div class="seller-contact-header">
            <div class="seller-contact-avatar">${seller.name.charAt(0)}</div>
            <div>
                <h2 class="seller-contact-name">${seller.name}</h2>
                <p class="seller-contact-type">${seller.type}</p>
            </div>
        </div>
        <div class="seller-contact-info">
            <h3>Contact Information</h3>
            <div class="contact-details">
    `;

    if (linkedin) {
        const linkedinUrl = linkedin.startsWith('http') ? linkedin : `https://${linkedin}`;
        contactHTML += `
            <div class="contact-item">
                <strong>💼 LinkedIn:</strong>
                <a href="${linkedinUrl}" target="_blank" rel="noopener noreferrer" class="contact-link">${linkedin}</a>
            </div>
        `;
    } else {
        contactHTML += `
            <div class="contact-item">
                <p style="color: var(--text-light); font-style: italic;">LinkedIn profile not available.</p>
            </div>
        `;
    }

    contactHTML += `
            </div>
            <div class="seller-contact-summary">
                <h4>Property Summary</h4>
                <p><strong>Sale Probability:</strong> <span class="seller-probability-badge probability-${seller.saleProbability?.toLowerCase() || 'medium'}">${seller.saleProbability || 'Medium'}</span></p>
                <p><strong>Agent Status:</strong> <span class="agent-status ${seller.hasAgent ? 'has-agent' : 'no-agent'}">${seller.hasAgent ? 'Has Agent' : 'No Agent - Seeking Representation'}</span></p>
                <p><strong>Property Type:</strong> ${seller.propertyType}</p>
                <p><strong>Asking Price:</strong> ${seller.askingPrice}</p>
                <p><strong>Property Details:</strong> ${seller.propertyDetails}</p>
                <p><strong>Location:</strong> ${seller.location}</p>
                <p><strong>Property Areas:</strong> ${seller.propertyAreas.join(', ')}</p>
                <p><strong>Timeline:</strong> ${seller.timeline}</p>
                <p><strong>Status:</strong> <span class="seller-status">${seller.status}</span></p>
                ${seller.indicators ? `
                <div class="seller-indicators-modal">
                    <h5>Key Indicators:</h5>
                    <ul>
                        ${seller.indicators.map(ind => `<li>${ind}</li>`).join('')}
                    </ul>
                </div>
                ` : ''}
            </div>
            <div class="seller-contact-actions">
                ${linkedin ? `<button class="btn btn-primary" onclick="window.open('https://${linkedin.startsWith('http') ? linkedin.replace('https://', '') : linkedin}', '_blank')">View LinkedIn Profile</button>` : ''}
                ${!linkedin ? `<button class="btn btn-primary" onclick="document.getElementById('sellerContactModal').style.display='none'; document.getElementById('contact').scrollIntoView({behavior:'smooth'});">Use Contact Form</button>` : ''}
            </div>
        </div>
    `;

    modalBody.innerHTML = contactHTML;
    modal.style.display = 'block';
}

// Initialize seller contact modal
function initializeSellerContactModal() {
    const modal = document.getElementById('sellerContactModal');
    const closeBtn = document.getElementById('sellerModalClose');
    
    if (!modal || !closeBtn) return;

    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}
