import { useEffect, useRef } from "react";

const useDimensions = (ref) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    };

    updateDimensions(); // Call initially to get the dimensions
    window.addEventListener("resize", updateDimensions); // Listen for window resize

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [ref]); // Add ref to the dependency array

  return dimensions.current;
};

export { useDimensions };
