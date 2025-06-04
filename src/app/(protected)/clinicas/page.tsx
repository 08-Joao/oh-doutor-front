import Layout from '@/components/Layout/Layout'
import PageBody from '@/components/PageBody/PageBody'
import { List } from '@solar-icons/react/ssr'
import { Home } from '@solar-icons/react/ssr'
import React from 'react'

function Clinicas() {
  return (
    <Layout>
        <PageBody 
          title="Clínicas"
          menuOptions={[
            {
                name: "Lista de Clínicas",
                icon: <Home weight='BoldDuotone' size={24} />,
                content: <div>Conteúdo da Home</div> // ou o JSX.Element apropriado
            },
            {
                name: "Exames",
                icon: <List weight='BoldDuotone' size={24}/>,
                content: <div>Conteúdo dos Exames</div> // ou o JSX.Element apropriado
            },
            {
                name: "Pacientes",
                icon: <List weight='BoldDuotone' size={24}/>,
                content: <div>Conteúdo dos Pacientes</div> // ou o JSX.Element apropriado
            }
          ]}
        />
    </Layout>
  )
}

export default Clinicas