import ListaExames from '@/components/Exames/ListaExames'
import Layout from '@/components/Layout/Layout'
import PageBody from '@/components/PageBody/PageBody'
import { List } from '@solar-icons/react/ssr'
import React from 'react'

function Exames() {
  return (
    <Layout>
        <PageBody 
          title="Clínicas"
          menuOptions={[
            {
                name: "Lista de Exames",
                icon: <List weight='BoldDuotone' size={24} />,
                content: <ListaExames /> 
            },
          ]}
        />
    </Layout>
  )
}

export default Exames