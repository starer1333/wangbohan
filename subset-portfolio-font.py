from pathlib import Path
import sys,json
base=Path(__file__).resolve().parent
sys.path.insert(0,str(base/'tmp/font-subset-tools'))
from fontTools import subset
from fontTools.ttLib import TTFont

files=['index.html','research-preview.html','research-data.js','project-stories.js','project-evidence.js','internship-experience.js','personal-home.js','research-preview.js']
corpus=''.join((base/f).read_text(encoding='utf8') for f in files)
font=TTFont(base/'assets/SourceHanSerifCN-VF.woff2')
original=set(font.getBestCmap())
wanted={ord(c) for c in corpus}|set(range(32,127))
supported=wanted&original
options=subset.Options()
options.name_IDs=['*']
options.name_legacy=True
options.name_languages=['*']
subsetter=subset.Subsetter(options=options)
subsetter.populate(unicodes=supported)
subsetter.subset(font)
for record in font['name'].names:
    names={1:'Bohan Portfolio Serif',2:'Regular',3:'BohanPortfolioSerif-Subset',4:'Bohan Portfolio Serif',6:'BohanPortfolioSerif',16:'Bohan Portfolio Serif',17:'Regular'}
    if record.nameID in names:
        record.string=names[record.nameID].encode(record.getEncoding(),errors='replace')
font.flavor='woff2'
target=base/'assets/PortfolioSerifCN.woff2'
font.save(target)
check=TTFont(target)
missing=supported-set(check.getBestCmap())
if missing:raise RuntimeError('Subset lost requested glyphs')
print(json.dumps({'sourceBytes':(base/'assets/SourceHanSerifCN-VF.woff2').stat().st_size,'subsetBytes':target.stat().st_size,'glyphs':len(supported),'missing':len(missing),'output':str(target)}))
