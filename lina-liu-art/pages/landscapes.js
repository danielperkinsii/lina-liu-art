import Layout from '../components/layout'

export default function Landscapes() {
    const links = [
        // {
        //     name: 'Plein Air',
        //     path: '/pleinair'
        // },
        // {
        //     name: 'Watertown',
        //     path: '/watertown'
        // },
        // {
        //     name: 'Garden',
        //     path: '/garden'
        // }
    ]
    return (
        <Layout>
            <div>
                {links.length > 0 ? 
                links.map((link, index) => (
                    <div
                    key={index}
                    >{link.name}</div>
                ))
                :
                <div className='flex flex-col justify-center items-center my-60'> <p 
                className='my-2 mx-auto text-3xl'>Page coming soon 
                <br/></p>
                <p><span className='text-6xl'>🏞️</span></p>
                </div>}
            </div>
        </Layout>
    )
}

