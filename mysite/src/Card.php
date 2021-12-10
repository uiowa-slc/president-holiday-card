<?php

namespace {
    use SilverStripe\Assets\Image;
    use SilverStripe\ORM\DataObject;
    use SilverStripe\Forms\FieldList;
    use SilverStripe\Forms\TextField;
    use SilverStripe\AssetAdmin\Forms\UploadField;

    class Card extends DataObject
    {
        private static $db = [
            'Title' => 'Text',
            'AltText' => 'Text',
            'SortOrder' => 'Int'

        ];

        private static $summary_fields = [
            'GridThumbnail',
            'Title'
        ];

        private static $has_one = [
            'Image' => Image::class
        ];

        private static $default_sort = 'SortOrder';

        private static $owns = [
            'Image'
        ];

        public function getCMSFields(){
            $fields = new FieldList();

            $fields->push(new TextField('Title'));
            $fields->push(new TextField('AltText'));
            $fields->push(new UploadField('Image'));

            return $fields;
        }

        public function getGridThumbnail()
        {
            if($this->Image()->exists()) {
                return $this->Image()->ScaleWidth(100);
            }

            return "(no image)";
        }
    }
}
