import { useContext,createContext,useState, Children } from "react";

const ModalContext = createContext(null);

const ModalProvider = ({children}) =>{
    const [isModalOpen,setOpen] = useState(false)
    const [modalData,setModalData] = useState({})
    return ( 
        <ModalContext.Provider value={{isModalOpen,setOpen,modalData,setModalData}}>
            {children}
        </ModalContext.Provider>
    )
}

const useModal = ()=> useContext(ModalContext)

export {ModalProvider,useModal}