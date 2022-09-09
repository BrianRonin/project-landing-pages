import { Base } from '../Base'
import { MockBase } from '../Base/mock'
import * as Styled from './styles'

function Home() {
  return <Base {...MockBase} />
}

export default Home
