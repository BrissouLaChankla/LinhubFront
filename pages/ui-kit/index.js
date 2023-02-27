import Input from "@/components/Input";

export default function Uikit() {
    return (
        <>
            <div className="container">
                <h1>Ceci est le H1 (3.5rem / 56px) + bold</h1>
                <h2>Ceci est le H2 (1.75rem / 28px) + bold </h2>
                <h3>Ceci est le H3 (1.25rem / 20px) + bold</h3>
                <h4>Ceci est le H4 (1rem/16px) + bold</h4>
                <p className="mb-0">Body 1 (1rem/16px) + 400 fw</p>
                <small>Body 1 (1rem/16px) + 400 fw</small>
                <hr />
                <div className="d-flex align-items-center gap-4">
                    <button className="btn btn-primary">Sign up</button>
                    <button className="btn btn-outline-primary">Sign up</button>
                    <div className="p-3 bg-secondary rounded">
                        <button className="btn btn-outline-light">Sign up</button>
                    </div>
                </div>
                <hr />
                <div className="d-flex align-items-center gap-4">
                    <Input type="text" required={true} label="Prénom"></Input>
                    <input className="form-check-input" type="checkbox" value="" />
                    <input className="form-check-input" type="radio" value="" />
                </div>
            </div>
        </>
    )
}
