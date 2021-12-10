<?php

namespace {

	use SilverStripe\CMS\Controllers\ContentController;
    use SilverStripe\ORM\ArrayList;
    use SilverStripe\ORM\DataObject;
	class PageController extends ContentController {
		/**
		 * An array of actions that can be accessed via a request. Each array element should be an action name, and the
		 * permissions or conditions required to allow the user to access it.
		 *
		 * <code>
		 * [
		 *     'action', // anyone can access this action
		 *     'action' => true, // same as above
		 *     'action' => 'ADMIN', // you must have ADMIN permissions to access this action
		 *     'action' => '->checkAction' // you can only access this action if $this->checkAction() returns true
		 * ];
		 * </code>
		 *
		 * @var array
		 */
		private static $allowed_actions = [];

		protected function init() {
			parent::init();
			// You can include any CSS or JS required by your project here.
			// See: https://docs.silverstripe.org/en/developer_guides/templates/requirements/
		}


        // public function Cards($numCards = 20){

        //     $list = new ArrayList();

        //     for($i = 0; $i <= $numCards; $i++){
        //         $card = new DataObject();
        //         $list->push($card);
        //     }

        //     return $list;

        // }

        public function Cards(){
            return Card::get();
        }

	}
}
