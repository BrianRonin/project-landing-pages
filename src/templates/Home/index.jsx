import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { mapData } from '../../api/map-data'
import { GridContent } from '../../components/GridContent'
import { GridImage } from '../../components/GridImage'
import { GridText } from '../../components/GridText'
import { GridTwoColumn } from '../../components/GridTwoColumn'
import { Base } from '../Base'
import { MockBase } from '../Base/mock'
import { Loading } from '../Loading'
import { PageNotFound } from '../PageNotFound'
import * as Styled from './styles'

const Home = () => {
  const [data, setData] = useState({})
  const location = useLocation()

  useEffect(() => {
    const pathName = location.pathname.replace(/[^a-z0-9-_]/gi, '')
    const slug = pathName ? pathName : 'minha'
    const load = async () => {
      try {
        let json = await fetch(
          `http://brianronin.com.br:1337/api/pages?filters[slug]=${slug}&populate=deep`,
        )
        const __data = await json.json()
        const _data = mapData(__data)

        setData(_data[0])
      } catch (e) {
        setData(undefined)
      }
    }
    load()
  }, [location])

  useEffect(() => {
    if (data === undefined) {
      document.title = 'Pagina não encontrada'
    }
    if (data && !data.slug) {
      document.title = 'Carregando'
    }
    if (data && data.title) {
      document.title = data.title
    }
  }, [data])

  if (data && !data.slug) {
    return <Loading />
  }
  if (data === undefined) {
    return <PageNotFound />
  }

  const { menu, sections, footerHtml: footer } = data
  const { links, text, link, srcImage } = menu
  return (
    <Base
      links={links}
      footerHtml={footer}
      logoData={{ text: text, link: link, srcImage: srcImage }}
    >
      {!!data &&
        sections.map((section, i) => {
          const { component } = section

          if (component === 'section.section-two-columns') {
            return <GridTwoColumn key={i + 1} {...section} />
          }

          if (component === 'section.section-content') {
            return <GridContent key={i + 2} {...section} />
          }

          if (component === 'section.section-grid-text') {
            return <GridText key={i + 3} {...section} />
          }

          if (component === 'section.section-grid-image') {
            return <GridImage key={i + 4} {...section} />
          }
        })}
    </Base>
  )
}

export default Home
