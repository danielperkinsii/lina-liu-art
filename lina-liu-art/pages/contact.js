import Layout from '../components/layout'

export default function Contact() {
    return (
        <Layout>
            <div className='flex flex-col mx-4 lg:mr-72'> 
                <h1 className='text-6xl mt-6 sm:mt-24 text-red-600'>Lina Liu Art.</h1>
                <h2 className='text-4xl mt-6 sm:mt-16'>Contact Lina</h2>
                <div className='text-xl max-w-xl'>
                    <p className='my-2 text-red-600'>(925)478-8500</p>
                    <p className='my-2 text-red-600'><a href='mailto:linaliu1000@yahoo.com'>linaliu1000@yahoo.com</a></p>
                </div>
                <h2 className='text-4xl mt-6'>See Lina's Work</h2>
                <div className='text-xl max-w-xl'>
                    <p className='my-4'>
                    <span className='text-2xl text-red-600'>Gallerie Amsterdam</span><br/>
                        Phone: 831-624-4355<br/>
                        Fax: 831-624-8415<br/>
                        Dolores between 5th & 6th<br/>
                        P.O.Box 6612<br/>
                        Carmel, CA, 93921
                    </p>
                    <p className='my-4'>
                    <span className='text-2xl text-red-600'>Alexander's Main Street Gallery</span><br/>
                        Phone: 925-846-6015<br/>
                        Fax: 925-846-8248<br/>
                        www.alexandersfineart.com<br/>
                        608 Main Street,<br/>
                        Pleasanton, CA, 94566
                    </p>
                    <p className='my-4'>
                    <span className='text-2xl text-red-600'>Lesa Johnson Fine Art Gallery</span><br/>
                        Phone: 925-377-0332<br/>
                        1041 Stuart Street, Suite B <br/>
                        Lafayette, CA, 94549
                    </p>
                    <p className='my-4'>
                    <span className='text-2xl text-red-600'>Valley Art Gallery</span><br/>
                        Phone: 925-935-4311<br/>
                        1661 Botelho Drive, Suite 110<br/>
                        Walnut Creek, CA, 94596
                    </p>
                    <p className='my-4'>
                        <span className='text-2xl text-red-600'>Epperson Gallery</span><br/>
                        Phone/Fax: 510-787-2925<br/>
                        1400 Pomona Street,<br/>
                        Crockett, CA, 94525
                    </p>
                </div>
            </div>
        </Layout>
    )
}
   
