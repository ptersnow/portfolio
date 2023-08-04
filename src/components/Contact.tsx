export default function Contact() {
    return (
        <div id="contact" className="flex flex-col justify-center items-center w-full h-full">
            <form method='POST' action="https://getform.io/f/1f759348-58d9-4cfb-8fd0-5faf01c45d07" className='flex flex-col max-w-[600px] w-full text-gray-700'>
                <div className='max-w-[1000px] w-full sm:text-center pb-8 pl-4'>
                    <h2 className='text-4xl text-center font-bold inline border-b-4 border-blue-600 text-gray-300'>Contact</h2>
                </div>
                <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f6] p-2' name="message" rows={10} placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-blue-600 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            </form>
        </div>
    )
}