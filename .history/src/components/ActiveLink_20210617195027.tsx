import { useRouter } from "next/dist/client/router";
import Link, {LinkProps} from "next/link";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps{
children: ReactElement;
shouldMatchExactHref: boolean;
}

export function ActiveLink({children, ...rest}: ActiveLinkProps){
    let isActive = false;
    const {asPath} = useRouter()

    if(asPath === rest.href || asPath === rest.as){
        isActive=true
    }
    
    return(
        <Link{...rest}>
            {cloneElement(children, {
                color: isActive ? 'pink.400' : 'gray.50'
            })}
        </Link>
    )
}