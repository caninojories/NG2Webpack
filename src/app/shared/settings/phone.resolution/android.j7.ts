export class AndroidJ7 {
  private pageSettings = {
    width: 667,
    height: 375
  }

  // Roads
  private roads = {
    container: {
      x: 0,
      y: 247
    },

    graphics: {
      x: 5,
      y: 4
    },

    firstRow: {
      container: {
        x: 10,
        y: 10
      }
    },

    secondRow: {
      container: {
        x: 10,
        y: 48
      }
    },

    leftButton: {
      container: {
        x: 0,
        y: 0
      },
      graphics: {
        x: 0,
        y: 0,
        width: 75,
        height: 36
      },
      text: {
        x: 35,
        y: 18
      }
    },

    rightButton: {
      container: {
        x: 543,
        y: 0
      },
      graphics: {
        x: 0,
        y: 0,
        width: 75,
        height: 36
      },
      text: {
        x: 580,
        y: 18
      }
    },

    zoom: {
      container: {
        x: 493,
        y: 0
      },
      graphics: {
        x: 7,
        y: 0,
        width: 38,
        height: 36
      }
    },

    bigroad: {
      container: {
        x: 97,
        y: 0
      }
    },

    beadroad: {
      container: {
        x: 97,
        y: 0
      }
    },

    bigeyeroad: {
      container: {
        x: 114,
        y: 0
      }
    },

    smallroad: {
      container: {
        x: 136,
        y: 0
      }
    },

    cockroach: {
      container: {
        x: 164,
        y: 0
      }
    }
  }

  // Timer
  private timer = {
    container: {
      x: 520,
      y: 70
    },
    text: {
      x: 0,
      y: 0
    },

    circle: {
      graphics: {
        r: 40
      }
    },

    arc: {
      graphics: {
        r: 35
      }
    }
  }

  // Table Selection Timer
  private tableSelectionTimer = {
    application: {
      x: 50,
      y: 50,
      bottom: 12,
      left: 58
    },

    circle: {
      graphics: {
        r: 18
      }
    },

    arc: {
      graphics: {
        r: 15
      }
    }
  }

  // Summary
  private summary = {
    container: {
      x: 578,
      y: 30
    },

    shoecount: {
      container: {
        x: 0,
        y: 0
      },
      label: {
        x: 0,
        y: 0
      },
      text: {
        x: 30,
        y: 20
      }
    },

    dragon: {
      container: {
        x: 0,
        y: 40
      },
      label: {
        x: 15,
        y: 2
      },
      percent: {
        x: 32,
        y: 30
      }
    },

    tiger: {
      container: {
        x: 0,
        y: 85
      },
      label: {
        x: 15,
        y: 2
      },
      percent: {
        x: 32,
        y: 30
      }
    },

    tie: {
      container: {
        x: 0,
        y: 130
      },
      label: {
        x: 15,
        y: 2
      },
      percent: {
        x: 32,
        y: 30
      }
    },

    button: {
      container: {
        x: -19,
        y: 27
      }
    },

    arrow: {
      container: {
        x: -10,
        y: 55
      }
    }
  }

}
