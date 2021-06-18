import Link, {LinkProps} from "next/link";
import { cloneElement } from "react";

interface ActiveLinkProps extends LinkProps{

}

export function ActiveLink({children, ...rest}: ActiveLinkProps){
    const isActive = true;
    
    return(
        <Link{...rest}>
            {cloneElement(children, {
                color: isActive ? 'pink.400' : 'gray.50'
            })}
        </Link>
    )
}