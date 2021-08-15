const CreateForm = [
  {
    label: "닉네임",
    name: "nickname",
    type: "text",
    placeholder: "닉네임을 입력해주세요.",
    message: "모임에서 사용할 닉네임을 5자 이내로 입력해주세요.",
    require: true,
    validate: {
      maxLength: {
        value: 5,
        message: "닉네임을 5자 이내로 입력해주세요",
      },
    },
  },
  {
    label: "모임 이름",
    name: "title",
    type: "text",
    placeholder: "모임 이름을 입력해주세요.",
    message: "모임 이름을 10자 이내로 입력해주세요.",
    require: true,
    validate: {
      maxLength: {
        value: 10,
        message: "모임 이름을 10자 이내로 입력해주세요",
      },
    },
  },
  {
    label: "모임설명",
    name: "description",
    type: "text",
    placeholder: "모임 설명을 입력해주세요.",
    message: "모임 설명을 15자 이내로 입력해주세요.",
    require: false,
    validate: {
      maxLength: {
        value: 15,
        message: "모임설명을 15자 이내로 입력해주세요",
      },
    },
  },
];

export default CreateForm;
