# cleanup last version
rm -rf __deployme
mkdir __deployme

# dump the database
sh scripts/dump.sh

# build
sh scripts/build.sh

# minify js
cp bundle.js __deployme/bundle.js
# minify css
cp bundle.css __deployme/bundle.css

# copy html and images
cp index.html __deployme/index.html
cp -r images/ __deployme/images/

# done
date; echo;

