import sys

with open('src/components/Layout.jsx', 'r') as f:
    lines = f.readlines()

# Mobile Nav Swap (first because it doesn't shift earlier lines)
# About: 451 to 463 (0-indexed) => Lines 452-464
# Blank line: 464 => Line 465
# Corporate: 465 to 478 (0-indexed) => Lines 466-479
# We want: Corporate, Blank, About
mobile_about = lines[451:464]
mobile_blank = lines[464:465]
mobile_corporate = lines[465:479]

lines[451:479] = mobile_corporate + mobile_blank + mobile_about

# Desktop Nav Swap
# About: 218 to 316 (0-indexed) => Lines 219-317
# Blank: 317 => Line 318
# Corporate: 318 to 401 (0-indexed) => Lines 319-402
# We want: Corporate, Blank, About
desktop_about = lines[218:317]
desktop_blank = lines[317:318]
desktop_corporate = lines[318:401]

lines[218:401] = desktop_corporate + desktop_blank + desktop_about

with open('src/components/Layout.jsx', 'w') as f:
    f.writelines(lines)

print("Swapped successfully.")
