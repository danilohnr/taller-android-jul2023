import './styles.css'
import {useEffect, useState} from 'react'
import CharacterItem from './CharacterItem'

export default function CharacterList() {
    //const characters = [];
    //getter y setter
    const [characters, setCharacters] = useState(null)
    //console.log('characters: ', characters.results);

    useEffect(function(){
        fetch('https://rickandmortyapi.com/api/character')
        .then(function (resp){
            return resp.json();
        })
        .then(function (data){
            setCharacters(data);
        })
    }, [setCharacters])

    if(characters === null){
        return <div>Cargando...</div>
    }
    //console.log('characters: ', characters.results);
    return (
    <div className="list">
        {characters.results.map(function(item){
            return <CharacterItem character={item} key={item.id} />
        })}
                
    </div>
    )
}