export const toolbar = {
    options: ["inline", "blockType", "list", "textAlign", "colorPicker", "link"],
    inline: {
      inDropdown: false,
      className: undefined,
      component: undefined,
      dropdownClassName: undefined,
      options: [
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "monospace",
        "superscript",
        "subscript",
      ],
    },
    blockType: {
      inDropdown: true,
      options: [
        "Normal",
        "H1",
        "H2",
        "H3",
        "H4",
        "H5",
        "H6",
        "Blockquote",
        "Code",
      ],
      className: undefined,
      component: undefined,
      dropdownClassName: undefined,
    },
    list: {
      inDropdown: false,
      className: undefined,
      component: undefined,
      dropdownClassName: undefined,
      options: ["unordered", "ordered"],
    },
    textAlign: {
      inDropdown: true,
      className: undefined,
      component: undefined,
      dropdownClassName: undefined,
      options: ["left", "center", "right", "justify"],
    },
    link: {
      inDropdown: false,
      className: undefined,
      component: undefined,
      popupClassName: undefined,
      dropdownClassName: undefined,
      showOpenOptionOnHover: true,
      defaultTargetOption: "_self",
      options: ["link"],
      linkCallback: undefined,
    },
  };