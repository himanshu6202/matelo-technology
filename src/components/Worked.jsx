
import Card from './Card'


function Worked() {

  const data = [
    { image: './images/Veena.png',
      title: 'Whispers of soil, shaped by hand',
      description: 'Clay pottery is all about working with your hands and the earth. It’s a slow, calming process where each piece ends up a little different — shaped by touch, time, and care.',
      button: '(Explore)',
      link: "https://himanshu6202.github.io/veena-pottry/",
      bgColor : '#747A56'
    },
    { image: './images/Wintage.png',
      title: 'Thrifted treasures, curated with care',
      description: 'We don’t just sell thrift clothes – We find hidden gems, make sure they’re in top shape, and bring them to you with pride.',
      button: '(Explore)',
      link: "https://himanshu6202.github.io/wintage.cloth/",
      bgColor : '#4E5873'
    },
    { image: './images/Digital.png',
      title: 'Portfolio of Himanshu Minj Website',
      description: 'Hi, I’m Himanshu Minj — a web designer from India, clean, intuitive websites for clients around the world.',
      button: '(Explore)',
      link: "https://himanshu6202.github.io/Portfolio---2025/",
      bgColor : '#383731'
    }
  ]

  return (
    <div  className='w-full  pt-20 pb-20 text-[#383731] overflow-hidden font-new'> 
    <div data-scroll data-scroll-section data-scroll-speed="-.2">
       <div className=' w-full px-10  pb-20 flex flex-col items-center'>
        <h1 className='text-6xl font-new tracking-tight'>Delivering high-quality projects</h1>
        <p className='font-new pt-10 w-2/3 leading-5 text-center'>This project was thoughtfully designed and developed by our company, with a focus on quality, innovation, and user experience. It reflects our dedication to delivering reliable and impactful digital solutions tailored to our clients' needs.</p>
      </div>
      <div className='flex items-end justify-center gap-2 overflow-hidden -mt-10'>
        {data.map((item, index) => (
          <Card key={index} data={item}/>
        ))}
      </div>
      <div className='flex justify-center mt-15'>
        <button className='py-3 px-5 bg-[#383731] rounded-full text-zinc-50 uppercase text-sm flex items-center gap-5'>View all projects
          <div className='w-2 h-2 bg-zinc-50 rounded-full'></div>
        </button>
      </div>
    </div> 
    </div>
  )
} 
export default Worked
