import {NextRouter, useRouter} from 'next/router'
import { GetStaticPaths, GetStaticProps, NextPage} from 'next'


const FirstItem: NextPage<Record<string, any>> = ({ }) => {
    const router: NextRouter = useRouter()
    const { id }  =router.query
    return (
        <div>
            first ID: {id} 
            
        </div>
    )
}

export default FirstItem