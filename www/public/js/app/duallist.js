define(["jquery","jquery.dualListBox"], function($) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {
        $.configureBoxes({selectOnSubmit: false});
				$.configureBoxes({
						box1View: 'box3View',
						box1Storage: 'box3Storage',
						box1Filter: 'box3Filter',
						box1Clear: 'box3Clear',
						box1Counter: 'box3Counter',
						box2View: 'box4View',
						box2Storage: 'box4Storage',
						box2Filter: 'box4Filter',
						box2Clear: 'box4Clear',
						box2Counter: 'box4Counter',
						to1: 'to3',
						to2: 'to4',
						allTo1: 'allTo3',
						allTo2: 'allTo4',
						selectOnSubmit: false
				});
				$.configureBoxes({
						box1View: 'box5View',
						box1Storage: 'box5Storage',
						box1Filter: 'box5Filter',
						box1Clear: 'box5Clear',
						box1Counter: 'box5Counter',
						box2View: 'box6View',
						box2Storage: 'box6Storage',
						box2Filter: 'box6Filter',
						box2Clear: 'box6Clear',
						box2Counter: 'box6Counter',
						to1: 'to5',
						to2: 'to6',
						allTo1: 'allTo5',
						allTo2: 'allTo6',
						selectOnSubmit: false
				});
    });
});