import Logo1 from '../assets/logo/logos/Html.svg'
import Logo2 from '../assets/logo/logos/Css.svg'
import Logo3 from '../assets/logo/logos/tailwind.svg'
import Logo4 from '../assets/logo/logos/bootstrap.svg'
import Logo5 from '../assets/logo/logos/saas.svg'
import Logo6 from '../assets/logo/logos/chakra.svg'
import Logo7 from '../assets/logo/logos/figma.svg'
import Logo8 from '../assets/logo/logos/MaterialUI.46707f06.svg'
import Logo9 from '../assets/logo/logos/D3.svg'
import Logo10 from '../assets/logo/logos/GreenSock.cef3d97e.svg'
import Logo11 from '../assets/logo/logos/Blitz.f1556f9b.svg'
import Logo12 from '../assets/logo/logos/flask.65a3c58a.svg'
import Logo13 from '../assets/logo/logos/Nuxt.7afd0041.svg'
import Logo14 from '../assets/logo/logos/Typescript.32534e44.svg'
import Logo15 from '../assets/logo/logos/Node.1d25435f.svg'
import Logo16 from '../assets/logo/logos/JavaScript.ccd9eb2b.svg'
import Logo17 from '../assets/logo/logos/Firebase.a230de79.svg'
import Logo18 from '../assets/logo/logos/MongoDB.d923f22b.svg'
import Logo19 from '../assets/logo/logos/Django.555d884c.svg'
import Logo20 from '../assets/logo/logos/GraphQL.d7e61ae5.svg'
import Logo21 from '../assets/logo/logos/Socket.28dbb969.svg'
import Logo22 from '../assets/logo/logos/Gatsby.535306a3.svg'
import Logo23 from '../assets/logo/logos/Strapi.bbd7f61a.svg'
import Logo24 from '../assets/logo/logos/Contentful.693748c8.svg'
import Logo25 from '../assets/logo/logos/Sanity.fd36708c.svg'
import Logo26 from '../assets/logo/logos/GoogleCloud.d30dbdc7.svg'
import Logo27 from '../assets/logo/logos/Python.87eb74cd.svg'
import Logo28 from '../assets/logo/logos/PostgresSQL.447005f9.svg'
import Logo29 from '../assets/logo/logos/Kubernetes.f7f5a46e.svg'
import Logo30 from '../assets/logo/logos/Apollo.1b6c576c.svg'
import Logo31 from '../assets/logo/logos/Kafka.88307d00.svg'
import Logo32 from '../assets/logo/logos/Redis.4376a6a9.svg'
import Logo33 from '../assets/logo/logos/Jenkins.9abcab94.svg'
import Logo34 from '../assets/logo/logos/Docker.3e04f2ec.svg'
import Logo35 from '../assets/logo/logos/Azure.67278338.svg'
import Logo36 from '../assets/logo/logos/Confluence.3ed091a9.svg'
import Logo37 from '../assets/logo/logos/Jira.490607ff.svg'
import Logo38 from '../assets/logo/logos/Asana.d8c85970.svg'
import Logo39 from '../assets/logo/logos/GitHub.a0253469.svg'
import Logo40 from '../assets/logo/logos/GitLab.svg'
import Redux from '../assets/logo/logos/Redux.svg'
import Next from '../assets/logo/logos/Next.svg'
import Vue from '../assets/logo/logos/Vue.svg'
import svelte from '../assets/logo/logos/svelte.svg'
import IonicFramwork from '../assets/logo/logos/IonicFramwork.svg'
  import React, { useEffect, useRef } from 'react';
export default function Logos() {
    const divRef = useRef(null);
        useEffect(() => {
            if (window.ScrollReveal) {
                const sr = window.ScrollReveal();
                sr.reveal(divRef.current, {
                    delay: 200,
                    distance: '50px',
                    origin: 'bottom',
                    reset:"true",
                });
            } else {
                console.warn("ScrollReveal not found. Ensure it's loaded globally.");
            }
        }, []);
    const data = [
        {
            src: Logo1,
            text: 'HTML'
        },
        {
            src: Logo2,
            text: 'CSS'
        },
        {
            src: Logo3,
            text: 'Tailwindcss'
        },
        {
            src: Logo4,
            text: 'Bootstrap'
        },
        {
            src: Logo5,
            text: 'Saas'
        },
        {
            src: Logo6,
            text: 'Chakra UI'
        },
        {
            src: Logo7,
            text: 'Figma'
        },
        {
            src: Logo8,
            text: 'Material UI'
        },
        {
            src: Logo9,
            text: 'Saas'
        },
        {
            src: Logo10,
            text: 'GreenSock'
        },
        // yaha add krna ha data
        {
src:Redux,
            text: 'Redux'
        },
        {
            src: Next,
text:"Next.js"
        },
        {
            src:Vue,
text:"Vue.js"
        },
        {
            src:svelte,
text:"Svelte"
        },
        {
            src:IonicFramwork,
text:"Ionic Framwork"
        },
        {
            src: Logo11,
            text: 'Blitz.js'
        },
        {
            src: Logo12,
            text: 'Flask'
        },
        {
            src: Logo13,
            text: 'Nuxt.j'
        },
        {
            src: Logo14,
            text: 'TypeScript'
        },
        {
            src: Logo15,
            text: 'Node.js'
        },
        {
            src: Logo16,
            text: 'JavaScript'
        },
        {
            src: Logo17,
            text: 'Firebase'
        },
        {
            src: Logo18,
            text: 'MongoDB'
        },
        {
            src: Logo19,
            text: 'Django'
        },
        {
            src: Logo20,
            text: 'GraphQL'
        },
        {
            src: Logo21,
            text: 'Socket.IO'
        },
        {
            src: Logo22,
            text: 'Gatsby'
        },
        {
            src: Logo23,
            text: 'Strapi'
        },
        {
            src: Logo24,
            text: 'Contentful'
        },
        {
            src: Logo25,
            text: 'Sanity'
        },
        {
            src: Logo26,
            text: 'Google Cloud'
        },
        {
            src: Logo27,
            text: 'Python'
        },
        {
            src: Logo28,
            text: 'PostgresSQL'
        },
        {
            src: Logo29,
            text: 'Kubernetes'
        },
        {
            src: Logo30,
            text: 'Apollo'
        },
        {
            src: Logo31,
            text: 'Kafka'
        },
        {
            src: Logo32,
            text: 'Redis'
        },
        {
            src: Logo33,
            text: 'Jenkins'
        },
        {
            src: Logo34,
            text: 'Docker'
        },
        {
            src: Logo35,
            text: 'Azure'
        },
        {
            src: Logo36,
            text: 'Confluence'
        },
        {
            src: Logo37,
            text: 'Jira Software'
        },
        {
            src: Logo38,
            text: 'Asana'
        },
        {
            src: Logo39,
            text: 'GitHub'
        },
        {
            src: Logo40,
            text: 'GitLab'
        },
    ]
  return (
    <>
      <div  className=' bg-[#E4E5DA]' >
        <div className='max-w-[1810px] mx-auto w-full  lg:py-26 sm:py-20 py-16 px-6' >
            <div  ref={divRef} className='sm:grid lg:grid-cols-5 sm:grid-cols-4 grid-cols-3 md:gap-y-24 sm:gap-y-20 gap-y-16 sm:gap-x-[10%] gap-x-[2%] flex flex-wrap justify-between'>
          {data.map((items,index) => (
                <div key={index}  className='flex flex-col justify-center hover:scale-105 hover:duration-500 items-center sm:w-auto w-[100px]'>
<img className='md:w-[120px] sm:w-[100px] w-[80px] h-auto' src={items.src} alt="" />
<p className='font-medium text-[#231F20] md:text-xl text-lg mt-1 text-center'>{items.text}</p>
                </div>
            ))} 
            </div>
        </div>
        </div>  
    </>
  )
}
