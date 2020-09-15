import {container} from '../material-kit-react';
import commonStyles from '../commonStyles';

// look at moving some of these styles to a common sheet? is this possible with @material-ui library
// best scenario would be to put common styling into a common .js file, and then import those styles
// into the page specific .js style file. Then we should be able to overwrite any of the style values
// that would need overridden
const landingPageStyles = {
    ...commonStyles,
};

export default landingPageStyles;