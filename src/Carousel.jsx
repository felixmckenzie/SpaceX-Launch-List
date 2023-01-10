
import React,{useState} from 'react'

export default function Carousel({images}) {
    const[active, setActive] = useState(0)

    const handleIndexClick = (event)=> {
        setActive(+event.target.dataset.index)
        console.log(event.target.dataset.index)
    }

  return (
    <div className="flex justify-around items-center h-400px mt-5">
      <img
        src={images[active]}
        alt="rocket ship"
        className="max-w-[45%] max-h-400px"
      />
      <div className="w-6/12">
        {images.map((photo, index) => (
          <img
            key={photo}
            src={photo}
            className='rounded-full inline-block m-15px'
            width='100px'
            height='100px'
            alt="rocket thumbnail"
            data-index={index}
            onClick={handleIndexClick}
          />
        ))}
      </div>
    </div>
  );
}
