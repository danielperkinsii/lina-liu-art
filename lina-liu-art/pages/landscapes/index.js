import Layout from '../../components/layout'
import { fetchEntries } from '../../lib/api'

export default function Landscapes({ landscapes }) {
    return (
        <Layout>
            <div className='flex flex-col w-full'>
                    <tr className='hidden flex justify-start pl-2 text-2xl mt-6 sm:mt-24 w-full'>
                    <td className='mx-2 sm:mx-6 w-1/3'>Title</td>
                    <td className='mx:2 sm:mx-6 w-1/3'>Medium</td>
                    <td>Size (in)</td>
                </tr>
                {landscapes.length > 0 ? 
                landscapes.map((landscape, index) => (
                    <tr className='p-1 flex justify-start odd:bg-gray-200 w-full' key={index}>
                        <td className='mx-2 sm:mx-6 w-1/3'>
                            <Link href={`category/${landscape.sys.id}`}>
                                <a className='border-gray-500 text-blue-400'>{landscape.fields.title}</a>
                            </Link>
                        </td>
                        <td className='mx-2 sm:mx-6 w-1/3'>{landscape.fields.medium}</td>
                        <td className='mx-2 sm:mx-6'>{landscape.fields.size}</td>
                    </tr>
                ))
                :
                <div className='flex flex-col justify-center items-center my-60'> <p 
                className='my-2 mx-auto text-3xl'>Page content coming soon 
                <br/></p>
                <p><span className='text-6xl'>🏞️</span></p>
                </div>}
            </div>
        </Layout>
    )
}

// gets painting object and sets it to props
export async function getStaticProps() {
    const paintings = await fetchEntries()

    // filtering to flowers only
    const landscapes = paintings.filter(flower => flower.fields.category.toLowerCase() === 'landscapes')
    return {
        props: {
            landscapes
        }
    }
  }