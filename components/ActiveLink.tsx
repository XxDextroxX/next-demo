import Link from "next/link"
import { useRouter } from "next/router"

const style = {
    color: "#0070f3",
    textDecoration: "underline",
    cursor: "pointer",
}
export const ActiveLink = ({ text, href }: { text: string, href: string}) => {

  const router = useRouter();

  const isActive = router.asPath === href;


  return (
    <Link style={isActive ? style : undefined} href={href}>
        {text}
    </Link>

  )  
}
