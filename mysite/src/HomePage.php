<?php

namespace {

    use SilverStripe\Forms\GridField\GridFieldConfig_RecordEditor;
    use SilverStripe\Forms\GridField\GridField;
    use UndefinedOffset\SortableGridField\Forms\GridFieldSortableRows;
    use Colymba\BulkUpload\BulkUploader;
    use SilverStripe\Assets\Image;
    use SilverStripe\AssetAdmin\Forms\UploadField;
    use SilverStripe\Forms\GridField\GridFieldPaginator;
    class HomePage extends Page
    {
        private static $db = [

        ];

        private static $has_one = [
            'Image' => Image::class
        ];

        private static $icon_class = 'font-icon-p-home';

        public function getCMSFields()
        {
            $fields = parent::getCMSFields();

            $gridField = new GridField('Cards', 'Cards', Card::get());

            $gridFieldConfig = GridFieldConfig_RecordEditor::create();
            $gridFieldConfig->addComponent($sortable = new GridFieldSortableRows('SortOrder'));

            $gridFieldConfig->addComponent(new \Colymba\BulkUpload\BulkUploader('Image', 'Card'));

            $paginator = $gridFieldConfig->getComponentByType(GridFieldPaginator::class);
            $paginator->setItemsPerPage(999);

            $gridField->setConfig($gridFieldConfig);


            $fields->addFieldToTab('Root.Cards', $gridField);

            return $fields;
        }
    }
}
