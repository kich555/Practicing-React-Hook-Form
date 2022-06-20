import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import ReactDatePicker from 'react-datepicker';
import NumberFormat from 'react-number-format';
import ReactSelect from 'react-select';
import { EditorState } from 'draft-js';

import Header from './Header';
import ButtonsResult from './ButtonResult';
import DownShift from './DownShiftWrapper';
import AntD from './AndtD';
import DraftExample from './DraftExample';
import 'react-datepicker/dist/react-datepicker.css';
import 'antd/dist/antd.css';
import 'styles/main.scss';

const defaultValues = {
  AntdInput: 'Test',
  AntdTextArea: '',
  AntdCheckbox: true,
  AntdSwitch: true,
  AntdSlider: 20,
  AntdRadio: 1,
  AntdSelect: 'chocolate',
  numberFormat: 123456789,
  ReactSelect: { value: 'chocolate', label: 'Chocolate' },
  ReactDatepicker: new Date(),
  downShift: 'apple',
  DraftJS: EditorState.createEmpty(),
};

export default function App() {
  let renderCount = 0;
  const {
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors },
  } = useForm({ defaultValues });
  const [data, setData] = useState(null);
  renderCount++;

  console.log('data', data);
  console.log('errors', errors);
  return (
    <form onSubmit={handleSubmit(data => setData(data))} className="form margin-center">
      <Header renderCount={renderCount} />
      <hr />
      <AntD control={control} errors={errors} />
      <hr />
      <div className="container">
        <section>
          <label>React Select</label>
          <Controller
            name="ReactSelect"
            control={control}
            render={({ field }) => (
              <ReactSelect
                className="react-select-input"
                // isClearable
                {...field}
                options={[
                  { value: 'chocolate', label: 'Chocolate' },
                  { value: 'strawberry', label: 'Strawberry' },
                  { value: 'vanilla', label: 'Vanilla' },
                ]}
              />
            )}
          />
        </section>
        <section>
          <label>React Datepicker</label>
          <Controller
            control={control}
            name="ReactDatepicker"
            render={({ field }) => <ReactDatePicker className="input" placeholderText="Select date" onChange={e => field.onChange(e)} selected={field.value} />}
          />
        </section>
        <section>
          <label>NumberFormat</label>
          <Controller render={({ field }) => <NumberFormat className="input" thousandSeparator {...field} />} name="numberFormat" control={control} />
        </section>
        <section>
          <Controller render={({ field: { ref, ...rest } }) => <DownShift {...rest} />} control={control} name="downShift" />
        </section>
        <section>
          <label>DraftJS</label>
          <DraftExample control={control} />
        </section>
      </div>
      <hr />
      <ButtonsResult {...{ data, reset, setValue }} />
    </form>
  );
}
