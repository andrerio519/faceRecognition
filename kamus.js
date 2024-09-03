const translationDict = {
    'person': 'orang',
    'bicycle': 'sepeda',
    'car': 'mobil',
    'motorcycle': 'sepeda motor',
    'airplane': 'pesawat',
    'bus': 'bis',
    'train': 'kereta',
    'truck': 'truk',
    'boat': 'perahu',
    'traffic light': 'lampu lalu lintas',
    'fire hydrant': 'hidran',
    'stop sign': 'tanda stop',
    'parking meter': 'meteran parkir',
    'bench': 'bangku',
    'bird': 'burung',
    'cat': 'kucing',
    'dog': 'anjing',
    'horse': 'kuda',
    'sheep': 'domba',
    'cow': 'sapi',
    'elephant': 'gajah',
    'bear': 'beruang',
    'zebra': 'zebra',
    'giraffe': 'jerapah',
    'backpack': 'ransel',
    'umbrella': 'payung',
    'handbag': 'tas tangan',
    'tie': 'dasi',
    'suitcase': 'koper',
    'frisbee': 'frisbee',
    'skis': 'ski',
    'snowboard': 'papan seluncur salju',
    'sports ball': 'bola olahraga',
    'kite': 'layang-layang',
    'baseball bat': 'pemukul bisbol',
    'baseball glove': 'sarung tangan bisbol',
    'skateboard': 'papan luncur',
    'surfboard': 'papan selancar',
    'tennis racket': 'raket tenis',
    'bottle': 'botol',
    'wine glass': 'gelas anggur',
    'cup': 'cangkir',
    'fork': 'garpu',
    'knife': 'pisau',
    'spoon': 'sendok',
    'bowl': 'mangkuk',
    'banana': 'pisang',
    'apple': 'apel',
    'sandwich': 'roti lapis',
    'orange': 'jeruk',
    'broccoli': 'brokoli',
    'carrot': 'wortel',
    'hot dog': 'hot dog',
    'pizza': 'pizza',
    'donut': 'donat',
    'cake': 'kue',
    'chair': 'kursi',
    'couch': 'sofa',
    'potted plant': 'tanaman pot',
    'bed': 'tempat tidur',
    'dining table': 'meja makan',
    'toilet': 'toilet',
    'tv': 'TV',
    'laptop': 'laptop',
    'mouse': 'mouse',
    'remote': 'remote',
    'keyboard': 'keyboard',
    'cell phone': 'ponsel',
    'microwave': 'microwave',
    'oven': 'oven',
    'toaster': 'pemanggang roti',
    'sink': 'wastafel',
    'refrigerator': 'kulkas',
    'book': 'buku',
    'clock': 'jam',
    'vase': 'vas',
    'scissors': 'gunting',
    'teddy bear': 'boneka beruang',
    'hair drier': 'pengering rambut',
    'toothbrush': 'sikat gigi'
};

function translateToIndonesian(englishWord) {
    return translationDict[englishWord.toLowerCase()] || englishWord;
}