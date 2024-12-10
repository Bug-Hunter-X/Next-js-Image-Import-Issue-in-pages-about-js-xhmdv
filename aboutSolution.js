```javascript
// pages/about.js
import Image from 'next/image';

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <Image src="/images/image.png" alt="About Page Image" width={500} height={300} />
    </div>
  );
}

export default About;
```
To fix this, ensure that `image.png` is placed inside the `public` directory.  The path used in the `Image` component must reflect the correct location within the `public` directory.