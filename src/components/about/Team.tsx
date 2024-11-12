import profile from '@/assets/profile.png'
import Image from 'next/image'
import mail from '@/assets/mail.png'
export default function Team() {
    return<>
    <div className="p-16 text-center">
        <h1 className="font-bold text-4xl ">Our Team Members</h1>
        <p className="text-gray-600 max-w-3xl mx-auto my-8">
        At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning.
        </p></div>

        <div className="grid grid-cols-2 gap-20 py-16 px-28" >
            <div className="rounded-md p-8 border-2 " data-aos="fade-right"
    data-aos-offset="200"
    // data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    data-aos-anchor-placement="top-center">
                <div className="flex justify-between mb-12 py-10">
                    <div className="flex gap-6">
                        <Image src={profile} alt='' height={30} width={30}/>
                        <p className="font-bold text-2xl">Ms. Sarah Anderson</p>
                    </div>
                    <Image src={mail} height={30} width={30} alt=''/>

                </div>
                <div className='bg-[#F8FCFE] p-4 rounded-md border-2 shadow-lg mt-8'>
                    <h1 className='font-bold text-lg'>Qualification: Diploma in Child Psychology</h1>
                    <p className='my-2'>Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students.</p>
                </div>
            </div>
            <div className="rounded-md p-8 border-2 " data-aos="fade-right"
    data-aos-offset="200"
    // data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    data-aos-anchor-placement="top-center">
                <div className="flex justify-between mb-12 py-10">
                    <div className="flex gap-6">
                        <Image src={profile} alt='' height={30} width={30}/>
                        <p className="font-bold text-2xl">Ms. Sarah Anderson</p>
                    </div>
                    <Image src={mail} height={30} width={30} alt=''/>

                </div>
                <div className='bg-[#F8FCFE] p-4 rounded-md border-2 shadow-lg mt-8'>
                    <h1 className='font-bold text-lg'>Qualification: Diploma in Child Psychology</h1>
                    <p className='my-2'>Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students.</p>
                </div>
            </div>
            
        </div>
        <div className="flex justify-center w-full">
        <button data-aos="fade-down"
    data-aos-offset="200"
    // data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    data-aos-anchor-placement="top-center" className="bg-[#3F3D56] text-white border border-white 
                           px-4 md:px-6 py-2 md:py-2.5 rounded 
                           hover:bg-black 
                           transition duration-300 
                           text-sm md:text-base
                           mt-4 md:mt-6 lg:mt-8">
            Gallery
          </button>
                </div>
    </>
}