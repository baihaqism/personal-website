import React, { useEffect, useRef } from 'react';
import * as TypedJS from 'typed.js';

const TypedComponent: React.FC = () => {
  const typeTargetRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeTargetRef.current) {
      const options: TypedJS.TypedOptions = {
        strings: ['Backend Developer', 'Web Developer', 'Fullstack Developer'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
      };
      const typedInstance = new TypedJS.default(typeTargetRef.current, options);

      return () => {
        typedInstance.destroy();
      };
    }
  }, []);

  return <span ref={typeTargetRef} />;
};

export default TypedComponent;
