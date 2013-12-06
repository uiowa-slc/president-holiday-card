<?php

class CardApprovalAdmin extends ModelAdmin {
  private static $managed_models = array('CustomCard'); // Can manage multiple models
  private static $url_segment = 'cards'; // Linked as /admin/products/
  private static $menu_title = 'Card Approval';
}