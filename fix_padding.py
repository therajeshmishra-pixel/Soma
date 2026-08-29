import glob

for file_path in glob.glob('src/pages/programs/*.jsx'):
    with open(file_path, 'r') as f:
        content = f.read()
    
    # 1. Main box padding
    content = content.replace(
        'className="bg-white/5 p-16 lg:p-20 rounded-[64px] border border-white/10 backdrop-blur-md"',
        'className="bg-white/5 p-8 sm:p-12 lg:p-20 rounded-[40px] sm:rounded-[64px] border border-white/10 backdrop-blur-md"'
    )
    
    # 2. Top header flex
    content = content.replace(
        'className="flex items-center gap-8 mb-16"',
        'className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 sm:gap-8 mb-12 sm:mb-16"'
    )
    
    # 3. Inner box padding
    content = content.replace(
        'className="bg-white/5 p-10 rounded-[40px] border border-stone-800/50"',
        'className="bg-white/5 p-6 sm:p-10 rounded-[32px] sm:rounded-[40px] border border-stone-800/50"'
    )
    
    # 4. Bottom row flex
    content = content.replace(
        'className="flex items-center gap-16 pl-6"',
        'className="flex flex-col sm:flex-row items-center sm:items-center gap-8 sm:gap-16 pl-0 sm:pl-6 text-center sm:text-left"'
    )
    
    # 5. Fix hidden divider on mobile
    content = content.replace(
        '<div className="w-px h-16 bg-white/10" />',
        '<div className="hidden sm:block w-px h-16 bg-white/10" />'
    )
    
    # 6. Overall section padding (just in case it's too tight)
    content = content.replace(
        'className="py-20 lg:py-24 bg-[#1A3329] px-8 lg:px-16 rounded-[80px] mx-6 lg:mx-10 text-white overflow-hidden relative shadow-2xl"',
        'className="py-16 sm:py-20 lg:py-24 bg-[#1A3329] px-6 sm:px-8 lg:px-16 rounded-[40px] sm:rounded-[80px] mx-4 sm:mx-6 lg:mx-10 text-white overflow-hidden relative shadow-2xl"'
    )

    with open(file_path, 'w') as f:
        f.write(content)

print("Done")
