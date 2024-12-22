// 寫註解可使用快捷鍵: ctrl + / (cmd + /)
import TripCard from '@/components/TripCard';
import tripList from '@/data/trip-list';

export default function Home() {

  const cards = tripList.map(trip => {
    return <TripCard trip={trip} key={trip.id} />
  })

  return (
    <>
      <header className="bg-amber-500">
        <div className="container mx-auto px-4 py-4">
          <h1>HTML &amp; CSS</h1>
          <p>關於HTML標籤的更多資訊可參考 <a href="https://www.w3schools.com/html/" target="_blank">W3Schools HTML</a></p>
        </div>
      </header>
      <section id="tripListSection" className="container mx-auto my-4 px-4">
        <h1>Trip Packages</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {/* TODO: 請在此處放入一系列的產品卡片 */}
          {cards}
        </div>
      </section>
      <section id="htmlTagsSection" className="my-4">
        <div className="container mx-auto px-4">
          <h1>Past Trips Gallery</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 py-2">
              <img src="/images/image1.jpg" alt="Sea View from the Shore"/>
            <img src="/images/image2.jpg" alt="Track towards the Sea"/>
            <img src="/images/image3.jpg" alt="View from the Hill"/>
            <img src="/images/image4.jpg" alt="Snowy Mountains"/>
          </div>
        </div>
      </section>
      <footer className="">
        <div className="container mx-auto p-4">
          <p>
            CopyRight &copy; 2024
          </p>
        </div>
      </footer>
    </>
  );
}
