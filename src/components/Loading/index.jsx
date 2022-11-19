import './style.css'

export const Loading = (props) => {
    return (
        <div
            style={{
                position: 'fixed',
                zIndex: 2,
                width: '100%',
                height: '100%',
                display: 'flex',
                visibility: props.loading,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgb(0,0,0,0.3)'
            }}
        >
            <div
                className="loading"
                style={{ width: 70, height: 70 }}
            ></div>
        </div>
    )
}