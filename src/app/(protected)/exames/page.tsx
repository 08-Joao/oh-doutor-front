import ListaExames from '@/components/Exames/ListaExames'
import Layout from '@/components/Layout/Layout'
import PageBody from '@/components/PageBody/PageBody'
import { AddSquare, List } from '@solar-icons/react/ssr'
import React from 'react'


function Exames() {



  return (
    <Layout>
        <PageBody 
          title="Clínicas"
          menuOptions={[
            {
                name: "Lista de Exames",
                icon: <List weight='BoldDuotone' className="text-primary" size={24} />,
                content: <ListaExames /> 
            },
            {
                name: "Criar Exames",
                icon: <AddSquare weight='BoldDuotone' className="text-primary" size={24} />,
                content: <div>Conteúdo dos Exames</div>
            },
          ]}
        />
    </Layout>
  )
}

export default Exames