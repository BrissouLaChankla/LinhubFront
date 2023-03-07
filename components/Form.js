import React from 'react';
import { useForm } from '@formcarry/react';

function Form() {
    // Call the "useForm" hook in your function component
    const { state, submit } = useForm({
        id: 'DJhJ5vdA6d'
    });

    // Success message
    if (state.submitted) {
        return <div>Merci de nous avoir contacté ! On revient très vite vers vous.</div>;
    }

    return (
        <form onSubmit={submit}>

            <div className="d-flex gap-4">

                <div className="mb-3 flex-grow-1">
                    <label className="form-label" htmlFor="firstname">Prénom</label>
                    <input className="form-control" required id="firstname" type="text" name="firstname" />
                </div>

                <div className="mb-3 flex-grow-1">
                    <label className="form-label" htmlFor="lastname">Nom</label>
                    <input className="form-control" required id="lastname" type="text" name="lastname" />
                </div>
            </div>

            <div className="mb-3">
                <label className="form-label" htmlFor="email">Email</label>
                <input className="form-control" required id="email" type="email" name="email" />
                <small id="emailHelp" className="form-text">Nous ne partagerons jamais votre adresse email.</small>
            </div>
            <label className="form-label" htmlFor="message">Message</label>
            <textarea rows={4} className="form-control" required id="message" name="message" />

            <div className="text-end">

                <button type="submit" className='btn btn-primary mt-4'>Envoyer</button>
            </div>
        </form>
    );
}

export default Form