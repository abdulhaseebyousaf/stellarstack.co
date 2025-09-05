import React from 'react'
import Image1 from '../assets/logo/pictures/React.svg'
import Image2 from '../assets/logo/pictures/Frame.svg'
import Image3 from '../assets/logo/pictures/Python.svg'
import Image4 from '../assets/logo/pictures/Aws.svg'
import Image5 from '../assets/logo/pictures/Postgre.svg'
import Image6 from '../assets/logo/pictures/Graphq.svg'
import Image7 from '../assets/logo/pictures/Mongo.svg'
import LeadingProp from './LeadingProp'
export default function Leading() {
 
  const photos = [
   { id: 1, src: Image1, alt: 'React' },
  { id: 2, src: Image2, alt: 'Frame' },
  { id: 3, src: Image3, alt: 'Python' },
  { id: 4, src: Image4, alt: 'AWS' },
  { id: 5, src: Image5, alt: 'Postgres' },
  { id: 6, src: Image6, alt: 'GraphQL' },
  { id: 7, src: Image7, alt: 'MongoDB' },
  ]

  return (
    <div className='bg-[#e3e5da]' >
            <div className='max-w-[1110px] mx-auto px-6 pt-24 lg:pt-32' >
                <div className='flex justify-between flex-wrap gap-6' >
{photos.map(photo => (
        <img className='hover:scale-105 duration-500' key={photo.id} src={photo.src} alt={photo.alt}  />
      ))}
                </div>
        </div>
      <LeadingProp
      text={'and other tailor made solutions! '}
      secondtext={'See More'}
      thirdtext={'Leading with'}
      forthtext={'Vision'}
      lasttext={'Our customer shares the journey, values, and what’s next for the company.'}
       /> 
    </div>
  )
}
