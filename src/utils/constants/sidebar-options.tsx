import { Buildings, ClipboardList, Home, Stethoscope, User, UsersGroupRounded } from "@solar-icons/react";

export const menuOptions = [
    {
        name: "Home",
        icon: <Home weight='BoldDuotone' size={24} />,
        page: "/"
    },
    {
        name: "Exames",
        icon: <ClipboardList weight='BoldDuotone' size={24}/>,
        page: "/exames"
    },
    {
        name: "Clínicas",
        icon: <Buildings weight='BoldDuotone' size={24}/>,
        page: "/clinicas"
    },
    {
        name: "Pacientes",
        icon: <UsersGroupRounded weight='BoldDuotone' size={24}/>,
        page: "/pacientes"
    },
    {
        name: "Salas de Atendimento",
        icon: <Stethoscope weight='BoldDuotone' size={24}/>,
        page: "/salas"
    }
]
