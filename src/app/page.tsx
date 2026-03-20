
import Contact from '@/components/home/Contact'
import Name from '@/components/home/Name'
import SpotifyNow from '@/components/home/SpotifyNow'


const HomePage = () => {
  return (
    <div className='bg-background min-h-screen max-w-2xl mx-auto'>
       
      <Name/>
      <SpotifyNow/>
      <Contact/>
      
    </div>
  )
}

export default HomePage