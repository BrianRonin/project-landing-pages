import { Heading } from '../Heading'
import { SectionContainer } from '../SectionContainer'
import { SectionBackground } from './index'

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>teste</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
          officiis, sequi odio perferendis quaerat illum possimus magni libero
          aliquid deserunt maxime a voluptatum temporibus cupiditate dicta
          perspiciatis amet non odit?
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
    layout: 'fullscreen',
  },
}

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  )
}
