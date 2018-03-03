# React Myanmar Text
A small react component library to solve the complex myanmar font problem.

---

## Installation
Using `npm`
```bash
npm install react-mm-text --save
```

Using `yarn`
```bash
yarn add react-mm-text
```

---

## Usage

```javascript

import React from 'react';
import MMText from 'react--mm-text';

class AppExample extends React.Component {

  render() {
    return (
      <div>
        <p>
          <MMText
            text={"ဘယ်အ‌ရောင်ကို နှစ်သက်လဲလို့‌ မေးလာလျှင် အဖြူရောင်ကိုသာ ‌ဖြေရပါလိမ့်မယ်။"}
            showFont={"unicode"}
            conveter={"rabbit"}
            detector={"knayi"}
          />
        </p>
      </div>
    )
  }

}

```

---

## API

### Props

| Prop | Type | Default | Note |
| --- | --- | --- | --- |
| `text` | `String(require)` |  | The plain text for render. |
| `showFont` | `String` | `unicode` | The font type for render. Acceptable values for `showFont` are `unicode` and `zawgyi`. The default is `unicode`. |
| `conveter` | `String` | `rabbit` | The conveter name to convert. Only one of `rabbit` and `knayi` are accept. The default value is `rabbit`. |
| `detector` | `String` | `myanmar-tools` | The detector name to detect font. Only one of `myanmar-tools` and `knayi` are accept. The default value is `myanmar-tools`. |

---

## License
The [MIT](./LICENSE) licensed.
