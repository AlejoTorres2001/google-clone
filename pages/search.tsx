import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import { GetServerSideProps,InferGetServerSidePropsType,NextPageContext } from 'next'
import dummyData from '../response'
import { useRouter } from 'next/router'
import SearchResults from '../components/SearchResults'
type Props ={
    results:any
}
const Search = ({results}:InferGetServerSidePropsType<typeof getServerSideProps>) => { 
    const router = useRouter()
    return (
        <div>
            <Head>
                <title>{router.query.term} - Google Search</title>
            </Head>
            {/* Header */}
            <Header></Header>
            {/* Search results */}
            <SearchResults results={results}></SearchResults>
        </div>
    )
}

export default Search

type context={
    query: {
        term?:string
        start?:string
    }
}
export const  getServerSideProps : GetServerSideProps = async (context: context)=> {
    const  useDummyData = true
    const startIndex = context.query.start || "0";
    const data = useDummyData ? dummyData:  await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_CX}&q=${context.query?.term}&start=${startIndex}`).then(res=>res.json())
    return {
        props: {
            results:data
        }
    }
}