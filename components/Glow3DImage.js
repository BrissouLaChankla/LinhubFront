import Image from "next/image"
import Hover from 'react-3d-hover';

const Glow3DImage = (props) => {
    return(

        <Hover scale={1.05} perspective={900} speed={500}>
            <Image src={props.image} className="img-fluid shadow-lg rounded-4" />
        </Hover>
     
    )
}

export default Glow3DImage