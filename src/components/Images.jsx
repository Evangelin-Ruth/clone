import React from 'react';
import './Images.css';
import ImagePopup from './Popup';

const cards = [
  {
    image: 'https://images.unsplash.com/photo-1717511140281-52586e5e307d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Crying book',
    authorImage: 'https://images.unsplash.com/profile-1572640061210-c7b0e4c77d42image?bg=fff&crop=faces&dpr=1&h=32&w=32&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Kristaps Ungurs',
    likes: '186',
    views: '50.7k',
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Basketball illustration',
    authorImage: 'https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorName: ' Davey Gravy',
    likes: '122',
    views: '39.1k',
  },
  {
    image: 'https://images.unsplash.com/photo-1718712760956-3e527953827b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Sunset',
    authorImage: 'https://images.unsplash.com/profile-1516997253075-2a25da8007e7?bg=fff&crop=faces&dpr=1&h=32&w=32&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Wolfgang Hasselmann',
    likes: '146',
    views: '23.4k',
  },
  {
    image: 'https://images.unsplash.com/photo-1599056377758-4808a7e70337?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Camera illustration',
    authorImage: 'https://images.unsplash.com/profile-1518887748790-a95acc4e8a12?bg=fff&crop=faces&dpr=1&h=32&w=32&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Davidsonluna',
    likes: '45',
    views: '7k',
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1716975574438-e816527cb415?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Building illustration',
    authorImage: 'https://images.unsplash.com/profile-1460461456342-a21eb34982a0?bg=fff&crop=faces&dpr=1&h=16&w=16&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Chris Barbalis',
    likes: '119',
    views: '18k',
  },
  {
    image: 'https://images.unsplash.com/photo-1718717621302-a359be21a111?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Bedroom illustration',
    authorImage: 'https://images.unsplash.com/profile-1670236743900-356b1ee0dc42image?bg=fff&crop=faces&dpr=1&h=32&w=32&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Clay Banks',
    likes: '82',
    views: '13k',
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1716309257738-f9455c103c38?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Cake illustration',
    authorImage: 'https://images.unsplash.com/profile-1694767289046-949fd067d63aimage?bg=fff&crop=faces&dpr=1&h=16&w=16&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Olivie Strauss',
    likes: '97',
    views: '8.7k',
  },
  {
    image: 'https://images.unsplash.com/photo-1590768472103-2fef29a6ece8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'WallPainting illustration',
    authorImage: 'https://images.unsplash.com/profile-1588027426764-58f66ba91348image?bg=fff&crop=faces&dpr=1&h=32&w=32&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Andy Holmes',
    likes: '41',
    views: '4.6k',
  },
  {
    image: 'https://images.unsplash.com/photo-1556647034-7aa9a4ea7437?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Golden Retriever',
    authorImage: 'https://images.unsplash.com/photo-1618641986557-1ecd230959aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorName: 'Helena Lopes',
    likes: '41',
    views: '4.6k',
  },
  {
    image: 'https://plus.unsplash.com/premium_vector-1713800216234-94f3fd89ba52?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Geometric illustration',
    authorImage: 'https://images.unsplash.com/profile-1673011171297-4fd404de044fimage?bg=fff&crop=faces&dpr=1&h=16&w=16&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: ' Nik',
    likes: '41',
    views: '4.6k',
  },
  {
    image: 'https://cdn.dribbble.com/userupload/14414995/file/original-46d60ed96313d102deaa51ca7b07829f.jpg?resize=1200x900',
    alt: 'Robot App',
    authorImage: 'https://cdn.dribbble.com/userupload/14414995/file/original-46d60ed96313d102deaa51ca7b07829f.jpg?resize=1200x900',
    authorName: 'Andrei Kuznetsov',
    likes: '41',
    views: '4.6k',
  },
  {
    image: 'https://cdn.dribbble.com/userupload/14888909/file/original-d1d42b77b08f1bfe67353b5f57f316b3.png?resize=1200x900',
    alt: 'Geometric illustration',
    authorImage: 'https://cdn.dribbble.com/users/1464151/avatars/small/62812e38822638ac07248f3cdb4ebb46.png?1603203170',
    authorName: 'Dindra Desmipian',
    likes: '41',
    views: '4.6k',
  },
  {
    image: 'https://images.unsplash.com/photo-1676206584865-222e834da7be?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Geometric illustration',
    authorImage: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorName: 'Kemal Sanli',
    likes: '41',
    views: '4.6k',
  },
  {
    image: 'https://cdn.dribbble.com/userupload/15190752/file/original-0b41accc4e690ebce278fae29247aef7.jpg?resize=1024x768',
    alt: 'Geometric illustration',
    authorImage: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorName: 'Kemal Sanli',
    likes: '41',
    views: '4.6k',
  },
  {
    image: 'https://cdn.dribbble.com/userupload/14973597/file/original-8650947009dd38992bf1dcf1a795d67f.jpg?resize=1200x900',
    alt: 'Mobile UX',
    authorImage: 'https://cdn.dribbble.com/users/904325/avatars/small/12d96eb0f8fabec13f392b5bcb380457.png?1677004684',
    authorName: 'Jeremy Teff',
    likes: '506',
    views: '8.5k',
  },
  {
    image: 'https://images.unsplash.com/photo-1503756234508-e32369269deb?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Beach ',
    authorImage: 'https://images.unsplash.com/photo-1621493821961-4afd7f1b267e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorName: 'Laura Davis',
    likes: '546',
    views: '5.2k',
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1680402879257-48ffbbc6db1d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Robot illustration',
    authorImage: 'https://images.unsplash.com/photo-1618401479427-c8ef9465fbe1?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorName: 'Nimbus Industries',
    likes: '645',
    views: '1.25k',
  },
  {
    image: 'https://cdn.dribbble.com/userupload/14989358/file/original-865556828064375c515828391eb8133e.png?resize=1200x900',
    alt: 'Hatch illustration',
    authorImage: 'https://cdn.dribbble.com/users/17543311/avatars/small/c9c68958672969d58b038cf8d2447c05.png?1694804202',
    authorName: 'Dennis Pasyuk',
    likes: '375',
    views: '2.5k',
  },
  {
    image: 'https://images.unsplash.com/photo-1555169062-013468b47731?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Bird pic',
    authorImage: 'https://plus.unsplash.com/premium_vector-1713785274963-8f16a1c52849?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorName: 'Sanline Visionaries',
    likes: '203k',
    views: '141.6k',
  },
  {
    image: 'https://cdn.dribbble.com/users/1452333/screenshots/17371713/media/fccaa2e28225c7cbcf0b88a175193105.png?resize=1000x750&vertical=center',
    alt: 'Practice is Messy',
    authorImage: 'https://cdn.dribbble.com/users/1452333/avatars/small/8cb4eb5a52941c8aadad78199bcf9675.jpg?1669658259',
    authorName: 'Olivia Malone',
    likes: '904',
    views: '4.6k',
  },
];

function App() {
  return (
    <div className="app">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <div className="image">
          <ImagePopup src={card.image} alt={card.alt} />              
          </div>
          <div className="info">
            <div className="author">
              <img src={card.authorImage} alt="Profile picture" />
              <span>{card.authorName}</span>
            </div>
            <div className="stats">
              <span>❤️{card.likes}</span>
              <span>👁️{card.views}</span>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}

export default App;