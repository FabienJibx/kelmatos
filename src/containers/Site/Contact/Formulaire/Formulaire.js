import React from "react";
import {withFormik} from "formik";
import * as Yup from "yup";

const Formulaire = (props) => (
    <>
        <form>
            <div className="mb-3">
                <label htmlFor="name">Nom :</label>
                <input type="text" className="form-control" id="name" aria-describedby="nameHelp"
                    name="nom"
                    onChange={props.handleChange}
                    value={props.values.name}
                    onBlur = {props.handleBlur}
                    />
                    {
                        props.touched.nom && props.errors.nom && <span style={{color:"red"}}>{props.errors.nom}</span>
                    }
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                    name="email"
                    onChange={props.handleChange}
                    value={props.values.email} 
                    onBlur = {props.handleBlur}
                    />
                    {
                        props.touched.email && props.errors.email && <span style={{color:"red"}}>{props.errors.email}</span>
                    }
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">Message :</label>
                <textarea className="form-control" id="message" rows="3"
                    name="message"
                    onChange={props.handleChange}
                    value={props.values.message}
                    onBlur = {props.handleBlur} 
                ></textarea>
                    {
                        props.touched.message && props.errors.message && <span style={{color:"red"}}>{props.errors.message}</span>
                    }
            </div>
            <button type="submit" className="btn btn-success" onClick={props.handleSubmit}>Envoyer</button>
        </form>
    </>
);

export default withFormik({
    mapPropsToValues : () => ({
        nom:"",
        email:"",
        message:""
    }),
    validationSchema : Yup.object().shape({
        nom: Yup.string()
            .min(5,"Le nom doit avoir plus de 5 caractéres")
            .required("Le nom est obligatoire !"),
        email: Yup.string()
            .email("L'email n'a pas le bon format")
            .required("L'email est obligatoire"), 
        message: Yup.string()
            .min(5,"Le message doit faire plus de 5 caractéres")
            .max(200,"Le message doit faire moins de 200 caractéres")
    }),
    handleSubmit: (values,{props}) => {
        const message = {
            nom : values.nom,
            email : values.email,
            contenu : values.message          
        }
        props.sendMail(message);
    }
})(Formulaire);