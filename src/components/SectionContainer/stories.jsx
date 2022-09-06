import { SectionContainer } from './index'

export default {
  title: 'SectionContainer',
  component: SectionContainer,
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
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
}

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  )
}
