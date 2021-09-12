/**
 * @author mrdoob / http://mrdoob.com/
 */

import { UIPanel } from './libs/ui.js';

import { MenubarFile } from './MenubarFile.js';
import { MenubarEdit } from './MenubarEdit.js';
import { MenubarExamples } from './MenubarExamples.js';
import { MenubarHelp } from './MenubarHelp.js';

function Menubar( editor ) {

	var container = new UIPanel();
	container.setId( 'menubar' );

	container.add( new MenubarFile( editor ) );
	container.add( new MenubarEdit( editor ) );
	container.add( new MenubarExamples( editor ) );
	container.add( new MenubarHelp( editor ) );

	return container;

}

export { Menubar };
