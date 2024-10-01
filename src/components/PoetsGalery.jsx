import React, { useEffect, useState } from 'react';
import PoetItem from './PoetItem';


export default function PoetsGalery() {
    const [poets, setPoets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://poetrydb.org/author');
                if (!response.ok) throw new Error('Network response was not ok');
                const result = await response.json();
                setPoets(result.authors);
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
    <div className='px-20 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 place-content-center pb-20'>
        {poets.map(poet =>( <PoetItem name={poet} /> ))}
    </div>
    
  )
}
