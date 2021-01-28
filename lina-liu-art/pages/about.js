import Layout from '../components/layout'

export default function About() {
    return (
        <Layout>
            <div className='flex flex-col mx-4 lg:mr-72'> 
                <h1 className='text-6xl mt-24 text-red-600'>
                    <a>Lina Liu Art.</a>
                </h1>
                <h2 className='text-4xl mt-16'>
                    <a>About Lina</a>
                </h2>
                <div className='text-xl max-w-xl sm:mb-16'>
                    <p className='my-4'>Born in Guangzhou, China, artist Lina Liu has always had a passion for flowers.
                    She received her early education in China and earned a degree in Design in 1979.
                    She went on to complete a bachelor of Fine Arts degree from
                    China's Suzhou Art University in 1983.</p>

                    <p className='my-4'>Lina remembers that, as a child, watching her grandmother cutting patterns of flowers and butterflies out of colored paper was intriguing. When her mother planted flowers, Lina was always there to help. Fascinated by nature's beauty and growth, Lina prophesied that one day she would become an artist so that she could create thousands of flowers and make them come alive in her paintings.</p>

                    <p className='my-4'>Lina has gained the inspiration for her paintings from her California home garden. She has planted more than 60 roses and devoted as much love and time as possible to the caring and arranging of these beautiful and bountiful flowers gracing her yard. Her childhood dreams are finally coming true.</p>
                </div>
            </div>
        </Layout>
    )
}

