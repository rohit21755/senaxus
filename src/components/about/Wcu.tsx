import wcu from '@/assets/wcu.png'
import Image from 'next/image'
export default function Wcu() {
    return <>
    <div className="p-16 text-center">
        <h1 className="font-bold text-4xl ">Why choose Senaxus ?</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of 
          empowering young learners to reach their potential through innovative teaching methods and a supportive 
          learning environment
        </p>
        <div className="border-2 rounded-lg p-4 my-8 flex justify-between gap-4 shawdow-lg">
            <div className='w-1/2 text-start px-12 pt-12' >
                <div className='my-2'>
                    <h2 className='text-2xl font-bold my-1'>Resilience and Future Horizons</h2>
                    <p className='font-thin'>Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow.</p>
                </div>
                <div className='my-2'>
                    <h2 className='text-2xl font-bold my-1'>Innovation and Technology</h2>
                    <p className='font-thin'>Innovation became the driving force behind our kindergarten's progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students.</p>
                </div>
                <div className='my-2'>
                    <h2 className='text-2xl font-bold my-1'>Expansion and Recognition</h2>
                    <p className='font-thin'>IThese years marked as a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies.</p>
                </div>
                <div className='my-2'>
                    <h2 className='text-2xl font-bold my-1'>Inception and Growth</h2>
                    <p className='font-thin'>Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth.</p>
                </div>
            </div>
            <div className=''>
                <Image src={wcu} alt=''/>
            </div>

        </div>
    </div>
    </>
}