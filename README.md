# React Myanmar Text - [Demo](https://jsmyanmar.github.io/react-mm-text/)

[travis-image]: https://travis-ci.org/jsmyanmar/react-mm-text.svg?branch=master
[travis-url]: https://travis-ci.org/jsmyanmar/react-mm-text

[![Build Status][travis-image]][travis-url]

A small react component library to render unicode standard or zawgyi font.

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
import MMText from 'react-mm-text';

class AppExample extends React.Component {

  render() {
    return (
      <div>
        <p>
          <MMText
            text={"သီဟိုဠ်မှ ဉာဏ်ကြီးရှင်သည် အာယုဝဍ်ဎနဆေးညွှန်းစာကို ဇလွန်ဈေးဘေးဗာဒံပင်ထက် အဓိဋ္ဌာန်လျက် ဂဃနဏဖတ်ခဲ့သည်။ ယေဓမ္မာ ဟေတုပ္ပဘဝါ တေသံ ဟေတုံ တထာဂတော အာဟ တေသဉ္စ ယောနိရောဓေါ ဧဝံ ဝါဒီ မဟာသမဏော။"}
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

## Todo

  - [ ] Add more docs and contributing guide
  - [ ] Add example
  - [ ] Add more testing details

## License
The [MIT](./LICENSE) licensed.
