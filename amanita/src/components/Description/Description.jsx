import '../../styles/Description.css';

const images = import.meta.glob('../assets/img/*.jpg', {
    eager: true,
    import: 'default'
});

function Description(props) {
    return (
        <div className='description-container'>
            <img
                className='description-image'
                src={images[`../assets/img/${props.image}.png`]}
                alt={`Foto de ${props.name}`}
            />

            <div className='description-text-contain'>
                <p className='description-name'>
                    <strong>{props.name}</strong>
                </p>
                <p className='description-use'>
                    {props.use} 
                </p>
                <p className='description-toxic'>
                    "{props.toxic}"
                <p className='description-text'>
                    "{props.text}"
                </p>
                </p>
            </div>
        </div>
    );
}

export default Description; 