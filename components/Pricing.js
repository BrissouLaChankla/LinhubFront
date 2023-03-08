import Image from "next/image";
import Link from "next/link";
import { Check, Linkedin, X } from "react-bootstrap-icons";

function Pricing(props) {
    return (
        <div className="shadow p-4 rounded-4">
            <div className="d-flex align-items-center">
                <Image width={85} src={props.illustration} className="rounded" style={{backgroundColor:"var(--lighter)"}} />
                <div className="ms-4">
                    <div className="text-muted m-0">{props.title}</div>
                    <strong className="fs-2">{props.price}.00€</strong><small className="ms-2 text-muted">/ par mois</small>
                </div>
            </div>
            <div className="my-5 px-3">
                {props.advantages.map((e,i) =>
                <div className="mb-2" key={i}>
                    {
                        e.isIn ? <Check className="text-success" /> :  <X className="text-danger" /> 
                    }
                    <small className={(e.isIn === false) ? "ms-1 text-muted" : "ms-1" }>
                        {e.text}
                        {
                            e.addLinkedIn && <Linkedin style={{color:"#0e76a8"}} className="ms-2"/>
                        }
                    </small>
                </div>
                )}
            </div>
            <div className="text-center">
                <Link href="#" className="btn btn-sm btn-outline-primary w-100">
                    Découvrir l'offre
                </Link>
            </div>
        </div>
    );
  }
  
  export default Pricing;
  