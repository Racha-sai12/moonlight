import React, { useEffect, useState } from 'react';
import PoemItem from './PoemItem';

export default function PoemsGalery({authorName}) {

    const [poems, setPoems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://poetrydb.org/author/${authorName}`);
                if (!response.ok) throw new Error('Network response was not ok');
                const result = await response.json();
                console.log(result)
                setPoems(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

  return (
    <div className='px-20 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 place-content-center'>{poems.map(x=>( <PoemItem title={x.title}
                                   author={x.author}
                                   lines = {x.lines}
                                   linecount={x.linecount} />))}</div>
    // <div>{poems}</div>
  )
}
