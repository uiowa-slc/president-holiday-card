<?php

class SubmissionController extends ContentController {

	/**
	 * An array of actions that can be accessed via a request. Each array element should be an action name, and the
	 * permissions or conditions required to allow the user to access it.
	 *
	 * <code>
	 * array (
	 *     'action', // anyone can access this action
	 *     'action' => true, // same as above
	 *     'action' => 'ADMIN', // you must have ADMIN permissions to access this action
	 *     'action' => '->checkAction' // you can only access this action if $this->checkAction() returns true
	 * );
	 * </code>
	 *
	 * @var array
	 */
    private static $allowed_actions = array(
        'previewEmail'
       // 'view'
    );

    private static $url_handlers = array(
       'previewEmail/$Action//$ID' => 'previewEmail',
       'view//$ID' => 'view'
    );

	public function previewEmail(){
		$member = Member::currentUser();

	    $id = $this->getRequest()->param('ID');
	    $template = $this->getRequest()->param('Action');

	    $submission = Submission::get()->filter(array('ID' => $id))->First();

		if(!$submission->canView($member)){
			return Security::permissionFailure($this);
		}

	    return $submission->renderWith($template);
	}

	public function view(){
		$id = $this->getRequest()->param('ID');

		if(!is_numeric($id)){
			return $this->httpError(404);
		}

		$submission = Submission::get()->filter(array('ID' => $id))->First();

		if(!$submission){
			return $this->httpError(404);
		}
		$member = Member::currentUser();

		if(!$submission->canView($member)){
			return Security::permissionFailure($this);
		}

		$data = new ArrayData(array(
			'Title' => 'Wishing you a sweet and joyful holiday season from '.$submission->From.'.'
		));

		return $submission->customise($data)->renderWith(array('Submission', 'Page'));
	}
}