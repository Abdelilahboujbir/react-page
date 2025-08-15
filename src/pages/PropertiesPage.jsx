import Header from "../components/header";
import Footer from "../components/footer"

import React from 'react';
import { Bed, Bath, Square, MapPin, Eye } from 'lucide-react';

const PropertiesPage = () => {
  const handleViewDetails = (apartmentId) => {
    // In your actual implementation, you'll use: navigate(`/apartment/${apartmentId}`);
    console.log(`Navigate to apartment ${apartmentId}`);
  };
  // Sample apartments array - replace with your actual data
  const apartments = [
    {
      id: 1,
      title: "Marrakech I Palmeraie",
      description: "In the Palmeraie, less than 15 minutes from the city center, this villa of ± 1.600 m² is built in a Middle Eastern style in the heart of a park of ± 10.000 m². The villa is comprised of ten suites in total (five in the main house, and five in the exterior pavilions) each with their own bathroom, toilets, and dressing room, as well as numerous indoor and outdoor living spaces such as a large reception pergola style, a patio, living rooms and dining rooms on a shaded terrace in the garden, a bedouin tent. Its future inhabitants will also benefit from many places of relaxation and well-being. All the villa furniture is from eastern countries such as Egypt, Iran, Lebanon, Turkey, Syria, and India (from 11 different countries). Its much sought-after furnishings make it a villa that stands out from the other properties. Regarding the staff, it has five service rooms, and the house has two entrances from the street. others: spa, hammam, sauna, jacuzzi, rest and massage room. The Palmeraie is one of the most popular areas in Marrakech. It covers more than 13,000 hectares and has more than 150,000 palm trees. It is a true oasis of calm and luxuriance at the gates of the city. For more information, please contact Franck LE PECULIER on +212 6 63 15 92 44.",
      images: [
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Fx0rcf05m815b43jyy96eh34281i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Fgjp2ry4qwc72462cfjk9sxw331i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2F2hsz9c3gvsyf4gtf2m2d2npv42i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Fbed9h9x5p1dhmey1ke4esb8s92i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2F3bx1cd0gps3z4c2bkesxgxrsw6i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Fp59dk24xw9s34z6m9ngb3t8bk6i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png"
      ],
      price: 2850000,
      currency: "USD",
      location: "Marrakech",
      bedrooms: 10,
      bathrooms: 10,
      area: 1600
    },
    {
      id: 2,
      title: "Splendid mediterranean style property in Sant Antoni de Calonge",
      description: "Magnificent Mediterranean style property, located in a quiet residential neighborhood, just minutes from the center and the beach of Sant Antoni de Calonge. Built on a generous plot of more than 2,000 m², this house offers total privacy and an exclusive environment. The main house stands out for its vast living-dining room, which has a separate bar, ideal for entertaining guests. Spacious fully equipped kitchen, with pantry and laundry attached. It also has a maid's room and a full bathroom. Two large suites with full bathrooms, offering comfort and privacy. All rooms of the house have direct access to its terraces and the beautiful garden surrounding the property. In the tower there is an additional bedroom with its own full bathroom, an ideal space to create a private retreat or studio. The guest house offers four spacious double bedrooms, two of which are en-suite with full bathrooms. In addition, there is a separate bathroom. On the second floor of the guest house, there is a beautiful game room, perfect for entertaining and fun for the whole family. The extensive landscaped garden offers multiple spaces to relax and enjoy the tranquility: A private pool area, surrounded by greenery, ideal for enjoying the sun in complete privacy. Different play areas distributed throughout the garden, perfect for the enjoyment of young and old. The property also includes a vast garage, large enough to house a boat. This property, with Mediterranean charm, is ideal both for year-round living and for enjoying a vacation on the Costa Brava. Its spaciousness, privacy and proximity to the sea make it an unbeatable option.",
      images: [
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1348i215%2Fwqwdw1tmcw9945pynn7c545ep5i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1348i215%2F528qe9gedna14mab2h719qngr5i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1348i215%2F7edzkygry8j94zjgssv80km7z1i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1348i215%2Fds40shv69hsjmg28fyf8k9hjh0i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1348i215%2Fxw7psrrzyhba4c6ngdn7a0t6f5i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1348i215%2F1vnnvjc8nxf5mk2r462e6550f4i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png"
      ],
      price: 2482444,
      currency: "USD",
      location: "Spain sant antoni de Calonge",
      bedrooms: 8,
      bathrooms: 8,
      area: 2203
    },
    {
      id: 3,
      title: "Elegant Villa in Marrakech",
      description: "The two-hectare estate is set in a serene location not far from the center of Marrakech. Located off the main 'Route de Fez' road, it's a short 15-20 minute ride to the heart of Marrakech. Arriving at the estate and entering through the main entrance, you'll find the main residential property on the left. An impressive palace-like building with 10 luxury en-suite rooms, a massive swimming pool, and an industrial-quality kitchen. In front of the pool, you will find the pool house. A marble-clad luxury clubhouse that comes equipped with state-of-the-art mixing sets, lights, and professional sound equipment. For owners interested in events, it also has its own kitchen and private bar. Going back towards the estate entrance, you'll find three luxury villas, each of approximately ± 350 m², that consist of 3 suites and 3 bathrooms opening to a private garden, a private swimming pool, a lavish living room, kitchen, and Menzea (covered seating area for 10 people) with an open fireplace facing the pools. Others: heating and air conditioning, staff quarters, garage. La Palmeraie is one of the most popular areas of Marrakech. It covers ± 13.000 hectares and has ± 150.000 palm trees. It is a real oasis of calm and luxuriance at the gates of the city. Pour plus d'informations, veuillez contacter Isabelle Le Péculier at +212 6 63 15 03 21.",
      images: [
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Fctbby087n9d7mb2vejac8fv200i215&amp;w=96&amp;q=75&amp;option=N&amp;permitphotoenlargement=false&amp;fallbackimageurl=https%3A%2F%2Fwww.sothebysrealty.com%2Fassets%2Fimages%2Fcommon%2Fnophoto%2Flisting.jpg",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Fm34zk3q0phg5m3y62bzyxk1wp7i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2F966b8hma6gk7mrj6p73xge3833i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Ftrabs9cs1t1f4h23m8rpj7a297i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2F3rk8yych50g24t6gp9mfva4cm1i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2F42vnkestw2hbm3ybsfhrs6cr91i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png"
      ],
      price: 3750000,
      currency: "USD",
      location: "Marrakech",
      bedrooms: 19,
      bathrooms: 19,
      area: 4000
    },
    {
      id: 4,
      title: "Marrakech I Route de l'Ourika",
      description: "Morocco Sotheby's Realty in Marrakech offers you this property of 2 hectares and ±1700 m² of living space, located 10 minutes from the Royal Golf Course and 20 minutes from the city centre, in the middle of a calm and green countryside. The contemporary main villa is nestled in mature grounds and offers an excellent level of service. Before arriving at the main building, the quality of the upkeep of the grounds is highlighted, but this is only a preamble to the rest of the visit. The first room in the house is the large, light and airy living room with its cathedral ceiling and vast windows overlooking the 26-metre-long heated swimming pool and the park. The six suites, each decorated in a different but still elegant style, all have access to a small private terrace and are divided between the garden level and the first floor. The property is equipped with a cinema room in the basement, as well as a traditional hammam and ample storage space. In addition to a pool house with dining area and gym, there is a guest house to the south-west of the grounds, comprising four bedrooms, a lounge and a small kitchen. Other facilities: Hammam, spa, gym, 2 x Jacuzzis, pool house. The Route de l'Ourika heads south from Marrakech towards the lush Ourika Valley and the winter sports resort of Oukameiden. For more information, please contact David Montérin on +212 6 71 43 72 27.",
      images: [
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Fe2y5k594z956myjzqagcp3sqm2i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Fq5a8gx0rhb8a4n26rjzmbmevc0i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Fcz19yehyy3b9m5y2h095h5gmc7i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Fnxqky5bjcmzs45p2cxzwzs8v16i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2F73zn92jb50tgmj65x6gxfjx2v4i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Fjm8a1j5t6x73mvyz2f67bwmc42i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png"
      ],
      price: 1950000,
      currency: "USD",
      location: "Marrakech",
      bedrooms: 10,
      bathrooms: 10,
      area: 1700
    },
    {
      id: 5,
      title: "Marrakech I Agdal",
      description: "Nestled in a lush green setting just minutes from downtown Marrakech, this prestigious property spans a beautifully landscaped 2.500 m² plot. Offering exceptional comfort and refinement, it captivates with its generous spaces, abundant natural light, and high-end finishes. The villa features five luxurious suites, each with its private bathroom, blending contemporary design with Moroccan craftsmanship. The double living room, elegant dining area, and modern kitchen open onto a spectacular garden a true oasis of tranquility. A vast tree-lined garden surrounds a private pool, expansive terraces, and multiple relaxation areas designed for conviviality and well-being. The basement houses a comprehensive wellness area: traditional hammam, spa, fully equipped gym, and an independent staff accommodation, ensuring comfort and autonomy. A rare property on the market, combining luxury, space, serenity, and functionality perfect as a primary or high-end secondary residence. Additional features: Titled villa, centralized air conditioning, premium finishes, security, easy access, furnished and sold. This expansive district, located south of the city, borders the Agdal Gardens. It hosts numerous hotel complexes and restaurants. Mohammed VI Avenue, which runs through it, provides access to the Ourika road. For more information or to arrange a visit, please contact Abdelhadi Laaouina at +212 6 61 07 49 33.",
      images: [
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2F02c61hde0yj4446tdevhdajaj4i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Fc5mr372y1th54p2v0y0gm0bfb4i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Fh2zwg55hjyynmyy090xezv6fb7i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Fdhapdmt7vbtymgyv2dx46rygm7i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Fysj1y0nvpwrv4ap8pcdrw8psg7i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Fn3z3trng6k8jmjat4h366qhn00i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png"
      ],
      price: 2700000,
      currency: "USD",
      location: "Marrakech",
      bedrooms: 5,
      bathrooms: 5,
      area: 2500
    },
    {
      id: 6,
      title: "Marrakech I Medina",
      description: "Morocco Sotheby's International Realty in Marrakech, presents you in the historic heart of Marrakech, this riad of ± 260 m² with eight rooms in the immediate vicinity of the famous Jemaa El Fna square. The riad's unique decor is a harmonious blend of tradition and modernity. It is laid out on three levels around a spacious patio. The ground floor includes a spa area, several living rooms, a well-equipped modern kitchen and a bathroom. Upstairs, a passageway leads to spacious bedrooms, each with its own elegantly decorated en suite bathroom. The terrace offers several relaxation areas with spectacular views over the rooftops of the medina and the Atlas Mountains. Its strategic location close to the famous Jemaa El Fna square adds to its appeal, thanks to its strong rental potential. Other: Sought-after district, titled riad, air conditioning, furnished, spa, very attractive rental yield. Located in the western part of the medina, just a short walk from the city's main monuments and easily accessible by car, this famous district is also home to several renowned Moroccan restaurants. For further information, please contact Abdelhadi Laaouina on +212 6 61 07 49 33.",
      images: [
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Fwyved86wvyvzmvexh7qbck5kx5i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Fwyved86wvyvzmvexh7qbck5kx5i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2F1egth51hmy5n40263jc6tf0wv5i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png"
        
      ],
      price: 2750000,
      currency: "USD",
      location: "Marrakkech",
      bedrooms: 8,
      bathrooms: 9,
      area: 219
    },
    {
      id: 7,
      title: "Marrakech I Amelkis 1",
      description: "Stunning coastal villa with direct ocean access, infinity pooMorocco Sotheby's Realty in Marrakech presents this 850 m² villa in the heart of a peaceful, leafy setting in the prestigious Amelkis Golf Club, just outside Marrakech. Set in 2.200 m² of wooded parkland with character features, this ‘Marrakchia’ property enjoys absolute peace and is not overlooked. It is an invitation to serenity and luxury, perfect for a primary or secondary residence. On the ground floor, the villa comprises a double lounge with high, majestic domed ceilings, a dining room, 3 bedrooms with en suite bathrooms, a study, and a kitchen. The living rooms offer through views over the gardens and the large covered terrace. Upstairs, there are 3 bedrooms with en suite bathrooms and dressing rooms, including the master suite, which occupies a surface area of around 80 m² and provides access to several large private terraces. On the garden side, the large swimming pool, pool house, Jacuzzi, massage room, and Hammam. The architecture and ambiance of this property strike the perfect balance between authentic Marrakchia and modern comforts. Other: Air conditioning and heating, staff accommodation, 2 car garages, fiber optics. The Amelkis golf course is a secure, residential area close to the town centre, home to a highly renowned 27-hole course. For more information, please contact David Montérin on +212 6 71 43 72 27.l, and panoramic Atlantic Ocean views.",
      images: [
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2F0w76x4j10cpg4kjfx31m4j8qa0i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Fh94sj5ym0hfw4jt859tkdrnp20i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2F3gbyn6mbe6z64da4srksthtws4i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2F01aqwv6y58964ayqhjdben6xf3i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2F8153e17va4f74v2afdje4qdzx0i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2F4ewpts09h9xr4ten1ea49an313i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png"
      ],
      price: 2282303,
      currency: "USD",
      location: "Marrakech",
      bedrooms: 6,
      bathrooms: 6,
      area: 2200
    },
    {
      id: 8,
      title: "Marrakech I Amelkis II",
      description: "Ideally located within the Amelkis estate, in immediate proximity to the golf course, this charming villa of approximately 450 m² is set in a lush 850 m² garden, offering complete privacy. The contemporary villa features over 450 m² of living space. On the ground floor, you will find a fully equipped main kitchen with appliances, a ceiling fan, and an intercom, as well as a verdant patio with a decorative pond opening onto the kitchen and a particularly luminous living area thanks to a 12.6 m panoramic bay window. The living area itself is bright, features a fireplace, and offers breathtaking views of the Atlas Mountains. It opens directly onto a large terrace, a heated swimming pool bordered by sun loungers, a landscaped garden, an outdoor bar area, and garden lounging areas. One suite completes this level, featuring a bathroom with a double shower and double sinks, a private terrace, and an outdoor shower. On the first floor, there are four independent suites, each with its own private bathroom and access to a beautiful terrace featuring a heated pool, offering panoramic views of the golf course and the Atlas range. The basement, bathed in natural light thanks to two light wells, includes staff quarters with a fully equipped kitchen, bedroom, and bathroom, as well as a wellness area featuring a marble hammam, massage space with two tables, changing room, bathroom, and a relaxation or gym area opening onto a planted space. The Amelkis golf estate is a secure residential neighborhood near the city center with a renowned 27‑hole golf course. For more information, please contact Franck LE PECULIER at +212 6 63 15 92 44",
      images: [
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Fcn7erznqazee46y696y0xrb6z7i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Ffyzjf9xp9r3f4wjqd031wxkeb2i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Fjk8afav79hvgmj22b2p0d7acv1i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2F3q65q1bs94je4redbc4jt02bt4i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Fngxb3j5gxk0n45as1yy124s963i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Fmsedv8msaqx0mg22b9xpmrj1m2i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png"
      ],
      price: 1697097,
      currency: "USD",
      location: "Marrakech",
      bedrooms: 5,
      bathrooms: 5,
      area: 857
      
    },
    {
      id: 9,
      title: "Marrakech I Palmeraie",
      description: "Located in the Bab Atlas district of the Palmeraie, this contemporary villa of ± 950 m² is built on a park of half a hectare and enjoys a breathtaking view of the Atlas mountains. A cathedral entrance hall located in the main part of the house leads to the reception rooms. The two living rooms and the dining room extend onto two covered terraces and enjoy unobstructed garden views thanks to large windows. The other part consists of five suites on the ground floor; they are all equipped with ensuite bathrooms, a large dressing room, and a private terrace. The villa is fully equipped with underfloor heating, air conditioning, a sound system, and a SPA with hammam, sauna, fitness area. The swimming pool allows for relaxing moments without any onlookers. Only the finest quality materials (marble, solid parquet, etc.) were used in the construction of this outstanding property. Others: Office, cinema, library, staff accommodation, laundry, reversible air conditioning, fireplace, parking. La Palmeraie is one of the most popular areas of Marrakech. It covers more than 13,000 hectares and offers more than 150,000 palm trees, and it is peaceful and luxuriant. For more information, please contact David Montérin at +212 6 71 43 72 27.",
      images: [
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Fy4m1ncgg53p64na2dx8gahvda5i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2F30h3p1hcqswqmg655ng3nnrrz2i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Fjwxb5vgzb7az456x1chzjsmz91i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Fxay7xvyy30y4mpjk5ccjxvzdx2i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Fbss3atz7fhrxma2w86xdgnzxr5i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Ffxjq0ybq2s1hm8ek9bcv7k1ja4i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png"
      ],
      price: 2691948,
      currency: "USD",
      location: "Marrakech",
      bedrooms: 5,
      bathrooms: 6,
      area: 5712
    },
    {
      id: 10,
      title: "Marrakech I Route de Fes",
      description: "Near Marrakech, on the road to Fez, this villa facing the Atlas Mountains offers an exceptional setting where tranquility and calm prevail. This luxurious air-conditioned villa spans 1.200 sqm and is set on a private and secure one-hectare plot, fully landscaped in a contemporary and elegant architectural style. It features a spacious and luminous living area with 3 lounges including a TV area, a space with a large fireplace, and a vast dining room. In addition, there is a bar area and two fully equipped kitchens. The villa has 6 spacious suites with private bathrooms, overlooking the stunning swimming pool, and independent access. The Master Suite, located upstairs and accessible by a private elevator, offers panoramic views of the Atlas Mountains. The bathroom features a shower & bath, a separate toilet, a dressing room, and a shaded large private terrace. Two additional bedrooms on the first floor share an external bathroom with a shower, toilet, and sink, making it ideal for either household staff or teenagers. The villa's one-hectare private and secure grounds feature a fabulous 8m wide and 21m long heated swimming pool, complemented by a Pool house with an outdoor lounge and dining area. The wellness annex has a Hammam and a complete massage room that are both traditional. Additional features include air conditioning, a heated pool, a wellness area, and staff quarters. Nestled at the crossroads of the Fez Road, the Palmeraie, and the Ouarzazate Road, Bab Atlas is located about ten kilometers from the city center. For more information, please contact Franck LE PECULIER at +212 6 63 15 92 44.",
      images: [
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Fjwx7gkgmvst64ay4mdp416wh96i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Fyzy14495enk349t674sawzek24i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Fv72ndvrw4r5kmct5fjcrffakq2i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Fny3tp2q8meyvm367qmvspmeaw4i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Fqfrzacjcxk3mmgjry38kqa6h97i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Fgkxyfs9awj114tj0y5ny5ehxg6i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png"
      ],
      price: 2574906,
      currency: "USD",
      location: "Marrakech",
      bedrooms: 7,
      bathrooms: 7,
      area: 100000
    },
    {
      id: 11,
      title: "Marrakech I Route de Ouarzazate",
      description: "Located near the Ouarzazate road, not far from the American School and just minutes from the three main golf courses and the town center, this single-storey villa of ± 750 m² is set in a landscaped garden of ± 4800 m². Completely renovated in 2021, the main villa features a spacious living area with fireplace, a small reception room, a library corner, a dining room, a hammam area, a massage room and three bedrooms with their own private bathrooms, including the master. All rooms open onto the garden and pool. In the garden, an independent guest house completes the ensemble, comprising a living room and two bedrooms with en-suite bathrooms. The villa has been carefully decorated to create a warm and welcoming atmosphere, and is equipped with all modern comforts. The interior is bright and airy, with large windows offering unobstructed views of the garden and pool. Accessible from inside the main house, the roof terrace offers a variety of relaxation areas with beautiful views of the Atlas Mountains. Other: sold furnished, cold room, photovoltaic panels, heated pool & uv treatment, heating and air conditioning, carports. The road to Ouarzazate is easily accessible from the Palmeraie Sud or from the route des trois golfs. For further information, please contact Nicolas Béguin on +212 6 61 92 15 50.",
      images: [
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2F19zcmcp6c56bmre20rdv1rn9e5i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Fgtwg381q87vdmzahdyzhwerng4i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Fdht79ze9cz90mxe1bydreb0236i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2F2y01g0hgnrrq4k65jjcc7qxdt2i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Fvw4v98z2112f41atrxj5khbtz0i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Fff9s89wfd87zm9ttec00db7xm2i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png"
      ],
      price: 2007257,
      currency: "USD",
      location: "Marrakech",
      bedrooms: 5,
      bathrooms: 5,
      area: 4800
    },
    {
      id: 12,
      title: "Marrakech I Route d'Amizmiz",
      description: "Discover this contemporary 600 m² villa with 5 suites, ideally located at the beginning of the Amizmiz road, a few minutes from the city center and the Noria, Argan, and Royal Palm golf courses. This carefully furnished and decorated villa offers a contemporary design in the heart of 2.000 m² of mature parkland. You'll enjoy a heated swimming pool set in a harmoniously wooded garden and several relaxation areas, including a small underground lounge with a central brazier. The property is very well-lit, adding a particularly warm touch at nightfall. The first wing of the villa houses the living rooms. The entrance hall, with its pivot door, has very high ceilings. Further on, you'll find the lounge and small sitting room with a beautiful fireplace. The ground floor comprises a dining room overlooking an interior garden, a fully furnished and equipped kitchen, a utility room, and a first-bedroom suite. Further on, a beautifully decorated corridor leads to 4 other suites. Each has its dressing room and bathroom, and all overlooks the pool. A gym, hammam, and sauna complete the package. Other facilities: electrolysis pool, heat pump, staff accommodation, basement. The Amizmiz road is one of the routes leaving Marrakech from the south, notably to get to Lake Lalla Takerkoust. It is dotted with several golf courses. For further information about this property, please contact Franck Le Péculier on +212 6 63 15 92 44.",
      images: [
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Fk20k1d1q4rjh4py6evcgxck7v1i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2F52edbdk89b9446e1je15zvj606i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Ff3xdpsfse52k49axdxz9cnndk4i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Fttnjpk6f72nr4e25jnmawszaw3i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2Fje13h5fpm7xs45py430kw68fy5i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1243i215%2F752tzyr19pxg4cygw1stnh97r6i215&w=1920&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png"
      ],
      price: 1931180,
      currency: "USD",
      location: "Merzouga Sahara",
      bedrooms: 5,
      bathrooms: 5,
      area: 2000
    }
  ];



  const formatPrice = (price, currency) => {
    return `${parseInt(price).toLocaleString()} ${currency}`;
  };

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-28">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wide">
            <span className="text-white">Our</span>{' '}
            <span className="text-yellow-400">Properties</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our curated collection of premium properties across Morocco's most desirable locations. 
            Each residence represents the pinnacle of luxury living and architectural excellence.
          </p>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apartments.map((apartment) => (
              <div
                key={apartment.id}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10"
              >
                {/* Property Image */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={apartment.images[0]}
                    alt={apartment.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                    {formatPrice(apartment.price, apartment.currency)}
                  </div>

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Property Details */}
                <div className="p-6">
                  {/* Title and Location */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                      {apartment.title}
                    </h3>
                    <div className="flex items-center text-gray-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{apartment.location}</span>
                    </div>
                  </div>

                  {/* Property Stats */}
                  <div className="flex justify-between items-center mb-6 text-gray-300">
                    <div className="flex items-center space-x-1">
                      <Bed className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm font-medium">{apartment.bedrooms}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Bath className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm font-medium">{apartment.bathrooms}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Square className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm font-medium">{apartment.area}m²</span>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <a href="/"><button
                    onClick={() => handleViewDetails(apartment.id)}
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold py-3 px-6 rounded-xl transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center space-x-2 group/button"
                    style={{
                        cursor : "pointer"
                    }}
                  
                  >
                    <Eye className="w-5 h-5 group-hover/button:translate-x-1 transition-transform duration-300" />
                    <span>View Details</span>
                  </button></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-yellow-400/10 via-yellow-500/5 to-yellow-400/10 rounded-3xl p-12 border border-yellow-400/20">
            <h3 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">
              Didn't Find What You're Looking For?
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Our expert team can help you find the perfect property that matches your unique requirements. 
              Let us know what you're looking for, and we'll make it happen.
            </p>
            <button
              onClick={() => console.log('Navigate to contact page')}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/25"
            >
              Contact Our Experts
            </button>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default PropertiesPage;