<?php

class CardApprovalAdmin extends ModelAdmin {
  private static $managed_models = array('CustomCard'); // Can manage multiple models
  private static $url_segment = 'cards'; // Linked as /admin/products/
  private static $menu_title = 'Card Approval';

    public function getSearchContext() {
        $context = parent::getSearchContext();
        if($this->modelClass == 'CustomCard') {
            $context->getFields()->push(new CheckboxField('q[Approved]', 'Show only unapproved cards'));
        }
        return $context;
    }

    public function getList() {
        $list = parent::getList();
        $params = $this->request->requestVar('q'); // use this to access search parameters

        if($this->modelClass == 'CustomCard' && isset($params['Approved']) && $params['Approved']) {
            //$list->exclude('Approved', '1');
            return $list;
        }else{
       		$list->exclude('Approved', '1');
        }
        return $list;
    }


}