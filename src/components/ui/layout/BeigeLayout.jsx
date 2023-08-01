import '../../../assets/styles/commonstyles.scss'

const BeigeLayout = (props) => {
    return (
        <div className={`beige-background ${props.className}`}>{props.children}</div>
    )
}

export default BeigeLayout