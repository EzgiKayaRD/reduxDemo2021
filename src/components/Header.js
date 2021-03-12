import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function Header() {

    return (
        <div style={{display:'flex', justifyContent:'center'}}>
            <Link to=''>HOME</Link>
        </div>
    )
}
