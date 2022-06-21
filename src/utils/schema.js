import * as yup from 'yup';
const schema = yup.object().shape({
  AntdInput: yup.string().required('필수 입력값입니다'),
  AntdTextArea: yup.string().required('필수 입력값입니다'),
  AntdSlider: yup.number().min(10, 'AntdSlider는 최소 10 이상의 값을 설정할 수 있습니다.'),
});

export default schema;
