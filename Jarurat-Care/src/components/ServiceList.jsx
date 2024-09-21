import { useContext } from "react";
import { ServiceListContext } from "../store/ServiceList-Context";
import Service from "./Service";
import EmptyMessage from "./EmptyMessage";

const ServiceList = () => {
    const { serviceList } = useContext(ServiceListContext);
    return (
        <>
            {serviceList.length === 0 && <EmptyMessage></EmptyMessage>}
            <div className="posts">
                {serviceList.map((service) => (
                    <Service service={service} key={service.id}></Service>
                ))}
            </div>
        </>
    )
};

export default ServiceList;