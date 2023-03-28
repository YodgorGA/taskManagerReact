export const generalColor = {
    primaryColor:'#7B61FF',
    greenColor:'#5EE48C',
    redColor:'#FF6161',
    white:'#FFFFFF',
    pageWrapperGrayColor: '#E3E3E3',
}

export const inputColors = {
    red:{
      default:'#FF6161',
      hover:'#FF8080',
      active:'#D65D5D',
      shadow:'#ff616180',
    },
    primary:{
      default:'#7B61FF',
      hover:'#8A73FF',
      active:'#715BE3',
      shadow:'#7b61ff80',
    },
    green:{
      default:'#5EE48C',
      hover:'#80F0A6',
      active:'#4BD379',
      shadow:'#61ff9780',
    },
  }

export const textColors = {
    darkTextColor:'#000000',
    lightTextColor:'#F4F4F4',
    labelTextColor:'#CCCCCC',
}

export const disabledColors = {
    disabledElementColor:'#B5B5B5',
    disabledElementTextColor:textColors.labelTextColor,
}

export const dropdownColors = {
    default:{
        boxShadow:`inset 0px 0px 2px 0px ${disabledColors.disabledElementColor}`,
        border:generalColor.white,
    },
    active:{
        boxShadow:`0px 0px 2px 2px ${inputColors.primary.shadow}`,
        border:generalColor.primaryColor,
    }
}

export const buttonTextColors = {
    red:textColors.lightTextColor,
    primary:textColors.lightTextColor,
    green:textColors.lightTextColor,
    white:textColors.darkTextColor,
    disabled:disabledColors.disabledElementTextColor,
}

export const buttonColors = {
    red:{
        stayed:generalColor.redColor,
        hover:'#FF8080',
        active:'#D65D5D',
    },
    primary:{
        stayed:generalColor.primaryColor,
        hover:'#8A73FF',
        active:'#715BE3',
    },
    green:{
        stayed:generalColor.greenColor,
        hover:'#80F0A6',
        active:'#4BD379',
    },
    white:{
        stayed:generalColor.white,
        hover:'#E1E1E1',
        active:'#CFCFCF',
    },
    disabled:{
        stayed:disabledColors.disabledElementColor,
        hover:disabledColors.disabledElementColor,
        active:disabledColors.disabledElementColor,
    },

}

export const listRowColors = {
    whiteRow:generalColor.white,
    grayRow:'#F2F2F2'
}



export {}
