<?php

class SubmissionAdmin extends ModelAdmin {

    private static $managed_models = array(
    	'Submission'
    );

    private static $field_labels = array(
        'Photo-CMSThumbnail' => 'Photo'
    );

    private static $url_segment = 'submissions';

    private static $menu_title = 'Submissions';

    private static $menu_icon = 'mysite/dist/images/submissions-modeladmin.png';

	public function getSearchContext() {
		$context = parent::getSearchContext();

		if($this->modelClass == 'Submission') {
		    $context->getFields()->push(new CheckboxField('q[Unapproved]', 'Only unapproved submissions'));
		}

		return $context;
	}
}