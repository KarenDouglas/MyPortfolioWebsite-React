
# Place Image Assets in Public Folder
Ensure that your assets folder is located in the public directory. Files in the public directory are served by the development server and are accessible from the DOM sources.

# Avoid Using Tag Selectors On Page/Component-specific CSS imported files
Tag selectors target all elements of a specific type globally, so they can affect elements throughout your application. If multiple CSS files define conflicting styles using tag selectors, it can lead to unpredictable behavior and difficult-to-debug styling issues.

# Conditionally renderJSX based on Screen Size
With the `resize` Eventlistener JSX is able to 
```jsx
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures effect runs only once

  return (
    <div>
      {isSmallScreen ? (
        <h1>Hello, Small Screen!</h1>
      ) : (
        <h1>Hello, Large Screen!</h1>
      )}
    </div>
  );
};

export default MyComponent;
```

# Using Gradients on Border

```css
    margin-top: 30px;
    border-top: 20px solid;
/* use border-image for border color or style when working with gradients or images  */
    border-image: var(--pinkGreenGrad) 1 0 0 0 stretch;
    border-image-slice: 1; 
```
##  border-image property syntax
```css
border-image: source slice / width / outset repeat;
```


