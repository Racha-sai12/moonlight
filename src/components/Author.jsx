import React from 'react'
import { useParams } from 'react-router-dom';
import PoemsGalery from './PoemsGalery';
import Title from './Title';

export default function Author() {
  const { name } = useParams();
  return (
    <>
    <Title>{name}</Title>
    <PoemsGalery authorName={name}/>
    </>

  )
}
