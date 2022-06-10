import { useState } from '../../../gutenberg-packages/wordpress-element';
import Title from '../shared/title';
import Button from '../shared/button';

const Frontend = ( { blockProps, attributes: { counter: initialCounter, message }, children } ) => {
	const [ show, setShow ] = useState( false );
	const [ counter, setCounter ] = useState( initialCounter );

	return (
		<div {...blockProps}>
			<Title message={message} />
			<Button handler={() => setShow( !show )} />
			<button onClick={() => setCounter( counter + 1 )}>{counter}</button>
			{show && children}
		</div>
	);
};

export default Frontend;
