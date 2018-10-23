

export const convertLibrarySelect = (library) => {
  return {
    type: 'CONVERT_LIBRARY_SELECT',
    library
  }
}

export const detectLibrarySelect = (library) => {
  return {
    type: 'DETECT_LIBRARY_SELECT',
    library
  }
}

export const showFontSelect = (font) => {
  return {
    type: 'SHOW_FONT_SELECT',
    font
  }
}
