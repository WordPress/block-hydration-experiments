import { registerBlockType } from '../../gutenberg-packages/wordpress-blocks';
import Edit from './edit';
import Frontend from './frontend';
import './style.scss';

registerBlockType('bhe/block-hydration-experiments-parent', {
	edit: Edit,
	// The Save component is derived from the Frontend component.
	frontend: Frontend,
});
