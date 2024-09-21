import { createContext, useReducer } from "react";

export const ServiceListContext = createContext(
    {
        serviceList: [],
        addServce: () => { },
        deleteService: () => { },
    }
);

const postReducer = (currServiceList, action) => {
    let newServiceList = currServiceList;

    if (action.type === "ADD_SERVICE") {
        newServiceList = [action.payload, ...currServiceList];
    }
    else if (action.type === "DELETE_SERVICE") {
        newServiceList = currServiceList.filter(service => service.id != action.payload.id);
    }
    return newServiceList;
};

const PostListContextProvider = ({ children }) => {

    const [serviceList, dispatchService] = useReducer(postReducer, []);

    const addService = (serviceName, description, price) => {
        const actionObj = {
            type: "ADD_SERVICE",
            payload: {
                id: Date.now(),
                serviceName,
                description,
                price,
            },
        }
        dispatchService(actionObj);
    };

    const deleteService = (id) => {
        const actionObj = {
            type: "DELETE_SERVICE",
            payload: {
                id,
            },
        }
        dispatchService(actionObj);
    };

    return (
        <ServiceListContext.Provider value={{ serviceList, addService, deleteService }}>
            {children}
        </ServiceListContext.Provider>
    )
};

export default PostListContextProvider;