import Header from '../src/Components/Header'
import Footer from '../src/Components/Footer'
function layout({children}) {

  return (
    <div className='flex flex-col min-h-screen '>
    <Header />
   <div  className='flex-1  mt-[82px]'>{children}</div>
    <Footer />
    </div>
  )
}

export default layout