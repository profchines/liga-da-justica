import './styles.css'

export const Card = ({srcImg, titulo, ...resto}) => {
    return (
        <div
            className="card"
            {...resto}
        >
            <img
                width="100%"
                src={srcImg}
            />
            <h2
                style={{
                    textAlign: 'center',
                    marginTop: 10
                }}
            >{titulo}</h2>

        </div>
    )
}