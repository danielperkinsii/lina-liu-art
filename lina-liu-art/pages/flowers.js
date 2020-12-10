import Layout from '../components/layout'

export default function Flowers() {
    const links = [
        {
            name: 'Rose',
            path: '/rose'
        },
        {
            name: 'Iris',
            path: '/iris'
        },
        {
            name: 'Spring',
            path: '/spring'
        },
        {
            name: 'Tulips',
            path: '/tulips'
        },
        {
            name: 'Daisy',
            path: '/daisy'
        },
        {
            name: 'Summer',
            path: '/summer'
        },
    ]
    return (
        <Layout>
            <div>
                {links.map((link, index) => (
                    <div
                    key={index}
                    >{link.name}</div>
                ))}
            </div>
                
        </Layout>
    )
}

