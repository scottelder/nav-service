import React from 'react';
import StaticListEntry from './StaticNavEntry.jsx'

const StaticNavList = (props) => {
  return (
    <ul>
      {props.biomes.map((biome, index) => <StaticListEntry key={index} biome={biome}/>)}
    </ul>
  )
}

export default StaticNavList;