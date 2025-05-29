import { Buildings, ClipboardList, Home, User, UsersGroupRounded } from "@solar-icons/react";

export const menuOptions = [
    {
        name: "Home",
        icon: <Home weight='BoldDuotone' size={24} />,
        page: "/"
    },
    {
        name: "Exames",
        icon: <ClipboardList weight='BoldDuotone' size={24}/>,
        page: "/appointments"
    },
    {
        name: "Clínica",
        icon: <Buildings weight='BoldDuotone' size={24}/>,
        page: "/clinica"
    },
    {
        name: "Pacientes",
        icon: <UsersGroupRounded weight='BoldDuotone' size={24}/>,
        page: "/pacientes"
    },
    {
        name: "Usuários",
        icon: <User weight='BoldDuotone' size={24}/>,
        page: "/usuarios"
    }
]
