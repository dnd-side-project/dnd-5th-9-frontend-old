const JoinForm = [
  {
    label: "이름",
    name: "username",
    type: "text",
    placeholder: "이름을 입력해주세요.",
  },
  {
    label: "이메일",
    name: "email",
    type: "email",
    placeholder: "이메일을 입력해주세요.",
  },
  {
    label: "비밀번호",
    name: "password",
    type: "password",
    placeholder: "비밀번호를 입력해주세요.",
    message: "영문, 숫자를 포함한 6~10자로 입력해주세요.",
  },
  {
    label: "비밀번호 확인",
    name: "password-check",
    type: "password",
    placeholder: "비밀번호 확인을 위해 한 번 더 입력해주세요.",
  },
];

export default JoinForm;
