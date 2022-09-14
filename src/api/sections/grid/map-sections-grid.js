import { mapSectionsGridImage } from './image/map-sections-grid_image'
import { mapSectionGridText } from './text/map-sections-grid_text'

export const mapSectionGrid = (section) => {
  if (section) {
    if (section?.text_grid.length === 0) {
      console.log('cai no image')
      return mapSectionsGridImage(section)
    } else {
      console.log('cai no text')
      if (section.text_grid.length > 0) return mapSectionGridText(section)
    }
  } else {
    return {}
  }
}
