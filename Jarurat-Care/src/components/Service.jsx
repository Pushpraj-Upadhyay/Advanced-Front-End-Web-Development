import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { ServiceListContext } from "../store/ServiceList-Context";

const Service = ({ service }) => {

    const { deleteService } = useContext(ServiceListContext);

    return (
        <div className="card text-center post">
            <div className="card-header alert alert-primary">
                <h2>{service.serviceName}</h2>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger delete-button" onClick={() => deleteService(service.id)}>
                    <AiFillDelete />
                </span>
            </div>
            <div className="card-body">
                <pre className="card-text post-content">{service.description}</pre>
                <span className="badge text-bg-primary tags">Rs {service.price}</span>
            </div>
        </div>
    )
};

export default Service;