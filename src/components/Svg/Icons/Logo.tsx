import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 96 96" {...props}>
      <image
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REM4Njk1Mjk0OEIyMTFFQzg3Q0RDOEQyMEIxNUYyQkQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REM4Njk1MkE0OEIyMTFFQzg3Q0RDOEQyMEIxNUYyQkQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEQzg2OTUyNzQ4QjIxMUVDODdDREM4RDIwQjE1RjJCRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEQzg2OTUyODQ4QjIxMUVDODdDREM4RDIwQjE1RjJCRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pki/jX8AADeBSURBVHjazH0HYFzF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"
        width="96"
      ></image>
    </Svg>
  );
};

export default Icon;
