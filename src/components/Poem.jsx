import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import Title from './Title';

export default function Poem() {
    const { title } = useParams();
    const [lines, setLines] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://poetrydb.org/title/${title}`);
                if (!response.ok) throw new Error('Network response was not ok');
                const result = await response.json();
                console.log(result[0]);
                setLines(result[0].lines);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

  return (
    <>
    <Title>{title}</Title>
    <div className='px-20 text-center pb-20 text-lg'>
    <ul>
        {lines.map( line => (
          <li>{line}</li>
        ))}
      </ul>
    </div>
    
    </>
  )
}
