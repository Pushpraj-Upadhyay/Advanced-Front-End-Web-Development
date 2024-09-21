import { useContext, useRef } from "react";
import { ServiceListContext } from "../store/ServiceList-Context";

const CreatePost = () => {

    const { addService } = useContext(ServiceListContext);

    const serviceName = useRef();
    const description = useRef();
    const price = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const serviceNameValue = serviceName.current.value;
        const descriptionValue = description.current.value;
        const priceValue = price.current.value;

        addService(serviceNameValue, descriptionValue, priceValue);

        serviceName.current.value = "";
        description.current.value = "";
        price.current.value = "";
    }

    return (
        <form className="form-data" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="serviceName" className="form-label">Service Name :</label>
                <input type="text" className="form-control" id="serviceName" ref={serviceName} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="bodyText" className="form-label">Description :</label>
                <textarea type="text" rows="5" className="form-control" id="bodyText" placeholder="Describe..." ref={description} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label">Price :</label>
                <input type="number" className="form-control" id="price" ref={price} required/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
};

export default CreatePost;