<?php

namespace {
    use SilverStripe\Control\Director;

    class CardController extends \SilverStripe\Control\Controller
    {
        private static $url_handlers = [
            'cards//$Action/$ID' => 'show',
        ];

        private static $allowed_actions = [
            'show'
        ];

        public function index(){
            $this->redirect(Director::absoluteBaseURL());
        }

        public function show($request)
        {
            // print_r($this->getRequest()->param('ID'));

            $card = Card::get()->filter(array('ID' => $this->getRequest()->param('ID')))->First();

            if($card){
                return $card->RenderWith(array('Card', 'Page'));
            }else{
                return $this->httpError('404');
            }
        }



    }
}
