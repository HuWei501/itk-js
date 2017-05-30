let extensionToIO = {}

extensionToIO['dcm'] = 'itkGDCMImageIOJSBinding'

extensionToIO['nrrd'] = 'itkNrrdImageIOJSBinding'
extensionToIO['NRRD'] = 'itkNrrdImageIOJSBinding'

extensionToIO['nhdr'] = 'itkNrrdImageIOJSBinding'
extensionToIO['NHDR'] = 'itkNrrdImageIOJSBinding'
extensionToIO['png'] = 'itkPNGImageIOJSBinding'
extensionToIO['PNG'] = 'itkPNGImageIOJSBinding'

extensionToIO['vtk'] = 'itkVTKImageIOJSBinding'

module.exports = extensionToIO
