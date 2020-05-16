import React, { useState, useEffect} from 'react'
import * as yup from "yup";
import axios from "axios";
import NavBar from "./NavBar";
import "./form.css";

const formSchema = yup.object().shape({
    name: yup.string().min( 2, `Must be more than 2 characters`).required("Name is a required field"),
    pizzaSize: yup.string().required("Choose your pizza size!"),
    originalred: yup.string(),
    garlicranch: yup.string(),
    bbqsauce: yup.string(),
    spinachalfredo: yup.string(),
    pepperoni: yup.string(),
    sausage: yup.string(),
    canadianbacon: yup.string(),
    spicyitaliansausage: yup.string(),
    grilledchicken: yup.string(),
    onions: yup.string(),
    greenpepper: yup.string(),
    dicedtomatoes: yup.string(),
    blackolives: yup.string(),
    roastedgarlic: yup.string(),
    artichokehearts: yup.string(),
    threecheese: yup.string(),
    pineapple: yup.string(),
    extracheese: yup.string(),    
    specialInstructions: yup.string()
})

function Form() {

    const [formState, setFormState] = useState({
        name: "",
        pizzaSize: "",
        originalred: "",
        garlicranch: "",
        bbqsauce: "",
        spinachalfredo: "",
        pepperoni: "",
        sausage: "",
        canadianbacon: "",
        spicyitaliansausage: "",
        grilledchicken: "",
        onions: "",
        greenpepper: "",
        dicedtomatoes: "",
        blackolives: "",
        roastedgarlic: "",
        artichokehearts: "",
        threecheese: "",
        pineapple: "",
        extracheese: "",
        specialInstructions: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        pizzaSize: "",
        originalred: "",
        garlicranch: "",
        bbqsauce: "",
        spinachalfredo: "",
        pepperoni: "",
        sausage: "",
        canadianbacon: "",
        spicyitaliansausage: "",
        grilledchicken: "",
        onions: "",
        greenpepper: "",
        dicedtomatoes: "",
        blackolives: "",
        roastedgarlic: "",
        artichokehearts: "",
        threecheese: "",
        pineapple: "",
        extracheese: "",
        specialInstructions: ""
    });

    const [buttonDisabled, setButtonDisabled] = useState(true);

    const [users, setUsers] = useState([]);


    const formSubmit = e => {
        e.preventDefault();
        axios.post("https://reqres.in/api/users", formState)
        .then(response => {
            setUsers([...users, response.data]);
            console.log("Success!", users);
            setFormState({
                name: "",
                pizzaSize: "",
                originalred: "",
                garlicranch: "",
                bbqsauce: "",
                spinachalfredo: "",
                pepperoni: "",
                sausage: "",
                canadianbacon: "",
                spicyitaliansausage: "",
                grilledchicken: "",
                onions: "",
                greenpepper: "",
                dicedtomatoes: "",
                blackolives: "",
                roastedgarlic: "",
                artichokehearts: "",
                threecheese: "",
                pineapple: "",
                extracheese: "",
                specialInstructions: ""
            })
        })
        .catch(error => {
            console.log(error.response);
        })
    }

    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
            setButtonDisabled(!valid);
        })
    }, [formState]);

    const validateChange = e => {
        yup.reach(formSchema, e.target.name).validate(e.target.value)
        .then(valid => {
            setErrors({ ...errors, [e.target.name]: ""})
        })
        .catch(error => {
            setErrors({
                ...errors, [e.target.name]: error.errors[0]
            })
        });
    };

    const inputChange = e => {
        e.persist();
        const newFormData = {
            ...formState, [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
        };
        validateChange(e);
        setFormState(newFormData);
    };

    return (
        <div>
            <NavBar />
            <div className="image">
                <h2>Build Your Own Pizza</h2>
            </div>
            <form onSubmit={formSubmit}>
                <label htmlFor="name">
                    Name
                    <br/>
                    <input 
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formState.name}
                    onChange={inputChange}
                    />
                    {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
                </label>
                <br/>
                <span>Choice of Size</span>
                <label htmlFor="pizzaSize">
                    Choose Pizza Size
                    <br/>
                    <select name='pizzaSize' onChange={inputChange}>
                        <option value='None'></option>
                        <option value='Small'>Small</option>
                        <option value='Medium'>Medium</option>
                        <option value='Large'>Large</option>
                        <option value='X Large'>X Large</option>
                    </select>
                    {errors.pizzaSize.length > 0 ? <p className="error">{errors.pizzaSize}</p> : null}
                </label>
                <br/>
                <span>Choice of Sauce</span>
                <label htmlFor="originalred">
                            Original Red
                            <input
                            type="checkbox"
                            name="originalred"
                            checked={formState.originalred}
                            onChange={inputChange}
                            />
                        </label>
                        <label htmlFor="garlicranch"></label>
                            Garlic Ranch
                            <input
                            type="checkbox"
                            name="garlicranch"
                            checked={formState.garlicranch}
                            onChange={inputChange}
                            />
                        <label htmlFor="bbqsauce"></label>
                            BBQ Sauce
                            <input
                            type="checkbox"
                            name="bbqsauce"
                            checked={formState.bbqsauce}
                            onChange={inputChange}
                            />
                        <label htmlFor="spinachalfredo"></label>
                            Spinach Alfredo
                            <input
                            type="checkbox"
                            name="spinachalfredo"
                            checked={formState.spinachalfredo}
                            onChange={inputChange}
                            />
                <span>Select Ingredients</span>
                <div className="ingredients">
                    <div className="column1">
                        <label htmlFor="pepperoni">
                            Pepperoni
                            <input
                            type="checkbox"
                            name="pepperoni"
                            checked={formState.pepperoni}
                            onChange={inputChange}
                            />
                        </label>
                        <label htmlFor="sausage"></label>
                            Sausage
                            <input
                            type="checkbox"
                            name="sausage"
                            checked={formState.sausage}
                            onChange={inputChange}
                            />
                        <label htmlFor="canadianbacon"></label>
                            Canadian Bacon
                            <input
                            type="checkbox"
                            name="canadianbacon"
                            checked={formState.canadianbacon}
                            onChange={inputChange}
                            />
                        <label htmlFor=""></label>
                            Spicy Italian Sausage
                            <input
                            type="checkbox"
                            name="spicyitaliansausage"
                            checked={formState.spicyitaliansausage}
                            onChange={inputChange}
                            />
                        
                        <label htmlFor="grilledchicken"></label>
                            Grilled Chicken
                            <input
                            type="checkbox"
                            name="grilledchicken"
                            checked={formState.grilledchicken}
                            onChange={inputChange}
                            />
                        <label htmlFor="onions"></label>
                            Onions
                            <input
                            type="checkbox"
                            name="onions"
                            checked={formState.onions}
                            onChange={inputChange}
                            />
                        <label htmlFor="greenpepper"></label>
                            Green Peppers
                            <input
                            type="checkbox"
                            name="greenpepper"
                            checked={formState.greenpepper}
                            onChange={inputChange}
                            />
                    </div>
                    <div className="column2">
                        <label htmlFor="dicedtomatoes"></label>
                            Diced Tomatoes
                            <input
                            type="checkbox"
                            name="dicedtomatoes"
                            checked={formState.dicedtomatoes}
                            onChange={inputChange}
                            />
                        <label htmlFor="blackolives"></label>
                            Black Olives
                            <input
                            type="checkbox"
                            name="blackolives"
                            checked={formState.blackolives}
                            onChange={inputChange}
                            />
                        <label htmlFor="roastedgarlic"></label>
                            Roasted Garlic
                            <input
                            type="checkbox"
                            name="roastedgarlic"
                            checked={formState.roastedgarlic}
                            onChange={inputChange}
                            />
                        <label htmlFor="artichokehearts"></label>
                            Artichoke Hearts
                            <input
                            type="checkbox"
                            name="artichokehearts"
                            checked={formState.artichokehearts}
                            onChange={inputChange}
                            />
                        <label htmlFor="threecheese"></label>
                            Three Cheese Blend
                            <input
                            type="checkbox"
                            name="threecheese"
                            checked={formState.threecheese}
                            onChange={inputChange}
                            />
                        <label htmlFor="pineapple"></label>
                            Pineapple
                            <input
                            type="checkbox"
                            name="pineapple"
                            checked={formState.pineapple}
                            onChange={inputChange}
                            />
                        <label htmlFor="extracheese"></label>
                            Extra Cheese
                            <input
                            type="checkbox"
                            name="extracheese"
                            checked={formState.extracheese}
                            onChange={inputChange}
                            />
                        </div>
                    </div>



                <label htmlFor="specialInstructions">
                    Any special instructions?
                    <br/>
                    <textarea 
                    type="text"
                    name="specialInstructions"
                    placeholder="Instructions"
                    value={formState.specialInstructions}
                    onChange={inputChange}
                    />
                </label>
                <br/>
                <button disabled={buttonDisabled}>Add to Order</button>
                <pre>{users.map( user => JSON.stringify(user, null, 2))}</pre>
            </form>
        </div>
    )
}

export default Form
