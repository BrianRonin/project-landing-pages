import { mapImage } from '../image/map-image'
import { mapMenuLinks } from './links/map-menu-links'

export const mapMenu = (Menu = {}) => {
  const {
    logo_link: link = '',
    logo_text: text = '',
    image: image = {},
    menu_links: links = [],
  } = Menu

  return {
    link,
    text,
    srcImage: mapImage(image),
    links: mapMenuLinks(links),
  }
}
