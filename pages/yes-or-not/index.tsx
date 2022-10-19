import React, { useState, useEffect } from 'react';
import Layout from '@components/Layout/Layout';
import { Header, Button } from 'semantic-ui-react';
import Link from 'next/link';

type YesOrNoApiResponse = {
    data: 'yes' | 'no';
}

const fetchResult = async () => {
    const res = await fetch('https://avo-shop-xi.vercel.app/api/yes-or-no');
    const { data }: YesOrNoApiResponse = await res.json();

    return data;
}

export async function getStaticProps() {
    const initialResult = await fetchResult();

    return {
        props: {
            initialResult
        }
    }
}


const index = ({ initialResult }: { initialResult: string }) => {
    const [result, setResult] = useState(initialResult);
    const [isLoading, setIsLoading] = useState(false);
    const [triggerCount, setTriggerCount] = useState(0);

    useEffect(() => {
        if (triggerCount > 0) {
            setIsLoading(true);
            fetchResult().then((result) => {
                setResult(result);
                setIsLoading(false);
            });
        }
    }, [triggerCount])

    const onClick = () => {
        setTriggerCount(triggerCount + 1);
    }

    return (
        <Layout>
            <div>
                <Header as='h1' color={isLoading ? 'grey' : 'green'}>
                    {result}
                </Header>
                <p>
                    <Button
                        color='green'
                        onClick={onClick}
                        loading={isLoading}
                        disabled={isLoading}
                    >try again</Button>
                </p>
                <p>
                    <Link href="/">
                        <a className='ui black button basic'>
                            back to home
                        </a>
                    </Link>
                </p>
            </div>
            <style jsx>{`
                div{
                    text-align: center;
                }
                div :global(h1.header){
                    font-size: 7em;
                    text-transform: uppercase;
                }
            `}</style>
        </Layout>
    )
}

export default index