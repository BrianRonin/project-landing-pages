import { mapImage } from '../../../image/map-image'
import { mapSectionsMetadata } from '../../metadata/map-sections-metadata'

export const mapSectionsGridImage = (gridImage = {}) => {
  const {
    title = '',
    description = '',
    image_grid: { image = [] } = {},
    metadata = {},
  } = gridImage

  return {
    component: 'section.section-grid-image',
    title,
    description,
    grid: mapImage(image),
    ...mapSectionsMetadata(metadata),
  }
}
