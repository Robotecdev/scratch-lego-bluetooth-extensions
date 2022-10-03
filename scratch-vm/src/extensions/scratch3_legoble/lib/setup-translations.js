const setupTranslations = function (formatMessage, extTranslations = {}) {
    const localeSetup = formatMessage.setup();

    const translations = {
        'he': {
            'legobluetooth.motorPWM': 'הפעל מנוע [PORT] בעוצמה [POWER]',
            'legobluetooth.motorStop': 'עצור מנוע [PORT]',
            'legobluetooth.motorRunFor': 'הפעל מנוע [PORT] בכיוון [DIRECTION] למשך [VALUE] [UNIT]',
            'legobluetooth.motorGoDirectionToPosition': 'מנוע [PORT] לך [DIRECTION] למיקום [POSITION]',
            'legobluetooth.motorStart': 'הפעל מנוע [PORT] בכיוון [DIRECTION]',
            'legobluetooth.motorSetSpeed': 'הפעל מנוע [PORT] מהירות [SPEED]',
            'legobluetooth.getRelativePosition': 'מנוע [PORT] מדוד מעלות',
            'legobluetooth.getPosition': 'מנוע [PORT] מדוד מעלות',
            'legobluetooth.motorResetRelativePosition': 'אפס מעלות מנוע [PORT] ל- [RELATIVE_POSITION]',

            'legobluetooth.displayImageFor': 'הפעל [MATRIX] למשך [DURATION] שניות',
            'legobluetooth.displayImage': 'הפעל [MATRIX]',
            'legobluetooth.displayText': 'כתוב [TEXT]',
            'legobluetooth.displayClear': 'כבה פיקסלים',
            'legobluetooth.displaySetBrightness': 'הגדר בהירות פיקסלים [BRIGHTNESS]',
            'legobluetooth.displaySetPixel': 'הגדר בהירות פיקסלים במיקום [X] , [Y] ל- [BRIGHTNESS]',
            'legobluetooth.centerButtonLights': 'הגדר צבע לנורה בכפתור ל- [COLOR]',
            'legobluetooth.ultrasonicLightUp': 'הדלק אור בכניסה [PORT] בערכים [LIGHT0] [LIGHT1] [LIGHT2] [LIGHT3]',

            'legobluetooth.getColor': '[PORT] צבע',

            'legobluetooth.getDistance': '[PORT] מרחק',
            'legobluetooth.getForce': '[PORT] מהירות',
            'legobluetooth.getTilt': '[PORT] הגדר ציר סיבוב [XY]',
            'legobluetooth.setHubLEDColor': 'הגדר צבע מרכזי ל [COLOR]',
            'legobluetooth.getHubTilt': 'הגדר ציר סיבוב מרכזי [XYZ]',
            'legobluetooth.getAngle': 'מדוד חיישן גיירו [AXIS]',

            'legobluetooth.getName': 'שם',
            'legobluetooth.getFirmwareVersion': 'גרסת החומרה',
            'legobluetooth.getBatteryLevel': 'מצב סוללה',

            'legobluetooth.rotations': 'סיבובים',
            'legobluetooth.degrees': 'מעלות',
            'legobluetooth.seconds': 'שניות',
            'legobluetooth.shortestPath': 'בדרך הקצרה',
            'legobluetooth.clockwise': 'עם כיוון השעון',
            'legobluetooth.counterclockwise': 'נגד כיוון השעון',

            'legobluetooth.black': '(0) שחור',
            'legobluetooth.pink': '(1) ורוד',
            'legobluetooth.purple': '(2) סגול',
            'legobluetooth.blue': '(3) כחול',
            'legobluetooth.lightBlue': '(4) כחול בהיר',
            'legobluetooth.lightGreen': '(5) ירוק בהיר',
            'legobluetooth.green': '(6) ירוק',
            'legobluetooth.yellow': '(7) צהוב',
            'legobluetooth.orange': '(8) כתום',
            'legobluetooth.red': '(9) אדום',
            'legobluetooth.white': '(10) לבן',
            'legobluetooth.noColor': '(-1) ללא צבע',

            'legobluetooth.pitch': 'עלרוד',
            'legobluetooth.roll': 'סיבוב',
            'legobluetooth.yaw': 'סבסוב',
        },
        'ja': {
            'legobluetooth.motorPWM': '[PORT] モーターを [POWER] %のパワーで回す',
            'legobluetooth.motorStop': '[PORT] モーターを止める',
            'legobluetooth.motorRunFor': '[PORT] モーターを [DIRECTION] 方向に [VALUE] [UNIT] 回す',
            'legobluetooth.motorGoDirectionToPosition': '[PORT] モーターを [DIRECTION] で位置 [POSITION] まで回す',
            'legobluetooth.motorStart': '[PORT] モーターを [DIRECTION] 方向に回す',
            'legobluetooth.motorSetSpeed': '[PORT] スピードを [SPEED] %にする',
            'legobluetooth.getRelativePosition': '[PORT] 相対位置',
            'legobluetooth.getPosition': '[PORT] 位置',
            'legobluetooth.motorResetRelativePosition': '[PORT] 相対位置を [RELATIVE_POSITION] にリセットする',

            'legobluetooth.displayImageFor': '[MATRIX] を [DURATION] 秒間オンにする',
            'legobluetooth.displayImage': '[MATRIX] をオンにする',
            'legobluetooth.displayText': '[TEXT] を表示する',
            'legobluetooth.displayClear': 'すべてのピクセルをオフにする',
            'legobluetooth.displaySetBrightness': 'ピクセルの明るさを [BRIGHTNESS] %にする',
            'legobluetooth.displaySetPixel': '[X] , [Y] のピクセルの明るさを [BRIGHTNESS] %にする',
            'legobluetooth.centerButtonLights': 'センターボタンのライトを [COLOR] にする',
            'legobluetooth.ultrasonicLightUp': '[PORT] を [LIGHT0] [LIGHT1] [LIGHT2] [LIGHT3] でライトアップする',

            'legobluetooth.getColor': '[PORT] 色',
            'legobluetooth.getDistance': '[PORT] 距離',
            'legobluetooth.getForce': '[PORT] 圧力',
            'legobluetooth.getTilt': '[PORT] 傾き [XY]',
            'legobluetooth.setHubLEDColor': 'ハブのLEDを [COLOR] にする',
            'legobluetooth.getHubTilt': 'ハブの傾き [XYZ]',
            'legobluetooth.getAngle': '[AXIS] 角',

            'legobluetooth.getName': '名前',
            'legobluetooth.getFirmwareVersion': 'ファームウェアバージョン',
            'legobluetooth.getBatteryLevel': '電池残量',

            'legobluetooth.rotations': '回転',
            'legobluetooth.degrees': '度',
            'legobluetooth.seconds': '秒',
            'legobluetooth.shortestPath': '最短経路',
            'legobluetooth.clockwise': '時計回り',
            'legobluetooth.counterclockwise': '反時計回り',

            'legobluetooth.black': '(0) 黒',
            'legobluetooth.pink': '(1) ピンク',
            'legobluetooth.purple': '(2) 紫',
            'legobluetooth.blue': '(3) 青',
            'legobluetooth.lightBlue': '(4) 水色',
            'legobluetooth.lightGreen': '(5) 明るい緑',
            'legobluetooth.green': '(6) 緑',
            'legobluetooth.yellow': '(7) 黄色',
            'legobluetooth.orange': '(8) オレンジ',
            'legobluetooth.red': '(9) 赤',
            'legobluetooth.white': '(10) 白',
            'legobluetooth.noColor': '(-1) 色なし',

            'legobluetooth.pitch': 'ピッチ',
            'legobluetooth.roll': 'ロール',
            'legobluetooth.yaw': 'ヨー',
        },
        'ja-Hira': {
            'legobluetooth.motorPWM': '[PORT] モーターを [POWER] %のパワーでまわす',
            'legobluetooth.motorStop': '[PORT] モーターをとめる',
            'legobluetooth.motorRunFor': '[PORT] モーターを [DIRECTION] ほうこうに [VALUE] [UNIT] まわす',
            'legobluetooth.motorGoDirectionToPosition': '[PORT] モーターを [DIRECTION] でいち [POSITION] までまわす',
            'legobluetooth.motorStart': '[PORT] モーターを [DIRECTION] ほうこうにまわす',
            'legobluetooth.motorSetSpeed': '[PORT] スピードを [SPEED] %にする',
            'legobluetooth.getRelativePosition': '[PORT] そうたいいち',
            'legobluetooth.getPosition': '[PORT] いち',
            'legobluetooth.motorResetRelativePosition': '[PORT] そうたいいちを [RELATIVE_POSITION] にリセットする',

            'legobluetooth.displayImageFor': '[MATRIX] を [DURATION] びょうかんオンにする',
            'legobluetooth.displayImage': '[MATRIX] をオンにする',
            'legobluetooth.displayText': '[TEXT] をひょうじする',
            'legobluetooth.displayClear': 'すべてのピクセルをオフにする',
            'legobluetooth.displaySetBrightness': 'ピクセルのあかるさを [BRIGHTNESS] %にする',
            'legobluetooth.displaySetPixel': '[X] , [Y] のピクセルのあかるさを [BRIGHTNESS] %にする',
            'legobluetooth.centerButtonLights': 'センターボタンのライトを [COLOR] にする',
            'legobluetooth.ultrasonicLightUp': '[PORT] を [LIGHT0] [LIGHT1] [LIGHT2] [LIGHT3] でライトアップする',

            'legobluetooth.getColor': '[PORT] いろ',
            'legobluetooth.getDistance': '[PORT] きょり',
            'legobluetooth.getForce': '[PORT] あつりょく',
            'legobluetooth.getTilt': '[PORT] かたむき [XY]',
            'legobluetooth.setHubLEDColor': 'ハブのLEDを [COLOR] にする',
            'legobluetooth.getHubTilt': 'ハブのかたむき [XYZ]',
            'legobluetooth.getAngle': '[AXIS] かく',

            'legobluetooth.getName': 'なまえ',
            'legobluetooth.getFirmwareVersion': 'ファームウェアバージョン',
            'legobluetooth.getBatteryLevel': 'でんちざんりょう',

            'legobluetooth.rotations': 'かいてん',
            'legobluetooth.degrees': 'ど',
            'legobluetooth.seconds': 'びょう',
            'legobluetooth.shortestPath': 'さいたんきょり',
            'legobluetooth.clockwise': 'とけいまわり',
            'legobluetooth.counterclockwise': 'はんとけいまわり',

            'legobluetooth.black': '(0) くろ',
            'legobluetooth.pink': '(1) ピンク',
            'legobluetooth.purple': '(2) むらさき',
            'legobluetooth.blue': '(3) あお',
            'legobluetooth.lightBlue': '(4) みずいろ',
            'legobluetooth.lightGreen': '(5) あかるいみどり',
            'legobluetooth.green': '(6) みどり',
            'legobluetooth.yellow': '(7) きいろ',
            'legobluetooth.orange': '(8) オレンジ',
            'legobluetooth.red': '(9) あか',
            'legobluetooth.white': '(10) しろ',
            'legobluetooth.noColor': '(-1) いろなし',

            'legobluetooth.pitch': 'ピッチ',
            'legobluetooth.roll': 'ロール',
            'legobluetooth.yaw': 'ヨー',
        }        
    };

    for (const locale in translations) {
        if (extTranslations[locale]) {
            Object.assign(translations[locale], extTranslations[locale]);
        }

        if (!localeSetup.translations[locale]) {
            localeSetup.translations[locale] = {};
        }
        Object.assign(localeSetup.translations[locale], translations[locale]);
    }
};

module.exports = setupTranslations;