export default function CharacterItem({character}){
    return (
        <div className="item">
            <img 
            className='image'
            src={character.image}/>
        <h1 className="name">{character.name}</h1>
        </div>
    )
}