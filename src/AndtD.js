import * as React from 'react';
import { Controller } from 'react-hook-form';
import { Input, Select, Checkbox as AntdCheckbox, Switch as AntdSwitch, Slider as AntdSlider, Radio } from 'antd';
import { ErrorMessage } from '@hookform/error-message';

const { Option } = Select;
const { TextArea } = Input;
export default function AntD({ control, errors }) {
  return (
    <div className="container">
      <section>
        <label>Antd Input</label>
        <Controller placeholder="AntD Input" control={control} name="AntdInput" render={({ field }) => <Input {...field} />} />
        <ErrorMessage errors={errors} name="AntdInput" message="This is required" />
      </section>
      <section>
        <label>Antd Input</label>
        <Controller placeholder="AntD Input" control={control} name="AntdInputB" render={({ field }) => <Input {...field} />} />
        <ErrorMessage errors={errors} name="AntdInputB" message="This is required" />
      </section>
      <section>
        <label>Antd Textarea</label>
        <Controller
          placeholder="AntD Input"
          control={control}
          name="AntdTextArea"
          rules={{
            required: { value: true, message: 'This is required??' },
            maxLength: {
              value: 10,
              message: 'AntdTextArea must be at least 10 characters long.',
            },
          }}
          render={({ field }) => <TextArea {...field} />}
        />
        <ErrorMessage errors={errors} name="AntdTextArea">
          {({ messages }) => {
            console.log(messages);
            return messages && Object.entries(messages).map(([type, message]) => <p key={type}>{message}</p>);
          }}
        </ErrorMessage>
      </section>
      <section>
        <label>Antd Checkbox</label>
        <Controller
          control={control}
          name="AntdCheckbox"
          render={({ field: { value, onChange } }) => (
            <AntdCheckbox
              checked={value}
              onChange={e => {
                onChange(e.target.checked);
              }}
            />
          )}
        />
      </section>
      <section>
        <label>Antd Switch</label>
        <Controller control={control} name="AntdSwitch" render={({ field: { value, onChange } }) => <AntdSwitch onChange={onChange} checked={value} />} />
      </section>
      <section>
        <label>Antd Select</label>
        <Controller
          control={control}
          name="AntdSelect"
          render={({ field }) => (
            <Select {...field} defaultValue="chocolate">
              <Option value="chocolate">Chocolate</Option>
              <Option value="strawberry">Strawberry</Option>
              <Option value="vanilla">Vanilla</Option>
            </Select>
          )}
        />
      </section>
      <section>
        <label>Antd Slider</label>
        <Controller control={control} name="AntdSlider" render={({ field }) => <AntdSlider {...field} />} />
      </section>
      <section>
        <label>Antd Radio</label>
        <Controller
          control={control}
          name="AntdRadio"
          render={({ field: { onChange, value } }) => (
            <Radio.Group value={value} onChange={e => onChange(e.target.value)}>
              <Radio value={1}>A</Radio>
              <Radio value={2}>B</Radio>
              <Radio value={3}>C</Radio>
              <Radio value={4}>D</Radio>
            </Radio.Group>
          )}
        />
      </section>
    </div>
  );
}
