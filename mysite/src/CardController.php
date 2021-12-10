<?php

namespace {

    class CardController extends \SilverStripe\Control\Controller
    {
        private static $url_handlers = [
            'cards//$Action/$ID' => 'show',
        ];

        private static $allowed_actions = [
            'show'
        ];

        public function index(){
            $this->redirect('/');
        }

        public function show($request)
        {
            print_r($this->getRequest()->param('ID'));
        }
    }
}
