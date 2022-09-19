import './button.scss';
function Button({...props}) {
    return ( 
        <button className={`${props.props}`}>{props.children}</button>
     );
}

export default Button;