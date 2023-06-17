
import Link from 'next/link';
import classes from './button.module.css';

function Button(props){
    return (
   
    <a className={classes.btn} href={props.link}>{props.children}</a>
  
    )
}

export default Button;