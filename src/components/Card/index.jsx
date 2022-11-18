import './styles.css'

export const Card = (props) => {
    return (
        <div
            className="card"
        >
            <img
                width="100%"
                src={props.srcImg}
            />
            <h2
                style={{
                    textAlign: 'center',
                    marginTop: 10
                }}
            >{props.titulo}</h2>

        </div>
    )
}