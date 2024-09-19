<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class GenerateTranslationsVue extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'generate_translations_vue';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $locales = [
            'en',
            'it',
        ];

        foreach ($locales as $locale) {
            try {
                $path = resource_path('lang/' . $locale);
                $files = File::files($path);
                $translations = [];
                foreach ($files as $key => $value) {
                    $fileName = explode('.', $value->getRelativePathname())[0];
                    // ADD NAME OF FILES THAT YOU DONT WANT TO GO TO en.json
                    if ($fileName == 'app') {
                        continue;
                    }
                    foreach (__($fileName, [], $locale) as $key => $value) {
                        if ($fileName == "enum") {

                            $translations[$fileName . "_" . $key] = $value ?? [];
                        } else {
                            $array = $this->checkArrayTranslations($fileName . "." . $key, $value, $translations);
                            if (!empty($array)) {
                                if (!empty($array['translations'])) {
                                    $translations = array_merge($translations, $array['translations']);
                                }

                                if (!empty($array['key'])) {
                                    $translations[$array['key']] = $array['value'] ?? '';
                                }
                            }
                        }
                    }
                }

                $contentPath = resource_path('js/translations/' . $locale . '.json');
                File::put($contentPath, json_encode($translations, JSON_PRETTY_PRINT));
            } catch (\Exception $e) {
                dd($e->getMessage());
            }
        }


        return 0;
    }

    public function checkArrayTranslations($key = "", $value = "", $translations)
    {
        if (is_array($value)) {
            foreach ($value as $k => $v) {
                $array = $this->checkArrayTranslations($key . "." . $k, $v, $translations);
                if (!empty($array['key'])) {
                    $translations[$array['key']] = $array['value'] ?? '';
                }
                if (!empty($array['translations'])) {
                    $translations = array_merge($translations, $array['translations']);
                }
            }

            return [
                'translations' => $translations
            ];
        } else {
            return [
                'key'   => $key,
                'value' => $value
            ];
        }
    }
}
